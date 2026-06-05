import { motion } from 'framer-motion';
import { personalInfo } from '../data/personalInfo';

export function Education() {
  return (
    <section className="py-24 bg-surface/30 border-y border-secondary/10">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Education</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-2">
            <h3 className="text-2xl font-bold text-primary">{personalInfo.education.degree}</h3>
            <span className="text-accent font-medium">{personalInfo.education.timeline}</span>
          </div>
          
          <div className="mt-8">
            <h4 className="text-sm font-semibold text-secondary uppercase tracking-wider mb-4">
              Relevant Coursework
            </h4>
            <ul className="grid sm:grid-cols-2 gap-3 text-secondary">
              {personalInfo.education.coursework.map((course, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-secondary" />
                  {course}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
