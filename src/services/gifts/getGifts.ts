import { apiClient } from "@/lib/apiClient";

export const getGifts = async () => {
  const response = await apiClient("/gifts", {
    cache: "no-store",
  });

  if (!response.ok) {
    const errorText = await response.text().catch(() => "Unknown error");
    throw new Error(`Failed to fetch gifts: ${response.status} - ${errorText}`);
  }

  const gifts = await response.json();
  return gifts;
};
