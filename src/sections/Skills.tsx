import { motion } from 'framer-motion';
import { skillCategories } from '../data/skills';
import { Code2, Database, Layout, Smartphone, Cpu, Wrench, Binary, Blocks } from 'lucide-react';
import { 
  SiReact, SiJavascript, SiHtml5, SiCss, SiTailwindcss,
  SiPhp, SiMysql, SiFirebase, SiFlutter, SiDart,
  SiPython, SiCplusplus, SiPandas, SiNumpy, SiScikitlearn,
  SiArduino, SiGit, SiGithub, SiAndroidstudio, SiGooglecolab, SiVite
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { VscVscode } from 'react-icons/vsc';

const skillIcons: Record<string, { icon: React.ElementType, color: string }> = {
  "React": { icon: SiReact, color: "#61DAFB" },
  "JavaScript": { icon: SiJavascript, color: "#F7DF1E" },
  "HTML5": { icon: SiHtml5, color: "#E34F26" },
  "CSS3": { icon: SiCss, color: "#1572B6" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#06B6D4" },
  "PHP": { icon: SiPhp, color: "#777BB4" },
  "MySQL": { icon: SiMysql, color: "#4479A1" },
  "Firebase": { icon: SiFirebase, color: "#FFCA28" },
  "Firebase Firestore": { icon: SiFirebase, color: "#FFCA28" },
  "Flutter": { icon: SiFlutter, color: "#02569B" },
  "Dart": { icon: SiDart, color: "#0175C2" },
  "Java": { icon: FaJava, color: "#007396" },
  "Python": { icon: SiPython, color: "#3776AB" },
  "C++": { icon: SiCplusplus, color: "#00599C" },
  "Pandas": { icon: SiPandas, color: "#150458" },
  "NumPy": { icon: SiNumpy, color: "#013243" },
  "Scikit-learn": { icon: SiScikitlearn, color: "#F7931E" },
  "Arduino": { icon: SiArduino, color: "#00979D" },
  "Git": { icon: SiGit, color: "#F05032" },
  "GitHub": { icon: SiGithub, color: "#181717" },
  "VS Code": { icon: VscVscode, color: "#007ACC" },
  "Android Studio": { icon: SiAndroidstudio, color: "#3DDC84" },
  "Google Colab": { icon: SiGooglecolab, color: "#F9AB00" },
  "Vite": { icon: SiVite, color: "#646CFF" },
};

const categoryIcons: Record<string, React.ReactNode> = {
  "Frontend Development": <Layout className="w-6 h-6" />,
  "Backend Development": <Binary className="w-6 h-6" />,
  "Database": <Database className="w-6 h-6" />,
  "Mobile Development": <Smartphone className="w-6 h-6" />,
  "Programming Languages": <Code2 className="w-6 h-6" />,
  "Machine Learning & AI": <Blocks className="w-6 h-6" />,
  "IoT & Embedded Systems": <Cpu className="w-6 h-6" />,
  "Tools & Platforms": <Wrench className="w-6 h-6" />
};

export function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="skills" className="py-24 bg-surface/50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-6" />
          <p className="text-secondary max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise across different domains of software engineering and computer science.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6"
        >
          {skillCategories.map((category) => (
            <motion.div 
              key={category.title} 
              variants={itemVariants}
              className="glass p-6 rounded-2xl flex flex-col h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-accent/10 text-accent rounded-xl">
                  {categoryIcons[category.title] || <Code2 className="w-6 h-6" />}
                </div>
                <h3 className="font-bold text-primary text-lg leading-tight">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {category.skills.map((skill) => {
                  const IconData = skillIcons[skill];
                  return (
                    <span 
                      key={skill}
                      className="group px-3 py-1.5 bg-secondary/10 text-secondary text-sm font-medium rounded-lg hover:bg-surface flex items-center gap-2 hover:-translate-y-1 hover:shadow-sm transition-all duration-300 cursor-default border border-transparent hover:border-secondary/20"
                    >
                      {IconData && <IconData.icon style={{ color: IconData.color }} className="w-4 h-4" />}
                      <span className={IconData ? "group-hover:text-primary transition-colors" : ""}>{skill}</span>
                    </span>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
