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
        // BUT if we are navigating TO blog, we should set theme to something else or handle it
        if (pathname?.startsWith("/blog")) {
            // Just let the localized logic handle it, don't force 'light'
            // or maybe force 'dark'?
        } else if (!pathname?.startsWith("/works")) {
            setScrollTheme("light");
        }
    }, [pathname, setScrollTheme]);

    // Default to #fbf9ef to match globals.css
    // When footer is reached (isDark) OR we are on any Works section, background becomes black.
    // Blog page uses dark theme

    // Theme Logic
    let bgColor = "bg-[#fbf9ef]";

    // Blog pages use light theme
    if (pathname?.startsWith("/blog")) {
        bgColor = "bg-[#fbf9ef]";
    } else if (scrollTheme === "works-seo") {
        bgColor = "bg-[#202124]"; // Google Dark Mode Grey
    } else if (scrollTheme === "works-marketing") {
        bgColor = "bg-[#0a0a0a]"; // Social Media Dark
    } else if (scrollTheme === "footer-dark" || scrollTheme?.startsWith("works-")) {
        bgColor = "bg-black"; // Web Design / Default Dark
    }

    // Check if it's a blog post page
    const isBlogPost = pathname?.startsWith("/blog/") && pathname.split("/").length > 2;

    return (
        <div
            className={`flex flex-col ${isBlogPost ? "w-full" : "md:grid md:grid-cols-[10%_80%_10%]"} min-h-screen transition-colors duration-500 ${bgColor}`}
        >
            {children}
        </div>
    );
}
