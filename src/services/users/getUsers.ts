import { apiClient } from "@/lib/apiClient";
import { User } from "@/services/users/user.types";

export const getUsers = async () => {
  const response = await apiClient("/users", {
    cache: "no-store",
  });

  if (!response.ok) {
    const errorText = await response.text().catch(() => "Unknown error");
    throw new Error(`Failed to fetch users: ${response.status} - ${errorText}`);
  }

  const usersResponse = await response.json();
  return User.array().parse(usersResponse.data);
};
