"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EditorLayout from "../../components/Layout/EditorLayout";
import styles from "../../styles/github.module.css";

import { useSettings } from "../../context/SettingsContext";

const Github = () => {
    const { fontSize, wordWrap } = useSettings();
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const response = await axios.get(
                    'https://api.github.com/users/cpvasanth/repos'
                );
                setRepos(response.data);
            } catch (error) {
                console.error("Error fetching repos:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchRepos();
    }, []);

    if (loading) {
        return (
            <EditorLayout>
                <div className={styles.code}>
                    <span className={styles.comment}>// Fetching repositories...</span>
                </div>
            </EditorLayout>
        );
    }

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
                <span className={styles.bracket}>[</span>
                {repos.map((repo, index) => (
                    <div key={repo.id} className={styles.object}>
                        <span className={styles.bracket}>{"  {"}</span>
                        <div className={styles.property}>
                            <span className={styles.key}>"name"</span>: <span className={styles.string}>"{repo.name}"</span>,
                        </div>
                        <div className={styles.property}>
                            <span className={styles.key}>"html_url"</span>: <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className={styles.link}>"{repo.html_url}"</a>,
                        </div>
                        <div className={styles.property}>
                            <span className={styles.key}>"description"</span>: <span className={styles.string}>"{repo.description || "No description"}"</span>,
                        </div>
                        <div className={styles.property}>
                            <span className={styles.key}>"stars"</span>: <span className={styles.number}>{repo.stargazers_count}</span>,
                        </div>
                        <div className={styles.property}>
                            <span className={styles.key}>"forks"</span>: <span className={styles.number}>{repo.forks_count}</span>,
                        </div>
                        <div className={styles.property}>
                            <span className={styles.key}>"watchers"</span>: <span className={styles.number}>{repo.watchers_count}</span>
                        </div>
                        <span className={styles.bracket}>{"  }"}</span>{index < repos.length - 1 ? "," : ""}
                    </div>
                ))}
                <span className={styles.bracket}>]</span>
            </div>
        </EditorLayout>
    );
};

export default Github;
