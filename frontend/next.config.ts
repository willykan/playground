import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   output: 'standalone',
  // Ensure images from your domain are optimized
  images: {
    domains: ['williamandrade.com'],
  },
};

export default nextConfig;
