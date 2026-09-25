import React, { useEffect, useRef, useState } from 'react';

/**
 * Custom Targeting Ring Cursor
 * Renders an interactive HUD targeting reticle with:
 * - Instantaneous emerald center node dot
 * - Fluidly lerped outer targeting ring (hollow circle halo)
 * - Click shrink animation
 * - Interactive element scale/glow on hover
 * - Safe fallback on touch/mobile devices
 */
export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  // Position refs for 60/120fps animation without React re-renders
  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const isHovered = useRef(false);
  const isMouseDown = useRef(false);
  const isVisible = useRef(false);

  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // Only enable on desktop pointer devices
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!isFinePointer) return;

    setEnabled(true);
    document.body.classList.add('has-custom-cursor');

    const handleMouseMove = (e) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;

      if (!isVisible.current) {
        isVisible.current = true;
        ringPos.current.x = e.clientX;
        ringPos.current.y = e.clientY;
      }
    };

    const handleMouseDown = () => {
      isMouseDown.current = true;
    };

    const handleMouseUp = () => {
      isMouseDown.current = false;
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target) return;

      const interactive = target.closest(
        'a, button, [role="button"], input, textarea, select, .cursor-pointer, [data-interactive], .eb-content'
      );

      isHovered.current = !!interactive;
    };

    const handleMouseLeave = () => {
      isVisible.current = false;
      document.body.classList.remove('has-custom-cursor');
    };

    const handleMouseEnter = () => {
      isVisible.current = true;
      document.body.classList.add('has-custom-cursor');
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseover', handleMouseOver, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Animation Loop using requestAnimationFrame for butter-smooth 60/120 FPS
    let animId;
    const lerp = (a, b, n) => a + (b - a) * n;

    const render = () => {
      if (dotRef.current && ringRef.current) {
        if (!isVisible.current) {
          dotRef.current.style.opacity = '0';
          ringRef.current.style.opacity = '0';
        } else {
          dotRef.current.style.opacity = '1';
          ringRef.current.style.opacity = '1';

          // Center dot tracks cursor with 0 latency
          const dotX = mousePos.current.x;
          const dotY = mousePos.current.y;
          dotRef.current.style.transform = `translate3d(${dotX}px, ${dotY}px, 0) translate(-50%, -50%)`;

          // Outer targeting ring follows with smooth spring/lerp (0.22 factor)
          ringPos.current.x = lerp(ringPos.current.x, dotX, 0.22);
          ringPos.current.y = lerp(ringPos.current.y, dotY, 0.22);

          let scale = 1;
          if (isHovered.current) scale = 1.45;
          if (isMouseDown.current) scale *= 0.82;

          ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%) scale(${scale})`;
          
          if (isHovered.current) {
            ringRef.current.style.borderColor = 'rgba(0, 255, 136, 0.95)';
            ringRef.current.style.backgroundColor = 'rgba(16, 185, 129, 0.12)';
            ringRef.current.style.boxShadow = '0 0 24px rgba(0, 255, 136, 0.45)';
          } else {
            ringRef.current.style.borderColor = 'rgba(52, 211, 153, 0.65)';
            ringRef.current.style.backgroundColor = 'transparent';
            ringRef.current.style.boxShadow = '0 0 14px rgba(16, 185, 129, 0.2)';
          }
        }
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      document.body.classList.remove('has-custom-cursor');
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden" aria-hidden="true">
      {/* Outer Targeting Ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-11 h-11 rounded-full border border-emerald-400/60 pointer-events-none transition-[width,height,border-color,background-color,box-shadow] duration-200 ease-out will-change-transform opacity-0"
        style={{
          boxShadow: '0 0 14px rgba(16, 185, 129, 0.2)'
        }}
      />

      {/* Central Emerald Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#00ff88] pointer-events-none will-change-transform opacity-0 shadow-[0_0_8px_#00ff88,0_0_16px_rgba(0,255,136,0.7)]"
      />
    </div>
  );
}
