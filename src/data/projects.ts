import type { Project } from "@/types";

// Content and public links verified against https://johnreygun.vercel.app/.
// The source did not provide project years, so none are inferred.
export const projects: Project[] = [
  {
    id: 1,
    title: "Adventour",
    slug: "adventour",
    category: "Travel & hospitality",
    description:
      "A resort and hotel booking application that makes it easy to discover, compare, and reserve accommodations. Browse amenities, check availability, and plan the next getaway from one place.",
    technologies: ["Next.js", "React Native", "Tailwind CSS", "WebView"],
    image: "/images/projects/adventour-logo.webp",
    github: "https://github.com/coderegtech/adventour-app",
    featured: true,
  },
  {
    id: 2,
    title: "E-commerce Inventory",
    slug: "inventory",
    category: "Business application",
    description:
      "A web application for managing online-store inventory. Monitor stock, update products, organize categories, track sales, and generate reports in real time.",
    technologies: ["Angular", "NestJS", "MySQL", "Prisma"],
    image: "",
    github: "https://github.com/coderegtech/eim-system",
    featured: true,
  },
  {
    id: 3,
    title: "ChatterzPH",
    slug: "chatterzph",
    category: "Real-time communication",
    description:
      "A real-time chat application powered by Firebase Authentication and Firestore. Messages and user data are organized through subcollections to support smooth, scalable conversations.",
    technologies: ["Next.js", "Firebase", "Firestore"],
    image: "",
    url: "https://chatterzz-ph.vercel.app/",
    github: "https://github.com/coderegtech/ChatterzzPh",
    featured: true,
  },
  {
    id: 4,
    title: "Anote",
    slug: "anote",
    category: "Anonymous messaging",
    description:
      "An anonymous note messaging app for sending and receiving secret messages. Share a unique link, receive honest feedback, and start conversations without revealing your identity.",
    technologies: ["Next.js", "Tailwind CSS", "Firebase"],
    image: "/images/projects/anote.webp",
    url: "https://anote-chat.vercel.app/",
    github: "https://github.com/coderegtech/anote-app",
    featured: true,
    presentation: "mobile",
  },
  {
    id: 5,
    title: "Tara Rides",
    slug: "tara-rides",
    category: "Mobile · Transportation",
    description:
      "An AI-powered ride-sharing application for booking rides and renting cars.",
    technologies: ["React Native", "PHP", "Firebase", "Python", "MySQL"],
    image: "",
  },
  {
    id: 6,
    title: "FoodOh",
    slug: "foodoh",
    category: "Mobile · Food delivery",
    description:
      "A food delivery application with AI-powered personalized recommendations, local restaurant discovery, real-time order tracking, and a straightforward ordering experience.",
    technologies: ["React Native", "Tailwind CSS"],
    image: "",
  },
  {
    id: 7,
    title: "SoilMate",
    slug: "soilmate",
    category: "Mobile · Civil engineering",
    description:
      "A client application for soil classification and testing, streamlining data input, analysis, and reporting for geotechnical tests.",
    technologies: ["React Native", "Fruitask API"],
    image: "",
  },
  {
    id: 8,
    title: "Resume Portfolio",
    slug: "resume-portfolio",
    category: "Web · Personal portfolio",
    description:
      "An interactive, web-based portfolio presenting a professional resume, skills, experience, and projects.",
    technologies: ["Next.js"],
    image: "",
    url: "https://coderegtech.vercel.app/",
    github: "https://github.com/coderegtech/portfolio",
  },
  {
    id: 9,
    title: "Animenia PH",
    slug: "animenia",
    category: "Web · Entertainment",
    description:
      "An anime streaming interface with browsing, search, categorized content, and episode tracking.",
    technologies: ["Vue.js", "Tailwind CSS", "Gogoanime API"],
    image: "",
    github: "https://github.com/coderegtech/animenia-ph",
  },
  {
    id: 10,
    title: "YouTube Clone",
    slug: "youtube-clone",
    category: "Web · Interface development",
    description:
      "A responsive video-sharing application inspired by YouTube, with video browsing, categories, search, comments, and subscriptions.",
    technologies: ["React", "Tailwind CSS"],
    image: "",
    url: "https://youtube-clone-j76v.onrender.com/",
    github: "https://github.com/coderegtech/youtube-ui-clone",
  },
  {
    id: 11,
    title: "TikTok Clone",
    slug: "tiktok-clone",
    category: "Web · Interface development",
    description:
      "A short-form video application inspired by TikTok, with a vertical feed, likes, comments, and a responsive mobile and web interface.",
    technologies: ["React", "Tailwind CSS"],
    image: "",
    url: "https://tiktok-clone-ts26.onrender.com/",
    github: "https://github.com/coderegtech/tiktok-ui-clone",
  },
  {
    id: 12,
    title: "Pesbok",
    slug: "pesbok",
    category: "Full-stack · Social platform",
    description:
      "A MERN-stack social application inspired by Facebook. Includes authentication, friend requests, real-time chat, posts with media, likes, comments, and profile customization.",
    technologies: ["MongoDB", "Express", "React", "Node.js"],
    image: "",
    github: "https://github.com/coderegtech/social-media-app-mern",
  },
];
