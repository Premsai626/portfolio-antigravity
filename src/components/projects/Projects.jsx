import React from 'react';
import { motion } from 'framer-motion';
import { portfolio } from '../../data/portfolio';
import FeaturedProject from './FeaturedProject';
import SecondaryProjectCard from './SecondaryProjectCard';
import { scrollReveal } from '../../animations/variants';

export default function Projects() {
  const featured = portfolio.projects.find((p) => p.featured);
  const secondary = portfolio.projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-28 relative">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <motion.div
          variants={scrollReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mb-14"
        >
          <span className="font-mono text-xs text-cyan-400 font-medium mb-3 inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
            // 03. projects
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Things I've Built
          </h2>
          <p className="text-sm text-slate-400 mt-2 font-light max-w-xl">
            Selected full-stack web applications, machine learning tools, and hardware builds.
          </p>
        </motion.div>

        {/* 1. Dominant Featured Project (ORBIT) */}
        {featured && (
          <motion.div
            variants={scrollReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="mb-8"
          >
            <FeaturedProject project={featured} />
          </motion.div>
        )}

        {/* 2. Secondary Projects (Bento Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {secondary.map((proj, idx) => (
            <motion.div
              key={proj.id}
              variants={scrollReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: idx * 0.1 }}
            >
              <SecondaryProjectCard project={proj} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
