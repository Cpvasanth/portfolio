"use client";
import React from "react";
import styles from "../../styles/code.module.css";
import EditorLayout from "../../components/Layout/EditorLayout";
import { useSettings } from "../../context/SettingsContext";

export default function BlockchainOverview() {
    const { fontSize, wordWrap } = useSettings();

    return (
        <EditorLayout>
            <div
                className={styles.codeContainer}
                style={{
                    fontSize: `${fontSize}px`,
                    whiteSpace: wordWrap === 'on' ? 'pre-wrap' : 'pre',
                    wordBreak: wordWrap === 'on' ? 'break-word' : 'normal'
                }}
            >
                <div className={styles.line}>
                    <span className={styles.comment}>// Solidity Source Code</span>
                </div>
                <div className={styles.line}>
                    <span className={styles.keyword}>pragma</span> <span className={styles.text}>solidity</span> <span className={styles.operator}>^</span><span className={styles.number}>0.8.19</span>;
                </div>
                <div className={styles.line}>
                    &nbsp;
                </div>
                <div className={styles.line}>
                    <span className={styles.keyword}>contract</span> <span className={styles.className}>BlockchainProfile</span> <span className={styles.bracket}>{`{`}</span>
                </div>
                <div className={styles.line}>
                    <span className={styles.indent1}>
                        <span className={styles.keyword}>string</span> <span className={styles.keyword}>public</span> <span className={styles.variable}>name</span> = <span className={styles.string}>"Vasanthakumar C"</span>;
                    </span>
                </div>
                <div className={styles.line}>
                    <span className={styles.indent1}>
                        <span className={styles.keyword}>string</span> <span className={styles.keyword}>public</span> <span className={styles.variable}>role</span> = <span className={styles.string}>"Blockchain Developer"</span>;
                    </span>
                </div>
                <div className={styles.line}>
                    &nbsp;
                </div>
                <div className={styles.line}>
                    <span className={styles.indent1}>
                        <span className={styles.comment}>/**</span>
                    </span>
                </div>
                <div className={styles.line}>
                    <span className={styles.indent1}>
                        <span className={styles.comment}> * @notice Returns a summary of my blockchain experience</span>
                    </span>
                </div>
                <div className={styles.line}>
                    <span className={styles.indent1}>
                        <span className={styles.comment}> */</span>
                    </span>
                </div>
                <div className={styles.line}>
                    <span className={styles.indent1}>
                        <span className={styles.keyword}>function</span> <span className={styles.function}>getBio</span>() <span className={styles.keyword}>public</span> <span className={styles.keyword}>pure</span> <span className={styles.keyword}>returns</span> (<span className={styles.keyword}>string</span> <span className={styles.keyword}>memory</span>) <span className={styles.bracket}>{`{`}</span>
                    </span>
                </div>
                <div className={styles.line}>
                    <span className={styles.indent2}>
                        <span className={styles.keyword}>return</span> <span className={styles.string}>"Passionate about building decentralized finance (DeFi) protocols, smart contracts, and Web3 applications. Experienced in Solidity, Hardhat, Ethers.js, and integrating blockchain with modern frontends."</span>;
                    </span>
                </div>
                <div className={styles.line}>
                    <span className={styles.indent1}>
                        <span className={styles.bracket}>{`}`}</span>
                    </span>
                </div>
                <div className={styles.line}>
                    <span className={styles.bracket}>{`}`}</span>
                </div>
            </div>
        </EditorLayout>
    );
}
