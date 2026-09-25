import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, GitCommit, GitPullRequest, Activity, Clock, Zap, Cpu } from 'lucide-react';
import { portfolio } from '../../data/portfolio';
import { scrollReveal } from '../../animations/variants';
import { soundManager } from '../../utils/audio';

export default function GithubSection() {
  // Live FPS Counter
  const [fps, setFps] = useState(60);
  const frameCountRef = useRef(0);
  const lastTimeRef = useRef(performance.now());

  useEffect(() => {
    let animId;
    const calculateFps = (now) => {
      frameCountRef.current++;
      if (now - lastTimeRef.current >= 1000) {
        setFps(Math.min(Math.round((frameCountRef.current * 1000) / (now - lastTimeRef.current)), 120));
        frameCountRef.current = 0;
        lastTimeRef.current = now;
      }
      animId = requestAnimationFrame(calculateFps);
    };
    animId = requestAnimationFrame(calculateFps);
    return () => cancelAnimationFrame(animId);
  }, []);

  // Live IST Time
  const [timeStr, setTimeStr] = useState('');
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(
        now.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true
        }) + ' IST'
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Generate 26 weeks x 7 days heatmap cells (182 days) with realistic commit patterns
  const weeks = 24;
  const days = 7;
  const contributionGrid = React.useMemo(() => {
    const grid = [];
    for (let w = 0; w < weeks; w++) {
      const weekCols = [];
      for (let d = 0; d < days; d++) {
        // Pseudo-random weighted activity
        const seed = Math.sin(w * 17 + d * 31);
        let level = 0;
        if (seed > 0.65) level = 3;
        else if (seed > 0.3) level = 2;
        else if (seed > -0.2) level = 1;
        else level = 0;
        weekCols.push({
          level,
          commits: level === 0 ? 0 : Math.floor((seed + 1) * 3) + 1
        });
      }
      grid.push(weekCols);
    }
    return grid;
  }, []);

  const getCellColor = (level) => {
    switch (level) {
      case 3:
        return 'bg-[#00ff88] shadow-[0_0_8px_#00ff88] border-[#00ffaa]';
      case 2:
        return 'bg-emerald-500 border-emerald-400';
      case 1:
        return 'bg-emerald-800/80 border-emerald-700/60';
      default:
        return 'bg-emerald-950/25 border-emerald-900/30';
    }
  };

  return (
    <section className="py-24 relative">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Section Tag */}
        <motion.div
          variants={scrollReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="mb-8"
        >
          <span className="font-mono text-xs text-emerald-400 font-medium mb-3 inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#10b981]" />
            // 05. telemetry & git activity
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Code Telemetry & GitHub Matrix
          </h2>
          <p className="text-sm text-slate-400 mt-2 font-light max-w-xl">
            Live client diagnostics, open-source repositories, and persistent commit rhythm.
          </p>
        </motion.div>

        {/* Main Telemetry Container */}
        <motion.div
          variants={scrollReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="rounded-3xl bg-[#030603]/95 border border-emerald-500/30 p-6 sm:p-8 shadow-[0_0_40px_rgba(16,185,129,0.15)] relative overflow-hidden font-mono"
        >
          {/* Subtle Grid Flare */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

          {/* Top Diagnostics Ticker Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pb-6 mb-6 border-b border-emerald-500/20 text-xs">
            <div className="flex items-center gap-2.5">
              <Activity className="w-4 h-4 text-emerald-400 animate-pulse" />
              <div>
                <span className="text-slate-500 text-[10px] block">CLIENT RENDER</span>
                <span className="text-emerald-300 font-bold">{fps} FPS [OPTIMAL]</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-cyan-400" />
              <div>
                <span className="text-slate-500 text-[10px] block">LOCAL TIME</span>
                <span className="text-slate-200 font-bold">{timeStr || 'Calculating...'}</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <GitCommit className="w-4 h-4 text-amber-400" />
              <div>
                <span className="text-slate-500 text-[10px] block">LATEST BRANCH</span>
                <span className="text-emerald-300 font-bold">origin/main*</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <Zap className="w-4 h-4 text-emerald-400" />
              <div>
                <span className="text-slate-500 text-[10px] block">SYSTEM STATUS</span>
                <span className="text-emerald-400 font-bold">100% OPERATIONAL</span>
              </div>
            </div>
          </div>

          {/* Heatmap Contribution Matrix */}
          <div className="space-y-3 mb-6">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-2 text-emerald-400 font-semibold">
                <GitPullRequest className="w-3.5 h-3.5" />
                <span>RECENT CONTRIBUTION STREAM</span>
              </span>
              <div className="flex items-center gap-1.5 text-[10px] text-slate-500">
                <span>Less</span>
                <span className="w-2.5 h-2.5 rounded-xs bg-emerald-950/40 border border-emerald-900/30" />
                <span className="w-2.5 h-2.5 rounded-xs bg-emerald-800/80" />
                <span className="w-2.5 h-2.5 rounded-xs bg-emerald-500" />
                <span className="w-2.5 h-2.5 rounded-xs bg-[#00ff88]" />
                <span>More</span>
              </div>
            </div>

            {/* Scrollable Matrix Grid */}
            <div className="overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-emerald-500/20">
              <div className="flex gap-1 min-w-[500px]">
                {contributionGrid.map((week, wIdx) => (
                  <div key={wIdx} className="flex flex-col gap-1 flex-1">
                    {week.map((cell, dIdx) => (
                      <div
                        key={dIdx}
                        title={`${cell.commits} contributions`}
                        className={`w-full aspect-square rounded-xs border transition-all duration-150 hover:scale-125 cursor-crosshair ${getCellColor(
                          cell.level
                        )}`}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Card Footer: GitHub Link & Repos */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-emerald-500/20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-black border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0">
                <Github className="w-5 h-5" />
              </div>
              <div>
                <span className="text-white font-bold text-sm block">@Premsai626</span>
                <span className="text-slate-400 text-xs">
                  ORBIT, VibeTune, FAQ Chatbot & IoT Hardware Systems
                </span>
              </div>
            </div>

            <a
              href={portfolio.links.github}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={soundManager.playHover}
              onClick={soundManager.playClick}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-emerald-500 to-green-400 text-black font-bold text-xs shadow-[0_0_20px_rgba(16,185,129,0.45)] hover:shadow-[0_0_30px_rgba(0,255,136,0.65)] transition-all group shrink-0"
            >
              <span>Explore Repositories</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
