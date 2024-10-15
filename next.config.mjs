/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "5mb",
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sxtu21c1imnap49x.public.blob.vercel-storage.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
