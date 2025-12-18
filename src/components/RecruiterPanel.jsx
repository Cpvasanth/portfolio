"use client";
import React from 'react';
import { useSettings } from '../context/SettingsContext';
import styles from '../styles/recruiter.module.css';

const RecruiterPanel = () => {
    const { theme } = useSettings();

    if (theme !== 'recruiter') return null;

    return (
        <div className={styles.panel}>
            <div className={styles.header}>
                <h2>Candidate Summary: Vasanthakumar C</h2>
                <span className={styles.badge}>Open to Work</span>
            </div>

            <div className={styles.content}>
                <div className={styles.section}>
                    <h3>Key Skills</h3>
                    <div className={styles.tags}>
                        <span>React/Next.js</span>
                        <span>Blockchain/Web3</span>
                        <span>TypeScript</span>
                        <span>Node.js</span>
                        <span>TailwindCSS</span>
                    </div>
                </div>

                <div className={styles.section}>
                    <h3>Experience</h3>
                    <p>Software Developer with a strong background in building decentralized applications and modern web interfaces.</p>
                </div>

                <div className={styles.actions}>
                    <a href="mailto:cpvasanth@proton.me" className={styles.primaryBtn}>Hire Me</a>
                    <a href="/Vasanthakumar_Resume.pdf" download="Vasanthakumar_Resume.pdf" className={styles.secondaryBtn}>Download Resume</a>
                </div>
            </div>
        </div>
    );
};

export default RecruiterPanel;
