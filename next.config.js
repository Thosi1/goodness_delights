/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // NOTE: Add your own image host domains here when you replace placeholder
    // photos with real product photography (e.g. Cloudinary, S3, Supabase).
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

module.exports = nextConfig;
