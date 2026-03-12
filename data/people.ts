export type PersonData = {
  slug: string;
  name: string;
  initials: string;
  role: string;
  headline: string;
  summary: string;
  location: string;
  availability: string;
  email: string;
  links: {
    github: string;
    linkedin: string;
    resume: string;
  };
};

export const people: Record<string, PersonData> = {
  paolo: {
    slug: "paolo",
    name: "Paolo Jiménez",
    initials: "PJ",
    role: "Software Engineer",
    headline: "I build reliable software for real-world systems.",
    summary:
      "I'm a software-focused engineer with a background in manufacturing controls. I care about clean UI, robust integrations, and maintainable code.",
    location: "Bay Area, CA",
    availability: "Open to full-time roles · Remote or on-site",
    email: "paolo_jimenezm@hotmail.com",
    links: {
      github: "https://github.com/PaoloJimo",
      linkedin:
        "https://www.linkedin.com/in/roberto-paolo-jimenez-moreno?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
      resume: "/resume.pdf",
    },
  },
  sebastian: {
    slug: "sebastian",
    name: "Sebastian Jiménez",
    initials: "SJ",
    role: "Software Engineer",
    headline: "I craft elegant solutions for complex problems.",
    summary:
      "A software engineer passionate about building scalable systems and intuitive user experiences.",
    location: "Bay Area, CA",
    availability: "Open to opportunities",
    email: "sebastian@example.com",
    links: {
      github: "#",
      linkedin: "#",
      resume: "#",
    },
  },
  sandro: {
    slug: "sandro",
    name: "Sandro Jiménez",
    initials: "SJ",
    role: "Software Engineer",
    headline: "I turn ideas into polished digital products.",
    summary:
      "A software engineer focused on delivering high-quality, maintainable code and great user experiences.",
    location: "Bay Area, CA",
    availability: "Open to opportunities",
    email: "sandro@example.com",
    links: {
      github: "#",
      linkedin: "#",
      resume: "#",
    },
  },
};

export const peopleList = [
  { slug: "paolo", name: "Paolo Jimenez" },
  { slug: "sebastian", name: "Sebastian Jimenez" },
  { slug: "sandro", name: "Sandro Jimenez" },
];
