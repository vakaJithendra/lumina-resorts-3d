import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import ParticleField from './ParticleField';

const menuHighlights = [
  { name: 'Seared Maldivian Tuna', desc: 'Local catch with coconut risotto and mango salsa', price: '$68' },
  { name: 'Wagyu Tenderloin', desc: 'A5 grade with truffle jus and roasted vegetables', price: '$145' },
  { name: 'Lobster Thermidor', desc: 'Grilled lobster with cognac cream and gruyère', price: '$95' },
  { name: 'Passion Fruit Soufflé', desc: 'Light as air with vanilla crème anglaise', price: '$32' },
];

export default function DiningSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="dining" className="relative py-32 md:py-44 overflow-hidden" ref={ref}
      style={{ background: 'linear-gradient(180deg, #1a1a1a 0%, #0f2740 50%, #1a1a1a 100%)' }}
    >
      {/* Warm ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full opacity-20"
        style={{ background: 'radial-gradient(circle, rgba(212, 168, 83, 0.3) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left - Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <p className="font-body text-[12px] tracking-[0.3em] text-gold uppercase mb-4">Gastronomy</p>
              <h2 className="font-display text-4xl md:text-6xl text-sand font-light leading-[1.1] mb-4">
                Signature <span className="italic text-gold-gradient">Dining</span>
              </h2>
              <p className="font-serif text-xl text-sand/50 italic mb-8">
                Where every meal becomes a masterpiece
              </p>
              <div className="section-divider mb-8" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-body text-base text-sand/60 leading-relaxed mb-12"
            >
              Our culinary artisans transform the freshest ocean harvests and finest global ingredients
              into extraordinary dining experiences. From candlelit beachfront dinners to our
              award-winning overwater restaurant, every meal is a journey of the senses.
            </motion.p>

            {/* Menu Highlights */}
            <div className="space-y-4">
              {menuHighlights.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                  className="group flex items-start justify-between py-4 border-b border-sand/10 hover:border-gold/30 transition-colors duration-300 cursor-pointer"
                >
                  <div className="flex-1 mr-4">
                    <h4 className="font-display text-lg text-sand group-hover:text-gold transition-colors duration-300">
                      {item.name}
                    </h4>
                    <p className="font-body text-sm text-sand/40 mt-1">{item.desc}</p>
                  </div>
                  <span className="font-serif text-lg text-gold italic">{item.price}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative"
          >
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Fine dining"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent" />
            </div>

            {/* Floating accent */}
            <div className="absolute -top-4 -right-4 w-32 h-32 border border-gold/20 rounded-2xl" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border border-gold/10 rounded-xl" />

            {/* Candle glow effect */}
            <div className="absolute top-1/4 right-1/4 w-4 h-4 rounded-full"
              style={{
                background: '#D4A853',
                boxShadow: '0 0 20px rgba(212, 168, 83, 0.6), 0 0 60px rgba(212, 168, 83, 0.3)',
                animation: 'gentle-float 3s ease-in-out infinite',
              }}
            />
          </motion.div>
        </div>
      </div>

      <ParticleField count={10} color="#D4A853" minSize={1} maxSize={3} />
    </section>
  );
}