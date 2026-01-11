"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { useScrollTheme } from "@/components/ScrollThemeContext";

interface Project {
    title: string;
    category: string;
    description: string;
    color: string;
    image: string;
    alt: string;
    tags: string[];
    url: string;
}

export default function WebDesignSection({ projects }: { projects: Project[] }) {
    const { setScrollTheme } = useScrollTheme();
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 10]);

    // Reset theme to "works-web" on mount (if needed as a fallback) or on viewport enter
    React.useEffect(() => {
        setScrollTheme("works-web");
    }, [setScrollTheme]);

    return (
        <motion.section
            ref={containerRef}
            className="relative py-16 md:py-24 overflow-hidden bg-black text-white"
            onViewportEnter={() => setScrollTheme("works-web")}
            viewport={{ amount: 0.2 }}
        >
            {/* Abstract Background Illustration */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
                <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-cyan-500/20 rounded-full blur-[80px] md:blur-[120px]" />
                <div className="absolute bottom-0 left-0 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-blue-600/20 rounded-full blur-[80px] md:blur-[120px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-12">
                {/* Section Title */}
                <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 md:mb-24 gap-6 md:gap-12">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter mb-3 md:mb-4"
                        >
                            Web Design <br /> & Experience.
                        </motion.h2>
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: 80 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="h-1.5 md:h-2 bg-cyan-500 mb-4 md:mb-8 shadow-[0_0_15px_rgba(6,182,212,0.5)]"
                        />
                        <p className="text-base md:text-xl text-white/60 max-w-lg leading-relaxed">
                            Merging aesthetics with functionality. I build touchable interfaces that feel alive, using modern frameworks and fluid animations.
                        </p>
                    </div>

                    {/* 3D Illustration - Hidden on mobile */}
                    <motion.div
                        style={{ y, rotate }}
                        className="relative w-full md:w-[600px] md:h-[600px] hidden md:block perspective-1000"
                    >
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <Image
                                src="/web-design-hero.png"
                                alt="Abstract 3D Web Design Illustration"
                                width={800}
                                height={800}
                                className="w-full h-full object-contain drop-shadow-2xl"
                            />
                        </motion.div>
                    </motion.div>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </motion.section>
    );
}

function ProjectCard({ project, index }: { project: Project, index: number }) {
    // Parallax effect for odd items - only on desktop
    const isOdd = index % 2 !== 0;

    return (
        <Link href={project.url || "#"} target="_blank">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className={`group relative ${isOdd ? "md:mt-24" : ""}`}
            >
                {/* Image Container */}
                <div className="relative overflow-hidden rounded-2xl md:rounded-3xl aspect-[4/3] mb-4 md:mb-6 shadow-xl md:shadow-2xl bg-zinc-900/60 backdrop-blur-xl border border-white/20">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 opacity-60 z-10 transition-opacity duration-500 group-hover:opacity-40" />
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.5 }}
                        className="w-full h-full relative"
                    >
                        {/* Project Image */}
                        <Image
                            src={project.image}
                            alt={project.alt || project.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </motion.div>

                    {/* Floating Action Button - Always visible on mobile, hover effect on desktop */}
                    <div className="absolute top-4 right-4 md:top-6 md:right-6 z-20 overflow-hidden rounded-full">
                        <div className="bg-white text-black p-3 md:p-4 rounded-full transition-transform duration-500 ease-out translate-x-0 translate-y-0 md:translate-x-32 md:-translate-y-32 md:group-hover:translate-x-0 md:group-hover:translate-y-0 hover:text-cyan-600">
                            <FaArrowRight size={16} className="md:w-5 md:h-5" />
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div>
                    <div className="flex items-center gap-2 md:gap-4 mb-2 md:mb-3 flex-wrap">
                        <span className="text-cyan-500 font-semibold tracking-wide text-xs md:text-sm uppercase text-glow-cyan">
                            {project.category}
                        </span>
                        <div className="h-[1px] w-6 md:w-8 bg-white/20 hidden md:block" />
                        <div className="hidden md:flex gap-2">
                            {project.tags.map((tag: string, i: number) => (
                                <span key={i} className="text-xs text-white/40 border border-white/10 px-2 py-1 rounded-full">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                    <h3 className="text-xl md:text-3xl font-bold mb-2 md:mb-3 group-hover:text-cyan-400 transition-colors">
                        {project.title}
                    </h3>
                    <p className="text-white/60 leading-relaxed max-w-md text-sm md:text-base line-clamp-2 md:line-clamp-none">
                        {project.description}
                    </p>
                </div>
            </motion.div>
        </Link>
    )
}
