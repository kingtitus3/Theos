"use client";

import { useState } from "react";
import { FAQS } from "@/lib/constants";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-sand py-12 sm:py-16 lg:py-24">
      <Container>
        <SectionHeader
          eyebrow="FAQ"
          title="What planners ask most"
          description="Need specifics? Here are the most common questions about hosting at Theos."
        />
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.question} className="rounded-3xl border border-charcoal/10 bg-white/80">
                <button
                  className="flex w-full items-center justify-between px-6 py-4 text-left"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <span className="text-lg font-semibold text-charcoal">{faq.question}</span>
                  <span className="text-2xl text-accent-brick">{isOpen ? "−" : "+"}</span>
                </button>
                {isOpen && <p className="px-6 pb-6 text-sm text-charcoal/70">{faq.answer}</p>}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
