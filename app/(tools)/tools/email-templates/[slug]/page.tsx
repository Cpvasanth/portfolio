"use client";

import { useState, useEffect, useCallback } from "react";
import { useParams, notFound } from "next/navigation";
import Link from "next/link";
import { FaArrowLeft, FaArrowRight, FaMobileAlt, FaDesktop, FaCopy, FaCheck, FaPalette, FaImage, FaEdit, FaCog, FaShareAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaLink } from "react-icons/fa";
import {
    emailTemplates,
    EmailCustomization,
    defaultCustomization,
    getTemplateDefaults,
    generateEmailHTML,
    emailSafeFonts,
    borderRadiusOptions,
} from "@/utils/email-templates";

export default function TemplateEditorPage() {
    const params = useParams();
    const slug = params.slug as string;
    
    const template = emailTemplates.find(t => t.id === slug);
    
    const [customization, setCustomization] = useState<EmailCustomization>(defaultCustomization);
    const [previewMode, setPreviewMode] = useState<"desktop" | "mobile">("desktop");
    const [copied, setCopied] = useState(false);
    const [activeTab, setActiveTab] = useState<"content" | "images" | "colors" | "buttons" | "social" | "settings">("content");

    useEffect(() => {
        if (template) {
            const templateDefaults = getTemplateDefaults(template.id);
            setCustomization({ ...defaultCustomization, ...templateDefaults });
        }
    }, [template]);

    const handleExportHTML = useCallback(() => {
        if (!template) return;
        const html = generateEmailHTML(template.id, customization);
        navigator.clipboard.writeText(html);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    }, [template, customization]);

    if (!template) {
        notFound();
    }

    const previewHTML = generateEmailHTML(template.id, customization);

    return (
        <div className="h-[calc(100vh-5rem)] flex flex-col">
            {/* Editor Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.06] bg-black">
                <div className="flex items-center gap-4">
                    <Link href="/tools/email-templates" className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors">
                        <FaArrowLeft className="text-sm" />
                        <span className="text-sm font-medium">Back</span>
                    </Link>
                    <div className="h-4 w-px bg-white/10" />
                    <h2 className="text-lg font-medium text-white">{template.name}</h2>
                    <span className="text-xs font-medium text-zinc-500 bg-white/[0.05] px-2 py-1 rounded-md">{template.category}</span>
                </div>

                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1 p-1 bg-white/[0.03] border border-white/[0.06] rounded-lg">
                        <button onClick={() => setPreviewMode("desktop")} className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-all ${previewMode === "desktop" ? "bg-white/[0.1] text-white" : "text-zinc-500 hover:text-white"}`}>
                            <FaDesktop /><span className="hidden sm:inline">Desktop</span>
                        </button>
                        <button onClick={() => setPreviewMode("mobile")} className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-all ${previewMode === "mobile" ? "bg-white/[0.1] text-white" : "text-zinc-500 hover:text-white"}`}>
                            <FaMobileAlt /><span className="hidden sm:inline">Mobile</span>
                        </button>
                    </div>
                    <button onClick={handleExportHTML} className="flex items-center gap-2 px-4 py-2 bg-white text-black font-medium rounded-lg hover:bg-zinc-200 transition-all">
                        {copied ? <><FaCheck /><span>Copied!</span></> : <><FaCopy /><span>Export HTML</span></>}
                    </button>
                </div>
            </div>

            {/* Editor Body */}
            <div className="flex-1 flex overflow-hidden">
                {/* Preview Panel */}
                <div className="flex-1 p-6 overflow-auto bg-zinc-950">
                    <div className={`mx-auto transition-all duration-300 ${previewMode === "mobile" ? "max-w-[375px]" : "max-w-[700px]"}`}>
                        <div className="bg-zinc-900 rounded-t-lg p-3 flex items-center gap-2 border border-white/[0.06] border-b-0">
                            <div className="flex gap-1.5">
                                <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                                <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                                <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                            </div>
                            <div className="flex-1 mx-4">
                                <div className="bg-zinc-800 rounded px-3 py-1 text-xs text-zinc-500 text-center">Preview</div>
                            </div>
                        </div>
                        <iframe srcDoc={previewHTML} className="w-full bg-white rounded-b-lg border border-white/[0.06] border-t-0" style={{ height: previewMode === "mobile" ? "667px" : "800px" }} title="Email Preview" />
                    </div>
                </div>

                {/* Customization Panel */}
                <div className="w-96 border-l border-white/[0.06] bg-black flex flex-col overflow-hidden">
                    {/* Tabs */}
                    <div className="flex border-b border-white/[0.06] overflow-x-auto">
                        <TabButton icon={<FaEdit />} label="Content" isActive={activeTab === "content"} onClick={() => setActiveTab("content")} />
                        <TabButton icon={<FaImage />} label="Images" isActive={activeTab === "images"} onClick={() => setActiveTab("images")} />
                        <TabButton icon={<FaPalette />} label="Colors" isActive={activeTab === "colors"} onClick={() => setActiveTab("colors")} />
                        <TabButton icon={<FaCog />} label="Buttons" isActive={activeTab === "buttons"} onClick={() => setActiveTab("buttons")} />
                        <TabButton icon={<FaShareAlt />} label="Social" isActive={activeTab === "social"} onClick={() => setActiveTab("social")} />
                        <TabButton icon={<FaCog />} label="Settings" isActive={activeTab === "settings"} onClick={() => setActiveTab("settings")} />
                    </div>

                    {/* Tab Content */}
                    <div className="flex-1 overflow-y-auto p-4">
                        {activeTab === "content" && <ContentTab customization={customization} onChange={setCustomization} />}
                        {activeTab === "images" && <ImagesTab customization={customization} onChange={setCustomization} />}
                        {activeTab === "colors" && <ColorsTab customization={customization} onChange={setCustomization} />}
                        {activeTab === "buttons" && <ButtonsTab customization={customization} onChange={setCustomization} />}
                        {activeTab === "social" && <SocialTab customization={customization} onChange={setCustomization} />}
                        {activeTab === "settings" && <SettingsTab customization={customization} onChange={setCustomization} />}
                    </div>

                    {/* CTA Section */}
                    <div className="p-4 border-t border-white/[0.06]">
                        <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                            <p className="text-sm font-medium text-white mb-1">Need Custom Emails?</p>
                            <p className="text-xs text-zinc-500 mb-3">Get personalized email campaigns for your brand.</p>
                            <Link
                                href="/contact"
                                className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-white text-black font-medium text-sm rounded-lg hover:bg-zinc-200 transition-all"
                            >
                                <span>Contact Me</span>
                                <FaArrowRight className="text-xs" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function TabButton({ icon, label, isActive, onClick }: { icon: React.ReactNode; label: string; isActive: boolean; onClick: () => void }) {
    return (
        <button onClick={onClick} className={`flex-shrink-0 flex flex-col items-center gap-1 px-3 py-3 text-xs font-medium transition-all ${isActive ? "text-white border-b-2 border-white bg-white/[0.03]" : "text-zinc-600 hover:text-zinc-400"}`}>
            {icon}<span>{label}</span>
        </button>
    );
}

function InputField({ label, value, onChange, type = "text", placeholder = "", hint = "" }: { label: string; value: string; onChange: (value: string) => void; type?: string; placeholder?: string; hint?: string }) {
    return (
        <div className="mb-4">
            <label className="block text-xs text-zinc-500 mb-1">{label}</label>
            <input type={type} value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} className="w-full px-3 py-2 bg-white/[0.03] border border-white/[0.06] rounded-lg text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-white/[0.15]" />
            {hint && <p className="text-xs text-zinc-600 mt-1">{hint}</p>}
        </div>
    );
}

function TextAreaField({ label, value, onChange, rows = 3 }: { label: string; value: string; onChange: (value: string) => void; rows?: number }) {
    return (
        <div className="mb-4">
            <label className="block text-xs text-zinc-500 mb-1">{label}</label>
            <textarea value={value} onChange={(e) => onChange(e.target.value)} rows={rows} className="w-full px-3 py-2 bg-white/[0.03] border border-white/[0.06] rounded-lg text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-white/[0.15] resize-none" />
        </div>
    );
}

function ColorPicker({ label, value, onChange }: { label: string; value: string; onChange: (value: string) => void }) {
    return (
        <div className="flex items-center justify-between py-3 border-b border-white/[0.04]">
            <span className="text-sm text-zinc-400">{label}</span>
            <div className="flex items-center gap-2">
                <input type="color" value={value} onChange={(e) => onChange(e.target.value)} className="w-8 h-8 rounded-lg border border-white/[0.08] bg-transparent cursor-pointer" />
                <input type="text" value={value} onChange={(e) => onChange(e.target.value)} className="w-20 px-2 py-1 bg-white/[0.03] border border-white/[0.06] rounded text-xs text-zinc-400 font-mono" />
            </div>
        </div>
    );
}

function ToggleSwitch({ label, description, checked, onChange }: { label: string; description?: string; checked: boolean; onChange: (checked: boolean) => void }) {
    return (
        <div className="flex items-start justify-between py-3 border-b border-white/[0.04]">
            <div>
                <span className="text-sm text-zinc-300">{label}</span>
                {description && <p className="text-xs text-zinc-600 mt-0.5">{description}</p>}
            </div>
            <button onClick={() => onChange(!checked)} className={`relative w-10 h-6 rounded-full transition-colors ${checked ? "bg-white" : "bg-zinc-700"}`}>
                <span className={`absolute top-1 w-4 h-4 rounded-full transition-all ${checked ? "left-5 bg-black" : "left-1 bg-zinc-400"}`} />
            </button>
        </div>
    );
}

// Content Tab
function ContentTab({ customization, onChange }: { customization: EmailCustomization; onChange: React.Dispatch<React.SetStateAction<EmailCustomization>> }) {
    return (
        <div>
            <h3 className="text-sm font-medium text-white mb-4">Branding</h3>
            <InputField label="Company Name" value={customization.companyName} onChange={(v) => onChange((p) => ({ ...p, companyName: v }))} />
            <InputField label="Website URL" value={customization.websiteUrl} onChange={(v) => onChange((p) => ({ ...p, websiteUrl: v }))} type="url" placeholder="https://example.com" />

            <h3 className="text-sm font-medium text-white mb-4 mt-6">Email Content</h3>
            <InputField label="Preheader Text" value={customization.preheaderText} onChange={(v) => onChange((p) => ({ ...p, preheaderText: v }))} placeholder="Preview text in email clients" />
            <InputField label="Headline" value={customization.headline} onChange={(v) => onChange((p) => ({ ...p, headline: v }))} />
            <InputField label="Subheadline" value={customization.subheadline} onChange={(v) => onChange((p) => ({ ...p, subheadline: v }))} />
            <TextAreaField label="Body Text" value={customization.bodyText} onChange={(v) => onChange((p) => ({ ...p, bodyText: v }))} rows={4} />
            <TextAreaField label="Secondary Text" value={customization.secondaryText} onChange={(v) => onChange((p) => ({ ...p, secondaryText: v }))} rows={2} />

            <h3 className="text-sm font-medium text-white mb-4 mt-6">Footer Content</h3>
            <InputField label="Copyright Text" value={customization.footerText} onChange={(v) => onChange((p) => ({ ...p, footerText: v }))} />
            <InputField label="Address Line" value={customization.addressLine} onChange={(v) => onChange((p) => ({ ...p, addressLine: v }))} placeholder="123 Business St, City, State" />
            <InputField label="Unsubscribe Text" value={customization.unsubscribeText} onChange={(v) => onChange((p) => ({ ...p, unsubscribeText: v }))} />
        </div>
    );
}

// Images Tab - URL inputs instead of file upload
function ImagesTab({ customization, onChange }: { customization: EmailCustomization; onChange: React.Dispatch<React.SetStateAction<EmailCustomization>> }) {
    return (
        <div>
            {/* Logo Section */}
            <h3 className="text-sm font-medium text-white mb-4">Company Logo</h3>
            <p className="text-xs text-zinc-600 mb-3">Enter the URL of your logo image</p>
            <div className="flex items-center gap-2 mb-2">
                <FaLink className="text-zinc-600" />
                <input 
                    type="url" 
                    value={customization.logoUrl || ""} 
                    onChange={(e) => onChange((p) => ({ ...p, logoUrl: e.target.value || null }))} 
                    placeholder="https://example.com/logo.png" 
                    className="flex-1 px-3 py-2 bg-white/[0.03] border border-white/[0.06] rounded-lg text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-white/[0.15]" 
                />
            </div>
            {customization.logoUrl && (
                <div className="p-4 bg-white/[0.03] rounded-lg border border-white/[0.06] mb-2">
                    <img src={customization.logoUrl} alt="Logo Preview" className="max-h-16 mx-auto object-contain" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                    <button onClick={() => onChange((p) => ({ ...p, logoUrl: null }))} className="mt-3 w-full text-xs text-red-400 hover:text-red-300">Clear URL</button>
                </div>
            )}
            <p className="text-xs text-zinc-700 mb-6">Recommended: 200×50px, PNG or SVG</p>

            {/* Banner Section */}
            <div className="border-t border-white/[0.06] pt-6">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-medium text-white">Banner Image</h3>
                    <ToggleSwitch label="" checked={customization.showBanner} onChange={(v) => onChange((p) => ({ ...p, showBanner: v }))} />
                </div>
                
                {customization.showBanner && (
                    <>
                        <p className="text-xs text-zinc-600 mb-3">Enter the URL of your banner image</p>
                        <div className="flex items-center gap-2 mb-2">
                            <FaLink className="text-zinc-600" />
                            <input 
                                type="url" 
                                value={customization.bannerUrl || ""} 
                                onChange={(e) => onChange((p) => ({ ...p, bannerUrl: e.target.value || null }))} 
                                placeholder="https://example.com/banner.jpg" 
                                className="flex-1 px-3 py-2 bg-white/[0.03] border border-white/[0.06] rounded-lg text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-white/[0.15]" 
                            />
                        </div>
                        {customization.bannerUrl ? (
                            <div className="p-4 bg-white/[0.03] rounded-lg border border-white/[0.06]">
                                <img src={customization.bannerUrl} alt="Banner Preview" className="w-full max-h-32 object-cover rounded" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                                <button onClick={() => onChange((p) => ({ ...p, bannerUrl: null }))} className="mt-3 w-full text-xs text-red-400 hover:text-red-300">Clear URL</button>
                            </div>
                        ) : (
                            <div className="p-6 bg-white/[0.02] rounded-lg border-2 border-dashed border-white/[0.06] text-center">
                                <FaImage className="text-2xl text-zinc-600 mx-auto mb-2" />
                                <p className="text-sm text-zinc-500">Your Banner Image Goes Here</p>
                                <p className="text-xs text-zinc-600 mt-1">Add a URL above • 600×200px recommended</p>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}

// Colors Tab
function ColorsTab({ customization, onChange }: { customization: EmailCustomization; onChange: React.Dispatch<React.SetStateAction<EmailCustomization>> }) {
    return (
        <div>
            <h3 className="text-sm font-medium text-white mb-4">Color Scheme</h3>
            <ColorPicker label="Background" value={customization.backgroundColor} onChange={(v) => onChange((p) => ({ ...p, backgroundColor: v }))} />
            <ColorPicker label="Header" value={customization.headerColor} onChange={(v) => onChange((p) => ({ ...p, headerColor: v }))} />
            <ColorPicker label="Text" value={customization.textColor} onChange={(v) => onChange((p) => ({ ...p, textColor: v }))} />
            <ColorPicker label="Accent" value={customization.accentColor} onChange={(v) => onChange((p) => ({ ...p, accentColor: v }))} />
            <ColorPicker label="Button" value={customization.buttonColor} onChange={(v) => onChange((p) => ({ ...p, buttonColor: v }))} />
            <ColorPicker label="Footer Background" value={customization.footerBgColor} onChange={(v) => onChange((p) => ({ ...p, footerBgColor: v }))} />
        </div>
    );
}

// Buttons Tab
function ButtonsTab({ customization, onChange }: { customization: EmailCustomization; onChange: React.Dispatch<React.SetStateAction<EmailCustomization>> }) {
    return (
        <div>
            <h3 className="text-sm font-medium text-white mb-4">Primary Button</h3>
            <InputField label="Button Text" value={customization.buttonText} onChange={(v) => onChange((p) => ({ ...p, buttonText: v }))} />
            <InputField label="Button URL" value={customization.buttonUrl} onChange={(v) => onChange((p) => ({ ...p, buttonUrl: v }))} type="url" placeholder="https://example.com" />
            
            <h3 className="text-sm font-medium text-white mb-4 mt-6">Secondary Button</h3>
            <ToggleSwitch label="Show Secondary Button" description="Display a second CTA button" checked={customization.showSecondaryButton} onChange={(v) => onChange((p) => ({ ...p, showSecondaryButton: v }))} />
            {customization.showSecondaryButton && (
                <>
                    <div className="mt-4">
                        <InputField label="Button Text" value={customization.secondaryButtonText} onChange={(v) => onChange((p) => ({ ...p, secondaryButtonText: v }))} />
                    </div>
                    <InputField label="Button URL" value={customization.secondaryButtonUrl} onChange={(v) => onChange((p) => ({ ...p, secondaryButtonUrl: v }))} type="url" placeholder="https://example.com" />
                </>
            )}
        </div>
    );
}

// Social Tab - with visual feedback
function SocialTab({ customization, onChange }: { customization: EmailCustomization; onChange: React.Dispatch<React.SetStateAction<EmailCustomization>> }) {
    const hasSocialLinks = customization.facebookUrl || customization.twitterUrl || customization.instagramUrl || customization.linkedinUrl || customization.youtubeUrl;
    
    return (
        <div>
            <h3 className="text-sm font-medium text-white mb-2">Social Links</h3>
            <p className="text-xs text-zinc-600 mb-4">Add your social media URLs. Icons will appear in the email footer.</p>
            
            <ToggleSwitch label="Show Social Icons" description="Display social media icons in footer" checked={customization.showSocialLinks} onChange={(v) => onChange((p) => ({ ...p, showSocialLinks: v }))} />
            
            {customization.showSocialLinks && (
                <>
                    {/* Preview of active social links */}
                    {hasSocialLinks && (
                        <div className="mt-4 p-3 bg-white/[0.02] rounded-lg border border-white/[0.06]">
                            <p className="text-xs text-zinc-500 mb-2">Active in footer:</p>
                            <div className="flex gap-2">
                                {customization.facebookUrl && <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center"><FaFacebook className="text-white text-xs" /></div>}
                                {customization.twitterUrl && <div className="w-6 h-6 rounded-full bg-black border border-white/20 flex items-center justify-center"><FaTwitter className="text-white text-xs" /></div>}
                                {customization.instagramUrl && <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 flex items-center justify-center"><FaInstagram className="text-white text-xs" /></div>}
                                {customization.linkedinUrl && <div className="w-6 h-6 rounded-full bg-blue-700 flex items-center justify-center"><FaLinkedin className="text-white text-xs" /></div>}
                                {customization.youtubeUrl && <div className="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center"><FaYoutube className="text-white text-xs" /></div>}
                            </div>
                        </div>
                    )}
                    
                    <div className="mt-4 space-y-4">
                        <div className="flex items-center gap-3">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${customization.facebookUrl ? 'bg-blue-600' : 'bg-zinc-800'}`}>
                                <FaFacebook className="text-white text-sm" />
                            </div>
                            <input 
                                type="url" 
                                value={customization.facebookUrl} 
                                onChange={(e) => onChange((p) => ({ ...p, facebookUrl: e.target.value }))} 
                                placeholder="https://facebook.com/yourpage" 
                                className="flex-1 px-3 py-2 bg-white/[0.03] border border-white/[0.06] rounded-lg text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-white/[0.15]" 
                            />
                        </div>
                        <div className="flex items-center gap-3">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 border ${customization.twitterUrl ? 'bg-black border-white/20' : 'bg-zinc-800 border-transparent'}`}>
                                <FaTwitter className="text-white text-sm" />
                            </div>
                            <input 
                                type="url" 
                                value={customization.twitterUrl} 
                                onChange={(e) => onChange((p) => ({ ...p, twitterUrl: e.target.value }))} 
                                placeholder="https://x.com/yourhandle" 
                                className="flex-1 px-3 py-2 bg-white/[0.03] border border-white/[0.06] rounded-lg text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-white/[0.15]" 
                            />
                        </div>
                        <div className="flex items-center gap-3">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${customization.instagramUrl ? 'bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400' : 'bg-zinc-800'}`}>
                                <FaInstagram className="text-white text-sm" />
                            </div>
                            <input 
                                type="url" 
                                value={customization.instagramUrl} 
                                onChange={(e) => onChange((p) => ({ ...p, instagramUrl: e.target.value }))} 
                                placeholder="https://instagram.com/yourprofile" 
                                className="flex-1 px-3 py-2 bg-white/[0.03] border border-white/[0.06] rounded-lg text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-white/[0.15]" 
                            />
                        </div>
                        <div className="flex items-center gap-3">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${customization.linkedinUrl ? 'bg-blue-700' : 'bg-zinc-800'}`}>
                                <FaLinkedin className="text-white text-sm" />
                            </div>
                            <input 
                                type="url" 
                                value={customization.linkedinUrl} 
                                onChange={(e) => onChange((p) => ({ ...p, linkedinUrl: e.target.value }))} 
                                placeholder="https://linkedin.com/in/yourprofile" 
                                className="flex-1 px-3 py-2 bg-white/[0.03] border border-white/[0.06] rounded-lg text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-white/[0.15]" 
                            />
                        </div>
                        <div className="flex items-center gap-3">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${customization.youtubeUrl ? 'bg-red-600' : 'bg-zinc-800'}`}>
                                <FaYoutube className="text-white text-sm" />
                            </div>
                            <input 
                                type="url" 
                                value={customization.youtubeUrl} 
                                onChange={(e) => onChange((p) => ({ ...p, youtubeUrl: e.target.value }))} 
                                placeholder="https://youtube.com/@yourchannel" 
                                className="flex-1 px-3 py-2 bg-white/[0.03] border border-white/[0.06] rounded-lg text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-white/[0.15]" 
                            />
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

// Settings Tab
function SettingsTab({ customization, onChange }: { customization: EmailCustomization; onChange: React.Dispatch<React.SetStateAction<EmailCustomization>> }) {
    return (
        <div>
            <h3 className="text-sm font-medium text-white mb-4">Typography</h3>
            <div className="space-y-2 mb-6">
                {emailSafeFonts.map((font) => (
                    <button key={font.value} onClick={() => onChange((p) => ({ ...p, fontFamily: font.value }))} className={`w-full text-left px-3 py-2 rounded-lg border transition-all ${customization.fontFamily === font.value ? "border-white/[0.15] bg-white/[0.05] text-white" : "border-white/[0.06] text-zinc-500 hover:border-white/[0.1]"}`} style={{ fontFamily: font.value }}>
                        <span className="text-sm">{font.name}</span>
                    </button>
                ))}
            </div>

            <h3 className="text-sm font-medium text-white mb-4">Border Radius</h3>
            <div className="grid grid-cols-5 gap-2 mb-6">
                {borderRadiusOptions.map((opt) => (
                    <button key={opt.value} onClick={() => onChange((p) => ({ ...p, borderRadius: opt.value }))} className={`px-2 py-2 rounded text-xs transition-all ${customization.borderRadius === opt.value ? "bg-white text-black" : "bg-white/[0.05] text-zinc-400 hover:bg-white/[0.1]"}`}>
                        {opt.name}
                    </button>
                ))}
            </div>

            <h3 className="text-sm font-medium text-white mb-4">Options</h3>
            <ToggleSwitch label="Show Divider" description="Display a line separator above footer" checked={customization.showDivider} onChange={(v) => onChange((p) => ({ ...p, showDivider: v }))} />
        </div>
    );
}
