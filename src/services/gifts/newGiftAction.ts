"use server";

import { redirect } from "next/navigation";
import { apiClient } from "@/lib/apiClient";

type NewGiftState = {
  error?: string;
  payload?: FormData;
} | null;

export const newGiftAction = async (
  _prevState: NewGiftState,
  formData: FormData,
): Promise<NewGiftState> => {
  const name = formData.get("name");
  const description = formData.get("description");
  const price = formData.get("price");
  const link = formData.get("link");

  if (typeof name !== "string" || name.trim() === "") {
    return { error: "Gift name is required", payload: formData };
  }

  const body = {
    name,
    description:
      typeof description === "string" && description.trim() !== ""
        ? description
        : undefined,
    price: price && !isNaN(Number(price)) ? Number(price) : undefined,
    link: typeof link === "string" && link.trim() !== "" ? link : undefined,
  };

  try {
    const response = await apiClient("/gifts", {
      method: "POST",
      body: JSON.stringify(body),
      cache: "no-store",
    });

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
    console.error("New gift error:", error);
    return {
      error: "Something went wrong. Please try again.",
      payload: formData,
    };
  }

  redirect("/gifts/own");
};
