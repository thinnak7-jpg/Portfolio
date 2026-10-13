export type ActivityImage = {
  src: string;
  width: number;
  height: number;
  caption?: string;
};

export type Activity = {
  id: string;
  title: string;
  date: string;
  category: "Workshop" | "Competition" | "Projects" | "Events" | "Certificates" | string;
  description: string;
  coverImage: string;
  images: ActivityImage[];
};

// Add your real activities here (put photos in public/activities/). Example:
// {
//   id: "1",
//   title: "Activity name",
//   date: "March 2025",
//   category: "Workshop",
//   description: "What you did and what you learned.",
//   coverImage: "/activities/1-cover.webp",
//   images: [{ src: "/activities/1-1.webp", width: 1200, height: 800, caption: "Optional caption" }],
// },
export const activitiesData: Activity[] = [];
