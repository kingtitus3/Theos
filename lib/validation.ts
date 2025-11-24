import { z } from "zod";

export const contactFormSchema = z.object({
  fullName: z.string().min(2, "Please share your name."),
  email: z.string().email("Enter a valid email."),
  phone: z.string().optional(),
  eventType: z.string().min(1, "Select an event type."),
  preferredDate: z.string().optional(),
  guestCount: z.string().optional(),
  loftSuite: z.enum(["yes", "no", "undecided"]).default("undecided"),
  referral: z.string().optional(),
  message: z.string().min(10, "Give us a few more details."),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export const availabilityFormSchema = z.object({
  eventType: z.string().min(1, "Choose an event type."),
  guestCount: z.string().min(1, "Add a guest estimate."),
  preferredDate: z.string().optional(),
  timeOfDay: z.enum(["Morning", "Afternoon", "Evening"]),
  loftSuite: z.enum(["yes", "no", "undecided"]).default("undecided"),
});

export type AvailabilityFormValues = z.infer<typeof availabilityFormSchema>;
