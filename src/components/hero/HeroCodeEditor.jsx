import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, FileCode, Image as ImageIcon, Copy, Check, Terminal as TerminalIcon } from 'lucide-react';
import portraitImg from '../../assets/profile/portrait.jpeg';
import { portfolio } from '../../data/portfolio';
import { soundManager } from '../../utils/audio';

export default function HeroCodeEditor() {
  const [activeTab, setActiveTab] = useState('editor'); // 'editor' | 'json' | 'portrait'
  const [copied, setCopied] = useState(false);

  const developerTsCode = `// developer.ts — Operative Profile
import { MLRIT, FullStack, MachineLearning } from '@premsai/core';

export const operative: Developer = {
  name: "Prem Sai",
  title: "Full-Stack Developer & CS Undergrad",
  location: "Hyderabad, India",
  education: {
    institution: "MLR Institute of Technology",
    branch: "Computer Science & Machine Learning (CSM)",
    status: "Undergrad"
  },
  status: "AVAILABLE_FOR_ROLES",
  arsenal: [
    "React.js", "Python", "FastAPI",
    "OpenCV", "Node.js", "AWS", "IoT"
  ],
  passion: () => "Bridging software elegance & machine intelligence"
};`;

  const skillsJsonCode = JSON.stringify({
    languages: portfolio.skills.languages,
    frontend: portfolio.skills.web,
    backend: portfolio.skills.backend,
    databases: portfolio.skills.database,
    cloud_and_tools: portfolio.skills.tools,
    awards: ["1st Place Winner Web Dev Hackathon (Workshop Carnival 2.0)"],
    status: portfolio.status
  }, null, 2);

  const handleCopy = () => {
    const textToCopy = activeTab === 'json' ? skillsJsonCode : developerTsCode;
    navigator.clipboard?.writeText(textToCopy);
    soundManager.playClick();
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-[440px] mx-auto lg:mx-0 relative select-none">
      {/* Ambient Emerald Glow Backing */}
      <div className="absolute -inset-1.5 bg-gradient-to-tr from-emerald-500/30 via-green-400/20 to-teal-400/25 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity" />

      {/* Editor Window Shell */}
      <div className="relative rounded-xl overflow-hidden border border-emerald-500/40 bg-[#040804]/95 shadow-[0_0_40px_rgba(16,185,129,0.25)] flex flex-col font-mono text-xs">
        
        {/* Editor Titlebar & Tabs */}
        <div className="flex items-center justify-between px-3 py-2 bg-[#061206] border-b border-emerald-500/30">
          {/* Window dots */}
          <div className="flex items-center gap-1.5 mr-2 shrink-0">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
          </div>

          {/* Interactive File Tabs */}
          <div className="flex items-center gap-1 overflow-x-auto scrollbar-none py-0.5">
            <button
              onClick={() => {
                soundManager.playClick();
                setActiveTab('editor');
              }}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-medium transition-all ${
                activeTab === 'editor'
                  ? 'bg-black/90 text-emerald-300 border border-emerald-500/50 shadow-[0_0_10px_rgba(16,185,129,0.25)]'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-emerald-950/30'
              }`}
            >
              <FileCode className="w-3.5 h-3.5 text-cyan-400" />
              <span>developer.ts</span>
            </button>

            <button
              onClick={() => {
                soundManager.playClick();
                setActiveTab('json');
              }}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-medium transition-all ${
                activeTab === 'json'
                  ? 'bg-black/90 text-emerald-300 border border-emerald-500/50 shadow-[0_0_10px_rgba(16,185,129,0.25)]'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-emerald-950/30'
              }`}
            >
              <Code2 className="w-3.5 h-3.5 text-amber-400" />
              <span>skills.json</span>
            </button>

            <button
              onClick={() => {
                soundManager.playClick();
                setActiveTab('portrait');
              }}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-medium transition-all ${
                activeTab === 'portrait'
                  ? 'bg-black/90 text-emerald-300 border border-emerald-500/50 shadow-[0_0_10px_rgba(16,185,129,0.25)]'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-emerald-950/30'
              }`}
            >
              <ImageIcon className="w-3.5 h-3.5 text-emerald-400" />
              <span>portrait.raw</span>
            </button>
          </div>

          {/* Copy Button */}
          {activeTab !== 'portrait' && (
            <button
              onClick={handleCopy}
              className="p-1 rounded text-slate-400 hover:text-emerald-300 hover:bg-emerald-950/50 transition-colors ml-2 shrink-0"
              title="Copy Code"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          )}
        </div>

        {/* Content Area */}
        <div className="relative min-h-[340px] max-h-[420px] overflow-hidden flex flex-col bg-[#020502]">
          {/* Subtle Scanline Overlay */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-15 z-10"
            style={{
              backgroundImage: 'repeating-linear-gradient(0deg, rgba(0,255,100,0.06) 0px, rgba(0,255,100,0.06) 1px, transparent 1px, transparent 3px)'
            }}
          />

          <AnimatePresence mode="wait">
            {activeTab === 'editor' && (
              <motion.div
                key="editor"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="p-3.5 overflow-y-auto flex-1 font-mono text-[11px] leading-relaxed text-slate-300 select-text"
              >
                <div className="text-slate-500 italic mb-2">// TypeScript definition</div>
                <div className="space-y-1">
                  <div>
                    <span className="text-emerald-400">import</span> &#123; <span className="text-amber-300">MLRIT</span>, <span className="text-amber-300">FullStack</span>, <span className="text-amber-300">MachineLearning</span> &#125; <span className="text-emerald-400">from</span> <span className="text-teal-300">'@premsai/core'</span>;
                  </div>
                  <div className="h-2" />
                  <div>
                    <span className="text-emerald-400">export const</span> <span className="text-cyan-300 font-semibold">operative</span>: <span className="text-amber-300">Developer</span> = &#123;
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">name:</span> <span className="text-teal-300">"{portfolio.name}"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">role:</span> <span className="text-teal-300">"{portfolio.role}"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">location:</span> <span className="text-teal-300">"{portfolio.location}"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">education:</span> &#123;
                  </div>
                  <div className="pl-8">
                    <span className="text-slate-400">institution:</span> <span className="text-teal-300">"{portfolio.about.institution}"</span>,
                  </div>
                  <div className="pl-8">
                    <span className="text-slate-400">degree:</span> <span className="text-teal-300">"CSM Undergrad"</span>
                  </div>
                  <div className="pl-4">&#125;,</div>
                  <div className="pl-4">
                    <span className="text-slate-400">status:</span> <span className="text-emerald-400 font-bold">"{portfolio.status}"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">coreStack:</span> [
                  </div>
                  <div className="pl-8 text-emerald-300">
                    "React.js", "Python", "FastAPI", "OpenCV", "AWS", "IoT"
                  </div>
                  <div className="pl-4">],</div>
                  <div className="pl-4">
                    <span className="text-slate-400">execute:</span> () =&gt; <span className="text-teal-300">"Turning code into cyber reality"</span>
                  </div>
                  <div>&#125;;</div>
                </div>
              </motion.div>
            )}

            {activeTab === 'json' && (
              <motion.div
                key="json"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="p-3.5 overflow-y-auto flex-1 font-mono text-[11px] leading-relaxed text-emerald-300/90 select-text"
              >
                <pre className="whitespace-pre-wrap">{skillsJsonCode}</pre>
              </motion.div>
            )}

            {activeTab === 'portrait' && (
              <motion.div
                key="portrait"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="relative flex-1 w-full h-[360px] overflow-hidden"
              >
                <img
                  src={portraitImg}
                  alt="Prem Sai"
                  className="w-full h-full object-cover grayscale contrast-110 brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 p-2 rounded bg-black/80 backdrop-blur-xs border border-emerald-500/40 text-[10px] text-emerald-300 font-mono flex items-center justify-between">
                  <span>PREM SAI — MLRIT</span>
                  <span className="text-emerald-400 font-bold">RAW SENSOR FEED</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Neovim Style Bottom Statusline */}
        <div className="flex items-center justify-between px-3 py-1.5 bg-[#051105] border-t border-emerald-500/30 text-[10px] text-slate-400">
          <div className="flex items-center gap-2">
            <span className="px-1.5 py-0.5 rounded bg-emerald-500 text-black font-bold font-mono text-[9px]">
              NORMAL
            </span>
            <span className="text-emerald-400">
              git:(<span className="text-cyan-300 font-bold">main*</span>)
            </span>
          </div>
          <div className="flex items-center gap-2 font-mono text-[10px]">
            <span className="text-slate-500">UTF-8</span>
            <span className="text-slate-600">|</span>
            <span className="text-emerald-400 font-semibold">
              {activeTab === 'editor' ? 'TypeScript' : activeTab === 'json' ? 'JSON' : 'JPEG'}
            </span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-300">100%</span>
          </div>
        </div>

      </div>
    </div>
  );
}
