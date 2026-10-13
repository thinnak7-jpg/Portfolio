import React from 'react';
import { cn } from '../../utils/cn'; // We will create this utility
import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'secondary' | 'outline' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  className, 
  children, 
  ...props 
}) => {
  const baseClasses = "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full active:scale-95";
  
  const variants = {
    primary: "bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/30 hover:shadow-primary/50",
    secondary: "bg-secondary text-white shadow-lg hover:bg-secondary/90",
    outline: "border-2 border-primary/50 text-primary hover:bg-primary/10",
    glass: "glass-dark hover:bg-white/10 text-white",
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(baseClasses, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </motion.button>
  );
};
