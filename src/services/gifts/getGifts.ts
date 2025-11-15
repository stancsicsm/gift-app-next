import { apiClient } from "@/lib/apiClient";
import { Gift } from "@/services/gifts/gift.types";

export const getGifts = async () => {
  const response = await apiClient("/gifts", {
    cache: "no-store",
  });

  if (!response.ok) {
    const errorText = await response.text().catch(() => "Unknown error");
    throw new Error(`Failed to fetch gifts: ${response.status} - ${errorText}`);
  }

  const giftsResponse = await response.json();
  return Gift.array().parse(giftsResponse.gifts);
};
