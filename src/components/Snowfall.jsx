import { useEffect, useRef } from 'react';

/**
 * Gentle snowfall — a full-screen, click-through canvas of soft
 * white flakes drifting down. Respects reduced-motion preference and
 * pauses when the tab isn't visible to save battery/CPU.
 */
const Snowfall = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const ctx = canvas.getContext('2d');

    let width = window.innerWidth;
    let height = window.innerHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const isSmall = window.innerWidth < 700;
    const FLAKE_COUNT = isSmall ? 45 : 90;

    const rand = (min, max) => min + Math.random() * (max - min);

    let flakes = [];
    const makeFlake = () => ({
      x: rand(0, width),
      y: rand(-height, 0),
      r: rand(1.2, 3.4),
      speedY: rand(0.4, 1.3),
      speedX: rand(-0.4, 0.4),
      sway: rand(0, Math.PI * 2),
      swaySpeed: rand(0.005, 0.02),
      opacity: rand(0.35, 0.85),
    });

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    flakes = Array.from({ length: FLAKE_COUNT }, makeFlake);
    window.addEventListener('resize', resize);

    let raf;
    let running = true;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = '#ffffff';
      flakes.forEach((f) => {
        f.sway += f.swaySpeed;
        f.x += f.speedX + Math.sin(f.sway) * 0.3;
        f.y += f.speedY;
        if (f.y > height + 6) {
          f.y = -6;
          f.x = rand(0, width);
        }
        if (f.x > width + 6) f.x = -6;
        if (f.x < -6) f.x = width + 6;

        ctx.globalAlpha = f.opacity;
        ctx.beginPath();
        ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.globalAlpha = 1;
      if (running) raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    const onVisibility = () => {
      running = !document.hidden;
      if (running) raf = requestAnimationFrame(draw);
      else if (raf) cancelAnimationFrame(raf);
    };
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', onVisibility);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return <canvas className="snowfall" ref={canvasRef} aria-hidden="true" />;
};

export default Snowfall;
