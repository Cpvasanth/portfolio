"use client";

import { motion } from "framer-motion";

interface UpcomingTool {
    name: string;
    description: string;
    icon: React.ReactNode;
}

export default function UpcomingTools({ tools }: { tools: UpcomingTool[] }) {
    return (
        <div className="grid gap-6 md:grid-cols-3">
            {tools.map((tool, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex flex-col items-center rounded-3xl border border-dashed border-zinc-800 bg-zinc-900/30 p-6 text-center opacity-70 transition-opacity hover:opacity-100"
                >
                    <div className="mb-4 text-zinc-600 grayscale">
                        {tool.icon}
                    </div>
                    <h3 className="mb-2 font-bold text-zinc-400">{tool.name}</h3>
                    <p className="text-xs text-zinc-500">{tool.description}</p>
                    <span className="mt-4 rounded-full bg-zinc-800 px-3 py-1 text-[10px] uppercase tracking-wider text-zinc-500">
                        Coming Soon
                    </span>
                </motion.div>
            ))}
        </div>
    );
}
