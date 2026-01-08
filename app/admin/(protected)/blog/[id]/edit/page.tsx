import PostForm from "@/components/admin/PostForm";
import { createClient } from "@/utils/supabase/server";
import { notFound } from "next/navigation";

export default async function EditPostPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const supabase = await createClient();
    const { data: post } = await supabase
        .from("posts")
        .select("*")
        .eq("id", id)
        .single();

    if (!post) {
        notFound();
    }

    // Cast post to match PostFormProps type if necessary, 
    // or ensure PostForm handles the exact Supabase return type.
    // The PostForm expects key fields which match the DB schema.

    return <PostForm post={post} />;
}
