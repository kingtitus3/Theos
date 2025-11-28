import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";
import { CONTACT_INFO } from "@/lib/constants";
import { appendNewsletterEmail } from "@/lib/googleSheets";

// Lazy initialize Resend to avoid build errors if API key is missing at build time
let resend: Resend | null = null;
function getResendClient() {
  if (!resend) {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      throw new Error("RESEND_API_KEY is not configured.");
    }
    resend = new Resend(apiKey);
  }
  return resend;
}

const newsletterSchema = z.object({
  email: z.string().email(),
});

// Generate a unique discount code
function generateDiscountCode(): string {
  const prefix = "THEOS5";
  const random = Math.random().toString(36).substring(2, 8).toUpperCase();
  return `${prefix}${random}`;
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const parsed = newsletterSchema.parse(data);

    const resendClient = getResendClient();
    const discountCode = generateDiscountCode();

    // Add email to Google Sheets (non-blocking)
    try {
      await appendNewsletterEmail({
        email: parsed.email,
        discountCode: discountCode,
        timestamp: new Date().toISOString(),
      });
      console.log(`✅ Newsletter entry added to Google Sheets for ${parsed.email}`);
    } catch (error: any) {
      console.error("❌ Failed to add email to Google Sheets (non-critical):", error);
      console.error("Error details:", error.response?.data || error.message);
    }

    // Send discount code email
    await resendClient.emails.send({
      from: "Titus at Theos <bookings@theosgalveston.com>",
      to: parsed.email,
      replyTo: CONTACT_INFO.email,
      subject: "🎉 Your 5% Discount Code + Giveaway Entry Confirmed!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #8B4513; border-bottom: 2px solid #D4AF37; padding-bottom: 10px;">
            🎉 Thank You for Signing Up!
          </h2>
          <p>Hi there,</p>
          <p>Thank you for signing up for Theos newsletter! You&apos;re now entered into our giveaway for a <strong>FREE wedding venue rental</strong>.</p>
          
          <div style="background: #f9f9f9; border-left: 4px solid #D4AF37; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #333;">Your 5% Discount Code</h3>
            <p style="font-size: 24px; font-weight: bold; color: #8B4513; letter-spacing: 2px; margin: 10px 0;">
              ${discountCode}
            </p>
            <p style="color: #666; font-size: 14px; margin-bottom: 0;">
              Use this code when booking to save 5% on your event rental. Valid for any booking through 2026.
            </p>
          </div>

          <div style="background: #e8f4f8; border-left: 4px solid #8B4513; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #333;">🎁 Giveaway Entry Confirmed</h3>
            <p style="color: #666; font-size: 14px; margin-bottom: 0;">
              You&apos;re automatically entered to win a <strong>FREE Friday or Sunday wedding venue rental</strong> at Theos! 
              Winner will be announced soon. <a href="https://theosgalveston.com/giveaway" style="color: #8B4513;">Learn more about the giveaway</a>.
            </p>
          </div>

          <p>We&apos;ll send you updates about:</p>
          <ul style="color: #666;">
            <li>Giveaway winner announcement</li>
            <li>Special offers and promotions</li>
            <li>New photos and venue updates</li>
            <li>Event planning tips</li>
          </ul>

          <p style="color: #666; font-size: 14px; margin-top: 30px; border-top: 1px solid #ddd; padding-top: 20px;">
            <strong>Theos Event Venue</strong><br>
            ${CONTACT_INFO.addressLine}<br>
            <a href="https://theosgalveston.com" style="color: #8B4513;">theosgalveston.com</a>
          </p>
        </div>
      `,
    });

    // Send notification to venue owner
    await resendClient.emails.send({
      from: "Theos Newsletter <bookings@theosgalveston.com>",
      to: CONTACT_INFO.email,
      replyTo: parsed.email,
      subject: `📧 New Newsletter Signup: ${parsed.email}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #8B4513; border-bottom: 2px solid #D4AF37; padding-bottom: 10px;">
            New Newsletter Signup
          </h2>
          <p><strong>Email:</strong> <a href="mailto:${parsed.email}">${parsed.email}</a></p>
          <p><strong>Discount Code:</strong> ${discountCode}</p>
          <p style="color: #666; font-size: 14px; margin-top: 30px; border-top: 1px solid #ddd; padding-top: 20px;">
            <strong>Theos Event Venue</strong><br>
            ${CONTACT_INFO.addressLine}<br>
            <a href="https://theosgalveston.com" style="color: #8B4513;">theosgalveston.com</a>
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, discountCode });
  } catch (error) {
    console.error("Newsletter signup error:", error);
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: "Invalid email address", details: error.flatten() }, { status: 400 });
    }
    return NextResponse.json({ error: "Failed to submit email" }, { status: 500 });
  }
}

