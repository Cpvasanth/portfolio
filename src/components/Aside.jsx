import React from "react";
import files from "../assets/files-svgrepo-com.svg";
import github from "../assets/github-svgrepo-com.svg";
import code from "../assets/code-svgrepo-com.svg";
import pen from "../assets/pen-svgrepo-com.svg";
import email from "../assets/email-1-svgrepo-com.svg";
import setting from "../assets/setting-5-svgrepo-com.svg";
import user from "../assets/user-circle-svgrepo-com.svg";
import styles from '../styles/aside.module.css';
import { NavLink } from 'react-router-dom';

export default function Aside(prop) {
    return (
        <aside className={`${styles.aside} ${prop.aside}`}>
            <div className={styles.asideContainer}>
                <ul className={styles.ul}>
                    <NavLink 
                        to="" 
                        className={({ isActive }) => isActive ? styles.active : ""}
                    >
                        <img className={styles.img} src={files} alt="Files" />
                    </NavLink>
                    <NavLink 
                        to="Github" 
                        className={({ isActive }) => isActive ? styles.active : ""}
                    >
                        <img className={styles.img} src={github} alt="Github" />
                    </NavLink>
                    <NavLink 
                        to="project" 
                        className={({ isActive }) => isActive ? styles.active : ""}
                    >
                        <img className={styles.img} src={code} alt="Project" />
                    </NavLink>
                    <NavLink 
                        to="About" 
                        className={({ isActive }) => isActive ? styles.active : ""}
                    >
                        <img className={styles.img} src={pen} alt="About" />
                    </NavLink>
                    <NavLink 
                        to="contact" 
                        className={({ isActive }) => isActive ? styles.active : ""}
                    >
                        <img className={styles.img} src={email} alt="Contact" />
                    </NavLink>
                </ul>

                <ul className={styles.ul}>
                    <NavLink 
                        to="" 
                        className={({ isActive }) => isActive ? styles.active : ""}
                    >
                        <img className={styles.img} src={user} alt="User" />
                    </NavLink>
                    <NavLink 
                        to="" 
                        className={({ isActive }) => isActive ? styles.active : ""}
                    >
                        <img 
                            className={styles.img} 
                            id={styles.setting} 
                            src={setting} 
                            alt="Settings" 
                        />
                    </NavLink>
                </ul>
            </div>
        </aside>
    );
}
