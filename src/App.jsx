import { useEffect } from 'react';
import './styles/main.css';

import SiteBackground   from './components/SiteBackground';
import Navbar           from './components/Navbar';
import Hero             from './components/Hero';
import About            from './components/About';
import Skills           from './components/Skills';
import Experience       from './components/Experience';
import Projects         from './components/Projects';
import Education        from './components/Education';
import Contact          from './components/Contact';
import Footer           from './components/Footer';
import SectionDivider   from './components/SectionDivider';
import { initAll } from './portfolio';

const App = () => {
  useEffect(() => { initAll(); }, []);

  return (
    <>
      <SiteBackground />
      <Navbar />
      <main>
        <Hero />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Skills />
        <SectionDivider />
        <Experience />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <Education />
        <SectionDivider />
        <Contact />
      </main>
      <Footer />
      <div className="bottom-blur" aria-hidden="true"></div>
    </>
  );
};

export default App;
