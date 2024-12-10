import React from 'react';
import { motion } from 'framer-motion';
import AnimatedStar from './AnimatedStar';

interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="flex items-center justify-center mb-8"
    >
      <div className="flex items-center">
        <AnimatedStar />
        <h2 className="ml-3 text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#FF3366] to-[#4A90E2] text-transparent bg-clip-text">
          {title}
        </h2>
      </div>
    </motion.div>
  );
};

export default React.memo(SectionTitle);