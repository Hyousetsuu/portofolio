export interface Project {
  id: string;
  title: string;
  category: string;
  description: string; // Used for secondary cards / short text
  overview: string; // Detailed overview for Featured layout
  technologies: string[];
  challengesSolved: string[];
  outcome: string;
  skillsDemonstrated: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
  image?: string; 
  isFeatured: boolean;
}

export const projectCategories = [
  "All",
  "Web Development",
  "Mobile Development",
  "Machine Learning",
  "Internet of Things (IoT)",
  "Desktop Application"
];

export const projects: Project[] = [
  // --- FEATURED PROJECTS ---
  {
    id: "arkyn-mobile",
    title: "Arkyn Mobile Application",
    category: "Mobile Development",
    description: "A mobile application for discovering, tracking, and managing video game wishlists. Built with Flutter and Firebase.",
    overview: "Arkyn is a comprehensive mobile platform developed to empower gamers by providing a centralized hub for discovering new titles, managing personal wishlists, and maintaining dynamic user profiles synchronized through a cloud backend.",
    technologies: ["Flutter", "Firebase", "Dart"],
    challengesSolved: [
      "Implemented robust real-time data synchronization across multiple devices without causing UI stutter.",
      "Secured user data and authenticated sessions reliably using Firebase Authentication."
    ],
    outcome: "Delivered a responsive mobile application with an intuitive user experience, successfully handling concurrent cloud data operations securely.",
    skillsDemonstrated: [
      "Mobile Architecture",
      "NoSQL Database Design",
      "State Management"
    ],
    githubUrl: "https://github.com/Hyousetsuu/PBO-Arkyn",
    image: "/arykn-preview.png",
    isFeatured: true
  },
  {
    id: "video-game-sales",
    title: "Video Game Sales Prediction",
    category: "Machine Learning",
    description: "A machine learning project that predicts video game sales performance using genre, platform, publisher, and review score data.",
    overview: "This project leverages historical video game data to train predictive models capable of estimating future global sales. It demonstrates the complete data science lifecycle from exploratory data analysis to model deployment.",
    technologies: ["Python", "Pandas", "Scikit-learn", "Google Colab"],
    challengesSolved: [
      "Handled missing values and outliers in the historical sales dataset through advanced imputation techniques.",
      "Engineered categorical features into highly predictive numeric representations."
    ],
    outcome: "Developed a predictive model providing actionable insights into which genres and platforms yield the highest ROI.",
    skillsDemonstrated: [
      "Predictive Modeling",
      "Feature Engineering",
      "Data Preprocessing"
    ],
    githubUrl: "https://github.com/Hyousetsuu/game-popularity-prediction",
    image: "/gamesales-preview.png",
    isFeatured: true
  },
  {
    id: "iot-smart-led",
    title: "IoT Smart LED Controller",
    category: "Internet of Things (IoT)",
    description: "An ESP32-based smart LED controller featuring customizable lighting effects and web-based controls.",
    overview: "An embedded systems project focusing on the creation of a dynamic, hardware-accelerated LED lighting controller. The system processes user inputs in real-time via a web interface to generate complex lighting animations.",
    technologies: ["ESP32", "Arduino", "C++", "FastLED", "Web Interface"],
    challengesSolved: [
      "Optimized animation algorithms in C++ to run within the strict memory constraints of the ESP32.",
      "Developed a non-blocking execution loop to handle web inputs concurrently with frame rendering."
    ],
    outcome: "Produced a highly responsive custom lighting system capable of maintaining high framerates during complex animations.",
    skillsDemonstrated: [
      "Embedded C++ Programming",
      "Hardware-Software Integration",
      "Real-time System Design"
    ],
    githubUrl: "https://github.com/Hyousetsuu/smartled-web",
    image: "/led-preview.png",
    isFeatured: true
  },
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "A modern e-commerce web application featuring product browsing, search functionality, and shopping workflows.",
    overview: "A scalable frontend implementation for an e-commerce platform focusing on responsive design, state management for cart operations, and rapid rendering using modern React patterns.",
    technologies: ["React", "JavaScript", "Zustand", "Tailwind CSS", "REST API"],
    challengesSolved: [
      "Managed complex global state for the shopping cart and checkout flow using Zustand.",
      "Integrated REST APIs securely for product data fetching and search functionality."
    ],
    outcome: "Created a fast, accessible web storefront demonstrating modern React component architecture and robust state management.",
    skillsDemonstrated: [
      "Frontend Architecture",
      "Global State Management",
      "Responsive UI Design"
    ],
    githubUrl: "https://github.com/Hyousetsuu/Kirei-Commerce",
    image: "/e-commerce-preview.png",
    isFeatured: true
  },
  {
    id: "library-management",
    title: "Library Management System",
    category: "Web Development",
    description: "A web-based library management system built with CodeIgniter 3 and MySQL for managing books and transactions.",
    overview: "A robust monolithic web application designed for administrative staff to handle book inventories, member registrations, and borrowing/return transactions through a secure administrative dashboard.",
    technologies: ["PHP", "CodeIgniter 3", "MySQL", "Bootstrap"],
    challengesSolved: [
      "Implemented secure authentication and role-based access control for administrators.",
      "Designed complex SQL relational schemas to track book availability and member transaction history accurately."
    ],
    outcome: "Streamlined library administrative workflows through a centralized data management interface and responsive dashboard.",
    skillsDemonstrated: [
      "Backend MVC Architecture",
      "Relational Database Design",
      "Authentication & Authorization"
    ],
    githubUrl: "https://github.com/Hyousetsuu/library-app",
    image: "/library-preview.png",
    isFeatured: true
  },

  // --- OTHER PROJECTS (SECONDARY) ---
  {
    id: "daily-activity-notes",
    title: "Daily Activity Notes App",
    category: "Mobile Development",
    description: "A personal productivity mobile application for tracking and managing daily tasks and activities securely.",
    overview: "A task management mobile application backed by a custom REST API to synchronize daily activities securely to a central database.",
    technologies: ["Kodular", "PHP", "MySQL"],
    challengesSolved: [],
    outcome: "",
    skillsDemonstrated: [],
    githubUrl: "#",
    isFeatured: false
  },
  {
    id: "student-management",
    title: "Student Management System",
    category: "Desktop Application",
    description: "A desktop application designed for administrative staff to handle student records and generate automated academic reports.",
    overview: "A robust desktop application designed for administrative staff to handle student records, search functionalities, and automated report generation.",
    technologies: ["Java", "MySQL"],
    challengesSolved: [],
    outcome: "",
    skillsDemonstrated: [],
    githubUrl: "#",
    isFeatured: false
  },
  {
    id: "cashier-app",
    title: "Cashier Application",
    category: "Desktop Application",
    description: "A point-of-sale desktop application handling transactional logic, discount calculations, and inventory tracking.",
    overview: "A point-of-sale desktop application handling complex transactional logic, discount calculations, and inventory tracking.",
    technologies: ["Java Swing", "MySQL"],
    challengesSolved: [],
    outcome: "",
    skillsDemonstrated: [],
    githubUrl: "#",
    isFeatured: false
  },
  {
    id: "portfolio-website",
    title: "Personal Portfolio Website",
    category: "Web Development",
    description: "The source code for my modern developer portfolio, demonstrating clean architecture, responsive layout, and modern UI practices.",
    overview: "My personal developer portfolio built with React, Vite, and Tailwind CSS to showcase my projects and technical journey.",
    technologies: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
    challengesSolved: [],
    outcome: "",
    skillsDemonstrated: [],
    githubUrl: "https://github.com/Hyousetsuu/portofolio",
    isFeatured: false
  },
  {
    id: "academic-projects",
    title: "Other Academic Projects",
    category: "Miscellaneous",
    description: "Various smaller assignments, algorithms, and data structure implementations completed during my Computer Science coursework.",
    overview: "A collection of academic exercises focusing on core computer science fundamentals.",
    technologies: ["C++", "Java", "Python", "Data Structures"],
    challengesSolved: [],
    outcome: "",
    skillsDemonstrated: [],
    githubUrl: "https://github.com/Hyousetsuu",
    isFeatured: false
  }
];
