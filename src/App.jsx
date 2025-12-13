import React, { Suspense, lazy, useState, useEffect } from 'react';
import './App.css';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Education from './components/Education/Education';
import Achievements from './components/Achievements/Achievements';
import WorkApproach from './components/WorkApproach/WorkApproach';
import Languages from './components/Languages/Languages';
import Leadership from './components/Leadership/Leadership';
import Contact from './components/Contact/Contact';
import PageNavigation from './components/PageNavigation/PageNavigation';

const Projects = lazy(() => import('./components/Projects/Projects'));

function App() {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [sectionsVisible, setSectionsVisible] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const handler = (e) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100 && !sectionsVisible) {
        setSectionsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionsVisible]);

  return (
    <div className="app" data-reduced-motion={reducedMotion} data-page={currentPage}>
      <PageNavigation
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      <main id="main-content">
        {currentPage === 1 ? (
          <>
            <Hero />
            <div className={`page-sections ${sectionsVisible ? 'visible' : ''}`}>
              <Skills />
              <Experience />

              <Suspense fallback={
                <div className="loading-placeholder" style={{
                  minHeight: '80vh',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--grey)'
                }}>
                  Loading projects...
                </div>
              }>
                <Projects reducedMotion={reducedMotion} />
              </Suspense>

              <Contact />
            </div>
          </>
        ) : (
          <>
            <div className="page-two-content">
              <h1 className="page-two-title">About & Background</h1>
              <div className="about-intro">
                <p>A developer who blends AI tools with hands-on coding to design, build, and deploy applications.</p>
              </div>
              <Education />
              <Achievements />
              <WorkApproach />
              <Languages />
              <Leadership />
              <Contact />
            </div>
          </>
        )}
      </main>
    </div>
  );
}

export default App;
