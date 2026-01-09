"use client";

import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";

interface Step {
  number: number;
  name: string;
  description: string;
}

interface StepIndicatorProps {
  currentStep: number;
  steps: Step[];
  onStepClick?: (step: number) => void;
}

export default function StepIndicator({
  currentStep,
  steps,
  onStepClick,
}: StepIndicatorProps) {
  return (
    <div className="w-full">
      {/* Desktop View */}
      <div className="hidden md:flex items-center justify-between relative">
        {/* Progress Line Background */}
        <div className="absolute top-5 left-0 right-0 h-0.5 bg-white/10" />
        
        {/* Active Progress Line */}
        <motion.div
          className="absolute top-5 left-0 h-0.5 bg-emerald-500"
          initial={{ width: "0%" }}
          animate={{
            width: `${((currentStep - 1) / (steps.length - 1)) * 100}%`,
          }}
          transition={{ duration: 0.3 }}
        />

        {steps.map((step, index) => {
          const isCompleted = currentStep > step.number;
          const isCurrent = currentStep === step.number;
          const isClickable = onStepClick && (isCompleted || step.number <= currentStep);

          return (
            <div
              key={step.number}
              className={`relative flex flex-col items-center ${
                isClickable ? "cursor-pointer" : ""
              }`}
              onClick={() => isClickable && onStepClick?.(step.number)}
            >
              {/* Step Circle */}
              <motion.div
                className={`w-10 h-10 rounded-full flex items-center justify-center z-10 border-2 transition-colors ${
                  isCompleted
                    ? "bg-emerald-500 border-emerald-500 text-white"
                    : isCurrent
                    ? "bg-zinc-900 border-emerald-500 text-emerald-500"
                    : "bg-zinc-900 border-white/20 text-zinc-500"
                }`}
                whileHover={isClickable ? { scale: 1.05 } : {}}
                whileTap={isClickable ? { scale: 0.95 } : {}}
              >
                {isCompleted ? (
                  <FaCheck className="text-sm" />
                ) : (
                  <span className="text-sm font-medium">{step.number}</span>
                )}
              </motion.div>

              {/* Step Name */}
              <p
                className={`mt-2 text-xs font-medium text-center max-w-[100px] ${
                  isCurrent ? "text-white" : "text-zinc-500"
                }`}
              >
                {step.name}
              </p>
            </div>
          );
        })}
      </div>

      {/* Mobile View */}
      <div className="md:hidden">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm text-zinc-400">
            Step {currentStep} of {steps.length}
          </span>
          <span className="text-sm font-medium text-white">
            {steps[currentStep - 1]?.name}
          </span>
        </div>
        
        {/* Progress Bar */}
        <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-emerald-500 rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: `${(currentStep / steps.length) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Current Step Description */}
        <p className="mt-2 text-xs text-zinc-500">
          {steps[currentStep - 1]?.description}
        </p>
      </div>
    </div>
  );
}

// Default steps for the Privacy Policy Wizard
export const WIZARD_STEPS: Step[] = [
  {
    number: 1,
    name: "Assessment",
    description: "Business info and target jurisdictions",
  },
  {
    number: 2,
    name: "Data Collection",
    description: "What data you collect and how",
  },
  {
    number: 3,
    name: "Cookies & Third Parties",
    description: "Tracking and data sharing",
  },
  {
    number: 4,
    name: "Rights & Security",
    description: "User rights and data protection",
  },
  {
    number: 5,
    name: "Review & Export",
    description: "Preview and download your policy",
  },
];
