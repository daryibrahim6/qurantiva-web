import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  productionBrowserSourceMaps: true,
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
