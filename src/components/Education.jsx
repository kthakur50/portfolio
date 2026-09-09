const Education = () => (
  <section id="education">
    <div className="wrap">
      <div className="sec-hd sr" data-n="05">
        <h2>Education<em>.</em></h2>
      </div>
      <div className="edu-list">
        <div className="edu-item sr" style={{ transitionDelay: '.07s' }}>
          <div className="edu-node">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%">
              <path d="M22 10v6M2 10l10-5 10 5-10 5-10-5z"/>
              <path d="M6 12v5c3.33 1.67 8.67 1.67 12 0v-5"/>
            </svg>
          </div>
          <div className="edu-card">
            <div className="edu-header-row">
              <div className="edu-deg-title">Bachelor of Computer Application</div>
              <span className="edu-yr">July 2019 – Aug 2022</span>
            </div>
            <div className="edu-inst">
              <span className="edu-inst-name">Mangalmay Institute of Management & Technology</span>
              <span className="edu-inst-sep"> · </span>
              <span className="edu-inst-loc">Greater Noida</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Education;
