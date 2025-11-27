import { NextResponse } from "next/server";
import { Resend } from "resend";
import { google } from "googleapis";
import { CONTACT_INFO } from "@/lib/constants";

function getResend() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured");
  }
  return new Resend(apiKey);
}

// Get calendar client (same logic as googleCalendar.ts)
function getCalendarClient() {
  const calendarId = process.env.GOOGLE_CALENDAR_ID?.trim();
  const oauthClientId = process.env.GOOGLE_OAUTH_CLIENT_ID?.trim();
  const oauthClientSecret = process.env.GOOGLE_OAUTH_CLIENT_SECRET?.trim();
  const oauthRefreshToken = process.env.GOOGLE_OAUTH_REFRESH_TOKEN?.trim();

  if (!calendarId || !oauthClientId || !oauthClientSecret || !oauthRefreshToken) {
    // Fall back to Application Default Credentials
    const auth = new google.auth.GoogleAuth({
      scopes: ["https://www.googleapis.com/auth/calendar"],
    });
    return google.calendar({ version: "v3", auth });
  }

  const oauth2Client = new google.auth.OAuth2(
    oauthClientId,
    oauthClientSecret,
    "http://localhost"
  );
  oauth2Client.setCredentials({ refresh_token: oauthRefreshToken });

  return google.calendar({ version: "v3", auth: oauth2Client });
}

function parseEventDescription(description: string) {
  const lines = description.split("\n");
  const data: Record<string, string> = {};
  
  lines.forEach((line) => {
    const match = line.match(/^(\w+):\s*(.+)$/);
    if (match) {
      data[match[1].toLowerCase()] = match[2];
    }
  });
  
  return data;
}

export async function GET(request: Request) {
  // Verify this is a Vercel Cron request
  const authHeader = request.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const calendar = getCalendarClient();
    const calendarId = process.env.GOOGLE_CALENDAR_ID?.trim()!;

    // Get events in the next 24-25 hours
    const now = new Date();
    const tomorrow = new Date(now.getTime() + 24 * 60 * 60 * 1000);
    const dayAfter = new Date(now.getTime() + 25 * 60 * 60 * 1000);

    const response = await calendar.events.list({
      calendarId,
      timeMin: tomorrow.toISOString(),
      timeMax: dayAfter.toISOString(),
      timeZone: "America/Chicago",
      singleEvents: true,
      orderBy: "startTime",
    });

    const events = response.data.items || [];
    const remindersSent: string[] = [];

    for (const event of events) {
      if (!event.start?.dateTime || !event.summary) continue;

      const eventStart = new Date(event.start.dateTime);
      const hoursUntil = (eventStart.getTime() - now.getTime()) / (1000 * 60 * 60);

      // Only send reminders for events 24-25 hours away
      if (hoursUntil < 24 || hoursUntil > 25) continue;

      // Check if reminder was already sent (store in event description)
      if (event.description?.includes("REMINDER_SENT")) continue;

      const eventData = parseEventDescription(event.description || "");
      const email = eventData.email;
      const name = eventData.name || event.summary.split("–")[1]?.trim() || "Guest";
      const phone = eventData.phone || "N/A";

      if (!email) {
        console.warn(`No email found for event: ${event.summary}`);
        continue;
      }

      // Determine event type
      const isTour = event.summary.includes("Tour");
      const eventType = isTour ? "tour" : "event";

      // Send reminder email
      try {
        const resend = getResend();
        await resend.emails.send({
          from: "Theos <bookings@theosgalveston.com>",
          to: email,
          replyTo: CONTACT_INFO.email,
          subject: `Reminder: Your ${isTour ? "Tour" : "Event"} at Theos Tomorrow`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #8B4513; border-bottom: 2px solid #D4AF37; padding-bottom: 10px;">
                Reminder: Your ${isTour ? "Tour" : "Event"} at Theos
              </h2>
              
              <p>Hi ${name},</p>
              
              <p>This is a friendly reminder that you have a <strong>${isTour ? "tour" : event.summary}</strong> scheduled at Theos tomorrow.</p>
              
              <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="margin-top: 0; color: #333;">Event Details</h3>
                <p><strong>Date:</strong> ${eventStart.toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}</p>
                <p><strong>Time:</strong> ${eventStart.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" })}</p>
                ${!isTour ? `<p><strong>Event:</strong> ${event.summary}</p>` : ""}
              </div>

              <div style="background: #e8f4f8; border-left: 4px solid #8B4513; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="margin-top: 0; color: #333;">📍 Location</h3>
                <p style="margin: 0;">
                  <strong>Theos Event Venue</strong><br>
                  ${CONTACT_INFO.addressLine}<br>
                  <a href="https://share.google/uL54zfzvMegpZ28UG" style="color: #8B4513;">View on Google Maps</a>
                </p>
              </div>

              ${isTour ? `
              <p>We're looking forward to showing you the space! If you have any questions or need to reschedule, please reply to this email or call us at <a href="tel:${CONTACT_INFO.phone}">${CONTACT_INFO.phone}</a>.</p>
              ` : `
              <p>We're excited to host your event! If you have any last-minute questions or need to make changes, please reply to this email or call us at <a href="tel:${CONTACT_INFO.phone}">${CONTACT_INFO.phone}</a>.</p>
              `}

              <p style="margin-top: 30px;">See you tomorrow!</p>
              
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

        // Mark reminder as sent in calendar event
        await calendar.events.patch({
          calendarId,
          eventId: event.id!,
          requestBody: {
            description: `${event.description || ""}\n\nREMINDER_SENT: ${new Date().toISOString()}`,
          },
        });

        remindersSent.push(event.summary);
        console.log(`Reminder sent for: ${event.summary} to ${email}`);
      } catch (error) {
        console.error(`Failed to send reminder for ${event.summary}:`, error);
      }
    }

    return NextResponse.json({
      success: true,
      remindersSent: remindersSent.length,
      events: remindersSent,
    });
  } catch (error) {
    console.error("Booking reminders error:", error);
    return NextResponse.json(
      { error: "Internal server error", details: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}

