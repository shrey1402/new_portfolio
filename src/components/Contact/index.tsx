import React, { useState } from 'react';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import SectionTitle from '../shared/SectionTitle';
import SectionContainer from '../shared/SectionContainer';

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
    <SectionContainer>
      <SectionTitle title="Get in Touch" />
      <p className="text-gray-400 text-center mb-12">Let's discuss your next project</p>
      
      <div className="grid gap-12 lg:grid-cols-2">
        <ContactForm 
          formData={formData}
          onSubmit={handleSubmit}
          onChange={handleChange}
        />
      </div>
    </SectionContainer>
  );
};

export default Contact;