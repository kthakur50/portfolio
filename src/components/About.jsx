/* ─────────────── Focus-area icons ─────────────── */
const IconFullstack = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </svg>
);

const IconGenAI = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="6" y="6" width="12" height="12" rx="2" />
    <rect x="10" y="10" width="4" height="4" />
    <path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" />
  </svg>
);

const FOCUS_AREAS = [
  {
    icon: <IconFullstack />,
    title: 'Fullstack Development',
    desc: 'Engineering scalable full-stack web applications with React, Next.js, Node.js & Express — clean, user-centric UI/UX backed by well-structured REST APIs and databases.',
  },
  {
    icon: <IconGenAI />,
    title: 'Generative AI',
    desc: 'Building AI agents, RAG pipelines, and LLM-powered features with the OpenAI API & LangChain to ship intelligent, production-ready applications.',
  },
];

const About = () => (
  <section id="about">
    <div className="wrap">
      <div className="sec-hd sr" data-n="01">
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
          something faster, smarter, and easier to use.
        </p>
      </div>

      <div className="about-focus-grid">
        {FOCUS_AREAS.map((f, i) => (
          <div
            key={f.title}
            className="about-focus-card sr"
            style={{ transitionDelay: `${0.1 + i * 0.08}s` }}
          >
            <span className="about-focus-num">{String(i + 1).padStart(2, '0')}</span>
            <div className="about-focus-ico">{f.icon}</div>
            <div className="about-focus-body">
              <h3 className="about-focus-title">{f.title}</h3>
              <p className="about-focus-desc">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default About;
