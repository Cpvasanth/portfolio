import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    const baseUrl = 'https://imvasa.vercel.app';

    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/api/', '/_next/', '/private/', '/admin/'],
            },
            // Specific rules for major search engines
            {
                userAgent: 'Googlebot',
                allow: '/',
            },
            {
                userAgent: 'Bingbot',
                allow: '/',
            },
            // AI crawlers - allow for GEO visibility
            {
                userAgent: 'GPTBot',
                allow: '/',
                disallow: ['/api/', '/admin/'],
            },
            {
                userAgent: 'ChatGPT-User',
                allow: '/',
            },
            {
                userAgent: 'Claude-Web',
                allow: '/',
            },
            {
                userAgent: 'Anthropic-AI',
                allow: '/',
            },
            {
                userAgent: 'PerplexityBot',
                allow: '/',
            },
            // Additional AI crawlers for comprehensive coverage
            {
                userAgent: 'CCBot',
                allow: '/',
                disallow: ['/api/', '/admin/'],
            },
            {
                userAgent: 'Google-Extended',
                allow: '/',
            },
            {
                userAgent: 'Cohere-ai',
                allow: '/',
            },
            {
                userAgent: 'YouBot',
                allow: '/',
            },
            {
                userAgent: 'Meta-ExternalAgent',
                allow: '/',
            },
            {
                userAgent: 'Bytespider',
                allow: '/',
                disallow: ['/api/', '/admin/'],
            },
        ],
        sitemap: `${baseUrl}/sitemap.xml`,
    };
}
