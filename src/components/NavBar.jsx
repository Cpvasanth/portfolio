import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../styles/navBar.module.css";


export default function NavBar(prop) {
    return (
        <nav className={`${styles.navbar} ${prop.nav}`}>
            <NavLink 
                to="/" 
                className={({ isActive }) => 
                    isActive ? `${styles.link} ${styles.active}` : styles.link
                }
            >
              Home.jsx 
            </NavLink>
            <NavLink 
                to="/about" 
                className={({ isActive }) => 
                    isActive ? `${styles.link} ${styles.active}` : styles.link
                }
            >
                About.html
            </NavLink>

            <NavLink 
                to="/contact" 
                className={({ isActive }) => 
                    isActive ? `${styles.link} ${styles.active}` : styles.link
                }
            >
                Contact.css
            </NavLink>
            
            <NavLink 
                to="/project" 
                className={({ isActive }) => 
                    isActive ? `${styles.link} ${styles.active}` : styles.link
                }
            >
                Project.js
            </NavLink>
            <NavLink 
                to="/github" 
                className={({ isActive }) => 
                    isActive ? `${styles.link} ${styles.active}` : styles.link
                }
            >
                Github.md
            </NavLink>

        </nav>
    );
}
