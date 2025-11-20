import { cookies } from "next/headers";

type RequestOptions = RequestInit & {
  isServer?: boolean;
};

/**
 * API client that handles cookie forwarding for authenticated requests
 * @param endpoint - API endpoint (e.g., "/user/profile")
 * @param options - Fetch options
 * @returns Fetch response
 */
export const apiClient = async (
  endpoint: string,
  options: RequestOptions = {},
) => {
  const { isServer = true, ...fetchOptions } = options;

  const baseURL = process.env.NEXT_PUBLIC_API_URL;
  const url = `${baseURL}${endpoint}`;

  const isFormData = fetchOptions.body instanceof FormData;

  const defaultOptions: RequestInit = {
    credentials: "include",
    headers: {
      ...(isFormData ? {} : { "Content-Type": "application/json" }),
      ...options.headers,
    },
  };

  // For server-side requests, forward cookies
  if (isServer && typeof window === "undefined") {
    const cookieStore = await cookies();
    const jwt = cookieStore.get("jwt");

    if (jwt) {
      defaultOptions.headers = {
        ...defaultOptions.headers,
        Cookie: `jwt=${jwt.value}`,
      };
    }
  }

  return fetch(url, { ...defaultOptions, ...fetchOptions });
};
