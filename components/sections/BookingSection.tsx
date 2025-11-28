"use client";

import { useState } from "react";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { BookingForm } from "@/components/booking/BookingForm";
import { ChatConcierge } from "@/components/booking/ChatConcierge";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export const BookingSection = () => {
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [showChat, setShowChat] = useState(false);

  return (
    <>
      <section id="booking" className="bg-sand py-12 sm:py-16 lg:py-24">
        <Container>
          <SectionHeader
            eyebrow="Book a Tour"
            title="Schedule your visit to Theos"
            description="Choose how you'd like to book: use our quick form or chat with our AI assistant."
          />

          <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
            <div className="space-y-4">
              <h3 className="font-serif text-2xl">Quick Booking</h3>
              <p className="text-charcoal/80">
                Fill out our simple form to check availability and book your tour in just a few clicks.
              </p>
              <Button size="lg" onClick={() => setShowBookingForm(true)}>
                Book a Tour
              </Button>
            </div>

            <div className="space-y-4">
              <h3 className="font-serif text-2xl">AI Assistant</h3>
              <p className="text-charcoal/80">
                Chat with our AI concierge to ask questions, check availability, or book a tour naturally.
              </p>
              <Button size="lg" variant="secondary" onClick={() => setShowChat(true)}>
                Start Chat
              </Button>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-charcoal/10 bg-white/80 p-6 text-center">
            <p className="text-sm text-charcoal/70 mb-3">
              Planning your Galveston wedding? Get expert tips, vendor recommendations, and budgeting advice in our comprehensive guide.
            </p>
            <Link
              href="/blog/galveston-wedding-guide-2026"
              className="inline-block text-sm font-medium text-accent-brick hover:text-accent-brick/80 transition underline"
            >
              Read Galveston Wedding Guide 2026 →
            </Link>
          </div>
        </Container>
      </section>

      <Modal isOpen={showBookingForm} onClose={() => setShowBookingForm(false)} ariaLabel="Book a Tour">
        <div className="max-w-2xl w-full">
          <BookingForm onSuccess={() => setShowBookingForm(false)} />
        </div>
      </Modal>

      <Modal isOpen={showChat} onClose={() => setShowChat(false)} ariaLabel="Chat with Theos">
        <div className="max-w-3xl w-full">
          <ChatConcierge />
        </div>
      </Modal>
    </>
  );
};

