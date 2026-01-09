// Privacy Policy Generator - Type Definitions

// ============================================
// Enums and Constants
// ============================================

export type Jurisdiction = 'us' | 'eu' | 'canada' | 'california' | 'global';

export type BusinessType = 'website' | 'mobile_app' | 'ecommerce' | 'saas';

export type DataType = 
  | 'personal_identifiers'
  | 'technical_data'
  | 'location_data'
  | 'financial_info'
  | 'behavioral_data'
  | 'health_data'
  | 'biometric_data'
  | 'other';

export type CollectionMethod =
  | 'contact_forms'
  | 'registration'
  | 'cookies'
  | 'analytics'
  | 'third_party'
  | 'server_logs'
  | 'user_content'
  | 'purchases';

export type DataUsage =
  | 'provide_services'
  | 'improve_services'
  | 'send_updates'
  | 'marketing'
  | 'personalization'
  | 'analytics'
  | 'advertising'
  | 'legal_compliance';

export type CookieType =
  | 'essential'
  | 'functional'
  | 'analytics'
  | 'advertising';

export type AnalyticsTool =
  | 'google_analytics'
  | 'meta_pixel'
  | 'hotjar'
  | 'mixpanel'
  | 'amplitude'
  | 'plausible'
  | 'other';

export type ThirdPartyType =
  | 'analytics_providers'
  | 'advertising_networks'
  | 'payment_processors'
  | 'email_providers'
  | 'social_media'
  | 'cloud_hosting'
  | 'customer_support'
  | 'other';

export type UserRight =
  | 'access'
  | 'deletion'
  | 'portability'
  | 'rectification'
  | 'opt_out'
  | 'restrict_processing'
  | 'withdraw_consent';

export type DisputeMethod = 'arbitration' | 'courts' | 'mediation';

export type DataRetention = '30_days' | '1_year' | '3_years' | '5_years' | 'indefinite' | 'custom';

// ============================================
// Configuration Interfaces
// ============================================

export interface BusinessInfo {
  businessName: string;
  websiteUrl: string;
  contactEmail: string;
  physicalAddress: string;
  businessType: BusinessType;
  dpoName?: string; // Data Protection Officer (for GDPR)
  dpoEmail?: string;
}

export interface ChildrenPrivacyConfig {
  targetsChildren: boolean;
  minimumAge: number;
  parentalConsentMechanism?: string;
}

export interface CookieConfig {
  usesCookies: boolean;
  cookieTypes: CookieType[];
  cookiePolicyUrl?: string;
}

export interface SecurityConfig {
  measures: string;
  encryption: boolean;
  accessControls: boolean;
  regularAudits: boolean;
}

// ============================================
// Main Policy Configuration
// ============================================

export interface PolicyConfig {
  // Step 1: Assessment
  businessInfo: BusinessInfo;
  jurisdictions: Jurisdiction[];
  
  // Step 2: Data Collection
  dataTypes: DataType[];
  collectionMethods: CollectionMethod[];
  dataUsage: DataUsage[];
  childrenPrivacy: ChildrenPrivacyConfig;
  
  // Step 3: Cookies & Third Parties
  cookies: CookieConfig;
  analyticsTools: AnalyticsTool[];
  thirdParties: ThirdPartyType[];
  sellsData: boolean;
  sharesDataWithThirdParties: boolean;
  
  // Step 4: User Rights & Security
  userRights: UserRight[];
  security: SecurityConfig;
  dataRetention: DataRetention;
  customRetentionPeriod?: string;
  includeBusinessTransfer: boolean;
  disputeResolution: DisputeMethod;
  
  // Step 5: Dates
  effectiveDate: string;
  lastUpdated: string;
}

// ============================================
// Wizard Step State
// ============================================

export type WizardStep = 1 | 2 | 3 | 4 | 5;

export interface WizardState {
  currentStep: WizardStep;
  config: PolicyConfig;
  isPreviewOpen: boolean;
}

// ============================================
// Checklist Item
// ============================================

export interface ChecklistItem {
  id: string;
  label: string;
  isComplete: boolean;
  isRequired: boolean;
}

// ============================================
// Export Format
// ============================================

export type ExportFormat = 'html' | 'markdown' | 'text';
