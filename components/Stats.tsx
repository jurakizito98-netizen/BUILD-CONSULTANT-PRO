
import React from 'react';

const stats = [
  { value: "450+", label: "Audits Completed", icon: "🏢", detail: "Multi-sector diversity" },
  { value: "12", label: "Global Offices", icon: "🌍", detail: "Primary markets focus" },
  { value: "100%", label: "Zero-Incident Rate", icon: "🛡️", detail: "Safety first culture" },
  { value: "$4.2B", label: "Capital Supervised", icon: "💰", detail: "Asset value auditing" }
];

const Stats: React.FC = () => {
  return (
    <section className="relative z-10 -mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {stats.map((stat, idx) => (
          <div 
            key={idx} 
            className="group bg-white/90 backdrop-blur-2xl p-10 rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100/50 hover:border-blue-600 transition-all duration-500 hover:-translate-y-4"
          >
            <div className="flex justify-between items-start mb-8">
              <div className="text-4xl filter grayscale group-hover:grayscale-0 transition-all group-hover:scale-125 duration-500">{stat.icon}</div>
              <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                 <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </div>
            </div>
            <div className="text-5xl font-black text-slate-900 mb-2 tracking-tighter tabular-nums">{stat.value}</div>
            <div className="text-slate-900 font-black uppercase tracking-widest text-[11px] mb-4">
              {stat.label}
            </div>
            <div className="h-[1px] w-full bg-slate-100 mb-4 group-hover:bg-blue-600 transition-colors duration-500"></div>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{stat.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
