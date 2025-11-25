"use client";

import { useState, useRef, useEffect } from "react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { useToast } from "@/components/ui/Toast";

interface Message {
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export const ChatConcierge = () => {
  const { addToast } = useToast();
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi! I'm here to help you book a tour or answer questions about Theos. What would you like to know?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const extractDate = (text: string): string | null => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    const datePatterns = [
      { pattern: /(\d{4}-\d{2}-\d{2})/, extract: (m: RegExpMatchArray) => m[1] },
      { pattern: /tomorrow/i, extract: () => tomorrow.toISOString().split("T")[0] },
      { pattern: /today/i, extract: () => today.toISOString().split("T")[0] },
      {
        pattern: /(\w+day)/i,
        extract: (m: RegExpMatchArray) => {
          const dayName = m[1].toLowerCase();
          const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
          const targetDay = days.indexOf(dayName);
          if (targetDay === -1) return null;
          const currentDay = today.getDay();
          let daysToAdd = targetDay - currentDay;
          if (daysToAdd <= 0) daysToAdd += 7;
          const targetDate = new Date(today);
          targetDate.setDate(today.getDate() + daysToAdd);
          return targetDate.toISOString().split("T")[0];
        },
      },
    ];

    for (const { pattern, extract } of datePatterns) {
      const match = text.match(pattern);
      if (match) {
        const date = extract(match);
        if (date) return date;
      }
    }
    return null;
  };

  const extractTime = (text: string): string | null => {
    const timePatterns = [
      { pattern: /(\d{1,2}):(\d{2})\s*(am|pm)?/i, extract: (m: RegExpMatchArray) => {
          let hours = parseInt(m[1]);
          const minutes = m[2];
          const period = m[3]?.toLowerCase();
          if (period === "pm" && hours !== 12) hours += 12;
          if (period === "am" && hours === 12) hours = 0;
          return `${hours.toString().padStart(2, "0")}:${minutes}`;
        }},
      { pattern: /(\d{1,2})\s*(am|pm)/i, extract: (m: RegExpMatchArray) => {
          let hours = parseInt(m[1]);
          const period = m[2].toLowerCase();
          if (period === "pm" && hours !== 12) hours += 12;
          if (period === "am" && hours === 12) hours = 0;
          return `${hours.toString().padStart(2, "0")}:00`;
        }},
      { pattern: /morning/i, extract: () => "10:00" },
      { pattern: /afternoon/i, extract: () => "14:00" },
      { pattern: /evening/i, extract: () => "17:00" },
    ];

    for (const { pattern, extract } of timePatterns) {
      const match = text.match(pattern);
      if (match) {
        return extract(match);
      }
    }
    return null;
  };

  const extractEmail = (text: string): string | null => {
    const emailMatch = text.match(/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/);
    return emailMatch ? emailMatch[0] : null;
  };

  const extractName = (text: string): string | null => {
    const namePatterns = [
      { pattern: /(?:my name is|i'm|i am|call me)\s+([A-Z][a-z]+(?:\s+[A-Z][a-z]+)?)/i, extract: (m: RegExpMatchArray) => m[1] },
      { pattern: /^([A-Z][a-z]+(?:\s+[A-Z][a-z]+)?)/, extract: (m: RegExpMatchArray) => m[1] },
    ];

    for (const { pattern, extract } of namePatterns) {
      const match = text.match(pattern);
      if (match) {
        return extract(match);
      }
    }
    return null;
  };

  const processMessage = async (userMessage: string) => {
    const lowerText = userMessage.toLowerCase();
    let bookingData: { name?: string; email?: string; date?: string; time?: string } = {};

    // Extract information
    const extractedDate = extractDate(userMessage);
    const extractedTime = extractTime(userMessage);
    const extractedEmail = extractEmail(userMessage);
    const extractedName = extractName(userMessage);

    if (extractedDate) bookingData.date = extractedDate;
    if (extractedTime) bookingData.time = extractedTime;
    if (extractedEmail) bookingData.email = extractedEmail;
    if (extractedName) bookingData.name = extractedName;

    // Check for booking intent
    const bookingKeywords = ["book", "schedule", "tour", "visit", "appointment", "reserve"];
    const isBookingIntent = bookingKeywords.some((keyword) => lowerText.includes(keyword));

    // Check for availability intent
    const availabilityKeywords = ["available", "free", "open", "check"];
    const isAvailabilityIntent = availabilityKeywords.some((keyword) => lowerText.includes(keyword));

    // Check for general questions
    const questionKeywords = ["what", "how", "when", "where", "why", "tell me", "info", "information"];
    const isQuestion = questionKeywords.some((keyword) => lowerText.includes(keyword));

    if (isBookingIntent && bookingData.date && bookingData.time) {
      // Try to book
      if (!bookingData.name || !bookingData.email) {
        return {
          role: "assistant" as const,
          content: "I'd love to book that for you! I need a few details:\n- Your full name\n- Your email address\n\nYou can say something like: 'My name is John Doe and my email is john@example.com'",
        };
      }

      setIsProcessing(true);
      try {
        const response = await fetch("/api/book-tour", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: bookingData.name,
            email: bookingData.email,
            date: bookingData.date,
            time: bookingData.time,
          }),
        });

        if (!response.ok) {
          const error = await response.json();
          throw new Error(error.error || "Booking failed");
        }

        addToast({ title: "Tour booked successfully!", variant: "success" });
        return {
          role: "assistant" as const,
          content: `Perfect! I've booked your tour for ${bookingData.date} at ${bookingData.time}. You'll receive a confirmation email shortly. Is there anything else I can help you with?`,
        };
      } catch (error) {
        console.error(error);
        return {
          role: "assistant" as const,
          content: "I'm sorry, I couldn't complete the booking. Please try again or contact us directly at titus.edwardsiii@3910enterprises.com",
        };
      } finally {
        setIsProcessing(false);
      }
    } else if (isAvailabilityIntent && bookingData.date) {
      // Check availability
      setIsProcessing(true);
      try {
        const response = await fetch("/api/availability", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ date: bookingData.date, durationHours: 1 }),
        });

        const data = await response.json();
        if (data.available) {
          return {
            role: "assistant" as const,
            content: `Great news! ${bookingData.date} is available. Would you like to book a tour? Just let me know your preferred time and your name and email.`,
          };
        } else {
          return {
            role: "assistant" as const,
            content: `I'm sorry, ${bookingData.date} is not available. Would you like to check another date?`,
          };
        }
      } catch (error) {
        console.error(error);
        return {
          role: "assistant" as const,
          content: "I couldn't check availability right now. Please try again in a moment.",
        };
      } finally {
        setIsProcessing(false);
      }
    } else if (isQuestion) {
      // Answer general questions
      if (lowerText.includes("price") || lowerText.includes("cost") || lowerText.includes("pricing")) {
        return {
          role: "assistant" as const,
          content: "Our pricing varies by day of the week and event type. Weekend events typically range from $3,000-$6,000, with weekday options starting around $2,000. The Loft Suite add-on is $300-$500. Would you like to check availability for a specific date?",
        };
      } else if (lowerText.includes("capacity") || lowerText.includes("guests") || lowerText.includes("people")) {
        return {
          role: "assistant" as const,
          content: "Theos can accommodate up to 180 guests standing, or 120-140 for seated receptions. The main hall is 3,200 sq ft (80 × 40). Would you like to book a tour to see the space?",
        };
      } else if (lowerText.includes("location") || lowerText.includes("address") || lowerText.includes("where")) {
        return {
          role: "assistant" as const,
          content: "Theos is located at 2527 Market St, Galveston, TX 77550, right in downtown Galveston near the Strand. Would you like to schedule a tour?",
        };
      } else if (lowerText.includes("loft") || lowerText.includes("suite")) {
        return {
          role: "assistant" as const,
          content: "The Loft Suite is a private 1 bed / 1 bath apartment above the main hall, perfect for getting ready, overnight stays, or VIP hosting. It's available as an add-on for $300-$500. Would you like to include it in your tour?",
        };
      } else {
        return {
          role: "assistant" as const,
          content: "Theos is a 3,200 sq ft historic brick event venue in downtown Galveston, perfect for weddings, social events, and corporate gatherings. We have a main hall and an optional Loft Suite. Would you like to book a tour or check availability?",
        };
      }
    } else if (isBookingIntent) {
      return {
        role: "assistant" as const,
        content: "I'd be happy to help you book a tour! Please tell me:\n- Your preferred date (e.g., 'December 15th' or 'next Friday')\n- Your preferred time (e.g., '3 PM' or 'afternoon')\n- Your name and email",
      };
    } else {
      return {
        role: "assistant" as const,
        content: "I can help you book a tour, check availability, or answer questions about Theos. What would you like to do?",
      };
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isProcessing) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage, timestamp: new Date() }]);

    setIsProcessing(true);
    const response = await processMessage(userMessage);
    setIsProcessing(false);

    setMessages((prev) => [...prev, response]);
  };

  return (
    <Card className="bg-white flex flex-col h-[600px]">
      <div className="p-4 border-b border-charcoal/10">
        <h3 className="font-serif text-xl">Chat with Theos</h3>
        <p className="text-xs text-charcoal/60">Ask questions or book a tour</p>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, idx) => (
          <div
            key={idx}
            className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[80%] rounded-lg px-4 py-2 ${
                message.role === "user"
                  ? "bg-charcoal text-parchment"
                  : "bg-charcoal/5 text-charcoal"
              }`}
            >
              <p className="text-sm whitespace-pre-wrap">{message.content}</p>
            </div>
          </div>
        ))}
        {isProcessing && (
          <div className="flex justify-start">
            <div className="bg-charcoal/5 rounded-lg px-4 py-2">
              <p className="text-sm text-charcoal/60">Thinking...</p>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSubmit} className="p-4 border-t border-charcoal/10">
        <div className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            disabled={isProcessing}
            className="flex-1"
          />
          <Button type="submit" disabled={isProcessing || !input.trim()}>
            Send
          </Button>
        </div>
      </form>
    </Card>
  );
};

