import { Project } from "@/types/types";
import thinsil from "@/assets/images/thinsil2.png";

export const PROJECTS: Project[] = [
    {
        id: "techbench.ai 0",
        title: "Techbench.ai",
        period: {start : "2023"},
        link: "https://techbench.ai",
        techstack: ["Company Project","Next.js", "TypeScript", "React Query", "Tailwind CSS"],
        logo: thinsil,
        description: [
            "A SaaS platform designed to deliver scalable, user-friendly solutions with real-time features and modern web technologies."
        ],
        isExpanded: true
    }
];