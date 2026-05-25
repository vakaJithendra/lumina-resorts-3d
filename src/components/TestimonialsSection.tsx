import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay, Pagination } from 'swiper/modules';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '../data/testimonials';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="relative py-32 md:py-44 overflow-hidden" ref={ref}
      style={{ background: 'linear-gradient(180deg, #0B1D2E 0%, #0f2740 50%, #0B1D2E 100%)' }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="font-body text-[12px] tracking-[0.3em] text-gold uppercase mb-4">Testimonials</p>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-sand font-light">
            Guest <span className="italic text-gold-gradient">Voices</span>
          </h2>
          <div className="section-divider mx-auto mt-8" />
        </motion.div>

        {/* Swiper */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2,
              slideShadows: false,
            }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            modules={[EffectCoverflow, Autoplay, Pagination]}
            className="pb-16"
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.id} className="!w-[340px] md:!w-[420px]">
                <div className="glass-card p-8 md:p-10 h-full"
                  style={{ animation: `gentle-float ${4 + t.id * 0.5}s ease-in-out infinite` }}
                >
                  {/* Quote icon */}
                  <Quote className="w-8 h-8 text-gold/30 mb-6" />

                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="font-serif text-lg text-sand/80 italic leading-relaxed mb-8">
                    "{t.text}"
                  </p>

                  {/* Author */}
                  <div className="border-t border-sand/10 pt-6">
                    <p className="font-display text-base text-sand">{t.name}</p>
                    <p className="font-body text-[11px] tracking-wider text-gold/60 uppercase mt-1">
                      {t.location} · {t.villa}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}