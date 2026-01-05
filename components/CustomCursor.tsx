"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseEnter = () => setIsVisible(true);
        const handleMouseLeave = () => setIsVisible(false);

        // Check if hovering over clickable elements
        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.tagName === "A" ||
                target.tagName === "BUTTON" ||
                target.closest("a") ||
                target.closest("button") ||
                target.getAttribute("role") === "button"
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseenter", handleMouseEnter);
        window.addEventListener("mouseleave", handleMouseLeave);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseenter", handleMouseEnter);
            window.removeEventListener("mouseleave", handleMouseLeave);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, [isVisible]);

    // Hide on mobile/touch devices
    if (typeof navigator !== "undefined" && typeof window !== "undefined") {
        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        if (isTouchDevice) return null;
    }

    return (
        <>
            {/* Main Dot */}
            <motion.div
                className="fixed top-0 left-0 z-[9999] h-2 w-2 rounded-full bg-white pointer-events-none mix-blend-difference"
                animate={{
                    x: position.x - 4,
                    y: position.y - 4,
                    scale: isVisible ? 1 : 0,
                }}
                transition={{ type: "tween", ease: "backOut", duration: 0 }}
            />

            {/* Follower Ring */}
            <motion.div
                className="fixed top-0 left-0 z-[9998] h-8 w-8 rounded-full border border-white pointer-events-none mix-blend-difference"
                animate={{
                    x: position.x - 16,
                    y: position.y - 16,
                    scale: isVisible ? (isHovering ? 1.5 : 1) : 0,
                    opacity: isVisible ? 1 : 0,
                }}
                transition={{
                    type: "spring",
                    stiffness: 150,
                    damping: 15,
                    mass: 0.1,
                }}
            />
        </>
    );
}
