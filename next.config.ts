import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: ["*.replit.dev", "*.repl.co", "*.pike.replit.dev", "127.0.0.1"],
};

export default nextConfig;
