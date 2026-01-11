
import React from "react";
import WebDesignSection from "@/components/works/WebDesignSection";
import SeoSection from "@/components/works/SeoSection";
import WorksIntro from "@/components/works/WorksIntro";

// --- Mock Data for Web Design Projects ---
const webProjects = [
    {
        title: "Solea Audit Academy",
        category: "Smart Contract Audit Portfolio",
        description: "A comprehensive portfolio for a smart contract auditing firm, showcasing their security expertise and services.",
        color: "bg-blue-600",
        image: "/images/projects/solea-audit.png",
        alt: "Solea Audit Academy - Smart Contract Auditing Website Design",
        tags: ["Web Dev", "Portfolio", "Crypto"],
        url: "https://www.solea.academy/"
    },
    {
        title: "Rentopia",
        category: "House Renting Web App",
        description: "A modern house renting platform featuring one-on-one chatting, secure owner verification, and an AI-powered chatbot assistant.",
        color: "bg-purple-600",
        image: "/images/projects/rentopia.png",
        alt: "Rentopia - Modern House Renting Platform with AI Chatbot",
        tags: ["Web App", "Chatbot", "Real Estate"],
        url: "https://rentopia.synt-x.com/"
    },
    {
        title: "Fashion Store",
        category: "E-commerce Experience",
        description: "A sleek fashion e-commerce platform with a custom CMS, integrated payment system, and modern UI design.",
        color: "bg-emerald-600",
        image: "/images/projects/fashion-store.png",
        alt: "Fashion Store - E-commerce Platform with Custom CMS",
        tags: ["E-commerce", "CMS", "Payment"],
        url: "https://fashion.synt-x.com/"
    }
];

// --- Mock Data for SEO Projects ---
const seoProjects = [
    {
        title: "Synt-x: Web Development Agency SEO",
        url: "https://synt-x.com",
        description: "Optimized for core agency keywords, resulting in increased organic leads and improved search visibility.",
        stat: "Top Agency Rank",
        date: "2025"
    },
    {
        title: "KSV Engineering: SEM & SEO Mastery",
        url: "https://ksvengineering.com",
        description: "Comprehensive SEM and SEO campaign driving qualified traffic and high-value conversions for engineering services.",
        stat: "High ROI SEM",
        date: "2025"
    }
];

// --- FAQ Data ---
const faqs = [
    {
        question: "How long does SEO take to show results?",
        answer: "SEO is a long-term strategy. Typically, you can expect to see noticeable improvements in organic traffic and rankings within 3 to 6 months, depending on the competitiveness of your industry and the current state of your website."
    },
    {
        question: "What is the best SEO strategy for 2025?",
        answer: "The best strategy focuses on user experience (UX), technical SEO, and high-quality, authoritative content. We prioritize Core Web Vitals, mobile-first indexing, and building semantic authority through topical clusters."
    },
    {
        question: "Do you offer technical SEO audits?",
        answer: "Yes, we provide comprehensive technical audits that analyze your site's architecture, crawlability, speed, and indexing issues. We deliver a detailed roadmap to fix errors and boost your search performance."
    }
];

export default function WorksPage() {
    return (
        <main className="min-h-screen text-zinc-50 selection:bg-cyan-500 selection:text-black">

            {/* Header / Intro */}
            <WorksIntro />

            {/*WEB DESIGN SECTION */}
            <WebDesignSection projects={webProjects} />

            {/*SEO SECTION */}
            <SeoSection projects={seoProjects} faqs={faqs} />

            {/*CTA SECTION */}
            {/* <WorksCta /> */}

        </main>
    );
}

// --- Section 3: Premium CTA ---
function WorksCta() {
    return (
        <section className="py-32 bg-zinc-950 relative overflow-hidden flex items-center justify-center">
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-600/10 rounded-full blur-[150px]" />
            </div>

            <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                <h2
                    className="text-5xl md:text-8xl font-black tracking-tighter mb-8"
                >
                    Ready to <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">Start Your Project?</span>
                </h2>

                <p
                    className="text-xl md:text-2xl text-zinc-400 mb-12 max-w-2xl mx-auto leading-relaxed"
                >
                    Let's creating something extraordinary together. Whether it's a web experience, an SEO campaign, or a complete digital overhaul.
                </p>

                <div>
                    <a
                        href="mailto:cpvasanth@proton.me"
                        className="inline-flex items-center gap-3 bg-white text-black px-10 py-5 rounded-full text-lg font-bold hover:bg-cyan-400 transition-colors duration-300"
                    >
                        Let's Talk
                    </a>
                </div>
            </div>
        </section>
    )
}
