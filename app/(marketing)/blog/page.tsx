import { createClient } from "@/utils/supabase/server";
import PostGrid from "@/components/blog/PostGrid";
import BlogSearch from "@/components/blog/BlogSearch";
import FeaturedPost from "@/components/blog/FeaturedPost";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog | Insights & Thoughts",
    description: "Explore my latest thoughts on web development, design, and technology.",
};

export const revalidate = 3600; // Cache for 1 hour

export default async function BlogPage({
    searchParams,
}: {
    searchParams?: Promise<{ search?: string }>;
}) {
    const searchParamsValue = await searchParams;
    const query = searchParamsValue?.search || "";
    const supabase = await createClient();

    let postQuery = supabase
        .from("posts")
        .select("id, title, slug, excerpt, image_url, created_at, published")
        .eq("published", true)
        .order("created_at", { ascending: false });

    if (query) {
        postQuery = postQuery.ilike("title", `%${query}%`);
    }

    const { data: posts } = await postQuery;

    // Separate featured post (first one) from the grid (rest)
    const featuredPost = posts && posts.length > 0 ? posts[0] : null;
    const gridPosts = posts && posts.length > 0 ? posts.slice(1) : [];

    // If searching, show all matches in grid instead of featured layout
    const isSearching = !!query;
    const finalGridPosts = isSearching ? (posts || []) : gridPosts;

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Blog",
                "@id": "https://imvasa.vercel.app/blog",
                "name": "Vasa Blog",
                "description": "Insights & Thoughts on Web Development and SEO",
                "url": "https://imvasa.vercel.app/blog",
                "publisher": {
                    "@type": "Organization",
                    "name": "Vasa",
                    "logo": {
                        "@type": "ImageObject",
                        "url": "https://imvasa.vercel.app/logo.png"
                    }
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
                    }
                ]
            }
        ]
    };

    return (
        <main className="min-h-screen pt-32 pb-20 px-6 md:px-12 lg:px-24 bg-[#fbf9ef]">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="max-w-[1400px] mx-auto">
                {/* Header */}
                <div className="max-w-3xl mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                        Insights & <span className="text-indigo-600">Thoughts</span>
                    </h1>
                    <p className="text-xl text-gray-500 leading-relaxed max-w-2xl">
                        Exploring the intersection of design, engineering, and digital experiences.
                    </p>
                </div>

                <div className="flex flex-col gap-12">
                    <BlogSearch />

                    {/* Featured Post - Only show if likely not searching (or decide logic) */}
                    {!isSearching && featuredPost && (
                        <div className="mb-8">
                            <FeaturedPost post={featuredPost} />
                        </div>
                    )}

                    <PostGrid posts={finalGridPosts} />
                </div>
            </div>
        </main>
    );
}
