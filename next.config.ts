import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Set NEXT_PUBLIC_BASE_PATH=/portfolio when deploying to GitHub Pages.
  // Vercel deploys at the root, so leave it unset there.
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;