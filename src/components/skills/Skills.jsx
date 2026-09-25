import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { TECH_SKILLS } from '../../data/techIcons';
import { X, FolderGit2, Award } from 'lucide-react';

function FloatingSkillIcon({ skill, index, scrollYProgress, onSelect }) {
  const IconComponent = skill.icon;

  // Scroll convergence: smooth transition from spread (far) to gathered (close)
  const leftPos = useTransform(
    scrollYProgress,
    [0, 1],
    [`calc(50% + ${skill.initPos.x}%)`, `calc(50% + ${skill.convergedPos.x}%)`]
  );

  const topPos = useTransform(
    scrollYProgress,
    [0, 1],
    [`calc(50% + ${skill.initPos.y}%)`, `calc(50% + ${skill.convergedPos.y}%)`]
  );

  // Staggered floating zero-gravity oscillation
  const floatDuration = 3.6 + (index % 4) * 0.6;
  const floatDelay = (index * 0.2) % 1.5;

  return (
    <motion.div
      style={{ left: leftPos, top: topPos }}
      className="absolute -translate-x-1/2 -translate-y-1/2 z-10 hover:z-30 transition-[z-index]"
    >
      <motion.button
        type="button"
        title={skill.name}
        animate={{
          y: [0, -6, 0],
          rotate: [0, index % 2 === 0 ? 2 : -2, 0]
        }}
        transition={{
          duration: floatDuration,
          repeat: Infinity,
          ease: "easeInOut",
          delay: floatDelay
        }}
        whileHover={{ scale: 1.25 }}
        whileTap={{ scale: 0.92 }}
        onClick={() => onSelect(skill)}
        className={`${skill.size} rounded-xl sm:rounded-2xl ${skill.bg} border ${skill.border} ${skill.glow} shadow-xl backdrop-blur-md cursor-pointer flex items-center justify-center transition-all duration-300 group hover:shadow-[0_0_35px_rgba(255,255,255,0.25)]`}
        aria-label={`View summary for ${skill.name}`}
      >
        <div className="transition-transform duration-300 group-hover:scale-110">
          <IconComponent />
        </div>
      </motion.button>
    </motion.div>
  );
}

export default function Skills() {
  const sectionRef = useRef(null);
  const [selectedSkill, setSelectedSkill] = useState(null);

  // Track scroll position of the section:
  // When scrolling into section (start end) -> 0
  // When section is centered in viewport (center center) -> 1
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"]
  });

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedSkill(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section 
      id="skills" 
      ref={sectionRef} 
      className="py-10 sm:py-20 relative overflow-hidden min-h-[520px] sm:min-h-[700px] lg:min-h-[820px] flex items-center justify-center select-none"
    >
      {/* Background ambient radial aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[750px] h-[450px] sm:h-[600px] bg-emerald-600/8 rounded-full blur-[140px] sm:blur-[170px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] sm:w-[500px] h-[300px] sm:h-[400px] bg-green-500/6 rounded-full blur-[120px] sm:blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3 sm:px-4 w-full relative h-[480px] sm:h-[650px] lg:h-[760px] flex items-center justify-center">
        
        {/* Floating Skill Logo Tiles (Strictly Prem Sai's actual 14 skills, brand icons only) */}
        {TECH_SKILLS.map((skill, idx) => (
          <FloatingSkillIcon
            key={skill.id}
            skill={skill}
            index={idx}
            scrollYProgress={scrollYProgress}
            onSelect={setSelectedSkill}
          />
        ))}

        {/* Central Focus Card (Render.com Style - Clean, Compact & Mobile-Optimized) */}
        <div className="relative z-20 max-w-[190px] sm:max-w-xs md:max-w-sm text-center px-4 py-3.5 sm:px-8 sm:py-7 rounded-2xl sm:rounded-3xl bg-black/95 backdrop-blur-2xl border border-emerald-500/30 shadow-2xl shadow-black">
          {/* Radiant Top Line */}
          <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent" />

          {/* Developer Monospace Section Indicator */}
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 font-mono text-[10px] sm:text-xs text-emerald-400 mb-2 sm:mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#10b981]" />
            <span>// 02. stack</span>
          </div>

          {/* Main Headline */}
          <h2 className="font-heading text-base sm:text-2xl md:text-3xl font-bold tracking-tight text-white leading-snug">
            What I Build With
          </h2>
        </div>

      </div>

      {/* Interactive Skill Detail Modal (Mobile-Optimized) */}
      <AnimatePresence>
        {selectedSkill && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedSkill(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-3.5 sm:p-6 bg-black/80 backdrop-blur-md cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className={`relative w-full max-w-sm sm:max-w-md rounded-2xl sm:rounded-3xl ${selectedSkill.bg} border ${selectedSkill.border} p-5 sm:p-8 shadow-2xl shadow-black text-left overflow-hidden cursor-default`}
            >
              {/* Top Accent Line */}
              <div 
                className="absolute inset-x-0 top-0 h-[3px]"
                style={{ background: `linear-gradient(to right, transparent, ${selectedSkill.color}, transparent)` }}
              />

              {/* Close Button */}
              <button
                onClick={() => setSelectedSkill(null)}
                className="absolute top-4 right-4 sm:top-5 sm:right-5 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Header: Icon & Title */}
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-black/40 border border-white/10 flex items-center justify-center shrink-0 shadow-inner">
                  {React.createElement(selectedSkill.icon)}
                </div>
                <div>
                  <span className="text-[10px] sm:text-[11px] uppercase tracking-wider font-bold text-cyan-300 block mb-0.5 sm:mb-1">
                    {selectedSkill.category}
                  </span>
                  <h3 className="font-heading text-lg sm:text-2xl font-bold text-white tracking-tight">
                    {selectedSkill.name}
                  </h3>
                </div>
              </div>

              {/* Summary Description */}
              <p className="text-xs sm:text-sm text-slate-200 font-light leading-relaxed mb-4 sm:mb-6">
                {selectedSkill.summary}
              </p>

              {/* Projects Used In */}
              {selectedSkill.projects && selectedSkill.projects.length > 0 && (
                <div className="mb-3 sm:mb-4">
                  <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5 sm:mb-2">
                    <FolderGit2 className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Applied in Projects</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedSkill.projects.map((proj) => (
                      <span
                        key={proj}
                        className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md sm:rounded-lg text-[11px] sm:text-xs font-medium bg-black/40 border border-white/15 text-slate-200"
                      >
                        {proj}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Credentials / Certification Badge */}
              {selectedSkill.credentials && (
                <div className="pt-3 sm:pt-4 border-t border-white/10 flex items-center gap-2 text-[11px] sm:text-xs text-amber-300 font-medium">
                  <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 shrink-0" />
                  <span>{selectedSkill.credentials}</span>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
