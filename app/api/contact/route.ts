import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactFormSchema } from "@/lib/validation";
import { CONTACT_INFO } from "@/lib/constants";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const data = await request.json();
  const parsed = contactFormSchema.safeParse(data);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid submission", details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const formData = parsed.data;

  try {
    // Send email to venue owner
    await resend.emails.send({
      from: "Theos Website <noreply@theos.live>",
      to: CONTACT_INFO.email,
      replyTo: formData.email,
      subject: `New Event Inquiry: ${formData.eventType} from ${formData.fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #8B4513; border-bottom: 2px solid #D4AF37; padding-bottom: 10px;">
            New Event Inquiry
          </h2>
          
          <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #333;">Contact Information</h3>
            <p><strong>Name:</strong> ${formData.fullName}</p>
            <p><strong>Email:</strong> <a href="mailto:${formData.email}">${formData.email}</a></p>
            ${formData.phone ? `<p><strong>Phone:</strong> <a href="tel:${formData.phone}">${formData.phone}</a></p>` : ""}
          </div>

          <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #333;">Event Details</h3>
            <p><strong>Event Type:</strong> ${formData.eventType}</p>
            ${formData.preferredDate ? `<p><strong>Preferred Date:</strong> ${formData.preferredDate}</p>` : ""}
            ${formData.guestCount ? `<p><strong>Guest Count:</strong> ${formData.guestCount}</p>` : ""}
            <p><strong>Loft Suite Interest:</strong> ${formData.loftSuite === "yes" ? "Yes" : formData.loftSuite === "no" ? "No" : "Undecided"}</p>
            ${formData.referral ? `<p><strong>How they heard about us:</strong> ${formData.referral}</p>` : ""}
          </div>

          <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #333;">Message</h3>
            <p style="white-space: pre-wrap;">${formData.message}</p>
          </div>

          <p style="margin-top: 30px; color: #666; font-size: 14px;">
            Reply directly to this email to respond to ${formData.fullName}.
          </p>
        </div>
      `,
    });

    // Send auto-reply to customer
    await resend.emails.send({
      from: "Theos <noreply@theos.live>",
      to: formData.email,
      subject: "Thank you for your inquiry – Theos Event Venue",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #8B4513; border-bottom: 2px solid #D4AF37; padding-bottom: 10px;">
            Thank you for your inquiry!
          </h2>
          
          <p>Hi ${formData.fullName},</p>
          
          <p>We received your inquiry about hosting a <strong>${formData.eventType}</strong> at Theos, and we're excited to help make your event special.</p>
          
          <p>Our team will review your details and get back to you within 24 hours with:</p>
          <ul>
            <li>Date availability for your preferred date</li>
            <li>Pricing information</li>
            <li>Tour scheduling options</li>
          </ul>

          <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #333;">Quick Facts About Theos</h3>
            <ul style="margin: 0; padding-left: 20px;">
              <li><strong>Size:</strong> 3,200 sq ft (80 × 40)</li>
              <li><strong>Capacity:</strong> Up to 180 guests standing, 120–140 seated</li>
              <li><strong>Location:</strong> 2527 Market St, Galveston, TX 77550</li>
              <li><strong>Loft Suite:</strong> Optional 1 bed / 1 bath apartment upstairs</li>
            </ul>
          </div>

          <p>In the meantime, feel free to:</p>
          <ul>
            <li>Check out our <a href="https://theos.live/#gallery" style="color: #8B4513;">photo gallery</a></li>
            <li>View our <a href="https://theos.live/#pricing" style="color: #8B4513;">pricing packages</a></li>
            <li>Chat with our AI assistant on the website for instant answers</li>
          </ul>

          <p>If you have any urgent questions, you can reach us directly at:</p>
          <p>
            <strong>Phone:</strong> <a href="tel:${CONTACT_INFO.phone}">${CONTACT_INFO.phone}</a><br>
            <strong>Email:</strong> <a href="mailto:${CONTACT_INFO.email}">${CONTACT_INFO.email}</a>
          </p>

          <p style="margin-top: 30px;">We look forward to hosting your event!</p>
          
          <p style="color: #666; font-size: 14px; margin-top: 30px; border-top: 1px solid #ddd; padding-top: 20px;">
            <strong>Theos Event Venue</strong><br>
            ${CONTACT_INFO.addressLine}<br>
            <a href="https://theos.live" style="color: #8B4513;">theos.live</a>
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email sending failed:", error);
    // Still return success to user, but log the error
    return NextResponse.json(
      { success: true, warning: "Your inquiry was received, but there was an issue sending confirmation emails." },
      { status: 200 },
    );
  }
}
