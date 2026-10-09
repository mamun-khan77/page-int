// Serverless function for Vercel / serverless deployments
export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { fullName, company, phone, email, subject, message } = req.body || {};

    if (!fullName || !email || !phone || !subject || !message) {
      return res.status(400).json({ error: 'Missing required form fields.' });
    }

    const apiKey = process.env.VITE_RESEND_API_KEY || process.env.RESEND_API_KEY;
    const toEmail = process.env.RESEND_TO_EMAIL || 'mamun.glafit@gmail.com';

    if (!apiKey) {
      return res.status(500).json({ error: 'Resend API key is not configured.' });
    }

    const emailHtml = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
        <div style="border-bottom: 2px solid #dc2626; padding-bottom: 16px; margin-bottom: 20px;">
          <h2 style="color: #0a1c2f; margin: 0 0 6px 0; font-size: 22px;">PAGE International Ltd.</h2>
          <p style="color: #64748b; margin: 0; font-size: 14px;">New Contact Form Message</p>
        </div>

        <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="padding: 10px 0; font-weight: 600; width: 130px; color: #475569; font-size: 14px;">Full Name:</td>
            <td style="padding: 10px 0; color: #0f172a; font-size: 14px; font-weight: 600;">${fullName}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="padding: 10px 0; font-weight: 600; color: #475569; font-size: 14px;">Company:</td>
            <td style="padding: 10px 0; color: #0f172a; font-size: 14px;">${company || 'Not Specified'}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="padding: 10px 0; font-weight: 600; color: #475569; font-size: 14px;">Email:</td>
            <td style="padding: 10px 0; color: #0f172a; font-size: 14px;"><a href="mailto:${email}" style="color: #dc2626; text-decoration: none; font-weight: 500;">${email}</a></td>
          </tr>
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="padding: 10px 0; font-weight: 600; color: #475569; font-size: 14px;">Phone:</td>
            <td style="padding: 10px 0; color: #0f172a; font-size: 14px;"><a href="tel:${phone}" style="color: #0f172a; text-decoration: none;">${phone}</a></td>
          </tr>
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="padding: 10px 0; font-weight: 600; color: #475569; font-size: 14px;">Subject:</td>
            <td style="padding: 10px 0; color: #0f172a; font-size: 14px; font-weight: 600;">${subject}</td>
          </tr>
        </table>

        <div style="background-color: #f8fafc; border-left: 4px solid #dc2626; padding: 18px; border-radius: 6px; margin-bottom: 24px;">
          <h4 style="margin: 0 0 10px 0; color: #1e293b; font-size: 14px;">Message Details:</h4>
          <p style="margin: 0; color: #334155; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
        </div>

        <div style="border-top: 1px solid #e2e8f0; padding-top: 16px; font-size: 12px; color: #94a3b8; text-align: center;">
          PAGE International Ltd. • Garage Equipment & Solutions Bangladesh • Sent via Resend API
        </div>
      </div>
    `;

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'PAGE International <onboarding@resend.dev>',
        to: [toEmail],
        reply_to: email,
        subject: `[Contact Form] ${subject} - ${fullName}`,
        html: emailHtml,
      }),
    });

    const resendData = await resendResponse.json();

    if (!resendResponse.ok) {
      return res.status(resendResponse.status).json({ error: resendData.message || 'Failed to send email via Resend' });
    }

    return res.status(200).json({ success: true, id: resendData.id });
  } catch (err: any) {
    return res.status(500).json({ error: err.message || 'Internal server error while sending message' });
  }
}
