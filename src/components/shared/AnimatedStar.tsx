import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const AnimatedStar = () => {
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
      className="text-yellow-400"
    >
      <Star className="w-6 h-6 md:w-8 md:h-8 fill-current" />
    </motion.div>
  );
};

export default React.memo(AnimatedStar);