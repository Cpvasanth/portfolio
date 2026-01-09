"use client";

import { useState } from "react";
import { FaCopy, FaCheck, FaCode, FaMarkdown, FaFileAlt } from "react-icons/fa";
import { InputField } from "@/components/tools/shared";
import ChecklistValidator from "../ChecklistValidator";
import { PolicyConfig, formatForExport } from "@/utils/privacy-policy";
import { StepProps } from "./Step1Assessment";

export default function Step5ReviewExport({ config, updateConfig }: StepProps) {
  const [copied, setCopied] = useState(false);
  const [checklistExpanded, setChecklistExpanded] = useState(false);

  const handleCopy = async (format: "html" | "markdown" | "text") => {
    const content = formatForExport(config, format);
    await navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = (format: "html" | "markdown" | "text") => {
    const content = formatForExport(config, format);
    const extensions = { html: "html", markdown: "md", text: "txt" };
    const mimeTypes = {
      html: "text/html",
      markdown: "text/markdown",
      text: "text/plain",
    };

    const blob = new Blob([content], { type: mimeTypes[format] });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `privacy-policy.${extensions[format]}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-white mb-1">
          Review & Export
        </h3>
        <p className="text-sm text-zinc-500">
          Review your policy and download it
        </p>
      </div>

      {/* Date Settings */}
      <div className="grid grid-cols-2 gap-4">
        <InputField
          label="Effective Date"
          value={config.effectiveDate}
          onChange={(v) => updateConfig({ effectiveDate: v })}
          type="date"
        />
        <InputField
          label="Last Updated"
          value={config.lastUpdated}
          onChange={(v) => updateConfig({ lastUpdated: v })}
          type="date"
        />
      </div>

      {/* Compliance Checklist */}
      <ChecklistValidator
        config={config}
        isExpanded={checklistExpanded}
        onToggle={() => setChecklistExpanded(!checklistExpanded)}
      />

      {/* Export Options */}
      <div className="pt-4 border-t border-white/[0.08]">
        <h4 className="text-sm font-medium text-zinc-300 mb-4">
          Export Options
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <button
            onClick={() => handleCopy("html")}
            className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20 transition-colors"
          >
            {copied ? <FaCheck /> : <FaCopy />}
            <span className="text-sm font-medium">Copy HTML</span>
          </button>

          <button
            onClick={() => handleDownload("html")}
            className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-white/[0.05] border border-white/[0.1] text-white hover:bg-white/[0.08] transition-colors"
          >
            <FaCode />
            <span className="text-sm font-medium">Download HTML</span>
          </button>

          <button
            onClick={() => handleDownload("markdown")}
            className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-white/[0.05] border border-white/[0.1] text-white hover:bg-white/[0.08] transition-colors"
          >
            <FaMarkdown />
            <span className="text-sm font-medium">Download MD</span>
          </button>
        </div>

        <button
          onClick={() => handleDownload("text")}
          className="mt-3 w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-white/[0.02] border border-white/[0.06] text-zinc-400 hover:bg-white/[0.05] transition-colors"
        >
          <FaFileAlt />
          <span className="text-sm font-medium">Download Plain Text</span>
        </button>
      </div>
    </div>
  );
}
