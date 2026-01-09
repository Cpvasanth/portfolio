const BASE_URL = "https://synt-x.com";

// Tools Collection page schema
export function generateToolsCollectionSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Free Web Development Tools",
    description:
      "Collection of free online tools for developers and businesses including privacy policy generator and email template builder.",
    url: `${BASE_URL}/tools`,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "SoftwareApplication",
            name: "Privacy Policy Generator",
            description:
              "Generate comprehensive, legally compliant privacy policies for websites and apps.",
            url: `${BASE_URL}/tools/privacy-policy`,
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
          },
        },
        {
          "@type": "ListItem",
          position: 2,
          item: {
            "@type": "SoftwareApplication",
            name: "Email Template Builder",
            description:
              "Create beautiful, responsive email templates with a visual editor.",
            url: `${BASE_URL}/tools/email-templates`,
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
          },
        },
      ],
    },
  };
}

// Privacy Policy Generator schema
export function generatePrivacyPolicyToolSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Privacy Policy Generator",
    description:
      "Generate comprehensive, legally compliant privacy policies for your website or app. Supports GDPR, CCPA, COPPA, CalOPPA, and PIPEDA regulations.",
    url: `${BASE_URL}/tools/privacy-policy`,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    featureList: [
      "GDPR Compliance",
      "CCPA Compliance",
      "COPPA Compliance",
      "CalOPPA Compliance",
      "PIPEDA Compliance",
      "5-Step Wizard Interface",
      "Live Preview",
      "18-Point Compliance Checklist",
      "Export to HTML, Markdown, Plain Text",
    ],
    screenshot: `${BASE_URL}/screenshots/privacy-policy-generator.png`,
    author: {
      "@type": "Person",
      name: "Vasa",
      url: BASE_URL,
    },
  };
}

// Email Templates listing schema
export function generateEmailTemplatesSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Email Template Builder",
    description:
      "Create beautiful, responsive email templates with a visual editor. Export Gmail and Outlook compatible HTML.",
    url: `${BASE_URL}/tools/email-templates`,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    featureList: [
      "Newsletter Templates",
      "Promotional Templates",
      "Welcome Email Templates",
      "Event Invitation Templates",
      "Visual Editor",
      "Gmail Compatible",
      "Outlook Compatible",
      "Responsive Design",
    ],
    author: {
      "@type": "Person",
      name: "Vasa",
      url: BASE_URL,
    },
  };
}

// Individual email template editor schema
export function generateEmailTemplateEditorSchema(
  templateId: string,
  templateName: string,
  templateDescription: string,
  category: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: `${templateName} Email Template Editor`,
    description: `${templateDescription} Customize and export Gmail & Outlook compatible HTML.`,
    url: `${BASE_URL}/tools/email-templates/${templateId}`,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    genre: category,
    isAccessibleForFree: true,
    author: {
      "@type": "Person",
      name: "Vasa",
      url: BASE_URL,
    },
  };
}

// BreadcrumbList schema generator
export function generateBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
