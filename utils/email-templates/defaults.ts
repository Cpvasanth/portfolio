// Email Template Defaults and Options
import { EmailCustomization } from "./types";

export const defaultCustomization: EmailCustomization = {
    // Colors
    backgroundColor: "#f4f4f5",
    headerColor: "#18181b",
    buttonColor: "#8b5cf6",
    textColor: "#3f3f46",
    accentColor: "#8b5cf6",
    footerBgColor: "#18181b",
    
    // Typography
    fontFamily: "Arial, sans-serif",
    
    // Branding
    logoUrl: null,
    bannerUrl: null,
    companyName: "Your Company",
    websiteUrl: "https://example.com",
    
    // Content - Header
    preheaderText: "Preview text that appears in email clients",
    headline: "Welcome to Our Newsletter",
    subheadline: "Stay updated with the latest news",
    
    // Content - Body
    bodyText: "Thank you for subscribing to our newsletter. We're excited to have you on board!",
    secondaryText: "Have questions? Reply to this email or contact our support team.",
    
    // Content - CTA
    buttonText: "Learn More",
    buttonUrl: "https://example.com",
    secondaryButtonText: "View More",
    secondaryButtonUrl: "https://example.com",
    showSecondaryButton: false,
    
    // Content - Footer
    footerText: "© 2026 Your Company. All rights reserved.",
    addressLine: "123 Business Street, City, State 12345",
    unsubscribeText: "Unsubscribe from these emails",
    
    // Social Links
    showSocialLinks: true,
    facebookUrl: "",
    twitterUrl: "",
    instagramUrl: "",
    linkedinUrl: "",
    youtubeUrl: "",
    
    // Additional Options
    showDivider: true,
    showBanner: true,
    borderRadius: "8px",
};

// Email-safe fonts
export const emailSafeFonts = [
    { name: "Arial", value: "Arial, Helvetica, sans-serif" },
    { name: "Georgia", value: "Georgia, Times, serif" },
    { name: "Helvetica", value: "Helvetica, Arial, sans-serif" },
    { name: "Times New Roman", value: "'Times New Roman', Times, serif" },
    { name: "Trebuchet MS", value: "'Trebuchet MS', sans-serif" },
    { name: "Verdana", value: "Verdana, Geneva, sans-serif" },
];

// Border radius options
export const borderRadiusOptions = [
    { name: "None", value: "0px" },
    { name: "Small", value: "4px" },
    { name: "Medium", value: "8px" },
    { name: "Large", value: "12px" },
    { name: "XL", value: "16px" },
];
