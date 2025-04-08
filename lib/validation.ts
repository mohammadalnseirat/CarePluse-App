import { z } from "zod";

export const UserFormValidation = z.object({
  name: z
    .string()
    .min(2, "Username must be at least 2 characters.")
    .max(20, "Username must be at most 20 characters."),
  email: z.string().email("Invalid email address."),
  phone: z
    .string()
    .refine((Phone) => /^\+\d{10,15}$/.test(Phone), "Invalid Phone Number."),
});
