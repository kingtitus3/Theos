import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";
import { CONTACT_INFO } from "@/lib/constants";

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

const giveawaySchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(1),
  partnerName: z.string().optional(),
  preferredDate: z.string().optional(),
  instagramHandle: z.string().optional(),
  howDidYouHear: z.string().optional(),
  agreeToTerms: z.boolean(),
});

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const parsed = giveawaySchema.parse(data);

    if (!parsed.agreeToTerms) {
      return NextResponse.json({ error: "You must agree to the terms" }, { status: 400 });
    }

    const resendClient = getResendClient();

    // Send confirmation email to entrant
    await resendClient.emails.send({
      from: "Titus at Theos <bookings@theosgalveston.com>",
      to: parsed.email,
      replyTo: CONTACT_INFO.email,
      subject: "🎉 You're Entered in Theos Bridal Giveaway!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #8B4513; border-bottom: 2px solid #D4AF37; padding-bottom: 10px;">
            🎉 You're Entered!
          </h2>
          <p>Hi ${parsed.firstName},</p>
          <p>Thank you for entering Theos Bridal Giveaway! We're so excited for you.</p>
          <p>Your entry has been confirmed. Good luck!</p>
          <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #333;">Your Entry Details</h3>
            <p><strong>Name:</strong> ${parsed.firstName} ${parsed.lastName}</p>
            <p><strong>Email:</strong> ${parsed.email}</p>
            <p><strong>Phone:</strong> ${parsed.phone}</p>
            ${parsed.partnerName ? `<p><strong>Partner:</strong> ${parsed.partnerName}</p>` : ""}
            ${parsed.preferredDate ? `<p><strong>Preferred Date:</strong> ${parsed.preferredDate}</p>` : ""}
            ${parsed.instagramHandle ? `<p><strong>Instagram:</strong> ${parsed.instagramHandle}</p>` : ""}
          </div>
          <p>We'll announce the winner soon. Make sure you're following us on Instagram for updates!</p>
          <p style="color: #666; font-size: 14px; margin-top: 30px; border-top: 1px solid #ddd; padding-top: 20px;">
            <strong>Theos Event Venue</strong><br>
            ${CONTACT_INFO.addressLine}<br>
            <a href="https://theosgalveston.com" style="color: #8B4513;">theosgalveston.com</a>
          </p>
        </div>
      `,
    });

    // Send notification email to venue owner
    await resendClient.emails.send({
      from: "Theos Giveaway <bookings@theosgalveston.com>",
      to: CONTACT_INFO.email,
      replyTo: parsed.email,
      subject: `🎉 New Giveaway Entry: ${parsed.firstName} ${parsed.lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #8B4513; border-bottom: 2px solid #D4AF37; padding-bottom: 10px;">
            New Giveaway Entry
          </h2>
          <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #333;">Entry Details</h3>
            <p><strong>Name:</strong> ${parsed.firstName} ${parsed.lastName}</p>
            <p><strong>Email:</strong> <a href="mailto:${parsed.email}">${parsed.email}</a></p>
            <p><strong>Phone:</strong> <a href="tel:${parsed.phone}">${parsed.phone}</a></p>
            ${parsed.partnerName ? `<p><strong>Partner:</strong> ${parsed.partnerName}</p>` : ""}
            ${parsed.preferredDate ? `<p><strong>Preferred Date:</strong> ${parsed.preferredDate}</p>` : ""}
            ${parsed.instagramHandle ? `<p><strong>Instagram:</strong> ${parsed.instagramHandle}</p>` : ""}
            ${parsed.howDidYouHear ? `<p><strong>How they heard:</strong> ${parsed.howDidYouHear}</p>` : ""}
          </div>
          <p style="color: #666; font-size: 14px; margin-top: 30px; border-top: 1px solid #ddd; padding-top: 20px;">
            <strong>Theos Event Venue</strong><br>
            ${CONTACT_INFO.addressLine}<br>
            <a href="https://theosgalveston.com" style="color: #8B4513;">theosgalveston.com</a>
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Giveaway entry error:", error);
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: "Invalid form data", details: error.flatten() }, { status: 400 });
    }
    return NextResponse.json({ error: "Failed to submit entry" }, { status: 500 });
  }
}

