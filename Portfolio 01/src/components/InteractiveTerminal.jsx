import React, { useState, useRef, useEffect } from 'react';
import { Terminal, X, Minimize2, Maximize2, CornerDownLeft, Sparkles } from 'lucide-react';
import { terminalCommands, personalInfo } from '../data/portfolioData';

export default function InteractiveTerminal({ isOpen, onClose }) {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    {
      type: 'system',
      text: `🚀 Shouvik Maity CLI [v2.4.0]\nType 'help' to view available commands or 'hire' for priority contact.`
    }
  ]);
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (e) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;

    const cmd = trimmed.toLowerCase();
    setCommandHistory(prev => [...prev, trimmed]);
    setHistoryIndex(-1);

    const newHistory = [...history, { type: 'input', text: trimmed }];

    if (cmd === 'clear') {
      setHistory([]);
      setInput('');
      return;
    }

    if (cmd === 'sudo hire' || cmd === 'hire') {
      newHistory.push({
        type: 'output',
        text: terminalCommands.hire
      });
    } else if (cmd === 'whoami') {
      newHistory.push({
        type: 'output',
        text: `guest@portfolio ~ You are a curious recruiter/fellow engineer inspecting the code!`
      });
    } else if (cmd === 'date') {
      newHistory.push({
        type: 'output',
        text: new Date().toString()
      });
    } else if (terminalCommands[cmd]) {
      newHistory.push({
        type: 'output',
        text: terminalCommands[cmd]
      });
    } else {
      newHistory.push({
        type: 'error',
        text: `command not found: "${trimmed}". Type 'help' to see valid commands.`
      });
    }

    setHistory(newHistory);
    setInput('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length === 0) return;
      const nextIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(nextIndex);
      setInput(commandHistory[nextIndex]);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex === -1) return;
      const nextIndex = historyIndex + 1;
      if (nextIndex >= commandHistory.length) {
        setHistoryIndex(-1);
        setInput('');
      } else {
        setHistoryIndex(nextIndex);
        setInput(commandHistory[nextIndex]);
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl h-[520px] bg-[#070b12] border border-cyan-500/40 rounded-2xl shadow-2xl shadow-cyan-500/20 flex flex-col overflow-hidden font-mono text-xs sm:text-sm">
        
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-slate-900 border-b border-white/10 select-none">
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="w-3 h-3 rounded-full bg-rose-500 hover:opacity-80 transition-opacity"
              title="Close Terminal"
            />
            <div className="w-3 h-3 rounded-full bg-amber-500"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
            <span className="ml-2 text-slate-400 text-xs flex items-center gap-1.5 font-medium">
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              <span>shouvik@developer-box: ~</span>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[10px] text-cyan-400/80 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-500/20">
              Interactive Shell
            </span>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-white p-1 rounded hover:bg-slate-800 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Terminal Output Body */}
        <div 
          className="flex-1 p-4 overflow-y-auto space-y-3 bg-[#05080e]/95 text-slate-300 leading-relaxed"
          onClick={() => inputRef.current?.focus()}
        >
          {history.map((item, idx) => (
            <div key={idx} className="whitespace-pre-wrap">
              {item.type === 'input' && (
                <div className="flex items-center gap-2 text-cyan-400 font-semibold">
                  <span className="text-emerald-400">user@guest:~$</span>
                  <span className="text-white">{item.text}</span>
                </div>
              )}
              {item.type === 'output' && (
                <div className="text-slate-300 pl-4 border-l-2 border-cyan-500/30">
                  {item.text}
                </div>
              )}
              {item.type === 'system' && (
                <div className="text-cyan-400/90 bg-cyan-950/20 p-2.5 rounded-lg border border-cyan-500/20">
                  {item.text}
                </div>
              )}
              {item.type === 'error' && (
                <div className="text-rose-400 pl-4 border-l-2 border-rose-500/40">
                  {item.text}
                </div>
              )}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Quick Suggestion Chips */}
        <div className="px-4 py-2 bg-slate-900/60 border-t border-white/5 flex flex-wrap items-center gap-1.5">
          <span className="text-[10px] text-slate-500 font-mono">Quick:</span>
          {['help', 'skills', 'projects', 'stats', 'hire', 'clear'].map((cmd) => (
            <button
              key={cmd}
              onClick={() => {
                setInput(cmd);
                inputRef.current?.focus();
              }}
              className="text-[11px] px-2 py-0.5 rounded bg-slate-800/80 hover:bg-cyan-950 hover:text-cyan-300 text-slate-400 border border-white/5 transition-colors"
            >
              {cmd}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <form onSubmit={handleCommand} className="flex items-center gap-2 px-4 py-3 bg-slate-950 border-t border-white/10">
          <span className="text-emerald-400 font-bold">➜</span>
          <span className="text-cyan-400 font-medium">~</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type command ('help', 'projects', 'hire')..."
            className="flex-1 bg-transparent border-none text-white focus:outline-none placeholder:text-slate-600 font-mono"
            autoFocus
          />
          <button
            type="submit"
            className="p-1.5 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400 border border-cyan-500/30"
            title="Execute"
          >
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </form>

      </div>
    </div>
  );
}
