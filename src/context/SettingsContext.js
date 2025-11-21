"use client";
import React, { createContext, useState, useEffect, useContext } from 'react';

const SettingsContext = createContext();

export const useSettings = () => useContext(SettingsContext);

export const SettingsProvider = ({ children }) => {
    const [theme, setTheme] = useState('dark');
    const [fontSize, setFontSize] = useState(14);

    useEffect(() => {
        const savedTheme = localStorage.getItem('vscode-theme');
        const savedFontSize = localStorage.getItem('vscode-font-size');

        if (savedTheme) setTheme(savedTheme);
        if (savedFontSize) setFontSize(parseInt(savedFontSize));
    }, []);

    useEffect(() => {
        document.body.className = `theme-${theme}`;
        localStorage.setItem('vscode-theme', theme);
    }, [theme]);

    useEffect(() => {
        document.documentElement.style.fontSize = `${fontSize}px`;
        localStorage.setItem('vscode-font-size', fontSize);
    }, [fontSize]);

    return (
        <SettingsContext.Provider value={{ theme, setTheme, fontSize, setFontSize }}>
            {children}
        </SettingsContext.Provider>
    );
};
