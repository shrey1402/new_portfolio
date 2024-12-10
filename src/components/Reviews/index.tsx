import React from 'react';
import { motion } from 'framer-motion';
import ReviewList from './ReviewList';
import SectionTitle from '../shared/SectionTitle';
import SectionContainer from '../shared/SectionContainer';

const Reviews = () => {
  return (
    <SectionContainer>
      <SectionTitle title="Client Reviews" />
      <motion.p 
        className="text-gray-400 text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        What our clients say about our work
      </motion.p>
      <ReviewList />
    </SectionContainer>
  );
};

export default Reviews;