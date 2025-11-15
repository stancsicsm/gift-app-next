import { apiClient } from "@/lib/apiClient";
import { Gift } from "@/services/gifts/gift.types";

type GetGiftParams = {
  giftId: number;
};

export const getGift = async ({ giftId }: GetGiftParams) => {
  const response = await apiClient(`/gifts/${giftId}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    const errorText = await response.text().catch(() => "Unknown error");
    throw new Error(`Failed to fetch gift: ${response.status} - ${errorText}`);
  }

  const giftResponse = await response.json();
  return Gift.parse(giftResponse.data);
};
