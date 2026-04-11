import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export const Splash: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 1500; // 1.5s
    const interval = 30;
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      setProgress(Math.min((currentStep / steps) * 100, 100));
      
      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(onComplete, 300);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950"
      exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex flex-col items-center gap-8">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative flex h-24 w-24 items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
        >
          <span className="bg-linear-to-br from-blue-400 to-indigo-600 bg-clip-text text-4xl font-bold tracking-tighter text-transparent">
            AK
          </span>
          <motion.div 
            className="absolute inset-0 rounded-2xl border border-blue-500/30"
            animate={{ 
              boxShadow: ['0 0 0px rgba(59, 130, 246, 0)', '0 0 20px rgba(59, 130, 246, 0.3)', '0 0 0px rgba(59, 130, 246, 0)'] 
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
        
        <div className="flex flex-col items-center gap-3">
          <div className="h-1 w-48 overflow-hidden rounded-full bg-white/10">
            <motion.div 
              className="h-full bg-linear-to-r from-blue-500 to-indigo-500"
              style={{ width: `${progress}%` }}
              layoutId="loading-bar"
            />
          </div>
          <div className="flex w-48 justify-between text-xs font-mono text-slate-500">
            <span>INITIALIZING</span>
            <span>{Math.round(progress)}%</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
