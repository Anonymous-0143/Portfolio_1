import React from 'react';
import { motion } from 'framer-motion';

const PacmanLoader = ({ onComplete }: { onComplete: () => void }) => {
  const ghostColors = ['#FF0000', '#00FFDE', '#FFB8FF', '#FFB852'];

  return (
    <motion.div 
      className="fixed inset-0 bg-[#0a0a0a] z-50 flex items-center justify-center [image-rendering:pixelated]"
      animate={{ opacity: [1, 1, 0] }}
      transition={{ duration: 5.5, times: [0, 0.9, 1] }}
      onAnimationComplete={onComplete}
    >
      <div className="relative w-full h-16">
        {ghostColors.map((color, index) => (
          <motion.div
            key={color}
            className="absolute w-12 h-12"
            initial={{ x: -50 + (index * 60) }}
            animate={{ 
              x: window.innerWidth + 100,
            }}
            transition={{ 
              duration: 5,
              delay: 0,
              ease: "linear"
            }}
          >
            <svg width="48" height="48" viewBox="0 0 48 48" className="drop-shadow-[0_0_8px_rgba(147,51,234,0.5)]">
              <path
                d="M 24 0 C 14 0 6 8 6 18 L 6 48 L 12 42 L 18 48 L 24 42 L 30 48 L 36 42 L 42 48 L 42 18 C 42 8 34 0 24 0 Z"
                fill={color}
              />
              <circle cx="18" cy="18" r="4" fill="white" />
              <circle cx="30" cy="18" r="4" fill="white" />
            </svg>
          </motion.div>
        ))}

        <motion.div
          className="absolute w-16 h-16"
          initial={{ x: -100 }}
          animate={{ 
            x: window.innerWidth + 100,
          }}
          transition={{ 
            duration: 5,
            ease: "linear"
          }}
        >
          <motion.div
            className="w-16 h-16 bg-yellow-400 rounded-full drop-shadow-[0_0_8px_rgba(234,179,8,0.5)]"
            animate={{ 
              clipPath: [
                'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
                'polygon(0 0, 50% 50%, 100% 100%, 0 100%)',
                'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
              ]
            }}
            transition={{ 
              duration: 0.3,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PacmanLoader;