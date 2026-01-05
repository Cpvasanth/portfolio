import Hero from "@/components/Hero";
import FeaturedWork from "@/components/FeaturedWork";
import VideoSection from "@/components/VideoSection";
import WhatIDeliver from "@/components/WhatIDeliver";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen font-sans selection:bg-black selection:text-white">


      {/* Main Content */}
      <main className="w-full">
        <Hero />
        <FeaturedWork />
        <VideoSection />
        <WhatIDeliver />
        <Footer />
      </main>
    </div>
  );
}
