import { apiClient } from "@/lib/apiClient";
import { Gift } from "@/services/gifts/gift.types";

type GetGiftsParams = {
  filter?: "own" | "my_reservations";
};

export const getGifts = async ({ filter }: GetGiftsParams) => {
  const params = new URLSearchParams();
  if (filter) {
    params.append("filter", filter);
  }
  const queryString = params.toString();
  const endpoint = queryString ? `/gifts?${queryString}` : "/gifts";

  const response = await apiClient(endpoint, {
    cache: "no-store",
  });

  if (!response.ok) {
    const errorText = await response.text().catch(() => "Unknown error");
    throw new Error(`Failed to fetch gifts: ${response.status} - ${errorText}`);
  }

  const giftsResponse = await response.json();
  return Gift.array().parse(giftsResponse.data);
};
