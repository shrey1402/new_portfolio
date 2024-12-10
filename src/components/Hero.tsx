import React from 'react';
import { motion } from 'framer-motion';
import { Player } from '@lottiefiles/react-lottie-player';
import developerAnimation from '../assets/developer-animation.json';
import BackgroundAnimations from './BackgroundAnimations';

const mainTextVariants = {
  initial: { 
    opacity: 0,
    y: 60,
    scale: 0.6
  },
  animate: { 
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0f0f0f] pb-16">
      {/* Background Lottie Animation */}
      <div className="absolute inset-0 z-0">
        <Player
          autoplay
          loop
          src={developerAnimation}
          style={{ width: '100%', height: '100%', opacity: 0.3 }}
          background="transparent"
          speed={0.45}
          rendererSettings={{
            preserveAspectRatio: 'xMidYMid slice',
            clearCanvas: false,
            progressiveLoad: true,
            hideOnTransparent: true
          }}
        />
      </div>

      {/* Additional Background Animations */}
      <div className="absolute inset-0 z-[1]">
        <BackgroundAnimations />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <motion.div
              initial="initial"
              animate="animate"
              variants={mainTextVariants}
              className="overflow-hidden"
            >
              <motion.h1 
                className="text-7xl md:text-[10rem] font-bold leading-none tracking-tighter"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 400, 
                  damping: 10,
                  mass: 0.8
                }}
              >
                <span className="inline-block bg-gradient-to-r from-[#FF3366] via-[#FF6B6B] to-[#FFA07A] text-transparent bg-clip-text animate-gradient">
                  From vision
                </span>
              </motion.h1>
            </motion.div>

            <motion.div
              initial="initial"
              animate="animate"
              variants={mainTextVariants}
              transition={{ delay: 0.15 }}
              className="overflow-hidden"
            >
              <motion.h1 
                className="text-7xl md:text-[10rem] font-bold leading-none tracking-tighter"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 400, 
                  damping: 10,
                  mass: 0.8
                }}
              >
                <span className="inline-block bg-gradient-to-r from-[#4A90E2] via-[#67B8F4] to-[#B4E7FF] text-transparent bg-clip-text animate-gradient">
                  to execution...
                </span>
              </motion.h1>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              delay: 0.6,
              duration: 0.8,
              type: "spring",
              damping: 12,
              stiffness: 100,
              mass: 0.8
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF3366]/20 via-transparent to-[#4A90E2]/20 blur-xl" />
            <motion.p 
              className="relative text-2xl md:text-4xl font-light leading-relaxed"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <motion.span 
                className="text-[#FF3366]"
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 500, 
                  damping: 10,
                  mass: 0.5
                }}
              >
                Let's code it
              </motion.span>
              <span className="text-white/80">, </span>
              <motion.span 
                className="text-[#FF6B6B]"
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 500, 
                  damping: 10,
                  mass: 0.5
                }}
              >
                create it
              </motion.span>
              <span className="text-white/80">, and </span>
              <motion.span 
                className="text-[#4A90E2]"
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 500, 
                  damping: 10,
                  mass: 0.5
                }}
              >
                make it innovative
              </motion.span>
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0f0f0f]/50 to-[#0f0f0f] z-[2]" />
    </section>
  );
};

export default Hero;