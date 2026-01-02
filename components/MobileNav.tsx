"use client";

import Link from "next/link";
import { FaBars, FaBriefcase, FaEnvelope, FaHome, FaUser } from "react-icons/fa";
import { useScrollTheme } from "./ScrollThemeContext";

export default function MobileNav() {
    const { scrollTheme } = useScrollTheme();
    const isDark = scrollTheme === "footer-dark";

    return (
        <nav className={`fixed bottom-0 left-0 right-0 z-50 flex h-16 w-full items-center justify-around border-t px-4 backdrop-blur-md md:hidden transition-all duration-500 ${isDark ? "bg-black border-transparent text-white" : "bg-white/90 border-zinc-200 text-zinc-500"}`}>
            <Link href="/" className={`flex flex-col items-center gap-1 hover:text-black ${isDark ? "hover:text-white" : ""}`}>
                <FaHome size={20} />
                <span className="text-[10px]">Home</span>
            </Link>
            <Link href="/works" className={`flex flex-col items-center gap-1 hover:text-black ${isDark ? "hover:text-white" : ""}`}>
                <FaBriefcase size={20} />
                <span className="text-[10px]">Works</span>
            </Link>
            <div className="flex flex-col items-center justify-center -mt-8">
                <div className={`flex h-12 w-12 items-center justify-center rounded-full shadow-lg ${isDark ? "bg-white text-black" : "bg-black text-white"}`}>
                    <span className="text-sm font-bold tracking-tighter">VA</span>
                </div>
            </div>
            <Link href="/about" className={`flex flex-col items-center gap-1 hover:text-black ${isDark ? "hover:text-white" : ""}`}>
                <FaUser size={20} />
                <span className="text-[10px]">About</span>
            </Link>
            <Link href="/contact" className={`flex flex-col items-center gap-1 hover:text-black ${isDark ? "hover:text-white" : ""}`}>
                <FaEnvelope size={20} />
                <span className="text-[10px]">Contact</span>
            </Link>
        </nav>
    );
}
