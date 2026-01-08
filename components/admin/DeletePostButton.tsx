"use client";

import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaSpinner, FaTrash } from "react-icons/fa";

export default function DeletePostButton({ postId }: { postId: string }) {
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const supabase = createClient();

    const handleDelete = async () => {
        if (!confirm("Are you sure you want to delete this post?")) return;

        setLoading(true);
        const { error } = await supabase.from("posts").delete().eq("id", postId);

        if (error) {
            alert("Error deleting post");
            console.error(error);
        } else {
            router.refresh();
        }
        setLoading(false);
    };

    return (
        <button
            onClick={handleDelete}
            disabled={loading}
            className="text-red-400 hover:text-red-600 p-2 transition-colors disabled:opacity-50"
            title="Delete Post"
        >
            {loading ? <FaSpinner className="animate-spin" /> : <FaTrash />}
        </button>
    );
}
