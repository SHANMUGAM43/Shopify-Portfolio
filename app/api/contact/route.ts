import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    // Basic server-side validation
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "Name, email and message are required." },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // SSL
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO_EMAIL,
      replyTo: email,
      subject: `[Portfolio] ${subject || "New message"} — from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0d0d0d; color: #f5f5f7; padding: 32px; border-radius: 12px;">
          <h2 style="color: #a855f7; margin: 0 0 24px;">New Contact Form Submission</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; color: #71717a; font-size: 13px; width: 100px;">Name</td>
              <td style="padding: 10px 0; color: #f5f5f7; font-size: 14px;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #71717a; font-size: 13px;">Email</td>
              <td style="padding: 10px 0; color: #f5f5f7; font-size: 14px;">
                <a href="mailto:${email}" style="color: #a855f7;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #71717a; font-size: 13px;">Subject</td>
              <td style="padding: 10px 0; color: #f5f5f7; font-size: 14px;">${subject || "—"}</td>
            </tr>
          </table>
          <hr style="border: none; border-top: 1px solid #262626; margin: 20px 0;" />
          <p style="color: #71717a; font-size: 13px; margin: 0 0 8px;">Message</p>
          <p style="color: #f5f5f7; font-size: 14px; line-height: 1.7; white-space: pre-wrap; margin: 0;">${message}</p>
          <hr style="border: none; border-top: 1px solid #262626; margin: 20px 0;" />
          <p style="color: #3f3f46; font-size: 12px; margin: 0;">
            Sent from shanmugam.dev portfolio contact form
          </p>
        </div>
      `,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject || "—"}\n\n${message}`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    const msg = error instanceof Error ? error.message : String(error);
    console.error("[Contact API]", msg);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later.", detail: process.env.NODE_ENV === "development" ? msg : undefined },
      { status: 500 }
    );
  }
}
