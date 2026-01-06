import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import MobileNav from "@/components/MobileNav";
import RightSidebar from "@/components/RightSidebar";
import { ScrollThemeProvider } from "@/components/ScrollThemeContext";
import ScrollThemeWrapper from "@/components/ScrollThemeWrapper";
import CustomCursor from "@/components/CustomCursor";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Vasa | Affordable Freelance Web Developer & SEO Expert",
    template: "%s | Vasa - Freelancer"
  },
  description: "Affordable freelance web development, SEO & digital marketing. Get 60-80% off your first project. Your all-in-one digital partner for growth!",
  keywords: [
    "affordable freelancer",
    "freelance web developer",
    "SEO expert",
    "digital marketing",
    "web development",
    "digital partner",
    "contract freelancer",
    "affordable web design",
    "SEO services",
    "creative developer",
    "AI engineer",
    "vasa",
    "imvasa",
    "cpvasanth",
    "cpvasanthk",
    "cpvasanthkumar",
    "best freelancer",
    "best web developer",
    "affordable freelancer",
    "affordable web developer",
    "affordable SEO expert",
    "affordable digital marketing",
    "affordable web development",
    "affordable digital partner",
    "affordable contract freelancer",
    "affordable affordable web design",
    "affordable SEO services",
    "affordable creative developer",
    "affordable AI engineer",
  ],
  authors: [{ name: "Vasa", url: "https://imvasa.vercel.app" }],
  creator: "Vasa",
  metadataBase: new URL("https://imvasa.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://imvasa.vercel.app",
    siteName: "Vasa - Freelance Digital Partner",
    title: "Vasa | Affordable Freelance Web Developer & SEO Expert",
    description: "Affordable freelance web development, SEO & digital marketing. Get 60-80% off your first project. Your all-in-one digital partner!",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Vasa - Freelance Web Developer & SEO Expert"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Vasa | Affordable Freelance Web Developer & SEO Expert",
    description: "Affordable freelance web development, SEO & digital marketing. Get 60-80% off your first project!",
    creator: "@cpvasanth",
    images: ["/og-image.png"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  alternates: {
    canonical: "https://imvasa.vercel.app"
  },
  verification: {
    google: "Qs96EnDjxH-2OARb9brbTWkE-yMYNlYLcnkk-DrkLnk"
  }
};

// Structured Data for Rich Snippets
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    // Person Schema - For Knowledge Panel
    {
      "@type": "Person",
      "@id": "https://imvasa.vercel.app/#person",
      "name": "Vasa",
      "alternateName": "Vasanth",
      "url": "https://imvasa.vercel.app",
      "image": "https://imvasa.vercel.app/og-image.png",
      "description": "Affordable freelance web developer, SEO expert, and digital marketing specialist offering premium services at competitive rates.",
      "jobTitle": "Freelance Web Developer & SEO Expert",
      "sameAs": [
        "https://www.linkedin.com/in/cpvasanth/",
        "https://github.com/Cpvasanth",
        "https://x.com/cpvasanth",
        "https://upwork.com/freelancers/cpvasanthk"
      ],
      "knowsAbout": [
        "Web Development",
        "SEO",
        "Digital Marketing",
        "React",
        "Next.js",
        "Node.js",
        "Tailwind CSS",
        "Express.js",
        "Supabase",
        "Stripe",
        "Figma",
        "firebase",
        "AI engineering"
      ]
    },
    // ProfessionalService Schema - For Local/Service Results
    {
      "@type": "ProfessionalService",
      "@id": "https://imvasa.vercel.app/#business",
      "name": "Vasa - Freelance Digital Partner",
      "url": "https://imvasa.vercel.app",
      "logo": "https://imvasa.vercel.app/og-image.png",
      "image": "https://imvasa.vercel.app/og-image.png",
      "description": "Affordable freelance web development, SEO, and digital marketing services. 60-80% off for first-time clients.",
      "priceRange": "$$",
      "founder": { "@id": "https://imvasa.vercel.app/#person" },
      "areaServed": [
        { "@type": "Country", "name": "United States" },
        { "@type": "Country", "name": "United Kingdom" },
        { "@type": "Country", "name": "Australia" },
        { "@type": "Country", "name": "Canada" },
        { "@type": "Country", "name": "India" },
        { "@type": "Continent", "name": "Europe" },
        { "@type": "Continent", "name": "North America" },
        { "@type": "Continent", "name": "Asia" },
        { "@type": "Continent", "name": "Africa" },
        { "@type": "Continent", "name": "South America" },
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Freelance Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Web Development",
              "description": "Custom website development using React, Next.js, and modern technologies. Fast, responsive, and SEO-optimized websites."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "SEO Services",
              "description": "Technical SEO, on-page optimization, content strategy, and link building to improve search rankings and organic traffic."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Digital Marketing",
              "description": "Data-driven digital marketing strategies including paid ads, content marketing, and conversion optimization."
            }
          }
        ]
      }
    },
    // WebSite Schema - For Sitelinks
    {
      "@type": "WebSite",
      "@id": "https://imvasa.vercel.app/#website",
      "url": "https://imvasa.vercel.app",
      "name": "Vasa - Freelance Web Developer & SEO Expert",
      "description": "Affordable freelance web development, SEO & digital marketing services.",
      "publisher": { "@id": "https://imvasa.vercel.app/#person" },
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://imvasa.vercel.app/?s={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    // SiteNavigationElement - Helps Google understand navigation for Sitelinks
    {
      "@type": "SiteNavigationElement",
      "name": "Main Navigation",
      "hasPart": [
        {
          "@type": "SiteNavigationElement",
          "name": "Home",
          "url": "https://imvasa.vercel.app/"
        },
        {
          "@type": "SiteNavigationElement",
          "name": "About",
          "url": "https://imvasa.vercel.app/about"
        },
        {
          "@type": "SiteNavigationElement",
          "name": "Portfolio",
          "url": "https://imvasa.vercel.app/works"
        },
        {
          "@type": "SiteNavigationElement",
          "name": "Contact",
          "url": "https://imvasa.vercel.app/contact"
        }
      ]
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Structured Data for Rich Snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} antialiased`}
      >
        <CustomCursor />
        <ScrollThemeProvider>
          <ScrollThemeWrapper>
            {/* Left Sidebar (Desktop) */}
            <Sidebar />

            {/* Main Content */}
            <main className="flex flex-col w-full">
              {children}
            </main>

            {/* Right Sidebar (Desktop) */}
            <RightSidebar />
          </ScrollThemeWrapper>

          {/* Mobile Navigation */}
          <MobileNav />
        </ScrollThemeProvider>
      </body>
    </html>
  );
}

