// Privacy Policy Generator - Default Values and Options

import {
  PolicyConfig,
  DataType,
  CollectionMethod,
  DataUsage,
  CookieType,
  AnalyticsTool,
  ThirdPartyType,
  UserRight,
  Jurisdiction,
  BusinessType,
} from './types';

// ============================================
// Option Labels (for UI display)
// ============================================

export const DATA_TYPE_LABELS: Record<DataType, { label: string; description: string }> = {
  personal_identifiers: {
    label: 'Personal Identifiers',
    description: 'Name, email, phone number, physical address',
  },
  technical_data: {
    label: 'Technical Data',
    description: 'IP address, browser type, device information',
  },
  location_data: {
    label: 'Location Data',
    description: 'GPS coordinates, general geographic location',
  },
  financial_info: {
    label: 'Financial Information',
    description: 'Payment details, transaction history, billing address',
  },
  behavioral_data: {
    label: 'Behavioral Data',
    description: 'Browsing history, preferences, interactions',
  },
  health_data: {
    label: 'Health Data',
    description: 'Medical information, fitness data',
  },
  biometric_data: {
    label: 'Biometric Data',
    description: 'Fingerprints, facial recognition, voice patterns',
  },
  other: {
    label: 'Other Data',
    description: 'Custom data types specific to your business',
  },
};

export const COLLECTION_METHOD_LABELS: Record<CollectionMethod, { label: string; description: string }> = {
  contact_forms: {
    label: 'Contact Forms',
    description: 'Data submitted through contact or inquiry forms',
  },
  registration: {
    label: 'Account Registration',
    description: 'Information provided during sign-up or registration',
  },
  cookies: {
    label: 'Cookies & Tracking',
    description: 'Data collected via cookies and similar technologies',
  },
  analytics: {
    label: 'Analytics Tools',
    description: 'Data gathered through analytics platforms',
  },
  third_party: {
    label: 'Third-Party Sources',
    description: 'Information received from external services',
  },
  server_logs: {
    label: 'Automatic Server Logs',
    description: 'Automatically collected server access logs',
  },
  user_content: {
    label: 'User-Generated Content',
    description: 'Content uploaded or created by users',
  },
  purchases: {
    label: 'Purchases & Transactions',
    description: 'Data collected during purchases',
  },
};

export const DATA_USAGE_LABELS: Record<DataUsage, { label: string; description: string }> = {
  provide_services: {
    label: 'Provide Services',
    description: 'To deliver and maintain our services',
  },
  improve_services: {
    label: 'Improve Services',
    description: 'To enhance and optimize user experience',
  },
  send_updates: {
    label: 'Send Updates',
    description: 'To send important notifications and updates',
  },
  marketing: {
    label: 'Marketing Communications',
    description: 'To send promotional content and newsletters',
  },
  personalization: {
    label: 'Personalization',
    description: 'To customize user experience and content',
  },
  analytics: {
    label: 'Analytics',
    description: 'To measure and analyze usage patterns',
  },
  advertising: {
    label: 'Advertising',
    description: 'To display and measure advertisements',
  },
  legal_compliance: {
    label: 'Legal Compliance',
    description: 'To comply with legal obligations',
  },
};

export const COOKIE_TYPE_LABELS: Record<CookieType, { label: string; description: string }> = {
  essential: {
    label: 'Essential Cookies',
    description: 'Required for basic website functionality',
  },
  functional: {
    label: 'Functional Cookies',
    description: 'Remember preferences and settings',
  },
  analytics: {
    label: 'Analytics Cookies',
    description: 'Track usage and performance',
  },
  advertising: {
    label: 'Advertising Cookies',
    description: 'Deliver and measure targeted ads',
  },
};

export const ANALYTICS_TOOL_LABELS: Record<AnalyticsTool, string> = {
  google_analytics: 'Google Analytics',
  meta_pixel: 'Meta Pixel (Facebook)',
  hotjar: 'Hotjar',
  mixpanel: 'Mixpanel',
  amplitude: 'Amplitude',
  plausible: 'Plausible Analytics',
  other: 'Other Analytics Tool',
};

