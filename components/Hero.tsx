
"use client";

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { useEffect } from "react";
import { useScrollTheme } from "./ScrollThemeContext"; // Added

export default function Hero() {
    const { setScrollTheme } = useScrollTheme();

    useEffect(() => {
        setScrollTheme("light");
    }, [setScrollTheme]);

    return (
        <section className="flex h-screen w-full flex-col justify-center items-center px-4 md:px-10">
            {/* Top Brand (Mobile only, desktop has sidebar) */}
            <div className="mb-20 md:hidden">
                {/* Handled by MobileNav but good to have spacing or generic header if needed. For now keeping clean. */}
            </div>

            {/* Contact Me Button */}
            {/* Contact Me Button (Moved to RightSidebar) */}
            {/* Removed */}

            <div className="flex flex-col items-center text-center space-y-6 md:space-y-8">
                <h1 className="text-2xl md:text-xl font-bold leading-tight tracking-tighter text-black sm:text-5xl md:text-7xl lg:text-8xl">
                    The Digital
                    <span className="text-zinc-500"> Partner </span> for <br />
                    Ambitious Brands
                </h1>

                <p className="max-w-xl text-lg font-medium leading-relaxed text-zinc-600 md:text-2xl">
                    Freelance Web Developer & Digital Marketer.
                    Building high-performance websites and data-driven marketing strategies using the VASA approach.
                </p>

                <div className="flex flex-col gap-4 sm:flex-row">
                    <Link
                        href="/contact"
                        className="group flex items-center justify-center gap-2 rounded-full bg-black px-8 py-4 text-lg font-bold text-white transition-all hover:bg-zinc-800"
                    >
                        Book a Call Now
                        <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                    </Link>
                    <Link
                        href="/works"
                        className="flex items-center justify-center rounded-full border border-black px-8 py-4 text-lg font-bold text-black transition-colors hover:bg-black hover:text-white"
                    >
                        View Projects
                    </Link>
                </div>
            </div>

            {/* Decorative/Background Elements if needed for 'premium' feel */}
            <div className="pointer-events-none absolute right-0 top-0 -z-10 h-full w-1/3 opacity-5">
                {/* Abstract pattern could go here */}
            </div>
        </section>
    );
}
