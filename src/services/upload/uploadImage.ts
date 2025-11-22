import { apiClient } from "@/lib/apiClient";
import { UploadedFile } from "@/services/upload/file.types";

export const uploadImage = async (file: File): Promise<UploadedFile> => {
  const formData = new FormData();
  formData.append("image", file);

  const response = await apiClient("/upload", {
    method: "POST",
    body: formData,
    isServer: false,
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.error || "Failed to upload image");
  }

  const fileResponse = await response.json();
  return UploadedFile.parse(fileResponse.data);
};
