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
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "A full-stack e-commerce platform featuring a modern React frontend and a scalable Express.js backend.",
    overview: "The project is a modern full-stack e-commerce platform featuring a React frontend and a scalable Express.js backend. It includes secure JWT authentication, MongoDB Atlas integration, persistent shopping carts and wishlists, complete checkout and order management, a dynamic review system, and a premium editorial-inspired design system focused on usability and polished user experience.",
    technologies: ["React", "Vite", "Node.js", "Express.js", "MongoDB Atlas", "Mongoose", "JWT", "bcryptjs", "Axios", "Tailwind CSS", "REST API"],
    challengesSolved: [
      "Designed and built a modular Express.js backend using an MVC architecture with RESTful APIs for authentication, products, carts, wishlists, orders, and reviews.",
      "Integrated MongoDB Atlas with Mongoose and implemented a database seeding pipeline for product data.",
      "Implemented secure JWT authentication with bcrypt password hashing, replacing the previous localStorage-based authentication.",
      "Developed persistent shopping carts and wishlists synchronized with the backend while maintaining guest-user support.",
      "Built a complete checkout workflow with immutable order snapshots, automatic inventory management, and order history.",
      "Implemented a dynamic review and rating system with automatic aggregation of product ratings.",
      "Refactored the frontend using a dedicated Service Layer with Axios to improve maintainability and scalability.",
      "Designed and implemented a cohesive editorial-inspired design system featuring premium typography, reusable UI components, responsive layouts, refined spacing, and polished micro-interactions.",
      "Improved overall application security through proper environment variable management, Git secret protection, and repository cleanup."
    ],
    outcome: "Successfully transformed the project from a frontend prototype into a production-style full-stack e-commerce platform that combines scalable backend architecture, secure authentication, persistent cloud-based data storage, and a premium editorial user experience suitable for real-world deployment.",
    skillsDemonstrated: [
      "Full-stack architecture with React + Express + MongoDB",
      "Secure JWT authentication and authorization",
      "Persistent shopping cart and wishlist",
      "Real checkout and order management system",
      "Dynamic product reviews and rating aggregation",
      "Clean API architecture following MVC principles",
      "MongoDB Atlas cloud database integration"
    ],
    githubUrl: "https://github.com/Hyousetsuu/Kirei-Commerce",
    image: "/e-commerce-preview.png",
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
    id: "aiko-ai",
    title: "Aiko AI – Smart Assistant Chatbot",
    category: "Generative AI Web Application",
    description: "An intelligent AI-powered assistant featuring multi-modal conversations, media downloading, and advanced file-processing utilities.",
    overview: "Designed and developed an intelligent AI-powered assistant using a modern React frontend and a modular MVC backend architecture with Node.js and Express. Integrated Google Gemini along with multiple external services to provide AI conversations, media downloading capabilities, real-time weather information, RSS-based news aggregation, and document discussion features for PDF and TXT files. Implemented standalone file-processing utilities including image compression, PDF compression, image-to-PDF conversion, and PDF-to-image conversion while prioritizing performance and user privacy.",
    technologies: ["React", "Vite", "Node.js", "Express", "Google Gemini API", "Bootstrap", "REST API", "Framer Motion"],
    challengesSolved: [
      "Integrated Google Gemini along with multiple external APIs into a unified conversational interface.",
      "Engineered standalone file-processing utilities directly within the application for advanced document and image manipulation."
    ],
    outcome: "Successfully deployed a robust AI assistant that enhances user productivity through intelligent conversations and comprehensive file management.",
    skillsDemonstrated: [
      "Full-Stack Development",
      "Artificial Intelligence",
      "API Integration",
      "Software Engineering"
    ],
    githubUrl: "https://github.com/Hyousetsuu/Aiko.AI",
    image: "/aiko-preview.png",
    isFeatured: true
  },
  {
    id: "telegram-ai-assistant",
    title: "Telegram AI Assistant",
    category: "Python / AI",
    description: "A multi-functional Telegram bot powered by Google Gemini AI, featuring media downloaders, file processing, and real-time APIs.",
    overview: "A comprehensive AI-powered Telegram assistant designed to be an all-in-one productivity tool. It integrates Google's Gemini AI for natural conversations, OpenWeatherMap for real-time weather, and various external libraries for social media downloading and complex file manipulations.",
    technologies: ["Python", "Telegram Bot API", "Google Gemini API", "OpenWeatherMap API", "yt-dlp"],
    challengesSolved: [
      "Integrated multiple disparate REST APIs (Gemini, Weather, News) into a single cohesive chat interface.",
      "Handled complex file processing and media downloading within Telegram's strict file size limits."
    ],
    outcome: "Successfully deployed a live, multi-functional Telegram bot currently serving active users with automation workflows.",
    skillsDemonstrated: [
      "API Integration",
      "Backend Architecture",
      "Automation Workflows"
    ],
    githubUrl: "https://github.com/Hyousetsuu/telegram-bot",
    liveDemoUrl: "https://t.me/JKW48_Bot",
    image: "/telegram-preview.png",
    isFeatured: true
  },
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
  // --- OTHER PROJECTS (SECONDARY) ---
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
    isFeatured: false
  },
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
    githubUrl: "https://github.com/Hyousetsuu",
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
    githubUrl: "https://github.com/Hyousetsuu",
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
    githubUrl: "https://github.com/Hyousetsuu",
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
