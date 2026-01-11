
"use client";

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import Magnetic from "./Magnetic";
import { useScrollTheme } from "./ScrollThemeContext";
import { motion } from "framer-motion";

export default function Hero() {
    const { setScrollTheme } = useScrollTheme();
    const heroRef = useRef<HTMLElement>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        setScrollTheme("light");
    }, [setScrollTheme]);

    const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
        if (!heroRef.current) return;
        const { left, top } = heroRef.current.getBoundingClientRect();
        setMousePosition({
            x: e.clientX - left,
            y: e.clientY - top,
        });
    };

    return (
        <section
            ref={heroRef}
            onMouseMove={handleMouseMove}
            className="relative flex min-h-[100dvh] md:h-screen w-full flex-col justify-center items-center px-4 md:px-10 overflow-hidden bg-transparent"
        >
            {/* Spotlight Effect */}
            <div
                className="pointer-events-none absolute inset-0 transition-opacity duration-300"
                style={{
                    background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,0,0,0.03), transparent 40%)`,
                }}
            />

            {/* Top Brand (Mobile only, desktop has sidebar) */}
            <div className="mb-10 md:mb-20 md:hidden">
                {/* Handled by MobileNav but good to have spacing or generic header if needed. For now keeping clean. */}
            </div>


            <div className="flex flex-col items-center text-center space-y-4 md:space-y-8 z-0 px-2">
                <Magnetic strength={0.3}>
                    <motion.h1 
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tighter text-black cursor-default"
                    >
                        Affordable Freelance <br />
                        <span className="text-zinc-500"> Web Developer </span>&<br />
                        SEO Expert
                    </motion.h1>
                </Magnetic>

                <motion.p 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="max-w-xl text-base sm:text-lg md:text-xl lg:text-2xl font-medium leading-relaxed text-zinc-600"
                >
                    Your all-in-one digital partner for web development, SEO & digital marketing.
                    Affordable rates. Premium results. 60-80% off for first-time clients.
                </motion.p>

                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                    className="flex flex-col gap-3 w-full sm:w-auto sm:flex-row pt-4"
                >
                    <Magnetic>
                        <Link
                            href="/contact"
                            className="group flex items-center justify-center gap-2 rounded-full bg-black px-6 py-4 md:px-8 md:py-4 text-lg font-bold text-white transition-all hover:bg-zinc-800 active:scale-95 w-full sm:w-auto"
                        >
                            Book a Call Now
                            <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                        </Link>
                    </Magnetic>
                    <Magnetic>
                        <Link
                            href="/works"
                            className="flex items-center justify-center rounded-full border border-black px-6 py-4 md:px-8 md:py-4 text-lg font-bold text-black transition-colors hover:bg-black hover:text-white active:scale-95 w-full sm:w-auto"
                        >
                            View Projects
                        </Link>
                    </Magnetic>
                </motion.div>
            </div>

            {/* Decorative/Background Elements if needed for 'premium' feel */}
            <div className="pointer-events-none absolute right-0 top-0 -z-10 h-full w-1/3 opacity-5">
                {/* Abstract pattern could go here */}
            </div>
        </section>
    );
}


