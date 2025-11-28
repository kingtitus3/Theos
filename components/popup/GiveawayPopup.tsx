"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { useToast } from "@/components/ui/Toast";
import { trackEvent } from "@/components/analytics/GoogleAnalytics";

const emailSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

type EmailFormValues = z.infer<typeof emailSchema>;

export function GiveawayPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { addToast } = useToast();

  const form = useForm<EmailFormValues>({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      email: "",
    },
  });

  useEffect(() => {
    // Check if user has already seen the popup (using localStorage)
    const hasSeenPopup = localStorage.getItem("theos-giveaway-popup-seen");
    const popupDismissed = sessionStorage.getItem("theos-giveaway-popup-dismissed");
    
    // Show popup if they haven't seen it and haven't dismissed it this session
    if (!hasSeenPopup && !popupDismissed) {
      // Delay showing popup by 2 seconds for better UX
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("theos-giveaway-popup-dismissed", "true");
  };

  const handleSubmit = async (data: EmailFormValues) => {
    setIsSubmitting(true);
    trackEvent("newsletter_signup", "engagement", "giveaway_popup");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to submit email");
      }

      // Mark as seen so it doesn't show again
      localStorage.setItem("theos-giveaway-popup-seen", "true");
      sessionStorage.setItem("theos-giveaway-popup-dismissed", "true");

      addToast({
        title: "Email saved! 🎉",
        variant: "success",
      });

      setIsOpen(false);
      form.reset();
    } catch (error) {
      console.error("Newsletter signup error:", error);
      addToast({
        title: error instanceof Error ? `Error: ${error.message}` : "Failed to submit email. Please try again.",
        variant: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 sm:p-8 animate-in fade-in zoom-in-95 duration-300">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-charcoal/40 hover:text-charcoal transition"
          aria-label="Close"
        >
          <X size={24} />
        </button>

        {/* Content */}
        <div className="text-center">
          <div className="inline-block px-4 py-2 mb-4 bg-accent-brick/10 text-accent-brick text-sm font-semibold uppercase tracking-wider rounded-full">
            🎉 Special Offer 🎉
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl text-charcoal mb-3">
            Win a Free Wedding!
          </h2>
          
          <p className="text-charcoal/70 mb-6">
            Enter our giveaway for a chance to win a <strong>FREE Friday or Sunday wedding venue rental</strong> at Theos!
          </p>

          <div className="bg-accent-gold/10 border-2 border-accent-gold rounded-lg p-4 mb-6">
            <p className="text-sm font-semibold text-charcoal mb-1">
              ✨ Get 5% Off Your Booking
            </p>
            <p className="text-xs text-charcoal/70">
              Sign up for our newsletter and receive a <strong>5% discount code</strong> you can use on any booking!
            </p>
          </div>

          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
            <Input
              label="Email Address"
              type="email"
              placeholder="your@email.com"
              {...form.register("email")}
              error={form.formState.errors.email?.message}
            />

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                type="submit"
                size="lg"
                className="flex-1"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Get 5% Off + Enter Giveaway"}
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="lg"
                onClick={handleClose}
                className="flex-1 border border-charcoal/20"
              >
                Maybe Later
              </Button>
            </div>

            <p className="text-xs text-charcoal/50 mt-4">
              By entering your email, you&apos;ll receive the discount code and be entered into our giveaway. 
              You can unsubscribe at any time.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

