import { NextRequest, NextResponse } from "next/server";
import nodemailer from 'nodemailer';

export async function POST(res: NextRequest) {
  const body = await res.json();
  const { name, email, message } = body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL,
    subject: 'New Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  await transporter.sendMail(mailOptions);

  return NextResponse.json(body, { status: 201 });
}
