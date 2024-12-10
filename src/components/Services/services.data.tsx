import React from 'react';
import { Code2, Palette, ShoppingBag, Globe, Smartphone } from 'lucide-react';
import type { Service } from './types';

export const services: Service[] = [
  {
    icon: <Smartphone className="w-12 h-12" />,
    title: 'Mobile Development',
    description: 'Cross-platform mobile applications with native performance.',
    gradient: 'from-cyan-500 to-blue-500',
    examples: [
      'Food delivery app',
      'Fitness tracking platform',
      'Social media app'
    ]
  },
  {
    icon: <Code2 className="w-12 h-12" />,
    title: 'Web Applications',
    description: 'Full-stack web applications with modern technologies and scalable architecture.',
    gradient: 'from-blue-500 to-indigo-500',
    examples: [
      'Project management system',
      'Booking & reservation platform',
      'Customer portal'
    ]
  },
  {
    icon: <ShoppingBag className="w-12 h-12" />,
    title: 'E-commerce Development',
    description: 'Custom Shopify stores with unique features and optimized checkout flow.',
    gradient: 'from-green-500 to-teal-500',
    examples: [
      'Fashion boutique with AR try-on feature',
      'Multi-vendor marketplace platform',
      'Custom product configurator'
    ]
  },
  {
    icon: <Globe className="w-12 h-12" />,
    title: 'WordPress Solutions',
    description: 'Custom WordPress websites with powerful features and optimized performance.',
    gradient: 'from-orange-500 to-red-500',
    examples: [
      'Real estate listing platform',
      'News portal with membership',
      'Restaurant chain website'
    ]
  },
  {
    icon: <Palette className="w-12 h-12" />,
    title: 'UI/UX Design',
    description: 'User-centered design solutions that drive engagement and conversions.',
    gradient: 'from-purple-500 to-pink-500',
    examples: [
      'SaaS dashboard redesign',
      'Mobile banking app interface',
      'E-learning platform UX'
    ]
  }
];