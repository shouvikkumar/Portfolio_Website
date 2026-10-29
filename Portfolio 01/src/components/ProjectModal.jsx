import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, AlertTriangle, TrendingUp, Layers, Cpu } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl bg-[#0c121e] border border-cyan-500/30 rounded-2xl shadow-2xl shadow-cyan-500/10 z-10 overflow-hidden my-8 animate-fadeIn">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-900/80 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"></span>
            <span className="text-xs font-mono uppercase tracking-wider text-cyan-400">
              System Architecture & Deep Dive
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[80vh] overflow-y-auto">
          
          {/* Title & Tag */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-500/30">
                {project.tag}
              </span>
              <span className="text-xs text-slate-400 font-mono">
                {project.category}
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              {project.title}
            </h3>
            <p className="text-slate-300 text-sm sm:text-base mt-2 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Performance & Metrics Banner */}
          <div className="glass-panel p-4 rounded-xl border border-emerald-500/30 bg-emerald-950/20 flex items-start gap-3">
            <TrendingUp className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-mono text-emerald-400 font-semibold uppercase">Impact & Performance Metrics</div>
              <div className="text-sm text-slate-200 font-medium mt-0.5">{project.metrics}</div>
            </div>
          </div>

          {/* Key Engineering Challenge Solved */}
          <div className="glass-panel p-4 rounded-xl border border-amber-500/30 bg-amber-950/20 flex items-start gap-3">
            <Cpu className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-mono text-amber-400 font-semibold uppercase">Engineering Challenge & Solution</div>
              <p className="text-sm text-slate-300 mt-1 leading-relaxed">{project.challenges}</p>
            </div>
          </div>

          {/* Technologies Used */}
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5">
              Technologies & Infrastructure
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-900 border border-white/10 text-cyan-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-end gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-white/10 text-sm font-medium transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Source Repository</span>
            </a>

            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-white text-sm font-semibold shadow-md shadow-cyan-500/20 transition-all"
            >
              <span>Live Demonstration</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

        </div>

      </div>
    </div>
  );
}
