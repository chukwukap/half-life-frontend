import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["cryptologos.cc"],
  },
  async redirects() {
    return [
      {
        source: "/token",
        destination: "/app/token",
        permanent: true,
      },
      {
        source: "/portfolio",
        destination: "/app/portfolio",
        permanent: true,
      },
      {
        source: "/leaderboard",
        destination: "/app/leaderboard",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
