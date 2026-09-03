const EMAIL = 'kthakur0578@gmail.com';

const Contact = () => {
  return (
    <section id="contact">
      <div className="wrap">
        <div className="sec-hd sr" data-n="06">
          <span className="sec-hd-icon" aria-hidden="true">
            <svg viewBox="1 1 22 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
          </span>
          <h2>Contact<em>.</em></h2>
          <p className="sec-hd-sub">Let's talk about your next project.</p>
        </div>

        <div className="c-wrap">
          <div className="c-info sr" style={{ transitionDelay: '.04s' }}>
            <h3 className="c-heading">Let's <em>build something</em> together.</h3>

            <p className="c-lead">
              Open to freelance work, collaborations, and full-time roles in web development
              and GenAI engineering. Got an idea, a role, or just want to say hi? Drop a
              message — I usually reply within a day.
            </p>

            <div className="c-quick">
              <a href={`mailto:${EMAIL}`} className="c-quick-item">
                <span className="c-quick-ico">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                </span>
                <span className="c-quick-text">
                  <span className="c-quick-label">Email</span>
                  <span className="c-quick-value">{EMAIL}</span>
                </span>
              </a>
              <a href="https://github.com/kaushalt18" target="_blank" rel="noopener" className="c-quick-item">
                <span className="c-quick-ico">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                </span>
                <span className="c-quick-text">
                  <span className="c-quick-label">GitHub</span>
                  <span className="c-quick-value">@kaushalt18</span>
                </span>
              </a>
              <a href="https://linkedin.com/in/kaushalt18" target="_blank" rel="noopener" className="c-quick-item">
                <span className="c-quick-ico">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.24 8.24h4.5V23H.24V8.24zM8.13 8.24h4.31v2.01h.06c.6-1.14 2.07-2.34 4.26-2.34 4.55 0 5.39 3 5.39 6.9V23h-4.5v-6.34c0-1.51-.03-3.46-2.11-3.46-2.11 0-2.43 1.65-2.43 3.35V23h-4.5V8.24z"/>
                  </svg>
                </span>
                <span className="c-quick-text">
                  <span className="c-quick-label">LinkedIn</span>
                  <span className="c-quick-value">/in/kaushalt18</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
