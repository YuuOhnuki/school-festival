import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://school-festival-seven.vercel.app';

    return [
        {
            url: `${baseUrl}/`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/products`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/projects`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/timetable`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/privacypolicy`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/sitepolicy`,
            lastModified: new Date(),
        },
    ];
}
