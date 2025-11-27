import { NextResponse } from "next/server";
import { z } from "zod";

import { createCalendarEvent } from "@/lib/googleCalendar";

const tourSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().optional(),
  date: z.string().min(1, "Date is required"),
  time: z.string().min(1, "Time is required"), // expects HH:mm 24h format
});

const chicagoOffset = "-06:00";
const defaultDurationMinutes = 60;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const data = tourSchema.parse(body);

    const start = new Date(`${data.date}T${data.time}:00${chicagoOffset}`);
    const end = new Date(start.getTime() + defaultDurationMinutes * 60 * 1000);

    await createCalendarEvent({
      startISO: start.toISOString(),
      endISO: end.toISOString(),
      summary: `Tour – ${data.name}`,
      description: `Tour Request\nName: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone ?? "N/A"}`,
    });

    // Send confirmation email
    try {
      const { Resend } = await import("resend");
      const resend = new Resend(process.env.RESEND_API_KEY);
      const { CONTACT_INFO } = await import("@/lib/constants");

      await resend.emails.send({
        from: "Theos <bookings@theosgalveston.com>",
        to: data.email,
        replyTo: CONTACT_INFO.email,
        subject: `Tour Confirmed at Theos – ${start.toLocaleDateString()}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #8B4513; border-bottom: 2px solid #D4AF37; padding-bottom: 10px;">
              Tour Confirmed!
            </h2>
            
            <p>Hi ${data.name},</p>
            
            <p>Your tour at Theos has been confirmed. We're excited to show you the space!</p>
            
            <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="margin-top: 0; color: #333;">Tour Details</h3>
              <p><strong>Date:</strong> ${start.toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}</p>
              <p><strong>Time:</strong> ${start.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" })}</p>
            </div>

            <div style="background: #e8f4f8; border-left: 4px solid #8B4513; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="margin-top: 0; color: #333;">📍 Location</h3>
              <p style="margin: 0;">
                <strong>Theos Event Venue</strong><br>
                ${CONTACT_INFO.addressLine}<br>
                <a href="https://share.google/uL54zfzvMegpZ28UG" style="color: #8B4513;">View on Google Maps</a>
              </p>
            </div>

            <p>If you need to reschedule or have any questions, please reply to this email or call us at <a href="tel:${CONTACT_INFO.phone}">${CONTACT_INFO.phone}</a>.</p>

            <p style="margin-top: 30px;">We look forward to meeting you!</p>
            
            <p style="color: #666; font-size: 14px; margin-top: 30px; border-top: 1px solid #ddd; padding-top: 20px;">
              <strong>Theos Event Venue</strong><br>
              ${CONTACT_INFO.addressLine}<br>
              Phone: <a href="tel:${CONTACT_INFO.phone}">${CONTACT_INFO.phone}</a><br>
              Email: <a href="mailto:${CONTACT_INFO.email}">${CONTACT_INFO.email}</a><br>
              <a href="https://theos.live" style="color: #8B4513;">theos.live</a>
            </p>
          </div>
        `,
      });
    } catch (error) {
      console.error("Failed to send tour confirmation email:", error);
      // Don't fail the booking if email fails
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[book-tour] error", error);
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}

