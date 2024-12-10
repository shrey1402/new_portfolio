import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Database, Globe, Layout, Server, Smartphone, Star, ChevronDown } from 'lucide-react';
import BackgroundGradient from './shared/BackgroundGradient';

const technologies = [
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: 'Mobile',
    gradient: 'from-[#FF3366] to-[#FF6B6B]',
    skills: ['React Native', 'Flutter', 'iOS', 'Android']
  },
  {
    icon: <Code2 className="w-8 h-8" />,
    title: 'Frontend',
    gradient: 'from-[#4A90E2] to-[#67B8F4]',
    skills: ['React', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'Next.js']
  },
  {
    icon: <Server className="w-8 h-8" />,
    title: 'Backend',
    gradient: 'from-[#FF6B6B] to-[#FFA07A]',
    skills: ['Node.js', 'Python', 'Java', 'PHP']
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: 'Database',
    gradient: 'from-[#9333EA] to-[#C084FC]',
    skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis']
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: 'CMS',
    gradient: 'from-[#FF3366] to-[#FF6B6B]',
    skills: ['WordPress', 'Shopify', 'Webflow', 'Drupal']
  },
  {
    icon: <Layout className="w-8 h-8" />,
    title: 'Design',
    gradient: 'from-[#10B981] to-[#34D399]',
    skills: ['Figma', 'Adobe XD', 'UI/UX', 'Illustrator']
  },
];

const Technologies = () => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const handleDropdownClick = (index: number) => {
    setOpenDropdown(openDropdown === index ? null : index);
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
          className="flex items-center mb-12"
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
            className="mr-4 text-yellow-400"
          >
            <Star className="w-8 h-8 fill-current" />
          </motion.div>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-[#FF3366] to-[#4A90E2] text-transparent bg-clip-text animate-gradient">
            Technologies
          </h2>
        </motion.div>

        <div className="space-y-4">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="w-full"
            >
              <motion.button
                onClick={() => handleDropdownClick(index)}
                className={`w-full p-6 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-lg transform transition-all duration-300 flex items-center justify-between hover:bg-white/10`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center space-x-4">
                  <motion.div 
                    className={`p-3 rounded-lg bg-gradient-to-r ${tech.gradient} text-white`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {tech.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold text-white">{tech.title}</h3>
                </div>
                <motion.div
                  animate={{ rotate: openDropdown === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-6 h-6 text-white/60" />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {openDropdown === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 mt-2 bg-gray-900/80 backdrop-blur-lg border border-white/10 rounded-xl">
                      <div className="flex flex-wrap gap-3">
                        {tech.skills.map((skill, skillIndex) => (
                          <motion.span
                            key={skillIndex}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: skillIndex * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            className={`px-4 py-2 text-sm font-medium text-white bg-gradient-to-r ${tech.gradient} rounded-full shadow-lg hover:shadow-xl transition-shadow`}
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;