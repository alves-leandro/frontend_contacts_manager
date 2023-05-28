import { z } from "zod";

export const schema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string(),
  secondEmail: z.string().optional().nullable(),
  secondPhone: z.string().optional().nullable(),
  githubUser: z.string().optional().nullable(),
  linkedinUser: z.string().optional().nullable(),
  portifolioUrl: z.string().optional().nullable(),
});

export type CreateContactData = z.infer<typeof schema>;
