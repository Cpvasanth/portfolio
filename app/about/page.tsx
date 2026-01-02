"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaArrowRight, FaStar, FaQuoteLeft } from "react-icons/fa";
import { SiUpwork, SiNextdotjs, SiReact, SiTailwindcss, SiNodedotjs, SiFigma, SiFramer } from "react-icons/si";
import { useState } from "react";

export default function AboutPage() {
    const testimonials = [
        {
            name: "Sarah Jenkins",
            role: "Founder, Bloom",
            quote: "Vasa transformed our vague idea into a stunning MVP in just 4 weeks.",
            full: "We were struggling to visualize our product. Vasa came in, ran a workshop, and delivered a design system that we still use today. The development phase was smooth, and the final site loads instantly. Highly recommended for any startup founder.",
            color: "bg-[#8b5cf6]" // Purple
        },
        {
            name: "Mark D.",
            role: "CMO, TechFlow",
            quote: "Our conversion rates successfully doubled after the redesign.",
            full: "Most developers just build what you ask for. Vasa asks 'why' and suggests better alternatives. He implemented a headless CMS that saved our marketing team hours every week. The ROI on this project has been incredible.",
            color: "bg-[#3b82f6]" // Blue
        },
        {
            name: "Elena Rodriguez",
            role: "Director of Ops",
            quote: "Technical expertise + Design eye = Dangerous combination.",
            full: "I've worked with many agencies, but Vasa operates on another level. Communication was clear, deadlines were met, and the quality of code was pristine. Our internal dev team was impressed by the handover.",
            color: "bg-[#10b981]" // Emerald
        },
        {
            name: "Alex Chen",
            role: "Product Manager",
            quote: "Fast, reliable, and incredibly creative interactions.",
            full: "We wanted a 'wow' factor for our launch, and Vasa delivered. The scroll animations and micro-interactions make the app feel alive. Despite the heavy visuals, the performance scores remain 90+.",
            color: "bg-[#f59e0b]" // Amber
        }
    ];

    const [activeTestimonial, setActiveTestimonial] = useState<number | null>(null);

    return (
        <section className="relative flex min-h-screen w-full flex-col items-center px-4 py-10 md:px-10 lg:pl-32 overflow-hidden">

            {/* Background Decoration */}
            <div className="absolute top-0 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-gradient-to-b from-[#ff7722]/10 to-transparent blur-3xl" />
            <div className="absolute bottom-0 left-0 -z-10 h-[500px] w-[500px] rounded-full bg-gradient-to-t from-purple-500/10 to-transparent blur-3xl opacity-50" />

            {/* Header GIF */}
            <div className="relative mb-20 w-full max-w-7xl overflow-hidden rounded-[2rem] shadow-sm">
                <Image
                    src="/header.gif"
                    alt="Header Animation"
                    width={1200}
                    height={300} // Aspect ratio guess, w-full handles fit
                    className="h-full w-full object-cover"
                    unoptimized
                    priority
                />
            </div>

            {/* Profile Section */}
            <div className="relative z-10 flex w-full max-w-7xl flex-col gap-16 lg:flex-row lg:items-center lg:justify-between mb-32">

                {/* Left: Profile Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative lg:w-1/2"
                >
                    <div className="relative aspect-square w-full max-w-xl mx-auto overflow-hidden rounded-[3rem] shadow-2xl border-[8px] border-white">
                        <Image
                            src="/profile.gif"
                            alt="Profile Animation"
                            fill
                            className="object-cover"
                            unoptimized
                            priority
                        />
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

                {/* Right: Content */}
                <div className="flex flex-col gap-8 lg:w-1/2">
                    <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                        <h1 className="text-5xl font-bold leading-tight tracking-tighter text-black sm:text-6xl md:text-7xl">
                            More than just <br />
                            <span className="text-zinc-400">pixels & code.</span>
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                        className="text-lg font-medium leading-relaxed text-zinc-600 md:text-xl space-y-6"
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
                        className="flex flex-wrap gap-4 pt-4"
                    >
                        <SocialButton href="https://www.upwork.com/" icon={<SiUpwork size={24} />} label="Upwork" bg="bg-[#14a800]" text="text-white" />
                        <SocialButton href="https://www.linkedin.com/" icon={<FaLinkedin size={24} />} label="LinkedIn" bg="bg-[#0a66c2]" text="text-white" />
                        <SocialButton href="https://github.com/" icon={<FaGithub size={24} />} label="GitHub" bg="bg-[#24292e]" text="text-white" />
                    </motion.div>
                </div>
            </div>

            {/* Section: Impact Stats */}
            <div className="mb-32 w-full max-w-7xl">
                <div className="grid gap-8 md:grid-cols-3">
                    <StatCard number="100%" label="Job Success Score" sub="Consistent 5-star ratings on Upwork" delay={0.1} />
                    <StatCard number="$500k+" label="Client Revenue" sub="Generated through high-converting designs" delay={0.2} />
                    <StatCard number="50+" label="Projects Delivered" sub="From MVPs to full-scale platforms" delay={0.3} />
                </div>
            </div>

            {/* Section: Testimonials (Horizontal Hover Accordion) */}
            <div className="mb-32 w-full max-w-7xl">
                <div className="mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Client Voices</h2>
                </div>
                <div
                    className="flex flex-col md:flex-row items-center gap-4 min-h-[180px]"
                    onMouseLeave={() => setActiveTestimonial(null)}
                >
                    {testimonials.map((t, index) => (
                        <TestimonialCard
                            key={index}
                            {...t}
                            isActive={activeTestimonial === index}
                            isAnyActive={activeTestimonial !== null}
                            onEnter={() => setActiveTestimonial(index)}
                        />
                    ))}
                </div>
            </div>

            {/* Section: The Toolkit (Tech Stack) */}
            <div className="w-full max-w-7xl">
                <div className="mb-12 flex items-center justify-between">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">The Toolkit</h2>
                    <div className="h-[1px] flex-1 bg-zinc-200 ml-8 hidden md:block" />
                </div>

                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
                    <TechItem icon={<SiNextdotjs size={40} />} name="Next.js" />
                    <TechItem icon={<SiReact size={40} className="text-[#61dafb]" />} name="React" />
                    <TechItem icon={<SiTailwindcss size={40} className="text-[#38bdf8]" />} name="Tailwind" />
                    <TechItem icon={<SiFramer size={40} className="text-black" />} name="Motion" />
                    <TechItem icon={<SiNodedotjs size={40} className="text-[#339933]" />} name="Node.js" />
                    <TechItem icon={<SiFigma size={40} className="text-[#F24E1E]" />} name="Figma" />
                </div>
            </div>

        </section>
    );
}

