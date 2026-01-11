"use client";

import { motion } from "framer-motion";

export default function ImpactStats() {
    return (
        <div className="mb-32 w-full max-w-7xl">
            <div className="grid gap-8 md:grid-cols-3">
                <StatCard number="100%" label="Job Success Score" sub="Consistent 5-star ratings on Upwork" delay={0.1} />
                <StatCard number="$500k+" label="Client Revenue" sub="Generated through high-converting designs" delay={0.2} />
                <StatCard number="50+" label="Projects Delivered" sub="From MVPs to full-scale platforms" delay={0.3} />
            </div>
        </div>
    );
}

function StatCard({ number, label, sub, delay }: { number: string; label: string; sub: string; delay: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay }}
            className="flex flex-col items-center justify-center rounded-3xl bg-zinc-50 p-10 text-center transition-colors hover:bg-white hover:shadow-xl"
        >
            <span className="text-5xl font-extrabold tracking-tight text-[#ff7722] md:text-6xl">{number}</span>
            <span className="mt-4 text-xl font-bold text-black">{label}</span>
            <span className="mt-2 text-sm text-zinc-500">{sub}</span>
        </motion.div>
    )
}
