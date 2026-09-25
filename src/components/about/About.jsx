import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Terminal, Globe, Cpu } from 'lucide-react';
import { portfolio } from '../../data/portfolio';
import { scrollReveal } from '../../animations/variants';

function TypewriterBio({ text }) {
  const [displayedText, setDisplayedText] = useState('');
  const [isDone, setIsDone] = useState(false);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-60px" });

  useEffect(() => {
    if (!isInView) return;

    let currentIndex = 0;

    // Small delay after section comes into view before typing begins
    const startDelay = setTimeout(() => {
      const interval = setInterval(() => {
        currentIndex++;
        if (currentIndex <= text.length) {
          setDisplayedText(text.slice(0, currentIndex));
        } else {
          clearInterval(interval);
          setIsDone(true);
        }
      }, 15); // Snappy, dynamic typing speed

      return () => clearInterval(interval);
    }, 250);

    return () => clearTimeout(startDelay);
  }, [isInView, text]);

  return (
    <div ref={containerRef} className="relative min-h-[130px] sm:min-h-[120px] md:min-h-[100px]">
      <h2 className="font-heading text-lg sm:text-2xl md:text-3xl lg:text-4xl text-slate-100 font-semibold leading-relaxed tracking-tight">
        <span>{displayedText}</span>
        <span
          className={`inline-block ml-1.5 w-[2.5px] sm:w-[4px] h-[0.85em] bg-emerald-400 align-middle shadow-[0_0_12px_#10b981] rounded-sm ${
            isDone ? 'animate-pulse opacity-75' : 'animate-[ping_0.8s_ease-in-out_infinite]'
          }`}
        />
      </h2>
    </div>
  );
}

export default function About() {
  const pillars = [
    { 
      icon: Globe, 
      label: "Full-Stack Web", 
      desc: "Interactive React SPAs, REST APIs & modern UI state",
      color: "from-emerald-950/40 via-black to-black",
      border: "border-emerald-500/25 hover:border-emerald-400/60",
      iconColor: "text-emerald-400",
      iconBg: "bg-emerald-500/10 border-emerald-500/30",
      glow: "group-hover:shadow-[0_0_25px_rgba(16,185,129,0.25)]"
    },
    { 
      icon: Cpu, 
      label: "Machine Learning & Vision", 
      desc: "FastAPI inference services & computer vision models",
      color: "from-green-950/40 via-black to-black",
      border: "border-emerald-500/25 hover:border-emerald-400/60",
      iconColor: "text-emerald-300",
      iconBg: "bg-emerald-500/10 border-emerald-500/30",
      glow: "group-hover:shadow-[0_0_25px_rgba(16,185,129,0.25)]"
    },
    { 
      icon: Terminal, 
      label: "Embedded Systems", 
      desc: "Microcontrollers, C drivers & hardware sensor loops",
      color: "from-teal-950/40 via-black to-black",
      border: "border-emerald-500/25 hover:border-emerald-400/60",
      iconColor: "text-teal-400",
      iconBg: "bg-emerald-500/10 border-emerald-500/30",
      glow: "group-hover:shadow-[0_0_25px_rgba(16,185,129,0.25)]"
    },
  ];

  return (
    <section id="about" className="py-14 sm:py-24 relative">
      <div className="max-w-4xl mx-auto px-5 sm:px-6 relative z-10">
        
        <motion.div
          variants={scrollReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col"
        >
          {/* Developer Monospace Section Indicator */}
          <span className="font-mono text-xs text-emerald-400 font-medium mb-3 sm:mb-4 inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#10b981]" />
            // 01. about
          </span>

          {/* Typewriter Animated Bio Statement (Mobile Compact & Proportioned) */}
          <TypewriterBio text={portfolio.about.bio} />

          {/* Focus pillars with distinctive color cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-5 mt-8 sm:mt-12 pt-8 sm:pt-10 border-t border-emerald-500/20">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <div 
                  key={index} 
                  className={`group flex flex-col p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-b ${pillar.color} backdrop-blur-md border ${pillar.border} ${pillar.glow} transition-all duration-300`}
                >
                  <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl ${pillar.iconBg} border flex items-center justify-center ${pillar.iconColor} mb-3 sm:mb-4 shadow-sm group-hover:scale-110 transition-transform duration-200`}>
                    <Icon className="w-4 h-4 sm:w-5 h-5" />
                  </div>
                  <h3 className="font-heading text-sm sm:text-base font-semibold text-white tracking-wide">
                    {pillar.label}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-light mt-1 sm:mt-1.5">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
