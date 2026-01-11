
import Image from "next/image";
import AboutHero from "@/components/about/AboutHero";
import ClientVoices from "@/components/about/ClientVoices";
import ImpactStats from "@/components/about/ImpactStats";
import TechToolkit from "@/components/about/TechToolkit";

export default function AboutPage() {
    const testimonials = [
        {
            name: "Sarah Jenkins",
            role: "Founder, Bloom",
            quote: "Vasa transformed our vague idea into a stunning MVP in just 4 weeks.",
            full: "We were struggling to visualize our product. Vasa came in, ran a workshop, and delivered a design system that we still use today. The development phase was smooth, and the final site loads instantly. Highly recommended for any startup founder.",
            color: "bg-[#8b5cf6]" // Purple
        },
        {
            name: "Mark D.",
            role: "CMO, TechFlow",
            quote: "Our conversion rates successfully doubled after the redesign.",
            full: "Most developers just build what you ask for. Vasa asks 'why' and suggests better alternatives. He implemented a headless CMS that saved our marketing team hours every week. The ROI on this project has been incredible.",
            color: "bg-[#3b82f6]" // Blue
        },
        {
            name: "Elena Rodriguez",
            role: "Director of Ops",
            quote: "Technical expertise + Design eye = Dangerous combination.",
            full: "I've worked with many agencies, but Vasa operates on another level. Communication was clear, deadlines were met, and the quality of code was pristine. Our internal dev team was impressed by the handover.",
            color: "bg-[#10b981]" // Emerald
        },
        {
            name: "Alex Chen",
            role: "Product Manager",
            quote: "Fast, reliable, and incredibly creative interactions.",
            full: "We wanted a 'wow' factor for our launch, and Vasa delivered. The scroll animations and micro-interactions make the app feel alive. Despite the heavy visuals, the performance scores remain 90+.",
            color: "bg-[#f59e0b]" // Amber
        }
    ];

    return (
        <section className="relative flex min-h-screen w-full flex-col items-center px-4 py-10 md:px-10 lg:pl-32 overflow-hidden pb-24 md:pb-10">

            {/* Background Decoration */}
            <div className="absolute top-0 right-0 -z-0 h-[500px] w-[500px] rounded-full bg-gradient-to-b from-[#ff7722]/10 to-transparent blur-3xl" />
            <div className="absolute bottom-0 left-0 -z-0 h-[500px] w-[500px] rounded-full bg-gradient-to-t from-purple-500/10 to-transparent blur-3xl opacity-50" />

            {/* Header Video (converted from GIF for 80-90% size reduction) */}
            <div className="relative mb-20 w-full max-w-7xl overflow-hidden rounded-[2rem] shadow-sm">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    className="h-full w-full object-cover"
                    aria-label="Vasa - Creative Developer Header Animation"
                >
                    <source src="/header.mp4" type="video/mp4" />
                    {/* Fallback to GIF if MP4 not available */}
                    <Image
                        src="/header.gif"
                        alt="Vasa - Creative Developer Header Animation"
                        width={1200}
                        height={300}
                        className="h-full w-full object-cover"
                        unoptimized
                    />
                </video>
            </div>

            {/* Profile Section */}
            <AboutHero />

            {/* Section: Impact Stats */}
            <ImpactStats />

            {/* Section: Client Voices (Circular Spinner) */}
            <div className="mb-32 w-full max-w-7xl">
                <div className="mb-12">
                    <h2 className="text-3xl text-center font-bold tracking-tighter sm:text-4xl md:text-5xl">Client Voices</h2>
                </div>
                <ClientVoices testimonials={testimonials} />
            </div>

            {/* Section: The Toolkit (Tech Stack) */}
            <TechToolkit />

        </section>
    );
}
