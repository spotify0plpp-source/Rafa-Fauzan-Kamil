import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export const LoadingScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 1000);
          return 100;
        }
        return prev + 1;
      });
    }, 30);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] bg-deep-space flex flex-col items-center justify-center"
    >
      <div className="w-64 md:w-96 space-y-4">
        <motion.h2 
          className="text-cyber-blue font-mono text-sm tracking-widest text-center"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          INITIALIZING CORE SYSTEMS...
        </motion.h2>
        
        <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden border border-white/10 p-[1px]">
          <motion.div 
            className="h-full bg-gradient-to-r from-cyber-blue to-cyber-purple"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex justify-between text-[10px] font-mono text-white/40">
          <span>{Math.round(progress)}% COMPLETE</span>
          <span>RAFA_INIT.SYS</span>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-10 text-[8px] font-mono text-white/20 uppercase tracking-tighter">
        Loading Assets // Shader v2.4 // Neural Map Rendered
      </div>
    </motion.div>
  );
};
