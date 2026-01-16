import React from 'react';
import { Briefcase, Gavel, Scale, Globe, Building2, FileText, Landmark, Users } from 'lucide-react';

const practices = [
  {
    title: "Corporate Law",
    description: "Structuring complex mergers, acquisitions, and corporate governance for multinational entities.",
    icon: <Building2 className="w-8 h-8" />,
  },
  {
    title: "Litigation & Dispute",
    description: "High-stakes commercial litigation and arbitration representation across federal and state courts.",
    icon: <Gavel className="w-8 h-8" />,
  },
  {
    title: "Intellectual Property",
    description: "Strategic protection and enforcement of patents, trademarks, and copyrights globally.",
    icon: <FileText className="w-8 h-8" />,
  },
  {
    title: "International Trade",
    description: "Navigating cross-border regulations, sanctions, and trade compliance for global commerce.",
    icon: <Globe className="w-8 h-8" />,
  },
  {
    title: "Banking & Finance",
    description: "Advising on capital markets, secured lending, and regulatory compliance for financial institutions.",
    icon: <Landmark className="w-8 h-8" />,
  },
  {
    title: "Labor & Employment",
    description: "Executive compensation, workforce restructuring, and defense against employment claims.",
    icon: <Users className="w-8 h-8" />,
  },
];

export const PracticeAreaGrid = () => {
  return (
    <section id="practice-areas" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-gold-600 font-bold tracking-widest uppercase text-sm">Expertise</span>
          <h2 className="text-4xl font-serif font-bold text-navy-900 mt-3 mb-6">Our Practice Areas</h2>
          <div className="w-16 h-1 bg-gold-500 mx-auto mb-6"></div>
          <p className="text-slate-600 text-lg leading-relaxed">
            We offer comprehensive legal counsel across a broad spectrum of industries, delivering strategic solutions tailored to the unique objectives of our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practices.map((practice, index) => (
            <div 
              key={index} 
              className="practice-card group relative bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 border-t-4 border-t-navy-900 hover:border-t-gold-600"
            >
              <div className="mb-6 text-navy-800 group-hover:text-gold-600 transition-colors duration-300">
                {practice.icon}
              </div>
              <h3 className="text-xl font-serif font-bold text-navy-900 mb-3 group-hover:text-gold-600 transition-colors">
                {practice.title}
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                {practice.description}
              </p>
              <a href="#" className="inline-flex items-center text-sm font-bold text-navy-900 uppercase tracking-wide group-hover:text-gold-600 transition-colors">
                Learn More 
                <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
