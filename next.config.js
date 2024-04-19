/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['localhost', 'https://img.clerk.com', 'https://cdn.clerk.com', 'https://cdn.clerk.dev', 'https://cdn.clerk.staging'],
    }
}

module.exports = nextConfig
