import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  basePath: isProduction ? "/konnichiwa-okinawa" : "",
  reactCompiler: true,
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
