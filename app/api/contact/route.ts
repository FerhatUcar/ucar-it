import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { contactSchema } from "@/lib/contact";

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
  const result = contactSchema.safeParse(body);
  if (!result.success) {
    return NextResponse.json({ error: "Please check the form fields." }, { status: 400 });
  }
  if (!process.env.EMAIL || !process.env.PASSWORD) {
    return NextResponse.json({ error: "Email is currently unavailable." }, { status: 503 });
  }
  const { name, email, subject, message } = result.data;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL,
    replyTo: email,
    to: process.env.EMAIL,
    subject: "New Contact Form Submission",
    text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Message could not be sent." }, { status: 502 });
  }
}
