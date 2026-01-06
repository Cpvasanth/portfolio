"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import { useScrollTheme } from "./ScrollThemeContext";
import Image from "next/image";

const services = [
    {
        id: "01",
        title: "Web Design & Development",
        description:
            "I design and build fast, responsive websites that are easy to use and easy to maintain. From clean landing pages to full custom builds, every project is structured for performance, accessibility, and real-world users.",
        color: "bg-[#3d2fa9]",
        textColor: "text-white",
        image: "/images/services/web.png",
    },
    {
        id: "02",
        title: "Digital Marketing",
        description:
            "I help brands reach the right audience with focused, data-driven digital marketing. This includes strategy, content planning, paid campaigns, and conversion optimization—designed to attract attention.",
        color: "bg-[#ff7722]",
        textColor: "text-white",
        image: "/images/services/marketing.png",
    },
    {
        id: "03",
        title: "SEO (Search Engine Optimization)",
        description:
            "I optimize websites so they're discoverable, understandable, and competitive in search results. That means technical SEO, on-page improvements, content optimization, and performance tuning.",
        color: "bg-[#ff3c34]",
        textColor: "text-white",
        image: "/images/services/seo.png",
    },
];

export default function WhatIDeliver() {
    const { setScrollTheme } = useScrollTheme();
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"],
    });

    return (
        <motion.section
            ref={container}
            className="relative bg-white/0" // Transparent to show global bg
            onViewportEnter={() => setScrollTheme("light")}
        >
            <div className="mb-24 pt-20">
                <h2 className="max-w-4xl text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl">
                    Freelance Services: <br />
                    <span className="text-zinc-400">Web Development, SEO & Marketing</span>
                </h2>
            </div>

            <div className="flex flex-col items-center pb-[50vh]">
                {services.map((service, index) => {
                    const targetScale = 1 - (services.length - index) * 0.05;
                    return (
                        <Card
                            key={index}
                            i={index}
                            {...service}
                            progress={scrollYProgress}
                            range={[index * 0.25, 1]}
                            targetScale={targetScale}
                            total={services.length}
                        />
                    );
                })}
            </div>
        </motion.section>
    );
}

interface CardProps {
    i: number;
    title: string;
    description: string;
    color: string;
    textColor: string;
    image: string;
    progress: MotionValue<number>;
    range: [number, number];
    targetScale: number;
    total: number;
    id: string;
}

const Card = ({
    i,
    title,
    description,
    color,
    textColor,
    image,
    progress,
    range,
    targetScale,
    total,
    id,
}: CardProps) => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "start start"],
    });

    // Scale logic: Scales down as it goes up/gets covered
    // We use the parent's progress to control the scaling of previous cards
    // But a simpler per-card "stacking" effect is often:
    // position: sticky + top: calc(...)
    // scale: driven by the *next* card coming in?
    // Let's rely on the simple scrollYProgress of the PARENT container passed down.
    const scale = useTransform(progress, range, [1, targetScale]);

    // Calculate top position to center comfortably
    // 50vh = center, minus half card height (approx 350px/400px?)
    // Let's use a dynamic calculation or fixed top. 
    // User asked for "tick comfortably in the middle".
    // Let's say top-24 (approx 100px) + spacing, or rigid `top-[20vh]`.
    // If we set all to `top-[20vh]`, they stack perfectly on top.

    return (
        <div
            ref={container}
            className="sticky top-[15vh] flex h-[80vh] w-full items-center justify-center"
        >
            <motion.div
                style={{
                    scale,
                }}
                className={`relative flex h-full w-full max-w-7xl rounded-[2.5rem] p-8 shadow-2xl md:p-14 ${color} ${textColor} origin-top overflow-hidden border-4 border-white/20`}
            >
                {/* Left: Text Content */}
                <div className="flex flex-col justify-center flex-1 z-10">
                    {/* Header: Title & Number */}
                    <div className="flex items-start justify-between">
                        <h3 className="max-w-lg text-3xl font-extrabold leading-tight tracking-tight md:text-4xl lg:text-5xl">
                            {title}
                        </h3>
                        <span className="font-mono text-xl font-medium tracking-widest opacity-80 md:text-3xl md:hidden lg:block">
                            ({id})
                        </span>
                    </div>

                    {/* Body: Description */}
                    <div className="mt-6 max-w-md md:mt-8">
                        <p className="text-base font-medium leading-relaxed opacity-90 md:text-lg lg:text-xl">
                            {description}
                        </p>
                    </div>
                </div>

                {/* Right: Image */}
                <div className="hidden md:flex items-center justify-center flex-1">
                    <div className="relative w-full h-full max-w-md rounded-2xl border-4 border-white overflow-hidden shadow-lg">
                        <Image
                            src={image}
                            alt={title}
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </motion.div>
        </div>
    );
};
