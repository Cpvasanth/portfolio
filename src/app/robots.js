export default function robots() {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/private/', '/admin/'],
        },
        sitemap: 'https://imvasa.vercel.app/sitemap.xml',
    };
}
