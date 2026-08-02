import { useEffect, useRef } from 'react';

/**
 * Ink-trail effect — a faint scribble follows the mouse and fades out
 * almost instantly. The system cursor is left completely normal; this
 * only ever draws on a transparent, click-through canvas. Only active
 * on devices with a fine pointer (desktop mice); touch devices are
 * untouched.
 */
const CustomCursor = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return undefined;

    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const ctx = canvas.getContext('2d');

    let width = window.innerWidth;
    let height = window.innerHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener('resize', resize);

    const accent = getComputedStyle(document.documentElement)
      .getPropertyValue('--a2')
      .trim() || '#22a063';

    let lastX = null;
    let lastY = null;
    let prevX = null;
    let prevY = null;
    let hasMoved = false;
    let raf;

    const onMove = (e) => {
      lastX = e.clientX;
      lastY = e.clientY;
      hasMoved = true;
    };
    window.addEventListener('mousemove', onMove, { passive: true });

    const loop = () => {
      // Erase a slice of the canvas every frame so the scribble
      // vanishes almost as soon as it's drawn.
      ctx.globalCompositeOperation = 'destination-out';
      ctx.fillStyle = 'rgba(0,0,0,0.22)';
      ctx.fillRect(0, 0, width, height);
      ctx.globalCompositeOperation = 'source-over';

      if (hasMoved && prevX !== null) {
        ctx.strokeStyle = accent;
        ctx.lineWidth = 1.6;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.globalAlpha = 0.55;
        ctx.beginPath();
        ctx.moveTo(prevX, prevY);
        ctx.lineTo(lastX, lastY);
        ctx.stroke();
        ctx.globalAlpha = 1;
      }
      if (lastX !== null) {
        prevX = lastX;
        prevY = lastY;
      }
      hasMoved = false;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return <canvas className="cursor-trail" ref={canvasRef} aria-hidden="true" />;
};

export default CustomCursor;
