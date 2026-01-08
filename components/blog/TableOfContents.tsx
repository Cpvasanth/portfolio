"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface TOCItem {
    id: string;
    text: string;
    level: number;
    top: number;
}

export default function TableOfContents() {
    const [headings, setHeadings] = useState<TOCItem[]>([]);
    const [activeId, setActiveId] = useState<string>("");

    useEffect(() => {
        const updateHeadings = () => {
            const elements = Array.from(document.querySelectorAll("#blog-content h1, #blog-content h2"));
            const items = elements.map((elem, index) => {
                if (!elem.id) {
                    elem.id = `heading-${index}`;
                }
                return {
                    id: elem.id,
                    text: elem.textContent || "",
                    level: Number(elem.tagName.substring(1)),
                    top: elem.getBoundingClientRect().top + window.scrollY
                };
            });
            setHeadings(items);
            return items; // Return items for initial check
        }

        let items = updateHeadings();

        const handleScroll = () => {
            // Find the heading that is closest to the top of the viewport (with some offset)
            const scrollPosition = window.scrollY + 150; // Offset (top-32 + buffer)

            // Find the last heading that is above the scroll position
            let currentSection = "";
            for (const item of items) {
                if (item.top <= scrollPosition) {
                    currentSection = item.id;
                }
            }

            // If we're at the very top, maybe clear it or set first?
            // If we scroll past all, it keeps the last one active.
            setActiveId(currentSection);
        };

        window.addEventListener("scroll", handleScroll);
        // Initial check
        handleScroll();

        // Re-calculate positions on resize (in case of layout shift)
        const handleResize = () => {
            items = updateHeadings();
            handleScroll();
        }
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    if (headings.length === 0) return null;

    return (
        <nav className="sticky top-32 max-h-[calc(100vh-160px)] overflow-y-auto pr-4 hidden lg:block">
            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-6 border-b border-gray-100 pb-2">
                On this page
            </h4>
            <ul className="space-y-3 text-sm">
                {headings.map((heading) => (
                    <li
                        key={heading.id}
                        className="relative"
                    >
                        {/* Active Indicator Line */}
                        <div className={`absolute left-0 top-0 bottom-0 w-0.5 transition-colors duration-200 rounded-full ${activeId === heading.id ? "bg-indigo-600" : "bg-transparent"
                            }`} />

                        <a
                            href={`#${heading.id}`}
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById(heading.id)?.scrollIntoView({
                                    behavior: "smooth",
                                    block: "start"
                                });
                            }}
                            style={{ paddingLeft: ((heading.level - 2) * 12) + 16 }}
                            className={`block py-1 transition-all duration-200 line-clamp-2 leading-relaxed ${activeId === heading.id
                                ? "text-indigo-600 font-semibold translate-x-1"
                                : "text-gray-500 hover:text-gray-900 hover:translate-x-0.5"
                                }`}
                        >
                            {heading.text}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
