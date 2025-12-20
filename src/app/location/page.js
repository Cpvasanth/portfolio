"use client";
import React from "react";
import Link from "next/link";
import styles from "../../styles/code.module.css";
import EditorLayout from "../../components/Layout/EditorLayout";
import { useSettings } from "../../context/SettingsContext";

export default function LocationHub() {
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
                    <span className={styles.comment}>// Global Presence & Remote Availability</span>
                </div>
                <div className={styles.line}>
                    <span className={styles.comment}>// I work with clients worldwide, adjusting to your timezone.</span>
                </div>
                <div className={styles.line}>&nbsp;</div>

                <div className={styles.line}>
                    <span className={styles.keyword}>const</span> <span className={styles.variable}>locations</span> = <span className={styles.bracket}>[</span>
                </div>

                <div className={styles.line}>
                    <span className={styles.indent1}><span className={styles.bracket}>{'{'}</span></span>
                </div>
                <div className={styles.line}>
                    <span className={styles.indent2}><span className={styles.key}>"region"</span>: <span className={styles.string}>"United States"</span>,</span>
                </div>
                <div className={styles.line}>
                    <span className={styles.indent2}><span className={styles.key}>"availability"</span>: <span className={styles.string}>"EST / PST Overlap"</span>,</span>
                </div>
                <div className={styles.line}>
                    <span className={styles.indent2}><span className={styles.key}>"link"</span>: <span className={styles.bracket}>&lt;</span><Link href="/location/usa" className={styles.link}>Link href="/location/usa"</Link><span className={styles.bracket}>/&gt;</span></span>
                </div>
                <div className={styles.line}>
                    <span className={styles.indent1}><span className={styles.bracket}>{'}'}</span>,</span>
                </div>

                <div className={styles.line}>
                    <span className={styles.indent1}><span className={styles.bracket}>{'{'}</span></span>
                </div>
                <div className={styles.line}>
                    <span className={styles.indent2}><span className={styles.key}>"region"</span>: <span className={styles.string}>"Europe"</span>,</span>
                </div>
                <div className={styles.line}>
                    <span className={styles.indent2}><span className={styles.key}>"availability"</span>: <span className={styles.string}>"Full Workday Overlap"</span>,</span>
                </div>
                <div className={styles.line}>
                    <span className={styles.indent2}><span className={styles.key}>"link"</span>: <span className={styles.bracket}>&lt;</span><Link href="/location/europe" className={styles.link}>Link href="/location/europe"</Link><span className={styles.bracket}>/&gt;</span></span>
                </div>
                <div className={styles.line}>
                    <span className={styles.indent1}><span className={styles.bracket}>{'}'}</span>,</span>
                </div>

                <div className={styles.line}>
                    <span className={styles.indent1}><span className={styles.bracket}>{'{'}</span></span>
                </div>
                <div className={styles.line}>
                    <span className={styles.indent2}><span className={styles.key}>"region"</span>: <span className={styles.string}>"India"</span>,</span>
                </div>
                <div className={styles.line}>
                    <span className={styles.indent2}><span className={styles.key}>"availability"</span>: <span className={styles.string}>"On Site / Remote"</span>,</span>
                </div>
                <div className={styles.line}>
                    <span className={styles.indent2}><span className={styles.key}>"link"</span>: <span className={styles.bracket}>&lt;</span><Link href="/location/india" className={styles.link}>Link href="/location/india"</Link><span className={styles.bracket}>/&gt;</span></span>
                </div>
                <div className={styles.line}>
                    <span className={styles.indent1}><span className={styles.bracket}>{'}'}</span></span>
                </div>

                <div className={styles.line}>
                    <span className={styles.bracket}>]</span>;
                </div>
            </div>
        </EditorLayout>
    );
}
