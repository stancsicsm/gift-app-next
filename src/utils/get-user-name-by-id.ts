import type { User } from "@/services/users/user.types";

export const getUserNameById = (users: User[], id: number) => {
  const user = users.find((user) => user.id === id);
  return user ? user.name : "";
};
