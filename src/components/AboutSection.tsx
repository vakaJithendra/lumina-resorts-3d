import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import ParticleField from './ParticleField';

const stats = [
  { value: '47', label: 'Luxury Villas' },
  { value: '12', label: 'Acres of Paradise' },
  { value: '5', label: 'World-Class Restaurants' },
  { value: '98%', label: 'Guest Return Rate' },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative py-32 md:py-44 bg-warm-white overflow-hidden" ref={ref}>
      {/* Subtle texture */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, #1A4E6B 1px, transparent 0)',
        backgroundSize: '40px 40px',
      }} />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-ocean/20 via-ocean-teal/10 to-gold/10" />
              <img
                src="https://images.pexels.com/photos/1579373/pexels-photo-1579373.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Tropical paradise"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-warm-white/30 to-transparent" />
            </div>

            {/* Floating accent card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute -bottom-6 -right-6 md:right-8 glass-card-light p-6 shadow-xl"
            >
              <p className="font-serif text-3xl text-ocean italic">Since</p>
              <p className="font-display text-4xl text-deep-navy font-semibold">2008</p>
            </motion.div>

            {/* Decorative corner */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-gold/30 rounded-tl-2xl" />
          </motion.div>

          {/* Right - Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="font-body text-[12px] tracking-[0.3em] text-gold uppercase mb-4">Our Story</p>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-deep-navy font-light leading-[1.1] mb-8">
                Where Paradise
                <br />
                Meets <span className="italic text-ocean">Perfection</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="section-divider mb-8" />
              <p className="font-body text-base md:text-lg text-deep-navy/70 leading-relaxed mb-6">
                Nestled in the heart of the Maldives, Lumina Resorts is a sanctuary of unparalleled beauty and refined luxury. Born from a vision to create the world's most extraordinary island retreat, every detail has been crafted to transcend the boundaries of hospitality.
              </p>
              <p className="font-body text-base md:text-lg text-deep-navy/70 leading-relaxed mb-12">
                Here, time moves to the rhythm of the tides. Where golden sunsets paint the sky in hues of amber and rose, and the warm Indian Ocean cradles your private villa in an embrace of crystal-clear waters.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-2 gap-8"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="text-center md:text-left">
                  <p className="font-display text-3xl md:text-4xl text-ocean font-light">{stat.value}</p>
                  <p className="font-body text-[11px] tracking-[0.15em] text-deep-navy/50 uppercase mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <ParticleField count={8} color="#1A4E6B" minSize={2} maxSize={4} />
    </section>
  );
}