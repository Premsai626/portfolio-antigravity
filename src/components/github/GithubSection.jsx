import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';
import { portfolio } from '../../data/portfolio';
import { scrollReveal } from '../../animations/variants';

export default function GithubSection() {
  return (
    <section className="py-20 relative">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        <motion.div
          variants={scrollReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="relative rounded-3xl bg-gradient-to-r from-indigo-950/40 via-slate-900/70 to-cyan-950/40 border border-indigo-500/30 hover:border-cyan-400/50 p-8 sm:p-10 transition-all duration-300 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl shadow-indigo-950/30 hover:shadow-[0_0_35px_rgba(99,102,241,0.2)]"
        >
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-indigo-500/20 to-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-300 shrink-0 shadow-inner">
              <Github className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {portfolio.github.title}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 font-light mt-1 max-w-md">
                {portfolio.github.description}
              </p>
            </div>
          </div>

          <a
            href={portfolio.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] text-xs font-semibold transition-all group shrink-0"
          >
            <span>Visit Profile</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
