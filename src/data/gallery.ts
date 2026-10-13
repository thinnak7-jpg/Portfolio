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

export const activitiesData: Activity[] = [
  {
    id: "1",
    title: "National Robotics Competition 2024",
    date: "March 15-18, 2024",
    category: "Competition",
    description: "Participated in the annual National Robotics Competition. Our team developed an autonomous navigation robot using ROS and computer vision. We faced numerous challenges during the integration phase but managed to secure the First Runner-Up position out of 50 participating teams. This activity taught me advanced problem-solving and teamwork under pressure.",
    coverImage: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800",
    images: [
      {
        src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1200",
        width: 1200,
        height: 800,
        caption: "Our team presenting the robot"
      },
      {
        src: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=1200",
        width: 1200,
        height: 800,
        caption: "Testing the sensors"
      },
      {
        src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200",
        width: 1200,
        height: 800,
        caption: "Receiving the award"
      }
    ]
  },
  {
    id: "2",
    title: "Web Development Bootcamp Setup",
    date: "July 2023",
    category: "Workshop",
    description: "Organized a 3-day intensive web development bootcamp for freshmen in our university. Taught fundamentals of HTML, CSS, and modern JavaScript, including an introduction to React. It was a fulfilling experience to share knowledge and see students build their first web applications.",
    coverImage: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
    images: [
      {
        src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200",
        width: 1200,
        height: 800,
      },
      {
        src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1200",
        width: 1200,
        height: 800,
      }
    ]
  }
];
