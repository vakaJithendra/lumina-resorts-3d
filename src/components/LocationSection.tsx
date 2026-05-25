import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Phone, Mail, Plane, Clock } from 'lucide-react';
import GlobeCanvas from './GlobeCanvas';

const travelInfo = [
  { icon: <Plane className="w-5 h-5" />, label: 'Nearest Airport', value: 'Velana International (MLE)' },
  { icon: <Clock className="w-5 h-5" />, label: 'Transfer Time', value: '45 min by speedboat' },
  { icon: <MapPin className="w-5 h-5" />, label: 'Coordinates', value: '4.1755° N, 73.5093° E' },
];

const contactInfo = [
  { icon: <Phone className="w-4 h-4" />, value: '+960 400 8800' },
  { icon: <Mail className="w-4 h-4" />, value: 'reservations@luminaresorts.com' },
];

export default function LocationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="location" className="relative py-32 md:py-44 bg-deep-navy overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-deep-navy via-[#081c30] to-deep-navy" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="font-body text-[12px] tracking-[0.3em] text-gold uppercase mb-4">Our Location</p>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-sand font-light">
            Find Your <span className="italic text-gold-gradient">Paradise</span>
          </h2>
          <div className="section-divider mx-auto mt-8" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Globe */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex justify-center"
          >
            <GlobeCanvas />
          </motion.div>

          {/* Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h3 className="font-display text-2xl md:text-3xl text-sand font-light mb-4">
                South Ari Atoll, <span className="italic text-gold">Maldives</span>
              </h3>
              <p className="font-body text-base text-sand/60 leading-relaxed mb-10">
                Located in the pristine South Ari Atoll, Lumina Resorts sits on a private island
                surrounded by one of the Maldives' most vibrant coral reef systems. Accessible by
                a scenic speedboat journey from Malé, the transition from the modern world to
                paradise is part of the experience.
              </p>
            </motion.div>

            {/* Travel Info */}
            <div className="space-y-4 mb-10">
              {travelInfo.map((info, i) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
                  className="glass-card p-5 flex items-center gap-4"
                >
                  <div className="text-gold">{info.icon}</div>
                  <div>
                    <p className="font-body text-[10px] tracking-[0.15em] text-sand/40 uppercase">{info.label}</p>
                    <p className="font-body text-sm text-sand/80">{info.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Contact */}
            <div className="flex flex-col sm:flex-row gap-4">
              {contactInfo.map((info) => (
                <div key={info.value} className="flex items-center gap-2 text-sand/60">
                  <span className="text-gold">{info.icon}</span>
                  <span className="font-body text-sm">{info.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}