export type Gift = {
  id: string;
  title: string;
  requestedBy: string;
  reservedBy: "me" | "other" | null;
  imageSrc?: string;
};

export const mockGifts: Gift[] = [
  {
    id: "1",
    title: "New Laptop",
    requestedBy: "Alice",
    reservedBy: "other",
    imageSrc: "https://picsum.photos/200",
  },
  {
    id: "2",
    title: "Headphones",
    requestedBy: "Charlie",
    reservedBy: "me",
  },
  {
    id: "3",
    title: "Smartwatch",
    requestedBy: "Bob",
    reservedBy: null,
  },
  {
    id: "4",
    title: "Backpack",
    requestedBy: "Diana",
    reservedBy: "other",
  },
  {
    id: "5",
    title: "E-Reader",
    requestedBy: "Ethan",
    reservedBy: "me",
    imageSrc: "https://picsum.photos/201",
  },
  {
    id: "6",
    title: "Bluetooth Speaker",
    reservedBy: null,
    requestedBy: "Fiona",
  },
  {
    id: "7",
    title: "Travel Mug with long long long long long name",
    requestedBy: "George",
    reservedBy: null,
    imageSrc: "https://picsum.photos/202",
  },
  {
    id: "8",
    title: "Fitness Tracker",
    requestedBy: "Hannah",
    reservedBy: "other",
  },
];