function SocialButton({ href, icon, label, bg, text }: { href: string; icon: React.ReactNode; label: string; bg: string; text: string }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`group flex items-center gap-3 rounded-full px-8 py-4 font-bold transition-transform hover:scale-105 active:scale-95 ${bg} ${text}`}
        >
            {icon}
            <span>{label}</span>
            <FaArrowRight className="text-sm opacity-0 transition-opacity group-hover:opacity-100" />
        </a>
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

function TestimonialCard({ name, role, quote, full, color, isActive, isAnyActive, onEnter }: { name: string; role: string; quote: string; full: string; color: string; isActive: boolean; isAnyActive: boolean; onEnter: () => void }) {
    return (
        <motion.div
            layout
            onMouseEnter={onEnter}
            className={`relative overflow-hidden rounded-3xl cursor-default flex flex-col p-6
            ${color}
            ${isActive
                    ? `shadow-2xl md:flex-[4] min-h-[180px] h-auto`
                    : `hover:shadow-xl md:flex-1 h-[180px]`
                }
            ${!isAnyActive ? 'md:flex-1' : ''}`}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            {/* Background Profile (Visible when inactive) */}
            <motion.div
                animate={{ opacity: isActive ? 0 : 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="absolute inset-0 flex flex-col items-center justify-center p-4"
            >
                <div className="h-16 w-16 rounded-full flex items-center justify-center text-lg font-bold text-white bg-white/20 shadow-lg backdrop-blur-sm">
                    {name[0]}
                </div>
            </motion.div>

            {/* Content (Visible when active) */}
            <motion.div
                animate={{ opacity: isActive ? 1 : 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: isActive ? 0.1 : 0 }}
                className="flex flex-col gap-2 relative z-10"
            >
                <div className="shrink-0 text-white/90">
                    <FaQuoteLeft size={20} />
                </div>

                <div className="flex flex-col gap-2">
                    <p className="text-lg font-bold leading-tight text-white line-clamp-2 md:line-clamp-none">
                        "{quote}"
                    </p>
                    <div className="overflow-hidden">
                        <p className="text-white/80 text-sm leading-relaxed hidden md:block">{full}</p>
                    </div>
                </div>

                <div className="flex items-center gap-3 pt-3 border-t border-white/20 shrink-0">
                    <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center font-bold text-white text-sm">
                        {name[0]}
                    </div>
                    <div>
                        <h4 className="font-bold text-white text-sm leading-none">{name}</h4>
                        <span className="text-[10px] text-white/80 leading-none">{role}</span>
                    </div>
                    <div className="ml-auto flex gap-1 text-yellow-400">
                        <FaStar size={10} /><FaStar size={10} /><FaStar size={10} /><FaStar size={10} /><FaStar size={10} />
                    </div>
                </div>
            </motion.div>
        </motion.div>
    )
}

function TechItem({ icon, name }: { icon: React.ReactNode; name: string }) {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center justify-center gap-4 rounded-2xl bg-white py-8 shadow-sm transition-shadow hover:shadow-md border border-zinc-100"
        >
            {icon}
            <span className="font-bold text-zinc-700">{name}</span>
        </motion.div>
    )
}
