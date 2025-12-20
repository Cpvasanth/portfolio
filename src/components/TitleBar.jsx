"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import vscodeIcon from "../assets/visual-studio-code.png";
import {
    VscChromeMinimize,
    VscChromeRestore,
    VscChromeClose,
    VscSplitHorizontal
} from "react-icons/vsc";
import styles from "../styles/titlebar.module.css";
import { useLayout } from "../context/LayoutContext";

export default function TitleBar() {
    const { toggleTerminal, toggleFullscreen, isFullscreen, toggleSplitView, isSplitView, toggleCommandPalette, openTabByPath } = useLayout();
    const [activeMenu, setActiveMenu] = useState(null);
    const menuRef = useRef(null);

    const handleLinkClick = (path) => {
        openTabByPath(path);
        closeMenu();
    };

    useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setActiveMenu(null);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const toggleMenu = (menuName) => {
        setActiveMenu(activeMenu === menuName ? null : menuName);
    };

    const closeMenu = () => setActiveMenu(null);

    const handleBack = () => {
        if (typeof window !== 'undefined') window.history.back();
        closeMenu();
    };

    const handleForward = () => {
        if (typeof window !== 'undefined') window.history.forward();
        closeMenu();
    };

    const handleSave = () => {
        alert("Auto-Save is enabled! Your changes are already saved.");
        closeMenu();
    };

    return (
        <div className={styles.titleBar} onDoubleClick={toggleFullscreen}>
            <div className={styles.iconContainer}>
                <Image
                    src={vscodeIcon}
                    alt="VS Code Icon"
                    width={18}
                    height={18}
                    className={styles.icon}
                />
            </div>
            <div className={styles.menuBar} ref={menuRef}>
                <div className={styles.menuItemContainer}>
                    <span onClick={() => toggleMenu('file')}>File</span>
                    {activeMenu === 'file' && (
                        <div className={styles.dropdown}>
                            <Link href="/contact" className={styles.dropdownItem} onClick={() => handleLinkClick('/contact')}>New File... (Contact)</Link>
                            <Link href="/project" className={styles.dropdownItem} onClick={() => handleLinkClick('/project')}>Open Project...</Link>
                            <button className={styles.dropdownItem} onClick={handleSave}>Save</button>
                            <div className={styles.separator}></div>
                            <Link href="/settings" className={styles.dropdownItem} onClick={() => handleLinkClick('/settings')}>Preferences</Link>
                            <div className={styles.separator}></div>
                            <a href="/Vasanthakumar_Resume.pdf" target="_blank" rel="noopener noreferrer" className={styles.dropdownItem} onClick={closeMenu}>Download Resume</a>
                            <Link href="/" className={styles.dropdownItem} onClick={() => handleLinkClick('/')}>Exit</Link>
                        </div>
                    )}
                </div>

                <div className={styles.menuItemContainer}>
                    <span onClick={() => toggleMenu('edit')}>Edit</span>
                    {activeMenu === 'edit' && (
                        <div className={styles.dropdown}>
                            <button className={styles.dropdownItem} disabled>Undo (Ctrl+Z)</button>
                            <button className={styles.dropdownItem} disabled>Redo (Ctrl+Y)</button>
                            <div className={styles.separator}></div>
                            <button className={styles.dropdownItem} disabled>Cut</button>
                            <button className={styles.dropdownItem} disabled>Copy</button>
                            <button className={styles.dropdownItem} disabled>Paste</button>
                        </div>
                    )}
                </div>

                <div className={styles.menuItemContainer}>
                    <span onClick={() => toggleMenu('selection')}>Selection</span>
                    {activeMenu === 'selection' && (
                        <div className={styles.dropdown}>
                            <button className={styles.dropdownItem} onClick={() => document.execCommand('selectAll')}>Select All</button>
                            <button className={styles.dropdownItem} disabled>Expand Selection</button>
                        </div>
                    )}
                </div>

                <div className={styles.menuItemContainer}>
                    <span onClick={() => toggleMenu('view')}>View</span>
                    {activeMenu === 'view' && (
                        <div className={styles.dropdown}>
                            <button className={styles.dropdownItem} onClick={() => { toggleCommandPalette(); closeMenu(); }}>Command Palette...</button>
                            <div className={styles.separator}></div>
                            <Link href="/project" className={styles.dropdownItem} onClick={() => handleLinkClick('/project')}>Projects</Link>
                            <Link href="/recruiter" className={styles.dropdownItem} onClick={() => handleLinkClick('/recruiter')}>Recruiter Mode</Link>
                            <div className={styles.separator}></div>
                            <button className={styles.dropdownItem} onClick={() => { toggleTerminal(); closeMenu(); }}>Toggle Terminal</button>
                            <button className={styles.dropdownItem} onClick={() => { toggleFullscreen(); closeMenu(); }}>Toggle Full Screen</button>
                        </div>
                    )}
                </div>

                <div className={styles.menuItemContainer}>
                    <span onClick={() => toggleMenu('go')}>Go</span>
                    {activeMenu === 'go' && (
                        <div className={styles.dropdown}>
                            <button className={styles.dropdownItem} onClick={handleBack}>Back</button>
                            <button className={styles.dropdownItem} onClick={handleForward}>Forward</button>
                            <div className={styles.separator}></div>
                            <Link href="/hire" className={styles.dropdownItem} onClick={() => handleLinkClick('/hire')}>Hire Me</Link>
                            <Link href="/github" className={styles.dropdownItem} onClick={() => handleLinkClick('/github')}>Go to Definition (Source)</Link>
                        </div>
                    )}
                </div>

                <div className={styles.menuItemContainer}>
                    <span onClick={toggleTerminal} style={{ cursor: 'pointer' }}>Run</span>
                </div>

                <div className={styles.menuItemContainer}>
                    <span onClick={toggleTerminal} style={{ cursor: 'pointer' }}>Terminal</span>
                </div>

                <div className={styles.menuItemContainer}>
                    <span onClick={() => toggleMenu('help')}>Help</span>
                    {activeMenu === 'help' && (
                        <div className={styles.dropdown}>
                            <Link href="/" className={styles.dropdownItem} onClick={() => handleLinkClick('/')}>Welcome</Link>
                            <div className={styles.separator}></div>
                            <Link href="/readme" className={styles.dropdownItem} onClick={() => handleLinkClick('/readme')}>Documentation</Link>
                            <Link href="/about" className={styles.dropdownItem} onClick={() => handleLinkClick('/about')}>About Author</Link>
                            <div className={styles.separator}></div>
                            <a href="https://github.com/Cpvasanth/portfolio" target="_blank" rel="noopener noreferrer" className={styles.dropdownItem} onClick={closeMenu}>View Source Code</a>
                        </div>
                    )}
                </div>
            </div>
            <div className={styles.title}>
                Vasanthakumar C - Visual Studio Code
            </div>
            <div className={styles.windowControls}>
                <div
                    className={styles.control}
                    onClick={toggleSplitView}
                    title="Split Editor Right (Ctrl+\)"
                    style={{ backgroundColor: isSplitView ? 'rgba(255, 255, 255, 0.1)' : 'transparent' }}
                >
                    <VscSplitHorizontal />
                </div>
                <div className={styles.control} title="Minimize">
                    <VscChromeMinimize />
                </div>
                <div className={styles.control} onClick={toggleFullscreen}>
                    {isFullscreen ? (
                        <VscChromeRestore />
                    ) : (
                        <svg width="12" height="12" viewBox="0 0 12 12"><rect x="2" y="2" width="8" height="8" stroke="currentColor" strokeWidth="1" fill="none" /></svg>
                    )}
                </div>
                <div className={`${styles.control} ${styles.close}`}>
                    <svg width="12" height="12" viewBox="0 0 12 12"><path d="M2 2l8 8M10 2l-8 8" stroke="currentColor" strokeWidth="1" /></svg>
                </div>
            </div>
        </div>
    );
}
