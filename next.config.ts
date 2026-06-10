import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.squarespace-cdn.com",
        pathname: "/content/v1/**",
      },
      {
        protocol: "https",
        hostname: "lcpndbwqgdvduwneeplr.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [];
  },
};

export default nextConfig;
