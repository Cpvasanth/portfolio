"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";
import { useScrollTheme } from "./ScrollThemeContext";

const services = [
    {
        id: "01",
        title: "Web Design & Development",
        description:
            "I design and build fast, responsive websites that are easy to use and easy to maintain. From clean landing pages to full custom builds, every project is structured for performance, accessibility, and real-world users.",
        testimonial:
            "We saw a 40% increase in engagement within the first month. The site is incredibly fast and easy to manage.",
        client: "Sarah Jenkins, Founder of Bloom",
        color: "bg-[#3d2fa9]",
        textColor: "text-white",
        images: ["bg-purple-300", "bg-purple-400", "bg-purple-500"],
    },
    {
        id: "02",
        title: "Digital Marketing",
        description:
            "I help brands reach the right audience with focused, data-driven digital marketing. This includes strategy, content planning, paid campaigns, and conversion optimization—designed to attract attention.",
        testimonial:
            "Our ROI on paid ads doubled. The strategy was clear, data-driven, and executed perfectly.",
        client: "Mark D., CMO at TechFlow",
        color: "bg-[#ff7722]",
        textColor: "text-white",
        images: ["bg-orange-300", "bg-orange-400", "bg-orange-500"],
    },
    {
        id: "03",
        title: "SEO (Search Engine Optimization)",
        description:
            "I optimize websites so they’re discoverable, understandable, and competitive in search results. That means technical SEO, on-page improvements, content optimization, and performance tuning.",
        testimonial:
            "We finally rank on page 1 for our core keywords. Organic traffic has become our top revenue driver.",
        client: "Elena Rodriguez, Director of Ops",
        color: "bg-[#ff3c34]",
        textColor: "text-white",
        images: ["bg-red-300", "bg-red-400", "bg-red-500"],
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
    testimonial: string;
    client: string;
    color: string;
    textColor: string;
    images: string[];
    progress: MotionValue<number>;
    range: [number, number];
    targetScale: number;
    total: number;
    id: string; // Add id prop definition
}

const Card = ({
    i,
    title,
    description,
    testimonial,
    client,
    color,
    textColor,
    images,
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
                    // Removed top offset to ensure pure stacking "deck" effect where new card completely covers old one
                }}
                className={`relative flex h-full w-full max-w-7xl flex-col justify-between rounded-[2.5rem] p-8 shadow-2xl md:p-14 ${color} ${textColor} origin-top`}
            >
                <div>
                    {/* Header: Title & Number */}
                    <div className="flex items-start justify-between">
                        <h3 className="max-w-2xl text-3xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl">
                            {title}
                        </h3>
                        <span className="font-mono text-xl font-medium tracking-widest opacity-80 md:text-4xl">
                            ({id})
                        </span>
                    </div>

                    {/* Body: Description */}
                    <div className="mt-6 max-w-xl md:mt-8">
                        <p className="text-base font-medium leading-relaxed opacity-90 md:text-xl lg:text-2xl">
                            {description}
                        </p>
                    </div>
                </div>

                {/* Footer Grid: Testimonial & Images */}
                {/* <div className="mt-8 grid gap-8 md:mt-12 md:grid-cols-2 lg:gap-16 items-end">
                    <div className="flex flex-col gap-6">
                        <p className="text-lg font-medium leading-relaxed md:text-xl opacity-90">
                            "{testimonial}"
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="h-10 w-10 rounded-full bg-white/20 backdrop-blur-md md:h-12 md:w-12"></div>
                            <div className="flex flex-col">
                                <span className="text-sm font-bold md:text-base">
                                    {client ? client.split(",")[0] : "Client"}
                                </span>
                                <span className="text-xs opacity-70">
                                    {client ? client.split(",")[1] : ""}
                                </span>
                            </div>
                        </div>
                    </div>

                    //  Image Gallery (Right) - Single Large Card 
                    <div className="hidden h-56 w-full items-center justify-center rounded-3xl bg-white p-4 md:flex md:h-64">
                        <div className={`h-full w-full rounded-2xl ${images[0]} opacity-50`}></div>
                    </div> 
                </div> */}
            </motion.div>
        </div>
    );
};
