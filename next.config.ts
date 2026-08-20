import type { NextConfig } from "next";

const strapiUrl =
  process.env.STRAPI_URL ??
  process.env.NEXT_PUBLIC_STRAPI_URL ??
  "http://strapi-2p2cktq4f2aqoklpusgyfdqt.217.160.8.26.sslip.io";

const strapiHost = new URL(strapiUrl).hostname;

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 90],
    minimumCacheTTL: 60 * 60 * 24,
    remotePatterns: [
      {
        protocol: "http",
        hostname: strapiHost,
        pathname: "/uploads/**",
      },
      {
        protocol: "https",
        hostname: strapiHost,
        pathname: "/uploads/**",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/cms-uploads/:path*",
        destination: `${strapiUrl.replace(/\/$/, "")}/uploads/:path*`,
      },
    ];
  },
};

export default nextConfig;
