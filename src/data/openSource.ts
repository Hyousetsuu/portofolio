export interface OpenSourceRepo {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  githubUrl: string;
}

export const openSourceRepos: OpenSourceRepo[] = [
  {
    id: "repo-1",
    name: "react-ui-components",
    description: "A collection of accessible, reusable React UI components built with Tailwind CSS and Framer Motion for rapid prototyping.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/Hyousetsuu"
  },
  {
    id: "repo-2",
    name: "ml-data-pipeline",
    description: "Automated data preprocessing pipeline for machine learning workflows, handling missing values, encoding, and scaling efficiently.",
    technologies: ["Python", "Pandas", "Scikit-learn"],
    githubUrl: "https://github.com/Hyousetsuu"
  },
  {
    id: "repo-3",
    name: "esp32-sensor-hub",
    description: "Firmware for ESP32 microcontrollers to act as a central hub for collecting and transmitting IoT sensor data over MQTT.",
    technologies: ["C++", "Arduino", "MQTT"],
    githubUrl: "https://github.com/Hyousetsuu"
  },
  {
    id: "repo-4",
    name: "portfolio-v1",
    description: "The source code for my modern developer portfolio, demonstrating clean architecture and responsive design.",
    technologies: ["React", "Vite", "Framer Motion"],
    githubUrl: "https://github.com/Hyousetsuu"
  }
];
