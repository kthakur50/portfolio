import { useEffect, useState } from 'react';

/* Subtle, smooth entry loader.
   - Shows for a short minimum time so it never just "flashes".
   - Waits for the window `load` event (fonts/images/assets settled)
     before it's allowed to fade out, with a safety timeout so it can
     never get stuck if `load` is slow/blocked.
   - Fades out smoothly, then unmounts itself entirely so it leaves
     nothing behind in the DOM. */
const Loader = () => {
  const [fading, setFading] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    document.body.classList.add('is-loading');

    const MIN_MS = 2400;
    const FADE_MS = 650;
    const start = Date.now();
    let fadeTimer;
    let removeTimer;

    const startFade = () => {
      const elapsed = Date.now() - start;
      const wait = Math.max(MIN_MS - elapsed, 0);
      fadeTimer = setTimeout(() => {
        setFading(true);
        document.body.classList.remove('is-loading');
        removeTimer = setTimeout(() => setRemoved(true), FADE_MS);
      }, wait);
    };

    if (document.readyState === 'complete') {
      startFade();
    } else {
      window.addEventListener('load', startFade, { once: true });
    }

    // Safety net: never let the loader hang forever.
    const fallback = setTimeout(startFade, 4500);

    return () => {
      window.removeEventListener('load', startFade);
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
      clearTimeout(fallback);
      document.body.classList.remove('is-loading');
    };
  }, []);

  if (removed) return null;

  return (
    <div
      className={`site-loader${fading ? ' site-loader--out' : ''}`}
      role="status"
      aria-live="polite"
      aria-label="Loading"
    >
      <div className="loader-write">
        <span className="loader-write-text">Kaushal Thakur</span>
        <span className="loader-write-pencil" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>
            <path d="m15 5 4 4"/>
          </svg>
        </span>
      </div>
    </div>
  );
};

export default Loader;
