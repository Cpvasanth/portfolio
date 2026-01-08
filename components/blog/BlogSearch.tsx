"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useCallback, useState, useEffect, useRef } from "react";
import { FiSearch, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export default function BlogSearch() {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
    const [isFocused, setIsFocused] = useState(false);
    const [searchValue, setSearchValue] = useState(searchParams.get('search') || '');
    const inputRef = useRef<HTMLInputElement>(null);
    const debounceRef = useRef<any>(null);

    const handleSearch = useCallback((term: string) => {
        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set('search', term);
        } else {
            params.delete('search');
        }
        replace(`${pathname}?${params.toString()}`, { scroll: false });
    }, [searchParams, pathname, replace]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchValue(value);

        // Debounce search
        if (debounceRef.current) {
            clearTimeout(debounceRef.current);
        }
        debounceRef.current = setTimeout(() => handleSearch(value), 400);
    };

    const clearSearch = () => {
        setSearchValue('');
        handleSearch('');
        inputRef.current?.focus();
    };

    // Keyboard shortcut (Cmd/Ctrl + K)
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                inputRef.current?.focus();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative w-full mb-12"
        >
            <div
                className={`
                    relative flex items-center px-6 py-4 rounded-2xl transition-all duration-400
                    bg-white border shadow-sm
                    ${isFocused
                        ? 'border-indigo-500/50 shadow-[0_0_30px_-5px_rgba(99,102,241,0.15)] ring-1 ring-indigo-500/20'
                        : 'border-gray-200 hover:border-indigo-300 hover:shadow-md'
                    }
                `}
            >
                {/* Search Icon */}
                <FiSearch
                    className={`w-5 h-5 mr-4 flex-shrink-0 transition-colors duration-300 ${isFocused ? 'text-indigo-500' : 'text-gray-400'
                        }`}
                />

                {/* Input */}
                <input
                    ref={inputRef}
                    type="text"
                    placeholder="Search articles, topics, and insights..."
                    className="flex-1 bg-transparent outline-none text-gray-900 placeholder-gray-400 text-base"
                    value={searchValue}
                    onChange={handleInputChange}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                />

                {/* Clear Button */}
                <AnimatePresence>
                    {searchValue && (
                        <motion.button
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            onClick={clearSearch}
                            className="p-1.5 mr-3 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-700 transition-all"
                        >
                            <FiX className="w-4 h-4" />
                        </motion.button>
                    )}
                </AnimatePresence>

                {/* Keyboard Shortcut Badge */}
                <div className={`
                    hidden md:flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-300
                    ${isFocused
                        ? 'bg-indigo-50 text-indigo-600 border border-indigo-100'
                        : 'bg-gray-100 text-gray-500 border border-gray-200'
                    }
                `}>
                    <span className="text-[10px]">⌘</span>
                    <span>K</span>
                </div>
            </div>

            {/* Glow Effect */}
            {isFocused && (
                <div className="absolute inset-0 -z-10 rounded-2xl bg-indigo-500/5 blur-xl" />
            )}
        </motion.div>
    );
}
