import React from "react";
import Link from "next/link";
import styles from "../../../styles/code.module.css";
import EditorLayout from "../../../components/Layout/EditorLayout";

export const metadata = {
    title: "Freelance Software Developer Europe | GDPR Compliant",
    description: "Expert Freelance Developer for European clients. GDPR-aware, high quality standards, and convenient timezone overlap. Hire for React & Blockchain.",
    keywords: ["Freelance Developer Europe", "GDPR Compliant Developer", "Remote Developer UK", "Germany", "Next.js Europe"],
};

export default function Europe() {
    return (
        <EditorLayout>
            <div className={styles.codeContainer}>
                <div className={styles.line}>
                    <span className={styles.comment}>// Target: European Union & UK</span>
                </div>
                <div className={styles.line}>
                    <span className={styles.keyword}>interface</span> <span className={styles.className}>EuropeanStandard</span> <span className={styles.bracket}>{'{'}</span>
                </div>

                <div className={styles.line}>
                    <span className={styles.indent1}><span className={styles.property}>gdprCompliant</span>: <span className={styles.keyword}>boolean</span>;</span>
                </div>
                <div className={styles.line}>
                    <span className={styles.indent1}><span className={styles.property}>qualityFocus</span>: <span className={styles.string}>"High"</span> | <span className={styles.string}>"Premium"</span>;</span>
                </div>
                <div className={styles.line}>
                    <span className={styles.indent1}><span className={styles.property}>location</span>: <span className={styles.string}>"Remote (EU Timezone)"</span>;</span>
                </div>
                <div className={styles.line}>
                    <span className={styles.bracket}>{'}'}</span>
                </div>

                <div className={styles.line}>&nbsp;</div>

                <div className={styles.line}>
                    <span className={styles.keyword}>const</span> <span className={styles.variable}>myService</span>: <span className={styles.className}>EuropeanStandard</span> = <span className={styles.bracket}>{'{'}</span>
                </div>
                <div className={styles.line}>
                    <span className={styles.indent1}><span className={styles.property}>gdprCompliant</span>: <span className={styles.keyword}>true</span>,</span>
                </div>
                <div className={styles.line}>
                    <span className={styles.indent1}><span className={styles.property}>qualityFocus</span>: <span className={styles.string}>"Premium"</span>,</span>
                </div>
                <div className={styles.line}>
                    <span className={styles.indent1}><span className={styles.property}>location</span>: <span className={styles.string}>"Remote (EU Timezone)"</span>,</span>
                </div>
                <div className={styles.line}>
                    <span className={styles.bracket}>{'}'}</span>;
                </div>

                <div className={styles.line}>&nbsp;</div>
                <div className={styles.line}>
                    <span className={styles.indent1}><span className={styles.keyword}>return</span> <span className={styles.bracket}>&lt;</span><Link href="/hire" className={styles.link}>Hire Now</Link><span className={styles.bracket}>/&gt;</span></span>
                </div>
            </div>
        </EditorLayout>
    );
}
