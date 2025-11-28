"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { useToast } from "@/components/ui/Toast";
import { trackEvent } from "@/components/analytics/GoogleAnalytics";
import { SocialIcons } from "@/components/ui/SocialIcons";
import Link from "next/link";

const giveawaySchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(1, "Phone number is required"),
  partnerName: z.string().optional(),
  preferredDate: z.string().optional(),
  instagramHandle: z.string().optional(),
  tiktokHandle: z.string().optional(),
  howDidYouHear: z.string().optional(),
  agreeToTerms: z.boolean().refine((val) => val === true, {
    message: "You must agree to the terms to enter",
  }),
}).refine((data) => data.instagramHandle || data.tiktokHandle, {
  message: "Please provide either an Instagram or TikTok handle",
  path: ["instagramHandle"],
});

type GiveawayFormValues = z.infer<typeof giveawaySchema>;

export const GiveawaySection = () => {
  const { addToast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<GiveawayFormValues>({
    resolver: zodResolver(giveawaySchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      partnerName: "",
      preferredDate: "",
      instagramHandle: "",
      tiktokHandle: "",
      howDidYouHear: "",
      agreeToTerms: false,
    },
  });

  const onSubmit = async (data: GiveawayFormValues) => {
    setIsSubmitting(true);
    trackEvent("giveaway_entry", "engagement", "giveaway_form_submit");

    try {
      const response = await fetch("/api/giveaway", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to submit entry");
      }

      addToast({
        title: "Entry submitted! 🎉 Good luck! We'll announce the winner soon.",
        variant: "success",
      });

      form.reset();
    } catch (error) {
      console.error("Giveaway entry error:", error);
      addToast({
        title: error instanceof Error ? `Error: ${error.message}` : "Failed to submit entry. Please try again.",
        variant: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-24">
      <Container>
        <div className="mx-auto max-w-3xl">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-block px-4 py-2 mb-4 bg-accent-brick/10 text-accent-brick text-sm font-semibold uppercase tracking-wider rounded-full">
              🎉 Bridal Giveaway 🎉
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-charcoal mb-4">
              Win a Free Wedding at Theos
            </h1>
            <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
              We&apos;re celebrating the launch of <strong>THEOS Galveston</strong> by giving one couple a{" "}
              <strong>FREE wedding venue rental</strong> in our historic brick hall downtown!
            </p>
          </div>

          {/* Prize Details */}
          <Card className="mb-8 sm:mb-12 border-2 border-accent-gold">
            <div className="p-6 sm:p-8">
              <h2 className="font-serif text-2xl sm:text-3xl text-charcoal mb-6">What&apos;s Included</h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">✨</span>
                  <div>
                    <p className="font-semibold text-charcoal">Full-day venue rental</p>
                    <p className="text-sm text-charcoal/70">Choose ANY Friday or Sunday date between now and March 31, 2026</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">✨</span>
                  <div>
                    <p className="font-semibold text-charcoal">Loft Suite access</p>
                    <p className="text-sm text-charcoal/70">Perfect for getting ready photos</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">✨</span>
                  <div>
                    <p className="font-semibold text-charcoal">Up to 180 guests</p>
                    <p className="text-sm text-charcoal/70">Full capacity of our 3,200 sq ft space</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">✨</span>
                  <div>
                    <p className="font-semibold text-charcoal">Tables & chairs included</p>
                    <p className="text-sm text-charcoal/70">Basic setup provided</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-charcoal/10 pt-6">
                <p className="text-sm text-charcoal/70 mb-2">
                  <strong className="text-charcoal">What&apos;s Not Included:</strong>
                </p>
                <p className="text-sm text-charcoal/70">
                  Catering, decor, DJ/music, photographer, bartending, Airbnb lodging, or any additional vendors.
                  (This giveaway is for the <em>venue rental only</em>.)
                </p>
              </div>
            </div>
          </Card>

          {/* Entry Form */}
          <Card>
            <div className="p-6 sm:p-8">
              <h2 className="font-serif text-2xl sm:text-3xl text-charcoal mb-2">How to Enter</h2>
              <ol className="list-decimal list-inside space-y-2 text-charcoal/70 mb-8 text-sm sm:text-base">
                <li>Follow <a href="https://www.instagram.com/theosgalveston/" target="_blank" rel="noreferrer" className="text-accent-brick hover:underline">@theosgalveston</a> on Instagram</li>
                <li>Like our giveaway post</li>
                <li>Tag your fiancé, friends, or vendors (each tag = 1 entry!)</li>
                <li>Share to your story for +5 bonus entries</li>
                <li>Fill out the form below (required)</li>
              </ol>

              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <Input
                    label="First Name *"
                    {...form.register("firstName")}
                    error={form.formState.errors.firstName?.message}
                  />
                  <Input
                    label="Last Name *"
                    {...form.register("lastName")}
                    error={form.formState.errors.lastName?.message}
                  />
                </div>

                <Input
                  label="Email *"
                  type="email"
                  {...form.register("email")}
                  error={form.formState.errors.email?.message}
                />

                <Input
                  label="Phone *"
                  type="tel"
                  {...form.register("phone")}
                  error={form.formState.errors.phone?.message}
                />

                <Input
                  label="Partner's Name (Optional)"
                  {...form.register("partnerName")}
                  error={form.formState.errors.partnerName?.message}
                />

                <Input
                  label="Preferred Wedding Date (Optional)"
                  type="date"
                  {...form.register("preferredDate")}
                  error={form.formState.errors.preferredDate?.message}
                />

                <div>
                  <p className="text-sm font-medium text-charcoal mb-2">
                    Instagram or TikTok Handle *
                  </p>
                  <p className="text-xs text-charcoal/60 mb-3">
                    At least one is required to verify your entry
                  </p>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Input
                      label="Instagram Handle"
                      placeholder="@username"
                      {...form.register("instagramHandle")}
                      error={form.formState.errors.instagramHandle?.message}
                    />
                    <Input
                      label="TikTok Handle"
                      placeholder="@username"
                      {...form.register("tiktokHandle")}
                      error={form.formState.errors.tiktokHandle?.message}
                    />
                  </div>
                  {form.formState.errors.instagramHandle && (
                    <p className="text-sm text-red-600 mt-1">
                      {form.formState.errors.instagramHandle.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    How did you hear about us? (Optional)
                  </label>
                  <select
                    {...form.register("howDidYouHear")}
                    className="w-full px-4 py-2 border border-charcoal/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-brick"
                  >
                    <option value="">Select one...</option>
                    <option value="instagram">Instagram</option>
                    <option value="facebook">Facebook</option>
                    <option value="tiktok">TikTok</option>
                    <option value="google">Google</option>
                    <option value="planner">Wedding Planner</option>
                    <option value="friend">Friend/Referral</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    {...form.register("agreeToTerms")}
                    className="mt-1 w-4 h-4 text-accent-brick border-charcoal/20 rounded focus:ring-accent-brick"
                  />
                  <label className="text-sm text-charcoal/70">
                    I agree to the giveaway terms and conditions *
                    {form.formState.errors.agreeToTerms && (
                      <span className="block text-red-600 mt-1">
                        {form.formState.errors.agreeToTerms.message}
                      </span>
                    )}
                  </label>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Enter Giveaway 🎉"}
                </Button>
              </form>

              <p className="mt-6 text-xs text-charcoal/60 text-center">
                Winner will be announced on a date to be determined. No purchase necessary. Void where prohibited.
              </p>
            </div>
          </Card>

          {/* Social Proof */}
          <div className="mt-8 text-center">
            <p className="text-sm text-charcoal/70 mb-4">
              Follow us on social media for updates and winner announcement:
            </p>
            <div className="flex justify-center">
              <SocialIcons iconSize={24} className="text-accent-brick [&_a:hover]:text-accent-brick/80" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

