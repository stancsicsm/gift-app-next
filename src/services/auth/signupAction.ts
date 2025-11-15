"use server";

import { redirect } from "next/navigation";

type SignupState = {
  error?: string;
  payload?: FormData;
} | null;

const signupAction = async (
  _prevState: SignupState,
  formData: FormData,
): Promise<SignupState> => {
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");
  const confirmPassword = formData.get("confirmPassword");

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof password !== "string" ||
    typeof confirmPassword !== "string"
  ) {
    return { error: "Invalid form submission", payload: formData };
  }

  if (password !== confirmPassword) {
    return { error: "Passwords do not match", payload: formData };
  }

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/signup`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
        credentials: "include",
        cache: "no-store",
      },
    );

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));

      if (response.status === 400) {
        return {
          error: `Error: ${errorData.error}` || "Invalid signup data",
          payload: formData,
        };
      }
      return {
        error: "Something went wrong. Please try again.",
        payload: formData,
      };
    }
  } catch (error) {
    console.log("Signup error:", error);
    return {
      error: "Something went wrong. Please try again.",
      payload: formData,
    };
  }

  redirect("/login");
};

export default signupAction;
