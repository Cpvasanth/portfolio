import { Metadata } from "next";
import { privacyPolicyMetadata, generatePrivacyPolicyToolSchema, generateBreadcrumbSchema } from "@/utils/tools-seo";

export const metadata: Metadata = privacyPolicyMetadata;

// Structured data component
function PrivacyPolicySchema() {
  const toolSchema = generatePrivacyPolicyToolSchema();
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://synt-x.com" },
    { name: "Tools", url: "https://synt-x.com/tools" },
    { name: "Privacy Policy Generator", url: "https://synt-x.com/tools/privacy-policy" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PrivacyPolicySchema />
      {children}
    </>
  );
}
