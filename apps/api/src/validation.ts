import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(255),
  subject: z.string().trim().max(150).optional().or(z.literal("")),
  message: z.string().trim().min(10).max(2000),
  locale: z.enum(["th", "en"])
});

export type ContactInput = z.infer<typeof contactSchema>;
