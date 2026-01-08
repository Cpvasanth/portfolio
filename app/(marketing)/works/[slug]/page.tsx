
export default async function ProjectPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const slug = (await params).slug;
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-[#FDFBF7] px-4 font-sans">
            <h1 className="text-4xl font-bold tracking-tighter md:text-6xl text-capitalize">
                {slug.replace(/-/g, " ")}
            </h1>
            <p className="mt-4 text-center text-zinc-500">
                Project case study coming soon.
            </p>
        </div>
    );
}
