/** @type {import('next').NextConfig} */
const isDev = process.env.NODE_ENV !== "production";

const nextConfig = {
  experimental: {
    serverActions: true,
  },

  // Dev: jangan cache gambar di .next/cache/images
  images: {
    unoptimized: isDev,
  },

  // Dev: browser tidak simpan lama file dari /public
  async headers() {
    if (!isDev) return [];

    return [
      {
        source: "/assets/:path*",
        headers: [
          { key: "Cache-Control", value: "no-store, no-cache, must-revalidate" },
        ],
      },
      {
        source: "/porto/:path*",
        headers: [
          { key: "Cache-Control", value: "no-store, no-cache, must-revalidate" },
        ],
      },
    ];
  },

  webpack: (config, { dev }) => {
    if (dev) {
      // Lebih reliable di macOS / network drive — file change terdeteksi
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
        ignored: ["**/node_modules/**", "**/.git/**"],
      };
    }
    return config;
  },
};

module.exports = nextConfig;
