"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { emailTemplates, EmailTemplate } from "@/utils/email-templates";

export default function EmailTemplatesPage() {
    return (
        <div className="min-h-screen">
            <TemplateGallery templates={emailTemplates} />
        </div>
    );
}

// Template Gallery Component
function TemplateGallery({ templates }: { templates: EmailTemplate[] }) {
    return (
        <div className="max-w-7xl mx-auto px-6 py-12">
            {/* Header */}
            <div className="text-center mb-12">
                <motion.p
                    className="text-zinc-500 text-sm uppercase tracking-widest mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Email Builder
                </motion.p>
                <motion.h1
                    className="text-4xl md:text-5xl font-bold text-white mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.05 }}
                >
                    Email Template Builder
                </motion.h1>
                <motion.p
                    className="text-lg text-zinc-500 max-w-xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    Choose a template and customize it to match your brand. Export Gmail & Outlook compatible HTML.
                </motion.p>
            </div>

            {/* Template Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {templates.map((template, index) => (
                    <motion.div
                        key={template.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <Link href={`/tools/email-templates/${template.id}`} className="group block">
                            <div className="rounded-2xl overflow-hidden bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] hover:border-white/[0.15] hover:bg-white/[0.05] transition-all duration-300">
                                {/* Thumbnail Preview */}
                                <div className="aspect-[4/5] p-4 flex flex-col">
                                    {/* Mock Email Preview */}
                                    <div className="flex-1 bg-zinc-900 rounded-lg overflow-hidden border border-white/[0.08]">
                                        <div className="h-6 bg-zinc-800 border-b border-white/[0.05]" />
                                        <div className="p-3">
                                            <div className="h-3 bg-white/10 rounded-full w-3/4 mb-2" />
                                            <div className="h-2 bg-white/5 rounded-full w-full mb-1" />
                                            <div className="h-2 bg-white/5 rounded-full w-5/6 mb-3" />
                                            <div className="h-6 bg-zinc-700 rounded w-1/2" />
                                        </div>
                                    </div>
                                </div>

                                {/* Info */}
                                <div className="p-4 border-t border-white/[0.05]">
                                    <span className="text-xs font-medium text-zinc-500 bg-white/[0.05] px-2 py-1 rounded-md mb-2 inline-block">
                                        {template.category}
                                    </span>
                                    <h3 className="text-lg font-medium text-white mb-1 group-hover:text-zinc-200 transition-colors">
                                        {template.name}
                                    </h3>
                                    <p className="text-sm text-zinc-500 line-clamp-2 mb-3">
                                        {template.description}
                                    </p>
                                    <div className="flex items-center gap-2 text-zinc-400 text-sm font-medium group-hover:text-white transition-colors">
                                        <span>Customize</span>
                                        <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>

            {/* CTA Section */}
            <motion.div
                className="mt-16 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
            >
                <div className="p-8 rounded-2xl bg-white/[0.02] backdrop-blur-sm border border-white/[0.06]">
                    <p className="text-xl font-medium text-white mb-2">
                        Need Custom Email Marketing?
                    </p>
                    <p className="text-zinc-500 mb-6 max-w-md mx-auto">
                        Let me create personalized email campaigns tailored to your brand.
                    </p>
                    <a
                        href="/contact"
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-black font-medium rounded-lg hover:bg-zinc-200 transition-all"
                    >
                        <span>Contact Me</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </a>
                </div>
            </motion.div>
        </div>
    );
}
