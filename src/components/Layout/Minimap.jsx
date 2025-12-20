"use client";
import React, { useEffect, useState, useRef } from 'react';
import styles from '../../styles/minimap.module.css';

export default function Minimap({ children, scrollRef }) {
    const [viewportStyle, setViewportStyle] = useState({ top: 0, height: 0 });
    const minimapContentRef = useRef(null);

    useEffect(() => {
        const mainEl = scrollRef.current;
        if (!mainEl) return;

        const update = () => {
            if (!mainEl) return;
            const scrollHeight = mainEl.scrollHeight;
            const clientHeight = mainEl.clientHeight;
            const scrollTop = mainEl.scrollTop;

            const ratio = clientHeight / scrollHeight;
            const top = (scrollTop / scrollHeight) * 100;
            const height = ratio * 100;

            setViewportStyle({ top, height });
        };

        mainEl.addEventListener('scroll', update);
        const observer = new ResizeObserver(update);
        observer.observe(mainEl);

        // Dynamic content might change height
        const contentObserver = new MutationObserver(update);
        contentObserver.observe(mainEl, { childList: true, subtree: true, characterData: true });

        update();

        return () => {
            mainEl.removeEventListener('scroll', update);
            observer.disconnect();
            contentObserver.disconnect();
        };
    }, [scrollRef]);

    return (
        <div className={styles.minimapWrapper}>
            <div
                ref={minimapContentRef}
                className={styles.minimapContent}
                style={{
                    // We sync the minimap internal scroll by moving it up as the main content scrolls down
                    transform: `scale(0.12) translateY(-${viewportStyle.top * 8.33}%)`,
                    transformOrigin: 'top left'
                }}
            >
                {children}
            </div>
            <div
                className={styles.viewport}
                style={{
                    top: `${viewportStyle.top}%`,
                    height: `${viewportStyle.height}%`
                }}
            />
        </div>
    );
}
