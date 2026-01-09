"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FaArrowLeft, FaTools } from "react-icons/fa";

export default function ToolsLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const pathname = usePathname();
    const router = useRouter();

    return (
        <div 
            className="min-h-screen text-white"
            style={{ 
                backgroundColor: "#000000", 
                cursor: "auto" 
            }}
        >
            {/* Global cursor override for tools section */}
            <style jsx global>{`
                .tools-section,
                .tools-section * {
                    cursor: auto !important;
                }
                .tools-section a,
                .tools-section button,
                .tools-section [role="button"],
                .tools-section input,
                .tools-section textarea,
                .tools-section select {
                    cursor: pointer !important;
                }
                .tools-section input[type="text"],
                .tools-section input[type="email"],
                .tools-section input[type="url"],
                .tools-section textarea {
                    cursor: text !important;
                }
                .tools-section input[type="color"] {
                    cursor: pointer !important;
                }
            `}</style>

            <div className="tools-section">
                {/* Header - Glassy */}
                <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/60 border-b border-white/[0.08]">
                    <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                        <div className="flex items-center gap-6">
                            <button
                                onClick={() => router.back()}
                                className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors group"
                            >
                                <FaArrowLeft className="text-sm group-hover:-translate-x-1 transition-transform" />
                                <span className="text-sm font-medium">Back</span>
                            </button>
                            <div className="h-4 w-px bg-white/10" />
                            <Link
                                href="/tools"
                                className="flex items-center gap-2 text-white font-medium"
                            >
                                <FaTools className="text-sm text-zinc-400" />
                                <span>Tools</span>
                            </Link>
                        </div>

                        {/* Buy Me a Coffee */}
                        <a
                            href="https://buymeacoffee.com/imvasa"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-[#FFDD00] text-black font-medium text-sm rounded-lg hover:bg-[#FFDD00]/90 transition-all"
                        >
                            <span>☕</span>
                            <span>Buy me a coffee</span>
                        </a>
                    </div>
                </header>

                {/* Main Content */}
                <main className="pt-20" style={{ backgroundColor: "#000000" }}>
                    {children}
                </main>

                {/* Footer */}
                <footer className="border-t border-white/[0.05] mt-20" style={{ backgroundColor: "#000000" }}>
                    <div className="max-w-7xl mx-auto px-6 py-8 text-center text-zinc-600 text-sm">
                        <p>Built by <Link href="/" className="text-zinc-400 hover:text-white transition-colors">Vasa</Link> • Free tools for developers & marketers</p>
                    </div>
                </footer>
            </div>
        </div>
    );
}

