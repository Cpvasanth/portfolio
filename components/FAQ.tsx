"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
    {
        question: "Do you only work with startups, or also with larger companies?",
        answer: "We primarily focus on startups and entrepreneurs to help them launch MVPs quickly, but we are open to working with larger companies that want to move fast and break things.",
    },
    {
        question: "What’s the difference between Vasa and a classic design agency?",
        answer: "We are a partner, not just a vendor. We prioritize speed, direct communication, and business value over bureaucracy and endless slide decks.",
    },
    {
        question: "How fast can you deliver a brand or a product design?",
        answer: "Typically, we can deliver a complete brand identity in 2 weeks and a full MVP design in 4-6 weeks, depending on complexity.",
    },
    {
        question: "What happens after the design is done? Do you also handle development?",
        answer: "Yes! We offer full-stack development services to bring your designs to life. We use modern tech stacks like Next.js, React, and Node.js.",
    },
    {
        question: "What if I don't have a clear vision yet? Can you still help?",
        answer: "Absolutely. We help with product discovery and strategy to clarify your vision before writing a single line of code.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="w-full px-4 py-20 md:px-10 lg:pl-2">
            <div className="flex w-full max-w-6xl flex-col gap-12 lg:flex-row lg:items-start ">
                {/* Left: Title */}
                <div className="lg:w-1/3">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-black">
                        Frequently asked questions
                    </h2>
                </div>

                {/* Right: Accordion */}
                <div className="flex flex-col gap-4 lg:w-2/3">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="overflow-hidden rounded-2xl bg-[#f4f2e9] transition-colors hover:bg-[#eeece3]"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="flex w-full items-center justify-between px-6 py-3 text-left"
                            >
                                <span className="text-lg font-medium text-zinc-800 md:text-xl">
                                    {faq.question}
                                </span>
                                <span className="ml-4 flex h-8 w-8 min-w-[2rem] items-center justify-center rounded-full bg-white text-xs text-black">
                                    {openIndex === index ? <FaMinus /> : <FaPlus />}
                                </span>
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="px-6 pb-6 text-zinc-600">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
