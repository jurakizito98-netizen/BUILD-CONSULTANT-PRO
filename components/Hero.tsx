
import React from 'react';

interface HeroProps {
  onOpenChat: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenChat }) => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-52 lg:pb-40 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 -z-10 w-2/3 h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-50/80 via-transparent to-transparent opacity-60"></div>
      <div className="absolute left-0 top-1/4 -z-10 w-64 h-64 bg-blue-100/30 rounded-full blur-[120px] animate-pulse"></div>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-slate-900 text-white text-[10px] font-black uppercase tracking-[0.2em] mb-10 shadow-2xl shadow-slate-200">
            <span className="flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Institutional Standard Oversight
          </div>
          
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-slate-900 leading-[0.95] mb-10 tracking-tighter">
            Engineering <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-900 italic">Certainty.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 mb-14 leading-relaxed max-w-2xl font-medium border-l-4 border-blue-600 pl-8">
            Global leaders in independent technical auditing. We provide the forensic precision required for high-stakes infrastructure and landmark developments.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <button 
              onClick={onOpenChat}
              className="group bg-blue-600 hover:bg-slate-900 text-white px-12 py-6 rounded-[2rem] font-black text-lg transition-all flex items-center justify-center gap-4 shadow-2xl shadow-blue-500/20 active:scale-95"
            >
              Consult AI Advisor
              <svg className="group-hover:translate-x-2 transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </button>
            <a 
              href="#services"
              onClick={(e) => scrollToSection(e, 'services')}
              className="group bg-white border-2 border-slate-100 hover:border-blue-600 px-12 py-6 rounded-[2rem] font-black text-lg transition-all text-slate-900 text-center flex items-center justify-center gap-3 shadow-xl hover:shadow-blue-500/5"
            >
              Capability Matrix
              <svg className="opacity-40 group-hover:opacity-100 transition-opacity" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 13l5 5 5-5M7 6l5 5 5-5"/></svg>
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 relative lg:mt-0 mt-20">
          {/* Main Visual Frame */}
          <div className="relative z-10 p-4 bg-white rounded-[4rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border border-slate-100 group">
             <div className="overflow-hidden rounded-[3.2rem]">
                <img 
                   src="https://images.unsplash.com/photo-1503387762-592dea58ef23?auto=format&fit=crop&q=80&w=1200" 
                   className="w-full h-auto aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-1000" 
                   alt="Modern Architectural Engineering" 
                />
             </div>
             
             {/* Rich Data Cards (Floating) */}
             <div className="absolute -top-8 -right-8 bg-white/95 backdrop-blur-xl p-6 rounded-[2.5rem] shadow-2xl border border-white animate-bounce-slow">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse"></div>
                  <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Active Site Audit</span>
                </div>
                <p className="text-3xl font-black text-slate-900 leading-none tabular-nums">98.2%</p>
                <p className="text-[10px] text-slate-400 font-bold uppercase mt-2">Compliance Rating</p>
             </div>

             <div className="absolute bottom-12 -left-12 bg-slate-900/95 backdrop-blur-xl p-6 rounded-[2.5rem] shadow-2xl border border-white/10 max-w-[200px] animate-float">
                <div className="flex items-center gap-3 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>
                  <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest">Risk Index</span>
                </div>
                <p className="text-2xl font-black text-white leading-none">Negligible</p>
                <p className="text-[10px] text-slate-500 font-bold uppercase mt-2">Safety Performance</p>
             </div>

             <div className="absolute top-1/2 -right-16 bg-blue-600 p-6 rounded-[2.5rem] shadow-2xl shadow-blue-500/30 text-white animate-float-delayed">
                <p className="text-3xl font-black leading-none mb-1">-$2.4M</p>
                <p className="text-[10px] font-bold uppercase opacity-80 tracking-widest">Value Eng. Save</p>
             </div>
          </div>
          
          {/* Decorative background blobs */}
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-blue-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
          <div className="absolute -top-20 -left-20 w-80 h-80 bg-indigo-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
