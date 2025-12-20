"use client";
import React, { useState } from 'react';
import styles from '../../styles/hire.module.css';
import EditorLayout from "../../components/Layout/EditorLayout";

export default function HireContent() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        projectType: '',
        budget: '',
        message: ''
    });
    const [status, setStatus] = useState({ type: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: '', message: '' });

        try {
            const res = await fetch('/api/hire', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (res.ok) {
                setStatus({ type: 'success', message: 'Message sent successfully! I will get back to you soon.' });
                setFormData({ name: '', email: '', projectType: '', budget: '', message: '' });
            } else {
                setStatus({ type: 'error', message: data.message || 'Something went wrong. Please try again.' });
            }
        } catch (error) {
            setStatus({ type: 'error', message: 'Failed to send message. Please try again later.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <EditorLayout>
            <div className={styles.container}>
                <div className={styles.comment}>// Let's build something amazing together</div>
                <h1 className={styles.title}>Hire Me</h1>

                <div className={styles.benefits}>
                    <div className={styles.benefitItem}>
                        <span className={styles.checkmark}>✓</span> 2+ Years Experience
                    </div>
                    <div className={styles.benefitItem}>
                        <span className={styles.checkmark}>✓</span> 100% Job Success
                    </div>
                    <div className={styles.benefitItem}>
                        <span className={styles.checkmark}>✓</span> SEO & Performance First
                    </div>
                    <div className={styles.benefitItem}>
                        <span className={styles.checkmark}>✓</span> Secure Smart Contracts
                    </div>
                </div>

                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.formGroup}>
                        <label htmlFor="name" className={styles.label}>Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className={styles.input}
                            placeholder="John Doe"
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="email" className={styles.label}>Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className={styles.input}
                            placeholder="john@example.com"
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="projectType" className={styles.label}>Project Type</label>
                        <select
                            id="projectType"
                            name="projectType"
                            value={formData.projectType}
                            onChange={handleChange}
                            className={styles.select}
                        >
                            <option value="">Select a service</option>
                            <option value="Web Development">Web Development</option>
                            <option value="SEO">SEO (Search Engine Optimization)</option>
                            <option value="DApp">DApp (Decentralized Application)</option>
                            <option value="Smart Contract">Smart Contract Development</option>
                            <option value="Digital Marketing">Digital Marketing</option>
                        </select>
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="budget" className={styles.label}>Estimated Budget</label>
                        <select
                            id="budget"
                            name="budget"
                            value={formData.budget}
                            onChange={handleChange}
                            className={styles.select}
                        >
                            <option value="">Select a range</option>
                            <option value="<1k">&lt; $1,000</option>
                            <option value="1k-5k">$1,000 - $5,000</option>
                            <option value="5k-10k">$5,000 - $10,000</option>
                            <option value="10k+">$10,000+</option>
                        </select>
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="message" className={styles.label}>Project Details</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className={styles.textarea}
                            placeholder="Tell me about your project..."
                        />
                    </div>

                    <button
                        type="submit"
                        className={styles.button}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>

                    {status.message && (
                        <div className={status.type === 'success' ? styles.success : styles.error}>
                            {status.message}
                        </div>
                    )}
                </form>
            </div>
        </EditorLayout>
    );
}
