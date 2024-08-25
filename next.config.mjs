// @ts-check

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  },
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true, // Add this line
  },
};

module.exports = nextConfig;
