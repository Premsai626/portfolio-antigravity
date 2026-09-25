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
      {/* Matrix Hacker Ambient Glow Lighting */}
      <div className="absolute bottom-10 left-1/4 w-[500px] h-[350px] bg-emerald-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-20 right-1/4 w-[500px] h-[350px] bg-green-600/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        
        <motion.div
          variants={scrollReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="flex flex-col items-center text-center"
        >
          <span className="font-mono text-xs text-emerald-400 font-medium mb-4 inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#10b981]" />
            // 05. contact
          </span>

          {/* Large Bold Hacker Green Typography */}
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-3">
            <span className="bg-gradient-to-r from-white via-slate-100 to-emerald-200 bg-clip-text text-transparent">
              LET'S BUILD
            </span>{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-green-300 to-teal-300 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(16,185,129,0.35)]">
              SOMETHING REAL.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 font-light max-w-lg mb-10">
            Have an opportunity, project, or question? Send a message directly to my inbox.
          </p>

          {/* Direct Message Form Card */}
          <form
            onSubmit={handleSend}
            className="w-full text-left rounded-3xl bg-black/95 backdrop-blur-xl border border-emerald-500/30 p-6 sm:p-8 shadow-2xl shadow-black relative overflow-hidden"
          >
            {/* Top gradient accent line */}
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent" />

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
                  className="w-full px-4 py-3 rounded-xl bg-black/90 border border-slate-800 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 text-sm text-white placeholder-slate-500 outline-none transition-all"
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
                  className="w-full px-4 py-3 rounded-xl bg-black/90 border border-slate-800 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 text-sm text-white placeholder-slate-500 outline-none transition-all"
                />
              </div>
            </div>

            <div className="mb-5">
              <div className="flex items-center justify-between mb-2">
                <label htmlFor="contact-message" className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Message <span className="text-emerald-400">*</span>
                </label>
                <span className="font-note text-sm text-emerald-400/90 lowercase">
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
                className="w-full px-4 py-3 rounded-xl bg-black/90 border border-slate-800 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 text-sm text-white placeholder-slate-500 outline-none resize-none transition-all"
              />
            </div>

            {status && (
              <p className="text-xs text-emerald-300 font-medium mb-4 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                {status}
              </p>
            )}

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl bg-gradient-to-r from-emerald-500 via-green-400 to-emerald-400 text-black font-bold text-sm shadow-[0_0_25px_rgba(16,185,129,0.45)] hover:shadow-[0_0_35px_rgba(0,255,136,0.65)] hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer group"
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
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/90 border border-emerald-500/30 hover:border-emerald-400/60 hover:text-white transition-all cursor-pointer font-mono text-emerald-300"
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
