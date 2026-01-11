"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function ContactHero() {
    return (
        <div className="flex flex-col gap-8 lg:w-1/2">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2"
            >
                <span className="rounded-full bg-[#ff7722] px-3 py-1 text-xs font-bold text-white">
                    #1
                </span>
                <span className="text-sm font-medium text-zinc-500">
                    Top Rising Freelancer
                </span>
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tighter"
            >
                Hire an Affordable<br />
                Freelance Developer
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="max-w-md text-lg text-zinc-500"
            >
                We’re experts in mobile app design only for entrepreneurs. Over the years, we've crafted an offer tailored from concept to pixel-perfect mockups.
            </motion.p>

            {/* Social Icons */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex gap-4 text-zinc-600"
            >
                <a href="https://github.com/cpvasanth" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-[#ff7722] transition-colors">
                    <FaGithub />
                </a>
                <a href="https://linkedin.com/in/cpvasanth" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-[#ff7722] transition-colors">
                    <FaLinkedin />
                </a>
                <a href="https://x.com/cpvasanth" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-[#ff7722] transition-colors">
                    <FaXTwitter />
                </a>

            </motion.div>
        </div>
    );
}
