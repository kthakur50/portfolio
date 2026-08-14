import HeroCube from './HeroCube';

const Hero = () => (
  <section id="home">
    <div className="tube-light" aria-hidden="true">
      <div className="tube-bar"></div>
    </div>
    <div className="wrap">

      <div className="hero-card sr on">
        <div className="hero-card-grid" aria-hidden="true"></div>

        <div className="hero-card-inner">
          <div className="hero-card-text">
            <h1 className="hero-name">
              <span className="ac-plain">Kaushal</span> <span className="ac">Thakur</span>
            </h1>
            <p className="hero-card-sub">कौशल ठाकुर<span className="hero-card-sub-comma">,</span> B.Tech CSE</p>
            <div className="hero-card-roles">
              <p>Software Engineer &amp; Full Stack Developer</p>
              <p>Junior Engineer at RMSI</p>
            </div>
          </div>

          <div className="hero-card-cube">
            <div className="hero-card-cube-ring" aria-hidden="true"></div>
            <HeroCube />
          </div>
        </div>
      </div>

      <div className="hero-social-row sr" style={{ transitionDelay: '.08s' }}>
        <a href="https://github.com/kaushalt18" target="_blank" rel="noopener" aria-label="GitHub" className="hero-social-ico">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
          </svg>
        </a>
        <a href="https://linkedin.com/in/kaushalt18" target="_blank" rel="noopener" aria-label="LinkedIn" className="hero-social-ico">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.24 8.24h4.5V23H.24V8.24zM8.13 8.24h4.31v2.01h.06c.6-1.14 2.07-2.34 4.26-2.34 4.55 0 5.39 3 5.39 6.9V23h-4.5v-6.34c0-1.51-.03-3.46-2.11-3.46-2.11 0-2.43 1.65-2.43 3.35V23h-4.5V8.24z"/>
          </svg>
        </a>
        <a href="https://x.com/kaushalt18" target="_blank" rel="noopener" aria-label="X" className="hero-social-ico">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        </a>
        <a href="#" aria-label="Resume" className="hero-social-ico">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
            <polyline points="14,2 14,8 20,8"/>
            <line x1="16" y1="13" x2="8" y2="13"/>
            <line x1="16" y1="17" x2="8" y2="17"/>
            <line x1="10" y1="9" x2="8" y2="9"/>
          </svg>
        </a>
        <a href="mailto:kthakur0578@gmail.com" aria-label="Email" className="hero-social-ico">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="20" height="16" x="2" y="4" rx="2"/>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
          </svg>
        </a>
      </div>

    </div>
  </section>
);

export default Hero;
