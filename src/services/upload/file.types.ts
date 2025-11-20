import { z } from "zod";

export const UploadedFile = z.object({
  filename: z.string(),
});
export type UploadedFile = z.infer<typeof UploadedFile>;
