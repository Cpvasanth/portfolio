import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Vasa | Hire Affordable Freelance Developer",
    description: "Ready to start? Contact Vasa for affordable web development, SEO & digital marketing. 60-80% off for first-time clients. Free consultation!",
    openGraph: {
        title: "Contact Vasa | Hire Affordable Freelance Developer",
        description: "Ready to start? Contact Vasa for affordable web development, SEO & digital marketing. 60-80% off for first-time clients!",
        url: "https://imvasa.vercel.app/contact",
        type: "website"
    },
    twitter: {
        title: "Contact Vasa | Hire Affordable Freelance Developer",
        description: "Ready to start? Contact Vasa for affordable web development, SEO & digital marketing. 60-80% off for first-time clients!",
    },
    alternates: {
        canonical: "https://imvasa.vercel.app/contact"
    }
};

// Contact Page Structured Data
const contactJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "ContactPage",
            "name": "Contact Vasa - Hire Freelance Developer",
            "description": "Get in touch to hire an affordable freelance web developer, SEO expert, and digital marketing specialist.",
            "url": "https://imvasa.vercel.app/contact",
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
                    "name": "Contact",
                    "item": "https://imvasa.vercel.app/contact"
                }
            ]
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Do you only work with startups, or also with larger companies?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "We primarily focus on startups and entrepreneurs to help them launch MVPs quickly, but we are open to working with larger companies that want to move fast and break things."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What's the difference between Vasa and a classic design agency?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "We are a partner, not just a vendor. We prioritize speed, direct communication, and business value over bureaucracy and endless slide decks."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How fast can you deliver a brand or a product design?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Typically, we can deliver a complete brand identity in 2 weeks and a full MVP design in 4-6 weeks, depending on complexity."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What happens after the design is done? Do you also handle development?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes! We offer full-stack development services to bring your designs to life. We use modern tech stacks like Next.js, React, and Node.js."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What if I don't have a clear vision yet? Can you still help?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Absolutely. We help with product discovery and strategy to clarify your vision before writing a single line of code."
                    }
                }
            ]
        }
    ]
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
            />
            {children}
        </>
    );
}

