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
                    <li><strong>Framework:</strong> Next.js 16 (App Router)</li>
                    <li><strong>Styling:</strong> CSS Modules (Theme-aware CSS variables)</li>
                    <li><strong>Icons:</strong> React Icons (VSC & Simple Icons)</li>
                    <li><strong>Deploy:</strong> Vercel</li>
                </ul>

                <h2>Features</h2>
                <h3>Core UI/UX</h3>
                <ul>
                    <li><strong>Authentic Layout:</strong> Title Bar, Activity Bar, Sidebar, Editor Area, Status Bar, and Terminal.</li>
                    <li><strong>Themes:</strong> 8+ themes including Dark+, Light+, Monokai, Dracula, GitHub Dark, and more.</li>
                    <li><strong>Responsive Design:</strong> Mobile-friendly layout with collapsible sidebars and touch optimizations.</li>
                </ul>

                <h3>Navigation & Tabs System</h3>
                <ul>
                    <li><strong>Closable Tabs:</strong> Manage your workspace by opening and closing multiple file tabs.</li>
                    <li><strong>Dynamic Navigation:</strong> Open files from Explorer, Activity Bar, or Command Palette.</li>
                    <li><strong>State Persistence:</strong> Tabs and active file state are preserved during navigation.</li>
                    <li><strong>Breadcrumbs:</strong> Fully functional breadcrumb navigation bar.</li>
                </ul>

                <h3>Interactive Terminal</h3>
                <ul>
                    <li><strong>Functional Shell:</strong> Type <code>help</code> to discover commands.</li>
                    <li><strong>Resizable Pane:</strong> Drag the top border to resize the terminal height.</li>
                    <li><strong>Games:</strong>
                        <ul>
                            <li>🐍 <strong>Snake Game:</strong> Type <code>snake</code> to play a fully functional Snake game in the terminal.</li>
                            <li>🔢 <strong>Number Guessing:</strong> Type <code>guess</code> to challenge yourself with a number guessing game.</li>
                        </ul>
                    </li>
                    <li><strong>Easter Eggs:</strong> Try commands like <code>sudo hire_me</code> or <code>motivate-me</code>.</li>
                </ul>

                <h3>Editor Features</h3>
                <ul>
                    <li><strong>Settings:</strong> Customize Font Size, toggle Minimap, and switch Themes via <code>/settings</code>.</li>
                    <li><strong>Command Palette:</strong> Press <code>F1</code> or <code>Ctrl+Shift+P</code> (on desktop) to access quick commands.</li>
                    <li><strong>Minimap:</strong> A visual overview of the code (toggleable).</li>
                    <li><strong>Split View:</strong> Toggle split editor mode for side-by-side viewing.</li>
                </ul>

                <h3>Professional Features</h3>
                <ul>
                    <li><strong>Recruiter Mode:</strong> A condensed view for quick access to Resume and key info.</li>
                    <li><strong>Hire Me Form:</strong> Functional contact form with project type selection (Web Dev, DApps, etc.).</li>
                    <li><strong>Project Showcase:</strong> Detailed project listings with links and descriptions.</li>
                    <li><strong>Blockchain Section:</strong> Dedicated area for Solidity and Smart Contract projects.</li>
                </ul>

                <h2>Keyboard Shortcuts</h2>
                <ul>
                    <li><code>Ctrl + `</code> : Toggle Terminal</li>
                    <li><code>Ctrl + B</code> : Toggle Sidebar</li>
                    <li><code>F1</code> : Open Command Palette</li>
                </ul>
            </div>
        </EditorLayout>
    );
};

export default Readme;
