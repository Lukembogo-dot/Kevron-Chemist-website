import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// For quick setup: use Gmail with app password
// Or replace with: SendGrid, Brevo, or any email service

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // Your email
    pass: process.env.EMAIL_PASSWORD, // App password
  },
});

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, message } = await request.json();

    // Send confirmation to customer
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for contacting Kevron Chemist',
      html: `
        <h2>Thank you, ${name}!</h2>
        <p>We received your message and will get back to you within 2 hours.</p>
        <p>Your Reference: ${Date.now()}</p>
      `,
    });

    // Send notification to pharmacy
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New contact from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 });
  }
}