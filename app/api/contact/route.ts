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

    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT || 465);
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;

    if (!host || !user || !pass) {
      console.error("Missing SMTP env", {
        SMTP_HOST: !!host,
        SMTP_PORT: process.env.SMTP_PORT,
        SMTP_USER: !!user,
        SMTP_PASS: !!pass,
      });
      return Response.json(
        { ok: false, error: "Server email configuration missing." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    });

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

    const info = await transporter.sendMail({
      from: `"Double Trouble Studio" <${user}>`,
      to: toEmail,
      replyTo: email,
      subject,
      text,
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
