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
    <section className="py-8 border-b border-secondary/10 bg-surface/30 relative overflow-hidden flex items-center">
      {/* Edge Fades for a polished look */}
      <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
      
      <div className="w-full flex">
        <motion.div 
          className="flex items-center gap-4 md:gap-6 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 30, // Adjust this to make it faster or slower
            repeat: Infinity,
          }}
        >
          {/* We duplicate the array 4 times to ensure it covers wide screens and loops seamlessly */}
          {[...coreTechnologies, ...coreTechnologies, ...coreTechnologies, ...coreTechnologies].map((tech, index) => (
            <div 
              key={`${tech}-${index}`}
              className="px-6 py-3 bg-secondary/5 border border-secondary/20 text-secondary text-sm md:text-base font-semibold rounded-2xl hover:bg-accent/10 hover:text-accent hover:border-accent/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 cursor-default whitespace-nowrap"
            >
              {tech}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
