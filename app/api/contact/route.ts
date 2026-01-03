
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Basic HTML sanitization function
function sanitizeInput(str: string) {
    return str.replace(/<[^>]*>?/gm, '');
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, phone, service, message, country } = body;

        // Simple Validation
        if (!name || !email || !phone || !message) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Sanitize inputs
        const sanitizedData = {
            name: sanitizeInput(name),
            email: sanitizeInput(email),
            phone: sanitizeInput(phone),
            service: sanitizeInput(service || 'Not specified'),
            message: sanitizeInput(message),
            country: sanitizeInput(country || 'Unknown'),
        };

        // Configure Nodemailer Transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Email Content
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER, // Sending to yourself
            subject: `New Contact Form from ${sanitizedData.name} (${sanitizedData.country})`,
            html: `
                <h3>New Lead from Portfolio Website</h3>
                <p><strong>Name:</strong> ${sanitizedData.name}</p>
                <p><strong>Email:</strong> ${sanitizedData.email}</p>
                <p><strong>Phone:</strong> ${sanitizedData.phone}</p>
                <p><strong>Location:</strong> ${sanitizedData.country}</p>
                <p><strong>Service Interest:</strong> ${sanitizedData.service}</p>
                <br />
                <p><strong>Message:</strong></p>
                <p>${sanitizedData.message}</p>
            `,
        };

        // Send Email
        await transporter.sendMail(mailOptions);

        return NextResponse.json(
            { message: 'Email sent successfully' },
            { status: 200 }
        );

    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { error: 'Failed to send email' },
            { status: 500 }
        );
    }
}
