
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
                <Link href="/" className={`${styles.iconContainer} ${isActive("/") ? styles.active : ""}`} onClick={() => handleFileClick('home.jsx', '/', 'home.jsx')}>
                    <Image src={files} alt="Explorer" width={24} height={24} className={styles.icon} />
                </Link>
                <Link href="/github" className={`${styles.iconContainer} ${isActive("/github") ? styles.active : ""}`} onClick={() => handleFileClick('github.json', '/github', 'github.json')}>
                    <Image src={github} alt="Source Control" width={24} height={24} className={styles.icon} />
                </Link>
                <Link href="/project" className={`${styles.iconContainer} ${isActive("/project") ? styles.active : ""}`} onClick={() => handleFileClick('project.js', '/project', 'project.js')}>
                    <Image src={code} alt="Projects" width={24} height={24} className={styles.icon} />
                </Link>
                <Link href="/recruiter" className={`${styles.iconContainer} ${isActive("/recruiter") ? styles.active : ""}`} onClick={() => handleFileClick('resume.pdf', '/recruiter', 'resume.pdf')}>
                    <Image src={extensions} alt="Recruiter" width={24} height={24} className={styles.icon} />
                </Link>
                <Link href="/about" className={`${styles.iconContainer} ${isActive("/about") ? styles.active : ""}`} onClick={() => handleFileClick('about.html', '/about', 'about.html')}>
                    <Image src={pen} alt="About" width={24} height={24} className={styles.icon} />
                </Link>
                <Link href="/contact" className={`${styles.iconContainer} ${isActive("/contact") ? styles.active : ""}`} onClick={() => handleFileClick('contact.css', '/contact', 'contact.css')}>
                    <Image src={email} alt="Contact" width={24} height={24} className={styles.icon} />
                </Link>
                <Link href="/hire" className={`${styles.iconContainer} ${isActive("/hire") ? styles.active : ""}`} onClick={() => handleFileClick('hire.txt', '/hire', 'hire.txt')}>
                    <Image src={briefcase} alt="Hire Me" width={24} height={24} className={styles.icon} />
                </Link>
            </div>

            <div className={styles.bottomIcons}>
                <div className={styles.iconContainer}>
                    <Image src={user} alt="Accounts" width={24} height={24} className={styles.icon} />
                </div>
                <Link href="/settings" className={`${styles.iconContainer} ${isActive("/settings") ? styles.active : ""}`}>
                    <Image
                        className={styles.icon}
                        src={setting}
                        alt="Settings"
                        width={24} height={24}
                    />
                </Link>
            </div>
        </aside>
    );
}
