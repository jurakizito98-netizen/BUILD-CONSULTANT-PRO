
import React from 'react';

const services = [
  {
    title: "Technical Feasibility",
    desc: "Rigorous site analysis, structural viability checks, and planning approval roadmaps before you commit.",
    points: ["Site Investigation", "DA/CC Management", "Environmental Impact"],
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
  },
  {
    title: "Value Engineering",
    desc: "We analyze design specs to find cost efficiencies without sacrificing quality or structural integrity.",
    points: ["Cost Audit", "Procurement Optimization", "Material Sourcing"],
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
  },
  {
    title: "Independent PMC",
    desc: "Acting as the owner's representative to manage contractors and ensure milestone delivery.",
    points: ["Stakeholder Management", "Critical Path Tracking", "Dispute Resolution"],
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M8 7v10"/><path d="M12 7v10"/><path d="M16 7v10"/></svg>
  },
  {
    title: "Quality Assurance",
    desc: "On-site structural audits and workmanship monitoring to prevent future defects.",
    points: ["Concrete Testing", "Waterproofing Audits", "Finishing Standards"],
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/><path d="M11 8v6"/><path d="M8 11h6"/></svg>
  },
  {
    title: "Forensic Engineering",
    desc: "Independent investigation into existing defects, structural failures, and remediation planning.",
    points: ["Structural Failure Analysis", "Expert Witness", "Rectification Mapping"],
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>
  },
  {
    title: "Statutory Compliance",
    desc: "Full alignment with building codes, fire safety, accessibility, and EHS regulations.",
    points: ["BCA/NCC Compliance", "Fire Safety Audits", "Access Consultancy"],
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>
  }
];

interface ServicesProps {
  onOpenChat: () => void;
}

const Services: React.FC<ServicesProps> = ({ onOpenChat }) => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4">Service Excellence</h2>
          <p className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-6">Unrivaled Technical Capability</p>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
            We provide specialized knowledge across every vertical of the construction lifecycle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="group p-10 bg-white rounded-[2rem] border border-slate-200 hover:border-blue-300 transition-all hover:shadow-2xl hover:shadow-blue-500/5 flex flex-col h-full"
            >
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-8 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-8 flex-grow">{service.desc}</p>
              
              <div className="pt-8 border-t border-slate-100">
                <ul className="space-y-3">
                  {service.points.map((p, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-slate-500 font-medium">
                      <div className="w-1 h-1 bg-blue-600 rounded-full"></div>
                      {p}
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={onOpenChat}
                  className="mt-8 flex items-center gap-2 text-blue-600 font-bold hover:gap-3 transition-all"
                >
                  Request Technical Brief
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
