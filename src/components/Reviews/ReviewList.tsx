import React from 'react';
import { motion } from 'framer-motion';
import ReviewCard from './ReviewCard';
import { reviews } from './data';

const ReviewList = () => {
  return (
    <motion.div 
      className="overflow-x-auto -mx-4 px-4 hide-scrollbar"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex space-x-4 pb-4">
        {reviews.map((review, index) => (
          <ReviewCard key={index} review={review} />
        ))}
      </div>
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </motion.div>
  );
};

export default ReviewList;