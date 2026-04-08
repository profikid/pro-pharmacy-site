/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: false, // Using pages router
  },
  images: {
    domains: ['images.unsplash.com'],
  },
}

module.exports = nextConfig