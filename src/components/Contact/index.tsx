import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import BackgroundGradient from '../shared/BackgroundGradient';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (field: keyof typeof formData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="relative py-32 bg-[#0f0f0f]">
      <BackgroundGradient />
      
      <div className="container mx-auto px-6 relative z-10">
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
          <h2 className="text-4xl font-bold bg-gradient-to-r from-[#FF3366] to-[#4A90E2] text-transparent bg-clip-text animate-gradient">
            Get in Touch
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Let's discuss your next project
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          <ContactInfo />
          <ContactForm 
            formData={formData}
            onSubmit={handleSubmit}
            onChange={handleChange}
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;