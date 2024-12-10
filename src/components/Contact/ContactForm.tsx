import React from 'react';
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
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => onChange('name', e.target.value)}
          className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:border-[#FF3366] transition-colors"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => onChange('email', e.target.value)}
          className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:border-[#4A90E2] transition-colors"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
        <textarea
          value={formData.message}
          onChange={(e) => onChange('message', e.target.value)}
          rows={4}
          className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:border-[#9333EA] transition-colors resize-none"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-[#FF3366] to-[#4A90E2] text-white px-6 py-3 rounded-lg flex items-center justify-center space-x-2"
      >
        <Send className="w-4 h-4" />
        <span>Send Message</span>
      </button>
    </form>
  );
};

export default React.memo(ContactForm);