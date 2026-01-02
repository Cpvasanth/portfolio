"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight, FaCheck, FaSpinner } from "react-icons/fa";
import FAQ from "@/components/FAQ";

export default function ContactPage() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        service: "Web Design",
        message: "",
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState("");

    const handleNext = () => {
        if (formData.name && formData.phone && formData.email) {
            setStep(2);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError("");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setIsSubmitted(true);
            } else {
                const data = await response.json();
                setError(data.error || "Something went wrong. Please try again.");
            }
        } catch (err) {
            setError("Failed to send message. Please checking your connection.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="flex min-h-screen w-full flex-col items-center justify-center px-4 md:px-10 lg:pl-32 py-20">
            <div className="flex w-full max-w-7xl flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">

                {/* Left Side: context/copy (Inspired by image) */}
                <div className="flex flex-col gap-8 lg:w-1/2">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-2"
                    >
                        <span className="rounded-full bg-[#ff7722] px-3 py-1 text-xs font-bold text-white">
                            #1
                        </span>
                        <span className="text-sm font-medium text-zinc-500">
                            Break your technical barrier
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl font-bold leading-[0.9] tracking-tighter sm:text-6xl md:text-6xl lg:text-7xl"
                    >
                        The right design partner for your <br />
                        next project
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="max-w-md text-lg text-zinc-500"
                    >
                        We’re experts in mobile app design only for entrepreneurs. Over the years, we've crafted an offer tailored from concept to pixel-perfect mockups.
                    </motion.p>
                </div>

                {/* Right Side: Form Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className="w-full rounded-3xl bg-white p-8 shadow-2xl lg:w-[500px] lg:p-12 relative overflow-hidden"
                >
                    {isSubmitted ? (
                        <div className="flex h-full min-h-[400px] flex-col items-center justify-center text-center">
                            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-green-600">
                                <FaCheck size={32} />
                            </div>
                            <h3 className="text-3xl font-bold">Thank You!</h3>
                            <p className="mt-4 text-zinc-500">
                                We've received your message and will get back to you shortly.
                            </p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                            <h2 className="text-2xl font-bold leading-tight md:text-3xl">
                                Request a call and see how Vasa works
                            </h2>

                            <AnimatePresence mode="wait">
                                {step === 1 && (
                                    <motion.div
                                        key="step1"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        className="flex flex-col gap-4"
                                    >
                                        <div className="flex flex-col gap-2">
                                            <label className="text-sm font-semibold text-zinc-600">Full name</label>
                                            <input
                                                type="text"
                                                placeholder="John Doe"
                                                className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 outline-none transition-all focus:border-[#ff7722] focus:bg-white"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                required
                                            />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label className="text-sm font-semibold text-zinc-600">Email *</label>
                                            <input
                                                type="email"
                                                placeholder="john@doe.com"
                                                className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 outline-none transition-all focus:border-[#ff7722] focus:bg-white"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                required
                                            />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label className="text-sm font-semibold text-zinc-600">Phone number *</label>
                                            <input
                                                type="tel"
                                                placeholder="+1 234 567 890"
                                                className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 outline-none transition-all focus:border-[#ff7722] focus:bg-white"
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                required
                                            />
                                        </div>

                                        <button
                                            type="button"
                                            onClick={handleNext}
                                            disabled={!formData.name || !formData.email || !formData.phone}
                                            className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-[#ff7722] py-4 text-lg font-bold text-white transition-transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            Next Step
                                            <FaArrowRight />
                                        </button>
                                    </motion.div>
                                )}

                                {step === 2 && (
                                    <motion.div
                                        key="step2"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        className="flex flex-col gap-4"
                                    >
                                        <div className="flex flex-col gap-2">
                                            <label className="text-sm font-semibold text-zinc-600">Type of Service</label>
                                            <div className="relative">
                                                <select
                                                    className="w-full appearance-none rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 outline-none transition-all focus:border-[#ff7722] focus:bg-white"
                                                    value={formData.service}
                                                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                                >
                                                    <option>Web Design</option>
                                                    <option>Web Development</option>
                                                    <option>Digital Marketing</option>
                                                    <option>SEO</option>
                                                </select>
                                                <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400">
                                                    ▼
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-2">
                                            <label className="text-sm font-semibold text-zinc-600">Message</label>
                                            <textarea
                                                placeholder="Tell us about your project..."
                                                rows={4}
                                                className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 outline-none transition-all focus:border-[#ff7722] focus:bg-white resize-none"
                                                value={formData.message}
                                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            />
                                        </div>

                                        {error && (
                                            <div className="text-red-500 text-sm font-medium">
                                                {error}
                                            </div>
                                        )}

                                        <div className="flex gap-4 mt-4">
                                            <button
                                                type="button"
                                                onClick={() => setStep(1)}
                                                disabled={isSubmitting}
                                                className="flex w-1/3 items-center justify-center rounded-xl border border-zinc-200 bg-white py-4 font-bold text-zinc-600 transition-colors hover:bg-zinc-50 disabled:opacity-50"
                                            >
                                                Back
                                            </button>
                                            <button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className="flex w-2/3 items-center justify-center gap-2 rounded-xl bg-[#ff7722] py-4 text-lg font-bold text-white transition-transform active:scale-95 disabled:scale-100 disabled:opacity-70"
                                            >
                                                {isSubmitting ? (
                                                    <>
                                                        Sending...
                                                        <FaSpinner className="animate-spin" />
                                                    </>
                                                ) : (
                                                    <>
                                                        Send Message
                                                        <FaArrowRight />
                                                    </>
                                                )}
                                            </button>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Progress Dots */}
                            <div className="flex justify-center gap-2 mt-4">
                                <div className={`h-2 w-2 rounded-full transition-colors ${step === 1 ? "bg-[#ff7722]" : "bg-zinc-200"}`} />
                                <div className={`h-2 w-2 rounded-full transition-colors ${step === 2 ? "bg-[#ff7722]" : "bg-zinc-200"}`} />
                            </div>
                        </form>
                    )}
                </motion.div>
            </div>

            {/* FAQ Section */}
            <div className="mt-20 w-full">
                <FAQ />
            </div>
        </section>
    );
}
