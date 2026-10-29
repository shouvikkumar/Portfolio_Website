import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, Code2, Download, ExternalLink, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ onOpenTerminal }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#080c14]/80 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/20 py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-violet-600 flex items-center justify-center font-mono font-bold text-white shadow-md shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all duration-300 group-hover:scale-105">
              &lt;S/&gt;
            </div>
            <div className="flex flex-col">
              <span className="font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                {personalInfo.name}
              </span>
              <span className="text-xs text-cyan-400/80 font-mono tracking-wider">
                Full-Stack Engineer
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-white/10 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeSection === link.id
                    ? 'bg-cyan-500/15 text-cyan-400 border border-cyan-500/30 shadow-sm shadow-cyan-500/20'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onOpenTerminal}
              className="flex items-center gap-2 px-3 py-1.5 text-xs font-mono text-cyan-400 bg-cyan-950/40 hover:bg-cyan-900/50 border border-cyan-500/30 rounded-lg transition-all hover:border-cyan-400"
              title="Open Interactive Dev Terminal"
            >
              <Terminal className="w-3.5 h-3.5 animate-pulse" />
              <span>CLI Terminal</span>
            </button>

            <a
              href="#contact"
              className="px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-400 hover:to-violet-500 rounded-lg shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-200 hover:-translate-y-0.5"
            >
              Let's Talk
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onOpenTerminal}
              className="p-2 text-cyan-400 bg-cyan-950/40 border border-cyan-500/30 rounded-lg"
              title="CLI Terminal"
            >
              <Terminal className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-400 hover:text-white rounded-lg bg-slate-800/60 border border-white/10 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-[#0a0f1d]/95 backdrop-blur-xl border-b border-white/10 px-4 pt-4 pb-6 space-y-3 animate-fadeIn">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`px-4 py-2.5 rounded-lg text-base font-medium transition-colors ${
                  activeSection === link.id
                    ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 font-semibold'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="w-full text-center py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-violet-600 rounded-lg shadow-lg"
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
