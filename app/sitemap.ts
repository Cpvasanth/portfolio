import { MetadataRoute } from 'next';
import { createClient } from '@/utils/supabase/server';
import { emailTemplates } from '@/utils/email-templates';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const supabase = await createClient();
    const baseUrl = 'https://synt-x.com';

    // Core pages with their priorities and change frequencies
    const routes = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 1.0,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/works`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date(),
            changeFrequency: 'daily' as const,
            priority: 0.9,
        },
    ];

    // Tools pages
    const toolsRoutes = [
        {
            url: `${baseUrl}/tools`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/tools/privacy-policy`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/tools/email-templates`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
    ];

    // Email template editor pages (dynamic)
    const emailTemplateRoutes = emailTemplates.map((template) => ({
        url: `${baseUrl}/tools/email-templates/${template.id}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    // Fetch blog posts from Supabase
    const { data: posts } = await supabase
        .from('posts')
        .select('slug, updated_at')
        .eq('published', true);

    const postRoutes = posts?.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.updated_at),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    })) || [];

    return [...routes, ...toolsRoutes, ...emailTemplateRoutes, ...postRoutes];
}

