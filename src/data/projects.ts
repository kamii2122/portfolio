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
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80",
    imageAlt:
      "Person holding shopping bags, an illustration of the online shopping experience built with the E-Commerce Website project",
    githubUrl: "", // [EDIT] Add GitHub repository URL
    liveUrl: "", // [EDIT] Add live demo URL
    accent: "from-violet-600 to-violet-800",
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
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80",
    imageAlt:
      "Luxury hotel resort with a pool, echoing the hospitality operations handled by the Hotel Management System project",
    githubUrl: "", // [EDIT] Add GitHub repository URL
    liveUrl: "", // [EDIT] Add live demo URL
    accent: "from-navy-800 to-navy-950",
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
    image:
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=900&q=80",
    imageAlt:
      "Rows of books on library shelves, representing the book and record management in the Library Management System project",
    githubUrl: "", // [EDIT] Add GitHub repository URL
    liveUrl: "", // [EDIT] Add live demo URL
    accent: "from-slate-600 to-navy-900",
  },
];
