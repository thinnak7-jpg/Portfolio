import type { IconType } from 'react-icons';
import { FaPython, FaRaspberryPi, FaPhp } from 'react-icons/fa';
import { SiC, SiCplusplus, SiMysql, SiDotnet } from 'react-icons/si';
import { TbApi } from 'react-icons/tb';

export type SkillCategory = "Frontend" | "Backend" | "Database" | "Programming Languages" | "Hardware" | "Tools" | "Frameworks";

export type Skill = {
  name: string;
  level?: "Beginner" | "Intermediate" | "Advanced" | "Expert"; // optional — shows a progress bar when set
  yearsOfExperience?: number;
  category: SkillCategory;
  icon: IconType; // import the icon above from react-icons (e.g. FaReact from 'react-icons/fa')
};

// Skills shown on your certificates — add a level to each if you want the progress bar
export const skillsData: Skill[] = [
  { name: "Python", category: "Programming Languages", icon: FaPython },
  { name: "C", category: "Programming Languages", icon: SiC },
  { name: "C++", category: "Programming Languages", icon: SiCplusplus },
  { name: "C#", category: "Programming Languages", icon: SiDotnet },
  { name: "PHP", category: "Backend", icon: FaPhp },
  { name: "REST APIs", category: "Backend", icon: TbApi },
  { name: "MySQL", category: "Database", icon: SiMysql },
  { name: "Raspberry Pi", category: "Hardware", icon: FaRaspberryPi },
];
