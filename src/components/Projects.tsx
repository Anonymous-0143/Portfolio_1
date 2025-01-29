import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Bot, Brain, LineChart } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 'chatbot',
    title: 'AI Chatbot Assistant',
    description: 'An intelligent chatbot powered by machine learning for customer support automation.',
    icon: <Bot className="w-6 h-6" />,
    tags: ['Python', 'TensorFlow', 'NLP'],
    link: '/projects/chatbot'
  },
  {
    id: 'image-recognition',
    title: 'Image Recognition System',
    description: 'Deep learning-based image recognition system for real-time object detection.',
    icon: <Brain className="w-6 h-6" />,
    tags: ['PyTorch', 'Computer Vision', 'CNN'],
    link: '/projects/image-recognition'
  },
  {
    id: 'data-analytics',
    title: 'Predictive Analytics Dashboard',
    description: 'Advanced analytics dashboard for business intelligence and forecasting.',
    icon: <LineChart className="w-6 h-6" />,
    tags: ['Python', 'Scikit-learn', 'React'],
    link: '/projects/analytics'
  }
];

const Projects = () => {
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

  return (
    <section ref={ref} className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
              Featured Projects
            </span>
          </h2>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid md:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -5 }}
      className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-lg"
    >
      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center mb-4">
        {project.icon}
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
      <p className="text-white/70 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag: string) => (
          <span key={tag} className="px-2 py-1 text-sm rounded-full bg-purple-500/20 text-purple-300">
            {tag}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        <Link
          to={project.link}
          className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
        >
          <ExternalLink className="w-4 h-4" />
          <span>View Details</span>
        </Link>
        <a
          href="#"
          className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
        >
          <Github className="w-4 h-4" />
          <span>Source Code</span>
        </a>
      </div>
    </motion.div>
  );
};

export default Projects;