import { Experience } from "@/types/types";
import thinsil from "@/assets/images/thinsil2.png";
import degree from "@/assets/images/graduation-hat.png";

export const EXPERIENCES: Experience[] = [
    {
        id: "thinsil",
        companyName: "Thinsil Technologies",
        companyLogo: thinsil,
        isCurrentEmployer: true,
        positions: [
            {
                id: "thinsil-frontend-dev",
                title: "Frontend Developer",
                period: {
                    start: "Apr 2024",
                },
                employmentType: "Full-time",
                description:[
                    "Rebuilt the SaaS application using Next.js with TypeScript for scalability.",
                    "Implemented SEO, SSR, and SSG to maximize Next.js features and performance.",
                    "Developed a real-time chat functionality for seamless communication.",
                    "Ensured pixel-perfect implementation, matching code precisely to design specifications.",
                    "Collaborated with designers and backend engineers to deliver a high-quality, production-ready product."
                ],
                icon:"code",
                skills:[
                    "Next.js",
                    "Tailwind CSS",
                    "TypeScript",
                    "Git"
                ],
                isExpanded: true
            },
            {
                id: "thinsil-frontend-intern",
                title: "Frontend Intern",
                period: {
                    start: "Dec 2023",
                    end: "Mar 2023"
                },
                employmentType: "Internship",
                description:[
                    "Built a SaaS application using React with a well-designed, functional UI.",
                    "Integrated WebSocket to enable real-time notifications.",
                    "Optimized the codebase for production performance and scalability.",
                    "Delivered my first real-time project, gaining hands-on industry experience."
                ],
                icon:"code",
                skills:[
                    "React.js",
                    "Tailwind CSS",
                    "JavaScript",
                    "Git"
                ]
            }
        ]
    },
    {
        id: "Education",
        companyName: "Education",
        companyLogo: degree,
        positions: [
            {

                id: "muslim-arts-college",
                title: "Manonmaniam Sundaranar University",
                employmentType: "Bachelor's Degree in Computer Science",
                period: {
                    start: "2020",
                    end: "2023"
                },
                description: [
                    "During my university years, I gained a strong foundation in computer science and software engineering, which exposed me to the core principles of programming, problem-solving, and modern technologies.", 
                    " This experience sparked my passion for development and prepared me to step into the field as a software engineer, eager to keep learning and building."
                ],
                icon: "education",
                skills: [
                    "Computer Science",
                    "Software Engineering"
                ]
            }
        ]
    }
]