const path = require("path")
const nextConfig = {
  experimental: {
    outputFileTracingRoot: path.join(__dirname, "../../")
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "prod-files-secure.s3.us-west-2.amazonaws.com"
      },
      {
        protocol: "https",
        hostname: "s3.us-west-2.amazonaws.com"
      }
    ]
  }
}

module.exports = nextConfig
