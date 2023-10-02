/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/add-section',
                permanent: true
            }
        ]
    }
}

module.exports = nextConfig
