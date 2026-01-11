"use client";

import { motion } from "framer-motion";
import { SiNextdotjs, SiReact, SiTailwindcss, SiNodedotjs, SiFigma, SiFramer } from "react-icons/si";

export default function TechToolkit() {
    return (
        <div className="w-full max-w-7xl">
            <div className="mb-12 flex items-center justify-between">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">The Toolkit</h2>
                <div className="h-[1px] flex-1 bg-zinc-200 ml-8 hidden md:block" />
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
                <TechItem icon={<SiNextdotjs size={40} />} name="Next.js" />
                <TechItem icon={<SiReact size={40} className="text-[#61dafb]" />} name="React" />
                <TechItem icon={<SiTailwindcss size={40} className="text-[#38bdf8]" />} name="Tailwind" />
                <TechItem icon={<SiFramer size={40} className="text-black" />} name="Motion" />
                <TechItem icon={<SiNodedotjs size={40} className="text-[#339933]" />} name="Node.js" />
                <TechItem icon={<SiFigma size={40} className="text-[#F24E1E]" />} name="Figma" />
            </div>
        </div>
    );
}

function TechItem({ icon, name }: { icon: React.ReactNode; name: string }) {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center justify-center gap-4 rounded-2xl bg-white py-8 shadow-sm transition-shadow hover:shadow-md border border-zinc-100"
        >
            {icon}
            <span className="font-bold text-zinc-700">{name}</span>
        </motion.div>
    )
}
