/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,

  images: {
    unoptimized: true,
  },

  allowedDevOrigins: [
    "192.168.1.18",
    "192.168.1.23",
    "192.168.1.29",
  ],
};

export default nextConfig;