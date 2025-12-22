"use client";
import { createContext, useContext, useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const LayoutContext = createContext();

export const useLayout = () => useContext(LayoutContext);

const tabData = {
    '/': { name: 'home.jsx', path: '/', icon: 'home.jsx' },
    '/about': { name: 'about.html', path: '/about', icon: 'about.html' },
    '/contact': { name: 'contact.css', path: '/contact', icon: 'contact.css' },
    '/project': { name: 'project.js', path: '/project', icon: 'project.js' },
    '/github': { name: 'github.json', path: '/github', icon: 'github.json' },
    '/readme': { name: 'readme.md', path: '/readme', icon: 'readme.md' },
    '/recruiter': { name: 'resume.pdf', path: '/recruiter', icon: 'resume.pdf' },
    '/hire': { name: 'hire.txt', path: '/hire', icon: 'hire.txt' },
    '/blockchain': { name: 'overview.sol', path: '/blockchain', icon: 'overview.sol' },
    '/blockchain/projects': { name: 'projects.sol', path: '/blockchain/projects', icon: 'projects.sol' },
    '/settings': { name: 'settings', path: '/settings', icon: 'setting-5-svgrepo-com.svg' },
};

export const LayoutProvider = ({ children }) => {
    const pathname = usePathname();
    const [isTerminalOpen, setIsTerminalOpen] = useState(true);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [isSplitView, setIsSplitView] = useState(false);
    const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [openTabs, setOpenTabs] = useState([
        { name: 'home.jsx', path: '/', icon: 'home.jsx' },
    ]);

    useEffect(() => {
        // Sync openTabs with current pathname on initial load and navigation
        if (pathname && tabData[pathname]) {
            setOpenTabs(prev => {
                const exists = prev.find(t => t.path === pathname);
                if (exists) return prev;
                return [...prev, tabData[pathname]];
            });
        }
    }, [pathname]); // Sync on navigation

    useEffect(() => {
        if (typeof window !== 'undefined' && window.innerWidth <= 768) {
            setIsTerminalOpen(false);
        }
    }, []);

    const toggleTerminal = () => setIsTerminalOpen(prev => !prev);
    const toggleSplitView = () => setIsSplitView(prev => !prev);
    const toggleCommandPalette = () => setIsCommandPaletteOpen(prev => !prev);

    const closeTab = (path) => {
        setOpenTabs(prev => prev.filter(tab => tab.path !== path));
    };

    const openTabByPath = (path) => {
        const tab = tabData[path];
        if (tab) {
            setOpenTabs(prev => {
                if (prev.find(t => t.path === path)) return prev;
                return [...prev, tab];
            });
        }
    };

    const openTab = (tab) => {
        setOpenTabs(prev => {
            if (prev.find(t => t.path === tab.path)) return prev;
            return [...prev, tab];
        });
    };

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
            toggleFullscreen,
            isSplitView,
            setIsSplitView,
            toggleSplitView,
            isCommandPaletteOpen,
            setIsCommandPaletteOpen,
            toggleCommandPalette,
            openTabs,
            openTab,
            openTabByPath,
            closeTab,
            mobileMenuOpen,
            toggleMobileMenu: () => setMobileMenuOpen(prev => !prev),
            setMobileMenuOpen
        }}>
            {children}
        </LayoutContext.Provider>
    );
};
