export type Project = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  links?: { demo?: string; repo?: string };
};

export const projects: Project[] = [
  {
    slug: "coming-soon-1",
    title: "Project Placeholder",
    description:
      "A short description of the problem, your approach, and the outcome.",
    tags: ["Next.js", "Tailwind", "TypeScript"],
    links: { demo: "#", repo: "#" },
  },
  {
    slug: "coming-soon-2",
    title: "Another Placeholder",
    description:
      "Replace this with a real project later. Keep it outcome-focused.",
    tags: ["React", "UI", "APIs"],
    links: { demo: "#", repo: "#" },
  },
];
