import React from "react"
import files from "../assets/files-svgrepo-com.svg"
import github from "../assets/github-svgrepo-com.svg"
import code from "../assets/code-svgrepo-com.svg"
import pen from "../assets/pen-svgrepo-com.svg"
import email from "../assets/email-1-svgrepo-com.svg"
import setting from "../assets/setting-5-svgrepo-com.svg"
import user from "../assets/user-circle-svgrepo-com.svg"

import styles from '../styles/aside.module.css'
import { Link } from 'react-router-dom'


export default function Aside() {
    return (
  
        <aside style={styles.aside}>
            <ul>
                <li>
                    <Link to=""><img className={styles.img} src={files} ></img></Link>
                    <Link to="Github"><img className={styles.img} src={github}></img></Link>
                    <Link to="project"><img className={styles.img} src={code}></img></Link>
                    <Link to="About"><img className={styles.img} src={pen}></img></Link>
                    <Link to="contact"><img className={styles.img} src={email}></img></Link>
                </li>
                <li>
                <Link to=""><img className={styles.img} src={user}></img></Link>
                <Link to=""><img className={styles.img} src={setting}></img></Link>
                </li>
            </ul>

            
            
        </aside>
        
        
        
       
    )
}