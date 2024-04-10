const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "standalone", // use with Docker
  // distDir: 'build',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
        pathname: '/PokeAPI/sprites/master/sprites/**',
      },
    ],
  },
  experimental: {
    typedRoutes: true
  }
};

module.exports = withBundleAnalyzer(nextConfig);
