import React, { useEffect, useRef, useCallback } from 'react';

export default function ElectricBorder({
  children,
  color = "#06b6d4",
  speed = 1,
  chaos = 0.12,
  borderRadius = 24,
  className = "",
  style = {}
}) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const animFrameRef = useRef(null);
  const timeRef = useRef(0);
  const lastTimeRef = useRef(0);

  // Hash-based pseudo random function
  const fract = useCallback((t) => {
    const val = 43758.5453 * Math.sin(12.9898 * t);
    return val - Math.floor(val);
  }, []);

  // 2D Value Noise
  const noise2D = useCallback((x, y) => {
    const ix = Math.floor(x);
    const iy = Math.floor(y);
    const fx = x - ix;
    const fy = y - iy;

    const a = fract(ix + 57 * iy);
    const b = fract(ix + 1 + 57 * iy);
    const c = fract(ix + (iy + 1) * 57);
    const d = fract(ix + 1 + (iy + 1) * 57);

    const ux = fx * fx * (3 - 2 * fx);
    const uy = fy * fy * (3 - 2 * fy);

    return a * (1 - ux) * (1 - uy) + b * ux * (1 - uy) + c * (1 - ux) * uy + d * ux * uy;
  }, [fract]);

  // Fractional Brownian Motion for chaotic lightning arcs
  const fbm = useCallback((t, octaves, lacunarity, gain, chaosFactor, freq, time, seedX, seedY) => {
    let sum = 0;
    let amp = chaosFactor;
    let frequency = freq;
    for (let i = 0; i < octaves; i++) {
      let curAmp = amp;
      if (i === 0) curAmp *= seedY;
      sum += curAmp * (noise2D(frequency * t + 100 * seedX, time * frequency * 0.3) - 0.5);
      frequency *= lacunarity;
      amp *= gain;
    }
    return sum;
  }, [noise2D]);

  // Arc corner point calculation
  const getCornerPoint = useCallback((cx, cy, r, startAngle, sweepAngle, progress) => {
    const angle = startAngle + progress * sweepAngle;
    return {
      x: cx + r * Math.cos(angle),
      y: cy + r * Math.sin(angle)
    };
  }, []);

  // Parametric position along rounded rectangle
  const getPerimeterPoint = useCallback((t, left, top, width, height, radius) => {
    const straightW = width - 2 * radius;
    const straightH = height - 2 * radius;
    const arcLen = (Math.PI * radius) / 2;
    const totalLen = 2 * straightW + 2 * straightH + 4 * arcLen;
    const currentDist = t * totalLen;

    let dist = 0;
    // Top straight
    if (currentDist <= straightW) {
      return { x: left + radius + (currentDist / straightW) * straightW, y: top };
    }
    dist += straightW;
    // Top-right corner
    if (currentDist <= dist + arcLen) {
      return getCornerPoint(left + width - radius, top + radius, radius, -Math.PI / 2, Math.PI / 2, (currentDist - dist) / arcLen);
    }
    dist += arcLen;
    // Right straight
    if (currentDist <= dist + straightH) {
      return { x: left + width, y: top + radius + ((currentDist - dist) / straightH) * straightH };
    }
    dist += straightH;
    // Bottom-right corner
    if (currentDist <= dist + arcLen) {
      return getCornerPoint(left + width - radius, top + height - radius, radius, 0, Math.PI / 2, (currentDist - dist) / arcLen);
    }
    dist += arcLen;
    // Bottom straight
    if (currentDist <= dist + straightW) {
      return { x: left + width - radius - ((currentDist - dist) / straightW) * straightW, y: top + height };
    }
    dist += straightW;
    // Bottom-left corner
    if (currentDist <= dist + arcLen) {
      return getCornerPoint(left + radius, top + height - radius, radius, Math.PI / 2, Math.PI / 2, (currentDist - dist) / arcLen);
    }
    dist += arcLen;
    // Left straight
    if (currentDist <= dist + straightH) {
      return { x: left, y: top + height - radius - ((currentDist - dist) / straightH) * straightH };
    }
    dist += straightH;
    // Top-left corner
    return getCornerPoint(left + radius, top + radius, radius, Math.PI, Math.PI / 2, (currentDist - dist) / arcLen);
  }, [getCornerPoint]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const updateSize = () => {
      const rect = container.getBoundingClientRect();
      const w = rect.width + 120;
      const h = rect.height + 120;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.scale(dpr, dpr);
      return { width: w, height: h };
    };

    let { width: canvasW, height: canvasH } = updateSize();
    let currentDpr = Math.min(window.devicePixelRatio || 1, 2);

    const render = (timestamp) => {
      if (!canvas || !ctx) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      if (dpr !== currentDpr) {
        currentDpr = dpr;
        const res = updateSize();
        canvasW = res.width;
        canvasH = res.height;
      }

      const delta = (timestamp - lastTimeRef.current) / 1000;
      timeRef.current += delta * speed;
      lastTimeRef.current = timestamp;

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.scale(currentDpr, currentDpr);

      ctx.strokeStyle = color;
      ctx.lineWidth = 1.6;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      const cardW = canvasW - 120;
      const cardH = canvasH - 120;
      const maxR = Math.min(borderRadius, Math.min(cardW, cardH) / 2);
      const sampleCount = Math.floor((2 * (cardW + cardH) + 2 * Math.PI * maxR) / 2.5);

      ctx.beginPath();
      for (let i = 0; i <= sampleCount; i++) {
        const t = i / sampleCount;
        const basePoint = getPerimeterPoint(t, 60, 60, cardW, cardH, maxR);
        const noiseX = fbm(8 * t, 10, 1.6, 0.7, chaos, 10, timeRef.current, 0, 0);
        const noiseY = fbm(8 * t, 10, 1.6, 0.7, chaos, 10, timeRef.current, 1, 0);
        const ptX = basePoint.x + 60 * noiseX;
        const ptY = basePoint.y + 60 * noiseY;

        if (i === 0) {
          ctx.moveTo(ptX, ptY);
        } else {
          ctx.lineTo(ptX, ptY);
        }
      }
      ctx.closePath();
      ctx.stroke();

      animFrameRef.current = requestAnimationFrame(render);
    };

    const resizeObserver = new ResizeObserver(() => {
      const res = updateSize();
      canvasW = res.width;
      canvasH = res.height;
    });

    resizeObserver.observe(container);
    animFrameRef.current = requestAnimationFrame(render);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      resizeObserver.disconnect();
    };
  }, [color, speed, chaos, borderRadius, fbm, getPerimeterPoint]);

  return (
    <div
      ref={containerRef}
      className={`electric-border ${className}`}
      style={{
        "--electric-border-color": color,
        borderRadius: `${borderRadius}px`,
        ...style
      }}
    >
      <div className="eb-canvas-container">
        <canvas ref={canvasRef} className="eb-canvas" />
      </div>
      <div className="eb-layers">
        <div className="eb-glow-1" />
        <div className="eb-glow-2" />
        <div className="eb-background-glow" />
      </div>
      <div className="eb-content">
        {children}
      </div>
    </div>
  );
}
