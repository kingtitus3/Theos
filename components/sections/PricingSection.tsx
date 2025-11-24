"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  AVAILABILITY_FORM_COPY,
  PRICING_PACKAGES,
} from "@/lib/constants";
import { availabilityFormSchema, type AvailabilityFormValues } from "@/lib/validation";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { useToast } from "@/components/ui/Toast";

const eventOptions = [
  { label: "Wedding", value: "wedding" },
  { label: "Social Event", value: "social" },
  { label: "Corporate", value: "corporate" },
  { label: "Production", value: "production" },
];

const timeOfDayOptions = [
  { label: "Morning", value: "Morning" },
  { label: "Afternoon", value: "Afternoon" },
  { label: "Evening", value: "Evening" },
];

const loftOptions = [
  { label: "Yes", value: "yes" },
  { label: "No", value: "no" },
  { label: "Undecided", value: "undecided" },
];

export const PricingSection = () => {
  const { addToast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<AvailabilityFormValues>({
    resolver: zodResolver(availabilityFormSchema),
    defaultValues: {
      eventType: "",
      guestCount: "",
      preferredDate: "",
      timeOfDay: "Evening",
      loftSuite: "undecided",
    },
  });

  const onSubmit = async (values: AvailabilityFormValues) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    console.log("Availability inquiry", values);
    addToast({ title: "Thanks! We'll confirm availability shortly.", variant: "success" });
    form.reset();
    setIsSubmitting(false);
  };

  return (
    <section id="pricing" className="bg-sand py-16 sm:py-24">
      <Container>
        <SectionHeader
          eyebrow="Pricing"
          title="Straightforward packages"
          description="Pick the timeframe that works for you and layer on the Loft Suite for more comfort."
        />
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="grid gap-6 md:grid-cols-2">
              {PRICING_PACKAGES.map((pkg) => (
                <Card key={pkg.name} className="h-full">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-serif text-2xl">{pkg.name}</h3>
                      <p className="text-sm text-accent-brick">{pkg.price}</p>
                    </div>
                    <ul className="space-y-2 text-sm text-charcoal/70">
                      {pkg.details.map((detail) => (
                        <li key={detail}>• {detail}</li>
                      ))}
                    </ul>
                    <p className="text-sm text-charcoal/60">{pkg.note}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
          <Card className="h-fit bg-white">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold">{AVAILABILITY_FORM_COPY.heading}</h3>
                <p className="mt-2 text-sm text-charcoal/70">{AVAILABILITY_FORM_COPY.description}</p>
              </div>
              <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
                <Select
                  label="Event type"
                  options={eventOptions}
                  {...form.register("eventType")}
                  error={form.formState.errors.eventType?.message}
                />
                <Input
                  label="Estimated guest count"
                  placeholder="e.g. 120"
                  {...form.register("guestCount")}
                  error={form.formState.errors.guestCount?.message}
                />
                <Input
                  label="Preferred date"
                  type="date"
                  {...form.register("preferredDate")}
                />
                <Select
                  label="Time of day"
                  options={timeOfDayOptions}
                  {...form.register("timeOfDay")}
                  error={form.formState.errors.timeOfDay?.message}
                  defaultValue="Evening"
                />
                <Select
                  label="Loft Suite add-on?"
                  options={loftOptions}
                  {...form.register("loftSuite")}
                />
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send request"}
                </Button>
              </form>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
};
