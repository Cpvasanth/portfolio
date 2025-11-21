import React from "react";
import TitleBar from "../components/TitleBar";
import Aside from "../components/Aside";
import Footer from "../components/Footer";
import Explore from "../components/Explore";
import NavBar from "../components/NavBar";
import styles from "../styles/index.module.css";
import "./globals.css";
import { SettingsProvider } from "../context/SettingsContext";
import { LayoutProvider } from "../context/LayoutContext";
import RecruiterPanel from "../components/RecruiterPanel";
import Terminal from "../components/Terminal";

export const metadata = {
    title: "Vasanthakumar C - VS Code Portfolio",
    description: "Portfolio of Vasanthakumar C, a Blockchain Developer",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <SettingsProvider>
                    <LayoutProvider>
                        <div className={styles.layout}>
                            <TitleBar />
                            <RecruiterPanel />
                            <div className={styles.mainContainer}>
                                <Aside />
                                <Explore />
                                <div className={styles.editorArea}>
                                    <NavBar />
                                    <main className={styles.editorContent}>
                                        {children}
                                    </main>
                                </div>
                            </div>
                            <Terminal />
                            <Footer />
                        </div>
                    </LayoutProvider>
                </SettingsProvider>
            </body>
        </html>
    );
}
