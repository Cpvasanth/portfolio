import React from "react";
import vscode from "../assets/visual-studio-code.png";
import threeColour from "../assets/Iconless_Buttons.png";
import styles from '../styles/header.module.css';

export default function Header() {
    return (
        <header>
            <ul className={styles.headerBar}>
                <li>
                    <img 
                        src={vscode} 
                        alt="vsCode" 
                        className={styles.vsCode} 
                    />
                </li>
                <li>Vasa - vsCode Portfolio</li>                
                <li>
                    <img 
                        src={threeColour} 
                        alt="traffic light buttons" 
                        className={styles.threeColour } 
                    />
                </li>
            </ul>

        </header>
    );
}
