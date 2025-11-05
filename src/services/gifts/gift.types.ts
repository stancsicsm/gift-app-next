import { z } from "zod";

export const ReservedByOptions = z.enum(["me", "other"]);
export type ReservedByOptions = z.infer<typeof ReservedByOptions>;

export const Gift = z.object({
  id: z.number(),
  name: z.string(),
  price: z.number().optional(),
  createdBy: z.number(),
  reservedBy: ReservedByOptions.nullable(),
  // imageSrc: z.string().optional(),
  // description: z.string().optional(),
  // link: z.string().optional(),
});
export type Gift = z.infer<typeof Gift>;

export const GiftDto = z.object({
  id: z.number(),
  name: z.string(),
  price: z.number().nonnegative().nullable(),
  created_by: z.number(),
  reserved_by: ReservedByOptions.nullable(),
  created_at: z.string(),
  updated_at: z.string(),
  reserved_at: z.string().nullable(),
  // image_src: z.string().optional(),
  // description: z.string().optional(),
  // link: z.string().optional(),
});
export type GiftDto = z.infer<typeof GiftDto>;

export const mapGiftDtoToDomain = (giftDto: GiftDto): Gift => {
  return {
    id: giftDto.id,
    name: giftDto.name,
    price: giftDto.price ?? undefined,
    createdBy: giftDto.created_by,
    reservedBy: giftDto.reserved_by,
  };
};
