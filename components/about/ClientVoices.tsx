"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

interface Testimonial {
    name: string;
    role: string;
    quote: string;
    full: string;
    color: string;
}

export default function ClientVoices({ testimonials }: { testimonials: Testimonial[] }) {
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
                <div className="flex lg:hidden gap-4 overflow-x-auto p-6 w-full justify-center px-4">
                    {testimonials.map((t, i) => (
                        <button
                            key={i}
                            onClick={() => { setActiveIndex(i); setIsPaused(true); }}
                            className={`w-12 h-12 shrink-0 rounded-full flex items-center justify-center text-white font-bold shadow-md transition-all ${t.color} ${activeIndex === i ? 'ring-4 ring-offset-2 ring-black scale-110' : 'opacity-80'}`}
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
