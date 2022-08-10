/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ["i.ibb.co", "www.formula1.com"],
  },
};

module.exports = nextConfig;
