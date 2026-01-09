import { Metadata } from "next";
import { toolsPageMetadata, generateToolsCollectionSchema, generateBreadcrumbSchema } from "@/utils/tools-seo";

export const metadata: Metadata = toolsPageMetadata;

// Structured data component
function ToolsSchema() {
  const collectionSchema = generateToolsCollectionSchema();
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://synt-x.com" },
    { name: "Tools", url: "https://synt-x.com/tools" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}

export default function ToolsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ToolsSchema />
      {children}
    </>
  );
}
