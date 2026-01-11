"use client";

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const projects = [
    {
        id: 1,
        title: "Solea Audit Academy",
        category: "Web Development",
        url: "https://www.solea.academy/",
        color: "bg-gradient-to-br from-blue-400/40 to-cyan-300/40 border-blue-200/50",
        colSpan: "md:col-span-2",
    },
    {
        id: 2,
        title: "Rentopia",
        category: "Web App",
        url: "https://rentopia.synt-x.com/",
        color: "bg-gradient-to-br from-purple-500/40 to-fuchsia-400/40 border-purple-200/50",
        colSpan: "md:col-span-1",
    },
    {
        id: 3,
        title: "Vasam Store",
        category: "E-commerce",
        url: "https://fashion.synt-x.com/",
        color: "bg-gradient-to-br from-pink-500/40 to-rose-400/40 border-pink-200/50",
        colSpan: "md:col-span-1",
    },
    {
        id: 4,
        title: "Synt-x",
        category: "SEO & Web Development",
        url: "https://synt-x.com/",
        color: "bg-gradient-to-br from-zinc-500/40 to-slate-400/40 border-zinc-200/50",
        colSpan: "md:col-span-2",
    },
];

export default function FeaturedWork() {
    return (
        <section className="w-full px-4 py-16 md:py-20 md:px-10 lg:pl-32 pb-mobile-nav">
            <div className="mb-8 md:mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter">
                    Featured Web Development<br />& SEO Projects
                </h2>
                <Link
                    href="/works"
                    className="hidden items-center gap-2 border-b border-black pb-1 text-sm font-semibold hover:opacity-70 md:flex"
                >
                    View all projects <FaArrowRight />
                </Link>
            </div>

            <div className="grid grid-cols-1 gap-6 md:gap-6 md:grid-cols-3">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className={`${project.colSpan}`}
                    >
                        <Link
                            href={project.url}
                            target="_blank"
                            className={`group relative block h-64 md:h-80 overflow-hidden rounded-2xl ${project.color} backdrop-blur-3xl border shadow-xl w-full transition-all hover:scale-[1.02] hover:shadow-2xl active:scale-[0.98]`}
                        >
                            <div className="absolute bottom-0 left-0 p-6 md:p-8">
                                <span className="mb-2 block text-xs font-bold uppercase tracking-widest opacity-60">
                                    {project.category}
                                </span>
                                <h3 className="text-xl md:text-2xl font-bold group-hover:underline">
                                    {project.title}
                                </h3>
                            </div>
                            {/* Placeholder for image - using color for now */}
                            <div className="absolute right-4 top-4 opacity-0 transition-opacity group-hover:opacity-100">
                                <div className="rounded-full bg-white p-3 shadow-sm">
                                    <FaArrowRight size={16} />
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>

            <div className="mt-8 md:mt-12 flex justify-center md:hidden">
                <Link
                    href="/works"
                    className="flex items-center gap-2 border-b border-black pb-1 text-sm font-semibold hover:opacity-70"
                >
                    View all projects <FaArrowRight />
                </Link>
            </div>
        </section>
    );
}
