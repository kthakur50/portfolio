import { useEffect, useState } from 'react';
import GradientWaves from './GradientWaves';

// Full-viewport animated background used behind the entire site.
// Deep indigo → violet palette, dialed down slightly so the waves
// stay subtle in the background instead of competing with content.
//
// The raymarched scene is tuned for a wide/landscape aspect ratio;
// on narrow portrait screens (phones, most tablets) the same zoom/
// height reads as too tight or too flat, so we nudge a few uniforms
// based on viewport width to keep the wave composition looking
// consistent across devices.
const getResponsiveProps = () => {
  if (typeof window === 'undefined') {
    return { zoom: 0.95, height: 5.5, waveScale: 0.55, fogDepth: 24, detail: 'medium' };
  }
  const w = window.innerWidth;
  // Coarse-pointer (touch) devices are usually phones/tablets on battery —
  // drop the raymarch step count so the background stays smooth instead
  // of competing with scroll/animation work on weaker GPUs.
  const isCoarse = window.matchMedia?.('(pointer: coarse)').matches;
  const detail = isCoarse || w <= 768 ? 'low' : 'medium';
  if (w <= 480) {
    return { zoom: 0.72, height: 4.4, waveScale: 0.62, fogDepth: 19, detail };
  }
  if (w <= 768) {
    return { zoom: 0.8, height: 4.8, waveScale: 0.6, fogDepth: 21, detail };
  }
  if (w <= 1024) {
    return { zoom: 0.88, height: 5.1, waveScale: 0.58, fogDepth: 22, detail };
  }
  return { zoom: 0.95, height: 5.5, waveScale: 0.55, fogDepth: 24, detail };
};

const SiteBackground = () => {
  const [props, setProps] = useState(getResponsiveProps);

  useEffect(() => {
    let raf = 0;
    const onResize = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setProps(getResponsiveProps()));
    };
    window.addEventListener('resize', onResize, { passive: true });
    window.addEventListener('orientationchange', onResize, { passive: true });
    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('orientationchange', onResize);
    };
  }, []);

  return (
    <div className="site-waves-bg" aria-hidden="true">
      <GradientWaves
        horizonColor="#0b0620"
        waveColor="#6d28d9"
        crestColor="#c4b5fd"
        speed={0.28}
        amplitude={4.2}
        waveScale={props.waveScale}
        waveRatio={0.9}
        swell={38}
        turbulence={20}
        tilt={1.15}
        zoom={props.zoom}
        height={props.height}
        fogDepth={props.fogDepth}
        detail={props.detail}
        brightness={0.65}
        opacity={0.24}
        mouseInteraction={true}
        parallaxStrength={0.4}
        grain={true}
        grainIntensity={0.035}
      />
    </div>
  );
};

export default SiteBackground;
