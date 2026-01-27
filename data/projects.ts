export type Project = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  image?: string;
  links?: { demo?: string; repo?: string };
};

export const projects: Project[] = [
  {
    slug: "coming-soon-1",
    title: "Project Placeholder",
    description: "A short description of the problem, your approach, and the outcome.",
    tags: ["Next.js", "Tailwind", "TypeScript"],
    image: "/images/projects/placeholder-1.jpg",
    links: { demo: "#", repo: "#" },
  },
];
