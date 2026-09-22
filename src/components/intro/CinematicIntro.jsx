import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function CinematicIntro({ onComplete }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2400);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0, 
        scale: 1.05,
        filter: "blur(10px)",
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
      }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#080911] select-none overflow-hidden"
    >
      {/* Rich ambient colored glow auras */}
      <div className="absolute top-1/3 left-1/3 w-96 h-96 rounded-full bg-indigo-600/15 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/3 w-96 h-96 rounded-full bg-cyan-500/12 blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-radial from-transparent via-[#080911]/80 to-[#080911] pointer-events-none" />

      <div className="relative flex flex-col items-center z-10">
        {/* Handwritten text with gradient & colorful glow */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="filter drop-shadow-[0_0_35px_rgba(99,102,241,0.45)] text-center"
        >
          <span className="inline-block font-handwriting text-6xl sm:text-7xl md:text-8xl leading-[1.3] px-8 pt-4 pb-8 sm:pb-10 bg-gradient-to-r from-indigo-200 via-white to-cyan-200 bg-clip-text text-transparent tracking-wide select-none">
            Portfolio
          </span>
        </motion.div>

        {/* Minimal colorful divider reveal */}
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 0.8, width: "70px" }}
          transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
          className="h-[2px] bg-gradient-to-r from-indigo-500 via-cyan-400 to-emerald-400 mt-1 rounded-full"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.85 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="text-xs uppercase tracking-[0.35em] text-indigo-300 font-sans mt-3 font-semibold"
        >
          Prem Sai
        </motion.p>
      </div>

      {/* Accessible skip button */}
      <button
        onClick={onComplete}
        className="absolute bottom-8 right-8 text-xs text-neutral-400 hover:text-white tracking-wider uppercase transition-all px-3.5 py-1.5 rounded-full border border-indigo-500/30 hover:border-cyan-400/50 hover:bg-indigo-500/10 cursor-pointer"
        aria-label="Skip introduction"
      >
        Skip ↵
      </button>
    </motion.div>
  );
}
