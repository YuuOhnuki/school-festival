import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: '厚木高校戸陵祭',
        short_name: '厚木高校戸陵祭',
        description: '厚木高校戸陵祭サイト',
        start_url: '/',
        display: 'standalone',
        background_color: '#fff',
        theme_color: '#fff',
        icons: [
            { src: '/icon-192x192.png', type: 'image/png', sizes: '192x192' },
            { src: '/icon-512x512.png', type: 'image/png', sizes: '512x512' },
        ],
        lang: 'ja',
    };
}
