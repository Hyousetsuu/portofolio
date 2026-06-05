import React from 'react';
import { cn } from '../utils/cn';
import type { HTMLMotionProps } from 'framer-motion';
import { motion } from 'framer-motion';

export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  target?: string;
  rel?: string;
}

export const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, href, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-accent/50 disabled:opacity-50 disabled:pointer-events-none";
    
    const variants = {
      primary: "bg-accent text-white hover:bg-accent/90 shadow-sm",
      secondary: "bg-secondary/10 text-primary hover:bg-secondary/20",
      outline: "border-2 border-accent text-accent hover:bg-accent/10",
      ghost: "text-secondary hover:text-primary hover:bg-secondary/10"
    };

    const sizes = {
      sm: "h-9 px-4 text-sm",
      md: "h-11 px-6 text-base",
      lg: "h-14 px-8 text-lg"
    };

    if (href) {
      return (
        <motion.a
          href={href}
          ref={ref as React.Ref<HTMLAnchorElement>}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={cn(baseStyles, variants[variant], sizes[size], className)}
          {...(props as any)}
        >
          {children}
        </motion.a>
      );
    }

    return (
      <motion.button
        ref={ref as React.Ref<HTMLButtonElement>}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...(props as any)}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';
