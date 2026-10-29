import React from 'react';
import { ArrowUp, Heart, Code2, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#05080e] border-t border-white/10 py-12 text-slate-400 text-xs font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Logo & Tagline */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-violet-600 flex items-center justify-center font-bold text-white text-xs">
              &lt;S/&gt;
            </div>
            <div>
              <div className="text-white font-semibold text-sm font-sans">{personalInfo.name}</div>
              <div className="text-slate-500 text-[11px]">Full-Stack Software Engineer</div>
            </div>
          </div>

          {/* Credits */}
          <div className="flex items-center gap-1.5 text-center">
            <span>Designed & Engineered with</span>
            <span className="text-cyan-400">React</span>
            <span>•</span>
            <span className="text-violet-400">Tailwind CSS</span>
            <span>•</span>
            <span className="text-emerald-400">Vite</span>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-white/10 transition-colors"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>

        </div>

        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-2">
          <div>
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a href="#about" className="hover:text-slate-400">About</a>
            <a href="#projects" className="hover:text-slate-400">Projects</a>
            <a href="#experience" className="hover:text-slate-400">Experience</a>
            <a href="#contact" className="hover:text-slate-400">Contact</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
