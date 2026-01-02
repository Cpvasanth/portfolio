"use client";

import { useScrollTheme } from "./ScrollThemeContext";
import { ReactNode, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollThemeWrapper({ children }: { children: ReactNode }) {
    const { scrollTheme, setScrollTheme } = useScrollTheme();
    const pathname = usePathname();

    // Global Theme Reset on Navigation
    useEffect(() => {
        // If we leave the works page, reset to default light theme
        if (!pathname?.startsWith("/works")) {
            setScrollTheme("light");
        }
    }, [pathname, setScrollTheme]);

    // Default to #fbf9ef to match globals.css
    // When footer is reached (isDark) OR we are on any Works section, background becomes black.

    // Theme Logic
    let bgColor = "bg-[#fbf9ef]";

    if (scrollTheme === "works-seo") {
        bgColor = "bg-[#202124]"; // Google Dark Mode Grey
    } else if (scrollTheme === "works-marketing") {
        bgColor = "bg-[#0a0a0a]"; // Social Media Dark
    } else if (scrollTheme === "footer-dark" || scrollTheme?.startsWith("works-")) {
        bgColor = "bg-black"; // Web Design / Default Dark
    }

    return (
        <div
            className={`flex flex-col md:grid md:grid-cols-[10%_80%_10%] min-h-screen transition-colors duration-500 ${bgColor}`}
        >
            {children}
        </div>
    );
}
