"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { apiClient } from "@/lib/apiClient";

type LoginState = {
  error?: string;
  payload?: FormData;
} | null;

export const loginAction = async (
  _prevState: LoginState,
  formData: FormData,
): Promise<LoginState> => {
  const email = formData.get("email");
  const password = formData.get("password");

  if (typeof email !== "string" || typeof password !== "string") {
    return { error: "Invalid form submission", payload: formData };
  }

  try {
    const response = await apiClient(`/auth/login`, {
      method: "POST",
      body: JSON.stringify({ email, password }),
      cache: "no-store",
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));

      if (response.status === 400) {
        return {
          error: errorData.error || "Invalid email or password",
          payload: formData,
        };
      }
      if (response.status === 401) {
        return { error: "Invalid email or password", payload: formData };
      }
      return {
        error: "Something went wrong. Please try again.",
        payload: formData,
      };
    }

    // Extract JWT from Set-Cookie header and set it in Next.js
    const setCookieHeader = response.headers.get("set-cookie");

    if (setCookieHeader) {
      const jwtMatch = setCookieHeader.match(/jwt=([^;]+)/);

      if (jwtMatch?.[1]) {
        const jwtValue = jwtMatch[1];
        const cookieStore = await cookies();
        cookieStore.set("jwt", jwtValue, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: "lax",
          maxAge: 60 * 60 * 24, // 24 hours
          path: "/",
        });
      }
    }
  } catch (error) {
    console.error("Login error:", error);
    return {
      error: "Something went wrong. Please try again.",
      payload: formData,
    };
  }

  redirect("/");
};
