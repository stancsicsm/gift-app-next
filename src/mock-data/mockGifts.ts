export type Gift = {
  id: number;
  title: string;
  requestedBy: number;
  reservedBy: "me" | "other" | null;
  imageSrc?: string;
};

export const mockGifts: Gift[] = [
  {
    id: 1,
    title: "New Laptop",
    requestedBy: 1, // Alice
    reservedBy: "other",
    imageSrc: "https://picsum.photos/200",
  },
  {
    id: 2,
    title: "Headphones",
    requestedBy: 3,
    reservedBy: "me",
  },
  {
    id: 3,
    title: "Smartwatch",
    requestedBy: 2,
    reservedBy: null,
  },
  {
    id: 4,
    title: "Backpack",
    requestedBy: 4,
    reservedBy: "other",
  },
  {
    id: 5,
    title: "E-Reader",
    requestedBy: 5,
    reservedBy: "me",
    imageSrc: "https://picsum.photos/201",
  },
  {
    id: 6,
    title: "Bluetooth Speaker",
    reservedBy: null,
    requestedBy: 1,
  },
  {
    id: 7,
    title: "Travel Mug with long long long long long name",
    requestedBy: 4,
    reservedBy: null,
    imageSrc: "https://picsum.photos/202",
  },
  {
    id: 8,
    title: "Fitness Tracker",
    requestedBy: 1,
    reservedBy: "other",
  },
];
