import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { ServiceCardProps } from './types';

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index, isOpen, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="w-full"
    >
      <button
        onClick={onClick}
        className="w-full p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg border border-white/10 shadow-lg transform transition-all duration-300 flex items-center justify-between hover:shadow-xl group"
      >
        <div className="flex items-center space-x-4">
          <div className={`p-3 bg-gradient-to-r ${service.gradient} rounded-lg text-white transform transition-transform group-hover:scale-110`}>
            {service.icon}
          </div>
          <div className="text-left">
            <h3 className="text-xl font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all">
              {service.title}
            </h3>
            <p className="text-sm text-gray-400 mt-1 max-w-2xl">{service.description}</p>
          </div>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-gray-400 group-hover:text-white transition-colors"
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-6 mt-2 bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-lg border border-white/10 rounded-xl">
              <h4 className="font-medium text-white mb-4">Recent Projects:</h4>
              <div className="space-y-3">
                {service.examples.map((example, exampleIndex) => (
                  <motion.div
                    key={exampleIndex}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: exampleIndex * 0.1 }}
                    className="flex items-center space-x-3 group/item"
                  >
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient} transform transition-transform group-hover/item:scale-150`} />
                    <span className="text-gray-400 group-hover/item:text-white transition-colors">
                      {example}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ServiceCard;