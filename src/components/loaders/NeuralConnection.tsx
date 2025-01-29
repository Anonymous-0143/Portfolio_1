import React from 'react';
import { motion } from 'framer-motion';

interface NeuralConnectionProps {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  delay: number;
}

const NeuralConnection: React.FC<NeuralConnectionProps> = ({
  startX,
  startY,
  endX,
  endY,
  delay,
}) => {
  const length = Math.sqrt(Math.pow(endX - startX, 2) + Math.pow(endY - startY, 2));
  const angle = Math.atan2(endY - startY, endX - startX) * (180 / Math.PI);

  return (
    <motion.div
      className="absolute bg-gradient-to-r from-purple-500/30 to-pink-500/30"
      style={{
        width: length,
        height: 2,
        left: startX,
        top: startY,
        transformOrigin: '0 50%',
        transform: `rotate(${angle}deg)`,
      }}
      initial={{ scaleX: 0, opacity: 0 }}
      animate={{
        scaleX: 1,
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
        delay: delay,
        ease: "easeOut"
      }}
    />
  );
};

export default NeuralConnection;