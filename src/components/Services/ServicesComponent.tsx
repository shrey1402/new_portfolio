import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { services } from './services.data';
import ServiceCard from './ServiceCard';
import BackgroundGradient from '../shared/BackgroundGradient';

const ServicesComponent = () => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const handleDropdownClick = (index: number) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <section className="relative py-32 bg-[#0f0f0f]">
      <BackgroundGradient />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center mb-16"
        >
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
            className="mr-4 text-yellow-400"
          >
            <Star className="w-8 h-8 fill-current" />
          </motion.div>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-[#FF3366] to-[#4A90E2] text-transparent bg-clip-text animate-gradient">
            Services
          </h2>
        </motion.div>

        <div className="space-y-4">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              index={index}
              isOpen={openDropdown === index}
              onClick={() => handleDropdownClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesComponent;