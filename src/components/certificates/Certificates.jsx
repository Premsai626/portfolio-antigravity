import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FileText, 
  CheckCircle2, 
  Calendar, 
  X, 
  Sparkles,
  ShieldCheck,
  Tag,
  ExternalLink
} from 'lucide-react';
import { portfolio } from '../../data/portfolio';
import { scrollReveal, buttonHover } from '../../animations/variants';
import Certificates3DVault from './Certificates3DVault';

const categoryBadgeStyles = {
  "Cloud & AI": "bg-purple-500/15 text-purple-300 border-purple-500/30",
  "Software & Languages": "bg-indigo-500/15 text-indigo-300 border-indigo-500/30",
  "Competitions & Hackathons": "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
  "Design & CAD": "bg-amber-500/15 text-amber-300 border-amber-500/30",
  "Databases & Cloud": "bg-teal-500/15 text-teal-300 border-teal-500/30"
};

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);
  const sectionRef = useRef(null);

  // Close modal on escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedCert(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedCert]);

  const certificates = portfolio.certificates || [];

  return (
    <section id="certificates" ref={sectionRef} className="py-24 sm:py-32 relative">
      {/* Subtle background glow accents */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div
          variants={scrollReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          <div>
            <span className="font-mono text-xs text-cyan-400 font-medium mb-3 inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
              // 04. certs
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Certifications & Badges
            </h2>
            <p className="text-sm text-slate-300 mt-2 font-light max-w-xl">
              Industry credentials, accredited coursework, and hackathon wins.
            </p>
          </div>

          {/* Quick Counter Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-slate-900/80 border border-slate-800 font-mono text-xs text-slate-300 self-start md:self-auto">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span><strong className="text-white font-semibold">{certificates.length}</strong> credentials</span>
          </div>
        </motion.div>

        {/* 3D Rotational Vault Driven Automatically by Page Scroll */}
        <div className="w-full">
          <Certificates3DVault 
            certificates={certificates}
            onSelectCert={(cert) => setSelectedCert(cert)}
            sectionRef={sectionRef}
          />
        </div>

      </div>

      {/* Lightbox / Certificate Inspection Modal */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="fixed inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#0e111a] border border-cyan-500/30 shadow-2xl shadow-cyan-950/40 p-6 sm:p-8 z-10 flex flex-col"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-700/80 transition-colors z-20 cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Content Header */}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className={`text-[11px] uppercase font-bold tracking-wider px-3 py-1 rounded-full border ${categoryBadgeStyles[selectedCert.category] || "bg-slate-800 text-slate-300 border-slate-700"}`}>
                  {selectedCert.category}
                </span>
                <span className="text-xs text-slate-400 flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800">
                  <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                  {selectedCert.issueDate}
                </span>
                {selectedCert.credentialId && (
                  <span className="text-xs text-cyan-300 font-mono flex items-center gap-1 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30">
                    <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                    ID: {selectedCert.credentialId}
                  </span>
                )}
              </div>

              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {selectedCert.title}
              </h2>
              <p className="text-sm text-cyan-400 font-medium mt-1">
                Issued by {selectedCert.issuer}
              </p>

              {/* High-Resolution Certificate Image Preview Frame */}
              <div className="mt-6 rounded-2xl overflow-hidden border border-slate-800 bg-black shadow-inner relative group">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="w-full h-auto max-h-[500px] object-contain mx-auto"
                />
              </div>

              {/* Description & Competencies */}
              <div className="mt-6 space-y-4">
                <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800/80">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                    Credential Overview & Scope
                  </h4>
                  <p className="text-sm text-slate-200 font-light leading-relaxed">
                    {selectedCert.description}
                  </p>
                </div>

                {/* Skills tags in modal */}
                {selectedCert.tags && (
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                      <Tag className="w-3.5 h-3.5 text-cyan-400" />
                      Validated Skills & Disciplines
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedCert.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-3 py-1 rounded-lg bg-indigo-500/10 border border-indigo-500/25 text-indigo-300 font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Modal Actions */}
              <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  {selectedCert.pdf && (
                    <motion.a
                      variants={buttonHover}
                      initial="rest"
                      whileHover="hover"
                      whileTap="tap"
                      href={selectedCert.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-indigo-600 via-cyan-600 to-emerald-600 text-white text-xs font-semibold shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all"
                    >
                      <FileText className="w-4 h-4" />
                      <span>Open Official PDF</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </motion.a>
                  )}

                  {selectedCert.verificationUrl && (
                    <motion.a
                      variants={buttonHover}
                      initial="rest"
                      whileHover="hover"
                      whileTap="tap"
                      href={selectedCert.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-500/40 text-emerald-300 text-xs font-semibold transition-all"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>Verify on Credly</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </motion.a>
                  )}
                </div>

                <button
                  onClick={() => setSelectedCert(null)}
                  className="px-5 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/80 text-xs font-medium transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
