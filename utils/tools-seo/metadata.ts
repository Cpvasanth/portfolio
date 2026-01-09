import type { Metadata } from "next";

const BASE_URL = "https://synt-x.com";

// Tools listing page metadata
export const toolsPageMetadata: Metadata = {
  title: "Free Web Tools | Privacy Policy Generator, Email Template Builder",
  description:
    "Free online tools for developers and businesses. Generate privacy policies, create email templates, and more. No signup required.",
  keywords: [
    "free web tools",
    "privacy policy generator",
    "email template builder",
    "online tools",
    "developer tools",
    "business tools",
    "GDPR privacy policy",
    "email marketing templates",
  ],
  openGraph: {
    title: "Free Web Tools | Privacy Policy Generator & Email Builder",
    description:
      "Free online tools for developers and businesses. Generate privacy policies, create email templates, and more.",
    url: `${BASE_URL}/tools`,
    type: "website",
    images: [
      {
        url: `${BASE_URL}/og-tools.png`,
        width: 1200,
        height: 630,
        alt: "Free Web Development Tools",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Web Tools | Privacy Policy Generator & Email Builder",
    description:
      "Free online tools for developers and businesses. No signup required.",
  },
  alternates: {
    canonical: `${BASE_URL}/tools`,
  },
};

// Privacy Policy Generator metadata
export const privacyPolicyMetadata: Metadata = {
  title: "Free Privacy Policy Generator | GDPR, CCPA, COPPA Compliant",
  description:
    "Generate a comprehensive, legally compliant privacy policy for your website or app. Supports GDPR, CCPA, COPPA, CalOPPA, and PIPEDA. Free, no signup required.",
  keywords: [
    "privacy policy generator",
    "free privacy policy",
    "GDPR privacy policy",
    "CCPA compliance",
    "COPPA compliance",
    "CalOPPA",
    "PIPEDA",
    "website privacy policy",
    "app privacy policy",
    "privacy policy template",
  ],
  openGraph: {
    title: "Free Privacy Policy Generator | GDPR, CCPA, COPPA Compliant",
    description:
      "Generate a comprehensive, legally compliant privacy policy for your website or app. Supports GDPR, CCPA, COPPA, CalOPPA, and PIPEDA.",
    url: `${BASE_URL}/tools/privacy-policy`,
    type: "website",
    images: [
      {
        url: `${BASE_URL}/og-privacy-policy.png`,
        width: 1200,
        height: 630,
        alt: "Privacy Policy Generator Tool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Privacy Policy Generator | GDPR, CCPA Compliant",
    description:
      "Generate legally compliant privacy policies. Supports GDPR, CCPA, COPPA. Free, no signup.",
  },
  alternates: {
    canonical: `${BASE_URL}/tools/privacy-policy`,
  },
};

// Email Templates page metadata
export const emailTemplatesMetadata: Metadata = {
  title: "Free Email Template Builder | Gmail & Outlook Compatible",
  description:
    "Create beautiful, responsive email templates with our visual editor. Export Gmail and Outlook compatible HTML. Newsletter, promotion, welcome, and event templates.",
  keywords: [
    "email template builder",
    "free email templates",
    "responsive email templates",
    "Gmail email template",
    "Outlook email template",
    "newsletter template",
    "email marketing templates",
    "HTML email builder",
  ],
  openGraph: {
    title: "Free Email Template Builder | Gmail & Outlook Compatible",
    description:
      "Create beautiful, responsive email templates with our visual editor. Export Gmail and Outlook compatible HTML.",
    url: `${BASE_URL}/tools/email-templates`,
    type: "website",
    images: [
      {
        url: `${BASE_URL}/og-email-templates.png`,
        width: 1200,
        height: 630,
        alt: "Email Template Builder Tool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Email Template Builder | Gmail & Outlook Compatible",
    description:
      "Create responsive email templates. Export Gmail and Outlook compatible HTML. Free, no signup.",
  },
  alternates: {
    canonical: `${BASE_URL}/tools/email-templates`,
  },
};

// Email Template Editor (dynamic) metadata generator
export function generateEmailTemplateMetadata(
  templateId: string,
  templateName: string,
  templateDescription: string,
  category: string
): Metadata {
  return {
    title: `${templateName} Email Template | Free Email Builder`,
    description: `${templateDescription} Customize and export Gmail & Outlook compatible HTML. Free online email template builder.`,
    keywords: [
      `${templateName.toLowerCase()} email template`,
      `${category.toLowerCase()} email template`,
      "email template builder",
      "free email template",
      "responsive email",
      "HTML email template",
    ],
    openGraph: {
      title: `${templateName} Email Template | Free Email Builder`,
      description: templateDescription,
      url: `${BASE_URL}/tools/email-templates/${templateId}`,
      type: "website",
    },
    twitter: {
      card: "summary",
      title: `${templateName} Email Template | Free Email Builder`,
      description: templateDescription,
    },
    alternates: {
      canonical: `${BASE_URL}/tools/email-templates/${templateId}`,
    },
  };
}
