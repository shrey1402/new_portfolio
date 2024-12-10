import React from 'react';
import { motion } from 'framer-motion';

const BackgroundAnimations = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.3 }}
      transition={{ duration: 1 }}
      className="absolute inset-0"
    >
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-[#FF3366]/20 to-[#4A90E2]/20 rounded-full filter blur-3xl" />
      <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-gradient-to-r from-[#4A90E2]/20 to-[#FF3366]/20 rounded-full filter blur-3xl" />
    </motion.div>
  );
};

export default React.memo(BackgroundAnimations);