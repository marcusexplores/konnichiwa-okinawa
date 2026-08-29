import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === "production";
const basePath = isProduction ? "/konnichiwa-okinawa" : "";

const nextConfig: NextConfig = {
  basePath,
  reactCompiler: true,
  output: "export",
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
