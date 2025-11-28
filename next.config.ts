import type { NextConfig } from "next";

const buildTimestamp = new Date().toISOString();

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
  env: {
    NEXT_PUBLIC_BUILD_TIME: buildTimestamp,
  },
};

export default nextConfig;
