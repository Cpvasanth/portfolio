// Promotion Email Template
import { EmailCustomization } from "../types";

export const promotionDefaults: Partial<EmailCustomization> = {
    headline: "50% OFF",
    subheadline: "Limited time offer - Don't miss out!",
    bodyText: "For a limited time only, enjoy 50% off on all our products. Use code SAVE50 at checkout. This offer won't last long!",
    secondaryText: "*Terms and conditions apply. Offer valid until end of month.",
    buttonText: "Shop Now",
    buttonUrl: "https://yourwebsite.com/shop",
    preheaderText: "Exclusive deal inside - 50% off everything!",
    buttonColor: "#ef4444",
    accentColor: "#ef4444",
};

export function generatePromotionHTML(customization: EmailCustomization): string {
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
        addressLine,
        unsubscribeText,
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
    const buttonStyles = `display: inline-block; background-color: ${buttonColor}; color: #ffffff; padding: 18px 48px; text-decoration: none; border-radius: ${borderRadius}; font-weight: 600; font-size: 18px;`;
    const secondaryButtonStyles = `display: inline-block; background-color: transparent; color: ${buttonColor}; padding: 12px 28px; text-decoration: none; border-radius: ${borderRadius}; font-weight: 600; font-size: 14px; border: 2px solid ${buttonColor};`;

    const logoHTML = logoUrl
        ? `<a href="${websiteUrl}" style="text-decoration: none;"><img src="${logoUrl}" alt="${companyName}" style="max-height: 50px; max-width: 200px;" /></a>`
        : `<a href="${websiteUrl}" style="color: #ffffff; font-size: 24px; font-weight: bold; text-decoration: none;">${companyName}</a>`;

    // Banner HTML
    const bannerHTML = showBanner ? (bannerUrl 
        ? `<tr><td><img src="${bannerUrl}" alt="Banner" style="width: 100%; height: auto; display: block;" /></td></tr>`
        : `<tr><td style="background: linear-gradient(135deg, ${accentColor}22 0%, ${headerColor}22 100%); padding: 60px 40px; text-align: center;">
            <div style="border: 2px dashed ${accentColor}; border-radius: 8px; padding: 40px 20px; background-color: rgba(255,255,255,0.5);">
                <p style="margin: 0; font-size: 14px; color: #71717a; font-weight: 500;">Your Product Banner Goes Here</p>
                <p style="margin: 8px 0 0; font-size: 12px; color: #a1a1aa;">Recommended size: 600×300px</p>
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
    <title>${headline}</title>
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
                        <td style="background-color: ${accentColor}; padding: 60px 40px; text-align: center;">
                            <h1 style="margin: 0 0 8px; font-size: 48px; font-weight: 800; color: #ffffff; text-transform: uppercase; letter-spacing: -1px;">${headline}</h1>
                            <p style="margin: 0; font-size: 20px; color: rgba(255,255,255,0.9);">${subheadline}</p>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 48px 40px; text-align: center;">
                            <p style="margin: 0 0 32px; font-size: 16px; color: ${textColor}; line-height: 1.7;">${bodyText}</p>
                            <table role="presentation" cellpadding="0" cellspacing="0" align="center">
                                <tr>
                                    <td style="padding-right: ${showSecondaryButton ? '12px' : '0'};"><a href="${buttonUrl}" style="${buttonStyles}">${buttonText}</a></td>
                                    ${showSecondaryButton ? `<td>${secondaryButtonHTML}</td>` : ''}
                                </tr>
                            </table>
                            <p style="margin: 24px 0 0; font-size: 14px; color: ${textColor}; opacity: 0.7;">${secondaryText}</p>
                        </td>
                    </tr>
                    <tr>
                        <td style="background-color: ${footerBgColor}; padding: 32px 40px; text-align: center;">
                            ${socialHTML ? `<div style="margin-bottom: 20px;">${socialHTML}</div>` : ''}
                            <p style="margin: 0 0 8px; font-size: 13px; color: rgba(255,255,255,0.7);">${footerText}</p>
                            <p style="margin: 0 0 12px; font-size: 12px; color: rgba(255,255,255,0.5);">${addressLine}</p>
                            <a href="#" style="color: rgba(255,255,255,0.7); text-decoration: underline; font-size: 12px;">${unsubscribeText}</a>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>`;
}
