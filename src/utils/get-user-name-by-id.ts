import type { User } from "@/mock-data/mockUsers";

export const getUserNameById = (users: User[], id: number) => {
  const user = users.find((user) => user.id === id);
  return user ? user.name : "";
};
