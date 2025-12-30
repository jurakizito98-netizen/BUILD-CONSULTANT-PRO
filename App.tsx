
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Process from './components/Process';
import Stats from './components/Stats';
import Footer from './components/Footer';
import AIAdvisorPage from './components/AIAdvisorPage';

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'ai'>('home');

  const showAI = () => setView('ai');
  const showHome = () => setView('home');

  if (view === 'ai') {
    return <AIAdvisorPage onClose={showHome} />;
  }

  return (
    <div className="relative min-h-screen bg-white font-sans selection:bg-blue-600 selection:text-white animate-in fade-in duration-700">
      
      {/* Premium Ticker */}
      <div className="bg-slate-950 text-white py-2 overflow-hidden border-b border-white/5 relative z-[60]">
        <div className="flex animate-marquee whitespace-nowrap gap-12 text-[9px] font-black uppercase tracking-[0.3em]">
          <span>• LIVE MARKET AUDIT: SYDNEY METRO STATUS: COMPLIANT</span>
          <span>• NEW REGULATORY UPDATE: NCC 2022 AMENDMENT ADOPTED</span>
          <span>• COMMERICAL SECTOR PIPELINE: +14.2% GROWTH</span>
          <span>• SAFETY RECORD: 2,400 DAYS LTI FREE</span>
          <span>• LIVE MARKET AUDIT: SYDNEY METRO STATUS: COMPLIANT</span>
          <span>• NEW REGULATORY UPDATE: NCC 2022 AMENDMENT ADOPTED</span>
          <span>• COMMERICAL SECTOR PIPELINE: +14.2% GROWTH</span>
          <span>• SAFETY RECORD: 2,400 DAYS LTI FREE</span>
        </div>
      </div>

      <Navbar onOpenChat={showAI} />
      
      <main>
        <div id="home">
          <Hero onOpenChat={showAI} />
        </div>
        
        <Stats />
        
        <div id="services">
          <Services onOpenChat={showAI} />
        </div>
        
        <div id="process">
          <Process />
        </div>
        
        <div id="projects">
          <Projects />
        </div>
        
        <div id="about">
          <About />
        </div>
        
        <div id="contact">
          <Contact />
        </div>
      </main>

      <Footer />

      {/* Persistent AI Trigger */}
      <button 
        onClick={showAI}
        className="fixed bottom-10 right-10 z-40 bg-slate-900 text-white p-5 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:scale-110 active:scale-95 transition-all group border border-white/10"
      >
        <div className="flex items-center gap-4">
          <div className="relative">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/></svg>
            <span className="absolute top-0 right-0 w-3 h-3 bg-blue-500 rounded-full border-2 border-slate-900 animate-pulse"></span>
          </div>
          <span className="hidden md:block font-black px-1 text-xs uppercase tracking-widest">Technical Advisor</span>
        </div>
      </button>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}} />
    </div>
  );
};

export default App;
