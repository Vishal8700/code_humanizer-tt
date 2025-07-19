/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["upload.wikimedia.org", "sta.codeforces.com", "hrcdn.net", "cdn.codechef.com"],
    unoptimized: true,
  },
}

module.exports = nextConfig
