import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import AnimatedIcon from './AnimatedIcon';
import AnimatedGradientText from './AnimatedGradientText';

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
      className="flex items-center mb-12"
    >
      <AnimatedIcon
        icon={<Star className="w-8 h-8 fill-current text-yellow-400" />}
        className="mr-4"
      />
      <h2 className="text-4xl font-bold">
        <AnimatedGradientText>{title}</AnimatedGradientText>
      </h2>
    </motion.div>
  );
};

export default React.memo(SectionTitle);