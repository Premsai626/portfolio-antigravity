import React, { useEffect, useRef, useState } from 'react';
import { useMousePosition } from '../../hooks/useMousePosition';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export default function BackgroundScene() {
  const canvasRef = useRef(null);
  const mousePos = useMousePosition();
  const prefersReducedMotion = useReducedMotion();
  
  // Smoothly interpolated cursor position for buttery spotlight movement
  const [smoothCursor, setSmoothCursor] = useState({ x: -1000, y: -1000 });
  const cursorRef = useRef({ x: -1000, y: -1000 });
  const targetCursorRef = useRef({ x: -1000, y: -1000 });

  // Update target coordinates when mouse moves
  useEffect(() => {
    if (mousePos.x > 0 || mousePos.y > 0) {
      targetCursorRef.current = { x: mousePos.x, y: mousePos.y };
    }
  }, [mousePos]);

  // Spring/lerp animation loop for the cursor spotlight
  useEffect(() => {
    let animId;
    const lerp = (start, end, factor) => start + (end - start) * factor;

    const updateSpotlight = () => {
      // If initialized
      if (targetCursorRef.current.x > -500) {
        cursorRef.current.x = lerp(cursorRef.current.x, targetCursorRef.current.x, 0.09);
        cursorRef.current.y = lerp(cursorRef.current.y, targetCursorRef.current.y, 0.09);
        setSmoothCursor({ x: cursorRef.current.x, y: cursorRef.current.y });
      }
      animId = requestAnimationFrame(updateSpotlight);
    };

    animId = requestAnimationFrame(updateSpotlight);
    return () => cancelAnimationFrame(animId);
  }, []);

  // Floating Cosmic Particles Canvas Physics
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Particle color palettes: cyber cyan, cosmic violet, electric sunset, and soft white
    const colors = [
      { r: 56, g: 189, b: 248 },   // Cyan
      { r: 165, g: 180, b: 252 },  // Indigo
      { r: 255, g: 94, b: 58 },    // Electric sunset
      { r: 255, g: 255, b: 255 },  // White
      { r: 52, g: 211, b: 153 }    // Emerald
    ];

    const particleCount = Math.min(Math.floor((width * height) / 18000), 75);
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      const color = colors[Math.floor(Math.random() * colors.length)];
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.5 + 0.6,
        vx: (Math.random() - 0.5) * 0.25,
        vy: -Math.random() * 0.35 - 0.1, // Gently drift upwards
        baseAlpha: Math.random() * 0.45 + 0.2,
        phase: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.02 + 0.01,
        color
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const mouseX = targetCursorRef.current.x;
      const mouseY = targetCursorRef.current.y;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (!prefersReducedMotion) {
          p.x += p.vx;
          p.y += p.vy;
          p.phase += p.pulseSpeed;

          // Subtle deflection away from cursor if mouse is nearby
          if (mouseX > 0 && mouseY > 0) {
            const dx = p.x - mouseX;
            const dy = p.y - mouseY;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 130) {
              const force = (130 - dist) / 130;
              p.x += (dx / dist) * force * 1.2;
              p.y += (dy / dist) * force * 1.2;
            }
          }

          // Screen edge wrapping
          if (p.y < -10) p.y = height + 10;
          if (p.x < -10) p.x = width + 10;
          if (p.x > width + 10) p.x = -10;
        }

        // Twinkle opacity calculation
        const alpha = p.baseAlpha + Math.sin(p.phase) * 0.2;
        const clampedAlpha = Math.max(0.05, Math.min(0.8, alpha));

        // Draw soft glowing particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${clampedAlpha})`;
        ctx.shadowColor = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, 0.8)`;
        ctx.shadowBlur = p.size * 3;
        ctx.fill();
        ctx.shadowBlur = 0; // Reset blur for performance
      }

      animFrameId = requestAnimationFrame(render);
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    animFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [prefersReducedMotion]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none" aria-hidden="true">
      {/* 1. Deep Space Base Background */}
      <div className="absolute inset-0 bg-[#080910]" />

      {/* 2. Cyber Tech Blueprint Grid with soft radial mask */}
      <div 
        className="absolute inset-0 bg-tech-grid opacity-70"
        style={{
          maskImage: 'radial-gradient(ellipse 80% 70% at 50% 50%, #000 35%, transparent 95%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at 50% 50%, #000 35%, transparent 95%)'
        }}
      />

      {/* 3. Dot Matrix Intersections */}
      <div 
        className="absolute inset-0 bg-dot-matrix opacity-40"
        style={{
          maskImage: 'radial-gradient(ellipse 75% 65% at 50% 50%, #000 30%, transparent 90%)',
          WebkitMaskImage: 'radial-gradient(ellipse 75% 65% at 50% 50%, #000 30%, transparent 90%)'
        }}
      />

      {/* 4. Atmospheric Multi-Color Ambient Aurora Blobs */}
      <div className="absolute top-[5%] left-[10%] w-[650px] h-[650px] rounded-full bg-indigo-600/8 blur-[160px]" />
      <div className="absolute top-[35%] right-[5%] w-[600px] h-[600px] rounded-full bg-cyan-500/7 blur-[170px]" />
      <div className="absolute top-[65%] left-[15%] w-[650px] h-[550px] rounded-full bg-purple-600/7 blur-[160px]" />
      <div className="absolute bottom-[5%] right-[20%] w-[550px] h-[550px] rounded-full bg-[#ff3b11]/6 blur-[160px]" />

      {/* 5. Interactive Cursor Spotlight Torch Glow */}
      {smoothCursor.x > -500 && (
        <div
          className="absolute inset-0 transition-opacity duration-500"
          style={{
            background: `radial-gradient(680px circle at ${smoothCursor.x}px ${smoothCursor.y}px, rgba(6, 182, 212, 0.085) 0%, rgba(99, 102, 241, 0.05) 35%, transparent 75%)`
          }}
        />
      )}

      {/* 6. Floating Cosmic Dust / Particle Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 block w-full h-full" />
    </div>
  );
}
