"use client";

import { CheckboxGroup, ToggleField } from "@/components/tools/shared";
import {
  PolicyConfig,
  COOKIE_TYPE_LABELS,
  ANALYTICS_TOOL_LABELS,
  THIRD_PARTY_LABELS,
  AnalyticsTool,
} from "@/utils/privacy-policy";
import { StepProps } from "./Step1Assessment";

export default function Step3CookiesThirdParties({ config, updateConfig }: StepProps) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-white mb-1">
          Cookies & Third Parties
        </h3>
        <p className="text-sm text-zinc-500">
          Tracking technologies and data sharing
        </p>
      </div>

      <ToggleField
        label="Does your site use cookies?"
        checked={config.cookies.usesCookies}
        onChange={(v) =>
          updateConfig({ cookies: { ...config.cookies, usesCookies: v } })
        }
      />

      {config.cookies.usesCookies && (
        <CheckboxGroup
          label="Types of Cookies Used"
          options={COOKIE_TYPE_LABELS}
          selected={config.cookies.cookieTypes}
          onChange={(v) =>
            updateConfig({ cookies: { ...config.cookies, cookieTypes: v } })
          }
        />
      )}

      <CheckboxGroup
        label="Analytics Tools"
        options={Object.fromEntries(
          Object.entries(ANALYTICS_TOOL_LABELS).map(([k, v]) => [
            k,
            { label: v, description: "" },
          ])
        ) as Record<AnalyticsTool, { label: string; description: string }>}
        selected={config.analyticsTools}
        onChange={(v) => updateConfig({ analyticsTools: v })}
      />

      <div className="pt-4 border-t border-white/[0.08]">
        <ToggleField
          label="Do you share data with third parties?"
          checked={config.sharesDataWithThirdParties}
          onChange={(v) => updateConfig({ sharesDataWithThirdParties: v })}
        />

        {config.sharesDataWithThirdParties && (
          <div className="mt-4">
            <CheckboxGroup
              label="Third-Party Categories"
              options={THIRD_PARTY_LABELS}
              selected={config.thirdParties}
              onChange={(v) => updateConfig({ thirdParties: v })}
            />
          </div>
        )}
      </div>

      <div className="pt-4 border-t border-white/[0.08]">
        <ToggleField
          label="Do you sell user data?"
          description="Required disclosure under CCPA (California)"
          checked={config.sellsData}
          onChange={(v) => updateConfig({ sellsData: v })}
        />
      </div>
    </div>
  );
}
