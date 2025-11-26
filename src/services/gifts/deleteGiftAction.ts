"use server";

import { redirect } from "next/navigation";
import { apiClient } from "@/lib/apiClient";

type DeleteGiftResult =
  | {
      success: true;
      message: string;
    }
  | {
      success: false;
      error: string;
    };

export const deleteGiftAction = async (
  giftId: number,
): Promise<DeleteGiftResult> => {
  try {
    const response = await apiClient(`/gifts/${giftId}`, {
      method: "DELETE",
      cache: "no-store",
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      return {
        success: false,
        error: `Something went wrong. Please try again. ${errorData.error ? `Details: ${errorData.error}` : ""}`,
      };
    }
  } catch (error) {
    console.error("Delete gift error:", error);
    return {
      success: false,
      error: "Something went wrong. Please try again.",
    };
  }

  redirect("/gifts/own?action=delete");
};
