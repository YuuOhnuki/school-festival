import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    /* config options here */
    reactStrictMode: true,
    images: {
        disableStaticImages: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '*',
            },
            {
                protocol: 'https',
                hostname: 'ofukegmwgxwwlxclmyrx.supabase.co', //Supabase Storage
            },
        ],
    },
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'Content-Security-Policy',
                        value: `default-src 'self'; img-src 'self' https://ofukegmwgxwwlxclmyrx.supabase.co; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; font-src 'self';`,
                    },
                ],
            },
        ];
    },
};

export default nextConfig;
