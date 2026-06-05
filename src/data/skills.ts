export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    skills: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"]
  },
  {
    title: "Backend Development",
    skills: ["PHP", "REST API Development"]
  },
  {
    title: "Database",
    skills: ["MySQL", "Firebase Firestore"]
  },
  {
    title: "Mobile Development",
    skills: ["Flutter", "Dart", "Kodular"]
  },
  {
    title: "Programming Languages",
    skills: ["Java", "Python", "JavaScript", "PHP", "C++"]
  },
  {
    title: "Machine Learning & AI",
    skills: ["Pandas", "NumPy", "Scikit-learn", "Data Preprocessing", "Predictive Modeling"]
  },
  {
    title: "IoT & Embedded Systems",
    skills: ["Arduino", "ESP32", "FastLED", "Embedded C/C++", "Sensor Integration", "Hardware Programming"]
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "VS Code", "Android Studio", "Google Colab", "Firebase", "Vite"]
  }
];
