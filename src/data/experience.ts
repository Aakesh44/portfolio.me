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
                description: [
                    "Next.js & Design System: Led a full-stack rebuild using TypeScript and a custom shadcn/ui library, significantly improving performance, SEO, and accessibility scores.",

                    "Performance Engineering: Optimized large-scale data rendering via Virtualization and Infinite Scroll, using ISR and SSG to ensure high-speed page loads and smooth UX.",

                    "Secure Architecture: Engineered a centralized RBAC system using HOCs to manage permissions across 30+ protected routes for four distinct user roles.",

                    "State & Real-Time Sync: Scaled data management using Zustand and React Query, integrating Socket.io with custom hooks for low-latency real-time communication.",
                ],
                icon: "code",
                skills: [
                    "Next.js",
                    "React.js",
                    "Tailwind CSS",
                    "TypeScript",
                    "React Query",
                    "Zustand",
                    "Socket.io",
                    "Shadcn UI",
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
                description: [
                    "Secure Access: Engineered a centralized RBAC system with middleware-protected routing to manage permissions across four distinct user roles and 30+ routes.",

                    "Real-Time Architecture: Scaled real-time communication by integrating Socket.io with custom hooks and Zustand, reducing latency for notifications and chat.",

                    "Performance Optimization: Eliminated UI lag in high-density views by implementing Windowing and Virtualization for large data tables.",

                    "API Resilience: Standardized data fetching and security by implementing Axios Interceptors for automated JWT refresh logic and global error handling.",
                ],
                icon: "code",
                skills: [
                    "React.js",
                    "React Router",
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
                    "Technical Foundation: Developed a deep understanding of core CS principles, transitioning from theoretical programming to building production-ready applications with modern frameworks.",

                    "Engineering Growth: Gained hands-on exposure to the full software development lifecycle, evolving from academic problem-solving to leading technical implementations and team collaboration.",
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