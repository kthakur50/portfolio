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

    const MIN_MS = 3600;
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
    const fallback = setTimeout(startFade, 5500);

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
      <svg
        className="loader-write"
        viewBox="0 0 560 110"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          {/* rough graphite edge so it reads as pencil, not vector */}
          <filter id="pencilRough" x="-5%" y="-20%" width="110%" height="140%">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="4" result="n" />
            <feDisplacementMap in="SourceGraphic" in2="n" scale="2.2" />
          </filter>
          <clipPath id="loaderWipe">
            <rect className="loader-wipe-rect" x="0" y="0" width="560" height="110" />
          </clipPath>
        </defs>
        <g filter="url(#pencilRough)">
          <g clipPath="url(#loaderWipe)">
            <text className="loader-write-text" x="280" y="78" textAnchor="middle">
              Kaushal Thakur
            </text>
          </g>
          <path
            className="loader-strike"
            pathLength="1"
            d="M 22 56 C 120 51, 210 61, 300 54 S 470 50, 540 57"
          />
        </g>
      </svg>
    </div>
  );
};

export default Loader;
