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
    slug: "gymtrack",
    title: "GymTrack",
    description: "A workout tracking app that lets you log exercises, track personal records, and visualize your progress over time.",
    tags: ["React Native", "TypeScript", "Firebase"],
    links: { demo: "#", repo: "#" },
  },
  {
    slug: "autotune",
    title: "Autotune",
    description: "A web-based audio tool for pitch correction and vocal tuning, built with the Web Audio API for real-time processing.",
    tags: ["JavaScript", "Web Audio API", "React"],
    links: { demo: "#", repo: "#" },
  },
];
