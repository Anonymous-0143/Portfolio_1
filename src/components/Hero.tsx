import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Code, Database, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import ThemeSwitcher from './ThemeSwitcher';

const Hero = () => {
  const { currentTheme } = useTheme();

  return (
    <section className="min-h-screen pt-24 pb-12 flex items-center relative overflow-hidden">
      <div className={`absolute inset-0 bg-gradient-to-br from-opacity-20 to-transparent ${currentTheme.background}`}></div>
      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className={`bg-gradient-to-r ${currentTheme.primary} text-transparent bg-clip-text`}>
              AI/ML Engineer
            </span>
            <br />
            <span className={currentTheme.text}>in the making</span>
          </h1>
          <p className={`text-lg opacity-70 mb-8 ${currentTheme.text}`}>
            Undergraduate student at Lovely Professional University, passionate about artificial intelligence
            and machine learning. Building the future, one algorithm at a time.
          </p>
          <div className="flex flex-wrap gap-4">
            <Skill icon={<Brain />} text="AI/ML" />
            <Skill icon={<Code />} text="Programming" />
            <Skill icon={<Database />} text="Data Science" />
            <ThemeSwitcher />
            <Link to="/timeline">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className={`flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${currentTheme.secondary} text-white font-semibold`}
              >
                <Clock className="w-4 h-4" />
                <span>My Journey</span>
              </motion.div>
            </Link>
          </div>
        </motion.div>
      </div>
      <GlowingOrbs />
    </section>
  );
};

const Skill = ({ icon, text }: { icon: React.ReactNode; text: string }) => {
  const { currentTheme } = useTheme();
  
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={`flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 ${currentTheme.text}`}
    >
      {icon}
      <span>{text}</span>
    </motion.div>
  );
};

const GlowingOrbs = () => {
  const { currentTheme } = useTheme();
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-64 h-64 rounded-full"
          style={{
            background: `radial-gradient(circle, ${
              i === 0 ? 'rgba(147, 51, 234, 0.2)' : i === 1 ? 'rgba(219, 39, 119, 0.2)' : 'rgba(79, 70, 229, 0.2)'
            } 0%, transparent 70%)`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
            delay: i * 0.8,
          }}
        />
      ))}
    </div>
  );
};

export default Hero;