export const THIRD_PARTY_LABELS: Record<ThirdPartyType, { label: string; description: string }> = {
  analytics_providers: {
    label: 'Analytics Providers',
    description: 'Services that analyze website traffic and usage',
  },
  advertising_networks: {
    label: 'Advertising Networks',
    description: 'Ad platforms and marketing services',
  },
  payment_processors: {
    label: 'Payment Processors',
    description: 'Services that handle payments (Stripe, PayPal, etc.)',
  },
  email_providers: {
    label: 'Email Service Providers',
    description: 'Email marketing and transactional email services',
  },
  social_media: {
    label: 'Social Media Platforms',
    description: 'Social sharing and login integrations',
  },
  cloud_hosting: {
    label: 'Cloud Hosting Providers',
    description: 'Cloud infrastructure and storage services',
  },
  customer_support: {
    label: 'Customer Support Tools',
    description: 'Help desk and chat support services',
  },
  other: {
    label: 'Other Third Parties',
    description: 'Additional third-party integrations',
  },
};

export const USER_RIGHT_LABELS: Record<UserRight, { label: string; description: string }> = {
  access: {
    label: 'Right to Access',
    description: 'Request a copy of personal data',
  },
  deletion: {
    label: 'Right to Deletion',
    description: 'Request deletion of personal data (Right to be Forgotten)',
  },
  portability: {
    label: 'Right to Portability',
    description: 'Receive data in a portable format',
  },
  rectification: {
    label: 'Right to Rectification',
    description: 'Correct inaccurate personal data',
  },
  opt_out: {
    label: 'Right to Opt-Out',
    description: 'Opt-out of data collection or marketing',
  },
  restrict_processing: {
    label: 'Right to Restrict Processing',
    description: 'Limit how data is processed',
  },
  withdraw_consent: {
    label: 'Right to Withdraw Consent',
    description: 'Revoke previously given consent',
  },
};

export const JURISDICTION_LABELS: Record<Jurisdiction, { label: string; regulation: string }> = {
  us: {
    label: 'United States',
    regulation: 'COPPA',
  },
  california: {
    label: 'California, USA',
    regulation: 'CalOPPA / CCPA',
  },
  eu: {
    label: 'European Union',
    regulation: 'GDPR',
  },
  canada: {
    label: 'Canada',
    regulation: 'PIPEDA',
  },
  global: {
    label: 'Global / Worldwide',
    regulation: 'Multiple Regulations',
  },
};

export const BUSINESS_TYPE_LABELS: Record<BusinessType, string> = {
  website: 'Website',
  mobile_app: 'Mobile Application',
  ecommerce: 'E-commerce Store',
  saas: 'SaaS / Web Application',
};

export const DATA_RETENTION_LABELS = {
  '30_days': '30 Days',
  '1_year': '1 Year',
  '3_years': '3 Years',
  '5_years': '5 Years',
  indefinite: 'As long as necessary',
  custom: 'Custom Period',
};

export const DISPUTE_METHOD_LABELS = {
  arbitration: 'Binding Arbitration',
  courts: 'Courts of Law',
  mediation: 'Mediation',
};

// ============================================
// Default Policy Configuration
// ============================================

export const getDefaultConfig = (): PolicyConfig => ({
  // Step 1: Assessment
  businessInfo: {
    businessName: '',
    websiteUrl: '',
    contactEmail: '',
    physicalAddress: '',
    businessType: 'website',
  },
  jurisdictions: ['global'],

  // Step 2: Data Collection
  dataTypes: ['personal_identifiers', 'technical_data'],
  collectionMethods: ['contact_forms', 'cookies'],
  dataUsage: ['provide_services', 'improve_services'],
  childrenPrivacy: {
    targetsChildren: false,
    minimumAge: 13,
  },

  // Step 3: Cookies & Third Parties
  cookies: {
    usesCookies: true,
    cookieTypes: ['essential'],
  },
  analyticsTools: [],
  thirdParties: [],
  sellsData: false,
  sharesDataWithThirdParties: false,

  // Step 4: User Rights & Security
  userRights: ['access', 'deletion', 'opt_out'],
  security: {
    measures: '',
    encryption: true,
    accessControls: true,
    regularAudits: false,
  },
  dataRetention: '1_year',
  includeBusinessTransfer: true,
  disputeResolution: 'courts',

  // Step 5: Dates
  effectiveDate: new Date().toISOString().split('T')[0],
  lastUpdated: new Date().toISOString().split('T')[0],
});
