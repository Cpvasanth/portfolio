import React from "react";
import styles from "../styles/footer.module.css"

export default function Footer(prop) {
    return (
        <footer className={`${styles.footer} ${prop.footer}`}>
            <h1>this is Footer page</h1>
        </footer>
       
    )
}