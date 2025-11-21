import React from "react";
import styles from "../../styles/editorLayout.module.css";

export default function EditorLayout({ children }) {
    // Generate array of line numbers (e.g., 1 to 50)
    const lines = Array.from({ length: 50 }, (_, i) => i + 1);

    return (
        <div className={styles.editorContainer}>
            <div className={styles.lineNumbers}>
                {lines.map((line) => (
                    <div key={line} className={styles.lineNumber}>
                        {line}
                    </div>
                ))}
            </div>
            <div className={styles.content}>
                {children}
            </div>
        </div>
    );
}
