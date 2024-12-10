import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

const contactDetails = [
  {
    icon: <Mail className="w-6 h-6 text-white" />,
    gradient: 'from-[#FF3366] to-[#FF6B6B]',
    label: 'Email',
    value: 'shreyk1402@gmail.com',
    href: 'mailto:shreyk1402@gmail.com',
    hoverColor: 'hover:text-[#FF3366]'
  },
  {
    icon: <MapPin className="w-6 h-6 text-white" />,
    gradient: 'from-[#4A90E2] to-[#67B8F4]',
    label: 'Location',
    value: 'Mumbai, India'
  },
  {
    icon: <Phone className="w-6 h-6 text-white" />,
    gradient: 'from-[#9333EA] to-[#C084FC]',
    label: 'Phone',
    value: '+91 7046110694',
    href: 'tel:+917046110694',
    hoverColor: 'hover:text-[#9333EA]'
  }
];

const ContactInfo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      <div className="space-y-4">
        {contactDetails.map((detail, index) => (
          <div key={index} className="flex items-center space-x-4">
            <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${detail.gradient} flex items-center justify-center`}>
              {detail.icon}
            </div>
            <div>
              <p className="text-gray-400">{detail.label}</p>
              {detail.href ? (
                <a href={detail.href} className={`text-white ${detail.hoverColor} transition-colors`}>
                  {detail.value}
                </a>
              ) : (
                <p className="text-white">{detail.value}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default ContactInfo;