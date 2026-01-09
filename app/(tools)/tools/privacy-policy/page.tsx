"use client";

import { motion } from "framer-motion";
import PolicyWizard from "@/components/tools/privacy-policy/PolicyWizard";
import Link from "next/link";
import { FaArrowLeft, FaShieldAlt } from "react-icons/fa";

export default function PrivacyPolicyGeneratorPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-6 py-12">
          {/* Back Link */}
          <Link
            href="/tools"
            className="inline-flex items-center gap-2 text-zinc-500 hover:text-white text-sm mb-6 transition-colors"
          >
            <FaArrowLeft className="text-xs" />
            <span>Back to Tools</span>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            {/* Icon */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center"
            >
              <FaShieldAlt className="text-2xl text-emerald-400" />
            </motion.div>

            <p className="text-zinc-500 text-sm uppercase tracking-widest mb-3">
              Free Tool
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Privacy Policy Generator
            </h1>
            <p className="text-lg text-zinc-500 max-w-xl mx-auto">
              Create a comprehensive, legally compliant privacy policy for your
              website or app. GDPR, CCPA, COPPA, and PIPEDA ready.
            </p>

            {/* Compliance Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap items-center justify-center gap-2 mt-6"
            >
              {["GDPR", "CCPA", "COPPA", "CalOPPA", "PIPEDA"].map((badge) => (
                <span
                  key={badge}
                  className="px-3 py-1 text-xs font-medium rounded-full bg-white/[0.05] border border-white/[0.1] text-zinc-400"
                >
                  {badge}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Wizard Section */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <PolicyWizard />
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="p-8 rounded-2xl bg-white/[0.02] backdrop-blur-sm border border-white/[0.06] text-center"
        >
          <p className="text-xl font-medium text-white mb-2">
            Need Custom Legal Documents?
          </p>
          <p className="text-zinc-500 mb-6 max-w-md mx-auto">
            Get professionally crafted privacy policies, terms of service, and
            other legal documents tailored to your business.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-black font-medium rounded-lg hover:bg-zinc-200 transition-all"
          >
            <span>Contact Me</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </motion.div>
      </section>
    </div>
  );
}
