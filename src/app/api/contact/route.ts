import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // 1. Auto-reply to user
    await transporter.sendMail({
      from: `"Monarch TV Studios" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Your message has been received…",
      html: `
        <div style="background-color: #000; color: #ffcce9; padding: 40px; font-family: sans-serif; text-align: center; border: 2px solid #ffcce9;">
          <h1 style="font-size: 40px; margin-bottom: 20px;">👁️ We see you…</h1>
          <p style="font-size: 18px; line-height: 1.6;">
            Your message has entered our dark inbox.<br/>
            The shadows have carried your words, and they will be answered… soon.
          </p>
          <p style="font-size: 16px; margin-top: 30px; opacity: 0.7;">
            Until then, beware the silence.
          </p>
        </div>
      `,
    });

    // 2. Notification to Admin
    await transporter.sendMail({
      from: `"The Abyss" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      subject: "Someone has reached out from the abyss…",
      html: `
        <div style="background-color: #111; color: #fff; padding: 30px; font-family: sans-serif; border-left: 5px solid #ffcce9;">
          <h2 style="color: #ffcce9;">⚠️ A new soul has contacted you.</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <div style="background: #222; padding: 15px; border-radius: 5px; margin-top: 10px;">
            ${message}
          </div>
          <p style="margin-top: 20px; font-style: italic; opacity: 0.6;">
            Check your admin panel before the whispers fade. This is not a drill… someone is waiting.
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json({ success: false, error: 'The abyss is currently unreachable.' }, { status: 500 });
  }
}
