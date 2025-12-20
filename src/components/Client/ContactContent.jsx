"use client";
import React from "react";
import styles from "../../styles/code.module.css";
import EditorLayout from "../../components/Layout/EditorLayout";
import { useSettings } from "../../context/SettingsContext";

export default function ContactContent() {
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
                    <span className={styles.selector}>.socials</span> <span className={styles.punctuation}>{'{'}</span>
                </div>
                <div className={styles.line}>
                    <span className={styles.indent1}><span className={styles.property}>display</span>: <span className={styles.value}>flex</span>;</span>
                </div>
                <div className={styles.line}>
                    <span className={styles.indent1}><span className={styles.property}>flex-direction</span>: <span className={styles.value}>column</span>;</span>
                </div>
                <div className={styles.line}>
                    <span className={styles.indent1}><span className={styles.property}>gap</span>: <span className={styles.number}>20px</span>;</span>
                </div>
                <div className={styles.line}>
                    <span className={styles.punctuation}>{'}'}</span>
                </div>
                <div className={styles.line}>&nbsp;</div>
                <div className={styles.line}>
                    <span className={styles.selector}>.contact-item</span> <span className={styles.punctuation}>{'{'}</span>
                </div>
                <div className={styles.line}>
                    <span className={styles.indent1}><span className={styles.property}>email</span>: <span className={styles.string}><a href="mailto:cpvasanth@proton.me">cpvasanth@proton.me</a></span>;</span>
                </div>
                <div className={styles.line}>
                    <span className={styles.indent1}><span className={styles.property}>github</span>: <span className={styles.string}><a href="https://github.com/Cpvasanth">github.com/Cpvasanth</a></span>;</span>
                </div>
                <div className={styles.line}>
                    <span className={styles.indent1}><span className={styles.property}>linkedin</span>: <span className={styles.string}><a href="https://linkedin.com/in/cpvasanth">linkedin.com/in/cpvasanth</a></span>;</span>
                </div>
                <div className={styles.line}>
                    <span className={styles.punctuation}>{'}'}</span>
                </div>
                <div className={styles.line}>&nbsp;</div>
                <div className={styles.line}>
                    <span className={styles.comment}>/* Reach out to me via email or social media */</span>
                </div>
            </div>
        </EditorLayout>
    );
}
