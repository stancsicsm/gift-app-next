import type { NextConfig } from "next";

const buildTimestamp = new Date().toISOString();
const commitHash = require("node:child_process")
  .execSync("git rev-parse --short HEAD")
  .toString()
  .trim();

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
    NEXT_PUBLIC_COMMIT_HASH: commitHash,
  },
};

export default nextConfig;
