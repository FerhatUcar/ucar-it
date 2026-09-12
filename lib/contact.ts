import { z } from "zod";

export const contactSubjects = ["Booking", "Question", "Other"] as const;

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter at least 2 characters.").max(100, "Please use at most 100 characters."),
  email: z.string().trim().email("Please enter a valid email address.").max(254),
  subject: z.string().refine((value) => contactSubjects.some((subject) => subject === value), "Please select a subject."),
  message: z.string().trim().min(1, "Please enter a message.").max(5000, "Please use at most 5,000 characters."),
});

export type ContactFormData = z.infer<typeof contactSchema>;
