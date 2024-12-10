import React from 'react';
import { ChevronDown } from 'lucide-react';
import { ServiceCardProps } from './types';

const ServiceCard: React.FC<ServiceCardProps> = ({ service, isOpen, onClick }) => {
  return (
    <div className="w-full">
      <button
        onClick={onClick}
        className="w-full p-4 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between hover:bg-white/10 transition-colors"
      >
        <div className="flex items-center space-x-3">
          <div className={`p-2 rounded-lg bg-gradient-to-r ${service.gradient} text-white`}>
            {service.icon}
          </div>
          <div className="text-left">
            <h3 className="text-lg font-medium text-white">{service.title}</h3>
            <p className="text-sm text-gray-400 mt-1 line-clamp-2">{service.description}</p>
          </div>
        </div>
        <ChevronDown 
          className={`w-5 h-5 text-white/60 transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <div className="p-4 mt-2 bg-white/5 rounded-lg border border-white/10">
          <h4 className="font-medium text-white mb-3">Recent Projects:</h4>
          <div className="space-y-2">
            {service.examples.map((example, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient}`} />
                <span className="text-gray-400">{example}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default React.memo(ServiceCard);