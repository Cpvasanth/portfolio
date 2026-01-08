"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight, FiClock, FiCalendar } from "react-icons/fi";

interface Post {
    id: string;
    title: string;
    slug: string;
    excerpt: string | null;
    image_url: string | null;
    created_at: string;
}

interface LatestBlogHeroProps {
    post: Post;
}

export default function LatestBlogHero({ post }: LatestBlogHeroProps) {
    const formattedDate = new Date(post.created_at).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    });

    // Estimate reading time (rough calculation)
    const readingTime = Math.max(5, Math.ceil((post.excerpt?.length || 200) / 100));

    return (
        <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mb-16"
        >
            {/* Section Header */}
            <div className="flex items-center gap-3 mb-6">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
                <span className="text-xs font-bold tracking-[0.3em] text-indigo-400 uppercase">
                    Latest Article
                </span>
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
            </div>

            <Link href={`/blog/${post.slug}`} className="group block">
                <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl transition-all duration-500 hover:border-indigo-500/30 hover:shadow-[0_0_60px_-15px_rgba(99,102,241,0.3)]">
                    <div className="grid md:grid-cols-2 gap-0">
                        {/* Image Section */}
                        <div className="relative aspect-[16/10] md:aspect-auto overflow-hidden">
                            {post.image_url ? (
                                <img
                                    src={post.image_url}
                                    alt={post.title}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            ) : (
                                <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/50 via-purple-900/30 to-slate-900" />
                            )}
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#050505] opacity-80 md:opacity-100" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent md:hidden" />

                            {/* Latest Badge */}
                            <div className="absolute top-5 left-5">
                                <motion.span
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.3 }}
                                    className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold tracking-wider text-white bg-indigo-600/90 backdrop-blur-md rounded-full shadow-lg shadow-indigo-500/25"
                                >
                                    <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                                    LATEST
                                </motion.span>
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className="relative p-8 md:p-10 lg:p-12 flex flex-col justify-center">
                            {/* Meta Info */}
                            <div className="flex flex-wrap items-center gap-4 mb-5 text-sm text-gray-400">
                                <span className="flex items-center gap-2">
                                    <FiCalendar className="w-4 h-4 text-indigo-400" />
                                    {formattedDate}
                                </span>
                                <span className="flex items-center gap-2">
                                    <FiClock className="w-4 h-4 text-indigo-400" />
                                    {readingTime} min read
                                </span>
                            </div>

                            {/* Title */}
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-5 leading-tight group-hover:text-indigo-300 transition-colors duration-300">
                                {post.title}
                            </h2>

                            {/* Excerpt */}
                            <p className="text-gray-400 leading-relaxed mb-8 line-clamp-3 text-base lg:text-lg">
                                {post.excerpt || "Discover insights and strategies to elevate your digital presence. Dive into the latest trends and best practices."}
                            </p>

                            {/* Read More Button */}
                            <div className="flex items-center gap-3 text-indigo-400 font-semibold group-hover:text-indigo-300 transition-colors">
                                <span>Read Full Article</span>
                                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-indigo-500/10 border border-indigo-500/20 group-hover:bg-indigo-500/20 group-hover:border-indigo-500/40 transition-all duration-300">
                                    <FiArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </motion.section>
    );
}
