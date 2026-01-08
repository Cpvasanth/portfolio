import { createClient } from "@/utils/supabase/server";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { FiArrowLeft, FiClock, FiCalendar } from "react-icons/fi";
import { Metadata } from "next";
import TableOfContents from "@/components/blog/TableOfContents";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const paramsValue = await params;
    const slug = paramsValue.slug;
    const supabase = await createClient();

    const { data: post } = await supabase
        .from("posts")
        .select("title, excerpt, image_url, created_at")
        .eq("slug", slug)
        .single();

    if (!post) {
        return {
            title: "Post Not Found",
        };
    }

    return {
        title: post.title,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt || "",
            url: `https://imvasa.vercel.app/blog/${slug}`,
            siteName: "Vasa - Freelancer",
            images: post.image_url ? [post.image_url] : [],
            type: "article",
            publishedTime: post.created_at,
            authors: ["Vasa"],
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.excerpt || "",
            images: post.image_url ? [post.image_url] : [],
            creator: "@cpvasanth",
        },
        alternates: {
            canonical: `https://imvasa.vercel.app/blog/${slug}`,
        }
    };
}

export default async function BlogPostPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const paramsValue = await params;
    const slug = paramsValue.slug;
    const supabase = await createClient();

    const { data: post } = await supabase
        .from("posts")
        .select("*")
        .eq("slug", slug)
        .eq("published", true)
        .single();

    if (!post) {
        notFound();
    }

    const readingTime = Math.max(4, Math.ceil((post.content?.length || 0) / 1000)); // Rough estimate
    const formattedDate = new Date(post.created_at).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    // JSON-LD Structured Data
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BlogPosting",
                "headline": post.title,
                "datePublished": post.created_at,
                "dateModified": post.created_at,
                "description": post.excerpt,
                "image": post.image_url ? [post.image_url] : [],
                "url": `https://imvasa.vercel.app/blog/${slug}`,
                "author": {
                    "@type": "Person",
                    "name": "Vasa",
                    "url": "https://imvasa.vercel.app"
                },
                "publisher": {
                    "@type": "Organization",
                    "name": "Vasa",
                    "logo": {
                        "@type": "ImageObject",
                        "url": "https://imvasa.vercel.app/logo.png"
                    }
                },
                "mainEntityOfPage": {
                    "@type": "WebPage",
                    "@id": `https://imvasa.vercel.app/blog/${slug}`
                }
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Home",
                        "item": "https://imvasa.vercel.app"
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "Blog",
                        "item": "https://imvasa.vercel.app/blog"
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": post.title,
                        "item": `https://imvasa.vercel.app/blog/${slug}`
                    }
                ]
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <article className="min-h-screen pt-32 pb-20 px-6 md:px-12 lg:px-24 bg-[#fbf9ef]">
                <div className="max-w-[1400px] mx-auto">
                    {/* Back Link - Mobile Only */}
                    <div className="mb-12 lg:hidden">
                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors group font-medium"
                        >
                            <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                            Back to Blog
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        {/* Left Column: TOC */}
                        {/* Sticky logic is handled inside the component or via class here */}
                        <aside className="hidden lg:block lg:col-span-3">
                            <div className="sticky top-32 flex flex-col gap-6">
                                <Link
                                    href="/blog"
                                    className="inline-flex items-center gap-2 text-gray-500 hover:text-indigo-600 transition-colors group font-medium border-b border-gray-100 pb-6"
                                >
                                    <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                                    Back to Blog
                                </Link>
                                <TableOfContents />
                            </div>
                        </aside>

                        {/* Center Column: Content */}
                        <div className="lg:col-span-8 lg:col-start-4">
                            <header className="mb-12">
                                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-6 font-medium">
                                    <span className="flex items-center gap-2">
                                        <FiCalendar className="w-4 h-4" />
                                        {formattedDate}
                                    </span>
                                    <span className="flex items-center gap-2">
                                        <FiClock className="w-4 h-4" />
                                        {readingTime} min read
                                    </span>
                                </div>

                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
                                    {post.title}
                                </h1>

                                {post.image_url && (
                                    <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-3xl shadow-lg mb-12 bg-gray-100">
                                        <Image
                                            src={post.image_url}
                                            alt={post.title}
                                            fill
                                            className="object-cover"
                                            priority
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                                        />
                                    </div>
                                )}
                            </header>

                            <div
                                id="blog-content"
                                className="prose prose-lg prose-gray max-w-none 
                            prose-headings:text-gray-900 prose-headings:font-bold
                            prose-p:text-gray-600 prose-p:leading-relaxed
                            prose-a:text-indigo-600 prose-a:no-underline hover:prose-a:underline
                            prose-strong:text-gray-900 prose-code:text-indigo-600 prose-code:bg-indigo-50 prose-code:px-1 prose-code:rounded
                            prose-li:text-gray-600
                            prose-blockquote:border-l-indigo-500 prose-blockquote:bg-white prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:shadow-sm prose-blockquote:not-italic
                            prose-img:rounded-2xl prose-img:shadow-lg
                            "
                                dangerouslySetInnerHTML={{ __html: post.content }}
                            />
                        </div>
                    </div>
                </div>
            </article>
        </>
    );
}
