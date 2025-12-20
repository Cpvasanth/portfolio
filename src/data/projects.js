import fashionImg from "../assets/fashion-ecommerce.png";
import rentopiaImg from "../assets/rentopia.png";
import cloudChainImg from "../assets/cloud-chain.png";
import kurukshetraImg from "../assets/kurukshetra.png";

export const projects = [
    {
        name: "Fashion E-commerce Web Application",
        description: "A modern e-commerce platform for fashion products with secure online payments and a smooth shopping experience",
        img: fashionImg,
        tags: ["Next.js", "Stripe", "Firebase"],
        liveDemo: "https://fashion.synt-x.com/",
        codeLink: "https://github.com/Cpvasanth/fashion/",
    },
    {
        name: "Rentopia",
        description: "Rentopia is a modern house renting app that simplifies the process of finding, listing, and managing rental properties. It connects renters with verified landlords, offering intuitive search filters, virtual tours, secure payments, and instant messaging — all in one platform. Whether you’re looking for a cozy apartment or managing multiple listings, Rentopia makes renting fast, transparent, and hassle-free",
        img: rentopiaImg,
        tags: ["NextJs", "React", "TailwindCSS", "Typescript"],
        liveDemo: "https://rentopia.synt-x.com/",
        codeLink: "https://github.com/Cpvasanth/rentopia",
    },
    {
        name: "Cloud Chain",
        description: "CloudChain is a next-generation hybrid cloud storage platform inspired by Google Drive. It offers secure file storage and management by blending centralized cloud infrastructure with decentralized storage solutions like IPFS/Filecoin. Built with a modern tech stack — React 19, Next.js 15, Appwrite, Tailwind CSS, ShadCN, and TypeScript — CloudChain ensures speed, privacy, and scalability for the future of personal and enterprise file storage.",
        img: cloudChainImg,
        tags: ["NextJS", "Dapp", "Supabase"],
        liveDemo: "https://github.com/Cpvasanth/cloud-chain",
        codeLink: "https://github.com/Cpvasanth/cloud-chain",
    },
    {
        name: "Kurukshetra Store",
        description: "An e-commerce platform for buying goods.",
        img: kurukshetraImg,
        tags: ["NextJs", "typescript", "TailwindCSS", "Firebase"],
        liveDemo: "https://kurukshetra-pi.vercel.app/",
        codeLink: "https://github.com/Cpvasanth/Kurukshetra-V1",
    },
];
