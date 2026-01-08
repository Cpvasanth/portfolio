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
        },
        {
            "@type": "Person",
            "@id": "https://imvasa.vercel.app/#person",
            "name": "Vasa",
            "jobTitle": "Freelance Web Developer & SEO Expert",
            "knowsAbout": ["Web Development", "SEO", "Digital Marketing", "React", "Next.js", "Node.js", "Tailwind CSS", "Figma"],
            "hasCredential": {
                "@type": "EducationalOccupationalCredential",
                "credentialCategory": "Professional Achievement",
                "name": "100% Job Success Score on Upwork"
            },
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5.0",
                "reviewCount": "50",
                "bestRating": "5",
                "worstRating": "1"
            }
        },
        {
            "@type": "Review",
            "author": {
                "@type": "Person",
                "name": "Sarah Jenkins"
            },
            "reviewBody": "Vasa transformed our vague idea into a stunning MVP in just 4 weeks. We were struggling to visualize our product. Vasa came in, ran a workshop, and delivered a design system that we still use today.",
            "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5"
            },
            "itemReviewed": {
                "@type": "Person",
                "@id": "https://imvasa.vercel.app/#person"
            }
        },
        {
            "@type": "Review",
            "author": {
                "@type": "Person",
                "name": "Mark D."
            },
            "reviewBody": "Our conversion rates successfully doubled after the redesign. Most developers just build what you ask for. Vasa asks 'why' and suggests better alternatives.",
            "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5"
            },
            "itemReviewed": {
                "@type": "Person",
                "@id": "https://imvasa.vercel.app/#person"
            }
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

