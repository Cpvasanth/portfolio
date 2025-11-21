"use client";
import React from "react";
import Image from "next/image";
import vscodeIcon from "../assets/visual-studio-code.png";
import styles from "../styles/titlebar.module.css";
import { useLayout } from "../context/LayoutContext";

export default function TitleBar() {
    const { toggleTerminal, toggleFullscreen, isFullscreen } = useLayout();

    return (
        <div className={styles.titleBar} onDoubleClick={toggleFullscreen}>
            <div className={styles.iconContainer}>
                <Image
                    src={vscodeIcon}
                    alt="VS Code Icon"
                    width={18}
                    height={18}
                    className={styles.icon}
                />
            </div>
            <div className={styles.menuBar}>
                <span>File</span>
                <span>Edit</span>
                <span>Selection</span>
                <span>View</span>
                <span>Go</span>
                <span onClick={toggleTerminal} style={{ cursor: 'pointer' }}>Run</span>
                <span onClick={toggleTerminal} style={{ cursor: 'pointer' }}>Terminal</span>
                <span>Help</span>
            </div>
            <div className={styles.title}>
                Vasanthakumar C - Visual Studio Code
            </div>
            <div className={styles.windowControls}>
                <div className={styles.control}>
                    <svg width="12" height="12" viewBox="0 0 12 12"><path d="M1 6h10" stroke="currentColor" strokeWidth="1" /></svg>
                </div>
                <div className={styles.control} onClick={toggleFullscreen}>
                    {isFullscreen ? (
                        <svg width="12" height="12" viewBox="0 0 12 12"><path d="M3 3h6v6H3z" stroke="currentColor" strokeWidth="1" fill="none" /><path d="M9 3v-1h-1" stroke="currentColor" strokeWidth="1" /></svg> // Restore icon (simplified)
                    ) : (
                        <svg width="12" height="12" viewBox="0 0 12 12"><rect x="2" y="2" width="8" height="8" stroke="currentColor" strokeWidth="1" fill="none" /></svg>
                    )}
                </div>
                <div className={`${styles.control} ${styles.close}`}>
                    <svg width="12" height="12" viewBox="0 0 12 12"><path d="M2 2l8 8M10 2l-8 8" stroke="currentColor" strokeWidth="1" /></svg>
                </div>
            </div>
        </div>
    );
}
