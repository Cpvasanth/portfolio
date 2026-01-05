
"use client";

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import Magnetic from "./Magnetic";
import { useScrollTheme } from "./ScrollThemeContext";

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
            className="relative flex h-screen w-full flex-col justify-center items-center px-4 md:px-10 overflow-hidden bg-transparent"
        >
            {/* Spotlight Effect */}
            <div
                className="pointer-events-none absolute inset-0 transition-opacity duration-300"
                style={{
                    background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,0,0,0.03), transparent 40%)`,
                }}
            />

            {/* Top Brand (Mobile only, desktop has sidebar) */}
            <div className="mb-20 md:hidden">
                {/* Handled by MobileNav but good to have spacing or generic header if needed. For now keeping clean. */}
            </div>


            <div className="flex flex-col items-center text-center space-y-6 md:space-y-8 z-0">
                <Magnetic strength={0.3}>
                    <h1 className="text-2xl md:text-xl font-bold leading-tight tracking-tighter text-black sm:text-5xl md:text-7xl lg:text-8xl cursor-default">
                        Affordable Freelance
                        <span className="text-zinc-500"> Web Developer </span>&<br />
                        SEO Expert
                    </h1>
                </Magnetic>

                <p className="max-w-xl text-lg font-medium leading-relaxed text-zinc-600 md:text-2xl">
                    Your all-in-one digital partner for web development, SEO & digital marketing.
                    Affordable rates. Premium results. 60-80% off for first-time clients.
                </p>

                <div className="flex flex-col gap-4 sm:flex-row">
                    <Magnetic>
                        <Link
                            href="/contact"
                            className="group flex items-center justify-center gap-2 rounded-full bg-black px-8 py-4 text-lg font-bold text-white transition-all hover:bg-zinc-800"
                        >
                            Book a Call Now
                            <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                        </Link>
                    </Magnetic>
                    <Magnetic>
                        <Link
                            href="/works"
                            className="flex items-center justify-center rounded-full border border-black px-8 py-4 text-lg font-bold text-black transition-colors hover:bg-black hover:text-white"
                        >
                            View Projects
                        </Link>
                    </Magnetic>
                </div>
            </div>

            {/* Decorative/Background Elements if needed for 'premium' feel */}
            <div className="pointer-events-none absolute right-0 top-0 -z-10 h-full w-1/3 opacity-5">
                {/* Abstract pattern could go here */}
            </div>
        </section>
    );
}


