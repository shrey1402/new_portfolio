import React from 'react';
import { Star } from 'lucide-react';
import { Review } from './types';

interface ReviewCardProps {
  review: Review;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  return (
    <div className="flex-shrink-0 w-[280px] p-4 bg-white/5 border border-white/10 rounded-lg">
      <div className="flex items-center space-x-3 mb-4">
        <img
          src={review.image}
          alt={review.name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h3 className="text-base font-medium text-white">{review.name}</h3>
          <p className="text-sm text-gray-400">{review.role}</p>
        </div>
      </div>
      <p className="text-sm text-gray-300 mb-4 line-clamp-4">{review.content}</p>
      <div className="flex space-x-1">
        {[...Array(review.rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-current text-yellow-400" />
        ))}
      </div>
    </div>
  );
};

export default React.memo(ReviewCard);