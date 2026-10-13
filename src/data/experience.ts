export type Experience = {
  id: string;
  company: string;
  position: string;
  duration: string;
  responsibilities: string[];
  technologies: string[];
  logo?: string;
};

export const experienceData: Experience[] = [
  {
    id: "1",
    company: "[COMPANY NAME]",
    position: "[YOUR POSITION]",
    duration: "[START DATE - END DATE]",
    responsibilities: [
      "[RESPONSIBILITY 1]",
      "[RESPONSIBILITY 2]",
    ],
    technologies: ["Tech 1", "Tech 2"],
  },
];

export type Education = {
  id: string;
  school: string;
  degree: string;
  duration: string;
  description: string;
  gpa?: string;
  courses?: string[];
  logo?: string;
};

export const educationData: Education[] = [
  {
    id: "1",
    school: "[YOUR SCHOOL]",
    degree: "[YOUR DEGREE]",
    duration: "[START YEAR - END YEAR]",
    description: "[DESCRIPTION OF YOUR STUDIES]",
    gpa: "[YOUR GPA]",
    courses: ["Course 1", "Course 2"],
  }
];

export type Achievement = {
  id: string;
  title: string;
  description: string;
  date: string;
  category: string;
};

export const achievementsData: Achievement[] = [
  {
    id: "1",
    title: "[ACHIEVEMENT TITLE]",
    description: "[ACHIEVEMENT DESCRIPTION]",
    date: "[DATE]",
    category: "Competition",
  }
];
