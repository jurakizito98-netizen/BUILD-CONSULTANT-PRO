
import React from 'react';

const team = [
  { name: 'Dr. Sarah Jenkins', role: 'Chief Technical Officer', bio: '20+ years in structural engineering and building physics.', image: 'https://i.pravatar.cc/150?u=sarah' },
  { name: 'Mark Thompson', role: 'Head of Compliance', bio: 'Lead advisor for international building codes and fire safety.', image: 'https://i.pravatar.cc/150?u=mark' },
  { name: 'Elena Rodriguez', role: 'Senior Cost Engineer', bio: 'Specialist in value engineering for multi-billion dollar assets.', image: 'https://i.pravatar.cc/150?u=elena' },
];

const About: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
          <div className="relative">
             <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
             <img 
               src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800" 
               alt="Team meeting" 
               className="rounded-[2.5rem] shadow-2xl relative z-10"
             />
             <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-3xl shadow-xl z-20 hidden md:block max-w-xs">
               <p className="text-blue-600 font-bold text-4xl mb-2">15+</p>
               <p className="text-slate-800 font-bold mb-2">Technical Awards</p>
               <p className="text-slate-500 text-sm">Recognized globally for excellence in construction oversight.</p>
             </div>
          </div>
          
          <div>
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4">About Us</h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              Uncompromising Integrity in an Industry of Risks.
            </h3>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              BuildConsult Pro was founded on a single principle: providing project owners with the absolute truth. In a complex landscape of contractors and suppliers, we stand as your independent technical conscience.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex-shrink-0 flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Independence</h4>
                  <p className="text-sm text-slate-500">We hold no stakes in construction firms.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex-shrink-0 flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Precision</h4>
                  <p className="text-sm text-slate-500">Data-driven reporting you can bank on.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">The Experts Behind the Advice</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">Our senior leadership brings centuries of collective experience from the world's most challenging build sites.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl border border-slate-200 text-center hover:shadow-xl transition-all">
              <img src={member.image} alt={member.name} className="w-24 h-24 rounded-full mx-auto mb-6 border-4 border-blue-50" />
              <h4 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h4>
              <p className="text-blue-600 font-semibold text-sm mb-4">{member.role}</p>
              <p className="text-slate-500 text-sm leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
