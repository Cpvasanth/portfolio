import React from "react";
import files from "../assets/files-svgrepo-com.svg";
import github from "../assets/github-svgrepo-com.svg";
import code from "../assets/code-svgrepo-com.svg";
import pen from "../assets/pen-svgrepo-com.svg";
import email from "../assets/email-1-svgrepo-com.svg";
import setting from "../assets/setting-5-svgrepo-com.svg";
import user from "../assets/user-circle-svgrepo-com.svg";
import styles from '../styles/aside.module.css';
import { Link } from 'react-router-dom';

export default function Aside(prop) {
    return (
        <aside className={ `${styles.aside}  ${prop.aside}`}>
            <div className={styles.asideContainer}>
                <ul className={styles.ul}>
                    <Link to=""><img className={styles.img} src={files} alt="Files" /></Link>
                    <Link to="Github"><img className={styles.img} src={github} alt="Github" /></Link>
                    <Link to="project"><img className={styles.img} src={code} alt="Project" /></Link>
                    <Link to="About"><img className={styles.img} src={pen} alt="About" /></Link>
                    <Link to="contact"><img className={styles.img} src={email} alt="Contact" /></Link>
                </ul>

                <ul className={styles.ul}>
                    <Link to=""><img className={styles.img} src={user} alt="User" /></Link>
                    <Link to=""><img className={styles.img} id={styles.setting} src={setting} alt="Settings" /></Link>
                </ul>
            </div>
        </aside>
    );
}
