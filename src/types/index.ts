export interface Project {
  id: number;
  title: string;
  slug: string;
  description: string;
  category: string;
  image: string;
  images?: string[];
  technologies: string[];
  url?: string;
  github?: string;
  featured?: boolean;
  presentation?: "mobile" | "desktop";
  /** AI coding tools used to build it; only set where the repo itself shows them. */
  ai?: string[];
  /** The standout feature across all projects. */
  bestFeature?: { title: string; detail: string };
}

export interface Experience {
  company: string;
  role: string;
  date: string;
  location: string;
  responsibilities: string[];
}
