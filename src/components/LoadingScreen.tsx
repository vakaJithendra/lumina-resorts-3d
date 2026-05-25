import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    document.body.classList.add('loading');
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsComplete(true), 600);
          setTimeout(() => {
            setIsVisible(false);
            document.body.classList.remove('loading');
            onComplete();
          }, 1800);
          return 100;
        }
        const increment = prev < 70 ? Math.random() * 4 + 2 : Math.random() * 2 + 0.5;
        return Math.min(prev + increment, 100);
      });
    }, 60);

    return () => {
      clearInterval(interval);
      document.body.classList.remove('loading');
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
          style={{ background: 'linear-gradient(180deg, #060d18 0%, #0d2847 40%, #1a4e6b 100%)' }}
          exit={{ y: '-100%' }}
          transition={{ duration: 1.4, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Caustic light effect */}
          <div className="absolute inset-0 opacity-40">
            <div className="caustic-light" />
          </div>

          {/* Animated gradient orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20"
            style={{ background: 'radial-gradient(circle, rgba(45,125,154,0.4) 0%, transparent 70%)', animation: 'gentle-float 8s ease-in-out infinite' }}
          />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-15"
            style={{ background: 'radial-gradient(circle, rgba(212,168,83,0.3) 0%, transparent 70%)', animation: 'gentle-float 6s ease-in-out infinite reverse' }}
          />

          {/* Floating particles */}
          {Array.from({ length: 40 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                width: Math.random() * 3 + 1,
                height: Math.random() * 3 + 1,
                left: `${Math.random() * 100}%`,
                bottom: '-5%',
                background: i % 3 === 0
                  ? `rgba(212, 168, 83, ${Math.random() * 0.6 + 0.2})`
                  : `rgba(45, 125, 154, ${Math.random() * 0.4 + 0.1})`,
                animation: `float-up ${Math.random() * 6 + 6}s linear infinite`,
                animationDelay: `${Math.random() * 6}s`,
              }}
            />
          ))}

          {/* Content */}
          <div className="relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="mb-6">
                <div className="w-16 h-[1px] mx-auto mb-8"
                  style={{ background: 'linear-gradient(90deg, transparent, #D4A853, transparent)' }}
                />
                <h1 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-[0.3em] text-sand mb-3 font-light">
                  LUMINA
                </h1>
                <p className="font-body text-sm md:text-base tracking-[0.6em] text-gold uppercase font-light">
                  Resorts
                </p>
              </div>
            </motion.div>

            {/* Progress counter */}
            <motion.div
              className="mt-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <div className="relative inline-block">
                <span className="font-body text-7xl md:text-8xl font-extralight text-sand tabular-nums">
                  {Math.floor(progress)}
                </span>
                <span className="font-body text-2xl text-gold ml-1 font-light">%</span>
              </div>

              {/* Progress bar */}
              <div className="mt-8 w-56 h-[1px] mx-auto overflow-hidden" style={{ background: 'rgba(255,255,255,0.08)' }}>
                <motion.div
                  className="h-full"
                  style={{
                    width: `${progress}%`,
                    background: 'linear-gradient(90deg, #1A4E6B, #D4A853, #F5EDD8)',
                  }}
                />
              </div>
            </motion.div>

            {isComplete && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mt-10 font-serif text-lg tracking-[0.4em] text-gold italic"
              >
                Welcome to Paradise
              </motion.p>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}