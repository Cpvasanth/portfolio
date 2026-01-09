"use client";

import { CheckboxGroup, ToggleField } from "@/components/tools/shared";
import {
  PolicyConfig,
  DATA_TYPE_LABELS,
  COLLECTION_METHOD_LABELS,
  DATA_USAGE_LABELS,
} from "@/utils/privacy-policy";
import { StepProps } from "./Step1Assessment";

export default function Step2DataCollection({ config, updateConfig }: StepProps) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-white mb-1">
          Data Collection
        </h3>
        <p className="text-sm text-zinc-500">
          What personal data do you collect and how?
        </p>
      </div>

      <CheckboxGroup
        label="Types of Data Collected"
        options={DATA_TYPE_LABELS}
        selected={config.dataTypes}
        onChange={(v) => updateConfig({ dataTypes: v })}
      />

      <CheckboxGroup
        label="Collection Methods"
        options={COLLECTION_METHOD_LABELS}
        selected={config.collectionMethods}
        onChange={(v) => updateConfig({ collectionMethods: v })}
      />

      <CheckboxGroup
        label="How Data is Used"
        options={DATA_USAGE_LABELS}
        selected={config.dataUsage}
        onChange={(v) => updateConfig({ dataUsage: v })}
      />

      <div className="pt-4 border-t border-white/[0.08]">
        <h4 className="text-sm font-medium text-zinc-300 mb-3">
          Children&apos;s Privacy (COPPA)
        </h4>
        <ToggleField
          label="Does your site target children under 13?"
          description="If yes, you'll need parental consent mechanisms"
          checked={config.childrenPrivacy.targetsChildren}
          onChange={(v) =>
            updateConfig({
              childrenPrivacy: { ...config.childrenPrivacy, targetsChildren: v },
            })
          }
        />
      </div>
    </div>
  );
}
