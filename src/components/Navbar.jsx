const Navbar = () => (
  <>
  <nav className="nav" id="nav">
    <div className="nav-inner" id="navInner">
      <div className="nav-grain" aria-hidden="true"></div>

      <div className="nav-top">
        <a className="nav-logo" href="#home">
          <span className="logo-k">kt<em>.</em></span>
        </a>

        <div className="nav-right" id="navLinks">
          <button className="nav-toggle" id="themeBtn" aria-label="Toggle theme">
            <svg className="i-moon" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3a7 7 0 0010 9.79z"/>
            </svg>
            <svg className="i-sun" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="5"/>
              <line x1="12" y1="1"  x2="12" y2="3"/>
              <line x1="12" y1="21" x2="12" y2="23"/>
              <line x1="4.22"  y1="4.22"  x2="5.64"  y2="5.64"/>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
              <line x1="1"  y1="12" x2="3"  y2="12"/>
              <line x1="21" y1="12" x2="23" y2="12"/>
              <line x1="4.22"  y1="19.78" x2="5.64"  y2="18.36"/>
              <line x1="18.36" y1="5.64"  x2="19.78" y2="4.22"/>
            </svg>
          </button>
          <button className="nav-ham" id="ham" aria-label="Search sections">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="7"/>
              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Desktop: search + section links expand INSIDE the navbar pill itself
          (no separate floating panel) — the bar grows wider/taller to fit. */}
      <div className="nav-expand" id="navExpand">
        <div className="nav-expand-search">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="7"/>
            <line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <input type="text" id="navSearchInputDesktop" placeholder="Search sections…" autoComplete="off" />
        </div>
        <div className="nav-expand-grid" id="navExpandGrid">
          <a href="#home" className="ne-link" data-label="home">
            <span className="ne-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg></span>
            <span>Home</span>
          </a>
          <a href="#about" className="ne-link" data-label="about">
            <span className="ne-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></span>
            <span>About</span>
          </a>
          <a href="#skills" className="ne-link" data-label="skills">
            <span className="ne-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 16 22 12 18 8"/><polyline points="6 8 2 12 6 16"/><line x1="14.5" y1="4" x2="9.5" y2="20"/></svg></span>
            <span>Skills</span>
          </a>
          <a href="#experience" className="ne-link" data-label="experience">
            <span className="ne-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect width="20" height="14" x="2" y="6" rx="2"/></svg></span>
            <span>Experience</span>
          </a>
          <a href="#projects" className="ne-link" data-label="projects">
            <span className="ne-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg></span>
            <span>Projects</span>
          </a>
          <a href="#education" className="ne-link" data-label="education">
            <span className="ne-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" x2="21" y1="22" y2="22"/><line x1="6" x2="6" y1="18" y2="11"/><line x1="10" x2="10" y1="18" y2="11"/><line x1="14" x2="14" y1="18" y2="11"/><line x1="18" x2="18" y1="18" y2="11"/><polygon points="12 2 20 7 4 7"/></svg></span>
            <span>Education</span>
          </a>
          <a href="#contact" className="ne-link" data-label="contact">
            <span className="ne-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg></span>
            <span>Contact</span>
          </a>
        </div>
        <p className="nav-expand-empty" id="navExpandEmpty">No sections match</p>
      </div>
    </div>
  </nav>

  <div className="nav-mob-overlay" id="navMobOverlay" aria-hidden="true"></div>

  <div className="nav-mob" id="navMob">
    <div className="nav-mob-search">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="7"/>
        <line x1="21" y1="21" x2="16.65" y2="16.65"/>
      </svg>
      <input type="text" id="navSearchInput" placeholder="Search sections…" autoComplete="off" />
    </div>
    <div className="nav-mob-grid" id="navMobGrid">
      <a href="#home" aria-label="Home" className="nm-home" data-label="home">
        <span className="nm-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg></span>
        <span className="nav-mob-label">Home</span>
      </a>
      <a href="#about" aria-label="About" className="nm-about" data-label="about">
        <span className="nm-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></span>
        <span className="nav-mob-label">About</span>
      </a>
      <a href="#skills" aria-label="Skills" className="nm-skills" data-label="skills">
        <span className="nm-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 16 22 12 18 8"/><polyline points="6 8 2 12 6 16"/><line x1="14.5" y1="4" x2="9.5" y2="20"/></svg></span>
        <span className="nav-mob-label">Skills</span>
      </a>
      <a href="#experience" aria-label="Experience" className="nm-experience" data-label="experience">
        <span className="nm-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect width="20" height="14" x="2" y="6" rx="2"/></svg></span>
        <span className="nav-mob-label">Experience</span>
      </a>
      <a href="#projects" aria-label="Projects" className="nm-projects" data-label="projects">
        <span className="nm-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg></span>
        <span className="nav-mob-label">Projects</span>
      </a>
      <a href="#education" aria-label="Education" className="nm-education" data-label="education">
        <span className="nm-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" x2="21" y1="22" y2="22"/><line x1="6" x2="6" y1="18" y2="11"/><line x1="10" x2="10" y1="18" y2="11"/><line x1="14" x2="14" y1="18" y2="11"/><line x1="18" x2="18" y1="18" y2="11"/><polygon points="12 2 20 7 4 7"/></svg></span>
        <span className="nav-mob-label">Education</span>
      </a>
      <a href="#contact" aria-label="Contact" className="nm-contact nm-span2" data-label="contact">
        <span className="nm-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg></span>
        <span className="nav-mob-label">Contact</span>
      </a>
    </div>
    <p className="nav-mob-empty" id="navMobEmpty">No sections match</p>
  </div>
  </>
);

export default Navbar;
