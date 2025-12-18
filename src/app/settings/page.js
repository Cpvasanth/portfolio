"use client";
import React from 'react';
import styles from '../../styles/settings.module.css';
import EditorLayout from '../../components/Layout/EditorLayout';
import { useSettings } from '../../context/SettingsContext';

const Settings = () => {
    const { theme, setTheme, fontSize, setFontSize, wordWrap, setWordWrap } = useSettings();

    return (
        <EditorLayout>
            <div className={styles.settingsContainer}>
                <div className={styles.header}>
                    <h1>Settings</h1>
                    <input
                        type="text"
                        placeholder="Search settings"
                        className={styles.searchBar}
                    />
                </div>

                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>Commonly Used</h2>

                    <div className={styles.settingItem}>
                        <label className={styles.settingLabel}>Workbench: Color Theme</label>
                        <p className={styles.settingDescription}>Specifies the color theme used in the workbench.</p>
                        <select
                            value={theme}
                            onChange={(e) => setTheme(e.target.value)}
                            className={styles.select}
                        >
                            <option value="dark">Dark+ (Default Dark)</option>
                            {/* <option value="light">Light+ (Default Light)</option> */}
                            <option value="high-contrast">High Contrast</option>
                            <option value="blue">Night Blue</option>
                            <option value="monokai">Monokai</option>
                            <option value="github-dark">GitHub Dark</option>
                            <option value="solarized-light">Solarized Light</option>
                            <option value="dracula">Dracula</option>
                        </select>
                    </div>

                    <div className={styles.settingItem}>
                        <label className={styles.settingLabel}>Editor: Font Size</label>
                        <p className={styles.settingDescription}>Controls the font size in pixels.</p>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <input
                                type="range"
                                min="10"
                                max="24"
                                value={fontSize}
                                onChange={(e) => setFontSize(parseInt(e.target.value))}
                                className={styles.rangeInput}
                            />
                            <span className={styles.numberDisplay}>{fontSize}px</span>
                        </div>
                    </div>
                </div>

                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>Text Editor</h2>
                    <div className={styles.settingItem}>
                        <label className={styles.settingLabel}>Editor: Word Wrap</label>
                        <p className={styles.settingDescription}>Controls how lines should wrap.</p>
                        <select
                            className={styles.select}
                            value={wordWrap}
                            onChange={(e) => setWordWrap(e.target.value)}
                        >
                            <option value="off">off</option>
                            <option value="on">on</option>
                            <option value="wordWrapColumn">wordWrapColumn</option>
                            <option value="bounded">bounded</option>
                        </select>
                    </div>
                </div>
            </div>
        </EditorLayout>
    );
};

export default Settings;
