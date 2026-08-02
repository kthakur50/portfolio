import { useEffect, useRef } from 'react';

/**
 * Custom arrow cursor — follows the mouse and wobbles like it's
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
      <svg className="custom-cursor-arrow" viewBox="0 0 24 24" width="26" height="26" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 2.4 20.5 12l-6.9 1.4-3.7 6.3z" fill="#f0f5ee" stroke="#20301f" strokeWidth="1.4" strokeLinejoin="round"/>
      </svg>
    </div>
  );
};

export default CustomCursor;
