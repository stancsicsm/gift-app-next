import { apiClient } from "@/lib/apiClient";
import { User } from "@/services/users/user.types";

export const getCurrentUser = async () => {
  const response = await apiClient("/users/current", {
    cache: "no-store",
  });

  if (!response.ok) {
    const errorText = await response.text().catch(() => "Unknown error");
    throw new Error(
      `Failed to fetch current user: ${response.status} - ${errorText}`,
    );
  }

  const userResponse = await response.json();
  return User.parse(userResponse.data);
};
