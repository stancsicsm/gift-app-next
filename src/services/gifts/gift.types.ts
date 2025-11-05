import { z } from "zod";

export const GiftSchema = z.object({
  id: z.number(),
  title: z.string(),
  requestedBy: z.number(),
  reservedBy: z.number(),
  imageSrc: z.string().optional(),
  description: z.string().optional(),
  price: z.number().optional(),
  link: z.string().optional(),
});

export const GiftDtoSchema = z.object({
  id: z.number(),
  title: z.string(),
  requested_by: z.number(),
  reserved_by: z.enum(["me", "other"]).nullable(),
  image_src: z.string().optional(),
  description: z.string().optional(),
  price: z.number().positive().optional(),
  link: z.string().optional(),
});
export type GiftDto = z.infer<typeof GiftDtoSchema>;
