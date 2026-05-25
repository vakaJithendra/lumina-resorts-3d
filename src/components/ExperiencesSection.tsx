import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Sparkles, Sunset, UtensilsCrossed, Waves, Heart } from 'lucide-react';
import { experiences } from '../data/experiences';

const iconMap: Record<string, React.ReactNode> = {
  sparkles: <Sparkles className="w-6 h-6" />,
  sunset: <Sunset className="w-6 h-6" />,
  utensils: <UtensilsCrossed className="w-6 h-6" />,
  waves: <Waves className="w-6 h-6" />,
  heart: <Heart className="w-6 h-6" />,
};

export default function ExperiencesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="experiences" className="relative py-32 md:py-44 overflow-hidden" ref={ref}
      style={{ background: 'linear-gradient(180deg, #FAF8F4 0%, #F5EDD8 100%)' }}
    >
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, #1A4E6B 1px, transparent 0)',
        backgroundSize: '48px 48px',
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="font-body text-[12px] tracking-[0.3em] text-gold uppercase mb-4">Curated For You</p>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-deep-navy font-light">
            Signature <span className="italic text-ocean">Experiences</span>
          </h2>
          <div className="section-divider mx-auto mt-8" />
        </motion.div>

        {/* Experience Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              className="group glass-card-light p-8 md:p-10 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer relative overflow-hidden"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: 'radial-gradient(circle at 50% 0%, rgba(212, 168, 83, 0.08) 0%, transparent 70%)' }}
              />

              {/* Icon */}
              <div className="relative w-14 h-14 rounded-xl bg-ocean/10 flex items-center justify-center text-ocean mb-6 group-hover:bg-gold/10 group-hover:text-gold transition-all duration-500">
                {iconMap[exp.icon]}
              </div>

              {/* Content */}
              <h3 className="font-display text-xl md:text-2xl text-deep-navy font-light mb-3">
                {exp.name}
              </h3>
              <p className="font-body text-sm text-deep-navy/60 leading-relaxed">
                {exp.description}
              </p>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}