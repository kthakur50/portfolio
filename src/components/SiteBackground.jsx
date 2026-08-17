import GradientWaves from './GradientWaves';

// Full-viewport animated background used behind the entire site.
// Deep indigo → violet palette, tuned for full visibility (higher
// brightness/opacity/fogDepth than the first pass) so the rolling
// waves read clearly instead of disappearing into the page background.
const SiteBackground = () => (
  <div className="site-waves-bg" aria-hidden="true">
    <GradientWaves
      horizonColor="#0b0620"
      waveColor="#4c1d95"
      crestColor="#c4b5fd"
      speed={0.28}
      amplitude={3.2}
      waveScale={0.55}
      waveRatio={0.9}
      swell={32}
      turbulence={16}
      tilt={1.15}
      zoom={0.95}
      height={5.5}
      fogDepth={24}
      detail="medium"
      brightness={0.75}
      opacity={0.4}
      mouseInteraction={true}
      parallaxStrength={0.4}
      grain={true}
      grainIntensity={0.035}
    />
  </div>
);

export default SiteBackground;
