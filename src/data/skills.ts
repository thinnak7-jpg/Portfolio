export type SkillCategory = "Frontend" | "Backend" | "Database" | "Programming Languages" | "Tools" | "Frameworks";

export type Skill = {
  name: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "Expert";
  yearsOfExperience: number;
  category: SkillCategory;
  iconName: string; // e.g. "FaReact", we will map this to the actual icon component
};

export const skillsData: Skill[] = [
  { name: "React", level: "Advanced", yearsOfExperience: 3, category: "Frontend", iconName: "FaReact" },
  { name: "TypeScript", level: "Intermediate", yearsOfExperience: 2, category: "Programming Languages", iconName: "SiTypescript" },
  { name: "Node.js", level: "Intermediate", yearsOfExperience: 2, category: "Backend", iconName: "FaNodeJs" },
];
