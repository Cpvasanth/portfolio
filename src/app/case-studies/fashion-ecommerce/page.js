"use client";
import React from "react";
import Link from "next/link";
import styles from "../../../styles/code.module.css";
import EditorLayout from "../../../components/Layout/EditorLayout";
import { useSettings } from "../../../context/SettingsContext";

export default function FashionCaseStudy() {
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
                    <span className={styles.comment}>// Case Study: Fashion E-commerce</span>
                </div>
                <div className={styles.line}>
                    <span className={styles.comment}>// A high-performance headless commerce solution.</span>
                </div>
                <div className={styles.line}>&nbsp;</div>

                <div className={styles.line}>
                    <span className={styles.keyword}>const</span> <span className={styles.variable}>challenge</span> = <span className={styles.bracket}>{'{'}</span>
                </div>
                <div className={styles.line}>
                    <span className={styles.indent1}><span className={styles.key}>"problem"</span>: <span className={styles.string}>"Slow page loads and low conversion rates on legacy platform."</span>,</span>
                </div>
                <div className={styles.line}>
                    <span className={styles.indent1}><span className={styles.key}>"goal"</span>: <span className={styles.string}>"Achieve sub-second load times and improve checkout flow."</span></span>
                </div>
                <div className={styles.line}>
                    <span className={styles.bracket}>{'}'}</span>;
                </div>
                <div className={styles.line}>&nbsp;</div>

                <div className={styles.line}>
                    <span className={styles.keyword}>const</span> <span className={styles.variable}>solution</span> = <span className={styles.bracket}>[</span>
                </div>
                <div className={styles.line}>
                    <span className={styles.indent1}><span className={styles.string}>"Migrated entire frontend to Next.js 14 (App Router)."</span>,</span>
                </div>
                <div className={styles.line}>
                    <span className={styles.indent1}><span className={styles.string}>"Implemented Stripe Payment Intents for secure 1-click checkout."</span>,</span>
                </div>
                <div className={styles.line}>
                    <span className={styles.indent1}><span className={styles.string}>"Used Firebase for real-time inventory management."</span></span>
                </div>
                <div className={styles.line}>
                    <span className={styles.bracket}>]</span>;
                </div>
                <div className={styles.line}>&nbsp;</div>

                <div className={styles.line}>
                    <span className={styles.keyword}>const</span> <span className={styles.variable}>results</span> = <span className={styles.bracket}>{'{'}</span>
                </div>
                <div className={styles.line}>
                    <span className={styles.indent1}><span className={styles.key}>"performance"</span>: <span className={styles.string}>"Lighthouse Score: 98/100"</span>,</span>
                </div>
                <div className={styles.line}>
                    <span className={styles.indent1}><span className={styles.key}>"conversion"</span>: <span className={styles.string}>"Increased by 40% post-launch"</span>,</span>
                </div>
                <div className={styles.line}>
                    <span className={styles.indent1}><span className={styles.key}>"seo"</span>: <span className={styles.string}>"Ranked #1 for niche fashion keywords"</span></span>
                </div>
                <div className={styles.line}>
                    <span className={styles.bracket}>{'}'}</span>;
                </div>

                <div className={styles.line}>&nbsp;</div>
                <div className={styles.line}>
                    <span className={styles.comment}>// Want similar results?</span>
                </div>
                <div className={styles.line}>
                    <span className={styles.variable}>call_to_action</span> = <span className={styles.bracket}>&lt;</span><Link href="/hire" className={styles.link}>Link href="/hire"</Link><span className={styles.bracket}>&gt;</span>Hire Me<span className={styles.bracket}>&lt;/Link&gt;</span>;
                </div>
            </div>
        </EditorLayout>
    );
}
