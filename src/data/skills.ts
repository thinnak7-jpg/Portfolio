import type { IconType } from 'react-icons';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';

export type SkillCategory = "Frontend" | "Backend" | "Database" | "Programming Languages" | "Tools" | "Frameworks";

export type Skill = {
  name: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "Expert";
  yearsOfExperience: number;
  category: SkillCategory;
  icon: IconType; // import the icon above from react-icons (e.g. FaReact from 'react-icons/fa')
};

export const skillsData: Skill[] = [
  { name: "React", level: "Advanced", yearsOfExperience: 3, category: "Frontend", icon: FaReact },
  { name: "TypeScript", level: "Intermediate", yearsOfExperience: 2, category: "Programming Languages", icon: SiTypescript },
  { name: "Node.js", level: "Intermediate", yearsOfExperience: 2, category: "Backend", icon: FaNodeJs },
];
