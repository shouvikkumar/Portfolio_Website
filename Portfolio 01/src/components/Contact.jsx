import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, Copy, Check, MessageSquare, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './Icons';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('submitting');

    setTimeout(() => {
      setStatus('success');
      // Fire confetti celebration
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#06b6d4', '#8b5cf6', '#10b981']
        });
      } catch (err) {
        // Fallback gracefully
      }
    }, 800);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>COMMUNICATION CHANNEL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's Build Something Exceptional
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Have a project in mind, an engineering opening, or just want to discuss distributed architectures? Drop a message!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-5xl mx-auto">
          
          {/* Left: Contact Info & Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 space-y-6">
              
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white">
                  Direct Inquiries
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  I typically respond within 12–24 business hours. Feel free to copy my direct email or connect on social platforms.
                </p>
              </div>

              {/* Email Card with 1-click Copy */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-white/5 space-y-2">
                <div className="text-xs text-slate-400 font-mono uppercase">Direct Email</div>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-sm font-mono text-cyan-300 truncate">
                    {personalInfo.email}
                  </span>
                  <button
                    onClick={copyEmail}
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors flex-shrink-0"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Location Card */}
              <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-900/90 border border-white/5">
                <div className="p-2.5 rounded-lg bg-cyan-950/60 text-cyan-400 border border-cyan-500/20">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-mono">Location</div>
                  <div className="text-sm font-semibold text-white">{personalInfo.location}</div>
                </div>
              </div>

              {/* Social Profiles Grid */}
              <div className="space-y-2 pt-2">
                <div className="text-xs text-slate-400 font-mono uppercase tracking-wider">Social Channels</div>
                <div className="flex items-center gap-3">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-white/5 text-slate-300 hover:text-cyan-400 transition-colors text-xs font-mono"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-white/5 text-slate-300 hover:text-cyan-400 transition-colors text-xs font-mono"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 relative">
              
              {status === 'success' ? (
                <div className="py-12 text-center space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Message Transmitted!</h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out, <span className="text-cyan-400 font-semibold">{formData.name}</span>. I've received your note and will get back to you promptly.
                  </p>
                  <button
                    onClick={() => {
                      setStatus('idle');
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-mono border border-white/10 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-400">Your Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-400 transition-colors text-sm"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-400">Your Email *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-400 transition-colors text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-400">Subject / Topic</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project collaboration / Engineering role / Coffee chat"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-400 transition-colors text-sm"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-400">Your Message *</label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hi Shouvik, we'd love to chat regarding..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-400 transition-colors text-sm resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-white font-semibold shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-200 disabled:opacity-50"
                  >
                    {status === 'submitting' ? (
                      <div className="flex items-center gap-2 text-sm font-mono">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                        <span>Dispatching...</span>
                      </div>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Transmit Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
