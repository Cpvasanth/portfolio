"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome, FaBriefcase, FaUser, FaEnvelope } from "react-icons/fa";
import { useScrollTheme } from "./ScrollThemeContext";

export default function Sidebar() {
    const { scrollTheme } = useScrollTheme();

    // Theme logic
    const isWorksWeb = scrollTheme === "works-web";
    const isWorksSeo = scrollTheme === "works-seo";
    const isWorksMarketing = scrollTheme === "works-marketing";
    const isDark = scrollTheme === "footer-dark" || isWorksWeb || isWorksSeo || isWorksMarketing;

    // Logo Color
    let logoClass = "bg-black";
    if (isWorksWeb) logoClass = "bg-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.5)]";
    if (isWorksSeo) logoClass = "bg-[#fab450] shadow-[0_0_15px_rgba(250,180,80,0.5)]"; // Google Yellowish? Actually User wanted to match SEO section which is Blue links. Let's use Google "G" Blue.
    if (isWorksSeo) logoClass = "bg-[#8ab4f8] shadow-[0_0_15px_rgba(138,180,248,0.5)] text-black";
    if (isWorksMarketing) logoClass = "bg-gradient-to-tr from-purple-500 to-pink-500 shadow-[0_0_15px_rgba(236,72,153,0.5)]";

    return (
        <nav className={`hidden md:flex flex-col items-center justify-between py-8 h-screen sticky top-0 transition-colors duration-500 bg-transparent ${isDark ? "text-white" : "text-zinc-500"}`}>
            {/* Logo */}
            <div className="flex flex-col items-center gap-1">
                <div className={`flex h-10 w-10 items-center justify-center rounded-full text-white transition-colors duration-300 ${logoClass}`}>
                    <span className="text-sm font-bold tracking-tighter">VA</span>
                </div>
            </div>

            {/* Nav Links */}
            <div className="flex flex-col gap-8">
                <NavLink href="/" icon={<FaHome size={20} />} label="Home" theme={scrollTheme} isDark={isDark} />
                <NavLink href="/works" icon={<FaBriefcase size={20} />} label="Works" theme={scrollTheme} isDark={isDark} />
                <NavLink href="/about" icon={<FaUser size={20} />} label="About" theme={scrollTheme} isDark={isDark} />
                <NavLink href="/contact" icon={<FaEnvelope size={20} />} label="Contact" theme={scrollTheme} isDark={isDark} />
            </div>

            {/* Footer / Extra (Optional) */}
            <div className={`flex flex-col items-center gap-4 text-xs font-bold ${isWorksWeb ? "text-cyan-500/50" : isWorksSeo ? "text-[#8ab4f8]/50" : isWorksMarketing ? "text-purple-500/50" : "text-zinc-400"}`}>
                <span className=" tracking-widest whitespace-nowrap">VASA</span>
            </div>
        </nav>
    );
}

function NavLink({ href, icon, label, theme, isDark }: { href: string; icon: React.ReactNode; label: string; theme: string; isDark: boolean }) {
    // Determine button style based on theme
    let buttonClass = "";

    if (theme === "works-web") {
        buttonClass = "bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20 hover:text-cyan-300 hover:shadow-[0_0_10px_rgba(6,182,212,0.3)]";
    } else if (theme === "works-seo") {
        buttonClass = "bg-[#8ab4f8]/10 text-[#8ab4f8] hover:bg-[#8ab4f8]/20 hover:text-white hover:shadow-[0_0_10px_rgba(138,180,248,0.3)]";
    } else if (theme === "works-marketing") {
        buttonClass = "bg-purple-500/10 text-purple-400 hover:bg-purple-500/20 hover:text-pink-400 hover:shadow-[0_0_10px_rgba(236,72,153,0.3)]";
    } else if (isDark) {
        buttonClass = "bg-white/10 text-white hover:bg-white/20";
    } else {
        buttonClass = "bg-[#eeece3] text-zinc-500 hover:text-black";
    }

    return (
        <Link
            href={href}
            className={`group relative flex items-center justify-center rounded-lg p-6 transition-all duration-300 ${buttonClass}`}
        >
            {icon}
            <span className="absolute left-14 hidden whitespace-nowrap rounded-md bg-zinc-900 px-3 py-1.5 text-xs font-medium text-white shadow-xl opacity-0 group-hover:block group-hover:opacity-100 transition-opacity duration-200 z-[100] pointer-events-none">
                {label}
            </span>
        </Link>
    );
}
