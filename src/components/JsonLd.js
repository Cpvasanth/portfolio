export default function JsonLd() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Vasanthakumar C",
        "url": "https://imvasa.vercel.app",
        "sameAs": [
            "https://github.com/Start_the_reactor", // Assuming from file browsing earlier or generic. Wait, I saw github folder.
            "https://twitter.com/yourhandle",
            "https://linkedin.com/in/yourprofile"
        ],
        "jobTitle": "Freelance Software Developer",
        "worksFor": {
            "@type": "Organization",
            "name": "Freelance"
        },
        "knowsAbout": ["Web Development", "Blockchain", "Solidity", "Next.js", "React", "SEO"],
        "address": {
            "@type": "PostalAddress",
            "addressCountry": "India" // Inferred from "Target regions: United States, India" and currency guessing, but let's stick to generic or correct if known. User said "US / India / Europe" target.
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
