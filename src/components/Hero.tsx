import React, { useEffect, useState } from 'react';
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
      duration: 0.8
    }
  }
};

const Hero = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0f0f0f] pb-16">
      {/* Background Lottie Animation - Only render on client side */}
      {isClient && (
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
      )}

      {/* Simplified Background Animations */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <motion.div
          className="absolute w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-[#FF3366]/20 to-[#4A90E2]/20 rounded-full filter blur-3xl" />
          <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-gradient-to-r from-[#4A90E2]/20 to-[#FF3366]/20 rounded-full filter blur-3xl" />
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center space-y-8">
          <motion.div
            initial="initial"
            animate="animate"
            variants={mainTextVariants}
            className="space-y-4"
          >
            <h1 className="text-7xl md:text-[10rem] font-bold leading-none tracking-tighter">
              <span className="inline-block bg-gradient-to-r from-[#FF3366] via-[#FF6B6B] to-[#FFA07A] text-transparent bg-clip-text animate-gradient">
                From vision
              </span>
            </h1>
            <h1 className="text-7xl md:text-[10rem] font-bold leading-none tracking-tighter">
              <span className="inline-block bg-gradient-to-r from-[#4A90E2] via-[#67B8F4] to-[#B4E7FF] text-transparent bg-clip-text animate-gradient">
                to execution...
              </span>
            </h1>
          </motion.div>

          <motion.p 
            className="text-2xl md:text-4xl font-light leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <span className="text-[#FF3366]">Let's code it</span>
            <span className="text-white/80">, </span>
            <span className="text-[#FF6B6B]">create it</span>
            <span className="text-white/80">, and </span>
            <span className="text-[#4A90E2]">make it innovative</span>
          </motion.p>
        </div>
      </div>

      {/* Simplified gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0f0f0f]/50 to-[#0f0f0f] z-[2]" />
    </section>
  );
};

export default React.memo(Hero);