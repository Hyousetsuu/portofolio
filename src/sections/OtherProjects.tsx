import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

export function OtherProjects() {
  const others = projects.filter(p => !p.isFeatured);

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-primary mb-6">Other Projects</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {others.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 bg-surface/50 border border-secondary/10 rounded-2xl flex flex-col h-full hover:border-secondary/30 transition-colors"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-primary">{project.title}</h3>
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>
                <div className="flex gap-3 text-secondary">
                  {project.githubUrl && project.githubUrl !== '#' && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                      <FaGithub size={20} />
                    </a>
                  )}
                  {project.liveDemoUrl && project.liveDemoUrl !== '#' && (
                    <a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-sm text-secondary mb-6 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.technologies.slice(0, 4).map((tech) => (
                  <span 
                    key={tech} 
                    className="text-xs font-medium text-secondary"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 4 && (
                  <span className="text-xs font-medium text-secondary">
                    +{project.technologies.length - 4}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
