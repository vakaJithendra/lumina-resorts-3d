import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import VillasSection from './components/VillasSection';
import ExperiencesSection from './components/ExperiencesSection';
import GallerySection from './components/GallerySection';
import DiningSection from './components/DiningSection';
import TestimonialsSection from './components/TestimonialsSection';
import BookingSection from './components/BookingSection';
import LocationSection from './components/LocationSection';
import Footer from './components/Footer';

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[200] h-[2px]">
      <motion.div
        className="h-full"
        style={{
          width: `${progress}%`,
          background: 'linear-gradient(90deg, #1A4E6B, #D4A853)',
        }}
      />
    </div>
  );
}

function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    const over = () => setIsHovering(true);
    const out = () => setIsHovering(false);

    window.addEventListener('mousemove', move);

    const interactives = document.querySelectorAll('a, button, input, select, textarea, [role="button"]');
    interactives.forEach(el => {
      el.addEventListener('mouseenter', over);
      el.addEventListener('mouseleave', out);
    });

    return () => {
      window.removeEventListener('mousemove', move);
      interactives.forEach(el => {
        el.removeEventListener('mouseenter', over);
        el.removeEventListener('mouseleave', out);
      });
    };
  }, []);

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="custom-cursor hidden lg:block"
        animate={{
          x: pos.x - 20,
          y: pos.y - 20,
          width: isHovering ? 50 : 40,
          height: isHovering ? 50 : 40,
          borderColor: isHovering ? 'rgba(212, 168, 83, 0.6)' : 'rgba(212, 168, 83, 0.3)',
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 25, mass: 0.5 }}
        style={{
          border: '1px solid rgba(212, 168, 83, 0.3)',
          borderRadius: '50%',
        }}
      />
      {/* Inner dot */}
      <motion.div
        className="custom-cursor hidden lg:block"
        animate={{
          x: pos.x - 3,
          y: pos.y - 3,
          scale: isHovering ? 2 : 1,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
        style={{
          width: 6,
          height: 6,
          background: '#D4A853',
          borderRadius: '50%',
        }}
      />
    </>
  );
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  return (
    <div className="relative lg:cursor-none">
      <CustomCursor />
      <ScrollProgress />

      <AnimatePresence>
        {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      </AnimatePresence>

      <Navbar />

      <main>
        <HeroSection />
        <AboutSection />
        <VillasSection />
        <ExperiencesSection />
        <GallerySection />
        <DiningSection />
        <TestimonialsSection />
        <BookingSection />
        <LocationSection />
      </main>

      <Footer />
    </div>
  );
}
