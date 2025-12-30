
import React, { useState, useRef, useEffect } from 'react';
import { getConsultationResponse } from '../services/geminiService';
import { Message } from '../types';

interface AIAdvisorPageProps {
  onClose: () => void;
}

const starters = [
  "Standard feasibility study process?",
  "Structural cost reduction strategies?",
  "Fire safety compliance standards?",
  "Defect remediation workflows?",
  "Owner representation value props?"
];

const standards = [
  { code: "AS 3600", desc: "Concrete Structures Code" },
  { code: "NCC 2022", desc: "National Construction Code" },
  { code: "ISO 9001", desc: "Quality Management" },
  { code: "BCA Part D", desc: "Access and Egress Standards" }
];

const AIAdvisorPage: React.FC<AIAdvisorPageProps> = ({ onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'BuildConsult AI Portal initialized. System status: All technical databases active. I am ready to perform multi-factor risk analysis, cost engineering audits, or regulatory compliance mapping. How shall we proceed with your project brief?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async (customInput?: string) => {
    const textToSend = customInput || input;
    if (!textToSend.trim() || isLoading) return;

    const userMsg: Message = { role: 'user', text: textToSend };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const responseText = await getConsultationResponse(textToSend, messages);
    
    setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed inset-0 z-[100] bg-slate-950 flex flex-col animate-in fade-in zoom-in-95 duration-700">
      {/* HUD Style Header */}
      <header className="px-8 py-6 border-b border-white/5 flex justify-between items-center bg-slate-900/40 backdrop-blur-3xl relative overflow-hidden">
        <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30"></div>
        
        <div className="flex items-center gap-6">
          <div className="relative">
            <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(37,99,235,0.4)]">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 16v5"/><path d="M8 20v1"/><path d="M16 20v1"/><path d="M12 3v13"/><path d="M7 3h10"/><path d="M12 7v4"/><path d="M8 7v4"/><path d="M16 7v4"/></svg>
            </div>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-slate-950 rounded-full"></div>
          </div>
          <div>
            <h1 className="text-2xl font-black text-white tracking-tighter">TECHNICAL ADVISOR <span className="text-blue-500">PRIME</span></h1>
            <div className="flex items-center gap-4 mt-1">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                <p className="text-[9px] text-slate-400 font-black uppercase tracking-[0.3em]">Quantum Engine v4.0</p>
              </div>
              <div className="w-[1px] h-3 bg-white/10"></div>
              <p className="text-[9px] text-blue-400 font-black uppercase tracking-[0.3em]">Encrypted Session</p>
            </div>
          </div>
        </div>

        <button 
          onClick={onClose}
          className="group flex items-center gap-3 px-6 py-3 bg-white/5 hover:bg-red-500/10 rounded-2xl transition-all border border-white/10 hover:border-red-500/30 text-white font-bold text-xs uppercase tracking-widest"
        >
          <svg className="group-hover:-translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          Terminate Session
        </button>
      </header>

      {/* Control Center Layout */}
      <div className="flex-1 flex overflow-hidden w-full">
        {/* Left Stats Sidebar (Desktop) */}
        <aside className="hidden xl:flex w-80 border-r border-white/5 flex-col p-8 space-y-12 overflow-y-auto">
          <div>
            <h4 className="text-[10px] font-black text-blue-500 uppercase tracking-[0.4em] mb-8">System Standards</h4>
            <div className="space-y-4">
              {standards.map(std => (
                <div key={std.code} className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-blue-500/30 transition-all group">
                  <p className="text-white font-black text-xs mb-1 group-hover:text-blue-400 transition-colors">{std.code}</p>
                  <p className="text-[10px] text-slate-500 font-bold uppercase">{std.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-[2rem] bg-gradient-to-br from-blue-600/10 to-transparent border border-blue-500/20">
            <h4 className="text-blue-400 font-black text-[10px] uppercase tracking-widest mb-4">Risk Aggregator</h4>
            <div className="space-y-4">
              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-blue-600 w-4/5"></div>
              </div>
              <p className="text-[9px] text-slate-500 font-black uppercase">Project Viability Confidence: 82%</p>
            </div>
          </div>

          <div className="flex-grow"></div>
          
          <div className="p-6 bg-white/5 rounded-3xl border border-white/5">
            <p className="text-[9px] text-slate-500 leading-relaxed font-bold uppercase text-center tracking-widest">
              © 2025 BuildConsult Global AI <br/> Regulatory Authority Authorized
            </p>
          </div>
        </aside>

        {/* Console Container */}
        <div className="flex-1 flex flex-col relative bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-900/40 via-transparent to-transparent">
          <div 
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-6 md:p-12 space-y-10 scroll-smooth custom-scrollbar"
          >
            {messages.map((msg, i) => (
              <div 
                key={i} 
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-in slide-in-from-bottom-4 duration-500`}
              >
                <div 
                  className={`relative max-w-[80%] p-8 md:p-10 rounded-[2.5rem] shadow-2xl leading-relaxed text-base md:text-lg transition-all ${
                    msg.role === 'user' 
                      ? 'bg-blue-600 text-white rounded-tr-none shadow-blue-500/20 font-semibold' 
                      : 'bg-slate-900/80 backdrop-blur-md text-slate-100 border border-white/10 rounded-tl-none font-medium'
                  }`}
                >
                  {msg.role === 'model' && (
                    <div className="absolute -top-3 left-6 px-3 py-1 bg-blue-600 text-[8px] font-black uppercase tracking-[0.2em] rounded-full text-white">
                      System Response
                    </div>
                  )}
                  <div className="whitespace-pre-wrap">
                    {msg.text}
                  </div>
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-slate-900/80 backdrop-blur-md px-10 py-6 rounded-[2rem] border border-blue-500/30 shadow-2xl flex items-center gap-6">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></div>
                    <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                    <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                  </div>
                  <span className="text-[10px] font-black text-blue-400 uppercase tracking-[0.5em] animate-pulse">Computing Audits</span>
                </div>
              </div>
            )}
          </div>

          {/* Interactive Interface */}
          <div className="p-8 md:p-12 bg-slate-950/80 border-t border-white/5 backdrop-blur-2xl relative">
            <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-20"></div>
            
            {messages.length === 1 && (
              <div className="mb-10 max-w-4xl mx-auto">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-[1px] flex-1 bg-white/5"></div>
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em]">Suggested Inquiries</p>
                  <div className="h-[1px] flex-1 bg-white/5"></div>
                </div>
                <div className="flex flex-wrap gap-3 justify-center">
                  {starters.map((s, i) => (
                    <button 
                      key={i} 
                      onClick={() => handleSend(s)}
                      className="px-6 py-3 bg-white/5 hover:bg-blue-600 text-slate-400 hover:text-white text-xs font-black rounded-full border border-white/10 hover:border-blue-500 transition-all active:scale-95 uppercase tracking-widest"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="relative group max-w-5xl mx-auto">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[2.5rem] blur opacity-20 group-focus-within:opacity-40 transition duration-1000"></div>
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Enter technical brief or regulatory query..."
                className="relative w-full pl-10 pr-24 py-7 bg-slate-900 border border-white/10 rounded-[2.5rem] focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all outline-none font-bold text-white text-lg placeholder:text-slate-700"
              />
              <button 
                onClick={() => handleSend()}
                disabled={isLoading || !input.trim()}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-16 h-16 bg-blue-600 text-white rounded-3xl flex items-center justify-center hover:bg-white hover:text-blue-600 disabled:opacity-50 transition-all shadow-2xl shadow-blue-500/30 active:scale-95"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="22" x2="11" y1="2" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
              </button>
            </div>
            
            <p className="text-[8px] text-slate-600 font-black text-center mt-8 uppercase tracking-[0.5em]">
              Authorized AI Verification Node • BuildConsult Global Infrastructure
            </p>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.05); border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(255,255,255,0.1); }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float 6s ease-in-out 2s infinite; }
        .animate-bounce-slow { animation: bounce-slow 4s ease-in-out infinite; }
      `}} />
    </div>
  );
};

export default AIAdvisorPage;
