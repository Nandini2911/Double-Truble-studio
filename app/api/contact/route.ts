export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import nodemailer from "nodemailer";

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

    // ✅ ENV guard (production me missing ho to clear error milega)
    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT || 465);
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;

    if (!host || !user || !pass) {
      console.error("Missing SMTP env", {
        SMTP_HOST: !!host,
        SMTP_USER: !!user,
        SMTP_PASS: !!pass,
        SMTP_PORT: process.env.SMTP_PORT,
      });
      return Response.json(
        { ok: false, error: "Server email configuration missing (SMTP env)." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465, // ✅ 465 true, 587 false
      auth: { user, pass },
    });

    // ✅ verify in production (helps catch auth/host issues)
    await transporter.verify();

    const toEmail = process.env.CONTACT_TO || user;

    const subject = `New Enquiry: ${service || "Contact Form"} — ${name}`;

    const text = `
New enquiry received

Name: ${name}
Email: ${email}
Company: ${company || "-"}
Service: ${service || "-"}

Message:
${message}
    `.trim();

    await transporter.sendMail({
      from: `"Double Trouble Studio" <${user}>`,
      to: toEmail,
      replyTo: email,
      subject,
      text,
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
