import React, { useEffect, useRef } from 'react';

class Pixel {
  constructor(canvas, ctx, x, y, color, speed, delay) {
    this.width = canvas.width;
    this.height = canvas.height;
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.color = color;
    this.speed = this.getRandomValue(0.1, 0.9) * speed;
    this.size = 0;
    this.sizeStep = 0.4 * Math.random();
    this.minSize = 0.5;
    this.maxSizeInteger = 2.5;
    this.maxSize = this.getRandomValue(this.minSize, this.maxSizeInteger);
    this.delay = delay;
    this.counter = 0;
    this.counterStep = 4 * Math.random() + (this.width + this.height) * 0.01;
    this.isIdle = false;
    this.isReverse = false;
    this.isShimmer = false;
  }

  getRandomValue(min, max) {
    return Math.random() * (max - min) + min;
  }

  draw() {
    const offset = 0.5 * this.maxSizeInteger - 0.5 * this.size;
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x + offset, this.y + offset, this.size, this.size);
  }

  appear() {
    this.isIdle = false;
    if (this.counter <= this.delay) {
      this.counter += this.counterStep;
      return;
    }
    if (this.size >= this.maxSize) {
      this.isShimmer = true;
    }
    if (this.isShimmer) {
      this.shimmer();
    } else {
      this.size += this.sizeStep;
    }
    this.draw();
  }

  disappear() {
    this.isShimmer = false;
    this.counter = 0;
    if (this.size <= 0) {
      this.isIdle = true;
      return;
    }
    this.size -= 0.1;
    this.draw();
  }

  shimmer() {
    if (this.size >= this.maxSize) {
      this.isReverse = true;
    } else if (this.size <= this.minSize) {
      this.isReverse = false;
    }
    if (this.isReverse) {
      this.size -= this.speed;
    } else {
      this.size += this.speed;
    }
  }
}

const VARIANTS = {
  default: {
    gap: 6,
    speed: 35,
    colors: "#f8fafc,#f1f5f9,#cbd5e1",
    noFocus: false
  },
  blue: {
    gap: 7,
    speed: 30,
    colors: "#e0f2fe,#7dd3fc,#0ea5e9",
    noFocus: false
  },
  cyan: {
    gap: 6,
    speed: 35,
    colors: "#06b6d4,#38bdf8,#67e8f9",
    noFocus: false
  },
  orange: {
    gap: 6,
    speed: 40,
    colors: "#ff5e3a,#ff3b11,#e11d48",
    noFocus: false
  },
  purple: {
    gap: 6,
    speed: 35,
    colors: "#c084fc,#a855f7,#7e22ce",
    noFocus: false
  },
  emerald: {
    gap: 6,
    speed: 35,
    colors: "#34d399,#10b981,#059669",
    noFocus: false
  }
};

export default function PixelCard({
  variant = "default",
  gap,
  speed,
  colors,
  noFocus,
  className = "",
  children
}) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const pixelsRef = useRef([]);
  const animFrameRef = useRef(null);
  const lastTimeRef = useRef(performance.now());
  const prefersReducedMotion = useRef(
    typeof window !== 'undefined' && window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ).current;

  const config = VARIANTS[variant] || VARIANTS.default;
  const activeGap = gap ?? config.gap;
  const activeSpeed = speed ?? config.speed;
  const activeColors = colors ?? config.colors;
  const activeNoFocus = noFocus ?? config.noFocus;

  const initPixels = () => {
    if (!containerRef.current || !canvasRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const width = Math.floor(rect.width);
    const height = Math.floor(rect.height);
    const ctx = canvasRef.current.getContext("2d");
    if (!ctx || width === 0 || height === 0) return;

    canvasRef.current.width = width;
    canvasRef.current.height = height;
    canvasRef.current.style.width = `${width}px`;
    canvasRef.current.style.height = `${height}px`;

    const colorList = activeColors.split(",");
    const pixels = [];

    for (let x = 0; x < width; x += parseInt(activeGap.toString(), 10)) {
      for (let y = 0; y < height; y += parseInt(activeGap.toString(), 10)) {
        const color = colorList[Math.floor(Math.random() * colorList.length)];
        const dx = x - width / 2;
        const dy = y - height / 2;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const delay = prefersReducedMotion ? 0 : dist;
        const speedValue = activeSpeed <= 0 || prefersReducedMotion ? 0 : (activeSpeed >= 100 ? 0.1 : 0.001 * activeSpeed);
        pixels.push(new Pixel(canvasRef.current, ctx, x, y, color, speedValue, delay));
      }
    }
    pixelsRef.current = pixels;
  };

  const animate = (action) => {
    animFrameRef.current = requestAnimationFrame(() => animate(action));
    const now = performance.now();
    const delta = now - lastTimeRef.current;
    if (delta < 1000 / 60) return;
    lastTimeRef.current = now - (delta % (1000 / 60));

    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx || !canvasRef.current) return;
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

    let allIdle = true;
    for (let i = 0; i < pixelsRef.current.length; i++) {
      const pixel = pixelsRef.current[i];
      pixel[action]();
      if (!pixel.isIdle) {
        allIdle = false;
      }
    }

    if (allIdle && animFrameRef.current !== null) {
      cancelAnimationFrame(animFrameRef.current);
    }
  };

  const triggerAnimation = (action) => {
    if (animFrameRef.current !== null) {
      cancelAnimationFrame(animFrameRef.current);
    }
    animFrameRef.current = requestAnimationFrame(() => animate(action));
  };

  useEffect(() => {
    initPixels();
    const observer = new ResizeObserver(() => {
      initPixels();
    });
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => {
      observer.disconnect();
      if (animFrameRef.current !== null) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, [activeGap, activeSpeed, activeColors, activeNoFocus]);

  return (
    <div
      ref={containerRef}
      className={`pixel-card ${className}`}
      onMouseEnter={() => triggerAnimation("appear")}
      onMouseLeave={() => triggerAnimation("disappear")}
      onFocus={activeNoFocus ? undefined : (e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) triggerAnimation("appear");
      }}
      onBlur={activeNoFocus ? undefined : (e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) triggerAnimation("disappear");
      }}
      tabIndex={activeNoFocus ? -1 : 0}
    >
      <canvas className="pixel-canvas" ref={canvasRef} />
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
}
