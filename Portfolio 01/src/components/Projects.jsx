import React, { useState } from 'react';
import { ExternalLink, Sparkles, Layers, ArrowUpRight, Info } from 'lucide-react';
import { GithubIcon } from './Icons';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Full-Stack', 'Cloud / API', 'Frontend / UI', 'AI / ML'];

  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PRODUCTION DELIVERABLES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured Systems & Applications
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            High-throughput backends, real-time engines, and responsive modern web interfaces.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                activeFilter === cat
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/25'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-2xl overflow-hidden border border-white/10 flex flex-col justify-between group hover:border-cyan-500/40"
            >
              <div>
                {/* Project Image Banner */}
                <div className="relative h-48 overflow-hidden bg-slate-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                  
                  {/* Category Pill */}
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono font-medium bg-slate-950/80 border border-cyan-500/30 text-cyan-300 backdrop-blur-md">
                      {project.tag}
                    </span>
                  </div>

                  {/* Architecture Info Trigger Button */}
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="absolute top-3 right-3 p-2 rounded-xl bg-slate-950/80 border border-white/10 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors backdrop-blur-md"
                    title="View System Architecture Details"
                  >
                    <Info className="w-4 h-4" />
                  </button>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <h3 
                    onClick={() => setSelectedProject(project)}
                    className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors cursor-pointer flex items-center justify-between"
                  >
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </h3>

                  <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">
                    {project.summary}
                  </p>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tech.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-900/90 text-slate-300 border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="px-2 py-1 rounded-md text-[11px] font-mono bg-slate-900/90 text-cyan-400 border border-white/5">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-0 flex items-center justify-between border-t border-white/5 mt-4">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1.5"
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>Deep Dive</span>
                </button>

                <div className="flex items-center gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
                    title="View GitHub Repository"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-cyan-950/60 hover:bg-cyan-900/80 text-cyan-300 border border-cyan-500/30 transition-colors"
                    title="View Live Demo"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Deep Dive Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
