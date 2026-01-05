"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaArrowRight, FaStar, FaQuoteLeft } from "react-icons/fa";
import { SiUpwork, SiNextdotjs, SiReact, SiTailwindcss, SiNodedotjs, SiFigma, SiFramer } from "react-icons/si";
import { useState, useEffect } from "react";

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



    return (
        <section className="relative flex min-h-screen w-full flex-col items-center px-4 py-10 md:px-10 lg:pl-32 overflow-hidden">

            {/* Background Decoration */}
            <div className="absolute top-0 right-0 -z-0 h-[500px] w-[500px] rounded-full bg-gradient-to-b from-[#ff7722]/10 to-transparent blur-3xl" />
            <div className="absolute bottom-0 left-0 -z-0 h-[500px] w-[500px] rounded-full bg-gradient-to-t from-purple-500/10 to-transparent blur-3xl opacity-50" />

            {/* Header Video (converted from GIF for 80-90% size reduction) */}
            <div className="relative mb-20 w-full max-w-7xl overflow-hidden rounded-[2rem] shadow-sm">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    className="h-full w-full object-cover"
                    aria-label="Vasa - Creative Developer Header Animation"
                >
                    <source src="/header.mp4" type="video/mp4" />
                    {/* Fallback to GIF if MP4 not available */}
                    <Image
                        src="/header.gif"
                        alt="Vasa - Creative Developer Header Animation"
                        width={1200}
                        height={300}
                        className="h-full w-full object-cover"
                        unoptimized
                    />
                </video>
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

                {/* Right: Content */}
                <div className="flex flex-col gap-8 lg:w-1/2">
                    <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                        <h1 className="text-5xl font-bold leading-tight tracking-tighter text-black sm:text-6xl md:text-7xl">
                            Freelance Web Developer<br />
                            <span className="text-zinc-400">& Digital Marketing Expert</span>
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
                        <SocialButton href="https://upwork.com/freelancers/cpvasanthk" icon={<SiUpwork size={24} />} label="Upwork" bg="bg-[#14a800]" text="text-white" />
                        <SocialButton href="https://www.linkedin.com/in/cpvasanth/" icon={<FaLinkedin size={24} />} label="LinkedIn" bg="bg-[#0a66c2]" text="text-white" />
                        <SocialButton href="https://github.com/Cpvasanth" icon={<FaGithub size={24} />} label="GitHub" bg="bg-[#24292e]" text="text-white" />
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

            {/* Section: Client Voices (Circular Spinner) */}
            <div className="mb-32 w-full max-w-7xl">
                <div className="mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Client Voices</h2>
                </div>
                <ClientVoices testimonials={testimonials} />
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

function ClientVoices({ testimonials }: { testimonials: any[] }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    // Auto-rotate every 5 seconds
    useEffect(() => {
        if (isPaused) return;
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [testimonials.length, isPaused]);

    const activeTestimonial = testimonials[activeIndex];

    // Circular calculations
    // We want the active item to be at 0 degrees (Right side).
    // Angle per item
    const angleStep = 360 / testimonials.length;
    // Rotation of the container to align active item to 0
    const containerRotation = -activeIndex * angleStep;

    return (
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24 relative">
            {/* Left: Circular Spinner */}
            {/* Mobile: Just a row of avatars. Desktop: Circle. */}
            <div className="relative w-full lg:w-[400px] flex justify-center lg:block">

                {/* Desktop Circle */}
                <div className="relative hidden lg:block w-[320px] h-[320px] mx-auto">
                    {/* Dashed Track */}
                    <div className="absolute inset-0 rounded-full border border-dashed border-zinc-300" />

                    {/* Rotating Container */}
                    <motion.div
                        className="absolute inset-0 w-full h-full"
                        animate={{ rotate: containerRotation }}
                        transition={{ type: "spring", stiffness: 50, damping: 20 }}
                    >
                        {testimonials.map((t, i) => {
                            const angle = i * angleStep;

                            return (
                                <motion.button
                                    key={i}
                                    onClick={() => { setActiveIndex(i); setIsPaused(true); }}
                                    className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full flex items-center justify-center text-white font-bold shadow-lg transition-all
                                        ${t.color}
                                        ${activeIndex === i
                                            ? 'scale-125 ring-4 ring-offset-2 ring-zinc-900 z-20'
                                            : 'scale-100 opacity-100 ring-2 ring-white z-10'  // Default to scale-100/opacity-100 as requested
                                        }
                                    `}
                                    style={{
                                        // 160px radius (half of 320px)
                                        transform: `rotate(${angle}deg) translate(160px) rotate(${-angle}deg)`
                                    }}
                                >
                                    {/* Counter-rotate content to keep it upright */}
                                    <motion.div
                                        animate={{ rotate: -containerRotation }}
                                        transition={{ type: "spring", stiffness: 50, damping: 20 }}
                                        className="flex items-center justify-center w-full h-full"
                                    >
                                        {t.name[0]}
                                    </motion.div>
                                </motion.button>
                            );
                        })}
                    </motion.div>

                    {/* Center Decoration/Status */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none z-0">
                        <span className="text-zinc-900 font-black text-6xl opacity-10 select-none">
                            0{activeIndex + 1}
                        </span>
                    </div>

                </div>

                {/* Mobile: Horizontal list */}
                <div className="flex lg:hidden gap-4 overflow-x-auto pb-4 w-full justify-center">
                    {testimonials.map((t, i) => (
                        <button
                            key={i}
                            onClick={() => { setActiveIndex(i); setIsPaused(true); }}
                            className={`w-14 h-14 shrink-0 rounded-full flex items-center justify-center text-white font-bold shadow-md transition-all ${t.color} ${activeIndex === i ? 'ring-4 ring-offset-2 ring-black scale-110' : 'opacity-70'}`}
                        >
                            {t.name[0]}
                        </button>
                    ))}
                </div>
            </div>

            {/* Right: Testimonial Content */}
            <div className="flex-1 w-full bg-zinc-50 rounded-3xl p-8 md:p-12 shadow-sm border border-zinc-100 min-h-[300px] flex items-center relative overflow-hidden">
                {/* Decorative Quote Background */}
                {/* <div className="absolute top-0 left-0 text-zinc-200/50 -z-0 pointer-events-none">
                    <FaQuoteLeft size={100} className="transform -translate-x-4 -translate-y-4" />
                </div> */}

                {testimonials.map((t, i) => (
                    i === activeIndex && (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="relative z-10 w-full"
                        >
                            <div className="mb-8">
                                <h3 className="text-2xl md:text-3xl font-bold leading-tight text-zinc-800 mb-6 font-serif">
                                    "{t.quote}"
                                </h3>
                                <p className="text-lg text-zinc-600 leading-relaxed">
                                    {t.full}
                                </p>
                            </div>

                            <div className="flex items-center gap-4 pt-6 border-t border-zinc-200">
                                <div className={`h-12 w-12 rounded-full flex items-center justify-center text-white font-bold shadow-md shrink-0 ${t.color}`}>
                                    {t.name[0]}
                                </div>
                                <div>
                                    <h4 className="font-bold text-black text-lg leading-none">{t.name}</h4>
                                    <p className="text-sm text-zinc-500 mt-1">{t.role}</p>
                                </div>
                                <div className="ml-auto flex gap-1 text-yellow-500">
                                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                                </div>
                            </div>
                        </motion.div>
                    )
                ))}
            </div>
        </div>
    )
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
