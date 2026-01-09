// Welcome Email Template
import { EmailCustomization } from "../types";

export const welcomeDefaults: Partial<EmailCustomization> = {
    headline: "Welcome Aboard!",
    subheadline: "We're thrilled to have you join us",
    bodyText: "Thank you for signing up! We're excited to have you as part of our community. Here's how to get started:",
    secondaryText: "Need help? Our support team is available 24/7 to assist you.",
    buttonText: "Get Started",
    buttonUrl: "https://yourwebsite.com/dashboard",
    preheaderText: "Welcome to the family! Let's get you started.",
    buttonColor: "#22c55e",
    accentColor: "#22c55e",
};

export function generateWelcomeHTML(customization: EmailCustomization): string {
    const {
        backgroundColor,
        headerColor,
        buttonColor,
        textColor,
        accentColor,
        footerBgColor,
        fontFamily,
        logoUrl,
        bannerUrl,
        companyName,
        websiteUrl,
        preheaderText,
        headline,
        subheadline,
        bodyText,
        secondaryText,
        buttonText,
        buttonUrl,
        secondaryButtonText,
        secondaryButtonUrl,
        showSecondaryButton,
        footerText,
        showSocialLinks,
        showBanner,
        borderRadius,
        facebookUrl,
        twitterUrl,
        instagramUrl,
        linkedinUrl,
        youtubeUrl,
    } = customization;

    const baseStyles = `margin: 0; padding: 0; font-family: ${fontFamily}; -webkit-font-smoothing: antialiased;`;
    const containerStyles = `max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: ${borderRadius}; overflow: hidden;`;
    const headerStyles = `background-color: ${headerColor}; padding: 32px 40px; text-align: center;`;
    const buttonStyles = `display: inline-block; background-color: ${buttonColor}; color: #ffffff; padding: 14px 32px; text-decoration: none; border-radius: ${borderRadius}; font-weight: 600; font-size: 16px;`;
    const secondaryButtonStyles = `display: inline-block; background-color: transparent; color: ${buttonColor}; padding: 12px 28px; text-decoration: none; border-radius: ${borderRadius}; font-weight: 600; font-size: 14px; border: 2px solid ${buttonColor};`;

    const logoHTML = logoUrl
        ? `<a href="${websiteUrl}" style="text-decoration: none;"><img src="${logoUrl}" alt="${companyName}" style="max-height: 50px; max-width: 200px;" /></a>`
        : `<a href="${websiteUrl}" style="color: #ffffff; font-size: 24px; font-weight: bold; text-decoration: none;">${companyName}</a>`;

    // Banner HTML
    const bannerHTML = showBanner ? (bannerUrl 
        ? `<tr><td><img src="${bannerUrl}" alt="Welcome Banner" style="width: 100%; height: auto; display: block;" /></td></tr>`
        : `<tr><td style="background: linear-gradient(135deg, ${accentColor}22 0%, ${headerColor}22 100%); padding: 60px 40px; text-align: center;">
            <div style="border: 2px dashed ${accentColor}; border-radius: 8px; padding: 40px 20px; background-color: rgba(255,255,255,0.5);">
                <p style="margin: 0; font-size: 14px; color: #71717a; font-weight: 500;">Your Welcome Banner Goes Here</p>
                <p style="margin: 8px 0 0; font-size: 12px; color: #a1a1aa;">Recommended size: 600×200px</p>
            </div>
        </td></tr>`) : '';

    const iconStyle = `display: inline-block; width: 32px; height: 32px; background-color: ${accentColor}; border-radius: 50%; margin: 0 4px; text-align: center; line-height: 32px; font-size: 14px; color: #ffffff; text-decoration: none;`;
    let socialHTML = '';
    if (showSocialLinks) {
        if (facebookUrl) socialHTML += `<a href="${facebookUrl}" style="${iconStyle}" title="Facebook">f</a>`;
        if (twitterUrl) socialHTML += `<a href="${twitterUrl}" style="${iconStyle}" title="Twitter/X">𝕏</a>`;
        if (instagramUrl) socialHTML += `<a href="${instagramUrl}" style="${iconStyle}" title="Instagram">✦</a>`;
        if (linkedinUrl) socialHTML += `<a href="${linkedinUrl}" style="${iconStyle}" title="LinkedIn">in</a>`;
        if (youtubeUrl) socialHTML += `<a href="${youtubeUrl}" style="${iconStyle}" title="YouTube">▶</a>`;
    }

    const secondaryButtonHTML = showSecondaryButton ? `<a href="${secondaryButtonUrl}" style="${secondaryButtonStyles}">${secondaryButtonText}</a>` : '';

    const preheaderHTML = `
        <div style="display: none; max-height: 0px; overflow: hidden;">${preheaderText}</div>
        <div style="display: none; max-height: 0px; overflow: hidden;">&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;</div>
    `;

    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Welcome to ${companyName}</title>
    <!--[if mso]>
    <noscript><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml></noscript>
    <![endif]-->
</head>
<body style="${baseStyles} background-color: ${backgroundColor};">
    ${preheaderHTML}
    <table role="presentation" cellpadding="0" cellspacing="0" style="width: 100%; background-color: ${backgroundColor};">
        <tr>
            <td align="center" style="padding: 40px 20px;">
                <table role="presentation" cellpadding="0" cellspacing="0" style="${containerStyles}">
                    <tr><td style="${headerStyles}">${logoHTML}</td></tr>
                    ${bannerHTML}
                    <tr>
                        <td style="padding: 48px 40px;">
                            <h1 style="margin: 0 0 24px; font-size: 32px; font-weight: 700; color: ${headerColor};">${headline}</h1>
                            <p style="margin: 0 0 16px; font-size: 16px; color: ${textColor}; line-height: 1.7;">${subheadline}</p>
                            <p style="margin: 0 0 32px; font-size: 15px; color: ${textColor}; line-height: 1.7;">${bodyText}</p>
                            
                            <!-- Steps -->
                            <table role="presentation" cellpadding="0" cellspacing="0" style="width: 100%; margin-bottom: 32px;">
                                <tr>
                                    <td style="padding: 16px; background-color: ${backgroundColor}; border-radius: ${borderRadius};">
                                        <table role="presentation" cellpadding="0" cellspacing="0">
                                            <tr>
                                                <td style="width: 40px; vertical-align: top;">
                                                    <span style="display: inline-block; width: 28px; height: 28px; background-color: ${accentColor}; color: #ffffff; font-size: 14px; font-weight: 600; line-height: 28px; text-align: center; border-radius: 50%;">1</span>
                                                </td>
                                                <td>
                                                    <p style="margin: 0; font-size: 15px; color: ${headerColor}; font-weight: 600;">Complete your profile</p>
                                                    <p style="margin: 4px 0 0; font-size: 14px; color: ${textColor};">Add your details to personalize your experience</p>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                <tr><td style="height: 8px;"></td></tr>
                                <tr>
                                    <td style="padding: 16px; background-color: ${backgroundColor}; border-radius: ${borderRadius};">
                                        <table role="presentation" cellpadding="0" cellspacing="0">
                                            <tr>
                                                <td style="width: 40px; vertical-align: top;">
                                                    <span style="display: inline-block; width: 28px; height: 28px; background-color: ${accentColor}; color: #ffffff; font-size: 14px; font-weight: 600; line-height: 28px; text-align: center; border-radius: 50%;">2</span>
                                                </td>
                                                <td>
                                                    <p style="margin: 0; font-size: 15px; color: ${headerColor}; font-weight: 600;">Explore features</p>
                                                    <p style="margin: 4px 0 0; font-size: 14px; color: ${textColor};">Discover what you can do with our platform</p>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                            
                            <table role="presentation" cellpadding="0" cellspacing="0">
                                <tr>
                                    <td style="padding-right: ${showSecondaryButton ? '12px' : '0'};"><a href="${buttonUrl}" style="${buttonStyles}">${buttonText}</a></td>
                                    ${showSecondaryButton ? `<td>${secondaryButtonHTML}</td>` : ''}
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 0 40px 32px;">
                            <p style="margin: 0; font-size: 14px; color: ${textColor}; line-height: 1.6;">${secondaryText}</p>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 32px 40px; text-align: center; border-top: 1px solid #e4e4e7; background-color: ${footerBgColor};">
                            ${socialHTML ? `<div style="margin-bottom: 20px;">${socialHTML}</div>` : ''}
                            <p style="margin: 0 0 8px; font-size: 14px; color: rgba(255,255,255,0.8);">Need help getting started?</p>
                            <p style="margin: 0 0 16px; font-size: 14px;"><a href="${websiteUrl}/support" style="color: ${accentColor}; text-decoration: none; font-weight: 600;">Contact Support</a></p>
                            <p style="margin: 0; font-size: 12px; color: rgba(255,255,255,0.5);">${footerText}</p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>`;
}
