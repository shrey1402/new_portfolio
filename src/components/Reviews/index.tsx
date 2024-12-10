import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import ReviewList from './ReviewList';
import BackgroundGradient from '../shared/BackgroundGradient';

const Reviews = () => {
  return (
    <section className="relative py-32 bg-[#0f0f0f]">
      <BackgroundGradient />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
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
            className="inline-block text-yellow-400 mb-4"
          >
            <Star className="w-8 h-8 fill-current" />
          </motion.div>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-[#FF3366] to-[#4A90E2] text-transparent bg-clip-text animate-gradient mb-4">
            Client Reviews
          </h2>
          <p className="text-gray-400">What our clients say about our work</p>
        </motion.div>

        <ReviewList />
      </div>
    </section>
  );
};

export default Reviews;