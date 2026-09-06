import type { NextConfig } from 'next';

const basePath = process.env.NEXT_PUBLIC_PAGES_BASE_PATH || '';

const nextConfig: NextConfig = {
  basePath,
  assetPrefix: basePath,
  reactCompiler: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
