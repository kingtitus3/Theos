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

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[book-tour] error", error);
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}

