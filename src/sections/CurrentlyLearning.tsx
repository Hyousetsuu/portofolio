import { motion } from 'framer-motion';
import { personalInfo } from '../data/personalInfo';
import { ArrowRight } from 'lucide-react';

export function CurrentlyLearning() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-primary mb-6">Current Learning</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
          {personalInfo.currentlyLearning.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start gap-3"
            >
              <ArrowRight size={16} className="text-accent mt-1 shrink-0" />
              <span className="text-secondary">{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
