"use client";

import { motion } from "framer-motion";
import { FaCheck, FaExclamationTriangle, FaTimes } from "react-icons/fa";
import { PolicyConfig } from "@/utils/privacy-policy";

interface ChecklistItem {
  id: string;
  label: string;
  check: (config: PolicyConfig) => boolean;
  isRequired: boolean;
}

const CHECKLIST_ITEMS: ChecklistItem[] = [
  {
    id: "data_types",
    label: "Identifies types of data collected",
    check: (c) => c.dataTypes.length > 0,
    isRequired: true,
  },
  {
    id: "collection_methods",
    label: "Explains collection methods",
    check: (c) => c.collectionMethods.length > 0,
    isRequired: true,
  },
  {
    id: "data_usage",
    label: "Details how data is used",
    check: (c) => c.dataUsage.length > 0,
    isRequired: true,
  },
  {
    id: "third_party",
    label: "Lists third-party data sharing",
    check: (c) => !c.sharesDataWithThirdParties || c.thirdParties.length > 0,
    isRequired: false,
  },
  {
    id: "children",
    label: "Addresses children's privacy (COPPA)",
    check: () => true, // Always included via jurisdictions
    isRequired: true,
  },
  {
    id: "cookies",
    label: "Discloses cookies and tracking",
    check: (c) => !c.cookies.usesCookies || c.cookies.cookieTypes.length > 0,
    isRequired: false,
  },
  {
    id: "user_rights",
    label: "Explains user rights",
    check: (c) => c.userRights.length > 0,
    isRequired: true,
  },
  {
    id: "opt_out",
    label: "Includes opt-out procedures",
    check: (c) => c.userRights.includes("opt_out"),
    isRequired: false,
  },
  {
    id: "security",
    label: "Describes security measures",
    check: (c) => c.security.encryption || c.security.accessControls || !!c.security.measures,
    isRequired: true,
  },
  {
    id: "retention",
    label: "Specifies data retention periods",
    check: (c) => !!c.dataRetention,
    isRequired: true,
  },
  {
    id: "transfers",
    label: "Addresses business transfers",
    check: (c) => c.includeBusinessTransfer,
    isRequired: false,
  },
  {
    id: "updates",
    label: "Explains policy update process",
    check: () => true, // Always included in generator
    isRequired: true,
  },
  {
    id: "contact",
    label: "Provides contact information",
    check: (c) => !!c.businessInfo.contactEmail,
    isRequired: true,
  },
  {
    id: "effective_date",
    label: "Includes effective date",
    check: (c) => !!c.effectiveDate,
    isRequired: true,
  },
  {
    id: "last_updated",
    label: "Includes last updated date",
    check: (c) => !!c.lastUpdated,
    isRequired: true,
  },
  {
    id: "compliance",
    label: "Complies with relevant regulations",
    check: (c) => c.jurisdictions.length > 0,
    isRequired: true,
  },
  {
    id: "language",
    label: "Written in clear language",
    check: () => true, // Generator ensures this
    isRequired: true,
  },
  {
    id: "placement",
    label: "Ready for website placement",
    check: (c) => !!c.businessInfo.businessName && !!c.businessInfo.websiteUrl,
    isRequired: false,
  },
];

interface ChecklistValidatorProps {
  config: PolicyConfig;
  isExpanded?: boolean;
  onToggle?: () => void;
}

export default function ChecklistValidator({
  config,
  isExpanded = false,
  onToggle,
}: ChecklistValidatorProps) {
  const results = CHECKLIST_ITEMS.map((item) => ({
    ...item,
    isComplete: item.check(config),
  }));

  const completedCount = results.filter((r) => r.isComplete).length;
  const totalCount = results.length;
  const requiredMissing = results.filter((r) => r.isRequired && !r.isComplete);
  const percentage = Math.round((completedCount / totalCount) * 100);

  return (
    <div className="rounded-xl bg-white/[0.03] border border-white/[0.08] overflow-hidden">
      {/* Header */}
      <button
        onClick={onToggle}
        className="w-full p-4 flex items-center justify-between hover:bg-white/[0.02] transition-colors"
      >
        <div className="flex items-center gap-3">
          <div
            className={`w-10 h-10 rounded-lg flex items-center justify-center ${
              requiredMissing.length === 0
                ? "bg-emerald-500/20 text-emerald-400"
                : "bg-amber-500/20 text-amber-400"
            }`}
          >
            {requiredMissing.length === 0 ? (
              <FaCheck className="text-sm" />
            ) : (
              <FaExclamationTriangle className="text-sm" />
            )}
          </div>
          <div className="text-left">
            <p className="text-sm font-medium text-white">
              Compliance Checklist
            </p>
            <p className="text-xs text-zinc-500">
              {completedCount}/{totalCount} items complete ({percentage}%)
            </p>
          </div>
        </div>

        <motion.svg
          animate={{ rotate: isExpanded ? 180 : 0 }}
          className="w-5 h-5 text-zinc-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </motion.svg>
      </button>

      {/* Progress Bar */}
      <div className="h-1 bg-white/5">
        <motion.div
          className={`h-full ${
            requiredMissing.length === 0 ? "bg-emerald-500" : "bg-amber-500"
          }`}
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Expanded Checklist */}
      {isExpanded && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="border-t border-white/[0.05]"
        >
          <div className="p-4 space-y-2 max-h-80 overflow-y-auto">
            {results.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-3 py-1.5"
              >
                <div
                  className={`w-5 h-5 rounded flex items-center justify-center flex-shrink-0 ${
                    item.isComplete
                      ? "bg-emerald-500/20 text-emerald-400"
                      : item.isRequired
                      ? "bg-red-500/20 text-red-400"
                      : "bg-amber-500/20 text-amber-400"
                  }`}
                >
                  {item.isComplete ? (
                    <FaCheck className="text-[10px]" />
                  ) : (
                    <FaTimes className="text-[10px]" />
                  )}
                </div>
                <span
                  className={`text-sm ${
                    item.isComplete ? "text-zinc-400" : "text-zinc-300"
                  }`}
                >
                  {item.label}
                  {item.isRequired && !item.isComplete && (
                    <span className="text-red-400 ml-1 text-xs">
                      (required)
                    </span>
                  )}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}
