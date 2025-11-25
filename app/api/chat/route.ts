import { NextResponse } from "next/server";
import { getAvailability, createCalendarEvent } from "@/lib/googleCalendar";

const SYSTEM_PROMPT = `You are a friendly and helpful AI concierge for Theos, a historic brick event venue in downtown Galveston, Texas.

VENUE INFORMATION:
- Name: Theos
- Location: 2527 Market St, Galveston, TX 77550
- Size: 3,200 sq ft (80 × 40) main brick hall
- Capacity: Up to 180 guests standing, 120-140 for seated receptions
- Spaces: Main brick hall + optional Loft Suite (1 bed / 1 bath apartment upstairs)
- Contact: titus.edwardsiii@3910enterprises.com, (409) 765-5539

PRICING:
- Weekend events: $3,000-$6,000
- Weekday events: Starting around $2,000
- Loft Suite add-on: $300-$500
- Most couples/hosts spend $3,000-$6,000 total

YOUR CAPABILITIES:
1. Answer questions about the venue, pricing, capacity, location, Loft Suite
2. Check availability for specific dates
3. Book tours when you have: name, email, date (YYYY-MM-DD), time (HH:MM 24h format)

IMPORTANT RULES:
- Always be warm, professional, and helpful
- When booking, you MUST have: name, email, date, and time
- Dates must be in YYYY-MM-DD format (e.g., "2025-01-15" for January 15, 2025)
- Times must be in HH:MM 24h format (e.g., "15:00" for 3 PM, "09:00" for 9 AM)
- Convert natural language dates to YYYY-MM-DD (e.g., "tomorrow", "next Friday", "December 20th")
- Convert natural language times to 24h format (e.g., "3pm" → "15:00", "10am" → "10:00")
- If user wants to book but is missing info, ask for it naturally
- When you successfully book, confirm the details clearly
- All times are in America/Chicago timezone

ACTION FORMAT:
When you need to check availability or book, you MUST include this exact format in your response:
- For availability: AVAILABILITY_CHECK: {"date": "YYYY-MM-DD"}
- For booking: BOOK_TOUR: {"name": "Full Name", "email": "email@example.com", "date": "YYYY-MM-DD", "time": "HH:MM"}

IMPORTANT: Only use these action formats when you have all required information. Otherwise, respond naturally and ask for missing details.`;

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: "Messages array required" }, { status: 400 });
    }

    const apiKey = process.env.OPENROUTER_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "OpenRouter API key not configured" },
        { status: 500 }
      );
    }

    // Prepare messages for OpenRouter (system + conversation)
    const openRouterMessages = [
      { role: "system", content: SYSTEM_PROMPT },
      ...messages.map((msg: ChatMessage) => ({
        role: msg.role,
        content: msg.content,
      })),
    ];

    // Call OpenRouter API
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
        messages: openRouterMessages,
        temperature: 0.7,
        max_tokens: 800,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error("OpenRouter error:", error);
      return NextResponse.json(
        { error: "Failed to get AI response" },
        { status: 500 }
      );
    }

    const data = await response.json();
    const assistantMessage = data.choices?.[0]?.message?.content || "I'm sorry, I couldn't process that. Could you rephrase?";

    // Check if the response contains action commands
    let finalMessage = assistantMessage;
    let needsAction = false;
    let actionData: any = null;

    if (assistantMessage.includes("AVAILABILITY_CHECK:")) {
      try {
        const jsonMatch = assistantMessage.match(/AVAILABILITY_CHECK:\s*(\{.*?\})/s);
        if (jsonMatch) {
          actionData = JSON.parse(jsonMatch[1]);
          needsAction = true;

          // Check availability
          const date = actionData.date;
          const start = new Date(`${date}T10:00:00-06:00`);
          const end = new Date(start.getTime() + 60 * 60 * 1000); // 1 hour

          const available = await getAvailability(start.toISOString(), end.toISOString());
          finalMessage = available
            ? `Great news! ${date} is available. Would you like to book a tour? Just let me know your preferred time, name, and email.`
            : `I'm sorry, ${date} is not available. Would you like to check another date?`;
        }
      } catch (err) {
        console.error("Error parsing availability check:", err);
      }
    } else if (assistantMessage.includes("BOOK_TOUR:")) {
      try {
        const jsonMatch = assistantMessage.match(/BOOK_TOUR:\s*(\{.*?\})/s);
        if (jsonMatch) {
          actionData = JSON.parse(jsonMatch[1]);
          needsAction = true;

          const { name, email, date, time } = actionData;

          if (!name || !email || !date || !time) {
            finalMessage = "I need a bit more information to book your tour. Please provide your full name, email, preferred date, and time.";
          } else {
            // Book the tour
            const start = new Date(`${date}T${time}:00-06:00`);
            const end = new Date(start.getTime() + 60 * 60 * 1000); // 1 hour

            await createCalendarEvent({
              startISO: start.toISOString(),
              endISO: end.toISOString(),
              summary: `Tour – ${name}`,
              description: `Tour Request\nName: ${name}\nEmail: ${email}`,
            });

            finalMessage = `Perfect! I've booked your tour for ${date} at ${time}. You'll receive a confirmation email shortly. Is there anything else I can help you with?`;
          }
        }
      } catch (err) {
        console.error("Error booking tour:", err);
        finalMessage = "I'm sorry, I couldn't complete the booking. Please try again or contact us directly at titus.edwardsiii@3910enterprises.com";
      }
    }

    return NextResponse.json({
      message: finalMessage,
      actionTaken: needsAction,
    });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

