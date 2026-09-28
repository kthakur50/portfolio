import { useEffect, useState } from 'react';

/* Subtle, smooth entry loader.
   - Shows for a short minimum time so it never just "flashes".
   - Waits for the window `load` event (fonts/images/assets settled)
     before it's allowed to fade out, with a safety timeout so it can
     never get stuck if `load` is slow/blocked.
   - Fades out smoothly, then unmounts itself entirely so it leaves
     nothing behind in the DOM. */
/* Single-stroke slightly slanted outline of "Kaushal Thakur" (Hershey 'rowmans' sheared ~12°):
   [path, start delay (s), draw time (s)] — one entry per pen stroke, in
   writing order, so the name is written letter by letter. */
const STROKES = [["M24.5 8.0 L8.0 83.0",0.15,0.059],["M74.5 8.0 L13.5 58.0",0.209,0.06],["M35.3 40.1 L58.0 83.0",0.269,0.04],["M133.3 33.0 L122.3 83.0",0.309,0.04],["M130.9 43.7 L125.4 36.6 L119.0 33.0 L108.3 33.0 L100.4 36.6 L91.6 43.7 L85.7 54.4 L84.1 61.6 L85.4 72.3 L90.9 79.4 L97.3 83.0 L108.0 83.0 L115.9 79.4 L124.6 72.3",0.349,0.095],["M161.9 33.0 L154.0 68.7 L155.2 79.4 L161.6 83.0 L172.3 83.0 L180.2 79.4 L193.3 68.7",0.444,0.069],["M201.1 33.0 L190.1 83.0",0.513,0.04],["M263.1 43.7 L261.1 36.6 L251.1 33.0 L240.4 33.0 L228.9 36.6 L223.8 43.7 L225.8 50.9 L232.1 54.4 L249.2 58.0 L255.6 61.6 L257.6 68.7 L256.8 72.3 L251.6 79.4 L240.1 83.0 L229.4 83.0 L219.5 79.4 L217.5 72.3",0.553,0.114],["M295.9 8.0 L279.4 83.0",0.667,0.059],["M287.3 47.3 L300.4 36.6 L308.3 33.0 L319.0 33.0 L325.4 36.6 L326.6 47.3 L318.7 83.0",0.726,0.069],["M397.6 33.0 L386.6 83.0",0.795,0.04],["M395.2 43.7 L389.6 36.6 L383.3 33.0 L372.6 33.0 L364.6 36.6 L355.9 43.7 L350.0 54.4 L348.4 61.6 L349.6 72.3 L355.2 79.4 L361.6 83.0 L372.3 83.0 L380.2 79.4 L388.9 72.3",0.835,0.095],["M431.6 8.0 L415.1 83.0",0.93,0.059],["M531.6 8.0 L515.1 83.0",0.989,0.059],["M506.6 8.0 L556.6 8.0",1.048,0.04],["M574.5 8.0 L558.0 83.0",1.088,0.059],["M565.9 47.3 L578.9 36.6 L586.9 33.0 L597.6 33.0 L603.9 36.6 L605.1 47.3 L597.3 83.0",1.146,0.069],["M676.1 33.0 L665.1 83.0",1.216,0.04],["M673.8 43.7 L668.2 36.6 L661.9 33.0 L651.1 33.0 L643.2 36.6 L634.5 43.7 L628.6 54.4 L627.0 61.6 L628.2 72.3 L633.8 79.4 L640.1 83.0 L650.9 83.0 L658.8 79.4 L667.5 72.3",1.256,0.095],["M710.2 8.0 L693.7 83.0",1.351,0.059],["M740.4 33.0 L696.9 68.7",1.409,0.043],["M714.3 54.4 L733.0 83.0",1.452,0.04],["M765.4 33.0 L757.6 68.7 L758.8 79.4 L765.1 83.0 L775.9 83.0 L783.8 79.4 L796.9 68.7",1.492,0.069],["M804.7 33.0 L793.7 83.0",1.562,0.04],["M833.3 33.0 L822.3 83.0",1.602,0.04],["M828.6 54.4 L834.5 43.7 L843.2 36.6 L851.1 33.0 L861.9 33.0",1.642,0.04]];

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
        viewBox="0 0 869.9 91.0"
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
            d="M 2 62 C 226 57, 435 64, 609 59 S 809 58, 868 61"
          />
        </g>
      </svg>
    </div>
  );
};

export default Loader;
