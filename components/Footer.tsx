
import React from 'react';

const Footer: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">B</span>
              </div>
              <span className="text-xl font-black tracking-tight text-slate-900">BuildConsult Pro</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-8">
              Professional, independent building consultancy providing technical oversight for high-stakes construction projects worldwide.
            </p>
            <div className="flex gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-10 h-10 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-600 transition-all cursor-pointer">
                  <div className="w-5 h-5 bg-current rounded-sm opacity-20"></div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 mb-8 uppercase text-xs tracking-widest">Expertise</h4>
            <ul className="space-y-4 text-sm text-slate-500 font-medium">
              <li><a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="hover:text-blue-600 transition-colors">Site Feasibility</a></li>
              <li><a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="hover:text-blue-600 transition-colors">Regulatory Compliance</a></li>
              <li><a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="hover:text-blue-600 transition-colors">Forensic Engineering</a></li>
              <li><a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="hover:text-blue-600 transition-colors">Cost Engineering</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-8 uppercase text-xs tracking-widest">Platform</h4>
            <ul className="space-y-4 text-sm text-slate-500 font-medium">
              <li><a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="hover:text-blue-600 transition-colors">Our Specialists</a></li>
              <li><a href="#projects" onClick={(e) => scrollToSection(e, 'projects')} className="hover:text-blue-600 transition-colors">Case Portfolio</a></li>
              <li><a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="hover:text-blue-600 transition-colors">Methodology</a></li>
              <li><a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="hover:text-blue-600 transition-colors">Direct Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-8 uppercase text-xs tracking-widest">Global Insights</h4>
            <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-4">Technical Briefings</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Industry Email" 
                className="flex-1 px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all font-medium" 
              />
              <button className="bg-slate-900 text-white px-5 py-3 rounded-xl text-sm font-bold hover:bg-slate-800 transition-all active:scale-95">
                Join
              </button>
            </div>
            <p className="text-[10px] text-slate-400 mt-4 leading-relaxed font-medium">
              Join 12,000+ engineers receiving our monthly technical and regulatory updates.
            </p>
          </div>
        </div>
        
        <div className="border-t border-slate-200 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
          <p>© 2025 BuildConsult Pro Global. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-slate-900 transition-colors">Privacy Charter</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Terms of Engagement</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Regulatory Status</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
