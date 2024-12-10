import React, { useState } from 'react';
import { Code2, Database, Globe, Layout, Server, Smartphone } from 'lucide-react';
import TechnologyCard from './TechnologyCard';
import SectionTitle from '../shared/SectionTitle';
import SectionContainer from '../shared/SectionContainer';

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
    skills: ['React', 'Vue.js', 'TypeScript', 'Tailwind CSS']
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
  }
];

const Technologies = () => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const handleDropdownClick = (index: number) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <SectionContainer>
      <SectionTitle title="Technologies" />
      <div className="space-y-4">
        {technologies.map((tech, index) => (
          <TechnologyCard
            key={index}
            {...tech}
            isOpen={openDropdown === index}
            onClick={() => handleDropdownClick(index)}
            index={index}
          />
        ))}
      </div>
    </SectionContainer>
  );
};

export default Technologies;