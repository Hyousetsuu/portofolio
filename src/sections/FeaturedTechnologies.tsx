import { motion } from 'framer-motion';

const coreTechnologies = [
  "React",
  "Flutter",
  "PHP",
  "Java",
  "Python",
  "MySQL",
  "Firebase",
  "Arduino",
  "ESP32",
  "Scikit-learn"
];

export function FeaturedTechnologies() {
  return (
    <section className="py-12 border-b border-secondary/10 bg-surface/30">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-3 md:gap-4"
        >
          {coreTechnologies.map((tech) => (
            <div 
              key={tech}
              className="px-4 py-2 bg-secondary/5 border border-secondary/10 text-secondary text-sm font-medium rounded-md hover:border-secondary/30 transition-colors cursor-default"
            >
              {tech}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
