export type User = {
  id: number;
  name: string;
  imageSrc?: string;
};

export const mockUsers: User[] = [
  {
    id: 1,
    name: "Alice",
    imageSrc: "https://i.pravatar.cc/150?img=1",
  },
  { id: 2, name: "Bob", imageSrc: "https://i.pravatar.cc/150?img=2" },
  {
    id: 3,
    name: "Charlie",
  },
  {
    id: 4,
    name: "Diana",
    imageSrc: "https://i.pravatar.cc/150?img=4",
  },
  {
    id: 5,
    name: "Ethan",
    imageSrc: "https://i.pravatar.cc/150?img=5",
  },
  {
    id: 6,
    name: "Fiona",
  },
];
