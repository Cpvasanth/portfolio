import React from "react";
import styles from "../styles/explore.module.css";


export default function Explore(prop) {

    return (
        <div className={` ${styles.exploreContainer} ${prop.explore} `}>
        <h1 className={styles.title}>Explore</h1>
        <p>Explore the projects and articles.</p>
        </div>
    )

}