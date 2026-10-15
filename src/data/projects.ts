import { isFilled } from '../utils/content';

export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  category: "Web" | "Mobile" | "Embedded" | "Hackathon" | "Backend" | "Open Source";
};

export const projectsData: Project[] = ([
  {
    id: "1",
    title: "AI City Issue Management Platform",
    description: "A platform where citizens report city problems and AI helps triage and resolve them before handing cases to the city administration — similar in spirit to Traffy Fondue. Won 1st Runner-up at CDG Hackathon 2025 x 3 Phra Chom Klao (CDG House, Bangkok).",
    image: "/certificates/9.webp",
    technologies: ["AI", "PHP", "MySQL", "API"],
    category: "Hackathon",
  },
  {
    id: "2",
    title: "Lung Trainer for Breathing",
    description: "Co-developed a breathing-exercise device with Boromarajonani College of Nursing, Nakhon Si Thammarat, as part of a Nursing Innovation course (September 2022).",
    image: "/certificates/6.webp",
    technologies: ["C", "C++"],
    category: "Embedded",
  },
  {
    id: "3",
    title: "Leg Muscle Rehabilitation Device",
    description: "A physical-therapy device for weakened leg muscles. Won 1st Runner-up (Gold) in the quality-of-life category of the Nakhon Si Thammarat provincial vocational innovation contest (2021).",
    image: "/certificates/8.webp",
    technologies: ["Raspberry Pi", "C#", "C++"],
    category: "Embedded",
  },
] satisfies Project[]).filter((p) => isFilled(p.title)); // entries still using "[...]" placeholders are hidden
