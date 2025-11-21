import React from 'react';
import styles from '../../styles/readme.module.css';
import EditorLayout from '../../components/Layout/EditorLayout';

const Readme = () => {
    return (
        <EditorLayout>
            <div className={styles.container}>
                <h1>VS Code Portfolio</h1>
                <p>
                    Welcome to my interactive portfolio! This website is built to mimic the look and feel of Visual Studio Code,
                    providing a familiar environment for developers and a unique experience for recruiters.
                </p>

                <h2>Tech Stack</h2>
                <ul>
                    <li><strong>Framework:</strong> Next.js 13+ (App Router)</li>
                    <li><strong>Styling:</strong> CSS Modules (No Tailwind, pure CSS)</li>
                    <li><strong>Icons:</strong> React Icons (VS Code & Simple Icons)</li>
                    <li><strong>State Management:</strong> React Context & Hooks</li>
                </ul>

                <h2>Features</h2>
                <ul>
                    <li><strong>Themes:</strong> Switch between Dark+, Light+, High Contrast, Monokai, Dracula, and more.</li>
                    <li><strong>Interactive Terminal:</strong> A functional terminal with custom commands.</li>
                    <li><strong>Editable Code:</strong> You can edit the code on the pages! (Ctrl+Z to Undo).</li>
                    <li><strong>Recruiter Mode:</strong> A special mode for quick information access.</li>
                </ul>

                <h2>Hidden Clues</h2>
                <blockquote>
                    "Sometimes the best way to get what you want is to ask the terminal for it directly."
                </blockquote>
                <p>
                    Try typing <code>help</code> in the terminal to see what you can do.
                    There might be a <code>sudo</code> command that does something special...
                </p>
                <p>
                    Also, have you tried <code>cat about.txt</code>?
                </p>
            </div>
        </EditorLayout>
    );
};

export default Readme;
