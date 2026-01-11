import Link from "next/link";
import { FaShieldAlt, FaEnvelope, FaPalette, FaCode, FaTag, FaArrowRight } from "react-icons/fa";
import ToolsList from "@/components/tools/ToolsList";
import UpcomingTools from "@/components/tools/UpcomingTools";

const tools = [
    {
        name: "Privacy Policy Generator",
        description: "Generate a customized privacy policy for your website in seconds. Essential for compliance and trust.",
        icon: <FaShieldAlt className="text-4xl text-emerald-500" />,
        href: "/tools/privacy-policy",
        color: "group-hover:border-emerald-500/50",
        bg: "group-hover:bg-emerald-500/10",
        badge: "Free Tool"
    },
    {
        name: "Email Template Builder",
        description: "Create beautiful, responsive HTML email templates with a drag-and-drop interface. Export code ready for campaigns.",
        icon: <FaEnvelope className="text-4xl text-blue-500" />,
        href: "/tools/email-templates",
        color: "group-hover:border-blue-500/50",
        bg: "group-hover:bg-blue-500/10",
        badge: "Beta"
    },
    {
        name: "Meta Tag Generator",
        description: "Boost your SEO with perfectly formatted meta tags. Preview how your site looks on Google, Twitter, and Facebook.",
        icon: <FaTag className="text-4xl text-purple-500" />,
        href: "/tools/meta-tags", // Placeholder
        color: "group-hover:border-purple-500/50",
        bg: "group-hover:bg-purple-500/10",
        badge: "Coming Soon"
    }
];

const upcomingTools = [
    {
        name: "Color Palette Generator",
        description: "AI-powered color schemes for your next project.",
        icon: <FaPalette className="text-3xl" />
    },
    {
        name: "Snippet Manager",
        description: "Store and organize your favorite code snippets.",
        icon: <FaCode className="text-3xl" />
    },
    {
        name: "Portfolio Builder",
        description: "Build a developer portfolio in minutes.",
        icon: <FaShieldAlt className="text-3xl" /> 
    }
];

export default function ToolsPage() {
    return (
        <section className="min-h-screen w-full px-4 py-24 md:px-10 lg:px-20">
            <div className="mx-auto max-w-7xl">
                
                {/* Header */}
                <div className="mb-20 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                    <div className="max-w-2xl">
                        <h1 className="mb-4 text-5xl font-black tracking-tighter text-white md:text-7xl">
                            Developer <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Toolkit</span>
                        </h1>
                        <p className="text-lg text-zinc-400 md:text-xl">
                            A collection of free, powerful tools I built to speed up development workflows and solve common problems. Open source and free for everyone.
                        </p>
                    </div>
                </div>

                {/* Tool Grid (Main) */}
                <ToolsList tools={tools} />

                {/* Upcoming / Roadmap Section */}
                <div className="mt-32 border-t border-zinc-900 pt-16">
                    <h2 className="mb-12 text-center text-2xl font-bold text-zinc-500">
                        In the Pipeline
                    </h2>
                    <UpcomingTools tools={upcomingTools} />
                </div>

            </div>
        </section>
    );
}
