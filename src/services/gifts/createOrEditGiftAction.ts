"use server";

import { redirect } from "next/navigation";
import { apiClient } from "@/lib/apiClient";

type NewGiftState = {
  error?: string;
  payload?: FormData;
} | null;

export const createOrEditGiftAction = async (
  createOrEdit: "create" | "edit",
  giftId: number | null,
  _prevState: NewGiftState,
  formData: FormData,
): Promise<NewGiftState> => {
  const name = formData.get("name");
  const description = formData.get("description");
  const price = formData.get("price");
  const link = formData.get("link");
  const imageUrl = formData.get("imageUrl");

  if (typeof name !== "string" || name.trim() === "") {
    return { error: "Gift name is required", payload: formData };
  }

  const body = {
    name,
    description:
      typeof description === "string" && description.trim() !== ""
        ? description
        : undefined,
    price: price && !Number.isNaN(Number(price)) ? Number(price) : undefined,
    link: typeof link === "string" && link.trim() !== "" ? link : undefined,
    imageUrl:
      typeof imageUrl === "string" && imageUrl.trim() !== ""
        ? imageUrl
        : undefined,
  };

  try {
    const response = await apiClient(
      createOrEdit === "edit" && giftId ? `/gifts/${giftId}` : "/gifts",
      {
        method: giftId ? "PATCH" : "POST",
        body: JSON.stringify(body),
        cache: "no-store",
      },
    );

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));

      if (response.status === 400) {
        return {
          error: `Error: ${errorData.error}` || "Invalid gift data",
          payload: formData,
        };
      }
      return {
        error: `Something went wrong. Please try again. ${errorData.error ? `Details: ${errorData.error}` : ""}`,
        payload: formData,
      };
    }
  } catch (error) {
    console.error(
      `Error while ${createOrEdit === "create" ? "creating" : "editing"} gift:`,
      error,
    );
    return {
      error: "Something went wrong. Please try again.",
      payload: formData,
    };
  }

  redirect("/gifts/own?success=true");
};
