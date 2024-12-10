import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ServiceCard from './ServiceCard';
import SectionTitle from '../shared/SectionTitle';
import SectionContainer from '../shared/SectionContainer';
import { services } from './services.data';

const Services = () => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const handleDropdownClick = (index: number) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <SectionContainer>
      <SectionTitle title="Services" />
      <motion.div 
        className="space-y-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            service={service}
            index={index}
            isOpen={openDropdown === index}
            onClick={() => handleDropdownClick(index)}
          />
        ))}
      </motion.div>
    </SectionContainer>
  );
};

export default Services;