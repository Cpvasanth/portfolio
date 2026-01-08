import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { redirect } from "next/navigation";
import { FaSignOutAlt, FaRocket, FaList } from "react-icons/fa";

export default async function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const supabase = await createClient();

    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
        return redirect("/admin/login");
    }

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className="w-64 bg-white border-r border-gray-200 hidden md:block">
                <div className="p-6 border-b border-gray-100">
                    <Link href="/admin" className="text-2xl font-bold text-gray-800">
                        Admin
                    </Link>
                </div>
                <nav className="p-4 space-y-2">
                    <Link
                        href="/admin"
                        className="flex items-center gap-3 px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
                    >
                        <FaRocket className="text-gray-400" />
                        Dashboard
                    </Link>
                    <Link
                        href="/admin/blog"
                        className="flex items-center gap-3 px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
                    >
                        <FaList className="text-gray-400" />
                        Blog Posts
                    </Link>
                </nav>
                <div className="absolute bottom-0 w-64 p-4 border-t border-gray-100">
                    <form action="/auth/signout" method="post">
                        <button
                            className="flex items-center gap-3 w-full px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                            type="submit"
                        >
                            <FaSignOutAlt />
                            Sign Out
                        </button>
                    </form>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto">
                <header className="bg-white border-b border-gray-200 p-4 md:hidden">
                    <Link href="/admin" className="text-xl font-bold">
                        Admin Dashboard
                    </Link>
                </header>
                <div className="p-8">{children}</div>
            </main>
        </div>
    );
}
