import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, MessageSquare, Car, Headphones, ExternalLink, Sparkles } from 'lucide-react';
import { cardHover } from '../../animations/variants';
import PixelCard from '../ui/PixelCard';

const projectThemes = {
  'vibe-tune': {
    pixelVariant: "emerald",
    cardBg: "from-emerald-950/30 via-black to-black",
    border: "border-emerald-500/25 hover:border-emerald-400/70",
    glow: "hover:shadow-[0_0_30px_rgba(16,185,129,0.25)]",
    iconBg: "bg-emerald-500/10 border-emerald-500/30 text-emerald-400",
    categoryColor: "text-emerald-400",
    tagStyle: "bg-emerald-500/10 text-emerald-300 border-emerald-500/25",
    topHighlight: "from-transparent via-emerald-400 to-transparent",
    hoverArrow: "group-hover:text-emerald-300",
    note: "✦ Webcam tracking + 432Hz audio",
    icon: Headphones
  },
  'faq-chatbot': {
    pixelVariant: "emerald",
    cardBg: "from-green-950/30 via-black to-black",
    border: "border-emerald-500/25 hover:border-emerald-400/70",
    glow: "hover:shadow-[0_0_30px_rgba(16,185,129,0.25)]",
    iconBg: "bg-emerald-500/10 border-emerald-500/30 text-emerald-400",
    categoryColor: "text-emerald-400",
    tagStyle: "bg-emerald-500/10 text-emerald-300 border-emerald-500/25",
    topHighlight: "from-transparent via-emerald-400 to-transparent",
    hoverArrow: "group-hover:text-emerald-300",
    note: "✦ Fast contextual query answering",
    icon: MessageSquare
  },
  'smart-car': {
    pixelVariant: "emerald",
    cardBg: "from-teal-950/30 via-black to-black",
    border: "border-emerald-500/25 hover:border-emerald-400/70",
    glow: "hover:shadow-[0_0_30px_rgba(16,185,129,0.25)]",
    iconBg: "bg-emerald-500/10 border-emerald-500/30 text-emerald-400",
    categoryColor: "text-emerald-400",
    tagStyle: "bg-emerald-500/10 text-emerald-300 border-emerald-500/25",
    topHighlight: "from-transparent via-emerald-400 to-transparent",
    hoverArrow: "group-hover:text-emerald-300",
    note: "✦ Ultrasonic distance telemetry",
    icon: Car
  }
};

export default function SecondaryProjectCard({ project }) {
  const theme = projectThemes[project.id] || projectThemes['smart-car'];
  const Icon = theme.icon;
  const primaryHref = project.links.demo || project.links.github;

  return (
    <PixelCard variant={theme.pixelVariant} className="rounded-3xl h-full">
      <motion.div
        variants={cardHover}
        initial="rest"
        whileHover="hover"
        className={`relative group flex flex-col justify-between rounded-3xl bg-gradient-to-b ${theme.cardBg} border ${theme.border} ${theme.glow} p-7 sm:p-8 transition-all duration-300 shadow-xl overflow-hidden h-full`}
      >
      {/* Subtle top color highlight */}
      <div className={`absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r ${theme.topHighlight}`} />

      <div>
        {/* Visual Badge Header */}
        <div className="flex items-center justify-between mb-5">
          <div className={`w-12 h-12 rounded-2xl ${theme.iconBg} border flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md`}>
            <Icon className="w-5 h-5" />
          </div>

          <div className="flex items-center gap-2">
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 border border-emerald-500/30 transition-all shadow-sm"
                aria-label={`Open ${project.title} live demo`}
              >
                <Sparkles className="w-3 h-3 text-emerald-400" />
                <span>Live</span>
                <ExternalLink className="w-3 h-3 text-emerald-400" />
              </a>
            )}
            <a
              href={primaryHref}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-1.5 text-slate-400 ${theme.hoverArrow} transition-colors`}
              aria-label={`View ${project.title}`}
            >
              <ArrowUpRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        {/* Title & Category */}
        <div className="flex items-center justify-between gap-2 mb-1">
          <span className={`text-[11px] uppercase tracking-wider font-bold ${theme.categoryColor}`}>
            {project.category}
          </span>
          {theme.note && (
            <span className="font-note text-sm text-amber-300/90 font-medium">
              {theme.note}
            </span>
          )}
        </div>
        <h3 className="font-heading text-xl sm:text-2xl font-bold text-white tracking-tight">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-sm text-slate-300 font-light mt-3 leading-relaxed">
          {project.summary}
        </p>
      </div>

      {/* Tech Tags & Footer */}
      <div className="mt-8 pt-5 border-t border-slate-800/80 flex items-center justify-between gap-2">
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={`px-2 py-0.5 rounded-md text-[10px] font-medium border ${theme.tagStyle}`}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-2 shrink-0">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-emerald-400 transition-colors p-1"
              aria-label={`View ${project.title} on GitHub`}
            >
              <Github className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  </PixelCard>
  );
}
