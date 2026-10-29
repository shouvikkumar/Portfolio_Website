import React, { useState, useEffect } from 'react';
import { ArrowRight, Mail, Terminal, Sparkles, CheckCircle2, Copy, Check, Download, Layers } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onOpenTerminal }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [copied, setCopied] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const currentRole = personalInfo.roles[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting && displayText === currentRole) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % personalInfo.roles.length);
      } else {
        setDisplayText(
          isDeleting
            ? currentRole.substring(0, displayText.length - 1)
            : currentRole.substring(0, displayText.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden cyber-grid">
      {/* Dynamic Background Glow Orbs */}
      <div className="glow-orb-cyan top-10 -left-20"></div>
      <div className="glow-orb-violet bottom-10 -right-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bio & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-xs font-mono backdrop-blur-md shadow-inner shadow-cyan-500/10">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-slate-300">
                {personalInfo.status}
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h2 className="text-sm sm:text-base font-mono uppercase tracking-widest text-cyan-400 font-semibold">
                Hi, I am Shouvik
              </h2>
              <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
                Architecting <br className="hidden sm:inline" />
                <span className="text-gradient">Scalable Systems</span> <br />
                & Seamless Web Apps.
              </h1>
            </div>

            {/* Dynamic Role */}
            <div className="h-8 flex items-center justify-center lg:justify-start">
              <span className="text-lg sm:text-xl font-mono text-slate-300">
                &gt; <span className="text-cyan-400 font-semibold">{displayText}</span>
                <span className="animate-pulse text-cyan-400">|</span>
              </span>
            </div>

            {/* Tagline */}
            <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {personalInfo.tagline}
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-white font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={copyEmail}
                className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-white/10 hover:border-cyan-500/40 text-slate-200 font-medium transition-all duration-200"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-slate-400" />}
                <span className="text-sm font-mono">{copied ? "Email Copied!" : "Copy Email"}</span>
              </button>

              <button
                onClick={onOpenTerminal}
                className="flex items-center gap-2 px-4 py-3.5 rounded-xl bg-slate-950/60 hover:bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-sm font-mono transition-all duration-200"
              >
                <Terminal className="w-4 h-4" />
                <span>Run CLI</span>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-3 pt-3 text-slate-400">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-500 mr-2">Connect:</span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-slate-900/60 border border-white/5 hover:border-cyan-500/30 hover:text-cyan-400 hover:bg-slate-800 transition-all"
                title="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-slate-900/60 border border-white/5 hover:border-cyan-500/30 hover:text-cyan-400 hover:bg-slate-800 transition-all"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2.5 rounded-lg bg-slate-900/60 border border-white/5 hover:border-cyan-500/30 hover:text-cyan-400 hover:bg-slate-800 transition-all"
                title="Send Direct Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Code IDE Mockup */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Outer decorative glowing frame */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/30 to-violet-600/30 rounded-2xl blur-xl opacity-75 animate-pulse-glow"></div>
              
              <div className="relative rounded-2xl bg-slate-950/90 border border-white/10 shadow-2xl backdrop-blur-xl overflow-hidden font-mono text-xs">
                
                {/* IDE Window Bar */}
                <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-400 text-[11px]">
                    <span className="text-cyan-400">⚡</span> engineer.config.ts
                  </div>
                  <div className="text-[10px] text-slate-500">v4.1.0</div>
                </div>

                {/* Code Body */}
                <div className="p-5 space-y-2 text-slate-300 leading-relaxed overflow-x-auto">
                  <div className="text-slate-500">// Initialize Developer Entity</div>
                  <div>
                    <span className="text-violet-400">const</span>{' '}
                    <span className="text-cyan-300">engineer</span>: <span className="text-amber-300">SoftwareArchitect</span> = {'{'}
                  </div>
                  
                  <div className="pl-4">
                    <span className="text-slate-400">name:</span>{' '}
                    <span className="text-emerald-300">"{personalInfo.name}"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">focus:</span>{' '}
                    <span className="text-emerald-300">"Full-Stack & Distributed Systems"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">location:</span>{' '}
                    <span className="text-emerald-300">"{personalInfo.location}"</span>,
                  </div>
                  
                  <div className="pl-4">
                    <span className="text-slate-400">stack:</span> [
                    <span className="text-cyan-300">"React"</span>,{' '}
                    <span className="text-cyan-300">"Node"</span>,{' '}
                    <span className="text-cyan-300">"Go"</span>,{' '}
                    <span className="text-cyan-300">"PostgreSQL"</span>,{' '}
                    <span className="text-cyan-300">"Docker"</span>],
                  </div>
                  
                  <div className="pl-4">
                    <span className="text-slate-400">availability:</span>{' '}
                    <span className="text-emerald-400 font-semibold">true</span>,
                  </div>

                  <div className="pl-4">
                    <span className="text-slate-400">buildReliability:</span>{' '}
                    <span className="text-violet-400">async</span> () =&gt; {'{'}
                  </div>
                  <div className="pl-8 text-slate-400">
                    <span className="text-violet-400">await</span> telemetry.<span className="text-cyan-300">monitorSystemHealth</span>();
                  </div>
                  <div className="pl-8 text-cyan-400">
                    return <span className="text-amber-300">"99.99% Resilience"</span>;
                  </div>
                  <div className="pl-4">{'}'}</div>

                  <div>{'}'};</div>

                  <div className="pt-2 text-slate-500">
                    // Ready to scale engineering teams
                  </div>
                  <div className="text-emerald-400 font-semibold flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Compiled successfully with 0 errors</span>
                  </div>
                </div>

                {/* Micro Terminal Output Footer */}
                <div className="px-4 py-2.5 bg-slate-900/60 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                    <span className="text-slate-300 font-mono">Live Node Cluster: Active</span>
                  </div>
                  <div className="text-cyan-400/80 font-mono">Region: ap-south-1</div>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* Stats Strip */}
        <div className="mt-16 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6">
          {personalInfo.stats.map((stat, idx) => (
            <div key={idx} className="glass-card p-5 rounded-xl text-center group">
              <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400 group-hover:scale-105 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-400 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
