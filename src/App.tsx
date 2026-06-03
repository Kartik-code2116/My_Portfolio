import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { Publications } from './components/Publications';
import { OpenSource } from './components/OpenSource';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { InteractiveTerminal } from './components/InteractiveTerminal';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ParticleBackground } from './components/ParticleBackground';
import { ThemeCustomizer } from './components/ThemeCustomizer';
import { CustomCursor } from './components/CustomCursor';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [particlesEnabled, setParticlesEnabled] = useState(true);

  // Handle smooth scroll when clicking navbar links
  const handleNavClick = (sectionId: string) => {
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

  // IntersectionObserver to auto-update active nav state on scroll
  useEffect(() => {
    const sections = ['home', 'about', 'services', 'projects', 'publications', 'opensource', 'testimonials', 'faq', 'terminal', 'contact'];
    const observers = sections.map((sectionId) => {
      const el = document.getElementById(sectionId);
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            // Map sub-projects sections to highlight "projects" in navbar
            if (['publications', 'opensource', 'terminal'].includes(sectionId)) {
              setActiveSection('projects');
            } else if (['testimonials', 'faq'].includes(sectionId)) {
              setActiveSection('about');
            } else {
              setActiveSection(sectionId);
            }
          }
        },
        {
          rootMargin: '-30% 0px -60% 0px'
        }
      );

      observer.observe(el);
      return { observer, el };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) {
          obs.observer.unobserve(obs.el);
        }
      });
    };
  }, []);

  return (
    <>
      <CustomCursor />
      <ParticleBackground enabled={particlesEnabled} />
      <Navbar activeSection={activeSection} onNavClick={handleNavClick} />
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero onProjectsClick={() => handleNavClick('projects')} />
        <About />
        <Services />
        <Projects />
        <Publications />
        <OpenSource />
        <InteractiveTerminal />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <ThemeCustomizer 
        particlesEnabled={particlesEnabled} 
        setParticlesEnabled={setParticlesEnabled} 
      />
    </>
  );
}

export default App;
