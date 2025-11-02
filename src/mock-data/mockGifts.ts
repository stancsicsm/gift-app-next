export type Gift = {
  id: number;
  title: string;
  requestedBy: number;
  reservedBy: "me" | "other" | null;
  imageSrc?: string;
  description?: string;
  price?: number;
  link?: string;
};

export const mockGifts: Gift[] = [
  {
    id: 1,
    title: "New Laptop",
    requestedBy: 1,
    reservedBy: "other",
    imageSrc: "https://picsum.photos/200",
    description:
      "A powerful laptop for work and gaming with 16GB RAM and 512GB SSD",
    price: 1299.99,
    link: "https://example.com/laptop",
  },
  {
    id: 2,
    title: "Headphones",
    requestedBy: 3,
    reservedBy: "me",
    description:
      "Noise-cancelling wireless headphones with 30-hour battery life",
    price: 249.99,
  },
  {
    id: 3,
    title: "Smartwatch",
    requestedBy: 2,
    reservedBy: null,
    description: "Fitness tracking smartwatch with heart rate monitor and GPS",
    price: 349.99,
    link: "https://example.com/smartwatch",
  },
  {
    id: 4,
    title: "Backpack",
    requestedBy: 4,
    reservedBy: "other",
    description: "Durable waterproof backpack with laptop compartment",
    price: 79.99,
    link: "https://example.com/backpack",
  },
  {
    id: 5,
    title: "E-Reader",
    requestedBy: 5,
    reservedBy: "me",
    imageSrc: "https://picsum.photos/201",
    description:
      "Waterproof e-reader with adjustable warm light and 8GB storage",
    price: 139.99,
    link: "https://example.com/ereader",
  },
  {
    id: 6,
    title: "Bluetooth Speaker",
    reservedBy: null,
    requestedBy: 1,
    description: "Portable waterproof speaker with 360-degree sound",
    price: 89.99,
  },
  {
    id: 7,
    title: "Travel Mug with long long long long long name",
    requestedBy: 4,
    reservedBy: null,
    imageSrc: "https://picsum.photos/202",
    description:
      "Insulated stainless steel travel mug that keeps drinks hot for 6 hours",
    price: 29.99,
    link: "https://example.com/mug",
  },
  {
    id: 8,
    title: "Fitness Tracker",
    requestedBy: 1,
    reservedBy: "other",
    price: 79.99,
  },
];
