import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow all local and external images
    remotePatterns: [],
    // Optimize local images
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
