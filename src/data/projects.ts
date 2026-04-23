import { Project } from "@/types/types";
import thinsil from "@/assets/images/thinsil2.png";

export const PROJECTS: Project[] = [
    {
        id: "starli",
        title: "Starli",
        period: { start: "2026" },
        link: "https://starli-io.vercel.app/",
        techstack: ["Next.js", "TypeScript", "React Query", "Zustand", "Express.js", "MongoDB"],
        logo: thinsil,
        description: [
            "An Social Networking platform for developers to share their projects, connect with other developers, and get feedback on their work."
        ],
        isExpanded: true
    },
    {
        id: "techbench.ai 0",
        title: "Techbench.ai",
        period: { start: "2023" },
        link: "https://techbench.ai",
        techstack: ["Company Project", "Next.js", "TypeScript", "React Query", "Zustand", "Tailwind CSS"],
        logo: thinsil,
        description: [
            "The B2B resource augmentation platform connecting enterprises with pre-vetted technical professionals for contract engagements."
        ],
    },
];