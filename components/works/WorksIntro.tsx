"use client";


import { motion } from "framer-motion";
import { useEffect } from "react";
import { useScrollTheme } from "@/components/ScrollThemeContext"; // Verify path

export default function WorksIntro() {
    const { setScrollTheme } = useScrollTheme();

    useEffect(() => {
        setScrollTheme("works-web");
    }, [setScrollTheme]);

    return (
        <section className="pt-20 md:pt-32 pb-12 md:pb-16 px-4 md:px-12 max-w-7xl mx-auto">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                 onViewportEnter={() => setScrollTheme("works-web")}
                transition={{ duration: 0.6 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black tracking-tighter mb-6 md:mb-8"
            >
                Web Development <span className="text-cyan-500 text-glow-cyan">Portfolio</span>
            </motion.h1>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg md:text-xl lg:text-2xl text-zinc-400 max-w-2xl leading-relaxed"
            >
                Freelancer portfolio showcasing web design, SEO case studies, and digital marketing results.
            </motion.p>
        </section>
    );
}
