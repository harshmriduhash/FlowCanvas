import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Suppress TypeScript errors during production build (monorepo pattern)
  typescript: {
    ignoreBuildErrors: true,
  },
  // Transpile monorepo packages
  transpilePackages: ["@flowcanvas/db"],
  // Allow images from common avatar sources
  images: {
    remotePatterns: [
      { hostname: "lh3.googleusercontent.com" },
      { hostname: "avatars.githubusercontent.com" },
    ],
  },
};

export default nextConfig;
