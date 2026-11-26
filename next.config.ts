import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days cache for static images
  },
  compress: true,
};

export default nextConfig;
