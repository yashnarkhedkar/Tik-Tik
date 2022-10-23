/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript : {
    ignoreBuildErrors : true,
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['e7.pngegg.com',
      'lh3.googleusercontent.com',
      'images.unsplash.com']
  }
}

module.exports = nextConfig
