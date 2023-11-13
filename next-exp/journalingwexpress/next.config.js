// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            // Corrected source path
            {
                source: "/api/v1/:path*",
                destination: "http://localhost:5000/api/v1/:path*",
            },
        ];
    },
};

module.exports = nextConfig;
