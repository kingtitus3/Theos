/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        pathname: "/kingtitus3/Theos/main/public/**",
      },
    ],
    unoptimized: true,
  },
  experimental: {
    typedRoutes: true,
  },
};

export default nextConfig;
// Deployment: All images included and optimized
// Production deployment
// Test deployment trigger
// Git integration test Mon Nov 24 19:53:47 CST 2025
// GitHub webhook test - 19:55:45
