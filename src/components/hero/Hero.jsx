import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { portfolio } from '../../data/portfolio';
import portraitImg from '../../assets/profile/portrait.jpeg';
import { buttonHover, imageReveal } from '../../animations/variants';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-24 sm:pt-32 pb-14 sm:pb-20 flex items-center justify-center overflow-hidden"
    >
      {/* Dynamic Multi-Color Ambient Glow Lighting with Electric Sunset */}
      <div className="absolute top-1/4 left-1/4 w-[480px] h-[480px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[520px] h-[520px] bg-cyan-500/12 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 w-[380px] h-[380px] bg-[#ff3b11]/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-5 sm:px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Typography / Identity Column */}
          <div className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-1">
            
            {/* Live Developer Availability Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 w-fit mb-4 sm:mb-6 shadow-[0_0_15px_rgba(16,185,129,0.15)]"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              <span className="font-mono text-[11px] sm:text-xs tracking-tight">{portfolio.status}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05]"
            >
              <span className="bg-gradient-to-r from-white via-slate-100 to-indigo-200 bg-clip-text text-transparent">
                PREM
              </span>{" "}
              <span className="bg-gradient-to-r from-indigo-300 via-cyan-300 to-emerald-300 bg-clip-text text-transparent">
                SAI
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="text-base sm:text-xl text-slate-300 font-light mt-4 sm:mt-6 max-w-xl leading-relaxed"
            >
              {portfolio.hero.tagline}
            </motion.p>

            {/* Quick Developer Metadata */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="flex items-center gap-3 mt-3 sm:mt-4 text-[11px] sm:text-xs font-mono text-slate-400"
            >
              <span>📍 {portfolio.location}</span>
              <span className="text-slate-600">•</span>
              <span>🎓 MLRIT CSM</span>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex flex-wrap items-center gap-3 sm:gap-4 mt-6 sm:mt-8"
            >
              <motion.a
                variants={buttonHover}
                initial="rest"
                whileHover="hover"
                whileTap="tap"
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-7 sm:py-3.5 rounded-full bg-gradient-to-r from-indigo-500 via-cyan-500 to-emerald-400 text-slate-950 font-semibold text-xs sm:text-sm shadow-[0_0_25px_rgba(56,189,248,0.4)] hover:shadow-[0_0_35px_rgba(255,94,58,0.5)] transition-all"
              >
                <span>{portfolio.hero.primaryAction.label}</span>
                <ArrowDown className="w-4 h-4 text-slate-950" />
              </motion.a>

              <motion.a
                variants={buttonHover}
                initial="rest"
                whileHover="hover"
                whileTap="tap"
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-7 sm:py-3.5 rounded-full bg-slate-900/80 hover:bg-indigo-950/40 text-cyan-200 border border-cyan-500/30 hover:border-cyan-400/60 text-xs sm:text-sm font-medium transition-all shadow-[0_0_15px_rgba(6,182,212,0.1)]"
              >
                <span>{portfolio.hero.secondaryAction.label}</span>
                <ArrowUpRight className="w-4 h-4 text-cyan-400" />
              </motion.a>
            </motion.div>
          </div>

          {/* Editorial Portrait Column with Rich Multi-Color Glow Frame */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end order-1 lg:order-2 relative">
            
            {/* Handwritten callout pointing to portrait */}
            <div className="absolute -top-8 -left-4 sm:-top-10 sm:-left-10 hidden sm:flex items-center gap-2 pointer-events-none z-20">
              <span className="font-note text-xl md:text-2xl text-amber-300 font-semibold tracking-wide transform -rotate-6 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                Hey, I'm Prem ✦
              </span>
              <svg className="w-8 h-8 text-amber-300 transform rotate-12" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M5,10 Q20,5 30,25 M22,25 L30,25 L30,17" />
              </svg>
            </div>

            <motion.div
              variants={imageReveal}
              initial="hidden"
              animate="visible"
              className="relative group w-full max-w-[220px] sm:max-w-[320px] md:max-w-[380px] aspect-[4/5]"
            >
              {/* Vibrant ambient color glow aura behind the portrait */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-indigo-500/35 via-cyan-400/30 via-[#ff5e3a]/25 to-emerald-400/35 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Portrait Container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/15 bg-slate-900 shadow-2xl">
                <img
                  src={portraitImg}
                  alt="Prem Sai"
                  className="w-full h-full object-cover grayscale contrast-110 brightness-95 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                
                {/* Subtle cyber scanline & gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-transparent opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-950/30 via-transparent to-cyan-950/20 mix-blend-color" />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
