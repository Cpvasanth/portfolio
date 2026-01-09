"use client";

import { CheckboxGroup, SelectField, ToggleField } from "@/components/tools/shared";
import {
  PolicyConfig,
  USER_RIGHT_LABELS,
  DATA_RETENTION_LABELS,
  DISPUTE_METHOD_LABELS,
  DataRetention,
  DisputeMethod,
} from "@/utils/privacy-policy";
import { StepProps } from "./Step1Assessment";

export default function Step4RightsSecurity({ config, updateConfig }: StepProps) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-white mb-1">
          User Rights & Security
        </h3>
        <p className="text-sm text-zinc-500">
          Rights you grant users and how you protect their data
        </p>
      </div>

      <CheckboxGroup
        label="User Rights to Include"
        options={USER_RIGHT_LABELS}
        selected={config.userRights}
        onChange={(v) => updateConfig({ userRights: v })}
      />

      <div className="pt-4 border-t border-white/[0.08] space-y-4">
        <h4 className="text-sm font-medium text-zinc-300">Security Measures</h4>
        <ToggleField
          label="Data Encryption"
          description="SSL/TLS encryption for data transmission"
          checked={config.security.encryption}
          onChange={(v) =>
            updateConfig({ security: { ...config.security, encryption: v } })
          }
        />
        <ToggleField
          label="Access Controls"
          description="Role-based access to user data"
          checked={config.security.accessControls}
          onChange={(v) =>
            updateConfig({ security: { ...config.security, accessControls: v } })
          }
        />
        <ToggleField
          label="Regular Security Audits"
          description="Periodic security assessments"
          checked={config.security.regularAudits}
          onChange={(v) =>
            updateConfig({ security: { ...config.security, regularAudits: v } })
          }
        />
      </div>

      <div className="pt-4 border-t border-white/[0.08] space-y-4">
        <SelectField
          label="Data Retention Period"
          value={config.dataRetention}
          onChange={(v) => updateConfig({ dataRetention: v })}
          options={DATA_RETENTION_LABELS as Record<DataRetention, string>}
        />

        <SelectField
          label="Dispute Resolution Method"
          value={config.disputeResolution}
          onChange={(v) => updateConfig({ disputeResolution: v })}
          options={DISPUTE_METHOD_LABELS as Record<DisputeMethod, string>}
        />

        <ToggleField
          label="Include Business Transfer Clause"
          description="What happens to data during mergers/acquisitions"
          checked={config.includeBusinessTransfer}
          onChange={(v) => updateConfig({ includeBusinessTransfer: v })}
        />
      </div>
    </div>
  );
}
