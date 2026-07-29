import { useState, useEffect, useRef } from 'react';

/**
 * Split-flap style flip animation (top -> bottom), like an airport
 * departure board / flip clock. Cycles through `texts`.
 */
const FlipText = ({ texts = [], interval = 2200, flipDuration = 650 }) => {
  const [index, setIndex] = useState(0);
  const [flipping, setFlipping] = useState(false);
  const intervalRef = useRef();
  const timeoutRef = useRef();

  useEffect(() => {
    if (texts.length < 2) return undefined;

    intervalRef.current = setInterval(() => {
      setFlipping(true);
      timeoutRef.current = setTimeout(() => {
        setIndex((i) => (i + 1) % texts.length);
        setFlipping(false);
      }, flipDuration);
    }, interval);

    return () => {
      clearInterval(intervalRef.current);
      clearTimeout(timeoutRef.current);
    };
  }, [texts, interval, flipDuration]);

  const nextIndex = (index + 1) % texts.length;

  return (
    <span className="flip-text" style={{ '--flip-dur': `${flipDuration}ms` }}>
      <span className="flip-text-measure" aria-hidden="true">
        {texts.reduce((a, b) => (b.length > a.length ? b : a), '')}
      </span>
      <span className={`flip-text-card${flipping ? ' is-flipping-out' : ''}`}>
        {texts[index]}
      </span>
      {flipping && (
        <span className="flip-text-card flip-text-incoming is-flipping-in">
          {texts[nextIndex]}
        </span>
      )}
    </span>
  );
};

export default FlipText;
