import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactFormSchema } from "@/lib/validation";
import { CONTACT_INFO } from "@/lib/constants";
import { getAvailability } from "@/lib/googleCalendar";

const resend = new Resend(process.env.RESEND_API_KEY);

async function generateEmailResponse(formData: {
  fullName: string;
  email: string;
  phone?: string;
  eventType: string;
  preferredDate?: string;
  guestCount?: string;
  loftSuite: string;
  referral?: string;
  message: string;
}): Promise<string> {
  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    return ""; // Return empty if no API key
  }

  // Check availability if date provided
  let availabilityInfo = "";
  if (formData.preferredDate) {
    try {
      const start = new Date(`${formData.preferredDate}T10:00:00-06:00`);
      const end = new Date(start.getTime() + 8 * 60 * 60 * 1000); // 8 hours
      const available = await getAvailability(start.toISOString(), end.toISOString());
      availabilityInfo = available
        ? `\n- Date Availability: ${formData.preferredDate} is AVAILABLE`
        : `\n- Date Availability: ${formData.preferredDate} is NOT available (suggest checking alternative dates)`;
    } catch (error) {
      console.error("Error checking availability:", error);
    }
  }

  const prompt = `You are writing a professional, warm email response for Theos Event Venue in downtown Galveston, Texas.

INQUIRY DETAILS:
- Name: ${formData.fullName}
- Event Type: ${formData.eventType}
${formData.preferredDate ? `- Preferred Date: ${formData.preferredDate}` : ""}
${formData.guestCount ? `- Guest Count: ${formData.guestCount}` : ""}
- Loft Suite Interest: ${formData.loftSuite === "yes" ? "Yes" : formData.loftSuite === "no" ? "No" : "Undecided"}
${formData.message ? `- Their Message: ${formData.message}` : ""}
${availabilityInfo}

VENUE INFO:
- 3,200 sq ft (80 × 40) historic brick hall
- Capacity: Up to 180 standing, 120-140 seated
- Location: 2527 Market St, Galveston, TX 77550
- Optional Loft Suite: 1 bed / 1 bath apartment ($300-$500 add-on)
- Pricing: Weekend $3,000-$6,000, Weekday $2,000+
- Phone: (409) 765-5539
- Website: https://theos.live

Write a professional, warm, and helpful email response in HTML format that:
1. Thanks them for their inquiry by name
2. Acknowledges their event type and any specific details they mentioned
3. Addresses availability if they provided a date (mention if available or suggest alternatives)
4. Offers to schedule a tour or discuss details
5. Provides clear next steps
6. Includes contact information
7. Is 2-3 paragraphs, warm and conversion-focused
8. Signs off as "Titus" from Theos

Format as clean HTML with proper paragraph tags. Keep it warm, professional, and helpful. Don't be overly salesy.`;

  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
        "HTTP-Referer": "https://theos.live",
        "X-Title": "Theos Event Venue",
      },
      body: JSON.stringify({
        model: "x-ai/grok-4.1-fast",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.7,
        max_tokens: 500,
      }),
    });

    if (!response.ok) {
      console.error("OpenRouter error:", await response.text());
      return "";
    }

    const data = await response.json();
    return data.choices?.[0]?.message?.content || "";
  } catch (error) {
    console.error("Error generating email response:", error);
    return "";
  }
}

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
    // Generate AI response (non-blocking - don't wait if it fails)
    let aiResponse = "";
    try {
      aiResponse = await generateEmailResponse(formData);
    } catch (error) {
      console.error("AI response generation failed (non-critical):", error);
    }

    // Send email to venue owner
    await resend.emails.send({
      from: "Theos Website <noreply@theosgalveston.com>",
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

          ${aiResponse ? `
          <div style="background: #e8f4f8; border-left: 4px solid #8B4513; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #333;">🤖 AI Auto-Response Sent</h3>
            <p style="color: #666; font-size: 14px; margin-bottom: 15px;">
              An AI-generated personalized response was automatically sent to ${formData.fullName}. Review the response below:
            </p>
            <div style="background: white; padding: 15px; border-radius: 4px; white-space: pre-wrap; font-family: Arial, sans-serif; color: #333; border: 1px solid #ddd;">
${aiResponse.replace(/<[^>]*>/g, '')}
            </div>
            <p style="color: #666; font-size: 12px; margin-top: 10px; margin-bottom: 0;">
              💡 You can still follow up with additional information if needed.
            </p>
          </div>
          ` : `
          <div style="background: #fff3cd; border-left: 4px solid #ffc107; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #333;">⚠️ Generic Auto-Reply Sent</h3>
            <p style="color: #666; font-size: 14px; margin-bottom: 0;">
              AI response generation failed, so a generic auto-reply was sent. Please follow up manually.
            </p>
          </div>
          `}

          <p style="margin-top: 30px; color: #666; font-size: 14px;">
            Reply directly to this email to respond to ${formData.fullName}.
          </p>
        </div>
      `,
    });

    // Send AI-generated response to customer (or fallback to generic if AI fails)
    // Clean and format AI response
    let formattedAiResponse = aiResponse;
    if (aiResponse) {
      // If AI returns plain text, convert to HTML paragraphs
      if (!aiResponse.includes('<p>') && !aiResponse.includes('<div>')) {
        formattedAiResponse = aiResponse
          .split('\n\n')
          .filter(p => p.trim())
          .map(p => `<p style="margin: 15px 0; line-height: 1.6; color: #333;">${p.trim().replace(/\n/g, '<br>')}</p>`)
          .join('');
      }
    }

    const customerEmailHtml = aiResponse
      ? `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #8B4513; border-bottom: 2px solid #D4AF37; padding-bottom: 10px;">
            Thank you for your inquiry!
          </h2>
          ${formattedAiResponse}
          <p style="color: #666; font-size: 14px; margin-top: 30px; border-top: 1px solid #ddd; padding-top: 20px;">
            <strong>Theos Event Venue</strong><br>
            ${CONTACT_INFO.addressLine}<br>
            Phone: <a href="tel:${CONTACT_INFO.phone}" style="color: #8B4513;">${CONTACT_INFO.phone}</a><br>
            <a href="https://theos.live" style="color: #8B4513;">theos.live</a>
          </p>
        </div>
      `
      : `
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
      `;

    await resend.emails.send({
      from: "Theos <noreply@theosgalveston.com>",
      to: formData.email,
      replyTo: CONTACT_INFO.email,
      subject: `Re: Your ${formData.eventType} inquiry at Theos Event Venue`,
      html: customerEmailHtml,
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
