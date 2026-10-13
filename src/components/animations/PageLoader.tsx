import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const PageLoader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading time (e.g. waiting for assets/fonts)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds loader
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-background"
        >
          <div className="relative w-24 h-24 flex items-center justify-center">
            {/* Outer spinning ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              className="absolute inset-0 rounded-full border-t-2 border-primary border-r-2 border-r-transparent border-b-2 border-secondary border-l-2 border-l-transparent opacity-50"
            />
            {/* Inner pulsing logo text */}
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="text-2xl font-bold text-gradient"
            >
              P.
            </motion.div>
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8 text-gray-400 tracking-widest text-sm uppercase"
          >
            Loading Experience...
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
