"use client";
import React from "react";
import Link from "next/link";
import styles from "../../styles/code.module.css";
import EditorLayout from "../../components/Layout/EditorLayout";
import { useSettings } from "../../context/SettingsContext";

export default function WebDevServiceContent() {
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
                    <span className={styles.comment}>// Web Development Services</span>
                </div>
                <div className={styles.line}>
                    <span className={styles.keyword}>class</span> <span className={styles.className}>NextJSDeveloper</span> <span className={styles.keyword}>extends</span> <span className={styles.className}>Developer</span> <span className={styles.bracket}>{'{'}</span>
                </div>
                <div className={styles.line}>
                    <span className={styles.indent1}><span className={styles.comment}>/**</span></span>
                </div>
                <div className={styles.line}>
                    <span className={styles.indent1}><span className={styles.comment}> * Build fast, scalable, and SEO-friendly web apps.</span></span>
                </div>
                <div className={styles.line}>
                    <span className={styles.indent1}><span className={styles.comment}> */</span></span>
                </div>
                <div className={styles.line}>
                    <span className={styles.indent1}><span className={styles.function}>constructor</span>() <span className={styles.bracket}>{'{'}</span></span>
                </div>
                <div className={styles.line}>
                    <span className={styles.indent2}><span className={styles.variable}>this</span>.<span className={styles.property}>stack</span> = <span className={styles.bracket}>[</span><span className={styles.string}>"Next.js"</span>, <span className={styles.string}>"React"</span>, <span className={styles.string}>"Node.js"</span>, <span className={styles.string}>"Tailwind CSS"</span><span className={styles.bracket}>]</span>;</span>
                </div>
                <div className={styles.line}>
                    <span className={styles.indent1}><span className={styles.bracket}>{'}'}</span></span>
                </div>
                <div className={styles.line}>&nbsp;</div>
                <div className={styles.line}>
                    <span className={styles.indent1}><span className={styles.function}>deliverables</span>() <span className={styles.bracket}>{'{'}</span></span>
                </div>
                <div className={styles.line}>
                    <span className={styles.indent2}><span className={styles.keyword}>return</span> <span className={styles.bracket}>[</span></span>
                </div>
                <div className={styles.line}>
                    <span className={styles.indent3}><span className={styles.string}>"Custom Website Development"</span>,</span>
                </div>
                <div className={styles.line}>
                    <span className={styles.indent3}><span className={styles.string}>"E-commerce Platforms"</span>,</span>
                </div>
                <div className={styles.line}>
                    <span className={styles.indent3}><span className={styles.string}>"Performance Optimization"</span>,</span>
                </div>
                <div className={styles.line}>
                    <span className={styles.indent3}><span className={styles.string}>"API Integration"</span></span>
                </div>
                <div className={styles.line}>
                    <span className={styles.indent2}><span className={styles.bracket}>]</span>;</span>
                </div>
                <div className={styles.line}>
                    <span className={styles.indent1}><span className={styles.bracket}>{'}'}</span></span>
                </div>
                <div className={styles.line}>
                    <span className={styles.bracket}>{'}'}</span>
                </div>
                <div className={styles.line}>&nbsp;</div>
                <div className={styles.line}>
                    <span className={styles.comment}>// Ready to start?</span>
                </div>
                <div className={styles.line}>
                    <span className={styles.keyword}>const</span> <span className={styles.variable}>faqs</span> = <span className={styles.bracket}>[</span>
                </div>
                <div className={styles.line}>
                    <span className={styles.indent1}><span className={styles.bracket}>{'{'}</span></span>
                </div>
                <div className={styles.line}>
                    <span className={styles.indent2}><span className={styles.key}>"q"</span>: <span className={styles.string}>"Do you work with startups?"</span>,</span>
                </div>
                <div className={styles.line}>
                    <span className={styles.indent2}><span className={styles.key}>"a"</span>: <span className={styles.string}>"Yes! I specialize in MVP development for early-stage startups."</span></span>
                </div>
                <div className={styles.line}>
                    <span className={styles.indent1}><span className={styles.bracket}>{'}'}</span>,</span>
                </div>
                <div className={styles.line}>
                    <span className={styles.indent1}><span className={styles.bracket}>{'{'}</span></span>
                </div>
                <div className={styles.line}>
                    <span className={styles.indent2}><span className={styles.key}>"q"</span>: <span className={styles.string}>"What is your hourly rate?"</span>,</span>
                </div>
                <div className={styles.line}>
                    <span className={styles.indent2}><span className={styles.key}>"a"</span>: <span className={styles.string}>"Depends on complexity. Contact me for a project-based quote."</span></span>
                </div>
                <div className={styles.line}>
                    <span className={styles.indent1}><span className={styles.bracket}>{'}'}</span></span>
                </div>
                <div className={styles.line}>
                    <span className={styles.bracket}>]</span>;
                </div>
                <div className={styles.line}>&nbsp;</div>
                <div className={styles.line}>
                    <span className={styles.keyword}>const</span> <span className={styles.variable}>action</span> = <span className={styles.bracket}>&lt;</span><Link href="/hire" className={styles.link}>Link href="/hire"</Link><span className={styles.bracket}>&gt;</span>Hire Me<span className={styles.bracket}>&lt;/Link&gt;</span>;
                </div>
            </div>
        </EditorLayout>
    );
}
