import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Brain } from 'lucide-react';

const ModelTrainingLoader = ({ onComplete }: { onComplete: () => void }) => {
  const [epoch, setEpoch] = useState(0);
  const [accuracy, setAccuracy] = useState(0);
  const [loss, setLoss] = useState(1);
  const totalEpochs = 10;

  useEffect(() => {
    const interval = setInterval(() => {
      setEpoch(prev => {
        if (prev >= totalEpochs) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return prev;
        }
        return prev + 1;
      });

      setAccuracy(prev => Math.min(0.98, prev + Math.random() * 0.15));
      setLoss(prev => Math.max(0.02, prev - Math.random() * 0.15));
    }, 400);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 bg-[#0a0a0a] z-50 flex items-center justify-center"
      animate={{ opacity: epoch >= totalEpochs ? [1, 0] : 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-md w-full mx-4">
        <div className="text-center mb-8">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="inline-block mb-4"
          >
            <Brain className="w-12 h-12 text-purple-500" />
          </motion.div>
          <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
            Training Neural Network
          </h2>
        </div>

        <div className="space-y-6">
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-white/70">Progress</span>
              <span className="text-white/70">{epoch}/{totalEpochs} epochs</span>
            </div>
            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-purple-500 to-pink-600"
                animate={{ width: `${(epoch / totalEpochs) * 100}%` }}
                transition={{ duration: 0.4 }}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="text-sm text-white/70 mb-1">Accuracy</div>
              <motion.div
                className="text-2xl font-bold text-green-400"
                animate={{ opacity: [0.5, 1] }}
                transition={{ duration: 0.4 }}
              >
                {(accuracy * 100).toFixed(2)}%
              </motion.div>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="text-sm text-white/70 mb-1">Loss</div>
              <motion.div
                className="text-2xl font-bold text-red-400"
                animate={{ opacity: [0.5, 1] }}
                transition={{ duration: 0.4 }}
              >
                {loss.toFixed(4)}
              </motion.div>
            </div>
          </div>

          <div className="text-center text-white/50 text-sm">
            Optimizing weights and biases...
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ModelTrainingLoader;