import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
};

// Uncomment 

module.exports = {
  async redirects() {
    return [
      {
         source: '/:path((?!welcome).*)', // Matches all paths except `/welcome`
        destination: '/welcome', // Redirect all other paths to `/welcome`
        permanent: false, 
      },
    ];
  },
};

export default nextConfig;
