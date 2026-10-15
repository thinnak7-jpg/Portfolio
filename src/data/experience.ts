import { isFilled } from '../utils/content';

// Entries still using "[...]" placeholders are hidden from the site
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
    company: "Triple T Broadband (3BB) — Nakhon Si Thammarat",
    position: "Intern",
    duration: "Internship during ปวช.",
    responsibilities: [
      "Looked after network equipment and tools in the data center as assigned by the senior engineering team",
      "Checked and verified equipment and parcels shipped from the upstream site",
      "Worked hands-on around server racks, network switches and fiber-optic distribution equipment",
    ],
    technologies: ["Network Equipment", "Fiber Optics", "Data Center"],
  },
].filter((e) => isFilled(e.company) && isFilled(e.position));

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
    school: "King Mongkut's University of Technology North Bangkok (KMUTNB)",
    degree: "Electronic and Telecommunication Engineering (ENET C)",
    duration: "Present",
    description: "Currently studying Electronic and Telecommunication Engineering, building on my vocational background in electronics and device-control programming. Won 1st Runner-up at CDG Hackathon 2025 with an AI-assisted city issue management platform.",
  },
  {
    id: "2",
    school: "Nakhon Si Thammarat Technical College",
    degree: "Vocational Certificate (ปวช.) — Electronics",
    duration: "From 2020",
    description: "Competed in device-control programming from college to national level — gold medals at the college, provincial and Southern regional rounds, and a silver medal (4th runner-up) at the national Or.Wor.Tor. skills competition in 2022. Also built award-winning assistive devices for physical therapy.",
  },
].filter((e) => isFilled(e.school) && isFilled(e.degree));

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
    title: "CDG Hackathon 2025 — 1st Runner-up",
    description: "AI-assisted city issue management platform, CDG Hackathon 2025 x 3 Phra Chom Klao, CDG House, Bangkok.",
    date: "Aug 2025",
    category: "Hackathon",
  },
  {
    id: "2",
    title: "National Silver Medal — Device Control Programming",
    description: "4th runner-up at the 30th national Or.Wor.Tor. vocational skills competition (Nan & Phrae).",
    date: "Feb 2022",
    category: "Competition",
  },
  {
    id: "3",
    title: "Southern Regional Gold Medal — Device Control Programming",
    description: "Winner at the 32nd Southern regional Or.Wor.Tor. competition in Trang. Also won gold at the college and provincial rounds (Dec 2021).",
    date: "Feb 2022",
    category: "Competition",
  },
  {
    id: "4",
    title: "Vocational Innovation Award — Gold, 1st Runner-up",
    description: "Leg muscle rehabilitation device, provincial young inventors' contest, quality-of-life category.",
    date: "Apr 2021",
    category: "Innovation",
  },
].filter((a) => isFilled(a.title));
