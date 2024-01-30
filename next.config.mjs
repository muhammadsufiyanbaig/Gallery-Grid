/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        domains: [
            "lh3.googleusercontent.com",
            "firebasestorage.googleapis.com"
        ]
        }
};

export default nextConfig;
