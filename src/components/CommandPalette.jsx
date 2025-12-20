"use client";
import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useLayout } from '../context/LayoutContext';
import { useSettings } from '../context/SettingsContext';
import styles from '../styles/command-palette.module.css';

const COMMANDS = [
    { id: 'go-home', title: '> Go to Home', category: 'Navigation', action: (router, layout) => { layout.openTab({ name: 'home.jsx', path: '/', icon: 'home.jsx' }); router.push('/'); } },
    { id: 'go-about', title: '> Go to About Author', category: 'Navigation', action: (router, layout) => { layout.openTab({ name: 'about.html', path: '/about', icon: 'about.html' }); router.push('/about'); } },
    { id: 'go-projects', title: '> Go to Projects', category: 'Navigation', action: (router, layout) => { layout.openTab({ name: 'project.js', path: '/project', icon: 'project.js' }); router.push('/project'); } },
    { id: 'go-contact', title: '> Go to Contact', category: 'Navigation', action: (router, layout) => { layout.openTab({ name: 'contact.css', path: '/contact', icon: 'contact.css' }); router.push('/contact'); } },
    { id: 'go-recruiter', title: '> Go to Recruiter Mode', category: 'Navigation', action: (router, layout) => { layout.openTab({ name: 'resume.pdf', path: '/recruiter', icon: 'resume.pdf' }); router.push('/recruiter'); } },
    { id: 'go-settings', title: '> Go to Settings', category: 'Navigation', action: (router, layout) => { layout.openTab({ name: 'settings', path: '/settings', icon: 'setting-5-svgrepo-com.svg' }); router.push('/settings'); } },
    { id: 'toggle-terminal', title: '> Toggle Terminal', category: 'View', action: (router, layout) => layout.toggleTerminal() },
    { id: 'toggle-fullscreen', title: '> Toggle Full Screen', category: 'View', action: (router, layout) => layout.toggleFullscreen() },
    { id: 'toggle-split', title: '> Toggle Split View', category: 'View', action: (router, layout) => layout.toggleSplitView() },
    { id: 'toggle-minimap', title: '> Toggle Minimap', category: 'View', action: (router, layout, settings) => settings.setMinimap(prev => prev === 'on' ? 'off' : 'on') },
    { id: 'theme-dark', title: '> Change Theme: Dark', category: 'Theme', action: (router, layout, settings) => settings.setTheme('dark') },
    { id: 'theme-monokai', title: '> Change Theme: Monokai', category: 'Theme', action: (router, layout, settings) => settings.setTheme('monokai') },
    { id: 'theme-blue', title: '> Change Theme: Blue', category: 'Theme', action: (router, layout, settings) => settings.setTheme('blue') },
    { id: 'theme-light', title: '> Change Theme: Light', category: 'Theme', action: (router, layout, settings) => settings.setTheme('light') },
    {
        id: 'download-resume', title: '> Download Resume', category: 'File', action: () => {
            const link = document.createElement('a');
            link.href = '/Vasanthakumar_Resume.pdf';
            link.download = 'Vasanthakumar_Resume.pdf';
            link.click();
        }
    },
];

export default function CommandPalette() {
    const { isCommandPaletteOpen, setIsCommandPaletteOpen } = useLayout();
    const layout = useLayout();
    const settings = useSettings();
    const router = useRouter();
    const [search, setSearch] = useState('');
    const [activeIndex, setActiveIndex] = useState(0);
    const inputRef = useRef(null);

    const filteredCommands = COMMANDS.filter(cmd =>
        cmd.title.toLowerCase().includes(search.toLowerCase())
    );

    useEffect(() => {
        if (isCommandPaletteOpen) {
            setSearch('');
            setActiveIndex(0);
            setTimeout(() => inputRef.current?.focus(), 50);
        }
    }, [isCommandPaletteOpen]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === 'p') {
                e.preventDefault();
                setIsCommandPaletteOpen(prev => !prev);
            } else if (e.key === 'F1') {
                e.preventDefault();
                setIsCommandPaletteOpen(prev => !prev);
            } else if (e.key === 'Escape' && isCommandPaletteOpen) {
                setIsCommandPaletteOpen(false);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isCommandPaletteOpen, setIsCommandPaletteOpen]);

    if (!isCommandPaletteOpen) return null;

    const handleSelect = (cmd) => {
        cmd.action(router, layout, settings);
        setIsCommandPaletteOpen(false);
    };

    const onKeyDown = (e) => {
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            setActiveIndex(prev => (prev + 1) % filteredCommands.length);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            setActiveIndex(prev => (prev - 1 + filteredCommands.length) % filteredCommands.length);
        } else if (e.key === 'Enter') {
            if (filteredCommands[activeIndex]) {
                handleSelect(filteredCommands[activeIndex]);
            }
        }
    };

    return (
        <div className={styles.overlay} onClick={() => setIsCommandPaletteOpen(false)}>
            <div className={styles.commandPalette} onClick={e => e.stopPropagation()}>
                <div className={styles.inputContainer}>
                    <input
                        ref={inputRef}
                        className={styles.input}
                        placeholder="Type a command to run..."
                        value={search}
                        onChange={e => { setSearch(e.target.value); setActiveIndex(0); }}
                        onKeyDown={onKeyDown}
                        aria-label="Command palette input"
                    />
                </div>
                <div className={styles.list}>
                    {filteredCommands.length > 0 ? (
                        filteredCommands.map((cmd, index) => (
                            <div
                                key={cmd.id}
                                className={`${styles.item} ${index === activeIndex ? styles.activeItem : ''}`}
                                onClick={() => handleSelect(cmd)}
                                onMouseEnter={() => setActiveIndex(index)}
                            >
                                <span className={styles.commandName}>{cmd.title}</span>
                                <span className={styles.shortcut}>{cmd.category}</span>
                            </div>
                        ))
                    ) : (
                        <div className={styles.empty}>No matching commands found.</div>
                    )}
                </div>
            </div>
        </div>
    );
}
