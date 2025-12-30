/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',
  trailingSlash: false,
  images: {
    unoptimized: true,
  },
  // Skip building the app directory pages since we're serving static HTML
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
}

module.exports = nextConfig
