"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import {
    motion,
    useMotionTemplate,
    useMotionValue,
    useInView,
} from "framer-motion";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { useScrollTheme } from "./ScrollThemeContext";

export default function Footer() {
    const { setScrollTheme } = useScrollTheme();
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { amount: 0.2 });

    useEffect(() => {
        if (isInView) {
            setScrollTheme("footer-dark");
        } else {
            setScrollTheme("light");
        }
    }, [isInView, setScrollTheme]);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({
        currentTarget,
        clientX,
        clientY,
    }: React.MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <footer
            ref={containerRef}
            className="relative flex min-h-screen w-full flex-col justify-between overflow-hidden bg-black px-4 py-10 md:px-10 lg:pl-32"
            onMouseMove={handleMouseMove}
        >
            {/* Socials Centered at Top */}
            <div className="flex w-full justify-center pt-10 relative z-30 pointer-events-auto">
                <Socials />
            </div>

            {/* 
        Layer 1: Base (White)
        This layer is always visible.
      */}
            <div className="absolute inset-0 top-0 flex flex-col items-center justify-center pointer-events-none text-white">
                <MainContent />
            </div>

            {/* 
        Layer 2: Spotlight (Orange)
        This layer sits on top and is revealed by the mouse mask.
      */}
            <motion.div
                className="absolute inset-0 top-0 flex flex-col items-center justify-center text-[#ff7722] pointer-events-none"
                style={{
                    maskImage: useMotionTemplate`radial-gradient(300px circle at ${mouseX}px ${mouseY}px, black, transparent)`,
                    WebkitMaskImage: useMotionTemplate`radial-gradient(300px circle at ${mouseX}px ${mouseY}px, black, transparent)`,
                }}
            >
                <MainContent />
            </motion.div>

            {/* Copyright at Bottom */}
            <Copyright />
        </footer>
    );
}

function Socials() {
    return (
        <div className="flex gap-6 md:gap-10 text-zinc-500">
            <a
                href="https://www.linkedin.com/in/cpvasanth/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl transition-transform hover:scale-110 hover:text-white md:text-3xl"
                aria-label="LinkedIn"
            >
                <FaLinkedin />
            </a>
            <a
                href="https://x.com/cpvasanth"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl transition-transform hover:scale-110 hover:text-white md:text-3xl"
                aria-label="X (Twitter)"
            >
                <FaXTwitter />
            </a>
            <a
                href="mailto:cpvasanth@proton.me"
                className="text-2xl transition-transform hover:scale-110 hover:text-white md:text-3xl"
                aria-label="Email"
            >
                <FaEnvelope />
            </a>
        </div>
    );
}

function MainContent() {
    return (
        <div className="flex flex-col items-center justify-center gap-8 md:gap-12 text-center pointer-events-none pb-24 md:pb-0">
            <p className="max-w-5xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight tracking-tighter px-4" aria-label="Call to action">
                Where attention <br />
                <span className="opacity-50">turns into action.</span>
            </p>

            <Link
                href="/contact"
                className="group relative overflow-hidden rounded-full bg-zinc-900 px-8 py-4 md:px-16 md:py-8 text-lg md:text-2xl font-bold transition-all hover:scale-105 hover:bg-zinc-800 text-zinc-600 pointer-events-auto active:scale-95"
            >
                <span className="relative z-10">Let's Talk</span>
            </Link>
        </div>
    );
}

function Copyright() {
    return (
        <div className="hidden md:flex w-full items-end justify-center pb-10 pointer-events-auto relative z-30">
            <p className="font-mono text-sm uppercase tracking-widest text-zinc-600 md:text-base">
                ©2026 Vasa. All rights reserved.
            </p>
        </div>
    );
}
