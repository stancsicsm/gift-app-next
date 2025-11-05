"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { apiClient } from "@/lib/apiClient";

export const logoutAction = async () => {
  try {
    const response = await apiClient("/auth/logout", {
      method: "POST",
    });

    if (!response.ok) {
      console.error("Logout failed with status:", response.status);
    }
  } catch (error) {
    console.error("Logout error:", error);
  }

  // Delete the JWT cookie from Next.js
  const cookieStore = await cookies();
  cookieStore.delete("jwt");
  console.log("JWT cookie deleted");

  redirect("/login");
};
