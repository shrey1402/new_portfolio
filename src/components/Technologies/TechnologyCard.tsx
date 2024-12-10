import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
}

interface TechnologyCardProps {
  icon: React.ReactNode;
  title: string;
  gradient: string;
  skills: string[];
  isOpen: boolean;
  onClick: () => void;
  index: number;
}

const TechnologyCard: React.FC<TechnologyCardProps> = ({
  icon,
  title,
  gradient,
  skills,
  isOpen,
  onClick,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="w-full"
    >
      <motion.button
        onClick={onClick}
        className="w-full p-6 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-lg transform transition-all duration-300 flex items-center justify-between hover:bg-white/10"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="flex items-center space-x-4">
          <motion.div 
            className={`p-3 rounded-lg bg-gradient-to-r ${gradient} text-white`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {icon}
          </motion.div>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-6 h-6 text-white/60" />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-6 mt-2 bg-gray-900/80 backdrop-blur-lg border border-white/10 rounded-xl">
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: skillIndex * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className={`px-4 py-2 text-sm font-medium text-white bg-gradient-to-r ${gradient} rounded-full shadow-lg hover:shadow-xl transition-shadow`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default React.memo(TechnologyCard);