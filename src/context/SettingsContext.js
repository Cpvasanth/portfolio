"use client";
import React, { createContext, useState, useEffect, useContext } from 'react';

const SettingsContext = createContext();

export const useSettings = () => useContext(SettingsContext);

export const SettingsProvider = ({ children }) => {
    const [theme, setTheme] = useState('dark');
    const [fontSize, setFontSize] = useState(14);
    const [wordWrap, setWordWrap] = useState('off');

    useEffect(() => {
        const savedTheme = localStorage.getItem('vscode-theme');
        const savedFontSize = localStorage.getItem('vscode-font-size');
        const savedWordWrap = localStorage.getItem('vscode-word-wrap');

        if (savedTheme) setTheme(savedTheme);
        if (savedFontSize) setFontSize(parseInt(savedFontSize));
        if (savedWordWrap) setWordWrap(savedWordWrap);
    }, []);

    useEffect(() => {
        document.body.className = `theme-${theme}`;
        localStorage.setItem('vscode-theme', theme);
    }, [theme]);

    useEffect(() => {
        // document.documentElement.style.fontSize = `${fontSize}px`; // This might break other things if they rely on rem, but let's keep it or remove it if we apply directly. 
        // Actually, user said "font size changing... is not working". 
        // If I apply it directly to components, I don't strictly need this, but it doesn't hurt unless it messes up layout.
        // Let's keep it for now but focus on component usage.
        localStorage.setItem('vscode-font-size', fontSize);
    }, [fontSize]);

    useEffect(() => {
        localStorage.setItem('vscode-word-wrap', wordWrap);
    }, [wordWrap]);

    return (
        <SettingsContext.Provider value={{ theme, setTheme, fontSize, setFontSize, wordWrap, setWordWrap }}>
            {children}
        </SettingsContext.Provider>
    );
};
