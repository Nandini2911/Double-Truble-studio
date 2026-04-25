import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { type, name, email, company, service, message } = body;

    // 🔍 DEBUG ENV (remove later)
    console.log("SMTP_USER:", process.env.SMTP_USER);
    console.log("SMTP_PASS:", process.env.SMTP_PASS ? "Loaded ✅" : "Missing ❌");

    // ❗ Validate env first
    if (
      !process.env.SMTP_HOST ||
      !process.env.SMTP_PORT ||
      !process.env.SMTP_USER ||
      !process.env.SMTP_PASS ||
      !process.env.CONTACT_TO
    ) {
      throw new Error("Missing SMTP environment variables");
    }

    // ✅ transporter (correct config)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false, // use false for 587
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // 🔍 verify connection (IMPORTANT)
    await transporter.verify();
    console.log("SMTP connection successful ✅");

    const subject =
      type === "hero"
        ? "🔥 Enquiry for DTS"
        : "📩 Contact Form Submission";

    const htmlContent = `
      <div style="font-family:sans-serif">
        <h2>${type === "hero" ? "Enquiry for DTS " : "📩 Contact Form"}</h2>

        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Brand:</b> ${company}</p>
        <p><b>Service:</b> ${service}</p>
        <p><b>Message:</b> ${message}</p>
      </div>
    `;

    await transporter.sendMail({
      from: `"DTS Website" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO,
      subject,
      html: htmlContent,
    });

    console.log("Email sent successfully 🚀");

    return Response.json({ ok: true });
  } catch (error: any) {
    console.error("FULL MAIL ERROR:", error);

    return Response.json({
      ok: false,
      error: error?.message || "Email failed",
    });
  }
}