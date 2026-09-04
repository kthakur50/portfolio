import GradientWaves from './GradientWaves';

// Full-viewport animated background used behind the entire site.
// Deep indigo → violet palette, dialed down slightly so the waves
// stay subtle in the background instead of competing with content.
const SiteBackground = () => (
  <div className="site-waves-bg" aria-hidden="true">
    <GradientWaves
      horizonColor="#0b0620"
      waveColor="#6d28d9"
      crestColor="#c4b5fd"
      speed={0.28}
      amplitude={4.2}
      waveScale={0.55}
      waveRatio={0.9}
      swell={38}
      turbulence={20}
      tilt={1.15}
      zoom={0.95}
      height={5.5}
      fogDepth={24}
      detail="medium"
      brightness={0.65}
      opacity={0.24}
      mouseInteraction={true}
      parallaxStrength={0.4}
      grain={true}
      grainIntensity={0.035}
    />
  </div>
);

export default SiteBackground;
