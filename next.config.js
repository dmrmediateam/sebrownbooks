/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/books',
        destination: '/',
        permanent: true,
      },
      {
        source: '/studio',
        destination: 'https://sebrownbooks.sanity.studio',
        statusCode: 301,
      },
    ]
  },
}

module.exports = nextConfig

