"use client";
import React from "react";
import styles from "../styles/explore.module.css";
import Link from "next/link";
import FileIcon from "./FileIcon";
import { usePathname } from "next/navigation";
import { useLayout } from "../context/LayoutContext";

export default function Explore() {
    const [toggle, setToggle] = React.useState(true);
    const [blockchainToggle, setBlockchainToggle] = React.useState(true);
    const pathname = usePathname();
    const { openTab } = useLayout();

    const handleFileClick = (name, path, icon) => {
        openTab({ name, path, icon });
    };

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
                        <Link href="/" className={styles.file} onClick={() => handleFileClick('home.jsx', '/', 'home.jsx')}>
                            <div className={styles.fileIconWrapper}>
                                <FileIcon name="home.jsx" size={18} />
                            </div>
                            <span className={`${styles.fileName} ${pathname === '/' ? styles.activeFile : ''}`}>home.jsx</span>
                        </Link>
                        <Link href="/about" className={styles.file} onClick={() => handleFileClick('about.html', '/about', 'about.html')}>
                            <div className={styles.fileIconWrapper}>
                                <FileIcon name="about.html" size={18} />
                            </div>
                            <span className={`${styles.fileName} ${pathname === '/about' ? styles.activeFile : ''}`}>about.html</span>
                        </Link>
                        <Link href="/contact" className={styles.file} onClick={() => handleFileClick('contact.css', '/contact', 'contact.css')}>
                            <div className={styles.fileIconWrapper}>
                                <FileIcon name="contact.css" size={18} />
                            </div>
                            <span className={`${styles.fileName} ${pathname === '/contact' ? styles.activeFile : ''}`}>contact.css</span>
                        </Link>
                        <Link href="/project" className={styles.file} onClick={() => handleFileClick('project.js', '/project', 'project.js')}>
                            <div className={styles.fileIconWrapper}>
                                <FileIcon name="project.js" size={18} />
                            </div>
                            <span className={`${styles.fileName} ${pathname === '/project' ? styles.activeFile : ''}`}>project.js</span>
                        </Link>
                        <Link href="/github" className={styles.file} onClick={() => handleFileClick('github.json', '/github', 'github.json')}>
                            <div className={styles.fileIconWrapper}>
                                <FileIcon name="github.json" size={18} />
                            </div>
                            <span className={`${styles.fileName} ${pathname === '/github' ? styles.activeFile : ''}`}>github.json</span>
                        </Link>
                        <Link href="/readme" className={styles.file} onClick={() => handleFileClick('readme.md', '/readme', 'readme.md')}>
                            <div className={styles.fileIconWrapper}>
                                <FileIcon name="readme.md" size={18} />
                            </div>
                            <span className={`${styles.fileName} ${pathname === '/readme' ? styles.activeFile : ''}`}>README.md</span>
                        </Link>
                        <Link href="/recruiter" className={styles.file} onClick={() => handleFileClick('resume.pdf', '/recruiter', 'resume.pdf')}>
                            <div className={styles.fileIconWrapper}>
                                <FileIcon name="resume.pdf" size={18} />
                            </div>
                            <span className={`${styles.fileName} ${pathname === '/recruiter' ? styles.activeFile : ''}`}>resume.pdf</span>
                        </Link>
                        <Link href="/hire" className={styles.file} onClick={() => handleFileClick('hire.txt', '/hire', 'hire.txt')}>
                            <div className={styles.fileIconWrapper}>
                                <FileIcon name="hire.txt" size={18} />
                            </div>
                            <span className={`${styles.fileName} ${pathname === '/hire' ? styles.activeFile : ''}`}>hire.txt</span>
                        </Link>
                    </div>
                )}
            </div>
            <div className={styles.section}>
                <div
                    className={styles.sectionHeader}
                    onClick={() => setBlockchainToggle(!blockchainToggle)}
                >
                    <span className={`${styles.arrow} ${blockchainToggle ? styles.open : ''}`}>›</span>
                    <span className={styles.sectionTitle}>BLOCKCHAIN</span>
                </div>
                {blockchainToggle && (
                    <div className={styles.fileTree}>
                        <Link href="/blockchain" className={styles.file} onClick={() => handleFileClick('overview.sol', '/blockchain', 'overview.sol')}>
                            <div className={styles.fileIconWrapper}>
                                <FileIcon name="overview.sol" size={18} />
                            </div>
                            <span className={`${styles.fileName} ${pathname === '/blockchain' ? styles.activeFile : ''}`}>overview.sol</span>
                        </Link>
                        <Link href="/blockchain/projects" className={styles.file} onClick={() => handleFileClick('projects.sol', '/blockchain/projects', 'projects.sol')}>
                            <div className={styles.fileIconWrapper}>
                                <FileIcon name="projects.sol" size={18} />
                            </div>
                            <span className={`${styles.fileName} ${pathname === '/blockchain/projects' ? styles.activeFile : ''}`}>projects.sol</span>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}