import { Code2, Palette, ShoppingBag, Globe, Smartphone } from 'lucide-react';
import { Service } from './types';

export const services: Service[] = [
  {
    icon: <Smartphone className="w-12 h-12" />,
    title: 'Mobile Development',
    description: 'Cross-platform mobile applications with native performance.',
    gradient: 'from-cyan-500 to-blue-500',
    examples: [
      'Food delivery app with real-time tracking',
      'AI-powered fitness coaching platform',
      'Cross-platform social networking app'
    ]
  },
  {
    icon: <Code2 className="w-12 h-12" />,
    title: 'Web Applications',
    description: 'Full-stack web applications with modern technologies and scalable architecture.',
    gradient: 'from-blue-500 to-indigo-500',
    examples: [
      'Enterprise project management system',
      'Advanced booking & reservation platform',
      'Real-time collaboration portal'
    ]
  },
  {
    icon: <ShoppingBag className="w-12 h-12" />,
    title: 'E-commerce Development',
    description: 'Custom Shopify stores with unique features and optimized checkout flow.',
    gradient: 'from-green-500 to-teal-500',
    examples: [
      'AR-enabled fashion boutique',
      'Multi-vendor marketplace with AI recommendations',
      '3D product configurator platform'
    ]
  },
  {
    icon: <Globe className="w-12 h-12" />,
    title: 'WordPress Solutions',
    description: 'Custom WordPress websites with powerful features and optimized performance.',
    gradient: 'from-orange-500 to-red-500',
    examples: [
      'Dynamic real estate platform with virtual tours',
      'Subscription-based news portal',
      'Multi-location restaurant ordering system'
    ]
  },
  {
    icon: <Palette className="w-12 h-12" />,
    title: 'UI/UX Design',
    description: 'User-centered design solutions that drive engagement and conversions.',
    gradient: 'from-purple-500 to-pink-500',
    examples: [
      'Enterprise SaaS dashboard redesign',
      'Fintech mobile banking experience',
      'Gamified e-learning platform'
    ]
  }
];