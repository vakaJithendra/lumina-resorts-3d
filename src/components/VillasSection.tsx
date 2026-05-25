import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { villas } from '../data/villas';
import ParticleField from './ParticleField';

export default function VillasSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="villas" className="relative py-32 md:py-44 bg-deep-navy overflow-hidden" ref={ref}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-deep-navy via-dark-surface to-deep-navy" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="font-body text-[12px] tracking-[0.3em] text-gold uppercase mb-4">Accommodations</p>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-sand font-light">
            Villas & <span className="italic text-gold-gradient">Suites</span>
          </h2>
          <div className="section-divider mx-auto mt-8" />
        </motion.div>

        {/* Villa Cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {villas.map((villa, i) => (
            <motion.div
              key={villa.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              onMouseEnter={() => setHoveredId(villa.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative rounded-2xl overflow-hidden cursor-pointer"
              style={{
                transition: 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                transform: hoveredId === villa.id ? 'scale(1.02)' : 'scale(1)',
              }}
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${villa.gradient}`} />

              {/* Villa image placeholder with gradient */}
              <div className="relative h-72 md:h-80 overflow-hidden">
                <img
                  src={
                    villa.id === 1 ? 'https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=800' :
                    villa.id === 2 ? 'https://images.pexels.com/photos/3225530/pexels-photo-3225530.jpeg?auto=compress&cs=tinysrgb&w=800' :
                    villa.id === 3 ? 'https://images.pexels.com/photos/261394/pexels-photo-261394.jpeg?auto=compress&cs=tinysrgb&w=800' :
                    'https://images.pexels.com/photos/1457801/pexels-photo-1457801.jpeg?auto=compress&cs=tinysrgb&w=800'
                  }
                  alt={villa.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-navy via-deep-navy/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative p-8 md:p-10 -mt-20">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-display text-2xl md:text-3xl text-sand font-light mb-1">
                      {villa.name}
                    </h3>
                    <p className="font-serif text-sm text-gold/70 italic">{villa.subtitle}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-display text-2xl text-gold">{villa.price}</p>
                    <p className="font-body text-[10px] tracking-wider text-sand/40 uppercase">per night</p>
                  </div>
                </div>

                <p className="font-body text-sm text-sand/60 leading-relaxed mb-6">
                  {villa.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {villa.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 text-[10px] tracking-wider uppercase font-body border border-gold/20 text-gold/60 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex items-center gap-2 text-gold group-hover:gap-4 transition-all duration-300">
                  <span className="font-body text-[12px] tracking-[0.15em] uppercase">View Villa</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>

              {/* Hover glow border */}
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-500"
                style={{
                  opacity: hoveredId === villa.id ? 1 : 0,
                  boxShadow: `inset 0 0 0 1px ${villa.accent}40, 0 0 30px ${villa.accent}15`,
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      <ParticleField count={15} color="#D4A853" minSize={1} maxSize={3} />
    </section>
  );
}