import { useState } from 'react';

const EMAIL = 'kthakur0578@gmail.com';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || 'a visitor'}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

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

        <div className="c-simple sr" style={{ transitionDelay: '.05s' }}>
          <h3 className="c-heading">Let's <em>build together.</em></h3>

          <p className="c-lead c-lead-line">
            Open to freelance work, collaborations, and full-time roles in web development and GenAI engineering.
            Got an idea, a role, or just want to say hi? Drop a message below — I usually reply within a day.
          </p>

          <form className="c-form" onSubmit={handleSubmit}>
            <div className="c-form-row">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <textarea
              name="message"
              placeholder="Tell me a bit about the project or opportunity..."
              rows="5"
              value={form.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit" className="c-form-submit">Send message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
