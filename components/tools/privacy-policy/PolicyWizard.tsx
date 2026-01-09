"use client";

import { useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import StepIndicator, { WIZARD_STEPS } from "./StepIndicator";
import PolicyPreview from "./PolicyPreview";
import {
  Step1Assessment,
  Step2DataCollection,
  Step3CookiesThirdParties,
  Step4RightsSecurity,
  Step5ReviewExport,
} from "./steps";
import { PolicyConfig, getDefaultConfig } from "@/utils/privacy-policy";
import { isValidUrl, isValidEmail } from "@/utils/shared";

export default function PolicyWizard() {
  const [currentStep, setCurrentStep] = useState(1);
  const [config, setConfig] = useState<PolicyConfig>(getDefaultConfig());
  const [showMobilePreview, setShowMobilePreview] = useState(false);
  const wizardRef = useRef<HTMLDivElement>(null);

  const scrollToTop = () => {
    wizardRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const updateConfig = useCallback((updates: Partial<PolicyConfig>) => {
    setConfig((prev) => ({
      ...prev,
      ...updates,
      businessInfo: {
        ...prev.businessInfo,
        ...(updates.businessInfo || {}),
      },
      childrenPrivacy: {
        ...prev.childrenPrivacy,
        ...(updates.childrenPrivacy || {}),
      },
      cookies: {
        ...prev.cookies,
        ...(updates.cookies || {}),
      },
      security: {
        ...prev.security,
        ...(updates.security || {}),
      },
    }));
  }, []);

  const canGoNext = () => {
    switch (currentStep) {
      case 1:
        return (
          config.businessInfo.businessName.trim() !== "" &&
          isValidUrl(config.businessInfo.websiteUrl) &&
          isValidEmail(config.businessInfo.contactEmail)
        );
      case 2:
        return (
          config.dataTypes.length > 0 && config.collectionMethods.length > 0
        );
      case 3:
        return true;
      case 4:
        return config.userRights.length > 0;
      case 5:
        return true;
      default:
        return true;
    }
  };

  const renderStep = () => {
    const props = { config, updateConfig };
    switch (currentStep) {
      case 1:
        return <Step1Assessment {...props} />;
      case 2:
        return <Step2DataCollection {...props} />;
      case 3:
        return <Step3CookiesThirdParties {...props} />;
      case 4:
        return <Step4RightsSecurity {...props} />;
      case 5:
        return <Step5ReviewExport {...props} />;
      default:
        return null;
    }
  };

  return (
    <div ref={wizardRef} className="min-h-[calc(100vh-200px)]">
      {/* Step Indicator */}
      <div className="mb-8">
        <StepIndicator
          currentStep={currentStep}
          steps={WIZARD_STEPS}
          onStepClick={(step) => {
            if (step <= currentStep) setCurrentStep(step);
          }}
        />
      </div>

      {/* Main Content Area */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Wizard Form */}
        <div className="flex-1 lg:flex-[0.55]">
          <div className="rounded-2xl bg-white/[0.03] border border-white/[0.08] p-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
              >
                {renderStep()}
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/[0.08]">
              <button
                onClick={() => {
                  setCurrentStep((s) => Math.max(1, s - 1));
                  scrollToTop();
                }}
                disabled={currentStep === 1}
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-zinc-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                <FaArrowLeft className="text-xs" />
                <span>Back</span>
              </button>

              {/* Mobile Preview Toggle */}
              <button
                onClick={() => setShowMobilePreview(!showMobilePreview)}
                className="lg:hidden px-4 py-2 rounded-lg bg-white/[0.05] text-zinc-300 text-sm"
              >
                {showMobilePreview ? "Hide Preview" : "Show Preview"}
              </button>

              {currentStep < 5 ? (
                <button
                  onClick={() => {
                    setCurrentStep((s) => Math.min(5, s + 1));
                    scrollToTop();
                  }}
                  disabled={!canGoNext()}
                  className="flex items-center gap-2 px-5 py-2 rounded-lg bg-emerald-500 text-white font-medium hover:bg-emerald-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <span>Continue</span>
                  <FaArrowRight className="text-xs" />
                </button>
              ) : (
                <div className="text-sm text-emerald-400 font-medium">
                  ✓ Ready to export
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Preview Panel */}
        <div
          className={`flex-1 lg:flex-[0.45] ${
            showMobilePreview ? "block" : "hidden lg:block"
          }`}
        >
          <div className="sticky top-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] overflow-hidden h-[600px]">
            <PolicyPreview config={config} />
          </div>
        </div>
      </div>
    </div>
  );
}
