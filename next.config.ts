import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/marcusexplores/konnichiwa-okinawa",
};

export default nextConfig;
