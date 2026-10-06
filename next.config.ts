import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  images: {
    unoptimized: true,
    qualities: [65, 75, 80, 85, 90, 100],
    remotePatterns: [],
  },
  compress: true,
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production" ? { exclude: ["error", "warn"] } : false,
  },
  experimental: {
    optimizePackageImports: [
      "react-icons",
      "react-icons/fa",
      "react-icons/io5",
      "react-icons/bs",
      "react-icons/md",
      "@mui/material",
      "@mui/icons-material",
      "react-bootstrap",
      "dayjs",
    ],
  },
};

export default nextConfig;
