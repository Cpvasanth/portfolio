import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Image optimization
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year cache
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
      {
        protocol: "https",
        hostname: "zyhgrhdnbdxbzgefkkfw.supabase.co",
      },
    ],
  },

  // Aggressive caching headers for static assets
  async headers() {
    return [
      {
        // Static assets (images, fonts, etc.)
        source: "/:all*(svg|jpg|jpeg|png|gif|ico|webp|avif|mp4|webm|woff|woff2|ttf|eot)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // JS/CSS files with content hash
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // Security headers for all pages
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
        ],
      },
    ];
  },

  // Enable compression
  compress: true,

  // Optimize package imports for smaller bundles
  experimental: {
    optimizePackageImports: ["framer-motion", "react-icons"],
  },

  // Powered by header removed for smaller response
  poweredByHeader: false,
};

export default nextConfig;
