
import React from 'react';

const steps = [
  { id: '01', title: 'Audit & Analysis', desc: 'Comprehensive site survey and technical documentation review to establish current baselines.' },
  { id: '02', title: 'Strategy Formulation', desc: 'Value engineering and risk management planning designed specifically for project objectives.' },
  { id: '03', title: 'Tender Management', desc: 'Independent vetting of contractors and materials to ensure technical spec compliance.' },
  { id: '04', title: 'On-Site Oversight', desc: 'Senior engineers stationed on-site for real-time quality assurance and progress monitoring.' },
  { id: '05', title: 'Certification', desc: 'Final occupancy audits, defects rectification management, and official project handover.' }
];

const Process: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/3">
            <h2 className="text-sm font-bold text-blue-500 uppercase tracking-widest mb-4">Methodology</h2>
            <h3 className="text-4xl font-bold text-white mb-8 leading-tight">The BuildConsult <br/>Technical Framework</h3>
            <p className="text-slate-400 text-lg leading-relaxed mb-10">
              We don't just "check" work. We engineer outcomes through a strict 5-phase framework that has been perfected over 100+ major developments.
            </p>
            <div className="p-8 bg-blue-600/10 border border-blue-500/20 rounded-3xl">
              <p className="text-blue-400 font-bold text-lg mb-2">Proven Track Record</p>
              <p className="text-slate-300 text-sm">Our methodology has successfully mitigated over $200M in construction risks since 2015.</p>
            </div>
          </div>
          
          <div className="lg:w-2/3">
            <div className="space-y-12">
              {steps.map((step, idx) => (
                <div key={idx} className="relative pl-24 group">
                  {/* Vertical Line */}
                  {idx !== steps.length - 1 && (
                    <div className="absolute left-[39px] top-16 bottom-[-48px] w-0.5 bg-gradient-to-b from-blue-600 to-transparent"></div>
                  )}
                  
                  {/* Circle Indicator */}
                  <div className="absolute left-0 top-0 w-20 h-20 bg-slate-800 border-2 border-slate-700 rounded-full flex items-center justify-center text-white text-2xl font-black group-hover:border-blue-500 group-hover:bg-blue-600 transition-all duration-300 shadow-xl">
                    {step.id}
                  </div>
                  
                  <div className="pt-4">
                    <h4 className="text-2xl font-bold text-white mb-3">{step.title}</h4>
                    <p className="text-slate-400 leading-relaxed max-w-xl">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
