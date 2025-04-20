import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    serverActions: {}, // just an empty object if you want to enable it
    // OR you can specify options inside like:
    // serverActions: {
    //   bodySizeLimit: '2mb',
    //   allowedOrigins: ['https://example.com'],
    // },
  },
};

export default nextConfig;
