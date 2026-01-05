"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";

export default function Magnetic({
    children,
    strength = 1, // Higher strength = more movement
}: {
    children: React.ReactNode;
    strength?: number;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const { clientX, clientY } = e;
        const {
            left,
            top,
            width,
            height,
        } = ref.current?.getBoundingClientRect() || { left: 0, top: 0, width: 0, height: 0 };

        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);

        setPosition({ x: x * 0.5 * strength, y: y * 0.5 * strength });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    const { x, y } = position;

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{ x, y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
        >
            {children}
        </motion.div>
    );
}
