import { z } from "zod";

export const ReservedByOptions = z.enum(["me", "other"]);
export type ReservedByOptions = z.infer<typeof ReservedByOptions>;

export const Gift = z.object({
  id: z.number(),
  name: z.string(),
  price: z.number().nullable(),
  description: z.string().nullable(),
  link: z.string().nullable(),
  imageUrl: z.string().nullable(),
  createdBy: z.number(),
  reservedBy: ReservedByOptions.nullable(),
  createdAt: z.string(),
  updatedAt: z.string(),
  reservedAt: z.string().nullable(),
});
export type Gift = z.infer<typeof Gift>;
