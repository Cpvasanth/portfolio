"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import CustomCursor from "@/components/CustomCursor";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--background)] text-[var(--foreground)] p-4 overflow-hidden relative cursor-default">
      <CustomCursor />
      <div className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none select-none overflow-hidden flex items-center justify-center">
        <h1 className="text-[40vw] font-bold leading-none font-sans">404</h1>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 text-center space-y-8 max-w-lg mx-auto"
      >
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Lost in Space?
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
            The page you are looking for doesn't exist or has been moved to another universe.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="group relative inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-[var(--background)] bg-[var(--foreground)] rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95"
          >
            <span className="relative z-10">Back to Home</span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </Link>
          
          <button
             onClick={() => window.history.back()}
             className="px-8 py-3.5 text-base font-semibold text-[var(--foreground)] hover:bg-neutral-100 dark:hover:bg-neutral-900 rounded-full transition-colors"
          >
            Go Back
          </button>
        </div>
      </motion.div>
    </div>
  );
}
