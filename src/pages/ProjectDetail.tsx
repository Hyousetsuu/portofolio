import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import { personalInfo } from '../data/personalInfo';
import { ArrowLeft, ExternalLink, ImageIcon, CheckCircle2 } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { Button } from '../components/Button';

export function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const project = projects.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-primary mb-4">Project not found</h1>
        <Button onClick={() => navigate('/')}>Return Home</Button>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-20 min-h-screen"
    >
      <Helmet>
        <title>{project.title} | {personalInfo.name}</title>
        <meta name="description" content={project.overview} />
      </Helmet>

      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <Button 
          variant="ghost" 
          onClick={() => navigate(-1)}
          className="mb-8 pl-0 hover:bg-transparent"
        >
          <ArrowLeft size={20} className="mr-2" /> Back
        </Button>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-6"
          >
            <div className="w-full aspect-video glass rounded-2xl overflow-hidden flex items-center justify-center bg-secondary/5 relative group">
              {project.image ? (
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="flex flex-col items-center justify-center text-secondary/50">
                  <ImageIcon size={64} className="mb-4 opacity-50" />
                  <span className="font-medium text-lg">Project Screenshot</span>
                </div>
              )}
            </div>

            <div className="flex flex-wrap gap-4">
              {project.githubUrl && project.githubUrl !== '#' && (
                <Button variant="outline" className="flex-1" onClick={() => window.open(project.githubUrl, '_blank')}>
                  <FaGithub size={18} className="mr-2" /> View Source
                </Button>
              )}
              {project.liveDemoUrl && project.liveDemoUrl !== '#' && (
                <Button className="flex-1" onClick={() => window.open(project.liveDemoUrl, '_blank')}>
                  <ExternalLink size={18} className="mr-2" /> Live Demo
                </Button>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <span className="text-sm font-semibold text-accent uppercase tracking-wider">
                {project.category}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-4">
                {project.title}
              </h1>
              <p className="text-lg text-secondary leading-relaxed">
                {project.overview}
              </p>
            </div>

            <div className="glass p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-primary mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map(tech => (
                  <span 
                    key={tech}
                    className="px-3 py-1.5 bg-secondary/10 text-secondary text-sm font-medium rounded-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="glass p-6 rounded-2xl">
                <h3 className="text-lg font-bold text-primary mb-4">Challenges Solved</h3>
                <ul className="space-y-3">
                  {project.challengesSolved.map(challenge => (
                    <li key={challenge} className="flex items-start gap-2 text-sm text-secondary">
                      <CheckCircle2 size={16} className="text-accent shrink-0 mt-0.5" />
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="glass p-6 rounded-2xl">
                <h3 className="text-lg font-bold text-primary mb-4">Skills Demonstrated</h3>
                <ul className="space-y-3">
                  {project.skillsDemonstrated.map(skill => (
                    <li key={skill} className="flex items-start gap-2 text-sm text-secondary">
                      <CheckCircle2 size={16} className="text-accent shrink-0 mt-0.5" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="glass p-6 rounded-2xl">
              <h3 className="text-lg font-bold text-primary mb-2">Project Outcome</h3>
              <p className="text-secondary">
                {project.outcome}
              </p>
            </div>

          </motion.div>

        </div>
      </div>
    </motion.div>
  );
}
