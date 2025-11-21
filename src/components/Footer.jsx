"use client";
import React from "react";
import styles from "../styles/footer.module.css";
import { useLayout } from "../context/LayoutContext";

export default function Footer() {
    const { toggleTerminal, isTerminalOpen } = useLayout();

    return (
        <footer className={styles.statusBar}>
            <div className={styles.leftSection}>
                <div className={styles.item}>
                    <span className={styles.icon}>main*</span>
                </div>
                <div className={styles.item} onClick={toggleTerminal} style={{ backgroundColor: isTerminalOpen ? 'rgba(255, 255, 255, 0.12)' : 'transparent' }}>
                    <span className={styles.icon}>⚠ 0</span>
                    <span className={styles.icon}>⊗ 0</span>
                    <span style={{ marginLeft: '5px' }}>TERMINAL</span>
                </div>
            </div>
            <div className={styles.rightSection}>
                <div className={styles.item}>Ln 1, Col 1</div>
                <div className={styles.item}>UTF-8</div>
                <div className={styles.item}>JavaScript React</div>
                <div className={styles.item}>Prettier</div>
                <div className={styles.item}>
                    <span className={styles.bell}>bell</span>
                </div>
            </div>
        </footer>
    );
}