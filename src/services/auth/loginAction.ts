"use server";

// import { cookies } from "next/headers";
import { redirect } from "next/navigation";

type LoginState = {
  error?: string;
} | null;

const loginAction = async (
  _prevState: LoginState,
  formData: FormData,
): Promise<LoginState> => {
  const email = formData.get("email");
  const password = formData.get("password");

  if (typeof email !== "string" || typeof password !== "string") {
    return { error: "Invalid form submission" };
  }

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
        cache: "no-store",
      },
    );

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error("Login failed with status:", response.status, errorData);

      if (response.status === 400) {
        return { error: errorData.message || "Invalid email or password" };
      }
      if (response.status === 401) {
        return { error: "Invalid email or password" };
      }
      return { error: "Something went wrong. Please try again." };
    }

    // const data = await response.json();
    //
    // (await cookies()).set("authToken", data.token, {
    //   httpOnly: true,
    //   secure: process.env.NODE_ENV === "production",
    //   sameSite: "lax",
    //   maxAge: 60 * 60 * 24, // 1 day
    // });
  } catch (error) {
    console.error("Login error:", error);
    return { error: "Network error. Please try again." };
  }

  redirect("/");
};

export default loginAction;
