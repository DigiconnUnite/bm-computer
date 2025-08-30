import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

type ContactPayload = {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  service?: string;
  budget?: string;
  message: string; 
  computerType?: string;
  urgency?: string;
};

function isValidEmail(email: string): boolean {
  return /.+@.+\..+/.test(email);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<ContactPayload>;

    const required = ['name', 'email', 'subject', 'message'] as const;
    for (const key of required) {
      if (!body[key] || String(body[key]).trim() === '') {
        return NextResponse.json({ error: `${key} is required` }, { status: 400 });
      }
    }

    if (!isValidEmail(String(body.email))) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
    }

    const adminEmail = process.env.CONTACT_ADMIN_EMAIL;
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 587;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const fromEmail = process.env.SMTP_FROM || smtpUser;

    if (!adminEmail || !smtpHost || !smtpUser || !smtpPass || !fromEmail) {
      return NextResponse.json(
        { error: 'Email is not configured on the server' },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: { user: smtpUser, pass: smtpPass },
    });

    const payload: ContactPayload = {
      name: String(body.name),
      email: String(body.email),
      phone: body.phone ? String(body.phone) : '',
      subject: String(body.subject),
      service: body.service ? String(body.service) : '',
      budget: body.budget ? String(body.budget) : '',
      message: String(body.message),
      computerType: body.computerType ? String(body.computerType) : '',
      urgency: body.urgency ? String(body.urgency) : '',
    };

    const htmlSafe = (s: string) =>
      String(s)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');

    const adminHtml = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${htmlSafe(payload.name)}</p>
      <p><strong>Email:</strong> ${htmlSafe(payload.email)}</p>
      <p><strong>Phone:</strong> ${htmlSafe(payload.phone || '-')}</p>
      <p><strong>Subject:</strong> ${htmlSafe(payload.subject)}</p>
      <p><strong>Service:</strong> ${htmlSafe(payload.service || '-')}</p>
      <p><strong>Computer Type:</strong> ${htmlSafe(payload.computerType || '-')}</p>
      <p><strong>Urgency:</strong> ${htmlSafe(payload.urgency || '-')}</p>
      <p><strong>Budget:</strong> ${htmlSafe(payload.budget || '-')}</p>
      <p><strong>Message:</strong></p>
      <pre>${htmlSafe(payload.message)}</pre>
    `;

    const adminSubject = `[BM Computers] ${payload.subject} — ${payload.name}`;

    const userHtml = `
      <h2>Thanks for contacting BM Computers</h2>
      <p>Hi ${htmlSafe(payload.name)},</p>
      <p>We have received your message and will get back to you within 24 hours.</p>
      <p><strong>Your message summary:</strong></p>
      <ul>
        <li><strong>Subject:</strong> ${htmlSafe(payload.subject)}</li>
        <li><strong>Service:</strong> ${htmlSafe(payload.service || '-')}</li>
        <li><strong>Phone:</strong> ${htmlSafe(payload.phone || '-')}</li>
      </ul>
      <p><strong>Message:</strong></p>
      <pre>${htmlSafe(payload.message)}</pre>
      <p>— BM Computers</p>
    `;

    await transporter.sendMail({
      from: fromEmail,
      to: adminEmail,
      replyTo: payload.email,
      subject: adminSubject,
      html: adminHtml,
    });

    await transporter.sendMail({
      from: fromEmail,
      to: payload.email,
      subject: 'We received your message — BM Computers',
      html: userHtml,
    });

    return NextResponse.json({ ok: true });
  } catch (error: any) {
    console.error('Contact API error:', error);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}


