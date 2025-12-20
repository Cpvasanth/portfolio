"use client";
import React from "react";
import Link from "next/link";
import styles from "../../styles/code.module.css";
import EditorLayout from "../../components/Layout/EditorLayout";
import { useSettings } from "../../context/SettingsContext";

export default function ServicesContent() {
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
                    <span className={styles.comment}>// My Services</span>
                </div>
                <div className={styles.line}>
                    <span className={styles.comment}>// Specialized in Full-Stack Web Development, Blockchain, and SEO.</span>
                </div>
                <div className={styles.line}>&nbsp;</div>

                <div className={styles.line}>
                    <span className={styles.keyword}>const</span> <span className={styles.variable}>services</span> = <span className={styles.bracket}>[</span>
                </div>

                {/* Web Development Service */}
                <div className={styles.line}>
                    <span className={styles.indent1}><span className={styles.bracket}>{'{'}</span></span>
                </div>
                <div className={styles.line}>
                    <span className={styles.indent2}><span className={styles.key}>"service"</span>: <span className={styles.string}>"Web Development"</span>,</span>
                </div>
                <div className={styles.line}>
                    <span className={styles.indent2}><span className={styles.key}>"description"</span>: <span className={styles.string}>"High-performance Next.js and React applications."</span>,</span>
                </div>
                <div className={styles.line}>
                    <span className={styles.indent2}><span className={styles.key}>"link"</span>: <span className={styles.bracket}>&lt;</span><Link href="/services/web-development" className={styles.link}>Link href="/services/web-development"</Link><span className={styles.bracket}>/&gt;</span></span>
                </div>
                <div className={styles.line}>
                    <span className={styles.indent1}><span className={styles.bracket}>{'}'}</span>,</span>
                </div>

                {/* Blockchain Service */}
                <div className={styles.line}>
                    <span className={styles.indent1}><span className={styles.bracket}>{'{'}</span></span>
                </div>
                <div className={styles.line}>
                    <span className={styles.indent2}><span className={styles.key}>"service"</span>: <span className={styles.string}>"Blockchain & Smart Contracts"</span>,</span>
                </div>
                <div className={styles.line}>
                    <span className={styles.indent2}><span className={styles.key}>"description"</span>: <span className={styles.string}>"Secure Solidity smart contracts and DApp development."</span>,</span>
                </div>
                <div className={styles.line}>
                    <span className={styles.indent2}><span className={styles.key}>"link"</span>: <span className={styles.bracket}>&lt;</span><Link href="/blockchain" className={styles.link}>Link href="/blockchain"</Link><span className={styles.bracket}>/&gt;</span></span>
                </div>
                <div className={styles.line}>
                    <span className={styles.indent1}><span className={styles.bracket}>{'}'}</span>,</span>
                </div>

                {/* SEO Service */}
                <div className={styles.line}>
                    <span className={styles.indent1}><span className={styles.bracket}>{'{'}</span></span>
                </div>
                <div className={styles.line}>
                    <span className={styles.indent2}><span className={styles.key}>"service"</span>: <span className={styles.string}>"Technical SEO"</span>,</span>
                </div>
                <div className={styles.line}>
                    <span className={styles.indent2}><span className={styles.key}>"description"</span>: <span className={styles.string}>"Optimize your site for Google rankings and visibility."</span>,</span>
                </div>
                <div className={styles.line}>
                    <span className={styles.indent2}><span className={styles.key}>"link"</span>: <span className={styles.bracket}>&lt;</span><Link href="/services/seo" className={styles.link}>Link href="/services/seo"</Link><span className={styles.bracket}>/&gt;</span></span>
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
