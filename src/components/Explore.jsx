import React from "react";
import styles from "../styles/explore.module.css";
import { NavLink } from "react-router-dom";



export default function Explore(prop) {

    const [toggle, setToggle] = React.useState(true);
    
    function handleClick() { 
        setToggle(!toggle);
    }

    return (
        <div className={` ${styles.exploreContainer} ${prop.explore} `}>
        <h1 className={styles.title}>Explore</h1>
        <div className={styles.dropdown}>
        <button className={styles.dropbtn} onClick={handleClick}>
    {toggle ? '↓ PORTFOLIO' : ' → PORTFOLIO'}
</button>
            <div  className={`${toggle ? styles.showContent : styles.dropdownContent}`} >
            <NavLink to="/"> Home.jsx </NavLink>
            <NavLink to="/about">About.html</NavLink>
            <NavLink to="/contact">Contact.css</NavLink>
            <NavLink to="/project">Project.js</NavLink>
            <NavLink to="/github">Github.md</NavLink>
            </div>
        </div>
        </div>
    )

}