"use server";

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

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/gifts`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, description, price, link }),
      credentials: "include",
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
        error: "Something went wrong. Please try again.",
        payload: formData,
      };
    }
  } catch (error) {
    console.log("New gift error:", error);
    return {
      error: "Something went wrong. Please try again.",
      payload: formData,
    };
  }

  return null;
};
