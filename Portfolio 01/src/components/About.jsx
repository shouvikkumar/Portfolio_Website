import React from 'react';
import { Cpu, Server, ShieldCheck, Zap, Sparkles, GraduationCap, MapPin, Award } from 'lucide-react';
import { personalInfo, educationData } from '../data/portfolioData';

export default function About() {
  const pillars = [
    {
      icon: <Server className="w-6 h-6 text-cyan-400" />,
      title: "Distributed Systems & Cloud",
      description: "Designing event-driven microservices, fault-tolerant message brokers, and containerized Kubernetes workflows that handle massive concurrent traffic."
    },
    {
      icon: <Zap className="w-6 h-6 text-amber-400" />,
      title: "High Performance & Latency",
      description: "Obsessed with optimizing sub-millisecond database queries, memory leaks, caching topologies, and sub-second web render metrics."
    },
    {
      icon: <Cpu className="w-6 h-6 text-violet-400" />,
      title: "Full-Stack Architecture",
      description: "Connecting state-of-the-art React / Next.js frontends seamlessly with resilient RESTful and GraphQL backend microservices."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
      title: "Reliability & Security",
      description: "Applying zero-trust authentication, automated CI/CD security audits, robust unit/integration tests, and real-time observability telemetry."
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ENGINEERING BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Building Robust Foundations For Modern Applications
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            A developer who bridges the gap between infrastructure scalability and delightful user interfaces.
          </p>
        </div>

        {/* Narrative & Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Narrative */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl space-y-4 border border-white/10">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <span className="w-2 h-6 rounded bg-gradient-to-b from-cyan-400 to-violet-500"></span>
                My Story & Approach
              </h3>
              
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                {personalInfo.bio}
              </p>

              <div className="pt-4 border-t border-white/10 space-y-3">
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <MapPin className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>Based in <strong>{personalInfo.location}</strong> (Open to Remote Globally)</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <Award className="w-4 h-4 text-violet-400 flex-shrink-0" />
                  <span>Committed to clean design patterns, SOLID principles & code review rigor</span>
                </div>
              </div>
            </div>

            {/* Education Card */}
            <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-violet-950/60 border border-violet-500/30 text-violet-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-base">Education & Degree</h4>
                  <div className="text-xs text-slate-400 font-mono">Academic Foundation</div>
                </div>
              </div>

              {educationData.map((edu, idx) => (
                <div key={idx} className="pt-2 text-sm space-y-1">
                  <div className="text-cyan-300 font-medium">{edu.degree}</div>
                  <div className="text-slate-400 text-xs">{edu.institution} • {edu.period}</div>
                  <p className="text-xs text-slate-400 pt-1 leading-normal">{edu.details}</p>
                </div>
              ))}
            </div>

          </div>

          {/* Right Core Pillars */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {pillars.map((pillar, idx) => (
              <div 
                key={idx}
                className="glass-card p-6 rounded-2xl border border-white/10 space-y-3 hover:border-cyan-500/40"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center shadow-inner">
                  {pillar.icon}
                </div>
                <h4 className="text-lg font-bold text-white">
                  {pillar.title}
                </h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
