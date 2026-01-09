// Email Template Types

export interface EmailTemplate {
    id: string;
    name: string;
    description: string;
    category: string;
    thumbnail: string;
    previewText: string;
}

export interface EmailCustomization {
    // Colors
    backgroundColor: string;
    headerColor: string;
    buttonColor: string;
    textColor: string;
    accentColor: string;
    footerBgColor: string;
    
    // Typography
    fontFamily: string;
    
    // Branding
    logoUrl: string | null;
    bannerUrl: string | null;
    companyName: string;
    websiteUrl: string;
    
    // Content - Header
    preheaderText: string;
    headline: string;
    subheadline: string;
    
    // Content - Body
    bodyText: string;
    secondaryText: string;
    
    // Content - CTA
    buttonText: string;
    buttonUrl: string;
    secondaryButtonText: string;
    secondaryButtonUrl: string;
    showSecondaryButton: boolean;
    
    // Content - Footer
    footerText: string;
    addressLine: string;
    unsubscribeText: string;
    
    // Social Links
    showSocialLinks: boolean;
    facebookUrl: string;
    twitterUrl: string;
    instagramUrl: string;
    linkedinUrl: string;
    youtubeUrl: string;
    
    // Additional Options
    showDivider: boolean;
    showBanner: boolean;
    borderRadius: string;
}
