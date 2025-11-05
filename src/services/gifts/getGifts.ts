export const getGifts = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/gifts`, {
    cache: "no-store",
  });

  if (!response.ok) {
    console.error("Error fetching gifts:", response.statusText);
    throw new Error("Failed to fetch gifts");
  }

  const gifts = await response.json();
  console.log("Gifts fetched:", gifts);
  return gifts;
};
