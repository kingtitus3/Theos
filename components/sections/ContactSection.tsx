"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CONTACT_INFO } from "@/lib/constants";
import { contactFormSchema, type ContactFormValues } from "@/lib/validation";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";
import { useToast } from "@/components/ui/Toast";
import { trackEvent } from "@/components/analytics/GoogleAnalytics";
import Link from "next/link";

const eventTypeOptions = [
  { label: "Wedding", value: "wedding" },
  { label: "Social Event", value: "social" },
  { label: "Corporate", value: "corporate" },
  { label: "Production", value: "production" },
];

const loftInterestOptions = [
  { label: "Yes", value: "yes" },
  { label: "No", value: "no" },
  { label: "Undecided", value: "undecided" },
];

const referralOptions = [
  { label: "Instagram", value: "instagram" },
  { label: "Planner", value: "planner" },
  { label: "Friend/Referral", value: "referral" },
  { label: "Google", value: "google" },
  { label: "Other", value: "other" },
];

export const ContactSection = () => {
  const { addToast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      eventType: "",
      preferredDate: "",
      guestCount: "",
      loftSuite: "undecided",
      referral: "",
      message: "",
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (!response.ok) throw new Error("Something went wrong");
      
      // Track form submission
      trackEvent("submit", "contact_form", values.eventType);
      
      addToast({ title: "Thanks! We&apos;ll be in touch soon.", variant: "success" });
      form.reset();
    } catch (error) {
      console.error(error);
      addToast({ title: "Could not send your message.", variant: "error" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-charcoal py-12 sm:py-16 lg:py-24 text-parchment">
      <Container>
        <SectionHeader
          eyebrow="Contact"
          title={CONTACT_INFO.heading}
          description={CONTACT_INFO.description}
          tone="light"
        />
        <div className="grid gap-8 sm:gap-10 lg:grid-cols-2">
          <Card className="bg-white/10 text-parchment">
            <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
              <Input
                label="Full name"
                placeholder="Your name"
                {...form.register("fullName")}
                error={form.formState.errors.fullName?.message}
              />
              <Input
                label="Email"
                type="email"
                placeholder="you@email.com"
                {...form.register("email")}
                error={form.formState.errors.email?.message}
              />
              <Input
                label="Phone"
                type="tel"
                placeholder="(xxx) xxx-xxxx"
                {...form.register("phone")}
              />
              <Select
                label="Event type"
                options={eventTypeOptions}
                {...form.register("eventType")}
                error={form.formState.errors.eventType?.message}
              />
              <div className="grid gap-4 sm:grid-cols-2">
                <Input label="Preferred date" type="date" {...form.register("preferredDate")} />
                <Input
                  label="Approx guest count"
                  placeholder="e.g. 140"
                  {...form.register("guestCount")}
                />
              </div>
              <Select
                label="Loft Suite add-on?"
                options={loftInterestOptions}
                {...form.register("loftSuite")}
              />
              <Select
                label="How did you hear about us?"
                options={referralOptions}
                {...form.register("referral")}
              />
              <Textarea
                label="Tell us about your event"
                placeholder="Share your vibe, priorities, vendors, or timing."
                {...form.register("message")}
                error={form.formState.errors.message?.message}
              />
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Request Tour & Availability"}
              </Button>
              <p className="mt-3 text-xs text-parchment/70">
                We typically respond within a few minutes during business hours. Tours are by
                appointment only.
              </p>
            </form>
          </Card>
          <div className="space-y-6 text-sm text-parchment/80">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-accent-gold">Visit us</p>
              <p className="mt-2 text-2xl text-white">{CONTACT_INFO.addressLine}</p>
              {CONTACT_INFO.mapLink && (
                <a
                  href={CONTACT_INFO.mapLink}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex items-center text-accent-gold hover:text-accent-gold/80 transition underline"
                >
                  View on Google Maps →
                </a>
              )}
            </div>
            <div className="w-full overflow-hidden rounded-lg border border-parchment/20">
              <iframe
                src={`https://www.google.com/maps?q=${encodeURIComponent(CONTACT_INFO.addressLine)}&output=embed`}
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
                title="Theos Event Venue Location"
              />
            </div>
            <div className="space-y-2">
              <p>Call: <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-accent-gold transition">{CONTACT_INFO.phone}</a></p>
              <p>Email: <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-accent-gold transition">{CONTACT_INFO.email}</a></p>
            </div>
            <p>
              Tours are by appointment only. We&apos;ll coordinate a time that fits your planning schedule and invite your planner or key vendors to join.
            </p>
            <div className="mt-6 rounded-lg border border-parchment/20 bg-parchment/5 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-accent-gold mb-2">
                Planning Resources
              </p>
              <p className="text-sm text-parchment/80 mb-3">
                New to planning a Galveston wedding? Check out our comprehensive guide with vendor recommendations, budgeting tips, and more.
              </p>
              <Link
                href="/blog/galveston-wedding-guide-2026"
                className="text-sm font-medium text-accent-gold hover:text-accent-gold/80 transition underline"
              >
                Read Galveston Wedding Guide 2026 →
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
