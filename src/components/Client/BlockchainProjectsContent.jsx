"use client";
import React from "react";
import styles from "../../styles/project.module.css";
// reusing the same image/styles as main project page for consistency, can be updated later
import vanLifeImg from "../../assets/vanlife-project-min.png";
import EditorLayout from "../../components/Layout/EditorLayout";

import { useSettings } from "../../context/SettingsContext";

const blockchainProjects = [
    {
        name: "Cloud Chain",
        description: "A decentralized storage solution leveraging IPFS and Filecoin for secure and persistent data storage, integrated with a Web2-friendly interface.",
        img: vanLifeImg.src,
        tags: ["Solidity", "IPFS", "Filecoin", "React"],
        liveDemo: "https://github.com/Cpvasanth/cloud-chain",
        codeLink: "https://github.com/Cpvasanth/cloud-chain",
    },
    {
        name: "DeFi Exchange",
        description: "A decentralized exchange (DEX) prototype allowing users to swap ERC-20 tokens trustlessly.",
        img: vanLifeImg.src,
        tags: ["Solidity", "Ethers.js", "Hardhat"],
        liveDemo: "#", // Placeholder
        codeLink: "#", // Placeholder
    },
    // Add more blockchain specific projects here
];

export default function BlockchainProjectsContent() {
    const { fontSize, wordWrap } = useSettings();

    return (
        <EditorLayout>
            <div
                className={styles.code}
                style={{
                    fontSize: `${fontSize}px`,
                    whiteSpace: wordWrap === 'on' ? 'pre-wrap' : 'pre',
                    wordBreak: wordWrap === 'on' ? 'break-word' : 'normal'
                }}
            >
                <div className={styles.line}>
                    <span className={styles.comment}>// Array of Blockchain Projects</span>
                </div>
                <span className={styles.bracket}>[</span>
                {blockchainProjects.map((project, index) => (
                    <div key={index} className={styles.object}>
                        <span className={styles.bracket}>{"  {"}</span>
                        <div className={styles.property}>
                            <span className={styles.key}>"name"</span>: <span className={styles.string}>"{project.name}"</span>,
                        </div>
                        <div className={styles.property}>
                            <span className={styles.key}>"description"</span>: <span className={styles.string}>"{project.description}"</span>,
                        </div>
                        <div className={styles.property}>
                            <span className={styles.key}>"tags"</span>: <span className={styles.bracket}>[</span>
                            {project.tags.map((tag, i) => (
                                <span key={i}>
                                    <span className={styles.string}>"{tag}"</span>{i < project.tags.length - 1 ? ", " : ""}
                                </span>
                            ))}
                            <span className={styles.bracket}>]</span>,
                        </div>
                        <div className={styles.nestedProperty}>
                            <span className={styles.key}>"contract"</span>: <span className={styles.keyword}>address</span>(<span className={styles.string}>"0x123...abc"</span>),
                        </div>
                        <div className={styles.property}>
                            <span className={styles.key}>"links"</span>: <span className={styles.bracket}>{"{"}</span>
                        </div>
                        <div className={styles.nestedProperty}>
                            <span className={styles.key}>"live"</span>: <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className={styles.link}>"{project.liveDemo}"</a>,
                        </div>
                        <div className={styles.nestedProperty}>
                            <span className={styles.key}>"code"</span>: <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className={styles.link}>"{project.codeLink}"</a>
                        </div>
                        <div className={styles.property}>
                            <span className={styles.bracket}>{"}"}</span>
                        </div>
                        <span className={styles.bracket}>{"  }"}</span>{index < blockchainProjects.length - 1 ? "," : ""}
                    </div>
                ))}
                <span className={styles.bracket}>]</span>
            </div>
        </EditorLayout>
    );
}
