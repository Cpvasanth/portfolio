"use client";

import Link from "next/link";
import { FaBars, FaBriefcase, FaEnvelope, FaHome, FaUser } from "react-icons/fa";
import { useScrollTheme } from "./ScrollThemeContext";

export default function MobileNav() {
    const { scrollTheme } = useScrollTheme();
    const isDark = scrollTheme === "footer-dark";

    return (
        <nav className={`fixed bottom-0 left-0 right-0 z-50 flex h-20 w-full items-center justify-around border-t px-4 backdrop-blur-md md:hidden transition-all duration-500 safe-bottom ${isDark ? "bg-black border-transparent text-white" : "bg-white/90 border-zinc-200 text-zinc-500"}`}>
            <Link href="/" className={`flex flex-col items-center justify-center gap-1 min-w-[56px] min-h-[56px] active:scale-95 transition-transform ${isDark ? "active:text-white" : "active:text-black"}`}>
                <FaHome size={22} />
                <span className="text-[11px] font-medium">Home</span>
            </Link>
            <Link href="/works" className={`flex flex-col items-center justify-center gap-1 min-w-[56px] min-h-[56px] active:scale-95 transition-transform ${isDark ? "active:text-white" : "active:text-black"}`}>
                <FaBriefcase size={22} />
                <span className="text-[11px] font-medium">Works</span>
            </Link>
            <div className="flex flex-col items-center justify-center -mt-6">
                <div className={`flex h-14 w-14 items-center justify-center rounded-full shadow-lg ${isDark ? "bg-white text-black" : "bg-black text-white"}`}>
                    <span className="text-base font-bold tracking-tighter">VA</span>
                </div>
            </div>
            <Link href="/about" className={`flex flex-col items-center justify-center gap-1 min-w-[56px] min-h-[56px] active:scale-95 transition-transform ${isDark ? "active:text-white" : "active:text-black"}`}>
                <FaUser size={22} />
                <span className="text-[11px] font-medium">About</span>
            </Link>
            <Link href="/contact" className={`flex flex-col items-center justify-center gap-1 min-w-[56px] min-h-[56px] active:scale-95 transition-transform ${isDark ? "active:text-white" : "active:text-black"}`}>
                <FaEnvelope size={22} />
                <span className="text-[11px] font-medium">Contact</span>
            </Link>
        </nav>
    );
}
