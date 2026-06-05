import { motion } from 'framer-motion';
import { ExternalLink, ImageIcon } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { cn } from '../utils/cn';
import type { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
  className?: string;
}

export function ProjectCard({ project, onClick, className }: ProjectCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -5 }}
      onClick={onClick}
      className={cn(
        "glass group cursor-pointer overflow-hidden rounded-2xl flex flex-col h-full",
        className
      )}
    >
      <div className="relative aspect-video bg-secondary/10 overflow-hidden flex items-center justify-center">
        {project.image ? (
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="flex flex-col items-center justify-center text-secondary/50">
            <ImageIcon size={48} className="mb-2 opacity-50" />
            <span className="text-sm font-medium">Project Screenshot</span>
          </div>
        )}
        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {project.githubUrl && project.githubUrl !== '#' && (
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="p-2 bg-surface/90 text-primary hover:text-accent rounded-full backdrop-blur-sm transition-colors"
            >
              <FaGithub size={20} />
            </a>
          )}
          {project.liveDemoUrl && project.liveDemoUrl !== '#' && (
            <a 
              href={project.liveDemoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="p-2 bg-surface/90 text-primary hover:text-accent rounded-full backdrop-blur-sm transition-colors"
            >
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-4">
          <span className="text-xs font-semibold text-accent uppercase tracking-wider">
            {project.category}
          </span>
          <h3 className="text-xl font-bold mt-1 text-primary group-hover:text-accent transition-colors">
            {project.title}
          </h3>
        </div>
        
        <p className="text-secondary text-sm mb-6 flex-grow line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.technologies.slice(0, 3).map((tech) => (
            <span 
              key={tech} 
              className="text-xs font-medium px-2.5 py-1 bg-secondary/10 text-secondary rounded-md"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="text-xs font-medium px-2.5 py-1 bg-secondary/10 text-secondary rounded-md">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
