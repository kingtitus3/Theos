import { NextResponse } from "next/server";
import { z } from "zod";

import { createCalendarEvent, getAvailability } from "@/lib/googleCalendar";

const eventSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().optional(),
  date: z.string().min(1, "Date is required"),
  eventType: z.string().min(1, "Event type required"),
  hours: z.number().min(2).max(12),
  loft: z.boolean().optional(),
  notes: z.string().optional(),
});

const chicagoOffset = "-06:00";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const data = eventSchema.parse(body);

    const start = new Date(`${data.date}T12:00:00${chicagoOffset}`);
    const end = new Date(start.getTime() + data.hours * 60 * 60 * 1000);

    const isFree = await getAvailability(start.toISOString(), end.toISOString());
    if (!isFree) {
      return NextResponse.json(
        { success: false, message: "Selected date or time is unavailable" },
        { status: 409 },
      );
    }

    await createCalendarEvent({
      startISO: start.toISOString(),
      endISO: end.toISOString(),
      summary: `${data.eventType} – ${data.name}`,
      description: [
        `Event Booking`,
        `Name: ${data.name}`,
        `Email: ${data.email}`,
        `Phone: ${data.phone ?? "N/A"}`,
        `Hours: ${data.hours}`,
        `Loft: ${data.loft ? "Yes" : "No"}`,
        data.notes ? `Notes: ${data.notes}` : null,
      ]
        .filter(Boolean)
        .join("\n"),
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
        subject: `Event Confirmed at Theos – ${start.toLocaleDateString()}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #8B4513; border-bottom: 2px solid #D4AF37; padding-bottom: 10px;">
              Event Confirmed!
            </h2>
            
            <p>Hi ${data.name},</p>
            
            <p>Your <strong>${data.eventType}</strong> at Theos has been confirmed. We're excited to host your event!</p>
            
            <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="margin-top: 0; color: #333;">Event Details</h3>
              <p><strong>Date:</strong> ${start.toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}</p>
              <p><strong>Time:</strong> ${start.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" })} - ${end.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" })}</p>
              <p><strong>Duration:</strong> ${data.hours} hours</p>
              <p><strong>Loft Suite:</strong> ${data.loft ? "Yes" : "No"}</p>
              ${data.notes ? `<p><strong>Notes:</strong> ${data.notes}</p>` : ""}
            </div>

            <div style="background: #e8f4f8; border-left: 4px solid #8B4513; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="margin-top: 0; color: #333;">📍 Location</h3>
              <p style="margin: 0;">
                <strong>Theos Event Venue</strong><br>
                ${CONTACT_INFO.addressLine}<br>
                <a href="https://share.google/uL54zfzvMegpZ28UG" style="color: #8B4513;">View on Google Maps</a>
              </p>
            </div>

            <p>If you need to make changes or have any questions, please reply to this email or call us at <a href="tel:${CONTACT_INFO.phone}">${CONTACT_INFO.phone}</a>.</p>

            <p style="margin-top: 30px;">We look forward to hosting your event!</p>
            
            <p style="color: #666; font-size: 14px; margin-top: 30px; border-top: 1px solid #ddd; padding-top: 20px;">
              <strong>Theos Event Venue</strong><br>
              ${CONTACT_INFO.addressLine}<br>
              Phone: <a href="tel:${CONTACT_INFO.phone}">${CONTACT_INFO.phone}</a><br>
              Email: <a href="mailto:${CONTACT_INFO.email}">${CONTACT_INFO.email}</a><br>
              <a href="https://theosgalveston.com" style="color: #8B4513;">theosgalveston.com</a>
            </p>
          </div>
        `,
      });
    } catch (error) {
      console.error("Failed to send event confirmation email:", error);
      // Don't fail the booking if email fails
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[book-event] error", error);
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}

