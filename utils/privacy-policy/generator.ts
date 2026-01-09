// Privacy Policy Generator - Policy Generation Logic

import {
  PolicyConfig,
  DataType,
  CollectionMethod,
  DataUsage,
  ThirdPartyType,
  UserRight,
  CookieType,
  AnalyticsTool,
  ExportFormat,
} from './types';

import {
  DATA_TYPE_LABELS,
  COLLECTION_METHOD_LABELS,
  DATA_USAGE_LABELS,
  COOKIE_TYPE_LABELS,
  ANALYTICS_TOOL_LABELS,
  THIRD_PARTY_LABELS,
  USER_RIGHT_LABELS,
  DATA_RETENTION_LABELS,
} from './defaults';

// ============================================
// Helper Functions
// ============================================

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

const getDataTypeText = (types: DataType[]): string => {
  return types.map((t) => DATA_TYPE_LABELS[t].description).join(', ');
};

const getCollectionMethodList = (methods: CollectionMethod[]): string => {
  return methods
    .map((m) => `- ${COLLECTION_METHOD_LABELS[m].label}: ${COLLECTION_METHOD_LABELS[m].description}`)
    .join('\n');
};

const getDataUsageList = (usage: DataUsage[]): string => {
  return usage
    .map((u) => `- ${DATA_USAGE_LABELS[u].label}: ${DATA_USAGE_LABELS[u].description}`)
    .join('\n');
};

const getCookieTypeList = (types: CookieType[]): string => {
  return types
    .map((t) => `- **${COOKIE_TYPE_LABELS[t].label}**: ${COOKIE_TYPE_LABELS[t].description}`)
    .join('\n');
};

const getAnalyticsToolsList = (tools: AnalyticsTool[]): string => {
  return tools.map((t) => `- ${ANALYTICS_TOOL_LABELS[t]}`).join('\n');
};

const getThirdPartyList = (parties: ThirdPartyType[]): string => {
  return parties
    .map((p) => `- **${THIRD_PARTY_LABELS[p].label}**: ${THIRD_PARTY_LABELS[p].description}`)
    .join('\n');
};

const getUserRightsList = (rights: UserRight[]): string => {
  return rights
    .map((r) => `- **${USER_RIGHT_LABELS[r].label}**: ${USER_RIGHT_LABELS[r].description}`)
    .join('\n');
};

// ============================================
// Main Generator Function
// ============================================

