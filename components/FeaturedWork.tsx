import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const projects = [
    {
        id: 1,
        title: "Solea Audit Academy",
        category: "Web Development",
        url: "https://www.solea.academy/",
        color: "bg-blue-100",
        colSpan: "md:col-span-2",
    },
    {
        id: 2,
        title: "Rentopia",
        category: "Web App",
        url: "https://rentopia.synt-x.com/",
        color: "bg-purple-100",
        colSpan: "md:col-span-1",
    },
    {
        id: 3,
        title: "Vasam Store",
        category: "E-commerce",
        url: "https://fashion.synt-x.com/",
        color: "bg-pink-100",
        colSpan: "md:col-span-1",
    },
    {
        id: 4,
        title: "Synt-x",
        category: "SEO & Web Development",
        url: "https://synt-x.com/",
        color: "bg-zinc-100",
        colSpan: "md:col-span-2",
    },
];

export default function FeaturedWork() {
    return (
        <section className="w-full px-4 py-20 md:px-10 lg:pl-32">
            <div className="mb-12 flex items-end justify-between">
                <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                    Featured Web Development<br />& SEO Projects
                </h2>
                <Link
                    href="/works"
                    className="hidden items-center gap-2 border-b border-black pb-1 text-sm font-semibold hover:opacity-70 md:flex"
                >
                    View all projects <FaArrowRight />
                </Link>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {projects.map((project) => (
                    <Link
                        key={project.id}
                        href={project.url}
                        target="_blank"
                        className={`group relative block h-80 overflow-hidden rounded-2xl ${project.color} ${project.colSpan} transition-transform hover:scale-[1.02]`}
                    >
                        <div className="absolute bottom-0 left-0 p-8">
                            <span className="mb-2 block text-xs font-bold uppercase tracking-widest opacity-60">
                                {project.category}
                            </span>
                            <h3 className="text-2xl font-bold group-hover:underline">
                                {project.title}
                            </h3>
                        </div>
                        {/* Placeholder for image - using color for now */}
                        <div className="absolute right-4 top-4 opacity-0 transition-opacity group-hover:opacity-100">
                            <div className="rounded-full bg-white p-3 shadow-sm">
                                <FaArrowRight size={16} />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            <div className="mt-12 flex justify-center md:hidden">
                <Link
                    href="/works"
                    className="flex items-center gap-2 border-b border-black pb-1 text-sm font-semibold hover:opacity-70"
                >
                    View all projects <FaArrowRight />
                </Link>
            </div>
        </section>
    );
}
