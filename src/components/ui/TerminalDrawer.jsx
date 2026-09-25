import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, X, Maximize2, Minimize2, Sparkles, Volume2, VolumeX, CornerDownLeft, ChevronRight } from 'lucide-react';
import { portfolio } from '../../data/portfolio';
import { soundManager } from '../../utils/audio';

export default function TerminalDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [inputVal, setInputVal] = useState('');
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [audioActive, setAudioActive] = useState(soundManager.isEnabled());

  const inputRef = useRef(null);
  const terminalEndRef = useRef(null);

  const initialBanner = [
    {
      id: 'init-1',
      type: 'system',
      text: `╔═══════════════════════════════════════════════════════════════╗
║  PREM SAI CYBER TERMINAL [v2.5.0-hacker-os]                    ║
║  Host: premsai.dev | Architecture: x86_64-linux               ║
║  Type 'help' for available commands. Try 'matrix' or 'skills'  ║
╚═══════════════════════════════════════════════════════════════╝`
    },
    {
      id: 'init-2',
      type: 'info',
      text: `Operative: Guest Operative | Status: Connected | Audio SFX: ${audioActive ? 'ENABLED' : 'MUTED'}`
    }
  ];

  const [outputLines, setOutputLines] = useState(initialBanner);

  // Sync audio toggle with soundManager
  useEffect(() => {
    const handleAudioToggle = (e) => {
      setAudioActive(e.detail.enabled);
    };
    window.addEventListener('cyber-sfx-toggled', handleAudioToggle);
    return () => window.removeEventListener('cyber-sfx-toggled', handleAudioToggle);
  }, []);

  // Global keyboard shortcut to toggle terminal (backtick / ~)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === '`' || e.key === '~') {
        const tag = document.activeElement?.tagName?.toLowerCase();
        if (tag !== 'input' && tag !== 'textarea') {
          e.preventDefault();
          setIsOpen((prev) => {
            const next = !prev;
            if (next) soundManager.playClick();
            return next;
          });
        }
      }
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Focus input and scroll down when terminal opens or updates
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 80);
      terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [isOpen, outputLines]);

  const handleCommand = (cmdText) => {
    const trimmed = cmdText.trim();
    if (!trimmed) return;

    // Add to history for up/down navigation
    setCommandHistory((prev) => [trimmed, ...prev]);
    setHistoryIndex(-1);

    const parts = trimmed.split(' ');
    const command = parts[0].toLowerCase();
    const args = parts.slice(1);

    const newLines = [
      ...outputLines,
      {
        id: `cmd-${Date.now()}`,
        type: 'input',
        text: `guest@premsai:~$ ${trimmed}`
      }
    ];

    switch (command) {
      case 'help':
      case '?':
        soundManager.playExecute();
        newLines.push({
          id: `out-${Date.now()}`,
          type: 'output',
          text: `AVAILABLE COMMANDS:
  about / bio        Show developer summary & engineering focus
  skills / stack     Inspect tech stack (Languages, Web, Backend, Tools)
  projects           List key projects with summaries & links
  certs / vault      Display awards, hackathon wins & credentials
  contact            Get in touch (Email, GitHub, LinkedIn)
  matrix             Toggle interactive Matrix digital code rain
  audio              Toggle procedural cyber audio SFX (ON / OFF)
  goto <section>     Jump to section (hero, about, skills, projects, contact)
  whoami             Display current authorization & role
  date               Print current timestamp
  clear              Clear the terminal output
  sudo               Run command with administrative privileges
  exit               Close the terminal drawer`
        });
        break;

      case 'about':
      case 'bio':
        soundManager.playExecute();
        newLines.push({
          id: `out-${Date.now()}`,
          type: 'output',
          text: `[PROFILE] ${portfolio.name} — ${portfolio.role}
[LOCATION] ${portfolio.location}
[INSTITUTION] ${portfolio.about.institution} (${portfolio.about.degree})
[STATUS] ${portfolio.status}

${portfolio.about.bio}

CORE FOCUS DOMAINS:
  * Full-Stack Web Architecture
  * Machine Learning & Computer Vision
  * Microcontrollers, Robotics & IoT`
        });
        break;

      case 'skills':
      case 'stack':
        soundManager.playExecute();
        newLines.push({
          id: `out-${Date.now()}`,
          type: 'output',
          text: `TECHNICAL ARSENAL:
  [LANGUAGES]    C, Python, Java, JavaScript
  [FRONTEND]     React.js, Tailwind CSS, Modern Canvas, HTML5/CSS3
  [BACKEND]      Node.js, Spring Boot, FastAPI, REST APIs
  [DATABASES]    MySQL, MongoDB, Document Stores
  [DEVOPS/TOOLS] Git, GitHub, AWS (EC2/ALB), VS Code, Linux`
        });
        break;

      case 'projects':
        soundManager.playExecute();
        newLines.push({
          id: `out-${Date.now()}`,
          type: 'output',
          text: `FEATURED REPOSITORIES & DEPLOYMENTS:
  1. ORBIT [FEATURED]
     Automated Interview & Proctoring Platform
     Tech: React, FastAPI, Python, OpenCV, Tailwind CSS
     Demo: https://orbit-project-lake.vercel.app

  2. VIBETUNE
     Emotion-Aware Music Studio with Facial Expression Tracking
     Tech: React, Web Audio API, Face-API, Canvas
     Demo: https://vibe-tune-lilac.vercel.app/

  3. FAQ CHATBOT
     Conversational NLP Assistant
     Tech: Python, NLP, FastAPI, React

  4. SMART WI-FI / OBSTACLE AVOIDING CAR
     Robotics & Embedded Telemetry
     Tech: Embedded C, Arduino, Ultrasonic, IoT

Tip: Type 'goto projects' to jump directly to the interactive cards!`
        });
        break;

      case 'certs':
      case 'vault':
      case 'achievements':
        soundManager.playExecute();
        newLines.push({
          id: `out-${Date.now()}`,
          type: 'output',
          text: `HONORS & VERIFIED CREDENTIALS:
  * 1st Place Winner — Web Dev Hackathon (Workshop Carnival 2.0 / CIE MLRIT)
  * AWS Cloud Trek: Agentic Engineering Bootcamp & Contest
  * Python Essentials 1 — Cisco Networking Academy & OpenEDG
  * C Essentials 1 — Cisco Networking Academy & C++ Institute
  * MongoDB Basics for Students — Credly Verified Skill Badge
  * Autodesk Fusion 360 — Authorized Academic Partner Course`
        });
        break;

      case 'contact':
        soundManager.playExecute();
        newLines.push({
          id: `out-${Date.now()}`,
          type: 'output',
          text: `COMMUNICATION CHANNELS:
  Email:    ippilipremsai12356@gmail.com
  GitHub:   https://github.com/Premsai626
  LinkedIn: https://www.linkedin.com/in/premsai02
  Location: Hyderabad, India`
        });
        break;

      case 'goto':
        if (!args[0]) {
          soundManager.playError();
          newLines.push({
            id: `out-${Date.now()}`,
            type: 'error',
            text: `Usage: goto <section> (options: hero, about, skills, projects, certificates, contact)`
          });
        } else {
          const target = args[0].toLowerCase().replace('#', '');
          const element = document.getElementById(target);
          if (element) {
            soundManager.playExecute();
            element.scrollIntoView({ behavior: 'smooth' });
            newLines.push({
              id: `out-${Date.now()}`,
              type: 'output',
              text: `Navigating viewport to #${target}... Done.`
            });
          } else {
            soundManager.playError();
            newLines.push({
              id: `out-${Date.now()}`,
              type: 'error',
              text: `Section '#${target}' not found. Available: hero, about, skills, projects, certificates, contact`
            });
          }
        }
        break;

      case 'matrix':
        soundManager.playMatrix();
        window.dispatchEvent(new CustomEvent('toggle-matrix-rain'));
        newLines.push({
          id: `out-${Date.now()}`,
          type: 'success',
          text: `[SYSTEM] Matrix Digital Rain overlay toggled. Wake up, Neo...`
        });
        break;

      case 'audio':
        const newState = soundManager.toggle();
        setAudioActive(newState);
        newLines.push({
          id: `out-${Date.now()}`,
          type: 'success',
          text: `[AUDIO] Procedural cyber UI sound effects: ${newState ? 'ENABLED [🔊]' : 'MUTED [🔇]'}`
        });
        break;

      case 'whoami':
        soundManager.playExecute();
        newLines.push({
          id: `out-${Date.now()}`,
          type: 'output',
          text: `guest_operative@premsai.dev (UID: 1337)
Access Level: 0x42 - Authorized Code Explorer
Terminal Session: ttyS0-cyberdeck`
        });
        break;

      case 'date':
        soundManager.playExecute();
        newLines.push({
          id: `out-${Date.now()}`,
          type: 'output',
          text: `${new Date().toUTCString()} (Local: ${new Date().toLocaleTimeString()})`
        });
        break;

      case 'clear':
        soundManager.playExecute();
        setOutputLines([]);
        setInputVal('');
        return;

      case 'sudo':
        soundManager.playError();
        newLines.push({
          id: `out-${Date.now()}`,
          type: 'error',
          text: `[SECURITY ALERT] root escalation denied.
User 'guest' is not in the sudoers file. This incident has been logged and reported to Prem Sai.`
        });
        break;

      case 'exit':
      case 'quit':
        soundManager.playClick();
        setIsOpen(false);
        break;

      default:
        soundManager.playError();
        newLines.push({
          id: `out-${Date.now()}`,
          type: 'error',
          text: `bash: command not found: ${command}. Type 'help' to view valid commands.`
        });
        break;
    }

    setOutputLines(newLines);
    setInputVal('');
  };

  const handleKeyDown = (e) => {
    // Sound on keystroke
    if (e.key.length === 1 || e.key === 'Backspace') {
      soundManager.playKeystroke();
    }

    if (e.key === 'Enter') {
      handleCommand(inputVal);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const nextIdx = Math.min(historyIndex + 1, commandHistory.length - 1);
        setHistoryIndex(nextIdx);
        setInputVal(commandHistory[nextIdx]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIdx = historyIndex - 1;
        setHistoryIndex(nextIdx);
        setInputVal(commandHistory[nextIdx]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInputVal('');
      }
    }
  };

  return (
    <>
      {/* Floating Trigger Pill */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          soundManager.playClick();
          setIsOpen(!isOpen);
        }}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-black/90 hover:bg-black border border-emerald-500/50 hover:border-emerald-400 text-emerald-400 text-xs font-mono font-bold shadow-[0_0_25px_rgba(16,185,129,0.35)] transition-all group backdrop-blur-md"
        aria-label="Toggle Cyber Terminal"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <Terminal className="w-4 h-4 text-emerald-400 group-hover:text-emerald-300" />
        <span>CLI [ ~ ]</span>
      </motion.button>

      {/* Terminal Modal Drawer */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.95 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className={`w-full bg-[#030603]/98 border border-emerald-500/50 rounded-xl shadow-[0_0_60px_rgba(16,185,129,0.25)] flex flex-col overflow-hidden relative font-mono transition-all ${
                isMaximized ? 'h-[92vh] max-w-5xl' : 'h-[520px] max-w-3xl'
              }`}
              onClick={() => inputRef.current?.focus()}
            >
              {/* Scanlines Effect */}
              <div 
                className="absolute inset-0 pointer-events-none opacity-20 z-20"
                style={{
                  backgroundImage: 'repeating-linear-gradient(0deg, rgba(0,255,100,0.06) 0px, rgba(0,255,100,0.06) 1px, transparent 1px, transparent 3px)'
                }}
              />

              {/* Terminal Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#071107] border-b border-emerald-500/30 select-none z-30">
                <div className="flex items-center gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      soundManager.playClick();
                      setIsOpen(false);
                    }}
                    className="w-3 h-3 rounded-full bg-rose-500/80 hover:bg-rose-400 border border-rose-600 transition-colors"
                    title="Close [ESC]"
                  />
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      soundManager.playClick();
                      setIsOpen(false);
                    }}
                    className="w-3 h-3 rounded-full bg-amber-500/80 hover:bg-amber-400 border border-amber-600 transition-colors"
                    title="Minimize"
                  />
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      soundManager.playClick();
                      setIsMaximized(!isMaximized);
                    }}
                    className="w-3 h-3 rounded-full bg-emerald-500/80 hover:bg-emerald-400 border border-emerald-600 transition-colors"
                    title="Maximize / Restore"
                  >
                    {isMaximized ? <Minimize2 className="w-2 h-2 text-black mx-auto hidden" /> : <Maximize2 className="w-2 h-2 text-black mx-auto hidden" />}
                  </button>
                  <span className="text-xs font-semibold text-emerald-400/90 ml-2 tracking-wide flex items-center gap-2">
                    <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                    <span>guest@premsai-deck: ~ (bash 5.2)</span>
                  </span>
                </div>

                <div className="flex items-center gap-3 text-xs">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      const state = soundManager.toggle();
                      setAudioActive(state);
                    }}
                    className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 hover:text-emerald-200 hover:border-emerald-400 transition-all"
                    title="Toggle Audio SFX"
                  >
                    {audioActive ? <Volume2 className="w-3.5 h-3.5 text-emerald-400" /> : <VolumeX className="w-3.5 h-3.5 text-slate-500" />}
                    <span className="text-[10px] hidden sm:inline">{audioActive ? 'SFX ON' : 'SFX OFF'}</span>
                  </button>
                  <span className="text-slate-500 text-[11px] hidden sm:inline">[ESC to exit]</span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      soundManager.playClick();
                      setIsOpen(false);
                    }}
                    className="p-1 rounded text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Terminal Logs & Output */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3 z-10 text-xs sm:text-sm text-emerald-300/90 scrollbar-thin scrollbar-thumb-emerald-500/30 scrollbar-track-transparent">
                {outputLines.map((line) => {
                  if (line.type === 'system') {
                    return (
                      <pre key={line.id} className="text-emerald-400/80 font-mono whitespace-pre text-[10px] sm:text-xs leading-relaxed overflow-x-auto">
                        {line.text}
                      </pre>
                    );
                  }
                  if (line.type === 'info') {
                    return (
                      <div key={line.id} className="text-emerald-500/70 text-xs italic">
                        {line.text}
                      </div>
                    );
                  }
                  if (line.type === 'input') {
                    return (
                      <div key={line.id} className="text-slate-200 font-semibold flex items-center gap-1.5">
                        <span className="text-emerald-400 font-bold">guest@premsai</span>
                        <span className="text-slate-500">:</span>
                        <span className="text-cyan-400">~</span>
                        <span className="text-slate-500">$</span>
                        <span className="text-white ml-1">{line.text.replace('guest@premsai:~$ ', '')}</span>
                      </div>
                    );
                  }
                  if (line.type === 'error') {
                    return (
                      <pre key={line.id} className="text-rose-400 font-mono whitespace-pre-wrap leading-relaxed">
                        {line.text}
                      </pre>
                    );
                  }
                  if (line.type === 'success') {
                    return (
                      <pre key={line.id} className="text-emerald-300 font-mono whitespace-pre-wrap leading-relaxed font-semibold">
                        {line.text}
                      </pre>
                    );
                  }
                  return (
                    <pre key={line.id} className="text-emerald-300/90 font-mono whitespace-pre-wrap leading-relaxed">
                      {line.text}
                    </pre>
                  );
                })}
                <div ref={terminalEndRef} />
              </div>

              {/* Active Prompt Line */}
              <div className="p-3 bg-[#050a05] border-t border-emerald-500/30 flex items-center gap-2 z-30">
                <div className="flex items-center gap-1 text-xs shrink-0 select-none">
                  <span className="text-emerald-400 font-bold">guest@premsai</span>
                  <span className="text-slate-500">:</span>
                  <span className="text-cyan-400">~</span>
                  <span className="text-slate-500">$</span>
                </div>
                <input
                  ref={inputRef}
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="type 'help'..."
                  className="flex-1 bg-transparent text-emerald-200 font-mono text-xs sm:text-sm focus:outline-none placeholder:text-emerald-800/60 caret-emerald-400"
                  autoComplete="off"
                  spellCheck="false"
                />
                <button
                  onClick={() => handleCommand(inputVal)}
                  className="px-2 py-1 rounded bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-1 transition-colors"
                >
                  <span>RUN</span>
                  <CornerDownLeft className="w-3 h-3 text-emerald-400" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
