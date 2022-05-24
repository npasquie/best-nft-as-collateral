/** @type {import('next').NextConfig} */
const path = require("path");
// @ts-ignore
const withImages = require("next-images");

const nextConfig = withImages({
  reactStrictMode: true,
  trailingSlash: true,
  exportPathMap: function () {
    return {
      "/": { page: "/" },
      "/Dashboard": { page: "/Dashboard" },
      "/Markets": { page: "/Markets" },
      "/Auction": { page: "/Auction" },
    };
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  compiler: {
    styledComponents: true,
  },
  experimental: { images: { layoutRaw: true } },
  images: {
    loader: "custom",
    disableStaticImages: true,
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: ["morning-king-0051.fleek.co", "localhost:3000"],
  },
  module: {
    rules: [
      //...
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: [
          {
            loader: ["file-loader"],
            options: {
              name: "images/[hash]-[name].[ext]",
            },
          },
        ],
      },
    ],
  },
});

module.exports = nextConfig;
