import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const coreTech = [
  "React",
  "Node.js",
  "Python",
  "Flutter"
];

const supportingTech = [
  "TypeScript",
  "Express",
  "MongoDB",
  "Firebase",
  "Scikit-learn",
  "ESP32",
  "Arduino",
  "REST APIs"
];

export function FeaturedTechnologies() {
  return (
    <section className="py-16 bg-surface/30">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
        
        {/* Header & Core Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <h4 className="text-sm font-medium text-accent tracking-[0.2em] uppercase mb-2">
            Engineering Stack
          </h4>
          <h2 className="text-2xl font-semibold text-primary">Core Technologies</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3 mb-10">
          {coreTech.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex items-center gap-3"
            >
              <ArrowRight size={16} className="text-accent shrink-0" />
              <span className="text-lg text-primary font-medium">{item}</span>
            </motion.div>
          ))}
        </div>

        {/* Supporting Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <h3 className="text-2xl font-semibold text-primary">Supporting Technologies</h3>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-2.5">
          {supportingTech.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex items-center gap-3"
            >
              <ArrowRight size={14} className="text-secondary/50 shrink-0" />
              <span className="text-base text-secondary">{item}</span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
