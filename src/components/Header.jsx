// Header.jsx
import React from "react";
import vscode from "../assets/visual-studio-code.png";
import threeColour from "../assets/Iconless_Buttons.png";
import styles from "../styles/header.module.css";

export default function Header({ header }) {
    return (
        <header className={`${styles.headerContainer} ${header}`}>
            <ul className={`${styles.headerBar} `}>
                <li>
                    <img 
                        src={vscode} 
                        alt="Visual Studio Code logo" 
                        className={styles.vsCode} 
                    />
                </li>
                <li className={styles.title}>Vasa - vsCode Portfolio</li>
                <li>
                    <img 
                        src={threeColour} 
                        alt="Traffic light buttons" 
                        className={styles.threeColour} 
                    />
                </li>
            </ul>
        </header>
    );
}
