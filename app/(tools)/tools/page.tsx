"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaEnvelope, FaArrowRight, FaTag, FaPalette, FaCode, FaShieldAlt } from "react-icons/fa";

const tools = [
    {
        id: "email-templates",
        name: "Email Template Builder",
        description: "Create beautiful, responsive email templates with a visual editor. Export Gmail & Outlook compatible HTML.",
        icon: <FaEnvelope className="text-lg" />,
        href: "/tools/email-templates",
        status: "Available",
    },
    {
        id: "privacy-policy",
        name: "Privacy Policy Generator",
        description: "Generate comprehensive, legally compliant privacy policies for your website or app. GDPR, CCPA, COPPA ready.",
        icon: <FaShieldAlt className="text-lg" />,
        href: "/tools/privacy-policy",
        status: "Available",
    },
];


const upcomingTools = [
    {
        name: "Meta Tag Generator",
        description: "Generate SEO-optimized meta tags for your website",
        icon: <FaTag className="text-zinc-600" />,
    },
    {
        name: "Color Palette Generator",
        description: "Create beautiful color palettes for your projects",
        icon: <FaPalette className="text-zinc-600" />,
    },
    {
        name: "CSS Gradient Builder",
        description: "Design stunning gradients with live preview",
        icon: <FaCode className="text-zinc-600" />,
    },
];

export default function ToolsPage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative">
                <div className="max-w-7xl mx-auto px-6 py-24 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="text-zinc-500 text-sm uppercase tracking-widest mb-4">
                            Free Tools
                        </p>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Powerful Tools, Zero Cost
                        </h1>
                        <p className="text-lg text-zinc-500 max-w-xl mx-auto">
                            Productivity tools designed to make your workflow smoother. No sign-up required.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Available Tools */}
            <section className="max-w-7xl mx-auto px-6 pb-16">
                <h2 className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-6">Available</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {tools.map((tool, index) => (
                        <motion.div
                            key={tool.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Link href={tool.href}>
                                <div className="group h-full p-6 rounded-2xl bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] hover:border-white/[0.15] hover:bg-white/[0.05] transition-all duration-300">
                                    <div className="flex items-start justify-between mb-4">
                                        {/* Icon */}
                                        <div className="w-10 h-10 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-zinc-400">
                                            {tool.icon}
                                        </div>
                                        {/* Status Badge */}
                                        <span className="text-xs font-medium text-emerald-500/80 bg-emerald-500/10 px-2 py-1 rounded-md">
                                            {tool.status}
                                        </span>
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-lg font-medium text-white mb-2 group-hover:text-zinc-200 transition-colors">
                                        {tool.name}
                                    </h3>
                                    <p className="text-zinc-500 text-sm mb-4 leading-relaxed">
                                        {tool.description}
                                    </p>

                                    {/* CTA */}
                                    <div className="flex items-center gap-2 text-zinc-400 text-sm font-medium group-hover:text-white transition-all">
                                        <span>Open</span>
                                        <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Coming Soon */}
            <section className="max-w-7xl mx-auto px-6 pb-20">
                <h2 className="text-sm font-medium text-zinc-600 uppercase tracking-wider mb-6">Coming Soon</h2>
                <div className="grid md:grid-cols-3 gap-4">
                    {upcomingTools.map((tool, index) => (
                        <motion.div
                            key={tool.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                            className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.04]"
                        >
                            <div className="w-8 h-8 rounded-lg bg-white/[0.03] flex items-center justify-center mb-3">
                                {tool.icon}
                            </div>
                            <h3 className="text-zinc-400 font-medium mb-1">{tool.name}</h3>
                            <p className="text-zinc-600 text-sm">{tool.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
}
