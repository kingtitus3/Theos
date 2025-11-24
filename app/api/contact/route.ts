import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validation";

export async function POST(request: Request) {
  const data = await request.json();
  const parsed = contactFormSchema.safeParse(data);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid submission", details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  console.log("New Theos inquiry:", parsed.data);
  // TODO: Integrate email service (Resend, SendGrid, etc.)

  return NextResponse.json({ success: true });
}
