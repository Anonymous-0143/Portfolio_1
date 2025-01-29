import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Brain } from 'lucide-react';
import { Theme } from '../../contexts/ThemeContext';

interface RetroLoaderProps {
  onComplete: () => void;
  theme: Theme;
}

const RetroLoader = ({ onComplete, theme }: RetroLoaderProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return prev;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className={`fixed inset-0 ${theme.background} z-50 flex items-center justify-center`}
      animate={{ opacity: progress >= 100 ? [1, 0] : 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-md w-full mx-4">
        <div className="text-center mb-8">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="inline-block mb-4"
          >
            <Brain className={`w-12 h-12 ${theme.accent}`} />
          </motion.div>
          <h2 className={`text-2xl font-bold mb-2 bg-gradient-to-r ${theme.primary} text-transparent bg-clip-text`}>
            System Loading
          </h2>
        </div>

        <div className="space-y-4">
          <div className="h-2 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className={`h-full bg-gradient-to-r ${theme.secondary}`}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>

          <div className={`text-center ${theme.text} opacity-50 text-sm font-mono`}>
            {progress}%
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default RetroLoader;