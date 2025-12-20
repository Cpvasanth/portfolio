"use client";
import React from "react";
import Link from "next/link";
import styles from "../../styles/project.module.css";
import EditorLayout from "../../components/Layout/EditorLayout";
import { useSettings } from "../../context/SettingsContext";
import { projects } from "../../data/projects";
import ProjectPreview from "../../components/Previews/ProjectPreview";

export default function ProjectContent() {
    const { fontSize, wordWrap } = useSettings();

    return (
        <EditorLayout preview={<ProjectPreview data={projects} />}>
            <div
                className={styles.code}
                style={{
                    fontSize: `${fontSize}px`,
                    whiteSpace: wordWrap === 'on' ? 'pre-wrap' : 'pre',
                    wordBreak: wordWrap === 'on' ? 'break-word' : 'normal'
                }}
            >
                <span className={styles.bracket}>[</span>
                {projects.map((project, index) => (
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
                        <div className={styles.property}>
                            <span className={styles.key}>"links"</span>: <span className={styles.bracket}>{"{"}</span>
                        </div>
                        <div className={styles.nestedProperty}>
                            <span className={styles.key}>"live"</span>: <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className={styles.link}>"{project.liveDemo}"</a>,
                        </div>
                        <div className={styles.nestedProperty}>
                            <span className={styles.key}>"code"</span>: <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className={styles.link}>"{project.codeLink}"</a>
                        </div>
                        {project.caseStudyLink && (
                            <div className={styles.nestedProperty}>
                                <span className={styles.key}>"case_study"</span>: <Link href={project.caseStudyLink} className={styles.link}>"Read Case Study"</Link>
                            </div>
                        )}
                        <div className={styles.property}>
                            <span className={styles.bracket}>{"}"}</span>
                        </div>
                        <span className={styles.bracket}>{"  }"}</span>{index < projects.length - 1 ? "," : ""}
                    </div>
                ))}
                <span className={styles.bracket}>]</span>
            </div>
        </EditorLayout>
    );
}
