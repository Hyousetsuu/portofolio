import { motion } from 'framer-motion';

const domains = [
  {
    title: "Web Development",
    description: "Building responsive web applications using React, PHP, and modern web technologies."
  },
  {
    title: "Mobile Development",
    description: "Developing Android applications with Flutter and Firebase."
  },
  {
    title: "Machine Learning",
    description: "Creating predictive models and data-driven applications using Python and Scikit-learn."
  },
  {
    title: "Internet of Things (IoT)",
    description: "Building hardware-software integrated systems using ESP32 and Arduino."
  }
];

export function WhatIBuild() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">What I Build</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
          {domains.map((domain, index) => (
            <motion.div
              key={domain.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-bold text-primary mb-3 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-accent" />
                {domain.title}
              </h3>
              <p className="text-secondary leading-relaxed pl-5">
                {domain.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
