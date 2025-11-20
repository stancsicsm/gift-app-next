"use server";

import { apiClient } from "@/lib/apiClient";
import { UploadedFile } from "@/services/upload/file.types";

type UploadState = {
  error?: string;
  file?: UploadedFile;
} | null;

export const uploadAction = async (
  _prevState: UploadState,
  formData: FormData,
): Promise<UploadState> => {
  const image = formData.get("image");

  if (!(image instanceof File) || image.size === 0) {
    return { error: "No file provided" };
  }

  try {
    const imageFormData = new FormData();
    imageFormData.append("image", image);

    const response = await apiClient("/upload", {
      method: "POST",
      body: imageFormData,
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      return {
        error: `Upload failed: ${errorData.error || "Unknown error"}`,
      };
    }

    const fileResponse = await response.json();
    return { file: UploadedFile.parse(fileResponse.data) };
  } catch (error) {
    console.error("Error uploading image:", error);
    return {
      error: "Failed to upload image. Please try again.",
    };
  }
};
