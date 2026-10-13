export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  category: "Web" | "Mobile" | "FiveM" | "Backend" | "Open Source";
};

export const projectsData: Project[] = [
  {
    id: "1",
    title: "[YOUR PROJECT TITLE 1]",
    description: "[YOUR PROJECT DESCRIPTION 1]",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800", // Placeholder
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    category: "Web",
  },
  {
    id: "2",
    title: "[YOUR PROJECT TITLE 2]",
    description: "[YOUR PROJECT DESCRIPTION 2]",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800", // Placeholder
    technologies: ["Node.js", "Express", "MongoDB"],
    githubUrl: "https://github.com",
    category: "Backend",
  },
];
