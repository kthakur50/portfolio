import { useState } from 'react';

const EMAIL = 'kthakur0578@gmail.com';

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async (e) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch {
      /* clipboard unavailable — mailto still works via the button below */
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section id="contact">
      <div className="wrap">
        <div className="sec-hd sr" data-n="06">
          <span className="sec-hd-icon" aria-hidden="true">
            <svg viewBox="1 1 22 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
          </span>
          <h2>Contact<em>.</em></h2>
        </div>

        <div className="c-panel sr" style={{ transitionDelay: '.05s' }}>
          <span className="c-eyebrow">
            <span className="status-dot-ico"><span className="status-dot"></span></span>
            Available for new opportunities
          </span>

          <h3 className="c-heading">Let's build something<br /><em>great</em> together.</h3>

          <p className="c-lead">
            Open to freelance work, collaborations, and full-time roles in web development
            and GenAI engineering. Reach out anytime — I usually reply within a day.
          </p>

          <div className="c-cta-row">
            <a href={`mailto:${EMAIL}`} className="c-cta-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
              Say Hello
            </a>

            <button type="button" className="c-copy-inline" onClick={copyEmail}>
              <span className="c-copy-ico" aria-hidden="true">
                {copied ? (
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                ) : (
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="14" x="8" y="8" rx="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
                )}
              </span>
              {copied ? 'Copied to clipboard' : EMAIL}
            </button>
          </div>

          <div className="c-social-row">
            <a href="https://linkedin.com/in/kaushalt18" target="_blank" rel="noopener" className="c-social-btn" aria-label="LinkedIn">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
              </svg>
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com/kaushalt18" target="_blank" rel="noopener" className="c-social-btn" aria-label="GitHub">
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
