"use client";

import { useState, useRef, useEffect } from "react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isProcessing) return;

    const userMessage = input.trim();
    setInput("");
    
    // Add user message to chat
    const userMsg: Message = { role: "user", content: userMessage, timestamp: new Date() };
    setMessages((prev) => [...prev, userMsg]);

    setIsProcessing(true);

    try {
      // Prepare messages for API (exclude timestamp)
      const apiMessages = [...messages, userMsg].map(({ role, content }) => ({
        role,
        content,
      }));

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: apiMessages }),
      });

      if (!response.ok) {
        throw new Error("Failed to get response");
      }

      const data = await response.json();
      const assistantMsg: Message = {
        role: "assistant",
        content: data.message || "I'm sorry, I couldn't process that. Could you rephrase?",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMsg]);

      // Show toast if booking was successful
      if (data.actionTaken && data.message.includes("booked")) {
        addToast({ title: "Tour booked successfully!", variant: "success" });
      }
    } catch (error) {
      console.error("Chat error:", error);
      const errorMsg: Message = {
        role: "assistant",
        content: "I'm sorry, I'm having trouble right now. Please try again or contact us directly at bookings@theosgalveston.com",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsProcessing(false);
    }
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
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            disabled={isProcessing}
            className="flex-1 w-full rounded-xl border border-charcoal/10 bg-white/80 px-4 py-3 text-base text-charcoal placeholder:text-charcoal/50 focus:border-accent-brick focus:outline-none focus:ring-2 focus:ring-accent-brick/30"
          />
          <Button type="submit" disabled={isProcessing || !input.trim()}>
            Send
          </Button>
        </div>
      </form>
    </Card>
  );
};

