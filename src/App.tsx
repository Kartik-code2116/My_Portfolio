import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { FAQ } from './components/FAQ';
import { InteractiveTerminal } from './components/InteractiveTerminal';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ParticleBackground } from './components/ParticleBackground';
import { ThemeCustomizer } from './components/ThemeCustomizer';
import { CustomCursor } from './components/CustomCursor';

function App() {
  const [particlesEnabled, setParticlesEnabled] = useState(true);
  const [isSinglePage, setIsSinglePage] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  // Handle smooth scroll when clicking navbar links (Single Page Mode)
  const handleNavClick = (sectionId: string) => {
    if (!isSinglePage) return; // Router handles multi-page clicks

    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // height of the navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
    }
  };

  // IntersectionObserver to auto-update active nav state on scroll (Single Page Mode)
  useEffect(() => {
    if (!isSinglePage) return;

    const sections = ['home', 'experience', 'education', 'skills', 'projects', 'faq', 'terminal', 'contact'];
    const observers = sections.map((sectionId) => {
      const el = document.getElementById(sectionId);
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            if (['terminal'].includes(sectionId)) {
              setActiveSection('projects');
            } else if (['faq'].includes(sectionId)) {
              setActiveSection('experience');
            } else {
              setActiveSection(sectionId);
            }
          }
        },
        { rootMargin: '-30% 0px -60% 0px' }
      );

      observer.observe(el);
      return { observer, el };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs && obs.el) {
          obs.observer.unobserve(obs.el);
        }
      });
    };
  }, [isSinglePage]);

  return (
    <Router>
      <CustomCursor />
      <ParticleBackground enabled={particlesEnabled} />
      <Navbar 
        isSinglePage={isSinglePage} 
        setIsSinglePage={setIsSinglePage} 
        activeSection={activeSection}
        onNavClick={handleNavClick}
      />
      
      <main style={{ position: 'relative', zIndex: 1, minHeight: '80vh', paddingTop: '80px' }}>
        {isSinglePage ? (
          // Single-Page Layout
          <>
            <Hero isSinglePage={isSinglePage} onProjectsClick={() => handleNavClick('projects')} />
            <Experience />
            <Education />
            <Skills />
            <Projects />
            <InteractiveTerminal />
            <FAQ />
            <Contact />
          </>
        ) : (
          // Multi-Page Layout
          <Routes>
            <Route path="/" element={<Hero isSinglePage={isSinglePage} onProjectsClick={() => handleNavClick('projects')} />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/education" element={<Education />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={
              <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
                <Contact />
                <InteractiveTerminal />
                <FAQ />
              </div>
            } />
          </Routes>
        )}
      </main>
      
      <Footer />
      <ThemeCustomizer 
        particlesEnabled={particlesEnabled} 
        setParticlesEnabled={setParticlesEnabled} 
      />
    </Router>
  );
}

export default App;
