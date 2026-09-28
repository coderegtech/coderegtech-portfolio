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
}

export interface Experience {
  company: string;
  role: string;
  date: string;
  location: string;
  responsibilities: string[];
}
