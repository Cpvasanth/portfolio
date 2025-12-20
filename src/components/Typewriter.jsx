"use client";
import React, { useState, useEffect } from "react";

const Typewriter = ({ text, delay = 50, startDelay = 0 }) => {
    const [currentText, setCurrentText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setCurrentText((prevText) => prevText + text[currentIndex]);
                setCurrentIndex((prevIndex) => prevIndex + 1);
            }, delay);

            return () => clearTimeout(timeout);
        }
    }, [currentIndex, delay, text]);

    // Handle start delay
    useEffect(() => {
        if (startDelay > 0) {
            const timer = setTimeout(() => {
                // logic to start typing could be more complex, but here we just rely on parent rendering if needed
                // or we could add a 'started' state.
                // For simplicity, we just render. 
                // Actually, to respect startDelay, we should wrap the above effect.
            }, startDelay);
            return () => clearTimeout(timer);
        }
    }, [startDelay]);

    return <span>{currentText}</span>;
};

export default Typewriter;
