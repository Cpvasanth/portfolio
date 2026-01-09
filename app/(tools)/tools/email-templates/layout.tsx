import { Metadata } from "next";
import { emailTemplatesMetadata, generateEmailTemplatesSchema, generateBreadcrumbSchema } from "@/utils/tools-seo";

export const metadata: Metadata = emailTemplatesMetadata;

// Structured data component
function EmailTemplatesSchema() {
  const toolSchema = generateEmailTemplatesSchema();
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://synt-x.com" },
    { name: "Tools", url: "https://synt-x.com/tools" },
    { name: "Email Template Builder", url: "https://synt-x.com/tools/email-templates" },
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

export default function EmailTemplatesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <EmailTemplatesSchema />
      {children}
    </>
  );
}
