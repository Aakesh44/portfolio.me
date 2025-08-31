import { StaticImageData } from "next/image";

export type SocialLink = {
    icon: StaticImageData;
    title: string;
    username: string;
    href: string;
}

export type Techstack = {
    name: string;
    icon: StaticImageData;
    href: string;
    darkIcon?: StaticImageData;
}


type Period = {
    start: string;
    end?: string;
}

export type ExperiencePositionType = {
    id: string;
    title: string;
    period: Period,
    employmentType?: string;
    skills: string[]
    description: string[],
    icon: "code" | "education",
    isExpanded?: boolean
}
export type Experience = {
    id: string;
    companyName: string;
    companyLogo?: StaticImageData | string;
    isCurrentEmployer?: boolean;
    positions: ExperiencePositionType[]
}

export type Project = {
    id: string;
    title: string;
    period: Period;
    link: string;
    techstack: string[];
    description: string[];
    logo: StaticImageData | string;
    isExpanded?: boolean
}