const About = () => (
  <section id="about">
    <div className="wrap">
      <div className="sec-hd sr" data-n="01">
        <span className="sec-hd-icon" aria-hidden="true">
          <svg viewBox="2 2 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
        </span>
        <h2>About<em>.</em></h2>
      </div>

      <div className="about-bio sr" style={{ transitionDelay: '.04s' }}>
        <p className="about-para">
          <em>AI Software Engineer</em> with <strong>1+ year of experience</strong> building
          production-grade web apps at <em>RMSI, Noida</em> — working across the full stack with{' '}
          <em>React</em>, <em>Next.js</em>, <em>TypeScript</em>, and <em>Python</em>.
          Specialize in <strong>GIS &amp; interactive mapping</strong> using <em>Leaflet.js</em>,
          building dynamic layers, custom markers, and real-time data overlays for complex workflows.
        </p>
        <p className="about-para">
          Deeply focused on the intersection of <em>modern frontend</em> and{' '}
          <em>Generative AI</em> — integrating <strong>LLMs</strong> and <strong>AI-powered features</strong>{' '}
          into real products, not just prototypes. Every project is an opportunity to make
          something <strong>faster, smarter, and easier to use</strong>.
        </p>
      </div>

      <div className="about-stats sr" style={{ transitionDelay: '.08s' }}>
        <div className="about-stat">
          <span className="about-stat-ico" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          </span>
          <span className="about-stat-num">1+</span>
          <span className="about-stat-label">Years Experience</span>
        </div>
        <div className="about-stat">
          <span className="about-stat-ico" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg>
          </span>
          <span className="about-stat-num">10+</span>
          <span className="about-stat-label">Projects Shipped</span>
        </div>
        <div className="about-stat">
          <span className="about-stat-ico" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 10 10"/><path d="M12 2v10l7.07 7.07"/></svg>
          </span>
          <span className="about-stat-num">GenAI</span>
          <span className="about-stat-label">&amp; GIS Focus</span>
        </div>
      </div>
    </div>
  </section>
);

export default About;
