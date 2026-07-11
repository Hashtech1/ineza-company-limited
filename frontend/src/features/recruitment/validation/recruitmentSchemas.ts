import { z } from "zod";

export const applicationSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Enter a valid email address"),
  phone: z.string().min(9, "Enter a valid phone number"),
  coverLetter: z.string().max(2000, "Keep it under 2000 characters").optional(),
});

export type ApplicationFormData = z.infer<typeof applicationSchema>;
