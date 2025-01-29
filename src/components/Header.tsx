import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/10 backdrop-blur-lg border-b border-white/10"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 text-2xl font-bold"
            >
              <Cpu className="w-8 h-8 text-purple-500" />
              <span className="bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
                Arin Choubey
              </span>
            </motion.div>
          </Link>
          
          <nav className="flex items-center gap-6">
            <SocialLink href="https://github.com/Anonymous-0143" icon={<Github className="w-5 h-5" />} />
            <SocialLink href="https://www.linkedin.com/in/arin0143/" icon={<Linkedin className="w-5 h-5" />} />
            <SocialLink href="https://twitter.com" icon={<Twitter className="w-5 h-5" />} />
            <SocialLink href="mailto:arinchoubey9@gmail.com" icon={<Mail className="w-5 h-5" />} />
          </nav>
        </div>
      </div>
    </motion.header>
  );
};

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.2, rotate: 5 }}
    className="text-white/70 hover:text-white transition-colors"
  >
    {icon}
  </motion.a>
);

export default Header;