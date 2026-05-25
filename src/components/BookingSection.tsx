import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Calendar, Users, ChevronDown, Sparkles } from 'lucide-react';

const villaOptions = [
  'Ocean Villa — $1,200/night',
  'Sunset Villa — $1,800/night',
  'Private Pool Villa — $2,400/night',
  'Royal Beach Residence — $5,200/night',
];

export default function BookingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [selectedVilla, setSelectedVilla] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section id="booking" className="relative py-32 md:py-44 overflow-hidden" ref={ref}
      style={{ background: 'linear-gradient(180deg, #FAF8F4 0%, #F5EDD8 50%, #FAF8F4 100%)' }}
    >
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, #1A4E6B 1px, transparent 0)',
        backgroundSize: '48px 48px',
      }} />

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-body text-[12px] tracking-[0.3em] text-gold uppercase mb-4">Reservations</p>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-deep-navy font-light">
            Book Your <span className="italic text-ocean">Escape</span>
          </h2>
          <p className="font-serif text-xl text-deep-navy/50 italic mt-6">
            Begin your journey to paradise
          </p>
          <div className="section-divider mx-auto mt-8" />
        </motion.div>

        {/* Booking Form */}
        <motion.form
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="glass-card-light p-8 md:p-12 shadow-xl"
        >
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* First Name */}
            <div>
              <label className="block font-body text-[11px] tracking-[0.15em] text-deep-navy/50 uppercase mb-2">
                First Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-white/60 border border-gold/20 rounded-lg font-body text-deep-navy placeholder-deep-navy/30 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/20 transition-all"
                placeholder="Your first name"
              />
            </div>

            {/* Last Name */}
            <div>
              <label className="block font-body text-[11px] tracking-[0.15em] text-deep-navy/50 uppercase mb-2">
                Last Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-white/60 border border-gold/20 rounded-lg font-body text-deep-navy placeholder-deep-navy/30 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/20 transition-all"
                placeholder="Your last name"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Email */}
            <div>
              <label className="block font-body text-[11px] tracking-[0.15em] text-deep-navy/50 uppercase mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 bg-white/60 border border-gold/20 rounded-lg font-body text-deep-navy placeholder-deep-navy/30 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/20 transition-all"
                placeholder="your@email.com"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block font-body text-[11px] tracking-[0.15em] text-deep-navy/50 uppercase mb-2">
                Phone
              </label>
              <input
                type="tel"
                className="w-full px-4 py-3 bg-white/60 border border-gold/20 rounded-lg font-body text-deep-navy placeholder-deep-navy/30 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/20 transition-all"
                placeholder="+1 (555) 000-0000"
              />
            </div>
          </div>

          {/* Villa Selector */}
          <div className="mb-6">
            <label className="block font-body text-[11px] tracking-[0.15em] text-deep-navy/50 uppercase mb-2">
              Select Villa
            </label>
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full px-4 py-3 bg-white/60 border border-gold/20 rounded-lg font-body text-deep-navy text-left flex items-center justify-between hover:border-gold/40 transition-colors"
              >
                <span className={selectedVilla ? '' : 'text-deep-navy/30'}>
                  {selectedVilla || 'Choose your villa'}
                </span>
                <ChevronDown className={`w-4 h-4 text-gold transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {isDropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gold/20 rounded-lg shadow-xl overflow-hidden z-10">
                  {villaOptions.map((villa) => (
                    <button
                      key={villa}
                      type="button"
                      onClick={() => {
                        setSelectedVilla(villa);
                        setIsDropdownOpen(false);
                      }}
                      className="w-full px-4 py-3 text-left font-body text-sm text-deep-navy hover:bg-gold/10 transition-colors"
                    >
                      {villa}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* Check-in */}
            <div>
              <label className="block font-body text-[11px] tracking-[0.15em] text-deep-navy/50 uppercase mb-2">
                <Calendar className="w-3 h-3 inline mr-1" /> Check-in
              </label>
              <input
                type="date"
                className="w-full px-4 py-3 bg-white/60 border border-gold/20 rounded-lg font-body text-deep-navy focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/20 transition-all"
              />
            </div>

            {/* Check-out */}
            <div>
              <label className="block font-body text-[11px] tracking-[0.15em] text-deep-navy/50 uppercase mb-2">
                <Calendar className="w-3 h-3 inline mr-1" /> Check-out
              </label>
              <input
                type="date"
                className="w-full px-4 py-3 bg-white/60 border border-gold/20 rounded-lg font-body text-deep-navy focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/20 transition-all"
              />
            </div>

            {/* Guests */}
            <div>
              <label className="block font-body text-[11px] tracking-[0.15em] text-deep-navy/50 uppercase mb-2">
                <Users className="w-3 h-3 inline mr-1" /> Guests
              </label>
              <select className="w-full px-4 py-3 bg-white/60 border border-gold/20 rounded-lg font-body text-deep-navy focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/20 transition-all">
                <option>1 Guest</option>
                <option>2 Guests</option>
                <option>3 Guests</option>
                <option>4 Guests</option>
                <option>5+ Guests</option>
              </select>
            </div>
          </div>

          {/* Special Requests */}
          <div className="mb-8">
            <label className="block font-body text-[11px] tracking-[0.15em] text-deep-navy/50 uppercase mb-2">
              Special Requests
            </label>
            <textarea
              rows={3}
              className="w-full px-4 py-3 bg-white/60 border border-gold/20 rounded-lg font-body text-deep-navy placeholder-deep-navy/30 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/20 transition-all resize-none"
              placeholder="Any special requests or celebrations..."
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-4 bg-gradient-to-r from-gold to-amber-600 text-deep-navy font-body text-[13px] tracking-[0.2em] uppercase rounded-lg hover:shadow-[0_0_40px_rgba(212,168,83,0.4)] transition-all duration-500 relative overflow-hidden"
          >
            {isSubmitted ? (
              <span className="flex items-center justify-center gap-2">
                <Sparkles className="w-4 h-4" />
                Request Sent Successfully
              </span>
            ) : (
              'Request Reservation'
            )}
          </button>

          <p className="text-center font-body text-[11px] text-deep-navy/40 mt-4">
            Our concierge team will respond within 24 hours
          </p>
        </motion.form>
      </div>
    </section>
  );
}