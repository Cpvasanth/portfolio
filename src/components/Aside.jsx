
"use client";
import React from "react";
import files from "../assets/files-svgrepo-com.svg";
import github from "../assets/github-svgrepo-com.svg";
import code from "../assets/code-svgrepo-com.svg";
import pen from "../assets/pen-svgrepo-com.svg";
import email from "../assets/email-1-svgrepo-com.svg";
import setting from "../assets/setting-5-svgrepo-com.svg";
import user from "../assets/user-circle-svgrepo-com.svg";
import briefcase from "../assets/briefcase-svgrepo-com.svg";
import extensions from "../assets/extensions-svgrepo-com.svg";
import styles from '../styles/aside.module.css';
import Link from 'next/link';
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useLayout } from "../context/LayoutContext";

export default function Aside() {
    const pathname = usePathname();
    const { openTab } = useLayout();

    const handleFileClick = (name, path, icon) => {
        openTab({ name, path, icon });
    };

    const isActive = (path) => {
        // Handle exact match for root
        if (path === "/" && pathname === "/") return true;
        // Handle other paths (simple check, can be improved if needed)
        if (path !== "/" && pathname.startsWith(path)) return true;
        return false;
    };

    return (
        <aside className={styles.activityBar}>
            <div className={styles.topIcons}>
                <Link href="/" aria-label="Explorer" className={`${styles.iconContainer} ${isActive("/") ? styles.active : ""}`} onClick={() => handleFileClick('home.jsx', '/', 'home.jsx')} aria-current={isActive("/") ? "page" : undefined}>
                    <Image src={files} alt="" width={24} height={24} className={styles.icon} aria-hidden="true" />
                </Link>
                <Link href="/github" aria-label="Source Control" className={`${styles.iconContainer} ${isActive("/github") ? styles.active : ""}`} onClick={() => handleFileClick('github.json', '/github', 'github.json')} aria-current={isActive("/github") ? "page" : undefined}>
                    <Image src={github} alt="" width={24} height={24} className={styles.icon} aria-hidden="true" />
                </Link>
                <Link href="/project" aria-label="Projects" className={`${styles.iconContainer} ${isActive("/project") ? styles.active : ""}`} onClick={() => handleFileClick('project.js', '/project', 'project.js')} aria-current={isActive("/project") ? "page" : undefined}>
                    <Image src={code} alt="" width={24} height={24} className={styles.icon} aria-hidden="true" />
                </Link>
                <Link href="/recruiter" aria-label="Recruiter Info" className={`${styles.iconContainer} ${isActive("/recruiter") ? styles.active : ""}`} onClick={() => handleFileClick('resume.pdf', '/recruiter', 'resume.pdf')} aria-current={isActive("/recruiter") ? "page" : undefined}>
                    <Image src={extensions} alt="" width={24} height={24} className={styles.icon} aria-hidden="true" />
                </Link>
                <Link href="/about" aria-label="About Me" className={`${styles.iconContainer} ${isActive("/about") ? styles.active : ""}`} onClick={() => handleFileClick('about.html', '/about', 'about.html')} aria-current={isActive("/about") ? "page" : undefined}>
                    <Image src={pen} alt="" width={24} height={24} className={styles.icon} aria-hidden="true" />
                </Link>
                <Link href="/contact" aria-label="Contact Me" className={`${styles.iconContainer} ${isActive("/contact") ? styles.active : ""}`} onClick={() => handleFileClick('contact.css', '/contact', 'contact.css')} aria-current={isActive("/contact") ? "page" : undefined}>
                    <Image src={email} alt="" width={24} height={24} className={styles.icon} aria-hidden="true" />
                </Link>
                <Link href="/hire" aria-label="Hire Me" className={`${styles.iconContainer} ${isActive("/hire") ? styles.active : ""}`} onClick={() => handleFileClick('hire.txt', '/hire', 'hire.txt')} aria-current={isActive("/hire") ? "page" : undefined}>
                    <Image src={briefcase} alt="" width={24} height={24} className={styles.icon} aria-hidden="true" />
                </Link>
            </div>

            <div className={styles.bottomIcons}>
                <div className={styles.iconContainer} aria-label="Accounts">
                    <Image src={user} alt="" width={24} height={24} className={styles.icon} aria-hidden="true" />
                </div>
                <Link href="/settings" aria-label="Settings" className={`${styles.iconContainer} ${isActive("/settings") ? styles.active : ""}`} aria-current={isActive("/settings") ? "page" : undefined}>
                    <Image
                        className={styles.icon}
                        src={setting}
                        alt=""
                        width={24} height={24}
                        aria-hidden="true"
                    />
                </Link>
            </div>
        </aside>
    );
}
