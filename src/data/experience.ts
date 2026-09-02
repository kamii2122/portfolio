export type Experience = {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  responsibilities: string[];
  technologies: string[];
  skillsGained: string[];
  achievements: string[];
  current: boolean;
};

export const experiences: Experience[] = [
  {
    id: "acdsa",
    company: "Africa Centre of Data Science and Analytics",
    role: "Software/Technology Attaché",
    period: "Present",
    location: "", // [EDIT] Add location
    summary:
      "Gaining hands-on industry experience at the Africa Centre of Data Science and Analytics, applying software development and technology skills to real-world projects while learning from experienced professionals.",
    responsibilities: [
      // [EDIT] Add your responsibilities
      "Supporting software and technology projects",
      "Assisting with development and analysis tasks",
    ],
    technologies: [
      // [EDIT] Add technologies you use in this role
    ],
    skillsGained: [
      // [EDIT] Add skills gained in this role
    ],
    achievements: [
      // [EDIT] Add key achievements
    ],
    current: true,
  },
];
