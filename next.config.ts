import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    /* config options here */
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
};

export default nextConfig;
