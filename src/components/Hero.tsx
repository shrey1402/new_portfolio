import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const wordVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.5 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    }),
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#0f0f0f] pb-16">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center space-y-12">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="space-y-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.3 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1,
                ease: [0.43, 0.13, 0.23, 0.96],
              }}
              className="overflow-hidden"
            >
              <motion.h1 
                className="text-7xl md:text-[8rem] font-bold leading-none tracking-tighter"
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.43, 0.13, 0.23, 0.96],
                }}
              >
                <motion.span
                  className="inline-block text-[#FF3366]"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  From vision
                </motion.span>
              </motion.h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.3 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.2,
                duration: 1,
                ease: [0.43, 0.13, 0.23, 0.96],
              }}
              className="overflow-hidden"
            >
              <motion.h1 
                className="text-7xl md:text-[8rem] font-bold leading-none tracking-tighter"
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{
                  delay: 0.2,
                  duration: 0.8,
                  ease: [0.43, 0.13, 0.23, 0.96],
                }}
              >
                <motion.span
                  className="inline-block text-[#4A90E2]"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  to execution...
                </motion.span>
              </motion.h1>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.6,
              duration: 0.8,
              ease: [0.43, 0.13, 0.23, 0.96],
            }}
            className="text-2xl md:text-4xl font-light leading-relaxed space-x-2"
          >
            {[
              { text: "Let's code it", color: "text-[#FF3366]" },
              { text: ",", color: "text-white/80" },
              { text: "create it", color: "text-[#FF6B6B]" },
              { text: ", and", color: "text-white/80" },
              { text: "make it innovative", color: "text-[#4A90E2]" },
            ].map((item, index) => (
              <motion.span
                key={index}
                variants={wordVariants}
                custom={index}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.05 }}
                className={`inline-block ${item.color}`}
              >
                {item.text}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Hero);