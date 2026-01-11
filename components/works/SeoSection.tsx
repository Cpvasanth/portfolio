"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { useScrollTheme } from "@/components/ScrollThemeContext";

interface SeoProject {
    title: string;
    url: string;
    description: string;
    stat: string;
    date: string;
}

interface Faq {
    question: string;
    answer: string;
}

export default function SeoSection({ projects, faqs }: { projects: SeoProject[], faqs: Faq[] }) {
    const { setScrollTheme } = useScrollTheme();

    return (
        <motion.section
            onViewportEnter={() => setScrollTheme("works-seo")}
            onViewportLeave={(info) => {
                if (info && info.boundingClientRect && info.boundingClientRect.top > 0) {
                    setScrollTheme("works-web");
                }
            }}
            viewport={{ amount: 0.3 }}
            className="relative py-16 md:py-24 bg-[#202124] text-[#e8eaed] overflow-hidden font-sans border-t border-white/5 pb-24 md:pb-24"
        >
            <div className="max-w-2xl mx-auto px-4 md:px-6">

                {/* Mobile Google Header - Authentic Style */}
                <div className="mb-6 md:mb-10">
                    {/* Google Logo + Search Bar Row */}
                    <div className="flex items-center gap-3 mb-4">
                        {/* Google Logo - Authentic Colors */}
                        <div className="flex items-center shrink-0">
                            <span className="text-xl md:text-2xl font-medium">
                                <span className="text-[#4285f4]">G</span>
                                <span className="text-[#ea4335]">o</span>
                                <span className="text-[#fbbc04]">o</span>
                                <span className="text-[#4285f4]">g</span>
                                <span className="text-[#34a853]">l</span>
                                <span className="text-[#ea4335]">e</span>
                            </span>
                        </div>
                        
                        {/* Search Bar - Mobile Authentic */}
                        <div className="flex-1 bg-[#303134] rounded-full h-10 md:h-11 flex items-center px-3 md:px-4 border border-[#5f6368]/40">
                            <span className="text-[#e8eaed] text-xs md:text-sm truncate flex-1">
                                best seo strategist results 2025
                            </span>
                            <svg className="w-5 h-5 text-[#8ab4f8] shrink-0 ml-2" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                            </svg>
                        </div>
                    </div>

                    {/* Tabs - Horizontal Scroll on Mobile */}
                    <div className="flex gap-4 md:gap-6 text-xs md:text-sm border-b border-[#3c4043] overflow-x-auto no-scrollbar">
                        <span className="text-[#8ab4f8] border-b-[3px] border-[#8ab4f8] pb-2.5 md:pb-3 whitespace-nowrap shrink-0 font-medium">All</span>
                        <span className="text-[#9aa0a6] pb-2.5 md:pb-3 whitespace-nowrap shrink-0 cursor-pointer hover:text-white transition-colors">Images</span>
                        <span className="text-[#9aa0a6] pb-2.5 md:pb-3 whitespace-nowrap shrink-0 cursor-pointer hover:text-white transition-colors">Case Studies</span>
                        <span className="text-[#9aa0a6] pb-2.5 md:pb-3 whitespace-nowrap shrink-0 cursor-pointer hover:text-white transition-colors">Videos</span>
                        <span className="text-[#9aa0a6] pb-2.5 md:pb-3 whitespace-nowrap shrink-0 cursor-pointer hover:text-white transition-colors">News</span>
                    </div>

                    {/* Results Count */}
                    <p className="text-xs text-[#9aa0a6] mt-3 md:mt-4">
                        About 1,340,000 results (0.42 seconds)
                    </p>
                </div>

                {/* Search Results */}
                <div className="flex flex-col gap-6 md:gap-8">

                    {/* Organic Results - Mobile Authentic */}
                    {projects.map((project, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <Link href={project.url.includes(" ") ? "#" : project.url} target="_blank" className="block">
                                {/* Site Info Row */}
                                <div className="flex items-center gap-2.5 mb-2">
                                    {/* Favicon Circle */}
                                    <div className="h-7 w-7 rounded-full bg-[#303134] flex items-center justify-center shrink-0 border border-[#3c4043]">
                                        <span className="text-[#8ab4f8] text-[10px] font-medium">SEO</span>
                                    </div>
                                    {/* Site Name & URL */}
                                    <div className="flex flex-col min-w-0">
                                        <span className="text-[#e8eaed] text-sm leading-tight">VASA Portfolio</span>
                                        <span className="text-[#25d366] text-xs leading-tight truncate">{project.url.split(' ')[0]}</span>
                                    </div>
                                    {/* More Options */}
                                    <div className="ml-auto text-[#9aa0a6] shrink-0">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <circle cx="12" cy="5" r="2" />
                                            <circle cx="12" cy="12" r="2" />
                                            <circle cx="12" cy="19" r="2" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Title */}
                                <h3 className="text-[#8ab4f8] text-lg md:text-xl font-normal leading-snug mb-1.5 group-hover:underline">
                                    {project.title}
                                </h3>

                                {/* Description */}
                                <p className="text-[#bdc1c6] text-sm leading-relaxed">
                                    <span className="text-[#9aa0a6]">{project.date} — </span>
                                    {project.description}
                                </p>

                                {/* Stat Badge */}
                                <div className="mt-2.5 flex gap-2 flex-wrap">
                                    <span className="text-xs bg-[#303134] border border-[#3c4043] rounded-full px-3 py-1.5 text-[#bdc1c6]">
                                        {project.stat}
                                    </span>
                                </div>
                            </Link>
                        </motion.div>
                    ))}

                    {/* People Also Ask - Mobile Style */}
                    <div className="mt-4 md:mt-6">
                        <h4 className="text-lg md:text-xl text-[#e8eaed] mb-3 md:mb-4">People also ask</h4>
                        <div className="border border-[#3c4043] rounded-xl overflow-hidden bg-[#303134]/30">
                            {faqs.map((faq, i) => (
                                <FaqAccordionItem key={i} faq={faq} isFirst={i === 0} />
                            ))}
                        </div>
                    </div>

                </div>

                {/* Google Pagination Footer */}
                <div className="mt-12 md:mt-16 flex flex-col items-center gap-4 pb-8">
                    <div className="flex items-center gap-1">
                        <span className="text-[#4285f4] text-lg font-medium">G</span>
                        <span className="text-[#ea4335] text-base font-medium">o</span>
                        <span className="text-[#fbbc04] text-sm font-medium">o</span>
                        <span className="text-[#4285f4] text-base font-medium">o</span>
                        <span className="text-[#34a853] text-sm font-medium">o</span>
                        <span className="text-[#ea4335] text-base font-medium">o</span>
                        <span className="text-[#4285f4] text-sm font-medium">o</span>
                        <span className="text-[#34a853] text-base font-medium">o</span>
                        <span className="text-[#ea4335] text-sm font-medium">o</span>
                        <span className="text-[#4285f4] text-lg font-medium">gle</span>
                    </div>
                    <div className="flex gap-4 text-[#8ab4f8] text-sm">
                        <span className="opacity-50 cursor-default">&lt; Previous</span>
                        <span className="cursor-pointer hover:underline">Next &gt;</span>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}

function FaqAccordionItem({ faq, isFirst }: { faq: { question: string, answer: string }, isFirst: boolean }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`${!isFirst ? 'border-t border-[#3c4043]' : ''}`}>
            <div
                className="py-3 md:py-4 px-4 flex justify-between items-center cursor-pointer hover:bg-[#303134]/50 active:bg-[#303134] transition-colors"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="text-[#e8eaed] text-sm md:text-base pr-4">{faq.question}</span>
                <motion.svg
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="w-5 h-5 text-[#9aa0a6] shrink-0"
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
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                    >
                        <div className="px-4 pb-4 text-[#bdc1c6] text-sm leading-relaxed">
                            {faq.answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
