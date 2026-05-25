import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import OceanCanvas from './OceanCanvas';
import ParticleField from './ParticleField';

export default function HeroSection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMousePos({
      x: (e.clientX / window.innerWidth - 0.5) * 2,
      y: (e.clientY / window.innerHeight - 0.5) * 2,
    });
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Ocean Canvas */}
      <OceanCanvas mouseX={mousePos.x} mouseY={mousePos.y} />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-deep-navy/30 via-transparent to-deep-navy/80" />

      {/* Particles */}
      <ParticleField count={35} color="#D4A853" minSize={1} maxSize={4} />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="w-16 h-[1px] mx-auto mb-8"
          style={{ background: 'linear-gradient(90deg, transparent, #D4A853, transparent)' }}
        />

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-sand font-light leading-[0.95] tracking-wide mb-6"
          style={{ transform: `translate(${mousePos.x * 8}px, ${mousePos.y * 5}px)` }}
        >
          Escape Into
          <br />
          <span className="text-gold-gradient font-normal italic">Timeless</span>{' '}
          Luxury
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="font-serif text-xl md:text-2xl text-sand/70 mb-12 tracking-wide italic max-w-2xl mx-auto"
        >
          Private villas, crystal waters, and unforgettable experiences
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#villas"
            className="magnetic-btn px-10 py-4 bg-gold/10 border border-gold/40 text-gold font-body text-[13px] tracking-[0.2em] uppercase rounded-full hover:bg-gold/20 transition-all duration-500 backdrop-blur-sm"
          >
            Explore Villas
          </a>
          <a
            href="#booking"
            className="magnetic-btn px-10 py-4 bg-gold text-deep-navy font-body text-[13px] tracking-[0.2em] uppercase rounded-full hover:bg-sand transition-all duration-500 shadow-[0_0_30px_rgba(212,168,83,0.3)]"
          >
            Book Your Escape
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="font-body text-[10px] tracking-[0.3em] text-sand/40 uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-5 h-5 text-gold/50" />
        </motion.div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-warm-white to-transparent" />
    </section>
  );
}