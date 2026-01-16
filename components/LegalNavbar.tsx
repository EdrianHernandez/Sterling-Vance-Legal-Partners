import React, { useState } from 'react';
import { Scale, Menu, X, Phone } from 'lucide-react';

export const LegalNavbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Practice Areas', href: '#practice-areas' },
    { name: 'Attorneys', href: '#attorneys' },
    { name: 'Insights', href: '#insights' },
    { name: 'Consultation', href: '#consultation' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md border-b border-slate-100">
      <div className="bg-navy-950 text-slate-300 text-xs py-2 px-6 hidden lg:block">
        <div className="container mx-auto flex justify-between items-center">
          <span>Serving Global Enterprises Since 1982</span>
          <div className="flex items-center gap-4">
            <a href="tel:+12125550199" className="hover:text-gold-500 transition-colors">
              +1 (212) 555-0199
            </a>
            <span className="text-slate-600">|</span>
            <a href="#client-portal" className="hover:text-gold-500 transition-colors">Client Portal Login</a>
          </div>
        </div>
      </div>

      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="bg-navy-900 p-2 rounded-sm group-hover:bg-gold-600 transition-colors duration-500">
              <Scale className="text-white w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-bold text-navy-900 leading-none tracking-tight">
                STERLING <span className="text-gold-600">&</span> VANCE
              </span>
              <span className="text-[0.65rem] uppercase tracking-[0.2em] text-slate-500 font-semibold mt-1">
                Legal Partners
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-semibold tracking-wide uppercase transition-all duration-300 pb-1 border-b-2 ${
                  link.name === 'Consultation'
                    ? 'border-gold-600 text-gold-700 hover:text-gold-800'
                    : 'border-transparent text-navy-900 hover:text-gold-600 hover:border-gold-600'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-navy-900 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-slate-100">
            <div className="flex flex-col gap-4 mt-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-navy-900 font-medium py-2 px-4 hover:bg-slate-50 border-l-4 border-transparent hover:border-gold-600 transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="flex items-center gap-2 px-4 text-gold-700 font-semibold mt-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+12125550199">+1 (212) 555-0199</a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};