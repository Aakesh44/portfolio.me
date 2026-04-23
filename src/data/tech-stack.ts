import { Techstack } from "@/types/types";
import javascript from '@/assets/images/js.jpg';
import typescript from '@/assets/images/typescript.jpg';
import tailwind from "@/assets/images/tailwindcss.png"
import react from "@/assets/images/react.png";
import nextjs from "@/assets/images/nextjs2-light.png";
import nextjsdark from "@/assets/images/nextjs2-dark.jpg";
import shadcn from "@/assets/images/shadcn-ui-light.jpg";
import shadcndark from "@/assets/images/shadcn-ui-dark.png";
import redux from "@/assets/images/redux.png";
import motion from "@/assets/images/motion.png";
import nodejs from "@/assets/images/nodejs.png";
import express from "@/assets/images/express.png";
import mongodb from "@/assets/images/mongodb.png";
import git from "@/assets/images/git.png";
import github from "@/assets/images/github-light.png";
import githubdark from "@/assets/images/github-dark.png";
import reactQuery from "@/assets/images/react-query.png";
import radix from "@/assets/images/radixui.png";
import radixdark from "@/assets/images/radixui-dark.png";
import zustand from "@/assets/images/zustand.png";
import claude from "@/assets/images/claude.png";
import cursor from "@/assets/images/cursor.png";
import cursordark from "@/assets/images/cursor-dark.png";

export const TECH_STACK: Techstack[] = [
    {
        name: "JavaScript",
        icon: javascript,
        href: '#',
    },
    {
        name: "TypeScript",
        icon: typescript,
        href: '#',
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
        href: '#',
    },
    {
        name: "React",
        icon: react,
        href: '#',
    },
    {
        name: "Next.js",
        icon: nextjs,
        darkIcon: nextjsdark,
        href: '#',
    },
    {
        name: "Shadcn UI",
        icon: shadcn,
        darkIcon: shadcndark,
        href: '#',
    },
    {
        name: 'Radix UI',
        icon: radix,
        darkIcon: radixdark,
        href: '#',
    },
    {
        name: "Framer Motion",
        icon: motion,
        href: '#',
    },
    {
        name: "Redux",
        icon: redux,
        href: '#',
    },
    {
        name: "React Query",
        icon: reactQuery,
        href: '#',
    },
    {
        name: "Zustand",
        icon: zustand,
        href: '#',
    },
    {
        name: "Node.js",
        icon: nodejs,
        href: '#',
    },
    {
        name: "Express.js",
        icon: express,
        href: '#',
    },
    {
        name: "MongoDB",
        icon: mongodb,
        href: '#',
    },
    {
        name: "Git",
        icon: git,
        href: '#',
    },
    {
        name: "GitHub",
        icon: github,
        darkIcon: githubdark,
        href: '#',
    },
    {
        name: "Claude AI",
        icon: claude,
        href: '#',
    },
    {
        name: "Cursor",
        icon: cursor,
        darkIcon: cursordark,
        href: '#',
    },
]