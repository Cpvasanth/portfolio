import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Vasa | Creative Developer & Digital Marketing Expert",
    description: "Meet Vasa - 100% job success, $500k+ client revenue generated. Affordable web development, SEO & digital marketing. Flexible hours, clear communication!",
    openGraph: {
        title: "About Vasa | Creative Developer & Digital Marketing Expert",
        description: "Meet Vasa - 100% job success, $500k+ client revenue generated. Affordable web development, SEO & digital marketing!",
        url: "https://imvasa.vercel.app/about",
        type: "profile"
    },
    twitter: {
        title: "About Vasa | Creative Developer & Digital Marketing Expert",
        description: "Meet Vasa - 100% job success, $500k+ client revenue generated. Affordable web development, SEO & digital marketing!",
    },
    alternates: {
        canonical: "https://imvasa.vercel.app/about"
    }
};

// About Page Structured Data
const aboutJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "ProfilePage",
            "name": "About Vasa - Freelance Web Developer",
            "description": "Learn about Vasa's expertise, achievements, and approach to web development and digital marketing.",
            "url": "https://imvasa.vercel.app/about",
            "mainEntity": {
                "@type": "Person",
                "@id": "https://imvasa.vercel.app/#person"
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
                    "name": "About",
                    "item": "https://imvasa.vercel.app/about"
                }
            ]
        }
    ]
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
            />
            {children}
        </>
    );
}

