import { useEffect, useRef } from 'react';

/**
 * Subtle snow-from-cursor effect — tiny snowflakes spawn near the
 * mouse as it moves, then drift down and fade out. Click-through
 * canvas, only active on fine-pointer (desktop) devices; respects
 * reduced-motion and pauses when the tab isn't visible.
 */
const Snowfall = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    if (!window.matchMedia('(pointer: fine)').matches) return undefined;

    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const ctx = canvas.getContext('2d');

    let width = window.innerWidth;
    let height = window.innerHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const rand = (min, max) => min + Math.random() * (max - min);

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener('resize', resize);

    let flakes = [];
    let mouseX = null;
    let mouseY = null;
    let lastSpawn = 0;

    const spawn = (x, y) => {
      flakes.push({
        x: x + rand(-6, 6),
        y: y + rand(-6, 6),
        r: rand(1, 2.6),
        speedY: rand(0.35, 0.9),
        speedX: rand(-0.25, 0.25),
        sway: rand(0, Math.PI * 2),
        swaySpeed: rand(0.02, 0.05),
        life: 0,
        maxLife: rand(70, 130),
      });
    };

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      const now = performance.now();
      if (now - lastSpawn > 40 && flakes.length < 140) {
        spawn(mouseX, mouseY);
        lastSpawn = now;
      }
    };
    window.addEventListener('mousemove', onMove, { passive: true });

    let raf;
    let running = true;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = '#ffffff';
      flakes = flakes.filter((f) => f.life < f.maxLife);
      flakes.forEach((f) => {
        f.life += 1;
        f.sway += f.swaySpeed;
        f.x += f.speedX + Math.sin(f.sway) * 0.25;
        f.y += f.speedY;

        const fadeIn = Math.min(f.life / 10, 1);
        const fadeOut = 1 - Math.max(0, (f.life - (f.maxLife - 20)) / 20);
        const opacity = 0.55 * fadeIn * fadeOut;

        ctx.globalAlpha = opacity;
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
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('visibilitychange', onVisibility);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return <canvas className="snowfall" ref={canvasRef} aria-hidden="true" />;
};

export default Snowfall;
