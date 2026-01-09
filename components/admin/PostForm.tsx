"use client";

import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaSpinner, FaSave, FaArrowLeft, FaCloudUploadAlt, FaTrash } from "react-icons/fa";
import Link from "next/link";
import { v4 as uuidv4 } from 'uuid';
import TiptapEditor from "./TiptapEditor";
import SettingsDrawer from "./SettingsDrawer";

interface PostFormProps {
    post?: {
        id: string;
        title: string;
        slug: string;
        content: string;
        excerpt: string;
        image_url: string;
        published: boolean;
        seo_title: string;
        seo_description: string;
    };
}

export default function PostForm({ post }: PostFormProps) {
    const router = useRouter();
    const supabase = createClient();
    const [loading, setLoading] = useState(false);
    const [uploading, setUploading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const [formData, setFormData] = useState({
        title: post?.title || "",
        slug: post?.slug || "",
        content: post?.content || "",
        excerpt: post?.excerpt || "",
        image_url: post?.image_url || "",
        published: post?.published || false,
        seo_title: post?.seo_title || "",
        seo_description: post?.seo_description || "",
    });

    const generateSlug = (title: string) => {
        return title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/(^-|-$)+/g, "");
    };

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const title = e.target.value;
        setFormData((prev) => ({
            ...prev,
            title,
            slug: post ? prev.slug : generateSlug(title), // Only auto-generate slug for new posts
        }));
    };

    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files || e.target.files.length === 0) {
            return;
        }

        const file = e.target.files[0];
        const fileExt = file.name.split('.').pop();
        const fileName = `${uuidv4()}.${fileExt}`;
        const filePath = `${fileName}`;

        setUploading(true);
        setError(null);

        try {
            const { error: uploadError } = await supabase.storage
                .from('blog-images')
                .upload(filePath, file);

            if (uploadError) {
                throw uploadError;
            }

            const { data: { publicUrl } } = supabase.storage
                .from('blog-images')
                .getPublicUrl(filePath);

            setFormData(prev => ({ ...prev, image_url: publicUrl }));
        } catch (error: any) {
            setError(error.message || 'Error uploading image');
        } finally {
            setUploading(false);
        }
    };

    const removeImage = () => {
        setFormData(prev => ({ ...prev, image_url: "" }));
    };

    const handleSave = async (publishedStatus: boolean | null = null) => {
        setLoading(true);
        setError(null);

        const currentPublishedState = publishedStatus !== null ? publishedStatus : formData.published;

        const dataToSave = {
            ...formData,
            published: currentPublishedState,
            updated_at: new Date().toISOString(),
        };

        // Optimistically update local state if changing publish status
        if (publishedStatus !== null) {
            setFormData(prev => ({ ...prev, published: publishedStatus }));
        }

        let error;

        if (post?.id) {
            const result = await supabase
                .from("posts")
                .update(dataToSave)
                .eq("id", post.id);
            error = result.error;
        } else {
            const result = await supabase.from("posts").insert([dataToSave]);
            error = result.error;
        }

        if (error) {
            setError(error.message);
            setLoading(false);
            // Revert local state if needed (optional, complexity vs value)
        } else {
            router.push("/admin/blog");
            router.refresh();
        }
    };

    const [showSettings, setShowSettings] = useState(false);
    const [previewMode, setPreviewMode] = useState(false);

    return (
        <div className="min-h-screen bg-[#F3F4F6] relative flex flex-col">
            {/* Header - Dark Theme */}
            <div className="bg-[#111827] text-white h-14 flex items-center justify-between px-4 sticky top-0 z-50 shadow-md">
                <div className="flex items-center gap-4">
                    <Link
                        href="/admin/blog"
                        className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium"
                    >
                        <FaArrowLeft size={12} />
                        Back
                    </Link>
                    <div className="h-4 w-px bg-gray-700 mx-2"></div>
                    <input
                        value={formData.title}
                        onChange={handleTitleChange}
                        placeholder="Untitled Post"
                        className="bg-transparent border-none text-white placeholder-gray-500 text-sm font-medium focus:ring-0 w-64 md:w-96 truncate"
                    />
                </div>

                <div className="flex items-center gap-3">
                    <span className={`text-xs px-2 py-0.5 rounded ${formData.published ? 'bg-green-900 text-green-300' : 'bg-yellow-900 text-yellow-300'}`}>
                        {formData.published ? 'Published' : 'Draft'}
                    </span>

                    <button
                        onClick={() => setShowSettings(true)}
                        className="text-gray-400 hover:text-white p-2"
                        title="Settings"
                    >
                        {/* Settings Icon */}
                        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1-1-1.72v-.51a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                    </button>

                    {post?.id && (
                        <button
                            onClick={async () => {
                                if (window.confirm("Delete this post?")) {
                                    setLoading(true);
                                    await supabase.from('posts').delete().eq('id', post.id);
                                    router.push('/admin/blog');
                                    router.refresh();
                                }
                            }}
                            className="text-gray-400 hover:text-red-400 p-2 transition-colors"
                        >
                            <FaTrash size={16} />
                        </button>
                    )}

                    {!formData.published ? (
                        <button
                            onClick={() => handleSave(true)}
                            disabled={loading}
                            className="bg-green-600 text-white text-sm font-medium px-4 py-1.5 rounded hover:bg-green-500 transition-all flex items-center gap-2"
                        >
                            {loading ? <FaSpinner className="animate-spin" /> : <FaCloudUploadAlt />}
                            Publish
                        </button>
                    ) : (
                        <button
                            onClick={() => handleSave(false)}
                            disabled={loading}
                            className="bg-yellow-600 text-white text-sm font-medium px-4 py-1.5 rounded hover:bg-yellow-500 transition-all flex items-center gap-2"
                        >
                            {loading ? <FaSpinner className="animate-spin" /> : <FaSave />}
                            Unpublish
                        </button>
                    )}

                    <button
                        onClick={() => handleSave(null)}
                        disabled={loading}
                        className="bg-blue-600 text-white text-sm font-medium px-4 py-1.5 rounded hover:bg-blue-500 transition-all flex items-center gap-2"
                    >
                        {loading ? <FaSpinner className="animate-spin" /> : <FaSave />}
                        Save
                    </button>
                </div>
            </div>

            {/* Main Editor Area - Tiptap handles the layout now */}
            <div className="flex-1 w-full">
                <TiptapEditor
                    content={formData.content}
                    onChange={(content) => setFormData(prev => ({ ...prev, content }))}
                    isPreview={previewMode}
                    onTogglePreview={() => setPreviewMode(!previewMode)}
                />
            </div>

            {/* Settings Drawer */}
            <SettingsDrawer
                isOpen={showSettings}
                onClose={() => setShowSettings(false)}
                formData={formData}
                setFormData={setFormData}
                handleImageUpload={handleImageUpload}
                uploading={uploading}
                removeImage={removeImage}
            />
        </div>
    );
}
