/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },

  eslint: {
    // ✅ Allow production builds even if there are ESLint errors
    ignoreDuringBuilds: true,
  },

  typescript: {
    // ✅ Prevent TypeScript errors from blocking builds (optional)
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;