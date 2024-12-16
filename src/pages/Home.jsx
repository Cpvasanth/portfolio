import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/home.module.css";

export default function Home() {
    return (
        <div className={styles.home}>
            <div className={styles.container}>
                <h1 className={styles.name}>Vasanthakumar C</h1>
                <h2 className={styles.job}>Blockchain Developer</h2>
                <div className={styles.buttons}>
                    <Link to="/project" className={styles.worksBtn}>
                        View Work
                    </Link>
                    <Link to="/contact" className={styles.contactBtn}>
                        Contact Me
                    </Link>
                </div>
            </div>
        </div>
    );
}
