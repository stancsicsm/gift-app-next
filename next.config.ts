import type { NextConfig } from "next";

const buildTimestamp = new Date().toISOString();
const getCommitHash = () => {
  try {
    return require("node:child_process")
      .execSync("git rev-parse --short HEAD")
      .toString()
      .trim();
  } catch (_e) {
    return process.env.GIT_COMMIT ?? "unknown";
  }
};

const commitHash = getCommitHash();

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
