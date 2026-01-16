import React from 'react';
import { LegalNavbar } from './components/LegalNavbar';
import { PracticeAreaGrid } from './components/PracticeAreaGrid';
import { AttorneyProfiles } from './components/AttorneyProfiles';
import { ContactForm } from './components/ContactForm';
import { Shield, Award, Clock } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800">
      <LegalNavbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-navy-900 text-white py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 to-navy-900/80 z-0"></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl">
              <div className="w-20 h-1 bg-gold-500 mb-6"></div>
              <h1 className="text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">
                Protecting Your Legacy, <br />
                <span className="text-gold-500 italic">Advancing Your Future.</span>
              </h1>
              <p className="text-lg lg:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
                Sterling & Vance provides elite legal counsel for multinational corporations, 
                emerging enterprises, and private clients. We define the standard for 
                corporate integrity and strategic litigation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#consultation" className="bg-gold-600 hover:bg-gold-700 text-white px-8 py-4 text-center font-semibold tracking-wide transition-colors duration-300 shadow-lg">
                  Request Consultation
                </a>
                <a href="#practice-areas" className="border border-slate-400 hover:border-white text-white px-8 py-4 text-center font-semibold tracking-wide transition-colors duration-300">
                  Our Expertise
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="bg-slate-100 border-b border-slate-200 py-12">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-center gap-4 p-4">
                <Shield className="w-10 h-10 text-gold-600" />
                <div>
                  <h3 className="font-serif text-lg font-bold text-navy-900">Uncompromising Integrity</h3>
                  <p className="text-sm text-slate-600">Adhering to the highest ethical standards in every case.</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4">
                <Award className="w-10 h-10 text-gold-600" />
                <div>
                  <h3 className="font-serif text-lg font-bold text-navy-900">Global Recognition</h3>
                  <p className="text-sm text-slate-600">Ranked Top Tier in Corporate Law by Legal 500.</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4">
                <Clock className="w-10 h-10 text-gold-600" />
                <div>
                  <h3 className="font-serif text-lg font-bold text-navy-900">Decades of Experience</h3>
                  <p className="text-sm text-slate-600">Over 40 years of dedicated service to industry leaders.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <PracticeAreaGrid />
        
        <AttorneyProfiles />
        
        <ContactForm />

      </main>

      <footer className="bg-navy-950 text-slate-400 py-16 border-t-4 border-gold-600">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-serif text-white mb-6">STERLING <span className="text-gold-500">&</span> VANCE</h2>
            <p className="mb-6 max-w-sm leading-relaxed">
              We provide sophisticated legal solutions for complex business challenges. 
              Our commitment to excellence is unwavering, our results proven.
            </p>
            <p className="text-sm">© {new Date().getFullYear()} Sterling & Vance Legal Partners. All rights reserved.</p>
          </div>
          
          <div>
            <h3 className="text-white font-serif font-semibold mb-4 tracking-wider uppercase text-sm">Offices</h3>
            <ul className="space-y-2">
              <li>New York, NY</li>
              <li>London, UK</li>
              <li>Geneva, CH</li>
              <li>Singapore, SG</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-serif font-semibold mb-4 tracking-wider uppercase text-sm">Contact</h3>
            <ul className="space-y-2">
              <li>+1 (212) 555-0199</li>
              <li>inquiries@sterlingvance.com</li>
              <li>100 Wall Street, Suite 2400<br/>New York, NY 10005</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;