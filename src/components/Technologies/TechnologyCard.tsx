import React from 'react';
import { ChevronDown } from 'lucide-react';

interface TechnologyCardProps {
  icon: React.ReactNode;
  title: string;
  gradient: string;
  skills: string[];
  isOpen: boolean;
  onClick: () => void;
}

const TechnologyCard: React.FC<TechnologyCardProps> = ({
  icon,
  title,
  gradient,
  skills,
  isOpen,
  onClick,
}) => {
  return (
    <div className="w-full">
      <button
        onClick={onClick}
        className="w-full p-4 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between hover:bg-white/10 transition-colors"
      >
        <div className="flex items-center space-x-3">
          <div className={`p-2 rounded-lg bg-gradient-to-r ${gradient} text-white`}>
            {icon}
          </div>
          <h3 className="text-lg font-medium text-white">{title}</h3>
        </div>
        <ChevronDown 
          className={`w-5 h-5 text-white/60 transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <div className="p-4 mt-2 bg-white/5 rounded-lg border border-white/10">
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className={`px-3 py-1 text-sm text-white bg-gradient-to-r ${gradient} rounded-full`}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default React.memo(TechnologyCard);