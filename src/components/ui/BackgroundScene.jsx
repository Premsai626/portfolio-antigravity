import React, { useEffect, useRef } from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

/**
 * Interactive Constellation Network & Tech Space Background
 * Features:
 * - High-DPI hardware accelerated 2D canvas
 * - Subtle drifting constellation nodes with inter-particle connecting lines
 * - Technical cyber plus crosses (+) scattered across the background grid
 * - Dynamic radiating magnetic connection lines to the active cursor position
 * - Smooth ambient spotlight torch glow tracking the mouse
 */
export default function BackgroundScene() {
  const canvasRef = useRef(null);
  const spotlightRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  // Mutable mouse tracking ref (bypasses React re-renders for true 60/120 FPS performance)
  const mouseRef = useRef({
    x: -1000,
    y: -1000,
    smoothX: -1000,
    smoothY: -1000,
    isOnScreen: false
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animFrameId;
    let width = window.innerWidth;
    let height = window.innerHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const setupCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
    };

    setupCanvas();

    // 1. Constellation Nodes (Neon Matrix Green, Emerald, Mint, Forest, Star White)
    const nodeColors = [
      { r: 0, g: 255, b: 136 },   // Neon Matrix Green (#00ff88)
      { r: 16, g: 240, b: 160 },  // Mint Green (#10f0a0)
      { r: 52, g: 211, b: 153 },  // Emerald (#34d399)
      { r: 74, g: 222, b: 128 },  // Terminal Green (#4ade80)
      { r: 240, g: 253, b: 250 }  // Crisp Star White
    ];

    const particleCount = Math.min(Math.max(Math.floor((width * height) / 16000), 55), 85);
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      const color = nodeColors[Math.floor(Math.random() * nodeColors.length)];
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.4 + 1.6,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        baseAlpha: Math.random() * 0.4 + 0.35,
        phase: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.025 + 0.015,
        color
      });
    }

    // 2. Cyber Plus Crosses (+)
    const plusCount = Math.min(Math.max(Math.floor((width * height) / 32000), 22), 40);
    const plusMarkers = [];

    for (let i = 0; i < plusCount; i++) {
      plusMarkers.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2 + 5, // Arm length 5px - 7px
        baseAlpha: Math.random() * 0.25 + 0.15,
        phase: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.018 + 0.01
      });
    }

    // Mouse event handlers
    const onMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      mouseRef.current.isOnScreen = true;

      if (mouseRef.current.smoothX < -500) {
        mouseRef.current.smoothX = e.clientX;
        mouseRef.current.smoothY = e.clientY;
      }
    };

    const onMouseLeave = () => {
      mouseRef.current.isOnScreen = false;
    };

    const onMouseEnter = (e) => {
      mouseRef.current.isOnScreen = true;
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    const lerp = (start, end, factor) => start + (end - start) * factor;

    // Constellation connection thresholds
    const maxLineDist = 135;
    const maxLineDistSq = maxLineDist * maxLineDist;
    const cursorMaxDist = 210;
    const cursorMaxDistSq = cursorMaxDist * cursorMaxDist;

    // Physics & Canvas Render Loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const mouseX = mouseRef.current.x;
      const mouseY = mouseRef.current.y;
      const isOnScreen = mouseRef.current.isOnScreen && mouseX > -100 && mouseY > -100;

      // Smooth spotlight coordinates
      if (isOnScreen) {
        mouseRef.current.smoothX = lerp(mouseRef.current.smoothX, mouseX, 0.08);
        mouseRef.current.smoothY = lerp(mouseRef.current.smoothY, mouseY, 0.08);

        if (spotlightRef.current) {
          spotlightRef.current.style.background = `radial-gradient(640px circle at ${mouseRef.current.smoothX}px ${mouseRef.current.smoothY}px, rgba(16, 185, 129, 0.08) 0%, rgba(0, 255, 136, 0.04) 30%, rgba(5, 150, 105, 0.015) 60%, transparent 75%)`;
          spotlightRef.current.style.opacity = '1';
        }
      } else if (spotlightRef.current) {
        spotlightRef.current.style.opacity = '0';
      }

      // --- 1. Draw Technical Cyber Plus Crosses (+) ---
      ctx.lineWidth = 1;
      for (let i = 0; i < plusMarkers.length; i++) {
        const pm = plusMarkers[i];
        pm.phase += pm.pulseSpeed;
        const alpha = pm.baseAlpha + Math.sin(pm.phase) * 0.12;
        const clampedAlpha = Math.max(0.08, Math.min(0.45, alpha));

        ctx.strokeStyle = `rgba(52, 211, 153, ${clampedAlpha})`;
        const half = pm.size / 2;

        ctx.beginPath();
        // Horizontal bar
        ctx.moveTo(pm.x - half, pm.y);
        ctx.lineTo(pm.x + half, pm.y);
        // Vertical bar
        ctx.moveTo(pm.x, pm.y - half);
        ctx.lineTo(pm.x, pm.y + half);
        ctx.stroke();
      }

      // --- 2. Update Constellation Nodes Physics ---
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (!prefersReducedMotion) {
          p.x += p.vx;
          p.y += p.vy;
          p.phase += p.pulseSpeed;

          // Wrap edges smoothly
          if (p.x < -15) p.x = width + 15;
          if (p.x > width + 15) p.x = -15;
          if (p.y < -15) p.y = height + 15;
          if (p.y > height + 15) p.y = -15;

          // Gentle magnetic physics with cursor
          if (isOnScreen) {
            const dx = p.x - mouseX;
            const dy = p.y - mouseY;
            const distSq = dx * dx + dy * dy;

            if (distSq < 55 * 55 && distSq > 0.1) {
              // Gentle clearance so node doesn't overlap reticle center
              const dist = Math.sqrt(distSq);
              const push = ((55 - dist) / 55) * 0.75;
              p.x += (dx / dist) * push;
              p.y += (dy / dist) * push;
            }
          }
        }
      }

      // --- 3. Draw Inter-Node Constellation Lines ---
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p2.x - p1.x;
          const dy = p2.y - p1.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < maxLineDistSq) {
            const dist = Math.sqrt(distSq);
            const lineAlpha = (1 - dist / maxLineDist) * 0.22;

            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(52, 211, 153, ${lineAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // --- 4. Draw Dynamic Radiating Lines from Cursor to Nearby Nodes ---
      if (isOnScreen) {
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          const dx = p.x - mouseX;
          const dy = p.y - mouseY;
          const distSq = dx * dx + dy * dy;

          if (distSq < cursorMaxDistSq) {
            const dist = Math.sqrt(distSq);
            const lineAlpha = (1 - dist / cursorMaxDist) * 0.7;

            // Radiating magnetic connection line
            ctx.beginPath();
            ctx.moveTo(mouseX, mouseY);
            ctx.lineTo(p.x, p.y);
            ctx.strokeStyle = `rgba(16, 240, 160, ${lineAlpha})`;
            ctx.lineWidth = 1.0 + lineAlpha * 0.6;
            ctx.stroke();

            // Accent halo on connected particle
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size + lineAlpha * 1.8, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(52, 211, 153, ${lineAlpha * 0.8})`;
            ctx.fill();
          }
        }
      }

      // --- 5. Draw Constellation Particle Dots ---
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const alpha = p.baseAlpha + Math.sin(p.phase) * 0.2;
        const clampedAlpha = Math.max(0.15, Math.min(0.9, alpha));

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${clampedAlpha})`;
        ctx.shadowColor = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, 0.85)`;
        ctx.shadowBlur = p.size * 2.8;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animFrameId = requestAnimationFrame(render);
    };

    const handleResize = () => {
      setupCanvas();
    };

    window.addEventListener('resize', handleResize);
    animFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [prefersReducedMotion]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none" aria-hidden="true">
      {/* 1. Deep Space Base Background */}
      <div className="absolute inset-0 bg-[#000000]" />

      {/* 2. Cyber Tech Blueprint Grid with soft radial mask */}
      <div 
        className="absolute inset-0 bg-tech-grid opacity-80"
        style={{
          maskImage: 'radial-gradient(ellipse 80% 70% at 50% 50%, #000 35%, transparent 95%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at 50% 50%, #000 35%, transparent 95%)'
        }}
      />

      {/* 3. Dot Matrix Intersections */}
      <div 
        className="absolute inset-0 bg-dot-matrix opacity-50"
        style={{
          maskImage: 'radial-gradient(ellipse 75% 65% at 50% 50%, #000 30%, transparent 90%)',
          WebkitMaskImage: 'radial-gradient(ellipse 75% 65% at 50% 50%, #000 30%, transparent 90%)'
        }}
      />

      {/* 4. Atmospheric Matrix Green Ambient Glows */}
      <div className="absolute top-[5%] left-[10%] w-[650px] h-[650px] rounded-full bg-emerald-600/7 blur-[160px]" />
      <div className="absolute top-[35%] right-[5%] w-[600px] h-[600px] rounded-full bg-green-500/6 blur-[170px]" />
      <div className="absolute top-[65%] left-[15%] w-[650px] h-[550px] rounded-full bg-emerald-500/6 blur-[160px]" />
      <div className="absolute bottom-[5%] right-[20%] w-[550px] h-[550px] rounded-full bg-teal-600/5 blur-[160px]" />

      {/* 5. Smooth Mouse Spotlight Torch Glow */}
      <div
        ref={spotlightRef}
        className="absolute inset-0 transition-opacity duration-500 opacity-0 pointer-events-none"
      />

      {/* 6. Constellation Particle & Cursor Network Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 block w-full h-full" />
    </div>
  );
}
