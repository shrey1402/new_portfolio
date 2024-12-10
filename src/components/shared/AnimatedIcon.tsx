import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedIconProps {
  icon: React.ReactNode;
  className?: string;
}

const AnimatedIcon: React.FC<AnimatedIconProps> = ({ icon, className = '' }) => {
  return (
    <motion.div
      animate={{
        rotate: 360,
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "linear",
      }}
      className={className}
    >
      {icon}
    </motion.div>
  );
};

export default React.memo(AnimatedIcon);