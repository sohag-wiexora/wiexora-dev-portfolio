import { z } from "zod";

export const projectTypes = [
  "Full-stack web app",
  "SaaS / web application",
  "Backend / API",
  "AI integration / automation",
  "Cloud and deployment",
  "Performance / security review",
  "Not sure yet",
] as const;

export const budgetRanges = [
  "Under US$500",
  "US$500–1,500",
  "US$1,500–5,000",
  "US$5,000+",
  "Not sure yet",
] as const;

export const timelines = ["As soon as possible", "Within 1 month", "1–3 months", "Flexible"] as const;

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(100),
  email: z.string().trim().email("Please enter a valid email address.").max(200),
  projectType: z.enum(projectTypes, { errorMap: () => ({ message: "Choose a project type." }) }),
  budget: z.enum(budgetRanges, { errorMap: () => ({ message: "Choose a budget range." }) }),
  timeline: z.enum(timelines, { errorMap: () => ({ message: "Choose a timeline." }) }),
  message: z.string().trim().min(20, "Please write at least 20 characters.").max(4000),
  website: z.string().max(0).optional(), // honeypot, must stay empty
  startedAt: z.number().optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;
export type FieldErrors = Partial<Record<keyof ContactInput, string>>;
