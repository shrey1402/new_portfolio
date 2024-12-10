import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Review } from './types';

interface ReviewCardProps {
  review: Review;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  return (
    <motion.div
      className="flex-shrink-0 w-[300px] sm:w-[350px] p-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl shadow-lg mx-4"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative">
        <Quote className="absolute top-0 right-0 w-8 h-8 text-[#4A90E2]/30" />
        <div className="flex items-center space-x-4 mb-6">
          <img
            src={review.image}
            alt={review.name}
            className="w-16 h-16 rounded-full object-cover border-2 border-[#4A90E2]/20"
          />
          <div>
            <h3 className="text-lg font-semibold text-white">{review.name}</h3>
            <p className="text-sm text-gray-400">{review.role}</p>
          </div>
        </div>
        <p className="text-base text-gray-300 mb-6 line-clamp-4">{review.content}</p>
        <div className="flex space-x-1">
          {[...Array(review.rating)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-current text-yellow-400" />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ReviewCard;