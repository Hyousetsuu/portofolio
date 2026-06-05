import { personalInfo } from '../data/personalInfo';
import { Mail, ArrowUp } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface border-t border-secondary/10 py-12 mt-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex flex-col items-center md:items-start">
            <span className="text-xl font-bold tracking-tight text-primary">
              {personalInfo.githubName}
            </span>
            <p className="text-secondary text-sm mt-2 text-center md:text-left max-w-sm">
              Building scalable web applications and exploring the frontiers of artificial intelligence.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href={personalInfo.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 text-secondary hover:text-accent transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </a>
            <a 
              href={personalInfo.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 text-secondary hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
            <a 
              href={`mailto:${personalInfo.email}`} 
              className="p-2 text-secondary hover:text-accent transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>

          <button 
            onClick={scrollToTop}
            className="p-3 bg-secondary/10 hover:bg-secondary/20 text-primary rounded-full transition-colors flex items-center justify-center group"
            aria-label="Back to top"
          >
            <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
          </button>

        </div>
        
        <div className="mt-8 pt-8 border-t border-secondary/10 text-center text-sm text-secondary">
          <p>&copy; {currentYear} {personalInfo.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
