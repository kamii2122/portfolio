export type Project = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  keyFeatures: string[];
  image: string;
  imageAlt: string;
  githubUrl: string;
  liveUrl: string;
  accent: string;
};

export const projects: Project[] = [
  {
    id: "ecommerce-website",
    title: "E-Commerce Website",
    subtitle: "Online Shopping Platform",
    description:
      "A web-based e-commerce platform designed to allow users to browse products, view product details, manage a shopping cart, and complete purchases.",
    technologies: [], // [EDIT] Add technologies used, e.g. "React", "Node.js"
    keyFeatures: [
      "Product browsing & search",
      "Product detail views",
      "Shopping cart management",
      "Checkout / purchase flow",
    ],
    image: "/portfolio/images/projects/ecommerce.png",
    imageAlt:
      "Screenshot placeholder for the E-Commerce Website project interface",
    githubUrl: "", // [EDIT] Add GitHub repository URL
    liveUrl: "", // [EDIT] Add live demo URL
    accent: "from-violet-500 to-violet-700",
  },
  {
    id: "hotel-management-system",
    title: "Hotel Management System",
    subtitle: "Hotel Operations Platform",
    description:
      "A system designed to help manage hotel operations and improve the efficiency of hotel management processes, from room and customer management to reservations and records.",
    technologies: [], // [EDIT] Add technologies used
    keyFeatures: [
      "Room management",
      "Customer management",
      "Booking / reservation management",
      "Check-in / check-out",
      "Records management",
      "Administrative functionality",
    ],
    image: "/portfolio/images/projects/hotel.png",
    imageAlt:
      "Screenshot placeholder for the Hotel Management System project interface",
    githubUrl: "", // [EDIT] Add GitHub repository URL
    liveUrl: "", // [EDIT] Add live demo URL
    accent: "from-navy-900 to-navy-800",
  },
  {
    id: "library-management-system",
    title: "Library Management System",
    subtitle: "Library Operations Platform",
    description:
      "A system designed to digitize and simplify library operations, making it easier to manage books, members, borrowing, and records in one place.",
    technologies: [], // [EDIT] Add technologies used
    keyFeatures: [
      "Book management",
      "Student / member management",
      "Borrowing & returning books",
      "Search functionality",
      "Record management",
      "Administrative features",
    ],
    image: "/portfolio/images/projects/library.png",
    imageAlt:
      "Screenshot placeholder for the Library Management System project interface",
    githubUrl: "", // [EDIT] Add GitHub repository URL
    liveUrl: "", // [EDIT] Add live demo URL
    accent: "from-navy-800 to-slate-600",
  },
];
