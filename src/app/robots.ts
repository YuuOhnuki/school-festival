import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    const baseUrl = 'https://school-festival-seven.vercel.app';

    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/sitemap.xml'], // 公開するならコメントアウト
        },
        // sitemap: `${baseUrl}/sitemap.xml`, //公開するならコメントアウトを外す
    };
}
