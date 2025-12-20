"use client";
import React from 'react';
import Image from 'next/image';
import styles from '../../styles/project-preview.module.css';

const ProjectCard = ({ project }) => {
    return (
        <div className={styles.card}>
            <div className={styles.imageContainer}>
                <Image
                    src={project.img}
                    alt={project.name}
                    fill
                    style={{ objectFit: 'cover' }}
                />
            </div>
            <div className={styles.content}>
                <h3 className={styles.title}>{project.name}</h3>
                <p className={styles.description}>{project.description}</p>
                <div className={styles.tags}>
                    {project.tags.map((tag, i) => (
                        <span key={i} className={styles.tag}>{tag}</span>
                    ))}
                </div>
                <div className={styles.links}>
                    <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className={styles.link}>
                        Live Demo
                    </a>
                    <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className={styles.link}>
                        Source Code
                    </a>
                </div>
            </div>
        </div>
    );
};

export default function ProjectPreview({ data }) {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h2>Project Preview</h2>
                <span className={styles.badge}>Live</span>
            </div>
            <div className={styles.grid}>
                {data.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </div>
    );
}
