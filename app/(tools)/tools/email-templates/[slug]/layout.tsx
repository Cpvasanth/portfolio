import { Metadata } from "next";
import { emailTemplates } from "@/utils/email-templates";
import { generateEmailTemplateMetadata, generateEmailTemplateEditorSchema, generateBreadcrumbSchema } from "@/utils/tools-seo";

// Generate static params for all templates
export async function generateStaticParams() {
  return emailTemplates.map((template) => ({
    slug: template.id,
  }));
}

// Generate dynamic metadata for each template
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const template = emailTemplates.find((t) => t.id === slug);

  if (!template) {
    return {
      title: "Template Not Found",
    };
  }

  return generateEmailTemplateMetadata(
    template.id,
    template.name,
    template.description,
    template.category
  );
}

// Structured data component for each template editor
function TemplateSchema({ templateId }: { templateId: string }) {
  const template = emailTemplates.find((t) => t.id === templateId);
  
  if (!template) return null;

  const toolSchema = generateEmailTemplateEditorSchema(
    template.id,
    template.name,
    template.description,
    template.category
  );
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://synt-x.com" },
    { name: "Tools", url: "https://synt-x.com/tools" },
    { name: "Email Templates", url: "https://synt-x.com/tools/email-templates" },
    { name: template.name, url: `https://synt-x.com/tools/email-templates/${template.id}` },
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

export default async function EmailTemplateLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  
  return (
    <>
      <TemplateSchema templateId={slug} />
      {children}
    </>
  );
}
