import React from "react";
import styles from "../styles/project.module.css";
import vanLifeImg from "../assets/vanlife-project-min.png";

const projects = [
    {
        name: "VanLife Project",
        description: "A platform for renting and buying van services.",
        img: vanLifeImg,
        tags: ["React", "HTML5", "CSS3", "Javascript"],
        liveDemo: "https://example.com/vanlife-demo",
        codeLink: "https://github.com/yourusername/vanlife",
    },
    {
        name: "Portfolio Website",
        description: "Personal portfolio showcasing projects and skills.",
        img: vanLifeImg, // Replace with another image
        tags: ["React", "TypeScript", "TailwindCSS"],
        liveDemo: "https://example.com/portfolio",
        codeLink: "https://github.com/yourusername/portfolio",
    },
    {
        name: "E-Commerce Store",
        description: "An e-commerce platform for buying goods.",
        img: vanLifeImg, // Replace with another image
        tags: ["Vue", "HTML5", "CSS3", "Javascript"],
        liveDemo: "https://example.com/ecommerce-demo",
        codeLink: "https://github.com/yourusername/ecommerce",
    },
];

export default function Project() {
    return (
        <div className={styles.project}>
            {projects.map((project, index) => (
                <div key={index} className={styles.projectContainer}>
                    <img
                        src={project.img}
                        alt={`Screenshot of ${project.name}`}
                        className={styles.projectImage}
                    />
                    <h1 className={styles.projectTitle}>{project.name}</h1>
                    <h2 className={styles.projectDescription}>{project.description}</h2>
                    <div className={styles.projectTags}>
                        {project.tags.map((tag, tagIndex) => (
                            <span key={tagIndex} className={styles.tag}>
                                {tag}
                            </span>
                        ))}
                    </div>
                    <div className={styles.projectButtons}>
                        <button
                            onClick={() => window.open(project.liveDemo, "_blank")}
                            className={styles.viewButton}
                        >
                            View Project
                        </button>
                        <button
                            onClick={() => window.open(project.codeLink, "_blank")}
                            className={styles.viewButton}
                        >
                            View Code
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}
