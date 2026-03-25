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
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f8fafc; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
          <div style="background: linear-gradient(135deg, #3B82F6 0%, #1E3A8A 100%); padding: 30px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 28px;">Kevron Chemist 💊</h1>
            <p style="color: #bfdbfe; margin-top: 10px; font-size: 16px;">Your Health, Our Priority</p>
          </div>
          <div style="padding: 30px; background-color: white;">
            <h2 style="color: #1e293b; margin-top: 0;">Hi ${name}! 👋</h2>
            <p style="color: #475569; line-height: 1.6; font-size: 16px;">
              Thank you for reaching out to us! We've successfully received your message and our pharmacy team is already on it.
            </p>
            <div style="background-color: #eff6ff; border-left: 4px solid #3b82f6; padding: 15px; margin: 25px 0; border-radius: 4px;">
              <p style="color: #1e3a8a; margin: 0; font-weight: 500; font-size: 15px;">
                ✨ <strong>Fun Fact:</strong> Did you know laughter boosts your immune system? While you wait for our reply, make sure to share a smile with someone today! 😄
              </p>
            </div>
            <p style="color: #475569; line-height: 1.6; font-size: 16px;">
              Whether you need help with a prescription, medical advice, or just general info, we are dedicated to providing you with the best care possible. We will get back to you very soon!
            </p>
            <br/>
            <p style="color: #475569; font-size: 16px; margin-bottom: 5px;">Stay healthy and happy,</p>
            <p style="color: #1e3a8a; font-weight: bold; font-size: 18px; margin-top: 0;">The Kevron Chemist Team 💙</p>
          </div>
          <div style="background-color: #f1f5f9; padding: 15px; text-align: center; color: #64748b; font-size: 12px;">
            <p style="margin: 0;">Kevron Chemist - Nairobi, Kenya | We care for you.</p>
            <p style="margin: 5px 0 0 0;">Reference Ticket: #${Date.now().toString().slice(-6)}</p>
          </div>
        </div>
      `,
    });

    // Send notification to pharmacy
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email,
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