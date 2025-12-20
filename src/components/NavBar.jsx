"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../styles/navBar.module.css";
import FileIcon from "./FileIcon";
import { useLayout } from "../context/LayoutContext";
import { useRouter } from "next/navigation";


export default function NavBar() {
    const pathname = usePathname();
    const router = useRouter();
    const { openTabs, closeTab } = useLayout();

    const isActive = (path) => {
        if (path === "/" && pathname === "/") return true;
        if (path !== "/" && pathname === path) return true;
        return false;
    };

    const handleClose = (e, path) => {
        e.preventDefault();
        e.stopPropagation();

        closeTab(path);

        if (isActive(path)) {
            const index = openTabs.findIndex(tab => tab.path === path);
            if (openTabs.length > 1) {
                const nextTab = openTabs[index === 0 ? 1 : index - 1];
                router.push(nextTab.path);
            } else {
                router.push("/");
            }
        }
    };

    return (
        <>
            <nav className={styles.tabs}>
                {openTabs.map((tab) => (
                    <Link
                        key={tab.path}
                        href={tab.path}
                        className={`${styles.tab} ${isActive(tab.path) ? styles.active : ""}`}
                    >
                        <FileIcon name={tab.icon} size={18} />
                        <span className={styles.label}>{tab.name}</span>
                        <span
                            className={styles.close}
                            onClick={(e) => handleClose(e, tab.path)}
                        >×</span>
                    </Link>
                ))}
            </nav>
            <div className={styles.breadcrumbs}>
                <span className={styles.breadcrumbItem}>src</span>
                <span className={styles.breadcrumbSeparator}>›</span>
                <span className={styles.breadcrumbItem}>
                    {pathname === "/" ? "home.jsx" : (pathname.slice(1).replace(/\//g, ' › ')) + (pathname === "/about" ? ".html" : pathname === "/contact" ? ".css" : pathname === "/project" ? ".js" : pathname === "/github" ? ".json" : pathname === "/readme" ? ".md" : pathname === "/blockchain" ? ".sol" : pathname === "/blockchain/projects" ? ".sol" : "")}
                </span>
            </div>
        </>
    );
}
