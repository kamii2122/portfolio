export type Education = {
  id: string;
  institution: string;
  program: string;
  field: string;
  status: string;
  startYear: string;
  endYear: string;
  coursework: string[];
  achievements: string[];
  editable: boolean;
};

export const education: Education = {
  id: "thika-technical",
  institution: "Thika Technical",
  program: "Diploma/Degree in Computer Science", // [EDIT] Specify the qualification level (Diploma, Degree, etc.)
  field: "Computer Science",
  status: "In Progress",
  startYear: "", // [EDIT] Add your start year
  endYear: "", // [EDIT] Add your expected graduation year
  coursework: [
    // [EDIT] Add relevant coursework
  ],
  achievements: [
    // [EDIT] Add academic achievements
  ],
  editable: true,
};
