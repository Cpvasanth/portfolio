"use client";
import React from "react";
import Link from "next/link";
import styles from "../../styles/code.module.css";
import EditorLayout from "../../components/Layout/EditorLayout";
import { useSettings } from "../../context/SettingsContext";

export default function SeoServiceContent() {
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
                    <span className={styles.comment}># Technical SEO Services</span>
                </div>
                <div className={styles.line}>
                    <span className={styles.variable}>def</span> <span className={styles.function}>optimize_website</span>(<span className={styles.variable}>url</span>):
                </div>
                <div className={styles.line}>
                    <span className={styles.indent1}><span className={styles.string}>"""</span></span>
                </div>
                <div className={styles.line}>
                    <span className={styles.indent1}><span className={styles.string}>Maximize organic traffic and search engine ranking.</span></span>
                </div>
                <div className={styles.line}>
                    <span className={styles.indent1}><span className={styles.string}>"""</span></span>
                </div>
                <div className={styles.line}>
                    <span className={styles.indent1}><span className={styles.variable}>audit</span> = [<span className={styles.string}>"Core Web Vitals"</span>, <span className={styles.string}>"Metadata"</span>, <span className={styles.string}>"Sitemap"</span>]</span>
                </div>
                <div className={styles.line}>
                    <span className={styles.indent1}><span className={styles.variable}>strategy</span> = <span className={styles.bracket}>{'{'}</span></span>
                </div>
                <div className={styles.line}>
                    <span className={styles.indent2}><span className={styles.string}>"On-Page"</span>: <span className={styles.string}>"Content & Keyword Optimization"</span>,</span>
                </div>
                <div className={styles.line}>
                    <span className={styles.indent2}><span className={styles.string}>"Technical"</span>: <span className={styles.string}>"Next.js SEO Best Practices"</span>,</span>
                </div>
                <div className={styles.line}>
                    <span className={styles.indent2}><span className={styles.string}>"Local"</span>: <span className={styles.string}>"Google My Business & Regional Targeting"</span></span>
                </div>
                <div className={styles.line}>
                    <span className={styles.indent1}><span className={styles.bracket}>{'}'}</span></span>
                </div>
                <div className={styles.line}>&nbsp;</div>
                <div className={styles.line}>
                    <span className={styles.indent1}><span className={styles.keyword}>return</span> <span className={styles.string}>"Guaranteed Visibility Boost"</span></span>
                </div>
                <div className={styles.line}>&nbsp;</div>
                <div className={styles.line}>
                    <span className={styles.comment}># Get a free audit</span>
                </div>
                <div className={styles.line}>
                    <span className={styles.comment}># FAQ: Common Questions</span>
                </div>
                <div className={styles.line}>
                    <span className={styles.keyword}>def</span> <span className={styles.function}>faq_why_nextjs_seo</span>():
                </div>
                <div className={styles.line}>
                    <span className={styles.indent1}><span className={styles.keyword}>return</span> <span className={styles.string}>"Next.js offers Server-Side Rendering (SSR) for better indexing."</span></span>
                </div>
                <div className={styles.line}>&nbsp;</div>
                <div className={styles.line}>
                    <span className={styles.keyword}>def</span> <span className={styles.function}>faq_guarantee</span>():
                </div>
                <div className={styles.line}>
                    <span className={styles.indent1}><span className={styles.keyword}>return</span> <span className={styles.string}>"I follow white-hat practices for sustainable long-term growth."</span></span>
                </div>
                <div className={styles.line}>&nbsp;</div>
                <div className={styles.line}>
                    <span className={styles.variable}>call_to_action</span> = <span className={styles.bracket}>&lt;</span><Link href="/hire" className={styles.link}>Link href="/hire"</Link><span className={styles.bracket}>&gt;</span>Start Ranking<span className={styles.bracket}>&lt;/Link&gt;</span>
                </div>
            </div>
        </EditorLayout>
    );
}
