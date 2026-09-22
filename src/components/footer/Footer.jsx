import React from 'react';
import { Github, Linkedin, Mail, ArrowUp, ArrowUpRight } from 'lucide-react';
import { portfolio } from '../../data/portfolio';

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
      color: "hover:text-white hover:border-cyan-400/60 hover:bg-cyan-500/10",
      iconColor: "text-cyan-400"
    },
    {
      name: "LinkedIn",
      href: portfolio.links.linkedin,
      handle: "in/premsai02",
      icon: Linkedin,
      color: "hover:text-white hover:border-indigo-400/60 hover:bg-indigo-500/10",
      iconColor: "text-indigo-400"
    },
    {
      name: "Instagram",
      href: portfolio.links.instagram,
      handle: "@__premsai05_",
      icon: InstagramIcon,
      color: "hover:text-white hover:border-pink-400/60 hover:bg-pink-500/10",
      iconColor: "text-pink-400"
    },
    {
      name: "Gmail / Email",
      href: portfolio.links.email,
      handle: "ippilipremsai12356@gmail.com",
      icon: Mail,
      color: "hover:text-white hover:border-[#ff5e3a]/60 hover:bg-[#ff3b11]/10",
      iconColor: "text-[#ff5e3a]"
    }
  ];

  return (
    <footer className="relative border-t border-indigo-500/20 bg-[#07080f]/90 backdrop-blur-xl py-12 overflow-hidden">
      {/* Ambient top radiant flare */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 via-[#ff5e3a] to-transparent" />
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-96 h-40 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

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
                className={`flex items-center justify-between p-3 px-4 rounded-2xl bg-slate-950/70 border border-slate-800/80 text-xs text-slate-300 transition-all duration-200 group ${item.color} shadow-lg shadow-black/30 hover:scale-[1.02]`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-slate-900 border border-slate-700/60 flex items-center justify-center shrink-0">
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
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex flex-wrap items-center gap-2 font-mono text-[11px] text-slate-400">
            <span>Built by Prem Sai with React & Tailwind CSS</span>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <span className="text-slate-500 hidden sm:inline">Hyderabad, IN</span>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <span className="text-slate-500">© 2026</span>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/60 hover:border-cyan-400/60 hover:text-white transition-all cursor-pointer group text-xs text-slate-300 shadow-sm"
            aria-label="Scroll to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-cyan-400 transition-transform duration-200 group-hover:-translate-y-0.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
