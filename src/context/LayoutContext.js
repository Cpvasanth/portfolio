"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';

const LayoutContext = createContext();

export const useLayout = () => useContext(LayoutContext);

export const LayoutProvider = ({ children }) => {
    const [isTerminalOpen, setIsTerminalOpen] = useState(true);
    const [isFullscreen, setIsFullscreen] = useState(false);

    const toggleTerminal = () => setIsTerminalOpen(prev => !prev);

    const toggleFullscreen = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().then(() => {
                setIsFullscreen(true);
            }).catch(err => {
                console.error(`Error attempting to enable fullscreen: ${err.message}`);
            });
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
                setIsFullscreen(false);
            }
        }
    };

    // Listen for fullscreen change events (e.g. user presses Esc)
    useEffect(() => {
        const handleFullscreenChange = () => {
            setIsFullscreen(!!document.fullscreenElement);
        };

        document.addEventListener('fullscreenchange', handleFullscreenChange);
        return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
    }, []);

    return (
        <LayoutContext.Provider value={{
            isTerminalOpen,
            setIsTerminalOpen,
            toggleTerminal,
            isFullscreen,
            toggleFullscreen
        }}>
            {children}
        </LayoutContext.Provider>
    );
};
