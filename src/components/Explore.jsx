"use client";
import React from "react";
import styles from "../styles/explore.module.css";
import Link from "next/link";
import FileIcon from "./FileIcon";
import { usePathname } from "next/navigation";

export default function Explore() {
    const [toggle, setToggle] = React.useState(true);
    const pathname = usePathname();

    return (
        <div className={styles.sidebar}>
            <div className={styles.sidebarTitle}>EXPLORER</div>
            <div className={styles.section}>
                <div
                    className={styles.sectionHeader}
                    onClick={() => setToggle(!toggle)}
                >
                    <span className={`${styles.arrow} ${toggle ? styles.open : ''}`}>›</span>
                    <span className={styles.sectionTitle}>PORTFOLIO</span>
                </div>
                {toggle && (
                    <div className={styles.fileTree}>
                        <Link href="/" className={styles.file}>
                            <div className={styles.fileIconWrapper}>
                                <FileIcon name="home.jsx" size={18} />
                            </div>
                            <span className={`${styles.fileName} ${pathname === '/' ? styles.activeFile : ''}`}>home.jsx</span>
                        </Link>
                        <Link href="/about" className={styles.file}>
                            <div className={styles.fileIconWrapper}>
                                <FileIcon name="about.html" size={18} />
                            </div>
                            <span className={`${styles.fileName} ${pathname === '/about' ? styles.activeFile : ''}`}>about.html</span>
                        </Link>
                        <Link href="/contact" className={styles.file}>
                            <div className={styles.fileIconWrapper}>
                                <FileIcon name="contact.css" size={18} />
                            </div>
                            <span className={`${styles.fileName} ${pathname === '/contact' ? styles.activeFile : ''}`}>contact.css</span>
                        </Link>
                        <Link href="/project" className={styles.file}>
                            <div className={styles.fileIconWrapper}>
                                <FileIcon name="project.js" size={18} />
                            </div>
                            <span className={`${styles.fileName} ${pathname === '/project' ? styles.activeFile : ''}`}>project.js</span>
                        </Link>
                        <Link href="/github" className={styles.file}>
                            <div className={styles.fileIconWrapper}>
                                <FileIcon name="github.json" size={18} />
                            </div>
                            <span className={`${styles.fileName} ${pathname === '/github' ? styles.activeFile : ''}`}>github.json</span>
                        </Link>
                        <Link href="/readme" className={styles.file}>
                            <div className={styles.fileIconWrapper}>
                                <FileIcon name="readme.md" size={18} />
                            </div>
                            <span className={`${styles.fileName} ${pathname === '/readme' ? styles.activeFile : ''}`}>README.md</span>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}