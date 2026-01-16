import React from 'react';

const attorneys = [
  {
    id: 1,
    name: "Eleanor Sterling, Esq.",
    role: "Founding Partner",
    specialty: "Corporate Mergers & Acquisitions",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    bio: "With over 35 years of experience, Eleanor has orchestrated some of the decade's most significant international mergers. She serves on the boards of three Fortune 500 companies."
  },
  {
    id: 2,
    name: "Arthur Vance, J.D.",
    role: "Managing Partner",
    specialty: "Commercial Litigation",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    bio: "A formidable litigator known for his strategic acumen in high-stakes disputes. Arthur has successfully defended clients in class-action suits totaling over $4 billion in liabilities."
  },
  {
    id: 3,
    name: "Dr. Sarah Chen",
    role: "Senior Partner",
    specialty: "Intellectual Property",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    bio: "Holding a Ph.D. in Biotechnology along with her law degree, Dr. Chen leads the firm's IP division, specializing in pharmaceutical patents and trade secret protection."
  },
  {
    id: 4,
    name: "James Thorne",
    role: "Partner",
    specialty: "Real Estate & Land Use",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    bio: "James advises major developers and REITs on complex acquisitions, zoning, and development projects across the metropolitan seaboard."
  }
];

export const AttorneyProfiles = () => {
  return (
    <section id="attorneys" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <span className="text-gold-600 font-bold tracking-widest uppercase text-sm">Our Team</span>
            <h2 className="text-4xl font-serif font-bold text-navy-900 mt-3">Distinguished Counsel</h2>
            <div className="w-16 h-1 bg-gold-500 mt-6 mb-4"></div>
            <p className="text-slate-600 text-lg">
              Our attorneys are recognized leaders in their fields, bringing intellectual rigor and strategic vision to every client engagement.
            </p>
          </div>
          <div className="hidden md:block">
            <a href="#" className="text-navy-900 font-bold border-b-2 border-gold-600 hover:text-gold-600 transition-colors pb-1">
              View All 42 Attorneys
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {attorneys.map((attorney) => (
            <div key={attorney.id} className="bio-item group bg-white shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={attorney.image} 
                  alt={attorney.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-navy-900 to-transparent p-6 pt-20">
                  <p className="text-gold-400 text-xs font-bold uppercase tracking-wider mb-1">{attorney.specialty}</p>
                  <h3 className="text-white text-xl font-serif font-bold">{attorney.name}</h3>
                  <p className="text-slate-300 text-sm">{attorney.role}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-slate-600 text-sm leading-relaxed line-clamp-4">
                  {attorney.bio}
                </p>
                <div className="mt-4 pt-4 border-t border-slate-100 flex justify-between items-center">
                  <span className="text-xs font-bold text-navy-900 cursor-pointer hover:text-gold-600">View Full Profile</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 md:hidden text-center">
          <a href="#" className="text-navy-900 font-bold border-b-2 border-gold-600 hover:text-gold-600 transition-colors pb-1">
            View All 42 Attorneys
          </a>
        </div>
      </div>
    </section>
  );
};
