// Event Email Template
import { EmailCustomization } from "../types";

export const eventDefaults: Partial<EmailCustomization> = {
    headline: "Annual Conference 2026",
    subheadline: "Join us for an unforgettable experience",
    bodyText: "We're hosting our biggest event of the year and you're invited! Network with industry leaders, attend exclusive workshops, and be the first to see our latest announcements.",
    secondaryText: "Can't make it? Register anyway to receive the event recording.",
    buttonText: "RSVP Now",
    buttonUrl: "https://yourwebsite.com/event/rsvp",
    preheaderText: "You're invited to our Annual Conference 2026!",
    buttonColor: "#3b82f6",
    accentColor: "#3b82f6",
};

export function generateEventHTML(customization: EmailCustomization): string {
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
    const buttonStyles = `display: inline-block; background-color: ${buttonColor}; color: #ffffff; padding: 16px 40px; text-decoration: none; border-radius: ${borderRadius}; font-weight: 600; font-size: 16px;`;
    const secondaryButtonStyles = `display: inline-block; background-color: transparent; color: ${buttonColor}; padding: 12px 28px; text-decoration: none; border-radius: ${borderRadius}; font-weight: 600; font-size: 14px; border: 2px solid ${buttonColor};`;

    const logoHTML = logoUrl
        ? `<a href="${websiteUrl}" style="text-decoration: none;"><img src="${logoUrl}" alt="${companyName}" style="max-height: 50px; max-width: 200px;" /></a>`
        : `<a href="${websiteUrl}" style="color: #ffffff; font-size: 24px; font-weight: bold; text-decoration: none;">${companyName}</a>`;

    // Banner HTML - Event banner
    const bannerHTML = showBanner ? (bannerUrl 
        ? `<tr><td><img src="${bannerUrl}" alt="Event Banner" style="width: 100%; height: auto; display: block;" /></td></tr>`
        : `<tr><td style="background: linear-gradient(135deg, ${accentColor}22 0%, ${headerColor}22 100%); padding: 60px 40px; text-align: center;">
            <div style="border: 2px dashed ${accentColor}; border-radius: 8px; padding: 40px 20px; background-color: rgba(255,255,255,0.5);">
                <p style="margin: 0; font-size: 14px; color: #71717a; font-weight: 500;">Your Event Banner Goes Here</p>
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
                        <td style="padding: 48px 40px; text-align: center; background-color: #ffffff;">
                            <p style="margin: 0 0 8px; font-size: 14px; font-weight: 600; color: ${accentColor}; text-transform: uppercase; letter-spacing: 2px;">You're Invited</p>
                            <h1 style="margin: 0 0 16px; font-size: 36px; font-weight: 700; color: ${headerColor};">${headline}</h1>
                            <p style="margin: 0; font-size: 16px; color: ${textColor};">${subheadline}</p>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 0 40px 40px;">
                            <table role="presentation" cellpadding="0" cellspacing="0" style="width: 100%; border: 2px solid ${accentColor}; border-radius: ${borderRadius}; overflow: hidden;">
                                <tr>
                                    <td style="padding: 24px; text-align: center; border-bottom: 1px solid #e4e4e7;">
                                        <p style="margin: 0 0 4px; font-size: 12px; color: #71717a; text-transform: uppercase; letter-spacing: 1px;">When</p>
                                        <p style="margin: 0; font-size: 18px; font-weight: 600; color: ${headerColor};">January 15, 2026 • 6:00 PM</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="padding: 24px; text-align: center;">
                                        <p style="margin: 0 0 4px; font-size: 12px; color: #71717a; text-transform: uppercase; letter-spacing: 1px;">Where</p>
                                        <p style="margin: 0; font-size: 18px; font-weight: 600; color: ${headerColor};">Virtual Event • Online</p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 0 40px 40px;">
                            <p style="margin: 0 0 32px; font-size: 15px; color: ${textColor}; line-height: 1.7; text-align: center;">${bodyText}</p>
                            <table role="presentation" cellpadding="0" cellspacing="0" align="center">
                                <tr>
                                    <td style="padding-right: ${showSecondaryButton ? '12px' : '0'};"><a href="${buttonUrl}" style="${buttonStyles}">${buttonText}</a></td>
                                    ${showSecondaryButton ? `<td>${secondaryButtonHTML}</td>` : ''}
                                </tr>
                            </table>
                            <p style="margin: 24px 0 0; font-size: 14px; color: ${textColor}; text-align: center; opacity: 0.7;">${secondaryText}</p>
                        </td>
                    </tr>
                    <tr>
                        <td style="background-color: ${footerBgColor}; padding: 32px 40px; text-align: center;">
                            ${socialHTML ? `<div style="margin-bottom: 20px;">${socialHTML}</div>` : ''}
                            <p style="margin: 0 0 8px; font-size: 14px; color: rgba(255,255,255,0.9);">We can't wait to see you there!</p>
                            <p style="margin: 0 0 12px; font-size: 12px; color: rgba(255,255,255,0.6);">${footerText}</p>
                            <p style="margin: 0; font-size: 12px; color: rgba(255,255,255,0.5);">${addressLine}</p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>`;
}
