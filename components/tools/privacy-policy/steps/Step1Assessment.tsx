"use client";

import {
  InputField,
  SelectField,
  CheckboxGroup,
} from "@/components/tools/shared";
import { getUrlError, getEmailError } from "@/utils/shared";
import {
  PolicyConfig,
  BUSINESS_TYPE_LABELS,
  JURISDICTION_LABELS,
  Jurisdiction,
} from "@/utils/privacy-policy";

export interface StepProps {
  config: PolicyConfig;
  updateConfig: (updates: Partial<PolicyConfig>) => void;
}

export default function Step1Assessment({ config, updateConfig }: StepProps) {
  const urlError = getUrlError(config.businessInfo.websiteUrl);
  const emailError = getEmailError(config.businessInfo.contactEmail);

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-white mb-1">
          Business Information
        </h3>
        <p className="text-sm text-zinc-500">
          Tell us about your business and target audience
        </p>
      </div>

      <div className="grid gap-4">
        <InputField
          label="Business/Website Name"
          value={config.businessInfo.businessName}
          onChange={(v) =>
            updateConfig({
              businessInfo: { ...config.businessInfo, businessName: v },
            })
          }
          placeholder="My Company"
          required
        />

        <InputField
          label="Website URL"
          value={config.businessInfo.websiteUrl}
          onChange={(v) =>
            updateConfig({
              businessInfo: { ...config.businessInfo, websiteUrl: v },
            })
          }
          placeholder="https://example.com"
          type="url"
          required
          error={urlError}
        />

        <InputField
          label="Contact Email"
          value={config.businessInfo.contactEmail}
          onChange={(v) =>
            updateConfig({
              businessInfo: { ...config.businessInfo, contactEmail: v },
            })
          }
          placeholder="privacy@example.com"
          type="email"
          required
          error={emailError}
        />

        <InputField
          label="Physical Address (Optional)"
          value={config.businessInfo.physicalAddress}
          onChange={(v) =>
            updateConfig({
              businessInfo: { ...config.businessInfo, physicalAddress: v },
            })
          }
          placeholder="123 Main St, City, Country"
        />

        <SelectField
          label="Business Type"
          value={config.businessInfo.businessType}
          onChange={(v) =>
            updateConfig({
              businessInfo: { ...config.businessInfo, businessType: v },
            })
          }
          options={BUSINESS_TYPE_LABELS}
        />
      </div>

      <div className="pt-4 border-t border-white/[0.08]">
        <CheckboxGroup
          label="Target Jurisdictions (Select all that apply)"
          options={Object.fromEntries(
            Object.entries(JURISDICTION_LABELS).map(([k, v]) => [
              k,
              { label: v.label, description: `Compliant with ${v.regulation}` },
            ])
          ) as Record<Jurisdiction, { label: string; description: string }>}
          selected={config.jurisdictions}
          onChange={(v) => updateConfig({ jurisdictions: v })}
        />
      </div>
    </div>
  );
}
