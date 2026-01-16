import React, { useState } from 'react';
import { Lock, CheckCircle } from 'lucide-react';

export const ContactForm = () => {
  const [formStatus, setFormStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  return (
    <section id="consultation" className="py-24 bg-navy-900 relative">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto bg-white shadow-2xl overflow-hidden flex flex-col md:flex-row">
          
          {/* Left Side Info */}
          <div className="md:w-2/5 bg-navy-800 text-white p-10 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-serif font-bold mb-6">Case Evaluation</h3>
              <p className="text-slate-300 leading-relaxed mb-8 text-sm">
                Confidentiality is our priority. Submit your inquiry via this secure channel, and a senior partner will review your matter personally within 24 hours.
              </p>
              
              <div className="space-y-4">
                <div className="border-l-2 border-gold-600 pl-4">
                  <p className="text-xs text-slate-400 uppercase tracking-wide">Emergency Counsel</p>
                  <p className="font-semibold text-lg">+1 (212) 555-0199</p>
                </div>
                <div className="border-l-2 border-gold-600 pl-4">
                  <p className="text-xs text-slate-400 uppercase tracking-wide">General Inquiries</p>
                  <p className="font-semibold">inquiries@sterlingvance.com</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 flex items-center gap-2 text-gold-500 text-xs font-semibold uppercase tracking-wider">
              <Lock className="w-4 h-4" />
              <span>256-Bit SSL Encrypted</span>
            </div>
          </div>

          {/* Right Side Form */}
          <div className="md:w-3/5 p-10 bg-white">
            {formStatus === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-navy-900 mb-2">Inquiry Received</h3>
                <p className="text-slate-600 mb-6">
                  Thank you for contacting Sterling & Vance. Your inquiry has been securely routed to our intake team.
                </p>
                <button 
                  onClick={() => setFormStatus('idle')}
                  className="text-gold-600 font-bold hover:underline"
                >
                  Submit another inquiry
                </button>
              </div>
            ) : (
              <form className="inquiry-form space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-bold text-navy-900 mb-2">First Name</label>
                    <input 
                      type="text" 
                      id="firstName"
                      required
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-300 focus:border-gold-600 focus:ring-0 outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-bold text-navy-900 mb-2">Last Name</label>
                    <input 
                      type="text" 
                      id="lastName"
                      required
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-300 focus:border-gold-600 focus:ring-0 outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-navy-900 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email"
                    required
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-300 focus:border-gold-600 focus:ring-0 outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="practice" className="block text-sm font-bold text-navy-900 mb-2">Legal Matter Type</label>
                  <select 
                    id="practice"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-300 focus:border-gold-600 focus:ring-0 outline-none transition-colors text-slate-700"
                  >
                    <option>Corporate Governance</option>
                    <option>Mergers & Acquisitions</option>
                    <option>Litigation</option>
                    <option>Intellectual Property</option>
                    <option>Real Estate</option>
                    <option>Other / Unsure</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-navy-900 mb-2">Brief Description</label>
                  <textarea 
                    id="message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-300 focus:border-gold-600 focus:ring-0 outline-none transition-colors resize-none"
                    placeholder="Please minimize sensitive details in this initial message."
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button 
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className={`w-full bg-gold-600 text-white font-bold py-4 uppercase tracking-wider hover:bg-gold-700 transition-colors duration-300 shadow-md ${formStatus === 'submitting' ? 'opacity-75 cursor-not-allowed' : ''}`}
                  >
                    {formStatus === 'submitting' ? 'Processing...' : 'Request Confidential Consultation'}
                  </button>
                  <p className="text-center text-xs text-slate-400 mt-4">
                    By submitting this form, you acknowledge that no attorney-client relationship is formed until a signed agreement is in place.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
