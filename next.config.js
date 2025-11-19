/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: true,
  },
  output: 'export',
  trailingSlash: true,
  basePath: '/Michigan-TEA',
  assetPrefix: '/Michigan-TEA/',
}

module.exports = nextConfig
