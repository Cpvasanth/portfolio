"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaShieldAlt, FaEnvelope, FaArrowRight } from "react-icons/fa";

// Helper to render icons based on string or passing the component directly
// Since we are passing data from server, we might need a mapping if we passed generic data
// But here we can pass the icon as ReactNode if defining data in parent works, 
// OR we can define the data inside the component if it's static. 
// However, the best practice for Server Components is to pass data.
// But passing React Components (icons) from Server to Client component is tricky (need to be serializable or imported in Client).
// So I will define the mapping or just import icons in the client component and pass keys.

// Actually, for simplicity and since the specific icons are imported in the original file, 
// I will structure the component to accept the data including the icon node, 
// BUT 'React.ReactNode' is not serializable if passed from a Server Component across the boundary strictly speaking if strictly using JSON serialization usually, 
// but Next.js Server Components CAN pass React Elements (JSX) as props to Client Components.
// So passing { icon: <FaShieldAlt /> } from layout/page is fine.

interface Tool {
    name: string;
    description: string;
    icon: React.ReactNode;
    href: string;
    color: string;
    bg: string;
    badge: string;
}

export default function ToolsList({ tools }: { tools: Tool[] }) {
    return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {tools.map((tool, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                >
                    <Link href={tool.href} className={`group relative block h-full overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/50 p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${tool.color}`}>
                        {/* Hover Background Glow */}
                        <div className={`absolute inset-0 opacity-0 transition-opacity duration-300 ${tool.bg}`} />

                        <div className="relative z-10 flex flex-col items-start gap-4">
                            <div className="mb-2 rounded-2xl bg-zinc-950 p-4 ring-1 ring-white/10 transition-transform group-hover:scale-110 group-hover:rotate-3">
                                {tool.icon}
                            </div>

                            <div>
                                <h3 className="mb-2 text-xl font-bold text-zinc-100 group-hover:text-white">
                                    {tool.name}
                                </h3>
                                <p className="mb-6 text-sm leading-relaxed text-zinc-400 group-hover:text-zinc-300">
                                    {tool.description}
                                </p>
                            </div>

                            <div className="mt-auto flex w-full items-center justify-between border-t border-white/5 pt-4">
                                <span className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-zinc-400 group-hover:bg-white/10 group-hover:text-white">
                                    {tool.badge}
                                </span>
                                <span className="flex items-center gap-2 text-sm font-bold text-zinc-500 transition-colors group-hover:text-white">
                                    Try Now <FaArrowRight className="-rotate-45 transition-transform group-hover:rotate-0" />
                                </span>
                            </div>
                        </div>
                    </Link>
                </motion.div>
            ))}
        </div>
    );
}
