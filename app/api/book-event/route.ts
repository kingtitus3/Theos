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

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[book-event] error", error);
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}

