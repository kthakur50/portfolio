import { useEffect, useRef } from 'react';

/**
 * Green "pencil writing" cursor trail — as the mouse moves it leaves
 * behind a hand-drawn-looking squiggly green line, which fades away
 * and erases itself automatically over time. Click-through canvas,
 * only active on fine-pointer (desktop) devices; respects
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

    const PENCIL_COLOR = '34, 197, 94'; // green
    const MAX_LIFE = 55; // frames before a point is fully erased

    let points = [];
    let lastX = null;
    let lastY = null;

    const onMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;

      if (lastX === null) {
        points.push({ x, y, life: 0 });
      } else {
        const dx = x - lastX;
        const dy = y - lastY;
        const dist = Math.hypot(dx, dy);
        // subdivide fast movements so the line stays smooth, with a
        // tiny hand-jitter so it reads as "written" rather than ruled
        const steps = Math.max(1, Math.min(8, Math.round(dist / 6)));
        for (let i = 1; i <= steps; i += 1) {
          const t = i / steps;
          points.push({
            x: lastX + dx * t + rand(-0.6, 0.6),
            y: lastY + dy * t + rand(-0.6, 0.6),
            life: 0,
          });
        }
      }

      lastX = x;
      lastY = y;
      if (points.length > 400) points = points.slice(points.length - 400);
    };
    window.addEventListener('mousemove', onMove, { passive: true });

    let raf;
    let running = true;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      points.forEach((p) => { p.life += 1; });
      points = points.filter((p) => p.life < MAX_LIFE);

      ctx.lineJoin = 'round';
      ctx.lineCap = 'round';

      for (let i = 1; i < points.length; i += 1) {
        const a = points[i - 1];
        const b = points[i];
        // a broken stroke (new pointer lift) shows as a big jump — skip it
        if (Math.hypot(b.x - a.x, b.y - a.y) > 40) continue;

        const fadeOut = 1 - b.life / MAX_LIFE;
        const opacity = Math.max(0, fadeOut) * 0.8;
        if (opacity <= 0) continue;

        ctx.strokeStyle = `rgba(${PENCIL_COLOR}, ${opacity})`;
        ctx.lineWidth = 1.6;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }

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
