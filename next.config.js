/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  images: {
    domains: [
      "landingfoliocom.imgix.net", "media.pocketgamer.com",
    ],
  },
}

module.exports = nextConfig
