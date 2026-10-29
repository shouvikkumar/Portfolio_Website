import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import InteractiveTerminal from './components/InteractiveTerminal';
import { Terminal } from 'lucide-react';

export default function App() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#080c14] text-slate-200 selection:bg-cyan-500/30 selection:text-cyan-200 font-sans relative">
      
      {/* Top Glass Navbar */}
      <Navbar onOpenTerminal={() => setIsTerminalOpen(true)} />

      {/* Main Sections */}
      <main>
        <Hero onOpenTerminal={() => setIsTerminalOpen(true)} />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive CLI Terminal Modal */}
      <InteractiveTerminal 
        isOpen={isTerminalOpen} 
        onClose={() => setIsTerminalOpen(false)} 
      />

      {/* Floating CLI Terminal Toggle Button (Bottom-Right) */}
      <div className="fixed bottom-6 right-6 z-40 hidden sm:block">
        <button
          onClick={() => setIsTerminalOpen(prev => !prev)}
          className="flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-slate-900/90 hover:bg-slate-800 text-cyan-400 border border-cyan-500/40 shadow-xl shadow-cyan-500/10 backdrop-blur-md hover:scale-105 transition-all group font-mono text-xs"
          title="Toggle Interactive CLI Terminal"
        >
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
          <Terminal className="w-4 h-4 text-cyan-400 group-hover:rotate-6 transition-transform" />
          <span className="font-semibold">Terminal</span>
        </button>
      </div>

    </div>
  );
}
