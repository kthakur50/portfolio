const Navbar = () => (
  <nav className="nav" id="nav">
    <div className="nav-inner">
      <div className="nav-grain" aria-hidden="true"></div>

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
      </div>
    </div>
  </nav>
);

export default Navbar;
