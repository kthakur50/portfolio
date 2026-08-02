import { useEffect, useRef } from 'react';

/**
 * Custom pencil cursor — follows the mouse and wobbles like it's
 * writing. Only active on devices with a fine pointer (desktop mice);
 * touch devices keep the default behaviour untouched.
 */
const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return undefined;

    const el = cursorRef.current;
    if (!el) return undefined;

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let raf;

    const move = (e) => {
      x = e.clientX;
      y = e.clientY;
      if (!raf) {
        raf = requestAnimationFrame(() => {
          el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
          raf = null;
        });
      }
    };

    const show = () => el.classList.add('is-active');
    const hide = () => el.classList.remove('is-active');
    const onDown = () => el.classList.add('is-pressed');
    const onUp = () => el.classList.remove('is-pressed');

    document.body.classList.add('has-custom-cursor');
    window.addEventListener('mousemove', move, { passive: true });
    document.addEventListener('mouseenter', show);
    document.addEventListener('mouseleave', hide);
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);

    return () => {
      document.body.classList.remove('has-custom-cursor');
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseenter', show);
      document.removeEventListener('mouseleave', hide);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="custom-cursor" ref={cursorRef} aria-hidden="true">
      <svg className="custom-cursor-pencil" viewBox="0 0 40 40" width="34" height="34" xmlns="http://www.w3.org/2000/svg">
        <g transform="rotate(45 20 20)">
          <path d="M17 6h6l1.5 3-4.5 4.5-4.5-4.5z" fill="#e8b64a" stroke="#20301f" strokeWidth="1.1" strokeLinejoin="round"/>
          <rect x="15.5" y="13" width="9" height="16" fill="#f0f5ee" stroke="#20301f" strokeWidth="1.1"/>
          <line x1="15.5" y1="17.4" x2="24.5" y2="17.4" stroke="#20301f" strokeWidth="1"/>
          <path d="M15.5 29h9l-4.5 7z" fill="#c9a876" stroke="#20301f" strokeWidth="1.1" strokeLinejoin="round"/>
          <path d="M18.6 32.6l1.4 2.3 1.4-2.3z" fill="#3a3a3a"/>
        </g>
      </svg>
    </div>
  );
};

export default CustomCursor;
