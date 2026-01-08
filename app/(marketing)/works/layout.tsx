import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Portfolio & Case Studies | Web Development & SEO Projects",
    description: "Explore Vasa's portfolio: stunning web designs, successful SEO campaigns & digital marketing wins. See real results from an affordable freelancer!",
    openGraph: {
        title: "Portfolio & Case Studies | Web Development & SEO Projects",
        description: "Explore Vasa's portfolio: stunning web designs, successful SEO campaigns & digital marketing wins. See real results!",
        url: "https://imvasa.vercel.app/works",
        type: "website"
    },
    twitter: {
        title: "Portfolio & Case Studies | Web Development & SEO Projects",
        description: "Explore Vasa's portfolio: stunning web designs, successful SEO campaigns & digital marketing wins!",
    },
    alternates: {
        canonical: "https://imvasa.vercel.app/works"
    }
};

// Works Page Structured Data
const worksJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "CollectionPage",
            "name": "Vasa's Portfolio - Web Development & SEO Projects",
            "description": "A curated collection of web development projects, SEO case studies, and digital marketing campaigns.",
            "url": "https://imvasa.vercel.app/works",
            "mainEntity": {
                "@type": "ItemList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Web Design Projects" },
                    { "@type": "ListItem", "position": 2, "name": "SEO Case Studies" },
                    { "@type": "ListItem", "position": 3, "name": "Digital Marketing Campaigns" }
                ]
            }
        },
        {
            "@type": "BreadcrumbList",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://imvasa.vercel.app"
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Portfolio",
                    "item": "https://imvasa.vercel.app/works"
                }
            ]
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "How long does SEO take to show results?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "SEO is a long-term strategy. Typically, you can expect to see noticeable improvements in organic traffic and rankings within 3 to 6 months, depending on the competitiveness of your industry and the current state of your website."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What is the best SEO strategy for 2025?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "The best strategy focuses on user experience (UX), technical SEO, and high-quality, authoritative content. We prioritize Core Web Vitals, mobile-first indexing, and building semantic authority through topical clusters."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Do you offer technical SEO audits?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, we provide comprehensive technical audits that analyze your site's architecture, crawlability, speed, and indexing issues. We deliver a detailed roadmap to fix errors and boost your search performance."
                    }
                }
            ]
        }
    ]
};

export default function WorksLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(worksJsonLd) }}
            />
            {children}
        </>
    );
}

