import { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        template: "%s | Vasa Blog",
        default: "Vasa Blog | Insights on Web Dev & SEO",
    },
    description: "Read the latest articles on freelance web development, SEO strategies, and digital marketing tips from Vasa.",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://imvasa.vercel.app/blog",
        siteName: "Vasa - Freelancer",
    },
};

export default function BlogLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
