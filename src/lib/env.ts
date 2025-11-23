export const getApiUrl = () => {
  if (typeof window !== "undefined") {
    return "/api";
  }

  return (
    process.env["NEXT_PUBLIC_API_URL"] || process.env.NEXT_PUBLIC_API_URL || ""
  );
};

declare global {
  interface Window {
    __ENV: {
      NEXT_PUBLIC_API_URL: string;
    };
  }
}
