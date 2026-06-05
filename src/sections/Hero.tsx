import { motion } from 'framer-motion';
import { ArrowRight, Download, User } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Button } from '../components/Button';
import { personalInfo } from '../data/personalInfo';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden" id="home">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-secondary/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-primary mb-6">
              {personalInfo.name}
            </h1>
            <p className="text-xl md:text-2xl text-secondary mb-8 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
              {personalInfo.role}
            </p>
            
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-12">
              <Button onClick={() => window.location.href='#projects'}>
                View Projects <ArrowRight className="ml-2" size={18} />
              </Button>
              <Button variant="outline" onClick={() => window.open(personalInfo.resume, '_blank')}>
                Download Resume <Download className="ml-2" size={18} />
              </Button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-6">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent transition-colors" aria-label="GitHub">
                <FaGithub size={24} />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent transition-colors" aria-label="LinkedIn">
                <FaLinkedin size={24} />
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 flex justify-center lg:justify-end"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-surface border border-secondary/20 rounded-2xl transform-gpu overflow-hidden glass flex items-center justify-center shadow-xl">
                {personalInfo.avatar ? (
                  <img 
                    src={personalInfo.avatar} 
                    alt={personalInfo.name} 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center text-secondary/50">
                    <User size={80} className="mb-4" />
                    <span className="font-medium">Developer Avatar</span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
