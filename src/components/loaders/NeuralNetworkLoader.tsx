import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import NeuralNode from './NeuralNode';
import NeuralConnection from './NeuralConnection';

interface NetworkLayer {
  nodes: { x: number; y: number }[];
  size: number;
}

const NeuralNetworkLoader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const containerWidth = 600;
  const containerHeight = 400;
  
  const layers: NetworkLayer[] = [
    { nodes: Array(4).fill(0).map((_, i) => ({ 
      x: 100, 
      y: 100 + i * 80 
    })), size: 16 },
    { nodes: Array(6).fill(0).map((_, i) => ({ 
      x: 300, 
      y: 60 + i * 60 
    })), size: 20 },
    { nodes: Array(4).fill(0).map((_, i) => ({ 
      x: 500, 
      y: 100 + i * 80 
    })), size: 16 }
  ];

  const connections = layers.slice(0, -1).flatMap((layer, layerIndex) =>
    layer.nodes.flatMap((startNode, startIndex) =>
      layers[layerIndex + 1].nodes.map((endNode, endIndex) => ({
        startX: startNode.x,
        startY: startNode.y,
        endX: endNode.x,
        endY: endNode.y,
        delay: (layerIndex * 0.2) + ((startIndex + endIndex) * 0.05)
      }))
    )
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return prev;
        }
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 bg-[#0a0a0a] z-50 flex items-center justify-center"
      animate={{ opacity: progress >= 100 ? [1, 0] : 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative" style={{ width: containerWidth, height: containerHeight }}>
        {connections.map((connection, index) => (
          <NeuralConnection key={index} {...connection} />
        ))}
        
        {layers.map((layer, layerIndex) =>
          layer.nodes.map((node, nodeIndex) => (
            <NeuralNode
              key={`${layerIndex}-${nodeIndex}`}
              x={node.x}
              y={node.y}
              size={layer.size}
              delay={layerIndex * 0.2 + nodeIndex * 0.1}
              isInput={layerIndex === 0}
              isOutput={layerIndex === layers.length - 1}
            />
          ))
        )}

        <motion.div
          className="absolute bottom-0 left-0 right-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div className="text-center mb-4">
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
              Neural Network Initialization
            </span>
          </div>
          <div className="h-2 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-purple-500 to-pink-600"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default NeuralNetworkLoader;