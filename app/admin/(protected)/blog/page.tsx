import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { FaEdit, FaPlus } from "react-icons/fa";
import DeletePostButton from "@/components/admin/DeletePostButton";

export default async function BlogListPage() {
    const supabase = await createClient();
    const { data: posts } = await supabase
        .from("posts")
        .select("*")
        .order("created_at", { ascending: false });

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold text-gray-800">Blog Posts</h1>
                <Link
                    href="/admin/blog/new"
                    className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-800 transition-colors"
                >
                    <FaPlus />
                    New Post
                </Link>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-gray-50 border-b border-gray-100">
                        <tr>
                            <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase">
                                Title
                            </th>
                            <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase">
                                Status
                            </th>
                            <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase">
                                Created At
                            </th>
                            <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase text-right">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {posts?.map((post) => (
                            <tr key={post.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4 font-medium text-gray-900">
                                    {post.title}
                                </td>
                                <td className="px-6 py-4">
                                    <span
                                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${post.published
                                            ? "bg-emerald-100 text-emerald-800"
                                            : "bg-amber-100 text-amber-800"
                                            }`}
                                    >
                                        {post.published ? "Published" : "Draft"}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-gray-500 text-sm">
                                    {new Date(post.created_at).toLocaleDateString()}
                                </td>
                                <td className="px-6 py-4 text-right flex justify-end gap-3">
                                    <Link
                                        href={`/admin/blog/${post.id}/edit`}
                                        className="text-gray-400 hover:text-blue-600 p-2 transition-colors"
                                        title="Edit Post"
                                    >
                                        <FaEdit />
                                    </Link>
                                    <DeletePostButton postId={post.id} />
                                </td>
                            </tr>
                        ))}
                        {posts?.length === 0 && (
                            <tr>
                                <td
                                    colSpan={4}
                                    className="px-6 py-8 text-center text-gray-500"
                                >
                                    No posts found. Create your first one!
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
