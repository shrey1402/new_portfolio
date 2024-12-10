import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MessageCircle, Linkedin } from 'lucide-react';
import { useScrollEffect } from '../hooks/useScrollEffect';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const isScrolled = useScrollEffect();

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.8, duration: 0.6 }}
      className={`fixed w-full top-0 z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-[#0f0f0f]/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4 relative">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop"
                alt="Profile"
                className="w-12 h-12 rounded-full cursor-pointer border-2 border-white/30 hover:border-white/60 transition-colors"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              />
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 mt-2 w-48 bg-white/10 backdrop-blur-md rounded-lg shadow-lg py-2"
                  >
                    <a href="#contact" className="flex items-center px-4 py-2 text-white hover:bg-white/20">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Contact
                    </a>
                    <a href="mailto:shreyk1402@gmail.com" className="flex items-center px-4 py-2 text-white hover:bg-white/20">
                      <Mail className="w-4 h-4 mr-2" />
                      Email
                    </a>
                    <a href="mailto:shreyk1402@gmail.com" className="flex items-center px-4 py-2 text-white hover:bg-white/20">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Skype
                    </a>
                    <a href="https://linkedin.com/in/shrey-katharotiya-2ba7a7213" target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-2 text-white hover:bg-white/20">
                      <Linkedin className="w-4 h-4 mr-2" />
                      LinkedIn
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2, duration: 0.6 }}
              >
                <h1 className="text-xl font-bold text-white">Shrey's Protfolio</h1>
                <p className="text-sm text-white/70">Full Stack Developer</p>
              </motion.div>
            </div>
          </div>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;