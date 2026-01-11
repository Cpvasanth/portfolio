"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import CustomCursor from "@/components/CustomCursor";

export default function NotFoundContent() {
    return (
        <div className="relative flex h-screen w-full flex-col items-center justify-center bg-black text-white overflow-hidden cursor-none">
            <CustomCursor />

            {/* Background Glitch/Noise Effect (Optional/Subtle) */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150"></div>

            <div className="z-10 flex flex-col items-center text-center">
                {/* 404 Glitch Text */}
                <motion.h1
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="relative text-[12rem] font-black leading-none tracking-tighter md:text-[16rem]"
                >
                    <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-600">
                        404
                    </span>
                    <motion.span
                        aria-hidden="true"
                        initial={{ opacity: 0, x: 0 }}
                        animate={{ opacity: [0, 0.4, 0], x: [-5, 5, -5] }}
                        transition={{
                            repeat: Infinity,
                            duration: 0.2,
                            repeatType: "mirror",
                            repeatDelay: 3
                        }}
                        className="absolute left-0 top-0 text-red-500 mix-blend-screen opacity-50 blur-[2px]"
                    >
                        404
                    </motion.span>
                    <motion.span
                        aria-hidden="true"
                        initial={{ opacity: 0, x: 0 }}
                        animate={{ opacity: [0, 0.4, 0], x: [5, -5, 5] }}
                        transition={{
                            repeat: Infinity,
                            duration: 0.3,
                            repeatType: "mirror",
                            repeatDelay: 5
                        }}
                        className="absolute left-0 top-0 text-blue-500 mix-blend-screen opacity-50 blur-[2px]"
                    >
                        404
                    </motion.span>
                </motion.h1>

                {/* Message */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="flex flex-col items-center gap-6"
                >
                    <h2 className="text-2xl font-bold md:text-4xl text-zinc-300">
                        Page Not Found
                    </h2>
                    <p className="max-w-md text-zinc-500 md:text-lg">
                        You've ventured into the void. The page you are looking for doesn't exist or has been moved.
                    </p>

                    {/* Back Home Button */}
                    <Link href="/">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group relative flex items-center gap-3 overflow-hidden rounded-full bg-white px-8 py-4 font-bold text-black transition-all hover:bg-zinc-200"
                        >
                            <span className="relative z-10">Go Back Home</span>
                            <div className="absolute inset-0 translate-y-full bg-zinc-300 transition-transform duration-300 group-hover:translate-y-0" />
                        </motion.button>
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}
