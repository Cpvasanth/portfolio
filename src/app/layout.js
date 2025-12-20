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
import MobileWarning from "../components/MobileWarning";
import CommandPalette from "../components/CommandPalette";

export const metadata = {
    metadataBase: new URL('https://imvasa.vercel.app'),
    title: {
        default: "Vasanthakumar C | Freelance Software & Blockchain Developer",
        template: "%s | Vasanthakumar C"
    },
    description: "Expert Freelance Software Developer & Blockchain Specialist. Building high-performance web applications, smart contracts, and decentralized solutions. Hire me for Next.js, React, and Solidity projects.",
    keywords: ["Freelance Web Developer", "Blockchain Developer", "Smart Contract Engineer", "Next.js Expert", "React Developer", "Web Design", "SEO Specialist"],
    authors: [{ name: "Vasanthakumar C" }],
    creator: "Vasanthakumar C",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://imvasa.vercel.app",
        siteName: "Vasanthakumar C - Portfolio",
        title: "Vasanthakumar C | Freelance Software & Blockchain Developer",
        description: "Expert Freelance Software Developer & Blockchain Specialist. Building high-performance web applications, smart contracts, and decentralized solutions.",
        images: [
            {
                url: "/opengraph-image.png", // Ensure this image exists or is generated
                width: 1200,
                height: 630,
                alt: "Vasanthakumar C Portfolio",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Vasanthakumar C | Freelance Software & Blockchain Developer",
        description: "Expert Freelance Software Developer & Blockchain Specialist. Hire me for Next.js, React, and Solidity projects.",
        creator: "@yourtwitterhandle", // Update if known or leave generic until populated
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    verification: {
        google: "jN4j-ppj7qu0aVshoAQX6Rwct9cIKu5ZB-JY9HbmUxA",
    },
};

import JsonLd from "../components/JsonLd";
import GoogleAnalytics from "../components/GoogleAnalytics";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
                <JsonLd />
                <SettingsProvider>
                    <LayoutProvider>
                        <CommandPalette />
                        <MobileWarning />
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
