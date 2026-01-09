"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { PolicyConfig, generatePolicy } from "@/utils/privacy-policy";
import ReactMarkdown from "react-markdown";

interface PolicyPreviewProps {
  config: PolicyConfig;
  className?: string;
}

export default function PolicyPreview({ config, className = "" }: PolicyPreviewProps) {
  const [policy, setPolicy] = useState<string>("");
  const previewRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const generated = generatePolicy(config);
    setPolicy(generated);
  }, [config]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`h-full flex flex-col ${className}`}
    >
      {/* Preview Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.08] bg-white/[0.02]">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/60" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
          <div className="w-3 h-3 rounded-full bg-green-500/60" />
        </div>
        <span className="text-xs text-zinc-500 font-medium">Live Preview</span>
      </div>

      {/* Preview Content */}
      <div
        ref={previewRef}
        className="flex-1 overflow-y-auto p-6 bg-zinc-950"
      >
        {policy ? (
          <div className="prose prose-invert prose-sm max-w-none prose-headings:text-white prose-p:text-zinc-400 prose-li:text-zinc-400 prose-strong:text-zinc-200 prose-hr:border-white/10">
            <ReactMarkdown
              components={{
                h1: ({ children }) => (
                  <h1 className="text-2xl font-bold text-white mb-2 pb-2 border-b border-white/10">
                    {children}
                  </h1>
                ),
                h2: ({ children }) => (
                  <h2 className="text-lg font-semibold text-white mt-6 mb-3">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-base font-medium text-zinc-200 mt-4 mb-2">
                    {children}
                  </h3>
                ),
                p: ({ children }) => (
                  <p className="text-sm text-zinc-400 mb-3 leading-relaxed">
                    {children}
                  </p>
                ),
                ul: ({ children }) => (
                  <ul className="text-sm text-zinc-400 mb-4 space-y-1 list-disc ml-4">
                    {children}
                  </ul>
                ),
                li: ({ children }) => (
                  <li className="text-zinc-400">{children}</li>
                ),
                strong: ({ children }) => (
                  <strong className="text-zinc-200 font-medium">{children}</strong>
                ),
                hr: () => <hr className="border-white/10 my-6" />,
              }}
            >
              {policy}
            </ReactMarkdown>
          </div>
        ) : (
          <div className="h-full flex items-center justify-center">
            <p className="text-zinc-600 text-sm">
              Fill in the form to see your privacy policy preview
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
}
