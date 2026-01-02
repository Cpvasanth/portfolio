"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type ScrollTheme = string;

interface ScrollThemeContextType {
    scrollTheme: ScrollTheme;
    setScrollTheme: (theme: ScrollTheme) => void;
}

const ScrollThemeContext = createContext<ScrollThemeContextType | undefined>(
    undefined
);

export function ScrollThemeProvider({ children }: { children: ReactNode }) {
    const [scrollTheme, setScrollTheme] = useState<ScrollTheme>("light");

    return (
        <ScrollThemeContext.Provider value={{ scrollTheme, setScrollTheme }}>
            {children}
        </ScrollThemeContext.Provider>
    );
}

export function useScrollTheme() {
    const context = useContext(ScrollThemeContext);
    if (context === undefined) {
        throw new Error("useScrollTheme must be used within a ScrollThemeProvider");
    }
    return context;
}
