import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Bot, ShieldCheck, CheckCircle2, Sparkles, ExternalLink } from 'lucide-react';
import { cardHover } from '../../animations/variants';
import ElectricBorder from '../ui/ElectricBorder';

export default function FeaturedProject({ project }) {
  return (
    <ElectricBorder color="#10b981" speed={1.1} chaos={0.09} borderRadius={28} className="w-full">
      <motion.div
        variants={cardHover}
        initial="rest"
        whileHover="hover"
        className="group relative rounded-3xl bg-black/95 border border-emerald-500/30 hover:border-emerald-400/80 overflow-hidden transition-all duration-300 shadow-2xl shadow-black hover:shadow-[0_0_45px_rgba(16,185,129,0.3)]"
      >
        {/* Top radiant hacker green gradient line */}
        <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent" />

        {/* Ambient background glow inside card */}
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-green-500/8 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-8 sm:p-10 lg:p-12 items-center relative z-10">
          
          {/* Project Details */}
          <div className="lg:col-span-6 flex flex-col justify-center order-2 lg:order-1">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#10b981] animate-pulse" />
                <span>Featured Project</span>
              </div>
              {/* Handwritten Caveat annotation */}
              <span className="font-note text-base sm:text-lg text-emerald-400/90 font-medium tracking-wide flex items-center gap-1 transform -rotate-1">
                ✦ Automated interviews & proctoring
              </span>
            </div>

            <h3 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-white via-slate-100 to-emerald-200 bg-clip-text text-transparent">
                {project.title}
              </span>
            </h3>

          <p className="text-base text-emerald-400 font-medium mt-2">
            {project.category}
          </p>

          <p className="text-sm text-slate-300 font-light mt-4 leading-relaxed">
            {project.summary}
          </p>

          {/* Key capability bullets */}
          <div className="mt-6 space-y-2.5">
            {project.highlights.map((highlight, i) => (
              <div key={i} className="flex items-start gap-2.5 text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{highlight}</span>
              </div>
            ))}
          </div>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2 mt-8">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-md bg-emerald-500/10 text-[11px] font-medium text-emerald-300 border border-emerald-500/25"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-3.5 mt-8 pt-6 border-t border-emerald-500/20">
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-emerald-500 to-green-400 text-black font-bold text-xs shadow-[0_0_20px_rgba(16,185,129,0.45)] hover:shadow-[0_0_30px_rgba(0,255,136,0.65)] hover:scale-105 transition-all group/btn"
              >
                <span>Live Platform</span>
                <ExternalLink className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </a>
            )}

            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/80 hover:bg-emerald-950/40 text-slate-300 hover:text-white border border-emerald-500/35 font-medium text-xs transition-all group/btn"
            >
              <Github className="w-4 h-4 text-emerald-400" />
              <span>Source Code</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 text-slate-400" />
            </a>
          </div>
        </div>

        {/* Visual Mockup Container */}
        <div className="lg:col-span-6 order-1 lg:order-2">
          <div className="relative rounded-2xl overflow-hidden bg-black/95 border border-emerald-500/30 p-6 aspect-[16/11] flex flex-col justify-between shadow-xl shadow-black/80 group-hover:border-emerald-400/60 transition-all">
            
            {/* Mock Header UI */}
            <div className="flex items-center justify-between border-b border-emerald-500/20 pb-4">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80 shadow-[0_0_6px_#f43f5e]" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80 shadow-[0_0_6px_#f59e0b]" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 shadow-[0_0_6px_#10b981]" />
                <a 
                  href={project.links.demo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[11px] text-emerald-400/90 hover:text-emerald-300 underline underline-offset-2 font-mono ml-2 flex items-center gap-1"
                >
                  <span>orbit-project-lake.vercel.app</span>
                  <ExternalLink className="w-3 h-3 text-emerald-400/80" />
                </a>
              </div>
              <span className="inline-flex items-center gap-1.5 text-[10px] text-emerald-300 font-medium px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 shadow-[0_0_8px_rgba(16,185,129,0.3)]">
                <ShieldCheck className="w-3 h-3 text-emerald-400" />
                Live Demo
              </span>
            </div>

            {/* Mock Graphic Visual */}
            <div className="my-auto py-4 flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/35 flex items-center justify-center text-emerald-400 mb-4 shadow-[0_0_20px_rgba(16,185,129,0.25)]">
                <Bot className="w-8 h-8 text-emerald-400" />
              </div>
              <h4 className="text-sm font-semibold text-white tracking-wide">
                Intelligent Interview Engine
              </h4>
              <p className="text-xs text-slate-300 max-w-xs mt-1">
                Real-time audio-visual evaluation and multi-modal question generation
              </p>
            </div>

            {/* Mock Telemetry Metrics */}
            <div className="grid grid-cols-3 gap-2 pt-3 border-t border-emerald-500/20 text-center font-mono">
              <div className="bg-emerald-950/20 p-2 rounded-lg border border-emerald-500/20">
                <div className="text-[10px] text-emerald-400/80 uppercase">Latency</div>
                <div className="text-xs text-emerald-300 font-semibold mt-0.5">38ms</div>
              </div>
              <div className="bg-emerald-950/20 p-2 rounded-lg border border-emerald-500/20">
                <div className="text-[10px] text-emerald-400/80 uppercase">Accuracy</div>
                <div className="text-xs text-emerald-300 font-semibold mt-0.5">99.4%</div>
              </div>
              <div className="bg-emerald-950/20 p-2 rounded-lg border border-emerald-500/20">
                <div className="text-[10px] text-emerald-400/80 uppercase">Inference</div>
                <div className="text-xs text-emerald-300 font-semibold mt-0.5">Edge</div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </motion.div>
  </ElectricBorder>
  );
}
