import { useEffect, useState } from 'react';

/* Floating "back to top" shortcut.
   Hidden near the top of the page, fades/scales in smoothly once the
   person has scrolled down a bit, and scrolls the page back to the
   top (smoothly) on click. Kept simple: just a flat circular button
   with an arrow, no progress ring or glass effect. */
const ScrollTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const SHOW_AFTER = 480;
    let ticking = false;

    const check = () => {
      const scrollTop = window.scrollY;
      setVisible(scrollTop > SHOW_AFTER);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(check);
      }
    };

    check();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const goTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      type="button"
      className={`scroll-top${visible ? ' scroll-top--show' : ''}`}
      onClick={goTop}
      aria-label="Back to top"
      tabIndex={visible ? 0 : -1}
    >
      <svg className="scroll-top-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="19" x2="12" y2="5" />
        <polyline points="5 12 12 5 19 12" />
      </svg>
    </button>
  );
};

export default ScrollTop;
