import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useScroll, useTransform, useSpring, useMotionValue, animate } from 'framer-motion';
import { 
  CheckCircle2, 
  Calendar, 
  Eye, 
  FileText 
} from 'lucide-react';

export default function Certificates3DVault({ 
  certificates = [], 
  onSelectCert,
  sectionRef
}) {
  const count = certificates.length;
  const [isDragging, setIsDragging] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1024
  );

  // Responsive radius & dimensions
  useEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = viewportWidth < 640;
  const isTablet = viewportWidth >= 640 && viewportWidth < 1024;

  const radiusX = isMobile ? 180 : isTablet ? 300 : 410;
  const radiusZ = isMobile ? 90 : isTablet ? 140 : 180;
  const cardWidth = isMobile ? 225 : isTablet ? 270 : 315;
  const cardHeight = isMobile ? 325 : isTablet ? 375 : 415;

  const angleStep = count > 2 ? 360 / count : count === 2 ? 65 : 0;

  // Track scroll progress of the certificates section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Map scroll progress (0 to 1) to rotation degrees.
  // Rotates across all cards smoothly as the user scrolls past the section
  const scrollRotation = useTransform(scrollYProgress, [0, 1], [60, -500]);
  const smoothScroll = useSpring(scrollRotation, {
    stiffness: 110,
    damping: 26,
    mass: 0.6
  });

  // Manual drag offset for touch & mouse swiping
  const dragOffset = useMotionValue(0);
  const [currentRot, setCurrentRot] = useState(0);

  // Combine scroll rotation and drag offset
  useEffect(() => {
    const updateRotation = () => {
      setCurrentRot(smoothScroll.get() + dragOffset.get());
    };

    const unsubScroll = smoothScroll.on('change', updateRotation);
    const unsubDrag = dragOffset.on('change', updateRotation);

    return () => {
      unsubScroll();
      unsubDrag();
    };
  }, [smoothScroll, dragOffset]);

  // Pointer drag handling
  const dragStartXRef = useRef(0);
  const dragStartOffsetRef = useRef(0);
  const dragDistanceRef = useRef(0);

  const handlePointerDown = (e) => {
    setIsDragging(true);
    dragStartXRef.current = e.clientX || (e.touches && e.touches[0].clientX) || 0;
    dragStartOffsetRef.current = dragOffset.get();
    dragDistanceRef.current = 0;
  };

  const handlePointerMove = (e) => {
    if (!isDragging) return;
    const currentX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
    const deltaX = currentX - dragStartXRef.current;
    dragDistanceRef.current = Math.abs(deltaX);

    const sensitivity = isMobile ? 0.45 : 0.35;
    dragOffset.set(dragStartOffsetRef.current + deltaX * sensitivity);
  };

  const handlePointerUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
  };

  // Smoothly center a clicked card
  const rotateCardToCenter = (normAngle) => {
    const current = dragOffset.get();
    animate(dragOffset, current - normAngle, {
      type: "spring",
      stiffness: 160,
      damping: 24
    });
  };

  if (count === 0) return null;

  return (
    <div className="relative w-full select-none flex flex-col items-center">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[320px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[220px] bg-indigo-500/10 rounded-full blur-[110px] pointer-events-none -z-10" />

      {/* 3D Stage Viewport */}
      <div 
        className="relative w-full h-[420px] sm:h-[470px] md:h-[510px] flex items-center justify-center overflow-hidden cursor-grab active:cursor-grabbing touch-pan-y"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
      >
        {/* Left & Right edge fade vignettes for seamless depth */}
        <div className="absolute left-0 inset-y-0 w-16 sm:w-28 bg-gradient-to-r from-[#030712] via-[#030712]/70 to-transparent z-40 pointer-events-none" />
        <div className="absolute right-0 inset-y-0 w-16 sm:w-28 bg-gradient-to-l from-[#030712] via-[#030712]/70 to-transparent z-40 pointer-events-none" />

        {/* Carousel Center Pivot */}
        <div 
          className="relative flex items-center justify-center"
          style={{ width: cardWidth, height: cardHeight }}
        >
          {certificates.map((cert, i) => {
            const baseAngle = i * angleStep;
            const totalAngle = baseAngle + currentRot;
            
            // Normalize angle to [-180, 180]
            const normAngle = ((totalAngle % 360) + 540) % 360 - 180;
            const rad = (normAngle * Math.PI) / 180;

            // 3D positioning
            const x = Math.sin(rad) * radiusX;
            const z = Math.cos(rad) * radiusZ - radiusZ;
            const cosVal = Math.cos(rad);

            // Hide cards on far back side
            if (cosVal < -0.35) return null;

            const isFront = Math.abs(normAngle) < angleStep / 2;
            const scale = 0.82 + 0.23 * Math.max(0, cosVal);
            const opacity = Math.max(0.18, (cosVal + 0.35) / 1.35);
            const zIndex = Math.round((cosVal + 1) * 50);
            const rotY = -normAngle * 0.72;

            return (
              <div
                key={cert.id}
                onClick={(e) => {
                  if (dragDistanceRef.current > 8) return; // ignore click if dragging
                  if (isFront) {
                    onSelectCert(cert);
                  } else {
                    e.stopPropagation();
                    rotateCardToCenter(normAngle);
                  }
                }}
                style={{
                  position: 'absolute',
                  width: `${cardWidth}px`,
                  height: `${cardHeight}px`,
                  transform: `translate3d(${x}px, 0, ${z}px) rotateY(${rotY}deg) scale(${scale})`,
                  opacity,
                  zIndex,
                  pointerEvents: cosVal > 0.25 ? 'auto' : 'none',
                  transition: isDragging ? 'none' : 'transform 0.05s ease-out, opacity 0.05s ease-out'
                }}
                className={`rounded-2xl flex flex-col justify-between overflow-hidden backdrop-blur-xl transition-shadow duration-300 ${
                  isFront 
                    ? 'bg-gradient-to-b from-slate-900/95 via-[#0b0e17]/95 to-[#05070e]/95 border-2 border-cyan-400/70 shadow-[0_0_35px_rgba(6,182,212,0.35)] ring-1 ring-cyan-400/30' 
                    : 'bg-gradient-to-b from-slate-900/80 to-[#0b0e17]/85 border border-slate-800/80 shadow-2xl hover:border-slate-700 cursor-pointer'
                }`}
              >
                {/* Certificate Image Frame */}
                <div className="relative w-full aspect-[16/10] bg-black/90 overflow-hidden border-b border-slate-800/80">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className={`w-full h-full object-cover object-top transition-transform duration-500 ${
                      isFront ? 'scale-105' : 'scale-100 filter brightness-90'
                    }`}
                    loading="lazy"
                    draggable={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e17] via-transparent to-black/30 pointer-events-none" />

                  {/* Top floating metadata badges */}
                  <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between gap-1.5 pointer-events-none text-[10px]">
                    <span className="px-2 py-0.5 rounded-full bg-slate-950/80 border border-slate-800/90 text-cyan-300 font-mono tracking-wider backdrop-blur-md">
                      {cert.category}
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-slate-950/80 border border-slate-800/90 text-slate-300 font-mono flex items-center gap-1 backdrop-blur-md">
                      <Calendar className="w-2.5 h-2.5 text-cyan-400" />
                      {cert.issueDate}
                    </span>
                  </div>

                  {/* Front card inspect indicator banner on hover */}
                  {isFront && (
                    <div className="absolute inset-0 flex items-center justify-center bg-cyan-950/20 opacity-0 hover:opacity-100 transition-opacity backdrop-blur-[2px]">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cyan-400 text-slate-950 text-xs font-bold shadow-lg shadow-cyan-400/40">
                        <Eye className="w-3.5 h-3.5" />
                        Inspect Credential
                      </span>
                    </div>
                  )}
                </div>

                {/* Card Content & Telemetry */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Issuer */}
                    <div className="text-[11px] font-mono text-cyan-400/90 font-medium truncate mb-1">
                      {cert.issuer}
                    </div>

                    {/* Title */}
                    <h3 className={`font-heading font-bold text-white tracking-tight leading-snug line-clamp-2 ${
                      isMobile ? 'text-sm' : 'text-base'
                    }`}>
                      {cert.title}
                    </h3>

                    {/* Subtitle / Scope */}
                    {cert.subtitle && (
                      <p className="text-[11px] text-slate-400 font-light mt-1 line-clamp-1">
                        {cert.subtitle}
                      </p>
                    )}

                    {/* Tags preview */}
                    {cert.tags && (
                      <div className="flex flex-wrap gap-1 mt-3">
                        {cert.tags.slice(0, 2).map((t) => (
                          <span
                            key={t}
                            className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-slate-800/60 border border-slate-700/50 text-slate-300"
                          >
                            {t}
                          </span>
                        ))}
                        {cert.tags.length > 2 && (
                          <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-slate-800/30 text-slate-400">
                            +{cert.tags.length - 2}
                          </span>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Action Bar */}
                  <div className="pt-3 mt-3 border-t border-slate-800/80 flex items-center justify-between gap-2">
                    {isFront ? (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectCert(cert);
                        }}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Inspect</span>
                      </button>
                    ) : (
                      <span className="text-[11px] text-slate-400 font-mono">
                        Click to focus
                      </span>
                    )}

                    <div className="flex items-center gap-1.5">
                      {cert.verificationUrl && (
                        <a
                          href={cert.verificationUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="p-1.5 rounded-lg text-emerald-400 hover:text-emerald-300 hover:bg-emerald-500/15 border border-emerald-500/30 transition-all text-[11px] flex items-center gap-1"
                          title="Verify Credly Badge"
                        >
                          <CheckCircle2 className="w-3 h-3" />
                          <span className="text-[10px] font-medium hidden sm:inline">Credly</span>
                        </a>
                      )}
                      {cert.pdf && (
                        <a
                          href={cert.pdf}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-700/60 transition-all text-[11px] flex items-center gap-1"
                          title="Open PDF"
                        >
                          <FileText className="w-3 h-3 text-cyan-400" />
                          <span className="text-[10px] font-medium hidden sm:inline">PDF</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