export const generatePolicy = (config: PolicyConfig): string => {
  const {
    businessInfo,
    jurisdictions,
    dataTypes,
    collectionMethods,
    dataUsage,
    childrenPrivacy,
    cookies,
    analyticsTools,
    thirdParties,
    sellsData,
    sharesDataWithThirdParties,
    userRights,
    security,
    dataRetention,
    customRetentionPeriod,
    includeBusinessTransfer,
    disputeResolution,
    effectiveDate,
    lastUpdated,
  } = config;

  const isGDPR = jurisdictions.includes('eu') || jurisdictions.includes('global');
  const isCCPA = jurisdictions.includes('california') || jurisdictions.includes('global');
  const isCOPPA = jurisdictions.includes('us') || jurisdictions.includes('global');

  let policy = '';

  // ============================================
  // Section 1: Header
  // ============================================
  policy += `# Privacy Policy

**${businessInfo.businessName}**

**Effective Date:** ${formatDate(effectiveDate)}  
**Last Updated:** ${formatDate(lastUpdated)}

---

`;

  // ============================================
  // Section 2: Introduction
  // ============================================
  policy += `## 1. Introduction

Welcome to ${businessInfo.businessName}. We respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, disclose, and safeguard your information when you visit our ${businessInfo.businessType === 'mobile_app' ? 'mobile application' : 'website'}${businessInfo.websiteUrl ? ` at ${businessInfo.websiteUrl}` : ''}.

Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the ${businessInfo.businessType === 'mobile_app' ? 'application' : 'site'}.

---

`;

  // ============================================
  // Section 3: Information We Collect
  // ============================================
  policy += `## 2. Information We Collect

We may collect information about you in a variety of ways. The information we may collect includes:

**Personal Data**
${getDataTypeText(dataTypes)}.

`;

  if (dataTypes.includes('technical_data')) {
    policy += `**Automatically Collected Information**
When you access our ${businessInfo.businessType === 'mobile_app' ? 'application' : 'website'}, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies installed on your device.

`;
  }

  policy += `---

`;

  // ============================================
  // Section 4: How We Collect Information
  // ============================================
  policy += `## 3. How We Collect Information

We collect information through the following methods:

${getCollectionMethodList(collectionMethods)}

---

`;

  // ============================================
  // Section 5: How We Use Your Information
  // ============================================
  policy += `## 4. How We Use Your Information

We use the information we collect for various purposes, including:

${getDataUsageList(dataUsage)}

---

`;

  // ============================================
  // Section 6: Cookies and Tracking
  // ============================================
  if (cookies.usesCookies) {
    policy += `## 5. Cookies and Tracking Technologies

We use cookies and similar tracking technologies to track activity on our ${businessInfo.businessType === 'mobile_app' ? 'application' : 'website'} and hold certain information.

**Types of Cookies We Use:**

${getCookieTypeList(cookies.cookieTypes)}

`;

    if (analyticsTools.length > 0) {
      policy += `**Analytics Tools:**

We use the following analytics services:

${getAnalyticsToolsList(analyticsTools)}

`;
    }

    policy += `**Managing Cookies:**
You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our ${businessInfo.businessType === 'mobile_app' ? 'application' : 'website'}.

---

`;
  }

  // ============================================
  // Section 7: Third-Party Sharing
  // ============================================
  if (sharesDataWithThirdParties && thirdParties.length > 0) {
    policy += `## 6. Third-Party Data Sharing

We may share your information with third parties in the following categories:

${getThirdPartyList(thirdParties)}

We require all third parties to respect the security of your personal data and to treat it in accordance with the law.

`;

    if (isCCPA && sellsData) {
      policy += `**California Residents - Sale of Personal Information:**
Under the California Consumer Privacy Act (CCPA), we are required to disclose whether we sell personal information. We ${sellsData ? 'may sell certain categories of personal information to third parties' : 'do not sell your personal information to third parties'}.

`;
    }

    if (isCCPA && !sellsData) {
      policy += `**Notice to California Residents:**
We do not sell your personal information as defined under the California Consumer Privacy Act (CCPA).

`;
    }

    policy += `---

`;
  }

  // ============================================
  // Section 8: Children's Privacy
  // ============================================
  if (isCOPPA) {
    policy += `## 7. Children's Privacy

`;

    if (childrenPrivacy.targetsChildren) {
      policy += `Our ${businessInfo.businessType === 'mobile_app' ? 'application' : 'website'} is intended for users who are at least ${childrenPrivacy.minimumAge} years old. We have implemented ${childrenPrivacy.parentalConsentMechanism || 'parental consent mechanisms'} to ensure compliance with the Children's Online Privacy Protection Act (COPPA).

`;
    } else {
      policy += `Our ${businessInfo.businessType === 'mobile_app' ? 'application' : 'website'} is not intended for children under ${childrenPrivacy.minimumAge} years of age. We do not knowingly collect personal information from children under ${childrenPrivacy.minimumAge}. If you are a parent or guardian and you are aware that your child has provided us with personal data, please contact us. If we become aware that we have collected personal data from children without verification of parental consent, we take steps to remove that information from our servers.

`;
    }

    policy += `---

`;
  }

  // ============================================
  // Section 9: Your Rights
  // ============================================
  policy += `## 8. Your Rights and Choices

`;

  if (isGDPR) {
    policy += `**For European Union Residents (GDPR):**
Under the General Data Protection Regulation, you have certain rights regarding your personal data:

`;
  }

  policy += `You have the following rights regarding your personal information:

${getUserRightsList(userRights)}

To exercise any of these rights, please contact us at ${businessInfo.contactEmail}.

`;

  if (dataUsage.includes('marketing')) {
    policy += `**Opting Out of Marketing:**
You can opt out of receiving marketing communications from us at any time by clicking the unsubscribe link in our emails or by contacting us directly.

`;
  }

  policy += `---

`;

  // ============================================
  // Section 10: Data Security
  // ============================================
  policy += `## 9. Data Security

We use administrative, technical, and physical security measures to help protect your personal information. ${security.measures || 'We implement appropriate data collection, storage, and processing practices and security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information.'}

`;

  if (security.encryption) {
    policy += `We use encryption to protect sensitive information transmitted online. `;
  }
  if (security.accessControls) {
    policy += `We also implement access controls to ensure that only authorized personnel can access your data. `;
  }
  if (security.regularAudits) {
    policy += `We conduct regular security audits to maintain the integrity of our systems.`;
  }

  policy += `

While we have taken reasonable steps to secure the personal information you provide to us, please be aware that no security measures are perfect, and we cannot guarantee absolute security.

---

`;

  // ============================================
  // Section 11: Data Retention
  // ============================================
  const retentionText = dataRetention === 'custom' && customRetentionPeriod
    ? customRetentionPeriod
    : DATA_RETENTION_LABELS[dataRetention as keyof typeof DATA_RETENTION_LABELS] || 'as long as necessary';

  policy += `## 10. Data Retention

We will retain your personal information only for as long as necessary to fulfill the purposes outlined in this privacy policy, unless a longer retention period is required or permitted by law. Our standard retention period is ${retentionText.toLowerCase()}.

When we no longer need your personal data, we will securely delete or anonymize it.

---

`;

  // ============================================
  // Section 12: Business Transfers
  // ============================================
  if (includeBusinessTransfer) {
    policy += `## 11. Business Transfers

If ${businessInfo.businessName} is involved in a merger, acquisition, asset sale, or bankruptcy, your personal data may be transferred. We will provide notice before your personal data is transferred and becomes subject to a different privacy policy.

---

`;
  }

  // ============================================
  // Section 13: Changes to Policy
  // ============================================
  policy += `## 12. Changes to This Privacy Policy

We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top of this policy.

You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.

---

`;

  // ============================================
  // Section 14: Contact Information
  // ============================================
  policy += `## 13. Contact Us

If you have any questions about this Privacy Policy, please contact us:

- **Email:** ${businessInfo.contactEmail}
${businessInfo.websiteUrl ? `- **Website:** ${businessInfo.websiteUrl}` : ''}
${businessInfo.physicalAddress ? `- **Address:** ${businessInfo.physicalAddress}` : ''}
`;

  if (isGDPR && businessInfo.dpoEmail) {
    policy += `
**Data Protection Officer:**
- **Name:** ${businessInfo.dpoName || 'Data Protection Officer'}
- **Email:** ${businessInfo.dpoEmail}
`;
  }

  policy += `

---

`;

  // ============================================
  // Section 15: Dispute Resolution
  // ============================================
  const disputeText = {
    arbitration: 'Any disputes arising out of or in connection with this privacy policy shall be resolved through binding arbitration.',
    courts: 'Any disputes arising out of or in connection with this privacy policy shall be resolved in the courts of competent jurisdiction.',
    mediation: 'Any disputes arising out of or in connection with this privacy policy shall first be attempted to be resolved through mediation.',
  };

  policy += `## 14. Dispute Resolution

${disputeText[disputeResolution]}

---

*This privacy policy was generated using the Privacy Policy Generator by ${businessInfo.businessName}.*
`;

  return policy;
};

