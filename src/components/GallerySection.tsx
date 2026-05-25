import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const galleryImages = [
  { src: 'https://images.pexels.com/photos/1483054/pexels-photo-1483054.jpeg?auto=compress&cs=tinysrgb&w=600', label: 'Overwater Villa', span: 'col-span-1 row-span-1' },
  { src: 'https://images.pexels.com/photos/1579373/pexels-photo-1579373.jpeg?auto=compress&cs=tinysrgb&w=600', label: 'Sunset View', span: 'col-span-1 row-span-2' },
  { src: 'https://images.pexels.com/photos/3225530/pexels-photo-3225530.jpeg?auto=compress&cs=tinysrgb&w=600', label: 'Beach Suite', span: 'col-span-1 row-span-1' },
  { src: 'https://images.pexels.com/photos/261394/pexels-photo-261394.jpeg?auto=compress&cs=tinysrgb&w=600', label: 'Pool Villa', span: 'col-span-1 row-span-1' },
  { src: 'https://images.pexels.com/photos/1457801/pexels-photo-1457801.jpeg?auto=compress&cs=tinysrgb&w=600', label: 'Royal Residence', span: 'col-span-1 row-span-2' },
  { src: 'https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=600', label: 'Ocean Panorama', span: 'col-span-1 row-span-1' },
  { src: 'https://images.pexels.com/photos/237272/pexels-photo-237272.jpeg?auto=compress&cs=tinysrgb&w=600', label: 'Spa Retreat', span: 'col-span-1 row-span-1' },
  { src: 'https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=600', label: 'Fine Dining', span: 'col-span-1 row-span-1' },
];

export default function GallerySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="gallery" className="relative py-32 md:py-44 bg-deep-navy overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-deep-navy via-dark-surface to-deep-navy" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="font-body text-[12px] tracking-[0.3em] text-gold uppercase mb-4">Visual Journey</p>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-sand font-light">
            Cinematic <span className="italic text-gold-gradient">Gallery</span>
          </h2>
          <div className="section-divider mx-auto mt-8" />
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[200px] md:auto-rows-[250px] gap-3 md:gap-4">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className={`relative rounded-xl overflow-hidden cursor-pointer group ${img.span}`}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={img.src}
                alt={img.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />

              {/* Overlay */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-deep-navy/80 via-deep-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />

              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <p className="font-serif text-lg text-sand italic">{img.label}</p>
              </div>

              {/* Glow border on hover */}
              <div
                className="absolute inset-0 rounded-xl pointer-events-none transition-all duration-500"
                style={{
                  boxShadow: hoveredIndex === i ? 'inset 0 0 0 2px rgba(212, 168, 83, 0.4), 0 0 20px rgba(212, 168, 83, 0.1)' : 'none',
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}