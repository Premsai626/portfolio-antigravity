import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { soundManager } from '../../utils/audio';

export default function MatrixRain() {
  const canvasRef = useRef(null);
  // Matrix rain is always visible by default as requested
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    const handleToggle = () => {
      setIsActive((prev) => {
        const next = !prev;
        if (next) {
          soundManager.playMatrix();
        } else {
          soundManager.playClick();
        }
        return next;
      });
    };

    window.addEventListener('toggle-matrix-rain', handleToggle);
    return () => window.removeEventListener('toggle-matrix-rain', handleToggle);
  }, []);

  useEffect(() => {
    if (!isActive) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId;
    let width = window.innerWidth;
    let height = window.innerHeight;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    resize();
    window.addEventListener('resize', resize);

    // Authentic Matrix characters: Katakana, Cyrillic, Numbers, Hex, Symbols
    const chars = '0123456789ABCDEF010101ﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍXYZ+-*<>=#@!$%&';
    const charArray = chars.split('');

    const fontSize = 16;
    const columns = Math.floor(width / fontSize);
    const drops = [];

    // Initialize drops with random negative y to stagger the rain
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.floor(Math.random() * -120);
    }

    let lastTime = 0;
    // Slower, smooth cinematic rain speed (~15 FPS gives gentle cascading fall)
    const fps = 15;
    const interval = 1000 / fps;

    const draw = (currentTime) => {
      animId = requestAnimationFrame(draw);

      const delta = currentTime - lastTime;
      if (delta < interval) return;
      lastTime = currentTime - (delta % interval);

      // Translucent black fade to create gentle lingering trails at slower speed
      ctx.fillStyle = 'rgba(0, 0, 0, 0.055)';
      ctx.fillRect(0, 0, width, height);

      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = charArray[Math.floor(Math.random() * charArray.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Bright leader character
        ctx.fillStyle = '#ffffff';
        ctx.shadowColor = '#00ff88';
        ctx.shadowBlur = 8;
        ctx.fillText(text, x, y);

        // Green character right behind leader
        if (drops[i] > 1) {
          const trailText = charArray[Math.floor(Math.random() * charArray.length)];
          ctx.fillStyle = '#00ff66';
          ctx.shadowColor = '#00ff66';
          ctx.shadowBlur = 4;
          ctx.fillText(trailText, x, (drops[i] - 1) * fontSize);
        }

        ctx.shadowBlur = 0;

        // Reset drop when past bottom with randomness for natural rain rhythm
        if (y > height && Math.random() > 0.98) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    };

    animId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, [isActive]);

  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.32 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 pointer-events-none z-1 overflow-hidden"
          aria-hidden="true"
        >
          <canvas ref={canvasRef} className="block w-full h-full" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
