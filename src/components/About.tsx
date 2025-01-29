import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BookOpen, Award, Coffee } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section ref={ref} className="py-20 bg-black/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
              About Me
            </span>
          </h2>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid md:grid-cols-3 gap-8"
          >
            <InfoCard
              icon={<BookOpen className="w-6 h-6" />}
              title="Education"
              description="B.Tech in CSE (AI/ML) at Lovely Professional University"
              variants={itemVariants}
            />
            <InfoCard
              icon={<Award className="w-6 h-6" />}
              title="Focus Areas"
              description="Machine Learning, Deep Learning, Computer Vision"
              variants={itemVariants}
            />
            <InfoCard
              icon={<Coffee className="w-6 h-6" />}
              title="Interests"
              description="Problem Solving, Research, Open Source"
              variants={itemVariants}
            />
          </motion.div>

          <motion.p 
            variants={itemVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="mt-12 text-lg text-white/70 text-center"
          >
            Passionate about leveraging AI/ML to solve real-world problems. Currently exploring the
            intersection of artificial intelligence and practical applications while maintaining a
            strong foundation in computer science fundamentals.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

const InfoCard = ({ icon, title, description, variants }: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
  variants: any;
}) => (
  <motion.div
    variants={variants}
    whileHover={{ scale: 1.05 }}
    className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-lg"
  >
    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
    <p className="text-white/70">{description}</p>
  </motion.div>
);

export default About;