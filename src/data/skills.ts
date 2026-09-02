export type SkillGroup = {
  id: string;
  category: string;
  icon: string;
  skills: string[];
  editable?: boolean;
};

export const skillGroups: SkillGroup[] = [
  {
    id: "programming",
    category: "Programming & Development",
    icon: "code",
    skills: [
      // [EDIT] Add programming languages you've used, e.g. "JavaScript", "Python", "Java"
    ],
    editable: true,
  },
  {
    id: "web",
    category: "Web Development",
    icon: "globe",
    skills: [
      // [EDIT] Add web technologies, e.g. "HTML", "CSS", "JavaScript"
    ],
    editable: true,
  },
  {
    id: "databases",
    category: "Databases",
    icon: "database",
    skills: [
      // [EDIT] Add database systems, e.g. "MySQL", "PostgreSQL", "MongoDB"
    ],
    editable: true,
  },
  {
    id: "tools",
    category: "Tools & Technologies",
    icon: "tool",
    skills: [
      // [EDIT] Add tools, e.g. "Git", "GitHub", "VS Code"
    ],
    editable: true,
  },
  {
    id: "other",
    category: "Other Areas",
    icon: "sparkles",
    skills: [
      "Software Engineering",
      "Data Science",
      "Problem Solving",
      "System Design",
    ],
    editable: false,
  },
];
