import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Database, Brain, Terminal, Globe, Server } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: <Globe className="w-6 h-6" />,
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Backend Development',
    icon: <Server className="w-6 h-6" />,
    skills: ['Python', 'Node.js', 'Express', 'FastAPI'],
    color: 'from-green-500 to-emerald-500'
  },
  {
    title: 'Programming Languages',
    icon: <Code className="w-6 h-6" />,
    skills: ['C', 'C++', 'Python', 'JavaScript'],
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Database',
    icon: <Database className="w-6 h-6" />,
    skills: ['MySQL', 'MongoDB', 'PostgreSQL'],
    color: 'from-orange-500 to-red-500'
  },
  {
    title: 'AI/ML',
    icon: <Brain className="w-6 h-6" />,
    skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenCV'],
    color: 'from-indigo-500 to-purple-500'
  },
  {
    title: 'Tools & Technologies',
    icon: <Terminal className="w-6 h-6" />,
    skills: ['Git', 'Docker', 'Linux', 'VS Code'],
    color: 'from-yellow-500 to-orange-500'
  }
];

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-20 bg-black/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
              Technical Skills
            </span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <SkillCard key={category.title} category={category} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const SkillCard = ({ category, index }: { category: any; index: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-lg"
    >
      <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${category.color} flex items-center justify-center mb-4`}>
        {category.icon}
      </div>
      <h3 className="text-xl font-semibold text-white mb-4">{category.title}</h3>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill: string) => (
          <span
            key={skill}
            className="px-3 py-1 text-sm rounded-full bg-white/10 text-white/90"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;