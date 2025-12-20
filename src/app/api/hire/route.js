import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
    try {
        const { name, email, budget, message, projectType } = await req.json();

        // Validate input
        if (!name || !email || !message) {
            return NextResponse.json(
                { message: 'Missing required fields' },
                { status: 400 }
            );
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail', // Standard for many personal portfolios, though SMTP is better
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER, // Sending to yourself
            replyTo: email,
            subject: `New Project Inquiry from ${name}`,
            text: `
Name: ${name}
Email: ${email}
Project Type: ${projectType || 'Not specified'}
Budget: ${budget || 'Not specified'}

Message:
${message}
            `,
            html: `
<h3>New Project Inquiry</h3>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Project Type:</strong> ${projectType || 'Not specified'}</p>
<p><strong>Budget:</strong> ${budget || 'Not specified'}</p>
<br/>
<p><strong>Message:</strong></p>
<p style="white-space: pre-wrap;">${message}</p>
            `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { message: 'Failed to send email' },
            { status: 500 }
        );
    }
}
