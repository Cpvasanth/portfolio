"use client";
import React, { useEffect } from "react";
import styles from "../../styles/code.module.css";
import EditorLayout from "../../components/Layout/EditorLayout";
import useHistory from "../../hooks/useHistory";

export default function About() {
    const [bio, setBio, undoBio, redoBio] = useHistory(
        "I am a passionate Blockchain Developer with experience in building decentralized applications (dApps) and smart contracts. I love exploring new technologies and solving complex problems.",
        "about-bio"
    );

    // Keyboard shortcuts for Undo/Redo
    useEffect(() => {
        const handleKeyDown = (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'z') {
                e.preventDefault();
                if (e.shiftKey) {
                    redoBio();
                } else {
                    undoBio();
                }
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [undoBio, redoBio]);

    return (
        <EditorLayout>
            <div className={styles.codeContainer}>
                <div className={styles.line}>
                    <span className={styles.tag}>&lt;!DOCTYPE html&gt;</span>
                </div>
                <div className={styles.line}>
                    <span className={styles.tag}>&lt;html <span className={styles.attrName}>lang</span>=<span className={styles.string}>"en"</span>&gt;</span>
                </div>
                <div className={styles.line}>
                    <span className={styles.indent1}>&lt;<span className={styles.tag}>body</span>&gt;</span>
                </div>
                <div className={styles.line}>
                    <span className={styles.indent2}>&lt;<span className={styles.tag}>h1</span>&gt;</span>About Me<span className={styles.tag}>&lt;/h1&gt;</span>
                </div>
                <div className={styles.line}>
                    <span className={styles.indent2}>&lt;<span className={styles.tag}>p</span>&gt;</span>
                </div>
                <div className={styles.line}>
                    <span className={styles.indent3}>
                        <span
                            className={styles.text}
                            contentEditable
                            suppressContentEditableWarning
                            onBlur={(e) => setBio(e.target.innerText)}
                        >
                            {bio}
                        </span>
                    </span>
                </div>
                <div className={styles.line}>
                    <span className={styles.indent2}>&lt;/<span className={styles.tag}>p</span>&gt;</span>
                </div>
                <div className={styles.line}>
                    <span className={styles.indent1}>&lt;/<span className={styles.tag}>body</span>&gt;</span>
                </div>
                <div className={styles.line}>
                    <span className={styles.tag}>&lt;/html&gt;</span>
                </div>
            </div>
        </EditorLayout>
    );
}
