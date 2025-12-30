// app/api/contact/route.ts
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import nodemailer from "nodemailer";

function escHtml(s: string) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function errToString(err: any) {
  return (
    err?.message ||
    err?.response ||
    err?.code ||
    (typeof err === "string" ? err : JSON.stringify(err))
  );
}

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => null);
    const { name, email, company, service, message } = body ?? {};

    if (!name || !email || !message) {
      return Response.json(
        { ok: false, error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const host = process.env.SMTP_HOST || "smtp.gmail.com";

    // Default to 587 for Vercel
    const port = Number(process.env.SMTP_PORT || 587);

    const user = process.env.SMTP_USER;

    // ✅ remove hidden whitespace + internal spaces (Gmail app password)
    const pass = (process.env.SMTP_PASS || "").trim().replace(/\s+/g, "");

    const toEmail = process.env.CONTACT_TO || user;

    if (!user || !pass || !toEmail) {
      console.error("Missing SMTP env", {
        SMTP_HOST: host,
        SMTP_PORT: port,
        SMTP_USER: !!user,
        SMTP_PASS: !!pass,
        CONTACT_TO: !!process.env.CONTACT_TO,
      });

      return Response.json(
        { ok: false, error: "Server email configuration missing." },
        { status: 500 }
      );
    }

    // Try STARTTLS (587) first. If your env is 465, it still works via secure flag below.
    const primary = nodemailer.createTransport({
      host,
      port,
      secure: port === 465, // 465 => true, 587 => false
      auth: { user, pass },
      tls: {
        minVersion: "TLSv1.2",
      },
    });

    // Optional fallback (helps if port is blocked/unsupported)
    const fallback = nodemailer.createTransport({
      host,
      port: 465,
      secure: true,
      auth: { user, pass },
      tls: {
        minVersion: "TLSv1.2",
      },
    });

    // ✅ verify with better error
    const tryVerify = async (t: nodemailer.Transporter, label: string) => {
      try {
        await t.verify();
        return { ok: true as const, transporter: t, label };
      } catch (e) {
        console.error(`SMTP VERIFY FAILED (${label}):`, e);
        return { ok: false as const, error: e };
      }
    };

    const v1 = await tryVerify(primary, `primary:${host}:${port}`);
    const v2 = v1.ok ? null : await tryVerify(fallback, `fallback:${host}:465`);

    const chosen = v1.ok ? v1 : v2;

    if (!chosen || !chosen.ok) {
      const msg = errToString((chosen as any)?.error);
      // ✅ Surface real reason to client for debugging
      return Response.json(
        {
          ok: false,
          error: `SMTP verification failed: ${msg}`,
          hint:
            "Check Gmail App Password (no spaces), 2FA enabled, and try SMTP_PORT=587 on Vercel.",
        },
        { status: 500 }
      );
    }

    const transporter = chosen.transporter;

    const safeName = String(name).trim();
    const safeEmail = String(email).trim();
    const safeCompany = String(company || "-").trim();
    const safeService = String(service || "General").trim();
    const safeMessage = String(message).trim();

    const subject = `DTS Website Enquiry — ${safeName} (${safeService})`;

    const text = `
New enquiry received (DTS Website)

Name: ${safeName}
Email: ${safeEmail}
Company: ${safeCompany}
Service: ${safeService}

Message:
${safeMessage}
    `.trim();

    const html = `
      <div style="font-family:Arial,sans-serif; line-height:1.5; color:#111;">
        <h2 style="margin:0 0 12px;">New enquiry received (DTS Website)</h2>
        <table cellpadding="0" cellspacing="0" style="border-collapse:collapse; width:100%; max-width:640px;">
          <tr><td style="padding:6px 0;"><b>Name:</b> ${escHtml(safeName)}</td></tr>
          <tr><td style="padding:6px 0;"><b>Email:</b> ${escHtml(safeEmail)}</td></tr>
          <tr><td style="padding:6px 0;"><b>Company:</b> ${escHtml(safeCompany)}</td></tr>
          <tr><td style="padding:6px 0;"><b>Service:</b> ${escHtml(safeService)}</td></tr>
        </table>
        <div style="margin-top:14px; padding:12px; border:1px solid #eee; border-radius:10px;">
          <b>Message:</b><br/>
          ${escHtml(safeMessage).replace(/\n/g, "<br/>")}
        </div>
        <p style="margin-top:14px; font-size:12px; color:#666;">
          Replying to this email will respond directly to the sender (Reply-To is set).
        </p>
      </div>
    `;

    const info = await transporter.sendMail({
      from: `"Double Trouble Studio" <${user}>`,
      to: toEmail,
      replyTo: safeEmail,
      subject,
      text,
      html,
    });

    console.log("MAIL SENT:", {
      via: chosen.label,
      to: toEmail,
      messageId: info.messageId,
      accepted: info.accepted,
      rejected: info.rejected,
      response: info.response,
    });

    return Response.json({ ok: true });
  } catch (err: any) {
    console.error("CONTACT API ERROR:", err?.message || err, err);
    return Response.json(
      { ok: false, error: errToString(err) || "Failed to send email." },
      { status: 500 }
    );
  }
}
