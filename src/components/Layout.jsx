import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Aside from "./Aside";
import NavBar from "./NavBar";
import Explore from "./Explore";
import styles from "../styles/index.module.css";


export default function Layout() {



    
    return (
        <div className={styles.container}>
            <Header header={styles.header} />
            <NavBar nav={styles.nav} />
            <Explore explore={styles.explore} />
            <Aside   aside = {styles.aside}/> 
            <main className={styles.main}>
                <Outlet />
            </main>
            <Footer footer={styles.footer} />
        </div>
    );
}
