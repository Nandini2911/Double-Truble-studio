export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import nodemailer from "nodemailer";

function escHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, company, service, message } = body ?? {};

    if (!name || !email || !message) {
      return Response.json(
        { ok: false, error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT || 465);
    const user = process.env.SMTP_USER;
    // ✅ Trim to avoid hidden whitespace issues in production env
    const pass = (process.env.SMTP_PASS || "").trim();
    const toEmail = process.env.CONTACT_TO || user;

    if (!host || !user || !pass || !toEmail) {
      console.error("Missing SMTP env", {
        SMTP_HOST: !!host,
        SMTP_PORT: process.env.SMTP_PORT,
        SMTP_USER: !!user,
        SMTP_PASS: !!pass,
        CONTACT_TO: !!process.env.CONTACT_TO,
      });
      return Response.json(
        { ok: false, error: "Server email configuration missing." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465, // 465 true, 587 false
      auth: { user, pass },
    });

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
      { ok: false, error: err?.message || "Failed to send email." },
      { status: 500 }
    );
  }
}
