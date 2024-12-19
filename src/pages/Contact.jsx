import React from "react";
import styles from "../styles/contact.module.css";

export default function Contact() {
    return (
        <div className={styles.Contact}>
            <h1 className={styles.ContactTitle}>Reach Out via Social</h1>
            <ul>
                <li>
                    <span className={styles.number}>1</span>{" "}
                    <span className={styles.socials}>.social</span> {"{"}
                </li>
                <li>
                    <span className={styles.number}>2</span>{" "}
                    <span className={styles.socialName}>Email:</span>{" "}
                    <span className={styles.socials}>
                        <a href="mailto:cpvasanth@proton.me">cpvasanth@proton.me</a>
                    </span>
                    ;
                </li>
                <li>
                    <span className={styles.number}>3</span>{" "}
                    <span className={styles.socialName}>Github:</span>{" "}
                    <span className={styles.socials}>
                        <a href="https://github.com/cpvasanth" target="_blank" rel="noopener noreferrer">@cpvasanth</a>
                    </span>
                    ;
                </li>
                <li>
                    <span className={styles.number}>4</span>{" "}
                    <span className={styles.socialName}>LinkedIn:</span>{" "}
                    <span className={styles.socials}>
                        <a href="https://www.linkedin.com/in/cpvasanth" target="_blank" rel="noopener noreferrer">@cpvasanth</a>
                    </span>
                    ;
                </li>
                <li>
                    <span className={styles.number}>5</span>{" "}
                    <span className={styles.socialName}>X:</span>{" "}
                    <span className={styles.socials}>
                        <a href="https://twitter.com/cpvasanth" target="_blank" rel="noopener noreferrer">@cpvasanth</a>
                    </span>
                    ;
                </li>
                <li>
                    <span className={styles.number}>6</span> {"}"}
                </li>
            </ul>
        </div>
    );
}
