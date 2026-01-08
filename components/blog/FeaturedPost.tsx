"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
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

export default function FeaturedPost({ post }: { post: Post }) {
    // Match logic from [slug]/page.tsx
    const readingTime = Math.max(4, Math.ceil((post.content?.length || 0) / 1000));
    const formattedDate = new Date(post.created_at).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    });

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
        >
            <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-8 bg-indigo-500"></span>
                <span className="text-xs font-bold tracking-[0.2em] text-indigo-600 uppercase">
                    Featured Article
                </span>
            </div>

            <Link href={`/blog/${post.slug}`} className="group block relative">
                <div className="relative overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 grid lg:grid-cols-2 gap-0">

                    {/* Image Section */}
                    <div className="relative h-[300px] lg:h-auto overflow-hidden">
                        {post.image_url ? (
                            <Image
                                src={post.image_url}
                                alt={post.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                priority
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        ) : (
                            <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200" />
                        )}
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                    </div>

                    {/* Content Section */}
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                        <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
                            <span className="bg-gray-100 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
                                Latest
                            </span>
                            <span>{formattedDate}</span>
                        </div>

                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-indigo-600 transition-colors">
                            {post.title}
                        </h2>

                        <p className="text-gray-600 text-lg leading-relaxed mb-8 line-clamp-3">
                            {post.excerpt || "Dive deep into our latest insights, tutorials, and thoughts on the ever-evolving world of technology and design."}
                        </p>

                        <div className="flex items-center gap-6 mt-auto">
                            <span className="flex items-center gap-2 text-sm font-medium text-gray-900 group-hover:text-indigo-600 transition-colors">
                                Read Article
                                <FiArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </span>
                            <span className="flex items-center gap-2 text-sm text-gray-500">
                                <FiClock /> {readingTime} min read
                            </span>
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
