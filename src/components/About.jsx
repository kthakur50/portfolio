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
    desc: 'Scalable web apps with React, Next.js, Node.js & Express — clean, user-centric UI backed by well-structured REST APIs and databases.',
  },
  {
    icon: <IconGenAI />,
    title: 'Generative AI',
    desc: 'AI agents, RAG pipelines and LLM-powered features built with the OpenAI API & LangChain, focused on shipping practical, production-ready apps.',
  },
];

const About = () => (
  <section id="about">
    <div className="wrap">
      <div className="sec-hd" data-n="01">
        <h2>
          <span className="sec-hd-ico" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
            </svg>
          </span>
          About<em>.</em>
        </h2>
      </div>

      <div className="about-main">
        <div className="about-bio sr sr-fade-left" style={{ transitionDelay: '.04s' }}>
          <p className="about-para">
            <em>AI Software Engineer</em> with <strong>1+ year of experience</strong> shipping
            production-grade applications at <em>RMSI, Noida</em> across <em>React</em>,{' '}
            <em>Next.js</em>, <em>TypeScript</em>, and <em>Python</em>, with a specialization in{' '}
            <strong>GIS &amp; interactive mapping</strong> using <em>Leaflet.js</em>. Now focused
            on fusing modern frontend engineering with <strong>Generative AI</strong> — embedding{' '}
            <em>LLMs</em> into real, production-ready products.
          </p>
          <p className="about-para">
            Driven by clean architecture and thoughtful UX, I enjoy turning ambiguous problems
            into <strong>reliable, well-tested products</strong> — and I'm always exploring the
            next tool or technique that makes that process faster.
          </p>
          <p className="about-para">
            Along the way I've picked up a habit of documenting decisions clearly and writing{' '}
            <strong>maintainable code</strong>, so teams I work with can move fast without
            piling up technical debt.
          </p>
        </div>

        <div className="about-focus-list">
          {FOCUS_AREAS.map((f, i) => (
            <div
              key={f.title}
              className={`about-focus-row sr ${i % 2 === 0 ? 'sr-fade-left' : 'sr-fade-right'}`}
              style={{ transitionDelay: `${0.1 + i * 0.08}s` }}
            >
              <div className="about-focus-ico">{f.icon}</div>
              <div className="about-focus-body">
                <h3 className="about-focus-title">{f.title}</h3>
                <p className="about-focus-desc">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
