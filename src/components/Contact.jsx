import { useState } from 'react';

const EMAIL = 'kthakur0578@gmail.com';

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch {
      /* clipboard unavailable — link below still works */
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
          <div className="c-info">
            <span className="c-status">
              <span className="status-dot-ico"><span className="status-dot"></span></span>
              Available for new opportunities
            </span>

            <h3 className="c-heading">Let's build something<br /><em>great</em> together.</h3>

            <p className="c-lead">
              Open to freelance work, collaborations, and full-time roles in web development and GenAI engineering.
              Reach out anytime — I usually reply within a day.
            </p>

            <button type="button" className="c-copy" onClick={copyEmail} aria-label="Copy email address">
              <span className="c-copy-ico" aria-hidden="true">
                {copied ? (
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                ) : (
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="14" x="8" y="8" rx="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
                )}
              </span>
              {copied ? 'Copied!' : EMAIL}
            </button>
          </div>

          <div className="c-methods">
            <a href={`mailto:${EMAIL}`} className="c-method">
              <span className="c-method-ico">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
              </span>
              <span className="c-method-txt">
                <span className="c-method-label">Email</span>
                <span className="c-method-val">{EMAIL}</span>
              </span>
              <span className="c-method-arr" aria-hidden="true">→</span>
            </a>

            <a href="https://linkedin.com/in/kaushalt18" target="_blank" rel="noopener" className="c-method">
              <span className="c-method-ico c-method-ico--brand">
                <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <rect width="24" height="24" rx="4" fill="#0A66C2"/>
                  <path fill="#fff" d="M7.116 9.5H4.41v9.586h2.706V9.5zM5.763 8.34c.945 0 1.534-.62 1.534-1.396-.017-.793-.589-1.395-1.516-1.395-.928 0-1.534.602-1.534 1.395 0 .776.589 1.396 1.499 1.396h.017zM19.59 19.086h-.001V13.59c0-2.94-1.572-4.309-3.668-4.309-1.692 0-2.45.93-2.873 1.583v-1.364h-2.706c.036.762 0 9.586 0 9.586h2.706v-5.354c0-.287.02-.573.107-.778.235-.573.768-1.167 1.665-1.167 1.176 0 1.664.882 1.664 2.175v5.124h2.706z"/>
                </svg>
              </span>
              <span className="c-method-txt">
                <span className="c-method-label">LinkedIn</span>
                <span className="c-method-val">/in/kaushalt18</span>
              </span>
              <span className="c-method-arr" aria-hidden="true">→</span>
            </a>

            <a href="https://github.com/kaushalt18" target="_blank" rel="noopener" className="c-method">
              <span className="c-method-ico">
                <svg width="17" height="17" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </span>
              <span className="c-method-txt">
                <span className="c-method-label">GitHub</span>
                <span className="c-method-val">@kaushalt18</span>
              </span>
              <span className="c-method-arr" aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
