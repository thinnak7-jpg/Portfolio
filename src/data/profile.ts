// Fields still set to "[...]" placeholders are hidden on the site (see utils/content.ts)
export const profileData = {
  name: "Thinnakorn Rattana",
  role: "Student | ENET C", // e.g., "Frontend Developer & UI/UX Designer"
  description: "A passionate Electronic and Telecommunication Engineering (ENET C) student eager to learn and build amazing things.", // e.g., "I build pixel-perfect, engaging, and accessible digital experiences."
  profileImage: "/profile.webp",
  resumeUrl: "", // e.g. "/resume.pdf" (put the file in public/) — Resume section and button stay hidden while empty
  socials: {
    github: "https://github.com/thinnak7-jpg",
    facebook: "https://www.facebook.com/ThinnakornRattana?locale=th_TH",
    email: "mailto:Noogpee789@gmail.com",
  },
  about: {
    bio: "I'm an Electronic and Telecommunication Engineering (ENET C) student at KMUTNB who enjoys making hardware and software work together. I started at Nakhon Si Thammarat Technical College, where I competed in device-control programming and went from college gold to a national silver medal. I've also built assistive devices for physical therapy, from a leg muscle rehabilitation device to a breathing trainer made with a nursing college. More recently my team won 1st Runner-up at CDG Hackathon 2025 with an AI-assisted platform for managing city issues.",
    goals: "[YOUR GOALS GO HERE]",
    interests: [] as string[], // e.g. ["Embedded Systems", "IoT", "Robotics"] — hidden while empty
  },
  contact: {
    phone: "0961175559",
    location: "[YOUR CITY, COUNTRY]",
  }
};
