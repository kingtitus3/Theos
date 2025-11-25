import { NextResponse } from "next/server";
import { z } from "zod";

import { getAvailability } from "@/lib/googleCalendar";

const availabilitySchema = z.object({
  date: z.string().min(1, "Date is required"),
  durationHours: z.number().min(1).max(12).default(8),
});

const chicagoOffset = "-06:00"; // CST/CDT baseline; adjust if needed for DST handling upstream.

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { date, durationHours } = availabilitySchema.parse(body);

    const start = new Date(`${date}T10:00:00${chicagoOffset}`);
    const end = new Date(start.getTime() + durationHours * 60 * 60 * 1000);

    const available = await getAvailability(start.toISOString(), end.toISOString());
    return NextResponse.json({ available });
  } catch (error) {
    console.error("[availability] error", error);
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}

