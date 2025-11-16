"use server";

import { revalidatePath } from "next/cache";
import { apiClient } from "@/lib/apiClient";

type ReserveGiftResult =
  | {
      success: true;
      message: string;
    }
  | {
      success: false;
      error: string;
    };

export const reserveGiftAction = async (
  giftId: number,
  action: "reserve" | "cancel",
): Promise<ReserveGiftResult> => {
  try {
    const response = await apiClient(`/gifts/${giftId}/reserve`, {
      method: action === "reserve" ? "POST" : "DELETE",
      cache: "no-store",
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      return {
        success: false,
        error: `Something went wrong. Please try again. ${errorData.error ? `Details: ${errorData.error}` : ""}`,
      };
    }

    revalidatePath("/");
    revalidatePath("/gifts/reserved");

    return {
      success: true,
      message:
        action === "reserve"
          ? "Gift reserved successfully!"
          : "Reservation cancelled!",
    };
  } catch (error) {
    console.error("Reserve gift error:", error);
    return {
      success: false,
      error: "Something went wrong. Please try again.",
    };
  }
};
