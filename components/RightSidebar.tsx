"use client";

import { useScrollTheme } from "./ScrollThemeContext";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useSpring } from "framer-motion";

export default function RightSidebar() {
    const { scrollTheme } = useScrollTheme();
    // Removed pathname logic to rely strictly on scrollTheme

    const isWorksWeb = scrollTheme === "works-web";
    const isWorksSeo = scrollTheme === "works-seo";
    const isWorksMarketing = scrollTheme === "works-marketing";
    const isDark = scrollTheme === "footer-dark" || isWorksWeb || isWorksSeo || isWorksMarketing;

    const { scrollYProgress } = useScroll();
    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const [time, setTime] = useState("");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setTime(
                now.toLocaleTimeString("en-US", {
                    timeZone: "Asia/Kolkata",
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true,
                })
            );
        };
        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    // Theme-based Styles
    let contactBtnStyle = isDark ? "border-white hover:bg-white hover:text-black" : "border-black hover:bg-black hover:text-white";
    if (isWorksWeb) contactBtnStyle = "border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black shadow-[0_0_10px_rgba(6,182,212,0.2)]";
    if (isWorksSeo) contactBtnStyle = "border-[#8ab4f8] text-[#8ab4f8] hover:bg-[#8ab4f8] hover:text-white shadow-[0_0_10px_rgba(138,180,248,0.2)]";
    if (isWorksMarketing) contactBtnStyle = "border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white shadow-[0_0_10px_rgba(168,85,247,0.2)]";

    let trackColor = isDark ? "bg-white/20" : "bg-black/10";
    if (isWorksWeb) trackColor = "bg-cyan-900/30";
    if (isWorksSeo) trackColor = "bg-[#fab450]/20"; // Yellowish track? Or Blue? Let's go Blue to match.
    if (isWorksSeo) trackColor = "bg-[#8ab4f8]/20";
    if (isWorksMarketing) trackColor = "bg-purple-900/30";

    let barColor = isDark ? "bg-white" : "bg-black";
    if (isWorksWeb) barColor = "bg-cyan-400 shadow-[0_0_8px_#22d3ee]";
    if (isWorksSeo) barColor = "bg-[#8ab4f8] shadow-[0_0_8px_#8ab4f8]";
    if (isWorksMarketing) barColor = "bg-purple-500 shadow-[0_0_8px_#a855f7]";

    let textColor = isDark ? "text-white" : "text-black";
    if (isWorksWeb) textColor = "text-cyan-500/80";
    if (isWorksSeo) textColor = "text-[#8ab4f8]";
    if (isWorksMarketing) textColor = "text-purple-400";

    return (
        <aside
            className={`hidden md:flex flex-col justify-between items-center py-8 h-screen sticky top-0 transition-colors duration-500 ${textColor} bg-transparent`}
        >
            {/* Top: Contact Button */}
            <div className="flex flex-col items-center">
                <Link href="/contact" className={`rounded-full px-6 py-2 border transition-colors ${contactBtnStyle}`}>
                    Contact Me
                </Link>
            </div>

            {/* Middle: Scroll Indicator */}
            <div className="flex-1 flex flex-col items-center justify-center w-full">
                <div className={`h-32 w-[2px] relative overflow-hidden ${trackColor}`}>
                    <motion.div
                        className={`absolute top-0 left-0 right-0 w-full origin-top ${barColor}`}
                        style={{ scaleY, height: "100%" }}
                    />
                </div>
            </div>

            {/* Bottom: Location & Time */}
            <div className="flex flex-col items-end gap-1 text-xs font-mono tracking-widest uppercase">
                <span>Chennai, India</span>
                <span>{time}</span>
            </div>
        </aside>
    );
}
