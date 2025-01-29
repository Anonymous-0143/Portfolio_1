import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Code, Database, Brain } from 'lucide-react';

const timelineData = [
  {
    period: 'August 2023 - December 2023',
    title: 'Web Development Fundamentals',
    skills: ['HTML', 'CSS', 'Python'],
    icon: <Code className="w-6 h-6" />,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    period: 'January 2024 - April 2024',
    title: 'Backend Development',
    skills: ['C', 'DBMS'],
    icon: <Database className="w-6 h-6" />,
    color: 'from-green-500 to-emerald-500'
  },
  {
    period: 'August 2024 - December 2024',
    title: 'Advanced Programming',
    skills: ['C++', 'DSA'],
    icon: <Brain className="w-6 h-6" />,
    color: 'from-purple-500 to-pink-500'
  }
];

const Timeline = () => {
  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
              Learning Journey
            </span>
          </h1>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-500 to-pink-600" />
            
            {timelineData.map((item, index) => (
              <TimelineItem key={index} item={item} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const TimelineItem = ({ item, index }: { item: any; index: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const isLeft = index % 2 === 0;

  return (
    <div className="flex justify-center items-center relative mb-8">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay: index * 0.2 }}
        className={`w-5/12 ${isLeft ? 'mr-auto' : 'ml-auto'}`}
      >
        <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-lg">
          <div className={`flex items-center gap-4 mb-4 ${!isLeft && 'flex-row-reverse'}`}>
            <Calendar className="w-5 h-5 text-purple-400" />
            <span className="text-purple-400 font-medium">{item.period}</span>
          </div>
          
          <h3 className={`text-xl font-semibold text-white mb-4 ${!isLeft && 'text-right'}`}>
            {item.title}
          </h3>
          
          <div className={`flex flex-wrap gap-2 ${!isLeft && 'justify-end'}`}>
            {item.skills.map((skill: string) => (
              <span
                key={skill}
                className="px-3 py-1 text-sm rounded-full bg-white/10 text-white/90"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      <div className={`absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center border-4 border-[#0a0a0a]`}>
        {item.icon}
      </div>
    </div>
  );
};

export default Timeline;