import { NextResponse } from 'next/server';

export async function GET() {
    const baseUrl = 'https://imvasa.vercel.app';

    // LLMs.txt - A standard for AI crawlers to understand your site
    // Format: https://llmstxt.org/
    const llmsTxt = `# Vasa - Freelance Web Developer & SEO Expert

> Affordable freelance web development, SEO, and digital marketing services.

## About
Vasa is a creative developer and digital marketer offering affordable freelance services. With 100% job success rate and $500k+ client revenue generated, Vasa specializes in building high-performance websites and data-driven marketing strategies.

## Services Offered
- **Web Development**: Custom websites using React, Next.js, Node.js, and Tailwind CSS
- **SEO Services**: Technical SEO, on-page optimization, content strategy, link building
- **Digital Marketing**: Paid ads, content marketing, conversion optimization

## Unique Value Proposition
- 60-80% discount for first-time clients
- Flexible work hours to accommodate global clients
- All-in-one digital partner (web dev + SEO + marketing)
- 100% job success rate on Upwork

## Target Markets
- United States
- United Kingdom
- Australia
- Canada
- European countries

## Pages
- Home: ${baseUrl}/
- About: ${baseUrl}/about
- Portfolio: ${baseUrl}/works
- Contact: ${baseUrl}/contact

## Contact
- Website: ${baseUrl}
- Email: cpvasanth@proton.me
- LinkedIn: https://www.linkedin.com/in/cpvasanth/
- GitHub: https://github.com/Cpvasanth
- Upwork: https://upwork.com/freelancers/cpvasanthk

## Tech Stack
- Next.js 16
- React 19
- Tailwind CSS
- Framer Motion
- Node.js

## Keywords
affordable freelancer, freelance web developer, SEO expert, digital marketing, web development, digital partner, contract freelancer, affordable web design, SEO services, creative developer
`;

    return new NextResponse(llmsTxt, {
        headers: {
            'Content-Type': 'text/plain; charset=utf-8',
            'Cache-Control': 'public, max-age=86400, s-maxage=86400',
        },
    });
}
