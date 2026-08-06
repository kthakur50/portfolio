import { useEffect, useState } from 'react';

const Loader = () => {
  const [hidden, setHidden] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    document.body.classList.add('is-loading');
    const t1 = setTimeout(() => setHidden(true), 1400);
    const t2 = setTimeout(() => {
      setDone(true);
      document.body.classList.remove('is-loading');
    }, 1900);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  if (done) return null;

  return (
    <div className={`loader${hidden ? ' loader-hide' : ''}`} aria-hidden="true">
      <div className="loader-mark">
        <span className="loader-kt">KT</span>
        <span className="loader-dots">
          <span></span><span></span><span></span>
        </span>
      </div>
    </div>
  );
};

export default Loader;
