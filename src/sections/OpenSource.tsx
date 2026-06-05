import { motion } from 'framer-motion';
import { openSourceRepos } from '../data/openSource';
import { FaGithub } from 'react-icons/fa';

export function OpenSource() {
  return (
    <section className="py-24 bg-surface/30 border-y border-secondary/10">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-primary mb-6">Featured Open Source & Development Work</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {openSourceRepos.map((repo, index) => (
            <motion.div
              key={repo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 bg-surface border border-secondary/10 rounded-xl hover:border-secondary/30 transition-colors"
            >
              <div className="flex justify-between items-start mb-3">
                <a 
                  href={repo.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-lg font-bold text-primary hover:text-accent transition-colors flex items-center gap-2"
                >
                  <FaGithub size={18} />
                  {repo.name}
                </a>
              </div>

              <p className="text-sm text-secondary mb-6 line-clamp-2">
                {repo.description}
              </p>

              <div className="flex flex-wrap gap-3">
                {repo.technologies.map(tech => (
                  <span key={tech} className="flex items-center gap-1.5 text-xs font-medium text-secondary">
                    <span className="w-2 h-2 rounded-full bg-secondary/30" />
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
