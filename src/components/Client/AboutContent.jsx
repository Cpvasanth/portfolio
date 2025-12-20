"use client";
import React from "react";
import styles from "../../styles/code.module.css";
import EditorLayout from "../../components/Layout/EditorLayout";
import { useSettings } from "../../context/SettingsContext";

export default function AboutContent() {
    const { fontSize, wordWrap } = useSettings();

    return (
        <EditorLayout>
            <div
                className={styles.codeContainer}
                style={{
                    fontSize: `${fontSize}px`,
                    whiteSpace: wordWrap === 'on' ? 'pre-wrap' : 'pre',
                    wordBreak: wordWrap === 'on' ? 'break-word' : 'normal'
                }}
            >
                <div className={styles.line}>
                    <span className={styles.tag}>&lt;!DOCTYPE html&gt;</span>
                </div>
                <div className={styles.line}>
                    <span className={styles.tag}>&lt;html <span className={styles.attrName}>lang</span>=<span className={styles.string}>"en"</span>&gt;</span>
                </div>
                <div className={styles.line}>
                    <span className={styles.indent1}>&lt;<span className={styles.tag}>body</span>&gt;</span>
                </div>
                <div className={styles.line}>
                    <span className={styles.indent2}>&lt;<span className={styles.tag}>h1</span>&gt;</span>About Me<span className={styles.tag}>&lt;/h1&gt;</span>
                </div>
                <div className={styles.line}>
                    <span className={styles.indent2}>&lt;<span className={styles.tag}>p</span>&gt;</span>
                </div>
                <div className={styles.line}>
                    <span className={styles.indent3}>
                        <span className={styles.text}>
                            I am a passionate Freelance Software & Blockchain Developer with strong expertise in building scalable web applications and decentralized solutions.
                        </span>
                    </span>
                </div>
                <div className={styles.line}>
                    <span className={styles.indent3}>
                        <span className={styles.text}>
                            Specializing in Next.js, React, Solidity, and Technical SEO, I help businesses and startups globally (USA, India, Europe) turn complex ideas into high-performance software.
                        </span>
                    </span>
                </div>
                <div className={styles.line}>
                    <span className={styles.indent2}>&lt;/<span className={styles.tag}>p</span>&gt;</span>
                </div>
                <div className={styles.line}>
                    <span className={styles.indent1}>&lt;/<span className={styles.tag}>body</span>&gt;</span>
                </div>
                <div className={styles.line}>
                    <span className={styles.tag}>&lt;/html&gt;</span>
                </div>
            </div>
        </EditorLayout>
    );
}
