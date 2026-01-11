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
            <div className="mb-16 md:mb-24 pt-12 md:pt-20 px-4 md:px-10 lg:pl-32">
                <h2 className="max-w-4xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter">
                    Freelance Services: <br />
                    <span className="text-zinc-400">Web Development, SEO & Marketing</span>
                </h2>
            </div>

            <div className="flex flex-col items-center pb-20 md:pb-[50vh]">
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

    const scale = useTransform(progress, range, [1, targetScale]);

    return (
        <div
            ref={container}
            className="md:sticky md:top-[15vh] flex md:h-[80vh] w-full items-center justify-center my-6 md:my-0"
        >
            <motion.div
                style={{
                    scale: typeof window !== 'undefined' && window.innerWidth < 768 ? 1 : scale,
                }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true, margin: "-50px" }}
                className={`relative flex h-auto min-h-[400px] md:h-full w-full max-w-7xl rounded-[2.5rem] p-8 shadow-2xl md:p-14 ${color} ${textColor} origin-top overflow-hidden border-4 border-white/20`}
            >
                {/* Left: Text Content */}
                <div className="flex flex-col justify-center flex-1 z-10 py-8 md:py-0">
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
