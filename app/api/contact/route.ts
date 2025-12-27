import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, company, service, message } = body ?? {};

    // basic validation
    if (!name || !email || !message) {
      return Response.json(
        { ok: false, error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 465),
      secure: true, // 465 = true
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const toEmail = process.env.CONTACT_TO || process.env.SMTP_USER;

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

    // IMPORTANT:
    // From = aapka SMTP_USER (fixed)
    // To = aapka CONTACT_TO (aap)
    // Reply-To = user ka email (taaki aap reply dabao toh user ko chala jaye)
    await transporter.sendMail({
      from: `"Double Trouble Studio" <${process.env.SMTP_USER}>`,
      to: toEmail,
      replyTo: email,
      subject,
      text,
    });

    return Response.json({ ok: true });
  } catch (err: any) {
    console.error(err);
    return Response.json(
      { ok: false, error: "Failed to send email." },
      { status: 500 }
    );
  }
}
