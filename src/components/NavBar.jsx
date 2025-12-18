"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../styles/navBar.module.css";
import FileIcon from "./FileIcon";


export default function NavBar() {
    const pathname = usePathname();

    const isActive = (path) => {
        if (path === "/" && pathname === "/") return true;
        if (path !== "/" && pathname.startsWith(path)) return true;
        return false;
    };

    return (
        <>
            <nav className={styles.tabs}>
                <Link
                    href="/"
                    className={`${styles.tab} ${isActive("/") ? styles.active : ""}`}
                >
                    <FileIcon name="home.jsx" size={18} />
                    <span className={styles.label}>home.jsx</span>
                    <span className={styles.close}>×</span>
                </Link>
                <Link
                    href="/about"
                    className={`${styles.tab} ${isActive("/about") ? styles.active : ""}`}
                >
                    <FileIcon name="about.html" size={18} />
                    <span className={styles.label}>about.html</span>
                    <span className={styles.close}>×</span>
                </Link>
                <Link
                    href="/contact"
                    className={`${styles.tab} ${isActive("/contact") ? styles.active : ""}`}
                >
                    <FileIcon name="contact.css" size={18} />
                    <span className={styles.label}>contact.css</span>
                    <span className={styles.close}>×</span>
                </Link>
                <Link
                    href="/project"
                    className={`${styles.tab} ${isActive("/project") ? styles.active : ""}`}
                >
                    <FileIcon name="project.js" size={18} />
                    <span className={styles.label}>project.js</span>
                    <span className={styles.close}>×</span>
                </Link>
                <Link
                    href="/github"
                    className={`${styles.tab} ${isActive("/github") ? styles.active : ""}`}
                >
                    <FileIcon name="github.json" size={18} />
                    <span className={styles.label}>github.json</span>
                    <span className={styles.close}>×</span>
                </Link>
                <Link
                    href="/readme"
                    className={`${styles.tab} ${isActive("/readme") ? styles.active : ""}`}
                >
                    <FileIcon name="readme.md" size={18} />
                    <span className={styles.label}>readme.md</span>
                    <span className={styles.close}>×</span>
                </Link>
            </nav>
            <div className={styles.breadcrumbs}>
                <span className={styles.breadcrumbItem}>src</span>
                <span className={styles.breadcrumbSeparator}>›</span>
                <span className={styles.breadcrumbItem}>
                    {pathname === "/" ? "home.jsx" : pathname.slice(1) + (pathname === "/about" ? ".html" : pathname === "/contact" ? ".css" : pathname === "/project" ? ".js" : pathname === "/github" ? ".json" : pathname === "/readme" ? ".md" : "")}
                </span>
            </div>
        </>
    );
}
