import { useEffect, useState } from 'react';

/* Subtle, smooth entry loader.
   - Shows for a short minimum time so it never just "flashes".
   - Waits for the window `load` event (fonts/images/assets settled)
     before it's allowed to fade out, with a safety timeout so it can
     never get stuck if `load` is slow/blocked.
   - Fades out smoothly, then unmounts itself entirely so it leaves
     nothing behind in the DOM. */
/* Single-stroke upright outline of "Kaushal Thakur" (Hershey 'rowmans'):
   [path, start delay (s), draw time (s)] — one entry per pen stroke, in
   writing order, so the name is written letter by letter. */
const STROKES = [["M8.0 8.0 L8.0 83.0",0.15,0.058],["M58.0 8.0 L8.0 58.0",0.208,0.055],["M25.9 40.1 L58.0 83.0",0.263,0.042],["M122.3 33.0 L122.3 83.0",0.305,0.04],["M122.3 43.7 L115.1 36.6 L108.0 33.0 L97.3 33.0 L90.1 36.6 L83.0 43.7 L79.4 54.4 L79.4 61.6 L83.0 72.3 L90.1 79.4 L97.3 83.0 L108.0 83.0 L115.1 79.4 L122.3 72.3",0.345,0.096],["M150.9 33.0 L150.9 68.7 L154.4 79.4 L161.6 83.0 L172.3 83.0 L179.4 79.4 L190.1 68.7",0.441,0.069],["M190.1 33.0 L190.1 83.0",0.51,0.04],["M254.4 43.7 L250.9 36.6 L240.1 33.0 L229.4 33.0 L218.7 36.6 L215.1 43.7 L218.7 50.9 L225.9 54.4 L243.7 58.0 L250.9 61.6 L254.4 68.7 L254.4 72.3 L250.9 79.4 L240.1 83.0 L229.4 83.0 L218.7 79.4 L215.1 72.3",0.55,0.118],["M279.4 8.0 L279.4 83.0",0.668,0.058],["M279.4 47.3 L290.1 36.6 L297.3 33.0 L308.0 33.0 L315.1 36.6 L318.7 47.3 L318.7 83.0",0.726,0.069],["M386.6 33.0 L386.6 83.0",0.795,0.04],["M386.6 43.7 L379.4 36.6 L372.3 33.0 L361.6 33.0 L354.4 36.6 L347.3 43.7 L343.7 54.4 L343.7 61.6 L347.3 72.3 L354.4 79.4 L361.6 83.0 L372.3 83.0 L379.4 79.4 L386.6 72.3",0.835,0.096],["M415.1 8.0 L415.1 83.0",0.931,0.058],["M515.1 8.0 L515.1 83.0",0.99,0.058],["M490.1 8.0 L540.1 8.0",1.048,0.04],["M558.0 8.0 L558.0 83.0",1.088,0.058],["M558.0 47.3 L568.7 36.6 L575.9 33.0 L586.6 33.0 L593.7 36.6 L597.3 47.3 L597.3 83.0",1.146,0.069],["M665.1 33.0 L665.1 83.0",1.215,0.04],["M665.1 43.7 L658.0 36.6 L650.9 33.0 L640.1 33.0 L633.0 36.6 L625.9 43.7 L622.3 54.4 L622.3 61.6 L625.9 72.3 L633.0 79.4 L640.1 83.0 L650.9 83.0 L658.0 79.4 L665.1 72.3",1.255,0.096],["M693.7 8.0 L693.7 83.0",1.351,0.058],["M729.4 33.0 L693.7 68.7",1.409,0.04],["M708.0 54.4 L733.0 83.0",1.449,0.04],["M754.4 33.0 L754.4 68.7 L758.0 79.4 L765.1 83.0 L775.9 83.0 L783.0 79.4 L793.7 68.7",1.489,0.069],["M793.7 33.0 L793.7 83.0",1.558,0.04],["M822.3 33.0 L822.3 83.0",1.598,0.04],["M822.3 54.4 L825.9 43.7 L833.0 36.6 L840.1 33.0 L850.9 33.0",1.638,0.04]];

const Loader = () => {
  const [fading, setFading] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    document.body.classList.add('is-loading');

    const MIN_MS = 2400;
    const FADE_MS = 500;
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
    const fallback = setTimeout(startFade, 3500);

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
        viewBox="0 0 858.9 91.0"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          {/* faint graphite grain so the line reads as pencil */}
          <filter id="pencilRough" x="-2%" y="-10%" width="104%" height="120%">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="2" seed="4" result="n" />
            <feDisplacementMap in="SourceGraphic" in2="n" scale="1.6" />
          </filter>
        </defs>
        <g filter="url(#pencilRough)">
          <g className="loader-strokes">
            {STROKES.map(([d, delay, dur], i) => (
              <path
                key={i}
                className="loader-stroke"
                pathLength="1"
                d={d}
                style={{ '--del': `${delay}s`, '--dur': `${dur}s` }}
              />
            ))}
          </g>
          <path
            className="loader-strike"
            pathLength="1"
            d="M 2 60 C 220 55, 430 62, 600 57 S 800 56, 857 59"
          />
        </g>
      </svg>
    </div>
  );
};

export default Loader;
