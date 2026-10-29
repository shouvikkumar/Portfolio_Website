import React, { useState } from 'react';
import { 
  Code, Globe, FileCode, Palette, Cpu, Layers, Server, Terminal, 
  Binary, Network, Share2, Zap, Database, HardDrive, Flame, Box, 
  CloudRain, Cloud, GitBranch, Sparkles, Star
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

// Dynamic icon mapper helper
const iconMap = {
  Code, Globe, FileCode, Palette, Cpu, Layers, Server, Terminal,
  Binary, Network, Share2, Zap, Database, HardDrive, Flame, Box,
  CloudRain, Cloud, GitBranch
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills = activeCategory === 'all'
    ? skillsData.items
    : skillsData.items.filter(item => item.category === activeCategory);

  const getLevelBadge = (level) => {
    switch (level) {
      case 'Expert':
        return 'text-cyan-400 bg-cyan-950/60 border-cyan-500/40';
      case 'Advanced':
        return 'text-violet-400 bg-violet-950/60 border-violet-500/40';
      default:
        return 'text-slate-400 bg-slate-800/60 border-slate-700/40';
    }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-950/60 border border-violet-500/30 text-violet-400 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>TECHNICAL PROFICIENCY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Tools, Technologies & Architecture
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            A battle-tested stack honed across production environments and modern system designs.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {skillsData.categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                activeCategory === cat.id
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/25 scale-105'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-white/5'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filteredSkills.map((skill, idx) => {
            const IconComponent = iconMap[skill.icon] || Code;
            
            return (
              <div
                key={idx}
                className={`glass-card p-4 rounded-xl border relative group flex flex-col justify-between ${
                  skill.highlight ? 'border-cyan-500/30' : 'border-white/5'
                }`}
              >
                {skill.highlight && (
                  <span className="absolute -top-2 -right-1 text-cyan-400 p-0.5 bg-slate-950 rounded-full border border-cyan-500/30" title="Core Specialty">
                    <Star className="w-3 h-3 fill-cyan-400" />
                  </span>
                )}

                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-slate-900 border border-white/10 group-hover:border-cyan-500/40 text-slate-300 group-hover:text-cyan-400 transition-colors">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm group-hover:text-cyan-300 transition-colors">
                      {skill.name}
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between">
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded-md border ${getLevelBadge(skill.level)}`}>
                    {skill.level}
                  </span>
                  <span className="text-[10px] text-slate-500 uppercase font-mono tracking-wider">
                    {skill.category}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick architecture highlights banner */}
        <div className="mt-14 glass-panel p-6 rounded-2xl border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-white font-bold text-lg">Looking for a specific framework or tool not listed?</h4>
            <p className="text-slate-400 text-sm">
              I adapt rapidly to custom tech stacks, proprietary architectures, and modern cloud primitives.
            </p>
          </div>
          <a
            href="#contact"
            className="whitespace-nowrap px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-400 font-mono text-sm border border-cyan-500/30 transition-all"
          >
            Inquire Tech Compatibility &rarr;
          </a>
        </div>

      </div>
    </section>
  );
}
