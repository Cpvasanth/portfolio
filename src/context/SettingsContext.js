"use client";
import React, { createContext, useState, useEffect, useContext } from 'react';

const SettingsContext = createContext();

export const useSettings = () => useContext(SettingsContext);

export const SettingsProvider = ({ children }) => {
    const [theme, setTheme] = useState('dark');
    const [fontSize, setFontSize] = useState(14);
    const [wordWrap, setWordWrap] = useState('on');
    const [minimap, setMinimap] = useState('on');

    useEffect(() => {
        const savedTheme = localStorage.getItem('vscode-theme');
        const savedFontSize = localStorage.getItem('vscode-font-size');
        const savedWordWrap = localStorage.getItem('vscode-word-wrap');
        const savedMinimap = localStorage.getItem('vscode-minimap');

        if (savedTheme) setTheme(savedTheme);
        if (savedFontSize) setFontSize(parseInt(savedFontSize));
        if (savedWordWrap) setWordWrap(savedWordWrap);
        if (savedMinimap) setMinimap(savedMinimap);
    }, []);

    useEffect(() => {
        document.body.className = `theme-${theme}`;
        localStorage.setItem('vscode-theme', theme);
    }, [theme]);

    useEffect(() => {
        if (typeof document !== 'undefined') {
            document.documentElement.style.setProperty('--editor-font-size', `${fontSize}px`);
        }
        localStorage.setItem('vscode-font-size', fontSize);
    }, [fontSize]);

    useEffect(() => {
        localStorage.setItem('vscode-word-wrap', wordWrap);
    }, [wordWrap]);

    useEffect(() => {
        localStorage.setItem('vscode-minimap', minimap);
    }, [minimap]);

    return (
        <SettingsContext.Provider value={{
            theme, setTheme,
            fontSize, setFontSize,
            wordWrap, setWordWrap,
            minimap, setMinimap
        }}>
            {children}
        </SettingsContext.Provider>
    );
};
