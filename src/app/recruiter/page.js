"use client";
import React from 'react';
import styles from '../../styles/recruiter-page.module.css';

export default function RecruiterPage() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>Vasanthakumar C</h1>
                <h2>Software Developer</h2>
                <div className={styles.contactInfo}>
                    <a href="mailto:cpvasanth@proton.me">cpvasanth@proton.me</a> |
                    <a href="https://github.com/Cpvasanth" target="_blank" rel="noopener noreferrer"> GitHub</a> |
                    <a href="https://linkedin.com/in/cpvasanth" target="_blank" rel="noopener noreferrer"> LinkedIn</a>
                </div>
            </header>

            <section className={styles.section}>
                <h3>Summary</h3>
                <p>
                    Passionate Software Developer with experience in building decentralized applications (dApps) and smart contracts.
                    Skilled in React, Next.js, and modern web technologies. Dedicated to creating seamless user experiences and secure, scalable solutions.
                </p>
            </section>

            <section className={styles.section}>
                <h3>Skills</h3>
                <ul className={styles.skillsList}>
                    <li><strong>Languages:</strong> JavaScript, TypeScript, Solidity, Python, C++</li>
                    <li><strong>Frontend:</strong> React, Next.js, Tailwind CSS, HTML5, CSS3</li>
                    <li><strong>Backend:</strong> Node.js, Express, Firebase, Supabase</li>
                    <li><strong>Blockchain:</strong> Ethereum, Hardhat, Ethers.js, IPFS</li>
                    <li><strong>Tools:</strong> Git, VS Code, Docker</li>
                </ul>
            </section>

            <section className={styles.section}>
                <h3>Projects</h3>
                <div className={styles.project}>
                    <h4>Rentopia</h4>
                    <p>A modern house renting app connecting renters with verified landlords.</p>
                    <p><em>Tech Stack: Next.js, React, TailwindCSS, TypeScript</em></p>
                </div>
                <div className={styles.project}>
                    <h4>Cloud Chain</h4>
                    <p>Hybrid cloud storage platform blending centralized and decentralized storage.</p>
                    <p><em>Tech Stack: React 19, Next.js 15, Appwrite, IPFS/Filecoin</em></p>
                </div>
                <div className={styles.project}>
                    <h4>Kurukshetra Store</h4>
                    <p>E-commerce platform for buying goods.</p>
                    <p><em>Tech Stack: Next.js, TypeScript, Firebase</em></p>
                </div>
            </section>

            <section className={styles.section}>
                <h3>Education</h3>
                <div className={styles.education}>
                    <h4>Bachelor of Engineering</h4>
                    <p>Computer Science and Engineering</p>
                </div>
            </section>
        </div>
    );
}
