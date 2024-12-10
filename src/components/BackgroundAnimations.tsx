import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const colors = ['#FF3366', '#4A90E2', '#FF6B6B', '#67B8F4', '#FFA07A', '#B4E7FF'];

const BackgroundAnimations = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const orbs = Array.from({ length: 10 }); // Reduced number of orbs

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        delay: 2.5,
        duration: 1.5,
        staggerChildren: 0.2 // Increased stagger time for smoother appearance
      }
    }
  };

  const orbVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.5
    },
    visible: { 
      opacity: [0.15, 0.25, 0.15], // Reduced opacity range for subtlety
      scale: [1, 1.1, 1], // Reduced scale range for smoother movement
      transition: {
        opacity: {
          duration: 12, // Increased duration for smoother transitions
          repeat: Infinity,
          ease: "easeInOut"
        },
        scale: {
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className="absolute inset-0"
    >
      {orbs.map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute rounded-full"
          variants={orbVariants}
          style={{
            width: Math.random() * 100 + 100, // More consistent sizing
            height: Math.random() * 100 + 100,
            filter: 'blur(40px)', // Increased blur for softer edges
            left: `${(i / orbs.length) * 100}%`, // More evenly distributed
            top: `${Math.random() * 80 + 10}%`, // Keep within visible area
          }}
          animate={{
            background: colors.map(color => `radial-gradient(circle at center, ${color}, transparent)`),
            x: [
              0,
              Math.sin(i) * 100, // Smoother sinusoidal movement
              0,
              Math.sin(i + 2) * -100,
              0
            ],
            y: [
              0,
              Math.cos(i) * 80,
              0,
              Math.cos(i + 2) * -80,
              0
            ]
          }}
          transition={{
            background: {
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            },
            x: {
              duration: 30,
              repeat: Infinity,
              ease: "easeInOut"
            },
            y: {
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        />
      ))}
    </motion.div>
  );
};

export default BackgroundAnimations;