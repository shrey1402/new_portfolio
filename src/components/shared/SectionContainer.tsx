import React from 'react';
import { cn } from '../../utils/cn';

interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
}

const SectionContainer: React.FC<SectionContainerProps> = ({ 
  children, 
  className
}) => {
  return (
    <section className={cn("py-16 bg-[#0f0f0f]", className)}>
      <div className="container mx-auto px-4">
        {children}
      </div>
    </section>
  );
};

export default SectionContainer;