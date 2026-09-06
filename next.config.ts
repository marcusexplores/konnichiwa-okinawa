import type { NextConfig } from 'next';
import { env } from '@/src/common/utilities/env';

// const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
const basePath = env.publicBasePath;

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