// ============================================
// Export Formatters
// ============================================

export const exportAsHTML = (markdown: string, businessName: string): string => {
  // Convert markdown to basic HTML
  let html = markdown
    // Headers
    .replace(/^# (.*$)/gm, '<h1>$1</h1>')
    .replace(/^## (.*$)/gm, '<h2>$1</h2>')
    .replace(/^### (.*$)/gm, '<h3>$1</h3>')
    // Bold
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    // Lists
    .replace(/^- (.*$)/gm, '<li>$1</li>')
    // Paragraphs
    .replace(/\n\n/g, '</p><p>')
    // Horizontal rules
    .replace(/^---$/gm, '<hr>')
    // Line breaks
    .replace(/  $/gm, '<br>');

  // Wrap lists
  html = html.replace(/(<li>.*<\/li>\n?)+/g, '<ul>$&</ul>');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Privacy Policy - ${businessName}</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      line-height: 1.6;
      max-width: 800px;
      margin: 0 auto;
      padding: 2rem;
      color: #333;
    }
    h1 { color: #111; border-bottom: 2px solid #333; padding-bottom: 0.5rem; }
    h2 { color: #222; margin-top: 2rem; }
    hr { border: none; border-top: 1px solid #ddd; margin: 2rem 0; }
    ul { padding-left: 1.5rem; }
    li { margin-bottom: 0.5rem; }
    strong { color: #111; }
  </style>
</head>
<body>
  ${html}
</body>
</html>`;
};

export const exportAsText = (markdown: string): string => {
  return markdown
    .replace(/^# (.*$)/gm, '$1\n' + '='.repeat(50))
    .replace(/^## (.*$)/gm, '\n$1\n' + '-'.repeat(40))
    .replace(/^### (.*$)/gm, '\n$1')
    .replace(/\*\*(.*?)\*\*/g, '$1')
    .replace(/^---$/gm, '\n' + '-'.repeat(50) + '\n');
};

export const formatForExport = (
  config: PolicyConfig,
  format: ExportFormat
): string => {
  const markdown = generatePolicy(config);

  switch (format) {
    case 'html':
      return exportAsHTML(markdown, config.businessInfo.businessName);
    case 'text':
      return exportAsText(markdown);
    case 'markdown':
    default:
      return markdown;
  }
};
