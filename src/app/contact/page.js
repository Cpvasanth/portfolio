"use client";
import React, { useEffect } from "react";
import styles from "../../styles/code.module.css";
import EditorLayout from "../../components/Layout/EditorLayout";
import useHistory from "../../hooks/useHistory";

export default function Contact() {
    const [email, setEmail, undoEmail, redoEmail] = useHistory("cpvasanth@proton.me", "contact-email");
    const [github, setGithub, undoGithub, redoGithub] = useHistory("github.com/Cpvasanth", "contact-github");
    const [linkedin, setLinkedin, undoLinkedin, redoLinkedin] = useHistory("linkedin.com/in/cpvasanth", "contact-linkedin");

    // Keyboard shortcuts for Undo/Redo
    useEffect(() => {
        const handleKeyDown = (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'z') {
                e.preventDefault();
                if (e.shiftKey) {
                    redoEmail();
                    redoGithub();
                    redoLinkedin();
                } else {
                    undoEmail();
                    undoGithub();
                    undoLinkedin();
                }
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [undoEmail, redoEmail, undoGithub, redoGithub, undoLinkedin, redoLinkedin]);

    return (
        <EditorLayout>
            <div className={styles.codeContainer}>
                <div className={styles.line}>
                    <span className={styles.selector}>.socials</span> <span className={styles.punctuation}>{'{'}</span>
                </div>
                <div className={styles.line}>
                    <span className={styles.indent1}><span className={styles.property}>display</span>: <span className={styles.value}>flex</span>;</span>
                </div>
                <div className={styles.line}>
                    <span className={styles.indent1}><span className={styles.property}>flex-direction</span>: <span className={styles.value}>column</span>;</span>
                </div>
                <div className={styles.line}>
                    <span className={styles.indent1}><span className={styles.property}>gap</span>: <span className={styles.number}>20px</span>;</span>
                </div>
                <div className={styles.line}>
                    <span className={styles.punctuation}>{'}'}</span>
                </div>
                <div className={styles.line}>&nbsp;</div>
                <div className={styles.line}>
                    <span className={styles.selector}>.contact-item</span> <span className={styles.punctuation}>{'{'}</span>
                </div>
                <div className={styles.line}>
                    <span className={styles.indent1}><span className={styles.property}>email</span>: <span className={styles.string}>"
                        <span
                            contentEditable
                            suppressContentEditableWarning
                            onBlur={(e) => setEmail(e.target.innerText)}
                        >
                            {email}
                        </span>
                        "</span>;</span>
                </div>
                <div className={styles.line}>
                    <span className={styles.indent1}><span className={styles.property}>github</span>: <span className={styles.string}>"
                        <span
                            contentEditable
                            suppressContentEditableWarning
                            onBlur={(e) => setGithub(e.target.innerText)}
                        >
                            {github}
                        </span>
                        "</span>;</span>
                </div>
                <div className={styles.line}>
                    <span className={styles.indent1}><span className={styles.property}>linkedin</span>: <span className={styles.string}>"
                        <span
                            contentEditable
                            suppressContentEditableWarning
                            onBlur={(e) => setLinkedin(e.target.innerText)}
                        >
                            {linkedin}
                        </span>
                        "</span>;</span>
                </div>
                <div className={styles.line}>
                    <span className={styles.punctuation}>{'}'}</span>
                </div>
                <div className={styles.line}>&nbsp;</div>
                <div className={styles.line}>
                    <span className={styles.comment}>/* Reach out to me via email or social media */</span>
                </div>
            </div>
        </EditorLayout>
    );
}
