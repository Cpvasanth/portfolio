// Email Templates - Main Export
// Organized folder structure for better maintainability

export * from "./types";
export * from "./defaults";

// Template registry
import { EmailTemplate } from "./types";
import { newsletterDefaults, generateNewsletterHTML } from "./templates/newsletter";
import { promotionDefaults, generatePromotionHTML } from "./templates/promotion";
import { welcomeDefaults, generateWelcomeHTML } from "./templates/welcome";
import { eventDefaults, generateEventHTML } from "./templates/event";
import { EmailCustomization } from "./types";

// Template metadata
export const emailTemplates: EmailTemplate[] = [
    {
        id: "newsletter",
        name: "Newsletter",
        description: "Clean newsletter template perfect for weekly updates and content digests",
        category: "Marketing",
        thumbnail: "📰",
        previewText: "Weekly updates & content",
    },
    {
        id: "promotion",
        name: "Promotion",
        description: "Eye-catching promotional template with bold CTA for sales and offers",
        category: "Sales",
        thumbnail: "🎯",
        previewText: "Special offers & deals",
    },
    {
        id: "welcome",
        name: "Welcome",
        description: "Warm welcome email for new subscribers and customers",
        category: "Onboarding",
        thumbnail: "👋",
        previewText: "Welcome new users",
    },
    {
        id: "event",
        name: "Event",
        description: "Event invitation template with date, time, and RSVP button",
        category: "Events",
        thumbnail: "📅",
        previewText: "Event invitations",
    },
];

// Template defaults lookup
export function getTemplateDefaults(templateId: string): Partial<EmailCustomization> {
    switch (templateId) {
        case "newsletter":
            return newsletterDefaults;
        case "promotion":
            return promotionDefaults;
        case "welcome":
            return welcomeDefaults;
        case "event":
            return eventDefaults;
        default:
            return {};
    }
}

// Generate HTML for any template
export function generateEmailHTML(templateId: string, customization: EmailCustomization): string {
    switch (templateId) {
        case "newsletter":
            return generateNewsletterHTML(customization);
        case "promotion":
            return generatePromotionHTML(customization);
        case "welcome":
            return generateWelcomeHTML(customization);
        case "event":
            return generateEventHTML(customization);
        default:
            return "";
    }
}
