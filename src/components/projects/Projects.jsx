import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolio } from '../../data/portfolio';
import FeaturedProject from './FeaturedProject';
import SecondaryProjectCard from './SecondaryProjectCard';
import { scrollReveal } from '../../animations/variants';
import { soundManager } from '../../utils/audio';
import { Layers, Cpu, Globe, Sparkles } from 'lucide-react';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const filterTabs = [
    { id: 'ALL', label: 'ALL SYSTEMS', icon: Layers },
    { id: 'FULL_STACK', label: 'FULL-STACK WEB', icon: Globe },
    { id: 'AI_ML', label: 'AI & VISION', icon: Sparkles },
    { id: 'HARDWARE_IOT', label: 'HARDWARE & IOT', icon: Cpu }
  ];

  const matchesFilter = (project, filter) => {
    if (filter === 'ALL') return true;
    const tags = (project.tags || []).map(t => t.toLowerCase());
    const cat = (project.category || '').toLowerCase();
    
    if (filter === 'FULL_STACK') {
      return tags.some(t => ['react', 'fastapi', 'node.js', 'web audio api', 'tailwind css'].includes(t)) || cat.includes('platform') || cat.includes('studio');
    }
    if (filter === 'AI_ML') {
      return tags.some(t => ['opencv', 'python', 'nlp', 'face-api'].includes(t)) || cat.includes('proctoring') || cat.includes('nlp');
    }
    if (filter === 'HARDWARE_IOT') {
      return tags.some(t => ['embedded c', 'arduino', 'iot', 'ultrasonic'].includes(t)) || cat.includes('robotics') || cat.includes('embedded');
    }
    return true;
  };

  const filteredProjects = useMemo(() => {
    return portfolio.projects.filter(p => matchesFilter(p, activeFilter));
  }, [activeFilter]);

  const featured = filteredProjects.find(p => p.featured);
  const secondary = filteredProjects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-28 relative">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <motion.div
            variants={scrollReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <span className="font-mono text-xs text-emerald-400 font-medium mb-3 inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#10b981]" />
              // 03. projects
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Things I've Built
            </h2>
            <p className="text-sm text-slate-400 mt-2 font-light max-w-xl">
              Selected full-stack web applications, machine learning tools, and hardware builds.
            </p>
          </motion.div>

          {/* Interactive Cyber Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
            {filterTabs.map((tab) => {
              const Icon = tab.icon;
              const count = portfolio.projects.filter(p => matchesFilter(p, tab.id)).length;
              const isActive = activeFilter === tab.id;

              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    soundManager.playClick();
                    setActiveFilter(tab.id);
                  }}
                  onMouseEnter={soundManager.playHover}
                  className={`relative flex items-center gap-2 px-3.5 py-1.5 rounded-full border transition-all cursor-pointer ${
                    isActive
                      ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.3)]'
                      : 'bg-black/60 text-slate-400 border-emerald-500/20 hover:border-emerald-500/50 hover:text-slate-200'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-emerald-400' : 'text-slate-500'}`} />
                  <span>{tab.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                    isActive ? 'bg-emerald-400 text-black' : 'bg-slate-800 text-slate-400'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 1. Dominant Featured Project (ORBIT) */}
        <AnimatePresence mode="popLayout">
          {featured && (
            <motion.div
              key={featured.id}
              layout
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3 }}
              className="mb-8"
            >
              <FeaturedProject project={featured} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* 2. Secondary Projects (Bento Grid) */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {secondary.map((proj) => (
              <motion.div
                key={proj.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
              >
                <SecondaryProjectCard project={proj} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16 text-slate-500 font-mono text-sm border border-dashed border-emerald-500/20 rounded-xl bg-black/40">
            No active projects found under this classification.
          </div>
        )}

      </div>
    </section>
  );
}
