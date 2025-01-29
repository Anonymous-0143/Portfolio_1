import React from 'react';
import { motion } from 'framer-motion';

interface NeuralNodeProps {
  x: number;
  y: number;
  delay: number;
  size?: number;
  isInput?: boolean;
  isOutput?: boolean;
}

const NeuralNode: React.FC<NeuralNodeProps> = ({ x, y, delay, size = 20, isInput, isOutput }) => {
  const getNodeColor = () => {
    if (isInput) return 'from-purple-500 to-purple-600';
    if (isOutput) return 'from-pink-500 to-pink-600';
    return 'from-purple-500 to-pink-600';
  };

  return (
    <motion.div
      className={`absolute rounded-full bg-gradient-to-r ${getNodeColor()} shadow-lg`}
      style={{
        left: x,
        top: y,
        width: size,
        height: size,
        transform: 'translate(-50%, -50%)',
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{
        scale: [0, 1.2, 1],
        opacity: [0, 1, 1],
      }}
      transition={{
        duration: 0.5,
        delay: delay,
        ease: "easeOut"
      }}
    />
  );
};

export default NeuralNode;