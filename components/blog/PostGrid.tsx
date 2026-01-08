"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { FiArrowUpRight, FiClock } from "react-icons/fi";

interface Post {
    id: string;
    title: string;
    slug: string;
    excerpt: string | null;
    content?: string;
    image_url: string | null;
    created_at: string;
}

interface PostGridProps {
    posts: Post[];
}

const container: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.1
        }
    }
};

const item: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    }
};

export default function PostGrid({ posts }: PostGridProps) {
    if (posts.length === 0) {
        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
            >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-6">
                    <FiArrowUpRight className="w-8 h-8 text-gray-500" />
                </div>
                <p className="text-xl text-gray-900 mb-2">No articles found</p>
                <p className="text-gray-500">Try adjusting your search terms</p>
            </motion.div>
        );
    }

    const categories = ["Development", "SEO", "Design", "Marketing", "Technology", "Strategy"];

    return (
        <section>
            {/* Section Header */}
            <div className="flex items-center gap-3 mb-8">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <span className="text-xs font-bold tracking-[0.3em] text-gray-500 uppercase">
                    All Articles
                </span>
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </div>

            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                {posts.map((post, idx) => {
                    // Match logic from [slug]/page.tsx
                    const readingTime = Math.max(4, Math.ceil((post.content?.length || 0) / 1000));
                    const formattedDate = new Date(post.created_at).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric'
                    });

                    return (
                        <motion.article
                            key={post.id}
                            variants={item}
                            className="group relative"
                        >
                            <Link href={`/blog/${post.slug}`} className="block h-full">
                                <div className="relative h-full flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-500 hover:border-indigo-500/30 hover:shadow-xl group-hover:-translate-y-1">
                                    {/* Image Container */}
                                    <div className="relative aspect-[16/10] overflow-hidden">
                                        {post.image_url ? (
                                            <Image
                                                src={post.image_url}
                                                alt={post.title}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            />
                                        ) : (
                                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 via-purple-100 to-slate-100" />
                                        )}

                                        {/* Gradient Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                        {/* Category Badge */}
                                        <div className="absolute top-4 left-4">
                                            <span className="inline-flex items-center px-3 py-1 text-[10px] font-semibold tracking-wider text-gray-600 bg-white/90 backdrop-blur-md rounded-full border border-gray-200 uppercase shadow-sm">
                                                {categories[idx % categories.length]}
                                            </span>
                                        </div>

                                        {/* Date Badge */}
                                        <div className="absolute top-4 right-4 px-3 py-1 text-[10px] font-medium text-gray-600 bg-white/90 backdrop-blur-md rounded-full border border-gray-200 shadow-sm">
                                            {formattedDate}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-5 flex flex-col flex-grow">
                                        {/* Title */}
                                        <h3 className="text-lg font-bold text-gray-900 mb-3 leading-snug line-clamp-2 group-hover:text-indigo-600 transition-colors duration-300">
                                            {post.title}
                                        </h3>

                                        {/* Excerpt */}
                                        <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-2 flex-grow">
                                            {post.excerpt || "Explore the latest insights and strategies for digital success."}
                                        </p>

                                        {/* Footer */}
                                        <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
                                            <span className="flex items-center gap-1.5 text-xs text-gray-500">
                                                <FiClock className="w-3.5 h-3.5" />
                                                {readingTime} min read
                                            </span>

                                            <span className="flex items-center gap-1.5 text-xs font-semibold text-indigo-600 group-hover:text-indigo-500 transition-colors">
                                                Read
                                                <div className="flex items-center justify-center w-5 h-5 rounded-full bg-indigo-50 group-hover:bg-indigo-100 transition-colors">
                                                    <FiArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                                </div>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.article>
                    );
                })}
            </motion.div>
        </section>
    );
}
