import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useDarkMode } from '../hooks/useDarkMode';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../utils/cn';
import { personalInfo } from '../data/personalInfo';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/#about' },
  { name: 'Projects', path: '/#projects' },
  { name: 'Contact', path: '/#contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useDarkMode();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle smooth scrolling for hash links
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'glass py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <NavLink to="/" className="text-xl font-bold tracking-tight text-primary">
            {personalInfo.githubName}
          </NavLink>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  {link.path.startsWith('/#') ? (
                    <a
                      href={link.path}
                      className="text-sm font-medium text-secondary hover:text-accent transition-colors"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        cn(
                          "text-sm font-medium transition-colors",
                          isActive && location.hash === '' ? "text-accent" : "text-secondary hover:text-accent"
                        )
                      }
                    >
                      {link.name}
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-secondary/10 text-primary hover:bg-secondary/20 transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-4 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-secondary/10 text-primary hover:bg-secondary/20 transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-primary focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-surface/95 backdrop-blur-xl border-b border-secondary/20 shadow-2xl md:hidden"
          >
            <nav className="container mx-auto px-4 py-4">
              <ul className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    {link.path.startsWith('/#') ? (
                      <a
                        href={link.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block text-base font-medium text-primary hover:text-accent transition-colors"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <NavLink
                        to={link.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block text-base font-medium text-primary hover:text-accent transition-colors"
                      >
                        {link.name}
                      </NavLink>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
