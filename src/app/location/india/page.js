import React from "react";
import Link from "next/link";
import styles from "../../../styles/code.module.css";
import EditorLayout from "../../../components/Layout/EditorLayout";

export const metadata = {
    title: "Freelance Web Developer India | Blockchain Expert",
    description: "Top-rated Freelance Software Developer in India. Specializing in Next.js, React, and Smart Contracts. High-quality code at competitive rates.",
    keywords: ["Freelance Web Developer India", "Blockchain Developer India", "Next.js Developer India", "Bangalore", "Remote Developer"],
};

export default function India() {
    return (
        <EditorLayout>
            <div className={styles.codeContainer}>
                <div className={styles.line}>
                    <span className={styles.comment}># Target: Indian Market & Outsourcing</span>
                </div>
                <div className={styles.line}>
                    <span className={styles.keyword}>def</span> <span className={styles.function}>indian_developer_profile</span>():
                </div>

                <div className={styles.line}>
                    <span className={styles.indent1}><span className={styles.variable}>location</span> = <span className={styles.string}>"India (Tech Hub)"</span></span>
                </div>
                <div className={styles.line}>
                    <span className={styles.indent1}><span className={styles.variable}>advantages</span> = [</span>
                </div>
                <div className={styles.line}>
                    <span className={styles.indent2}><span className={styles.string}>"Cost-Effective"</span>,</span>
                </div>
                <div className={styles.line}>
                    <span className={styles.indent2}><span className={styles.string}>"High Technical Proficiency"</span>,</span>
                </div>
                <div className={styles.line}>
                    <span className={styles.indent2}><span className={styles.string}>"24/7 Availability possibility"</span></span>
                </div>
                <div className={styles.line}>
                    <span className={styles.indent1}>]</span>
                </div>

                <div className={styles.line}>&nbsp;</div>
                <div className={styles.line}>
                    <span className={styles.indent1}><span className={styles.comment}># Whether you are a local startup or an enterprise,</span></span>
                </div>
                <div className={styles.line}>
                    <span className={styles.indent1}><span className={styles.comment}># I bring world-class development standards to your project.</span></span>
                </div>

                <div className={styles.line}>&nbsp;</div>
                <div className={styles.line}>
                    <span className={styles.indent1}><span className={styles.keyword}>return</span> <span className={styles.bracket}>&lt;</span><Link href="/hire" className={styles.link}>Contact for Rates</Link><span className={styles.bracket}>/&gt;</span></span>
                </div>
            </div>
        </EditorLayout>
    );
}
