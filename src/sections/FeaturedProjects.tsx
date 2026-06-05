import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import { ExternalLink, ImageIcon } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { Button } from '../components/Button';

export function FeaturedProjects() {
  const featured = projects.filter(p => p.isFeatured);

  return (
    <section id="projects" className="py-24 bg-surface/30 border-y border-secondary/10">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Featured Projects</h2>
        </motion.div>

        <div className="space-y-24">
          {featured.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-16 items-start`}
            >
              {/* Image side */}
              <div className="w-full lg:w-1/2">
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-secondary/5 border border-secondary/10 flex items-center justify-center group">
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center text-secondary/40">
                      <ImageIcon size={48} className="mb-2" />
                      <span className="text-sm font-medium">Project Screenshot</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Content side */}
              <div className="w-full lg:w-1/2 flex flex-col">
                <span className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">
                  {project.category}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                  {project.title}
                </h3>
                
                <p className="text-secondary leading-relaxed mb-6">
                  {project.overview}
                </p>

                <div className="mb-6">
                  <h4 className="text-primary font-semibold mb-2">Key Challenges Solved:</h4>
                  <ul className="space-y-2">
                    {project.challengesSolved.map((challenge, i) => (
                      <li key={i} className="text-sm text-secondary flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-8">
                  <h4 className="text-primary font-semibold mb-2">Outcome:</h4>
                  <p className="text-sm text-secondary">
                    {project.outcome}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 bg-secondary/10 text-secondary text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4 mt-auto">
                  {project.githubUrl && project.githubUrl !== '#' && (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <FaGithub className="mr-2" size={16} /> Source
                    </Button>
                  )}
                  {project.liveDemoUrl && project.liveDemoUrl !== '#' && (
                    <Button 
                      size="sm" 
                      href={project.liveDemoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2" size={16} /> Demo
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
