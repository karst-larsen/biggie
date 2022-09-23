/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  build: {
    transpile: ['gsap'],
  },
}

module.exports = nextConfig
