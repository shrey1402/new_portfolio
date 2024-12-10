import React from 'react';
import { motion } from 'framer-motion';

const BackgroundGradient = () => {
  return (
    <>
      <div className="absolute inset-0 bg-[#0f0f0f]" />
      
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-96 h-96 bg-gradient-to-r from-[#FF3366]/10 to-[#4A90E2]/10 rounded-full filter blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              left: `${30 + i * 30}%`,
              top: `${20 + i * 20}%`,
            }}
          />
        ))}
      </div>
    </>
  );
};

export default BackgroundGradient;