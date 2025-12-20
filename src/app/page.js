"use client";
import React from "react";
import Link from "next/link";
import styles from "../styles/code.module.css";
import EditorLayout from "../components/Layout/EditorLayout";
import { useSettings } from "../context/SettingsContext";

export default function Home() {
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
                    <span className={styles.keyword}>import</span> <span className={styles.variable}>React</span> <span className={styles.keyword}>from</span> <span className={styles.string}>'react'</span>;
                </div>
                <div className={styles.line}>
                    <span className={styles.keyword}>import</span> <span className={styles.variable}>Link</span> <span className={styles.keyword}>from</span> <span className={styles.string}>'next/link'</span>;
                </div>
                <div className={styles.line}>&nbsp;</div>
                <div className={styles.line}>
                    <span className={styles.keyword}>export default function</span> <span className={styles.function}>Home</span>() <span className={styles.punctuation}>{'{'}</span>
                </div>
                <div className={styles.line}>
                    <span className={styles.indent1}><span className={styles.keyword}>return</span> (</span>
                </div>
                <div className={styles.line}>
                    <span className={styles.indent2}>&lt;<span className={styles.tag}>div</span> <span className={styles.attrName}>className</span>=<span className={styles.string}>"home"</span>&gt;</span>
                </div>
                <div className={styles.line}>
                    <span className={styles.indent3}>&lt;<span className={styles.tag}>h1</span>&gt;</span>
                    <span className={styles.className}>Vasanthakumar C</span>
                    <span className={styles.tag}>&lt;/h1&gt;</span>
                </div>
                <div className={styles.line}>
                    <span className={styles.indent3}>&lt;<span className={styles.tag}>h2</span>&gt;</span>
                    <span className={styles.className}>Software Engineer</span>
                    <span className={styles.tag}>&lt;/h2&gt;</span>
                </div>
                <div className={styles.line}>
                    <span className={styles.indent3}>&lt;<span className={styles.tag}>div</span> <span className={styles.attrName}>className</span>=<span className={styles.string}>"buttons"</span>&gt;</span>
                </div>
                <div className={styles.line}>
                    <span className={styles.indent3}>&nbsp;&nbsp;&lt;<span className={styles.tag}>Link</span> <span className={styles.attrName}>href</span>=<span className={styles.string}>"/project"</span>&gt;</span>
                    <Link href="/project" className={styles.button}>View Work</Link>
                    <span className={styles.tag}>&lt;/Link&gt;</span>
                </div>
                <div className={styles.line}>
                    <span className={styles.indent3}>&nbsp;&nbsp;&lt;<span className={styles.tag}>Link</span> <span className={styles.attrName}>href</span>=<span className={styles.string}>"/contact"</span>&gt;</span>
                    <Link href="/contact" className={styles.button}>Contact Me</Link>
                    <span className={styles.tag}>&lt;/Link&gt;</span>
                </div>
                <div className={styles.line}>
                    <span className={styles.indent3}>&nbsp;&nbsp;&lt;<span className={styles.tag}>Link</span> <span className={styles.attrName}>href</span>=<span className={styles.string}>"/hire"</span>&gt;</span>
                    <Link href="/hire" className={styles.button}>Hire Me</Link>
                    <span className={styles.tag}>&lt;/Link&gt;</span>
                </div>
                <div className={styles.line}>
                    <span className={styles.indent3}>&lt;/<span className={styles.tag}>div</span>&gt;</span>
                </div>
                <div className={styles.line}>
                    <span className={styles.indent2}>&lt;/<span className={styles.tag}>div</span>&gt;</span>
                </div>
                <div className={styles.line}>
                    <span className={styles.indent1}>);</span>
                </div>
                <div className={styles.line}>
                    <span className={styles.punctuation}>{'}'}</span>
                </div>
            </div>
        </EditorLayout>
    );
}
