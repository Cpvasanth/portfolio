"use client";
import React from "react";
import styles from "../../styles/editorLayout.module.css";

import { useLayout } from "../../context/LayoutContext";
import { useSettings } from "../../context/SettingsContext";
import Minimap from "./Minimap";

export default function EditorLayout({ children, preview }) {
    const { isSplitView } = useLayout();
    const { minimap } = useSettings();
    const contentRef = React.useRef(null);

    // Generate array of line numbers (e.g., 1 to 50)
    const lines = Array.from({ length: 50 }, (_, i) => i + 1);

    const renderEditor = () => (
        <div className={styles.editorContainer}>
            <div className={styles.lineNumbers}>
                {lines.map((line) => (
                    <div key={line} className={styles.lineNumber}>
                        {line}
                    </div>
                ))}
            </div>
            <div className={`${styles.content} fade-in`} ref={contentRef}>
                {children}
            </div>
            {minimap === 'on' && !isSplitView && (
                <Minimap scrollRef={contentRef}>
                    {children}
                </Minimap>
            )}
        </div>
    );

    if (isSplitView && preview) {
        return (
            <div className={styles.splitLayout}>
                <div className={styles.paneLeft}>
                    {renderEditor()}
                </div>
                <div className={styles.paneRight}>
                    {preview}
                </div>
            </div>
        );
    }

    return renderEditor();
}
