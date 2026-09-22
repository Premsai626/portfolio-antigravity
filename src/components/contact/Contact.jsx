import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Copy, Check, ArrowUpRight, Sparkles } from 'lucide-react';
import { portfolio } from '../../data/portfolio';
import { scrollReveal } from '../../animations/variants';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState('');

  const copyEmail = () => {
    navigator.clipboard.writeText(portfolio.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!message.trim()) {
      setStatus('Please enter a message before sending.');
      return;
    }

    const subject = encodeURIComponent(
      name.trim() 
        ? `Portfolio Message from ${name.trim()}` 
        : `Message from Portfolio Visitor`
    );
    const bodyText = encodeURIComponent(
      `${message.trim()}\n\n---\nSender Name: ${name.trim() || 'Visitor'}\nSender Email: ${email.trim() || 'Not provided'}`
    );

    // Direct Gmail Web Compose URL (opens Gmail with recipient & message pre-filled)
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${portfolio.contact.email}&su=${subject}&body=${bodyText}`;
    
    // Check if on mobile device
    const isMobile = typeof navigator !== 'undefined' && /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
    if (isMobile) {
      window.location.href = `mailto:${portfolio.contact.email}?subject=${subject}&body=${bodyText}`;
    } else {
      window.open(gmailUrl, '_blank', 'noopener,noreferrer');
    }

    setStatus('Opening Gmail with your message pre-filled...');
    setTimeout(() => setStatus(''), 4000);
  };

  return (
    <section id="contact" className="py-28 relative overflow-hidden">
      {/* Rich Multi-Color Ambient Glow Lighting */}
      <div className="absolute bottom-10 left-1/4 w-[500px] h-[350px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-20 right-1/4 w-[500px] h-[350px] bg-cyan-500/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        
        <motion.div
          variants={scrollReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="flex flex-col items-center text-center"
        >
          <span className="font-mono text-xs text-cyan-400 font-medium mb-4 inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
            // 05. contact
          </span>

          {/* Large Bold Multi-Color Typography */}
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-3">
            <span className="bg-gradient-to-r from-white via-indigo-200 to-cyan-300 bg-clip-text text-transparent">
              LET'S BUILD
            </span>{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-emerald-300 to-[#ff5e3a] bg-clip-text text-transparent">
              SOMETHING REAL.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 font-light max-w-lg mb-10">
            Have an opportunity, project, or question? Send a message directly to my inbox.
          </p>

          {/* Direct Message Form Card */}
          <form
            onSubmit={handleSend}
            className="w-full text-left rounded-3xl bg-slate-950/75 backdrop-blur-xl border border-indigo-500/30 p-6 sm:p-8 shadow-2xl shadow-indigo-950/40 relative overflow-hidden"
          >
            {/* Top gradient accent line */}
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 via-[#ff5e3a] to-indigo-500" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="contact-name" className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  Your Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Alex Morgan"
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-700/60 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-sm text-white placeholder-slate-500 outline-none transition-all"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  Your Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-700/60 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-sm text-white placeholder-slate-500 outline-none transition-all"
                />
              </div>
            </div>

            <div className="mb-5">
              <div className="flex items-center justify-between mb-2">
                <label htmlFor="contact-message" className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Message <span className="text-[#ff5e3a]">*</span>
                </label>
                <span className="font-note text-sm text-amber-300/90 lowercase">
                  ✦ sent to ippilipremsai12356@gmail.com
                </span>
              </div>
              <textarea
                id="contact-message"
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Hi Prem, I'd like to collaborate with you on..."
                className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-700/60 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-sm text-white placeholder-slate-500 outline-none resize-none transition-all"
              />
            </div>

            {status && (
              <p className="text-xs text-cyan-300 font-medium mb-4 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                {status}
              </p>
            )}

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-500 to-[#ff5e3a] text-white font-semibold text-sm shadow-[0_0_25px_rgba(6,182,212,0.3)] hover:shadow-[0_0_35px_rgba(255,94,58,0.45)] hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer group"
            >
              <Send className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              <span>Send Message to My Gmail</span>
              <ArrowUpRight className="w-4 h-4 opacity-80" />
            </button>

            {/* Direct Copy Fallback */}
            <div className="mt-5 pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
              <span>Or email directly:</span>
              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700/60 hover:border-cyan-400/50 hover:text-white transition-all cursor-pointer font-mono text-cyan-300"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-400" />
                    <span>{portfolio.contact.email}</span>
                  </>
                )}
              </button>
            </div>
          </form>

        </motion.div>

      </div>
    </section>
  );
}
