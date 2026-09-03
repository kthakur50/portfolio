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
              Open to freelance work, collaborations, and full-time roles in web dev &amp; GenAI.
              Got something in mind? Let's talk.
            </p>

            <a href={`mailto:${EMAIL}`} className="c-email-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
              Say Hello
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
