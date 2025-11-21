import React from "react";
import styles from "../../styles/project.module.css";
import vanLifeImg from "../../assets/vanlife-project-min.png";
import EditorLayout from "../../components/Layout/EditorLayout";

const projects = [
    {
        name: "Rentopia",
        description: "Rentopia is a modern house renting app that simplifies the process of finding, listing, and managing rental properties. It connects renters with verified landlords, offering intuitive search filters, virtual tours, secure payments, and instant messaging — all in one platform. Whether you’re looking for a cozy apartment or managing multiple listings, Rentopia makes renting fast, transparent, and hassle-free",
        img: vanLifeImg.src,
        tags: ["NextJs", "React", "TailwindCSS", "Typescript"],
        liveDemo: "https://rentopia.synt-x.com/",
        codeLink: "https://github.com/Cpvasanth/rentopia",
    },
    {
        name: "Cloud Chain",
        description: "CloudChain is a next-generation hybrid cloud storage platform inspired by Google Drive. It offers secure file storage and management by blending centralized cloud infrastructure with decentralized storage solutions like IPFS/Filecoin. Built with a modern tech stack — React 19, Next.js 15, Appwrite, Tailwind CSS, ShadCN, and TypeScript — CloudChain ensures speed, privacy, and scalability for the future of personal and enterprise file storage.",
        img: vanLifeImg.src,
        tags: ["NextJS", "Dapp", "Supabase"],
        liveDemo: "https://github.com/Cpvasanth/cloud-chain",
        codeLink: "https://github.com/Cpvasanth/cloud-chain",
    },
    {
        name: "Kurukshetra Store",
        description: "An e-commerce platform for buying goods.",
        img: vanLifeImg.src,
        tags: ["NextJs", "typescript", "TailwindCSS", "Firebase"],
        liveDemo: "https://kurukshetra-pi.vercel.app/",
        codeLink: "https://github.com/Cpvasanth/Kurukshetra-V1",
    },
];

export default function Project() {
    return (
        <EditorLayout>
            <div className={styles.code}>
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
