import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedGradientTextProps {
  children: React.ReactNode;
  from?: string;
  to?: string;
  className?: string;
}

const AnimatedGradientText: React.FC<AnimatedGradientTextProps> = ({
  children,
  from = '[#FF3366]',
  to = '[#4A90E2]',
  className = ''
}) => {
  return (
    <motion.span
      className={`bg-gradient-to-r from-${from} to-${to} text-transparent bg-clip-text animate-gradient ${className}`}
    >
      {children}
    </motion.span>
  );
};

export default React.memo(AnimatedGradientText);