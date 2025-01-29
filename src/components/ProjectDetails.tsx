import React from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import { Bot, Brain, LineChart, Github, ExternalLink } from 'lucide-react';

const projectsData = {
  chatbot: {
    title: 'AI Chatbot Assistant',
    description: 'An intelligent chatbot powered by machine learning for customer support automation.',
    icon: <Bot className="w-8 h-8" />,
    fullDescription: `
      This AI-powered chatbot leverages natural language processing to provide intelligent customer support automation.
      Built with Python and TensorFlow, it features intent recognition, contextual understanding, and seamless integration capabilities.
    `,
    features: [
      'Natural Language Processing',
      'Intent Recognition',
      'Contextual Response Generation',
      'Multi-language Support',
      'Analytics Dashboard'
    ],
    technologies: ['Python', 'TensorFlow', 'NLTK', 'FastAPI', 'React'],
    images: [
      'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80'
    ]
  },
  'image-recognition': {
    title: 'Image Recognition System',
    description: 'Deep learning-based image recognition system for real-time object detection.',
    icon: <Brain className="w-8 h-8" />,
    fullDescription: `
      A state-of-the-art image recognition system utilizing deep learning for real-time object detection and classification.
      Implements advanced CNN architectures for high accuracy and performance.
    `,
    features: [
      'Real-time Object Detection',
      'Multiple Object Tracking',
      'Custom Model Training',
      'API Integration',
      'Performance Analytics'
    ],
    technologies: ['PyTorch', 'OpenCV', 'Python', 'CUDA', 'REST API'],
    images: [
      'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80'
    ]
  },
  analytics: {
    title: 'Predictive Analytics Dashboard',
    description: 'Advanced analytics dashboard for business intelligence and forecasting.',
    icon: <LineChart className="w-8 h-8" />,
    fullDescription: `
      A comprehensive analytics dashboard that combines machine learning with business intelligence
      to provide actionable insights and accurate forecasting capabilities.
    `,
    features: [
      'Predictive Modeling',
      'Interactive Visualizations',
      'Automated Reporting',
      'Custom Metrics',
      'Data Export'
    ],
    technologies: ['Python', 'Scikit-learn', 'React', 'D3.js', 'PostgreSQL'],
    images: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80'
    ]
  }
};

const ProjectDetails = () => {
  const { id } = useParams<{ id: string }>();
  const project = projectsData[id as keyof typeof projectsData];

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="pt-24 pb-12">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
              {project.icon}
            </div>
            <h1 className="text-4xl font-bold text-white">{project.title}</h1>
          </div>

          <div className="mb-12">
            <img
              src={project.images[0]}
              alt={project.title}
              className="w-full h-[400px] object-cover rounded-xl"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="col-span-2">
              <h2 className="text-2xl font-semibold mb-4 text-white">Overview</h2>
              <p className="text-white/70 mb-8">{project.fullDescription}</p>

              <h2 className="text-2xl font-semibold mb-4 text-white">Key Features</h2>
              <ul className="list-disc list-inside text-white/70 mb-8">
                {project.features.map((feature) => (
                  <li key={feature} className="mb-2">{feature}</li>
                ))}
              </ul>
            </div>

            <div>
              <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                <h2 className="text-xl font-semibold mb-4 text-white">Technologies</h2>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-8 space-y-4">
                  <a
                    href="#"
                    className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    <span>View Source Code</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetails;