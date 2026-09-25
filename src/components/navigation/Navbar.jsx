import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Github, Linkedin, FileText } from 'lucide-react';
import { useScrollProgress } from '../../hooks/useScrollProgress';
import { portfolio } from '../../data/portfolio';
import { soundManager } from '../../utils/audio';

export default function Navbar() {
  const { isScrolled } = useScrollProgress();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Certificates", href: "#certificates" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/90 backdrop-blur-xl border-b border-emerald-500/20 py-3.5 shadow-lg shadow-black/80'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#hero"
          onMouseEnter={soundManager.playHover}
          onClick={soundManager.playClick}
          className="font-heading font-bold text-lg tracking-tight text-white flex items-center gap-2.5 group"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_#10b981]" />
          <span className="bg-gradient-to-r from-white via-slate-100 to-emerald-300 bg-clip-text text-transparent group-hover:from-white group-hover:to-emerald-400 transition-all">
            PREM SAI
          </span>
          <span className="font-mono text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hidden sm:inline">
            v2.0
          </span>
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onMouseEnter={soundManager.playHover}
              onClick={soundManager.playClick}
              className="text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Secondary Actions (Desktop) */}
        <div className="hidden md:flex items-center gap-2.5">
          <a
            href={portfolio.links.github}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={soundManager.playHover}
            onClick={soundManager.playClick}
            className="p-2 rounded-lg text-slate-300 hover:text-emerald-400 hover:bg-emerald-500/15 border border-transparent hover:border-emerald-500/30 transition-all"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={portfolio.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={soundManager.playHover}
            onClick={soundManager.playClick}
            className="p-2 rounded-lg text-slate-300 hover:text-emerald-400 hover:bg-emerald-500/15 border border-transparent hover:border-emerald-500/30 transition-all"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={portfolio.links.resume}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={soundManager.playHover}
            onClick={soundManager.playClick}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-emerald-600/30 to-green-600/30 hover:from-emerald-600/50 hover:to-green-500/50 text-emerald-300 hover:text-white border border-emerald-500/40 shadow-[0_0_15px_rgba(16,185,129,0.25)] transition-all"
          >
            <FileText className="w-3.5 h-3.5 text-emerald-400" />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => {
            soundManager.playClick();
            setMobileMenuOpen(!mobileMenuOpen);
          }}
          className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#040804] border-b border-emerald-500/25 px-6 py-5 shadow-2xl"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-slate-200 hover:text-emerald-400 py-1 transition-colors"
                >
                  {link.name}
                </a>
              ))}

              <div className="pt-3 border-t border-slate-800 flex items-center gap-4">
                <a
                  href={portfolio.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-slate-300 hover:text-emerald-400"
                >
                  <Github className="w-4 h-4 text-emerald-400" />
                  <span>GitHub</span>
                </a>
                <a
                  href={portfolio.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-slate-300 hover:text-emerald-400"
                >
                  <Linkedin className="w-4 h-4 text-emerald-400" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={portfolio.links.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-emerald-300 font-medium"
                >
                  <FileText className="w-4 h-4 text-emerald-400" />
                  <span>Resume</span>
                  <ArrowUpRight className="w-3 h-3 text-emerald-400" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
