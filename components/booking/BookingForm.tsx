"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { useToast } from "@/components/ui/Toast";
import { trackEvent } from "@/components/analytics/GoogleAnalytics";

const bookingSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().optional(),
  date: z.string().min(1, "Date is required"),
  time: z.string().min(1, "Time is required"),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

interface BookingFormProps {
  onSuccess?: () => void;
}

export const BookingForm = ({ onSuccess }: BookingFormProps) => {
  const { addToast } = useToast();
  const [isChecking, setIsChecking] = useState(false);
  const [isBooking, setIsBooking] = useState(false);
  const [available, setAvailable] = useState<boolean | null>(null);

  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
    },
  });

  const checkAvailability = async () => {
    const date = form.getValues("date");
    if (!date) {
      addToast({ title: "Please select a date first", variant: "error" });
      return;
    }

    setIsChecking(true);
    try {
      const response = await fetch("/api/availability", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ date, durationHours: 1 }),
      });
      const data = await response.json();
      setAvailable(data.available);
      if (data.available) {
        addToast({ title: "This date and time is available!", variant: "success" });
      } else {
        addToast({ title: "This date is not available", variant: "error" });
      }
    } catch (error) {
      console.error(error);
      addToast({ title: "Could not check availability", variant: "error" });
    } finally {
      setIsChecking(false);
    }
  };

  const onSubmit = async (values: BookingFormValues) => {
    setIsBooking(true);
    try {
      const response = await fetch("/api/book-tour", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Booking failed");
      }

      // Track booking
      trackEvent("book_tour", "booking", values.date);
      
      addToast({ title: "Tour booked successfully! We'll be in touch soon.", variant: "success" });
      form.reset();
      setAvailable(null);
      onSuccess?.();
    } catch (error) {
      console.error(error);
      addToast({ title: "Could not book tour. Please try again.", variant: "error" });
    } finally {
      setIsBooking(false);
    }
  };

  const selectedDate = form.watch("date");
  const selectedTime = form.watch("time");

  return (
    <Card className="bg-white">
      <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
        <h3 className="font-serif text-2xl">Book a Tour</h3>
        <p className="text-sm text-charcoal/70">Select your preferred date and time for a private tour of Theos.</p>

        <Input
          label="Full name"
          placeholder="Your name"
          {...form.register("name")}
          error={form.formState.errors.name?.message}
        />

        <Input
          label="Email"
          type="email"
          placeholder="you@email.com"
          {...form.register("email")}
          error={form.formState.errors.email?.message}
        />

        <Input
          label="Phone (optional)"
          type="tel"
          placeholder="(xxx) xxx-xxxx"
          {...form.register("phone")}
        />

        <div className="grid gap-4 sm:grid-cols-2">
          <Input
            label="Preferred date"
            type="date"
            min={new Date().toISOString().split("T")[0]}
            {...form.register("date")}
            error={form.formState.errors.date?.message}
          />

          <Input
            label="Preferred time"
            type="time"
            {...form.register("time")}
            error={form.formState.errors.time?.message}
          />
        </div>

        {selectedDate && selectedTime && (
          <div className="flex gap-2">
            <Button
              type="button"
              variant="secondary"
              onClick={checkAvailability}
              disabled={isChecking}
              className="flex-1"
            >
              {isChecking ? "Checking..." : "Check Availability"}
            </Button>
          </div>
        )}

        {available !== null && (
          <div
            className={`rounded-lg p-3 text-sm ${
              available ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"
            }`}
          >
            {available ? "✓ This date and time is available!" : "✗ This date is not available. Please choose another."}
          </div>
        )}

        <Button type="submit" className="w-full" disabled={isBooking || available === false}>
          {isBooking ? "Booking..." : "Book Tour"}
        </Button>

        <p className="text-xs text-charcoal/60 text-center">
          We&apos;ll confirm your tour via email within a few minutes.
        </p>
      </form>
    </Card>
  );
};

