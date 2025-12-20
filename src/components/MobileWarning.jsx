"use client";
import React, { useState, useEffect } from 'react';
import styles from '../styles/mobile-warning.module.css';
import { VscWarning, VscClose } from 'react-icons/vsc';

const MobileWarning = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            if (window.innerWidth <= 768) {
                setIsVisible(true);
                const timer = setTimeout(() => {
                    setIsVisible(false);
                }, 10000); // 10 seconds
                return () => clearTimeout(timer);
            }
        };

        checkMobile();
        // Also re-check on resize in case browser tools are used to simulate mobile
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    if (!isVisible) return null;

    return (
        <div className={styles.warningContainer}>
            <VscWarning className={styles.icon} />
            <p className={styles.text}>For the best experience, visit this site on a desktop.</p>
            <button onClick={() => setIsVisible(false)} className={styles.closeButton}>
                <VscClose />
            </button>
        </div>
    );
};

export default MobileWarning;
