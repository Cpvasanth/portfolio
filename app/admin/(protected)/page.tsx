import { createClient } from "@/utils/supabase/server";

export default async function AdminDashboard() {
    const supabase = await createClient();
    const {
        data: { user },
    } = await supabase.auth.getUser();

    return (
        <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">
                    Welcome back, {user?.email}
                </h1>
                <p className="text-gray-500">
                    Manage your blog posts and portfolio content from here.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Placeholder Stats */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="text-gray-500 text-sm font-medium uppercase mb-2">
                        Total Posts
                    </h3>
                    <p className="text-3xl font-bold text-gray-800">0</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="text-gray-500 text-sm font-medium uppercase mb-2">
                        Published
                    </h3>
                    <p className="text-3xl font-bold text-emerald-600">0</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="text-gray-500 text-sm font-medium uppercase mb-2">
                        Drafts
                    </h3>
                    <p className="text-3xl font-bold text-amber-500">0</p>
                </div>
            </div>
        </div>
    );
}
