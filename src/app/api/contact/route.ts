import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, phone, projectType, message } = await req.json();

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    await resend.emails.send({
      from: "iQONEX Contact <contact@theiqonex.com>",
      to: "theiqonex@gmail.com",
      replyTo: email,
      subject: `New message from ${name} — iQONEX`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #f0ede8;">
          <div style="background: #111110; padding: 24px; border-radius: 12px; margin-bottom: 24px;">
            <h1 style="color: white; font-size: 24px; margin: 0;">
              New Contact from <span style="color: #f97316;">iQONEX</span>
            </h1>
          </div>

          <div style="background: white; padding: 24px; border-radius: 12px; border: 1px solid rgba(0,0,0,0.05);">
            <table style="width: 100%; border-collapse: collapse;">
              <tr style="border-bottom: 1px solid #f0ede8;">
                <td style="padding: 12px 0; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: #888; width: 120px;">Name</td>
                <td style="padding: 12px 0; font-size: 14px; color: #2a2a2a; font-weight: 600;">${name}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f0ede8;">
                <td style="padding: 12px 0; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: #888;">Email</td>
                <td style="padding: 12px 0; font-size: 14px; color: #f97316;">
                  <a href="mailto:${email}" style="color: #f97316;">${email}</a>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #f0ede8;">
                <td style="padding: 12px 0; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: #888;">Phone</td>
                <td style="padding: 12px 0; font-size: 14px; color: #2a2a2a;">${phone || "Not provided"}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f0ede8;">
                <td style="padding: 12px 0; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: #888;">Project Type</td>
                <td style="padding: 12px 0; font-size: 14px; color: #2a2a2a;">${projectType}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: #888; vertical-align: top;">Message</td>
                <td style="padding: 12px 0; font-size: 14px; color: #2a2a2a; line-height: 1.6;">${message}</td>
              </tr>
            </table>
          </div>

          <div style="text-align: center; margin-top: 24px;">
            <a href="mailto:${email}" style="background: #f97316; color: white; padding: 12px 24px; border-radius: 999px; font-size: 11px; font-weight: 700; letter-spacing: 0.15em; text-decoration: none; text-transform: uppercase;">
              Reply to ${name} →
            </a>
          </div>

          <p style="text-align: center; font-size: 11px; color: #aaa; margin-top: 24px;">
            This email was sent from the iQONEX contact form.
          </p>
        </div>
      `,
    });

    // Send confirmation to CLIENT
    await resend.emails.send({
      from: "iQONEX <contact@theiqonex.com>",
      to: email,
      subject: "We received your message — iQONEX",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #f0ede8;">
          
          <div style="background: #111110; padding: 24px; border-radius: 12px; margin-bottom: 24px;">
            <h1 style="color: white; font-size: 24px; margin: 0;">
              Thank you for contacting 
              <span style="color: #f97316;">iQONEX</span>
            </h1>
          </div>

          <div style="background: white; padding: 24px; border-radius: 12px;">
            <p style="font-size: 15px; color: #2a2a2a; line-height: 1.7;">
              Hi ${name},
            </p>

            <p style="font-size: 15px; color: #2a2a2a; line-height: 1.7;">
              We received your message successfully.
            </p>

            <p style="font-size: 15px; color: #2a2a2a; line-height: 1.7;">
              Our team will review your inquiry and get back to you as soon as possible.
            </p>

            <div style="margin-top: 24px; padding: 20px; background: #faf8f5; border-radius: 12px;">
              <p style="margin: 0; font-size: 13px; color: #666;">
                <strong>Project Type:</strong> ${projectType}
              </p>
            </div>
          </div>

          <p style="text-align: center; font-size: 11px; color: #aaa; margin-top: 24px;">
            © the iqonex — Modern Digital Experiences
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
