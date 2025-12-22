"use client";
import React, { useState, useEffect } from 'react';
import styles from '../styles/mobile-warning.module.css';
import { VscWarning, VscClose } from 'react-icons/vsc';

const MobileWarning = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            // Check session storage to see if user already dismissed it
            const dismissed = sessionStorage.getItem('mobile-warning-dismissed');
            if (!dismissed && window.innerWidth <= 768) {
                setIsVisible(true);
            }
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const handleClose = () => {
        setIsVisible(false);
        sessionStorage.setItem('mobile-warning-dismissed', 'true');
    };

    if (!isVisible) return null;

    return (
        <div className={styles.warningContainer}>
            <VscWarning className={styles.icon} />
            <p className={styles.text}>For the best experience, visit this site on a desktop.</p>
            <button onClick={handleClose} className={styles.closeButton}>
                <VscClose />
            </button>
        </div>
    );
};

export default MobileWarning;
