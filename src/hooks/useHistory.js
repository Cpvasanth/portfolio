import { useState, useCallback, useEffect } from 'react';

const useHistory = (initialState, key) => {
    const [state, setState] = useState(initialState);
    const [history, setHistory] = useState([initialState]);
    const [pointer, setPointer] = useState(0);

    // Load from localStorage on mount
    useEffect(() => {
        if (key) {
            const saved = localStorage.getItem(key);
            if (saved) {
                try {
                    const parsed = JSON.parse(saved);
                    setState(parsed);
                    setHistory([parsed]);
                    setPointer(0);
                } catch (e) {
                    console.error("Failed to load history", e);
                }
            }
        }
    }, [key]);

    const set = useCallback((newState) => {
        const value = typeof newState === 'function' ? newState(state) : newState;

        if (key) {
            localStorage.setItem(key, JSON.stringify(value));
        }

        const nextHistory = [...history.slice(0, pointer + 1), value];
        setHistory(nextHistory);
        setPointer(nextHistory.length - 1);
        setState(value);
    }, [state, history, pointer, key]);

    const undo = useCallback(() => {
        if (pointer > 0) {
            const prevPointer = pointer - 1;
            setPointer(prevPointer);
            setState(history[prevPointer]);
            if (key) localStorage.setItem(key, JSON.stringify(history[prevPointer]));
        }
    }, [history, pointer, key]);

    const redo = useCallback(() => {
        if (pointer < history.length - 1) {
            const nextPointer = pointer + 1;
            setPointer(nextPointer);
            setState(history[nextPointer]);
            if (key) localStorage.setItem(key, JSON.stringify(history[nextPointer]));
        }
    }, [history, pointer, key]);

    return [state, set, undo, redo, pointer > 0, pointer < history.length - 1];
};

export default useHistory;
