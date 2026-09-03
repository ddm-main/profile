import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  sassOptions: {
    // every *.module.scss gets the tokens + mixins without importing them by hand
    additionalData: `@use "@/styles/_core" as *;`,
  },
};

export default nextConfig;
