import { motion } from 'framer-motion';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const footerLinks = {
  'Resort': ['Our Story', 'Sustainability', 'Careers', 'Press'],
  'Experience': ['Spa & Wellness', 'Dining', 'Activities', 'Events'],
  'Villas': ['Ocean Villa', 'Sunset Villa', 'Pool Villa', 'Royal Residence'],
  'Connect': ['Contact Us', 'FAQs', 'Gift Vouchers', 'Privacy Policy'],
};

const socialLinks = [
  { icon: <Instagram className="w-5 h-5" />, label: 'Instagram' },
  { icon: <Facebook className="w-5 h-5" />, label: 'Facebook' },
  { icon: <Twitter className="w-5 h-5" />, label: 'Twitter' },
];

export default function Footer() {
  return (
    <footer className="relative py-20 md:py-28 overflow-hidden" style={{ background: '#060d18' }}>
      {/* Top border gradient */}
      <div className="absolute top-0 left-0 right-0 h-[1px]"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(212,168,83,0.3), transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Newsletter */}
        <div className="text-center mb-16 pb-16 border-b border-sand/5">
          <h3 className="font-display text-2xl md:text-3xl text-sand font-light mb-3">
            Stay in the <span className="italic text-gold">Light</span>
          </h3>
          <p className="font-body text-sm text-sand/40 mb-8">
            Subscribe for exclusive offers and stories from paradise
          </p>
          <div className="flex max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 bg-white/5 border border-sand/10 rounded-l-lg font-body text-sm text-sand placeholder-sand/30 focus:outline-none focus:border-gold/30"
            />
            <button className="px-6 py-3 bg-gold text-deep-navy font-body text-[11px] tracking-[0.15em] uppercase rounded-r-lg hover:bg-sand transition-colors">
              Subscribe
            </button>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-body text-[11px] tracking-[0.2em] text-gold uppercase mb-4">
                {category}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="font-body text-sm text-sand/40 hover:text-sand/80 transition-colors duration-300">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-sand/5">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <span className="font-display text-xl tracking-[0.2em] text-sand/60 font-light">LUMINA</span>
            <span className="font-body text-[8px] tracking-[0.3em] text-gold/40 uppercase">Resorts</span>
          </div>

          {/* Social */}
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href="#"
                className="w-10 h-10 rounded-full border border-sand/10 flex items-center justify-center text-sand/40 hover:text-gold hover:border-gold/30 transition-all duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="font-body text-[11px] text-sand/30">
            © 2024 Lumina Resorts. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}