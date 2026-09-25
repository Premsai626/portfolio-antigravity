import React from 'react';
import { Github, Linkedin, Mail, ArrowUp, ArrowUpRight, Terminal, Cpu } from 'lucide-react';
import { portfolio } from '../../data/portfolio';
import { soundManager } from '../../utils/audio';

const InstagramIcon = ({ className }) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const connectionLinks = [
    {
      name: "GitHub",
      href: portfolio.links.github,
      handle: "@Premsai626",
      icon: Github,
      color: "hover:text-white hover:border-emerald-400/60 hover:bg-emerald-500/10",
      iconColor: "text-emerald-400"
    },
    {
      name: "LinkedIn",
      href: portfolio.links.linkedin,
      handle: "in/premsai02",
      icon: Linkedin,
      color: "hover:text-white hover:border-emerald-400/60 hover:bg-emerald-500/10",
      iconColor: "text-emerald-400"
    },
    {
      name: "Instagram",
      href: portfolio.links.instagram,
      handle: "@__premsai05_",
      icon: InstagramIcon,
      color: "hover:text-white hover:border-emerald-400/60 hover:bg-emerald-500/10",
      iconColor: "text-emerald-400"
    },
    {
      name: "Gmail / Email",
      href: portfolio.links.email,
      handle: "ippilipremsai12356@gmail.com",
      icon: Mail,
      color: "hover:text-white hover:border-emerald-400/60 hover:bg-emerald-500/10",
      iconColor: "text-emerald-400"
    }
  ];

  return (
    <footer className="relative border-t border-emerald-500/20 bg-black/95 backdrop-blur-xl py-12 overflow-hidden">
      {/* Ambient top radiant flare */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent" />
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-96 h-40 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Only Connection Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 pb-10 border-b border-slate-800/80">
          {connectionLinks.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={soundManager.playHover}
                onClick={soundManager.playClick}
                className={`flex items-center justify-between p-3 px-4 rounded-2xl bg-black/90 border border-emerald-500/20 text-xs text-slate-300 transition-all duration-200 group ${item.color} shadow-lg shadow-black/50 hover:scale-[1.02]`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-black border border-emerald-500/30 flex items-center justify-center shrink-0">
                    <Icon className={`w-4 h-4 ${item.iconColor}`} />
                  </div>
                  <div>
                    <span className="font-semibold text-white block">{item.name}</span>
                    <span className="text-[11px] text-slate-400 font-mono block truncate max-w-[120px]">
                      {item.handle}
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-500 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white shrink-0 ml-2" />
              </a>
            );
          })}
        </div>

        {/* Bottom Bar: Developer Credit & Back to Top */}
        <div className="pt-6 pb-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex flex-wrap items-center gap-2 font-mono text-[11px] text-slate-400">
            <span>Built by Prem Sai with React & Tailwind CSS</span>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <span className="text-emerald-400 hidden sm:inline">Hyderabad, IN</span>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <span className="text-slate-500">© 2026</span>
          </div>

          <button
            onClick={() => {
              soundManager.playClick();
              scrollToTop();
            }}
            onMouseEnter={soundManager.playHover}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/90 border border-emerald-500/30 hover:border-emerald-400/60 hover:text-white transition-all cursor-pointer group text-xs text-emerald-300 shadow-sm"
            aria-label="Scroll to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-emerald-400 transition-transform duration-200 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* VS Code / Neovim Style Hacker Status Bar */}
        <div className="pt-3 border-t border-emerald-500/15 flex flex-wrap items-center justify-between gap-3 text-[10px] font-mono text-slate-500 select-none">
          <div className="flex items-center gap-2">
            <span className="px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-bold">
              SYS::NORMAL
            </span>
            <span className="text-emerald-400/80 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping inline-block" />
              <span>ONLINE</span>
            </span>
          </div>
          <div className="flex items-center gap-3 text-slate-400">
            <span>UTF-8</span>
            <span className="text-slate-700">|</span>
            <span>TypeScript 5.4</span>
            <span className="text-slate-700">|</span>
            <span className="text-emerald-400">100% Cyberdeck</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
