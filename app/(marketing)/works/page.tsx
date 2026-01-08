"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight, FaExternalLinkAlt } from "react-icons/fa";
import { useScrollTheme } from "@/components/ScrollThemeContext";

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
    const { setScrollTheme } = useScrollTheme();

    // Reset theme to "works-web" on mount
    React.useEffect(() => {
        setScrollTheme("works-web");
    }, [setScrollTheme]);

    return (
        <main className="min-h-screen text-zinc-50 selection:bg-cyan-500 selection:text-black">

            {/* Header / Intro */}
            <section className="pt-32 pb-16 px-6 md:px-12 max-w-7xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-6xl md:text-8xl font-black tracking-tighter mb-8"
                >
                    Web Development <span className="text-cyan-500 text-glow-cyan">Portfolio</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-xl md:text-2xl text-zinc-400 max-w-2xl leading-relaxed"
                >
                    Freelancer portfolio showcasing web design, SEO case studies, and digital marketing results.
                </motion.p>
            </section>

            {/*WEB DESIGN SECTION */}
            <WebDesignSection />

            {/*SEO SECTION */}
            <SeoSection />

            {/*CTA SECTION */}
            {/* <WorksCta /> */}

        </main>
    );
}

// --- Section 1: Web Design ---
function WebDesignSection() {
    const { setScrollTheme } = useScrollTheme();
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 10]);

    return (
        <motion.section
            ref={containerRef}
            className="relative py-24 overflow-hidden bg-black text-white"
            onViewportEnter={() => setScrollTheme("works-web")}
            viewport={{ amount: 0.2 }}
        >
            {/* Abstract Background Illustration */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
                {/* Section Title with "Illustration" */}
                <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-12">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-5xl md:text-7xl font-bold tracking-tighter mb-4"
                        >
                            Web Design <br /> & Experience.
                        </motion.h2>
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: 100 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="h-2 bg-cyan-500 mb-8 shadow-[0_0_15px_rgba(6,182,212,0.5)]"
                        />
                        <p className="text-xl text-white/60 max-w-lg">
                            Merging aesthetics with functionality. I build touchable interfaces that feel alive, using modern frameworks and fluid animations.
                        </p>
                    </div>

                    {/* 3D Illustration */}
                    <motion.div
                        style={{ y, rotate }}
                        className="relative w-full md:w-[600px] md:h-[600px] hidden md:block perspective-1000"
                    >
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <Image
                                src="/web-design-hero.png"
                                alt="Abstract 3D Web Design Illustration"
                                width={800}
                                height={800}
                                className="w-full h-full object-contain drop-shadow-2xl"
                            />
                        </motion.div>
                    </motion.div>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                    {webProjects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </motion.section>
    );
}

function ProjectCard({ project, index }: { project: any, index: number }) {
    // Parallax effect for odd items
    const isOdd = index % 2 !== 0;

    return (
        <Link href={project.url || "#"} target="_blank">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`group relative ${isOdd ? "md:mt-24" : ""}`}
            >
                {/* Image Container */}
                <div className="relative overflow-hidden rounded-3xl aspect-[4/3] mb-6 shadow-2xl bg-zinc-900 border border-white/10">
                    <div className={`absolute inset-0 bg-gradient-to-b from-transparent to-black/60 opacity-60 z-10 transition-opacity duration-500 group-hover:opacity-40`} />
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.5 }}
                        className="w-full h-full relative"
                    >
                        {/* Project Image */}
                        <Image
                            src={project.image}
                            alt={project.alt || project.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </motion.div>

                    {/* Floating Action Button */}
                    <div className="absolute top-6 right-6 z-20 overflow-hidden rounded-full">
                        <div className="bg-white text-black p-4 rounded-full translate-x-32 -translate-y-32 transition-transform duration-500 ease-out group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-cyan-600">
                            <FaArrowRight size={20} />
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div>
                    <div className="flex items-center gap-4 mb-3">
                        <span className="text-cyan-500 font-semibold tracking-wide text-sm uppercase text-glow-cyan">
                            {project.category}
                        </span>
                        <div className="h-[1px] w-8 bg-white/20" />
                        <div className="flex gap-2">
                            {project.tags.map((tag: string, i: number) => (
                                <span key={i} className="text-xs text-white/40 border border-white/10 px-2 py-1 rounded-full">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                    <h3 className="text-3xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                        {project.title}
                    </h3>
                    <p className="text-white/60 leading-relaxed max-w-md">
                        {project.description}
                    </p>
                </div>
            </motion.div>
        </Link>
    )
}

// --- Section 2: SEO (Google Search Theme) ---
function SeoSection() {
    const { setScrollTheme } = useScrollTheme();

    return (
        <motion.section
            onViewportEnter={() => setScrollTheme("works-seo")}
            onViewportLeave={(info) => {
                // Only switch back to web theme if leaving from top (scrolling up)
                if (info && info.boundingClientRect && info.boundingClientRect.top > 0) {
                    setScrollTheme("works-web");
                }
            }}
            viewport={{ amount: 0.3 }}
            className="relative py-24 bg-[#202124] text-[#bdc1c6] overflow-hidden font-sans border-t border-white/5"
        >
            <div className="max-w-4xl mx-auto px-6 md:px-12">

                {/* Search Header */}
                <div className="mb-12">
                    <div className="flex items-center gap-4 mb-8">
                        <span className="text-2xl md:text-3xl font-medium text-white">Google</span>
                        <div className="flex-1 bg-[#303134] rounded-full h-12 flex items-center px-6 border border-[#5f6368]/50 hover:bg-[#303134] hover:shadow-md transition-shadow">
                            <span className="text-[#9aa0a6] text-sm md:text-base truncate">
                                best seo strategist results 2025
                            </span>
                            <div className="ml-auto flex gap-3 text-[#9aa0a6]">
                                <span className="w-px h-6 bg-[#5f6368]/50"></span>
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" /></svg>
                            </div>
                        </div>
                        <div className="h-10 w-10 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold shrink-0">
                            V
                        </div>
                    </div>

                    {/* Tabs */}
                    <div className="flex gap-6 text-sm border-b border-[#3c4043] pb-3 text-[#9aa0a6] ">
                        <span className="text-[#8ab4f8] border-b-2 border-[#8ab4f8] pb-3 -mb-3.5 cursor-pointer">All</span>
                        <span className="hover:text-white cursor-pointer transition-colors">Images</span>
                        <span className="hover:text-white cursor-pointer transition-colors">Case Studies</span>
                        <span className="hover:text-white cursor-pointer transition-colors">Videos</span>
                        <span className="hover:text-white cursor-pointer transition-colors">News</span>
                    </div>

                    {/* Stats */}
                    <p className="text-xs text-[#9aa0a6] mt-4">
                        About 1,340,000 results (0.42 seconds)
                    </p>
                </div>

                {/* Results Feed */}
                <div className="flex flex-col gap-10">

                    {/* Featured Sneppet / Knowledge Panel Mock */}
                    <div className="border border-[#3c4043] rounded-2xl p-6 bg-[#303134] md:flex gap-6 items-start hidden">
                        <div className="flex-1">
                            <h3 className="text-xl text-white mb-2">SEO Mastery</h3>
                            <p className="text-sm leading-relaxed mb-4">
                                Search engine optimization is the process of improving the quality and quantity of website traffic to a website or a web page from search engines.
                            </p>
                            <ul className="text-sm list-disc pl-5 space-y-1 text-[#bdc1c6]">
                                <li>Technical Audits</li>
                                <li>Content Strategy</li>
                                <li>Link Building</li>
                            </ul>
                        </div>
                        <div className="w-32 h-32 bg-zinc-800 rounded-lg shrink-0" />
                    </div>

                    {/* Organic Results */}
                    {seoProjects.map((project, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="group cursor-pointer"
                        >
                            <Link href={project.url.includes(" ") ? "#" : project.url} target="_blank">
                                <div className="flex items-center gap-2 mb-1 text-xs md:text-sm">
                                    <div className="h-7 w-7 rounded-full bg-zinc-800 flex items-center justify-center shrink-0 border border-[#3c4043]">
                                        <span className="text-[#bdc1c6] text-[10px]">SEO</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[#dadce0] leading-none">VASA Portfolio</span>
                                        <span className="text-[#20c20e] leading-none mt-0.5">{project.url.split(' ')[0]}</span>
                                    </div>
                                    <div className="ml-auto text-[#9aa0a6] text-[10px] hidden md:block">
                                        {/* Three dots icon */}
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" /></svg>
                                    </div>
                                </div>

                                <h3 className="text-[#8ab4f8] text-xl md:text-2xl hover:underline mb-1 font-medium visited:text-[#c58af9]">
                                    {project.title}
                                </h3>

                                <div className="text-sm leading-relaxed max-w-2xl">
                                    <span className="text-[#9aa0a6] mr-2">{project.date} —</span>
                                    {project.description}
                                </div>

                                {/* Rich Snippet / Sitelinks */}
                                <div className="mt-2 flex gap-3">
                                    <span className="text-xs border border-[#3c4043] rounded-full px-3 py-1 bg-[#303134] text-[#bdc1c6]">
                                        {project.stat}
                                    </span>
                                </div>
                            </Link>
                        </motion.div>
                    ))}

                    {/* People Also Ask Accordion */}
                    <div className="mt-4 border-t border-b border-[#3c4043] py-2">
                        <h4 className="text-xl text-[#dadce0] px-2 py-4">People also ask</h4>
                        {faqs.map((faq, i) => (
                            <FaqAccordionItem key={i} faq={faq} />
                        ))}
                    </div>

                </div>

                {/* Pagination / Footer of Search */}
                <div className="mt-16 flex justify-center pb-8">
                    <span className="text-[#8ab4f8] text-lg font-medium tracking-widest">Gooooooooooogle</span>
                </div>
            </div>
        </motion.section>
    );
}

function FaqAccordionItem({ faq }: { faq: { question: string, answer: string } }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-t border-[#3c4043] overflow-hidden">
            <div
                className="py-4 px-2 flex justify-between items-center cursor-pointer hover:bg-[#303134]/50 group"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="text-[#bdc1c6] group-hover:text-white transition-colors block">{faq.question}</span>
                <motion.svg
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="w-5 h-5 text-[#9aa0a6]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    <path d="M19 9l-7 7-7-7" />
                </motion.svg>
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-4 pb-4 text-[#bdc1c6] text-sm leading-relaxed"
                    >
                        {faq.answer}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
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
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-8xl font-black tracking-tighter mb-8"
                >
                    Ready to <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">Start Your Project?</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl md:text-2xl text-zinc-400 mb-12 max-w-2xl mx-auto leading-relaxed"
                >
                    Let's creating something extraordinary together. Whether it's a web experience, an SEO campaign, or a complete digital overhaul.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <Link
                        href="mailto:cpvasanth@proton.me"
                        className="inline-flex items-center gap-3 bg-white text-black px-10 py-5 rounded-full text-lg font-bold hover:bg-cyan-400 transition-colors duration-300"
                    >
                        Let's Talk <FaArrowRight />
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}
