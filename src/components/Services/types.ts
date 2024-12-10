import { ReactNode } from 'react';

export interface Service {
  icon: ReactNode;
  title: string;
  description: string;
  gradient: string;
  examples: string[];
}

export interface ServiceCardProps {
  service: Service;
  index: number;
  isOpen: boolean;
  onClick: () => void;
}