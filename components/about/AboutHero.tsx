"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaArrowRight } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";

export default function AboutHero() {
    return (
        <div className="relative z-10 flex w-full max-w-7xl flex-col-reverse gap-12 lg:gap-16 lg:flex-row lg:items-center lg:justify-between mb-24 md:mb-32 pb-mobile-nav">

            {/* Left: Profile Image (shows second on mobile due to flex-col-reverse) */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative lg:w-1/2"
            >
                <div className="relative aspect-square w-full max-w-md mx-auto lg:max-w-xl overflow-hidden rounded-[2rem] lg:rounded-[3rem] shadow-2xl border-[6px] lg:border-[8px] border-white">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="metadata"
                        className="absolute inset-0 h-full w-full object-cover"
                        aria-label="Vasa - Freelance Web Developer Profile"
                    >
                        <source src="/profile.mp4" type="video/mp4" />
                        {/* Fallback to GIF if MP4 not available */}
                        <Image
                            src="/profile.gif"
                            alt="Vasa - Freelance Web Developer Profile"
                            fill
                            className="object-cover"
                            unoptimized
                        />
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                </div>

                <motion.div
                    transition={{ delay: 0.5 }}
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 hidden md:flex items-center gap-3 rounded-full bg-white px-6 py-4 shadow-xl z-20 whitespace-nowrap"
                >
                    <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse" />
                    <span className="font-bold text-black">Available for work</span>
                </motion.div>
            </motion.div>

            {/* Right: Content (shows first on mobile) */}
            <div className="flex flex-col gap-6 lg:gap-8 lg:w-1/2">
                <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-bold leading-tight tracking-tighter text-black">
                        Freelance Web Developer<br />
                        <span className="text-zinc-400">& SEO Expert</span>
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                    className="text-base sm:text-lg md:text-xl font-medium leading-relaxed text-zinc-600 space-y-4 lg:space-y-6"
                >
                    <p>
                        I'm Vasa, a Creative Developer and Digital Marketer based in Chennai. I don't just build websites; I build digital experiences that command attention.
                    </p>
                    <p>
                        My approach combines technical precision with artistic flair. Whether it's a high-performance web app or a scroll-stopping landing page, I focus on the details that turn users into fans.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
                    className="flex flex-wrap gap-3 pt-2 lg:pt-4"
                >
                    <SocialButton href="https://upwork.com/freelancers/cpvasanthk" icon={<SiUpwork size={20} />} label="Upwork" bg="bg-[#14a800]" text="text-white" />
                    <SocialButton href="https://www.linkedin.com/in/cpvasanth/" icon={<FaLinkedin size={20} />} label="LinkedIn" bg="bg-[#0a66c2]" text="text-white" />
                    <SocialButton href="https://github.com/Cpvasanth" icon={<FaGithub size={20} />} label="GitHub" bg="bg-[#24292e]" text="text-white" />
                </motion.div>
            </div>
        </div>
    );
}

function SocialButton({ href, icon, label, bg, text }: { href: string; icon: React.ReactNode; label: string; bg: string; text: string }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`group flex items-center gap-2 md:gap-3 rounded-full px-5 py-3 md:px-8 md:py-4 font-bold text-sm md:text-base transition-transform hover:scale-105 active:scale-95 ${bg} ${text}`}
        >
            {icon}
            <span>{label}</span>
            <FaArrowRight className="text-xs md:text-sm opacity-0 transition-opacity group-hover:opacity-100" />
        </a>
    );
}
