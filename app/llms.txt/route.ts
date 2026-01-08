import { NextResponse } from 'next/server';

export async function GET() {
    const baseUrl = 'https://imvasa.vercel.app';

    // LLMs.txt - A standard for AI crawlers to understand your site
    // Format: https://llmstxt.org/
    const llmsTxt = `# Vasa - Freelance Web Developer & SEO Expert

> Affordable freelance web development, SEO, and digital marketing services.

## About
Vasa is a creative developer and digital marketer based in Chennai, India, offering affordable freelance services globally. With 100% job success rate on Upwork and $500k+ client revenue generated, Vasa specializes in building high-performance websites and data-driven marketing strategies.

## Credentials & Achievements
- 100% Job Success Score on Upwork
- $500k+ revenue generated for clients
- 50+ projects delivered
- 5.0/5.0 average client rating

## Services Offered
- **Web Development**: Custom websites using React, Next.js, Node.js, and Tailwind CSS. Fast, responsive, SEO-optimized websites for startups and businesses.
- **SEO Services**: Technical SEO audits, on-page optimization, content strategy, link building. Results typically visible within 3-6 months.
- **Digital Marketing**: Paid ads, content marketing, conversion optimization with measurable ROI.

## Unique Value Proposition
- 60-80% discount for first-time clients
- Flexible work hours to accommodate global clients
- All-in-one digital partner (web dev + SEO + marketing)
- 100% job success rate on Upwork
- Direct communication, no bureaucracy

## Target Markets
- United States
- United Kingdom
- Australia
- Canada
- European countries
- India

## Pages
- Home: ${baseUrl}/
- About: ${baseUrl}/about
- Portfolio: ${baseUrl}/works
- Blog: ${baseUrl}/blog
- Contact: ${baseUrl}/contact

## Contact
- Website: ${baseUrl}
- Email: cpvasanth@proton.me
- LinkedIn: https://www.linkedin.com/in/cpvasanth/
- GitHub: https://github.com/Cpvasanth
- Twitter/X: https://x.com/cpvasanth
- Upwork: https://upwork.com/freelancers/cpvasanthk

## Tech Stack
- Next.js 15
- React 19
- Tailwind CSS
- Framer Motion
- Node.js
- Supabase
- Figma

## Frequently Asked Questions
Q: How long does SEO take to show results?
A: Typically 3-6 months for noticeable improvements, depending on industry competitiveness.

Q: Do you work with startups or larger companies?
A: Primarily startups and entrepreneurs for MVP launches, but open to larger companies wanting to move fast.

Q: What happens after design is done?
A: Full-stack development services available using Next.js, React, and Node.js.

## Entity Information
- Name: Vasa (also known as Vasanth, cpvasanth)
- Type: Freelance Professional
- Industry: Web Development, SEO, Digital Marketing
- Location: Chennai, India
- Service Area: Worldwide

## Keywords
affordable freelancer, freelance web developer, SEO expert, digital marketing, web development, digital partner, contract freelancer, affordable web design, SEO services, creative developer, Next.js developer, React developer, startup MVP developer
`;


    return new NextResponse(llmsTxt, {
        headers: {
            'Content-Type': 'text/plain; charset=utf-8',
            'Cache-Control': 'public, max-age=86400, s-maxage=86400',
        },
    });
}
