"use client";
import React, { useState, useRef, useEffect } from "react";
import styles from "../styles/terminal.module.css";
import { useRouter } from "next/navigation";
import { useLayout } from "../context/LayoutContext";
import { useSettings } from "../context/SettingsContext";
import SnakeGame from "./SnakeGame";

export default function Terminal() {
    const { isTerminalOpen, setIsTerminalOpen } = useLayout();
    const { setTheme } = useSettings();
    const [activeTab, setActiveTab] = useState('TERMINAL');
    const [input, setInput] = useState("");
    const [gameMode, setGameMode] = useState(null); // null, 'snake', 'guess'
    const [guessState, setGuessState] = useState({ target: 0, attempts: 0 });
    const [height, setHeight] = useState(300);
    const [isResizing, setIsResizing] = useState(false);

    const [history, setHistory] = useState([
        { type: 'output', content: 'Microsoft Windows [Version 10.0.19045.3693]' },
        { type: 'output', content: '(c) Microsoft Corporation. All rights reserved.' },
        { type: 'output', content: '' },
        { type: 'output', content: 'Try typing "help" to see available commands.' },
    ]);
    const bottomRef = useRef(null);
    const inputRef = useRef(null);
    const router = useRouter();

    useEffect(() => {
        if (bottomRef.current) {
            bottomRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [history, isTerminalOpen, activeTab, gameMode]);

    // Focus input when terminal opens
    useEffect(() => {
        if (isTerminalOpen && activeTab === 'TERMINAL' && inputRef.current && !gameMode) {
            inputRef.current.focus();
        }
    }, [isTerminalOpen, activeTab, gameMode]);

    // Resize logic
    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!isResizing) return;
            const newHeight = window.innerHeight - e.clientY - 22; // 22px for status bar usually or bottom offset
            // Constrain height
            if (newHeight >= 100 && newHeight <= window.innerHeight - 100) {
                setHeight(newHeight);
            }
        };

        const handleMouseUp = () => {
            setIsResizing(false);
            document.body.style.cursor = 'default';
        };

        if (isResizing) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleMouseUp);
            document.body.style.cursor = 'ns-resize';
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
            document.body.style.cursor = 'default';
        };
    }, [isResizing]);

    const startResizing = (e) => {
        e.preventDefault();
        setIsResizing(true);
    };

    const handleCommand = async (cmd) => {
        const trimmedCmd = cmd.trim().toLowerCase();

        // Handle input for text-based games
        if (gameMode === 'guess') {
            const newHistory = [...history, { type: 'input', content: cmd }];

            if (trimmedCmd === 'quit' || trimmedCmd === 'exit') {
                newHistory.push({ type: 'output', content: 'Exiting Guessing Game...' });
                setGameMode(null);
                setHistory(newHistory);
                setInput("");
                return;
            }

            const guess = parseInt(trimmedCmd);
            if (isNaN(guess)) {
                newHistory.push({ type: 'output', content: 'Please enter a valid number or type "quit" to exit.' });
            } else {
                setGuessState(prev => ({ ...prev, attempts: prev.attempts + 1 }));
                if (guess === guessState.target) {
                    newHistory.push({ type: 'output', content: `🎉 Correct! You found the number ${guessState.target} in ${guessState.attempts + 1} attempts!` });
                    setGameMode(null);
                } else if (guess < guessState.target) {
                    newHistory.push({ type: 'output', content: 'Too low! Try again.' });
                } else {
                    newHistory.push({ type: 'output', content: 'Too high! Try again.' });
                }
            }
            setHistory(newHistory);
            setInput("");
            return;
        }

        const newHistory = [...history, { type: 'input', content: cmd }];

        switch (trimmedCmd) {
            case 'help':
                newHistory.push({ type: 'output', content: 'Available commands:' });
                newHistory.push({ type: 'output', content: '  projects     - View my projects' });
                newHistory.push({ type: 'output', content: '  contact      - Get in touch' });
                newHistory.push({ type: 'output', content: '  resume       - Download my resume' });
                newHistory.push({ type: 'output', content: '  snake        - Play Snake Game 🐍' });
                newHistory.push({ type: 'output', content: '  guess        - Play Number Guessing Game 🔢' });
                newHistory.push({ type: 'output', content: '  clear        - Clear terminal' });
                break;
            case 'projects':
                newHistory.push({ type: 'output', content: 'Navigating to Projects...' });
                router.push('/project');
                break;
            case 'contact':
                newHistory.push({ type: 'output', content: 'Navigating to Contact...' });
                router.push('/contact');
                break;
            case 'resume':
                newHistory.push({ type: 'output', content: 'Downloading resume...' });
                const link = document.createElement('a');
                link.href = '/Vasanthakumar_Resume.pdf';
                link.download = 'Vasanthakumar_Resume.pdf';
                link.click();
                break;
            case 'snake':
                setGameMode('snake');
                newHistory.push({ type: 'output', content: 'Starting Snake... (Press ESC or Q to quit)' });
                break;
            case 'guess':
                setGameMode('guess');
                setGuessState({ target: Math.floor(Math.random() * 100) + 1, attempts: 0 });
                newHistory.push({ type: 'output', content: 'I have picked a number between 1 and 100.' });
                newHistory.push({ type: 'output', content: 'Can you guess what it is? (Type "quit" to exit)' });
                break;
            case 'clear':
                setHistory([]);
                setInput("");
                return;
            case 'motivate-me':
                newHistory.push({ type: 'output', content: '"The only way to do great work is to love what you do." - Steve Jobs' });
                break;
            case 'sudo hire_me':
                newHistory.push({ type: 'output', content: 'Access Granted. Initiating hiring protocol...' });
                newHistory.push({ type: 'output', content: 'Please contact me at cpvasanth@proton.me' });
                break;
            case 'cat about.txt':
                newHistory.push({ type: 'output', content: 'I am a passionate Software Developer...' });
                router.push('/about');
                break;
            case 'hire':
                newHistory.push({ type: 'output', content: '🎉 WOOHOO! Let\'s build something amazing together! 🎉' });
                const confetti = (await import("canvas-confetti")).default;
                confetti({
                    particleCount: 100,
                    spread: 70,
                    origin: { y: 0.6 }
                });
                break;
            case '':
                break;
            case 'recruiter':
                newHistory.push({ type: 'output', content: 'Opening Recruiter Mode...' });
                router.push('/recruiter');
                break;
            default:
                if (trimmedCmd.startsWith('mode -')) {
                    const theme = trimmedCmd.split('-')[1];
                    const validThemes = ['dark', 'light', 'high-contrast', 'blue', 'monokai', 'github-dark', 'solarized-light', 'dracula'];

                    if (validThemes.includes(theme)) {
                        newHistory.push({ type: 'output', content: `Switching theme to ${theme}...` });
                        setTheme(theme);
                    } else {
                        newHistory.push({ type: 'output', content: `Theme '${theme}' not found. Available themes: ${validThemes.join(', ')}` });
                    }
                } else {
                    newHistory.push({ type: 'output', content: `'${cmd}' is not recognized as an internal or external command.` });
                }
        }

        setHistory(newHistory);
        setInput("");
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleCommand(input);
        }
    };

    return (
        <div
            className={`${styles.terminal} ${isTerminalOpen ? styles.open : ''}`}
            style={{
                height: isTerminalOpen ? `${height}px` : '0px',
                visibility: isTerminalOpen ? 'visible' : 'hidden'
            }}
        >
            <div className={styles.resizeHandle} onMouseDown={startResizing} />
            <div className={styles.tabs}>
                <div
                    className={`${styles.tab} ${activeTab === 'PROBLEMS' ? styles.active : ''}`}
                    onClick={() => setActiveTab('PROBLEMS')}
                >
                    PROBLEMS
                </div>
                <div
                    className={`${styles.tab} ${activeTab === 'OUTPUT' ? styles.active : ''}`}
                    onClick={() => setActiveTab('OUTPUT')}
                >
                    OUTPUT
                </div>
                <div
                    className={`${styles.tab} ${activeTab === 'DEBUG CONSOLE' ? styles.active : ''}`}
                    onClick={() => setActiveTab('DEBUG CONSOLE')}
                >
                    DEBUG CONSOLE
                </div>
                <div
                    className={`${styles.tab} ${activeTab === 'TERMINAL' ? styles.active : ''}`}
                    onClick={() => setActiveTab('TERMINAL')}
                >
                    TERMINAL
                </div>
                <div className={styles.actions}>
                    <span className={styles.actionBtn} onClick={() => setIsTerminalOpen(false)}>×</span>
                </div>
            </div>
            <div className={styles.body} onClick={() => !gameMode && inputRef.current?.focus()}>
                {activeTab === 'TERMINAL' ? (
                    <>
                        {history.map((line, index) => (
                            <div key={index} className={styles.line}>
                                {line.type === 'input' ? (
                                    <>
                                        <span className={styles.prompt}>C:\Users\cpvasanth&gt;</span>
                                        <span>{line.content}</span>
                                    </>
                                ) : (
                                    <span className={styles.output}>{line.content}</span>
                                )}
                            </div>
                        ))}

                        {gameMode === 'snake' ? (
                            <div className={styles.gameContainer}>
                                <SnakeGame onExit={() => {
                                    setGameMode(null);
                                    setHistory(prev => [...prev, { type: 'output', content: 'Snake Game finished.' }]);
                                }} />
                            </div>
                        ) : (
                            <div className={styles.inputLine}>
                                <span className={styles.prompt}>
                                    {gameMode === 'guess' ? 'GUESS>' : 'C:\\Users\\cpvasanth>'}
                                </span>
                                <input
                                    ref={inputRef}
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                    className={styles.input}
                                    spellCheck="false"
                                    autoComplete="off"
                                    aria-label="Terminal input"
                                />
                            </div>
                        )}
                        <div ref={bottomRef} />
                    </>
                ) : (
                    <div style={{ padding: '10px', color: 'var(--vscode-text-secondary)' }}>
                        {activeTab === 'PROBLEMS' && "No problems have been detected in the workspace."}
                        {activeTab === 'OUTPUT' && "No output to display."}
                        {activeTab === 'DEBUG CONSOLE' && "Debugging is not active."}
                    </div>
                )}
            </div>
        </div>
    );
}
