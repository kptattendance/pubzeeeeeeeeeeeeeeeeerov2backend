/** @type {import('next').NextConfig} */
const nextConfig = {
  // Let browsers cache site images for 30 days instead of re-downloading on every visit
  async headers() {
    return [
      {
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=2592000, stale-while-revalidate=86400",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
