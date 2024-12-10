import React from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface ContactFormProps {
  formData: FormData;
  onSubmit: (e: React.FormEvent) => void;
  onChange: (field: keyof FormData, value: string) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ formData, onSubmit, onChange }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <form onSubmit={onSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => onChange('name', e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-[#FF3366] focus:ring-2 focus:ring-[#FF3366] transition-colors"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => onChange('email', e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-[#4A90E2] focus:ring-2 focus:ring-[#4A90E2] transition-colors"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
          <textarea
            value={formData.message}
            onChange={(e) => onChange('message', e.target.value)}
            rows={4}
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-[#9333EA] focus:ring-2 focus:ring-[#9333EA] transition-colors"
            required
          ></textarea>
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="w-full bg-gradient-to-r from-[#FF3366] to-[#4A90E2] text-white px-8 py-4 rounded-lg transition-all flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
        >
          <Send className="w-5 h-5" />
          <span>Send Message</span>
        </motion.button>
      </form>
    </motion.div>
  );
};

export default ContactForm;