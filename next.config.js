// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withContentlayer } = require('next-contentlayer')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withRspack = require("next-rspack")

const nextConfig = withContentlayer({
  optimizeFonts: true,
  images: {
    domains: [
      'img.youtube.com',
      'avatars.githubusercontent.com',
      'github.com',
      'avatars0.githubusercontent.com',
      'avatars1.githubusercontent.com',
      'avatars2.githubusercontent.com',
      'avatars3.githubusercontent.com',
      'res.cloudinary.com',
    ],
  },
  productionBrowserSourceMaps: true,
  redirects: require('./next-redirect'),
  reactStrictMode: true,
  webpack(config) {
    config.cache = false;
    return config;
  }
})

module.exports = process.env.NEXT_RSPACK ? withRspack(nextConfig) : nextConfig;
