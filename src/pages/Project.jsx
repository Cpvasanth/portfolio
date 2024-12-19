import React from "react";
import styles from "../styles/project.module.css";

export default function Project() {
    return (
        <>
        <div className={styles.project}>
            <div className={styles.projectContainer}>
                <h1>Projects 1 name</h1>
                <h2>briefly about project</h2>
            </div>
            <div className={styles.projectContainer}>
                <h1>Projects 1 name</h1>
                <h2>briefly about project</h2>
            </div>
            <div className={styles.projectContainer}>
                <h1>Projects 1 name</h1>
                <h2>briefly about project</h2>
            </div>
        </div>
        </>
    )
}