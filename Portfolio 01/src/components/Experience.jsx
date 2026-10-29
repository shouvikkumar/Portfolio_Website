import React from 'react';
import { Briefcase, Calendar, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-950/60 border border-violet-500/30 text-violet-400 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CAREER TRACK RECORD</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineering Experience
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Proven history of delivering mission-critical applications and driving architectural improvements.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical central glowing line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-cyan-500 via-violet-500 to-transparent sm:-translate-x-1/2 opacity-30"></div>

          <div className="space-y-12">
            {experienceData.map((exp, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div 
                  key={idx}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Central Node Badge */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-slate-900 border-2 border-cyan-400 flex items-center justify-center z-10 shadow-lg shadow-cyan-500/30">
                    <div className="w-2.5 h-2.5 rounded-full bg-cyan-400"></div>
                  </div>

                  {/* Spacer for symmetrical desktop alignment */}
                  <div className="hidden sm:block sm:w-1/2"></div>

                  {/* Content Card */}
                  <div className="w-full sm:w-1/2 pl-12 sm:pl-0 sm:px-8">
                    <div className="glass-card p-6 rounded-2xl border border-white/10 hover:border-cyan-500/40 space-y-4">
                      
                      {/* Role & Company Header */}
                      <div>
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <h3 className="text-lg font-bold text-white">
                            {exp.role}
                          </h3>
                          <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-slate-800 text-cyan-300 border border-white/10">
                            {exp.period}
                          </span>
                        </div>
                        
                        <div className="text-sm font-semibold text-cyan-400 mt-1">
                          {exp.company}
                        </div>
                        <div className="text-xs text-slate-500 flex items-center gap-1 mt-0.5 font-mono">
                          <MapPin className="w-3 h-3" />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      {/* Overview */}
                      <p className="text-slate-300 text-sm leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Key Achievements Bullet Points */}
                      <div className="space-y-2 pt-2 border-t border-white/5">
                        <div className="text-xs font-mono uppercase text-slate-400 font-semibold tracking-wider">
                          Key Achievements:
                        </div>
                        {exp.achievements.map((ach, achIdx) => (
                          <div key={achIdx} className="flex items-start gap-2 text-xs text-slate-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                            <span>{ach}</span>
                          </div>
                        ))}
                      </div>

                      {/* Technologies used in role */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {exp.skills.map((skill, sIdx) => (
                          <span 
                            key={sIdx}
                            className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-900 text-slate-300 border border-white/5"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
