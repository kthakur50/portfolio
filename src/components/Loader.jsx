import { useEffect, useRef, useState } from 'react';

const LOAD_MS = 1400;
const HIDE_MS = 1900;

const Loader = () => {
  const [hidden, setHidden] = useState(false);
  const [done, setDone] = useState(false);
  const [pct, setPct] = useState(0);
  const rafRef = useRef(null);

  useEffect(() => {
    document.body.classList.add('is-loading');

    const start = performance.now();
    const tick = (now) => {
      const t = Math.min(1, (now - start) / LOAD_MS);
      const eased = 1 - Math.pow(1 - t, 3); // ease-out cubic — quick start, gentle finish
      setPct(Math.round(eased * 100));
      if (t < 1) rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    const t1 = setTimeout(() => setHidden(true), LOAD_MS);
    const t2 = setTimeout(() => {
      setDone(true);
      document.body.classList.remove('is-loading');
    }, HIDE_MS);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  if (done) return null;

  return (
    <div className={`loader${hidden ? ' loader-hide' : ''}`} aria-hidden="true">
      <div className="loader-inner">
        <span className="loader-tag">Portfolio<em>.</em>init</span>

        <div className="loader-mark-wrap">
          <span className="loader-mark">kt<em>.</em></span>
        </div>

        <div className="loader-progress">
          <div className="loader-bar-track">
            <div className="loader-bar-fill" style={{ width: `${pct}%` }} />
          </div>
          <span className="loader-pct">{String(pct).padStart(2, '0')}<em>%</em></span>
        </div>
      </div>
    </div>
  );
};

export default Loader;
