import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { HeroNavProvider } from './contexts/hero-nav-context';
import { PageTransitionProvider } from './contexts/page-transition-context';
import { Hero } from './app/about/hero/hero';
import { Intro } from './app/about/intro/intro';
import { ServicesPreview } from './app/about/services-preview/services-preview';
import { WorkTeaser } from './app/about/work-teaser/work-teaser';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import { InitialLoader, shouldShowLoader } from './components/loader/InitialLoader';
import { PageTransitionVeil } from './components/page-transition/PageTransitionVeil';
import { TransitionContent } from './components/page-transition/TransitionContent';

import { ServicesPage } from './app/services/services-page';
import { WorkPage } from './app/work/page';
import { RulesPage } from './app/rules/page';

// Custom Cursor Component
const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).tagName === 'A' || (e.target as HTMLElement).tagName === 'BUTTON') {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <div 
      className={`custom-cursor ${isHovered ? 'hovered' : ''}`}
      style={{ 
        left: `${mousePosition.x}px`, 
        top: `${mousePosition.y}px` 
      }}
    />
  );
};

const AboutPage = () => {
  return (
    <main className="min-h-screen bg-pearl-100 text-dark-100">
      <Hero />
      <Intro />
      <ServicesPreview />
      <WorkTeaser />
    </main>
  );
};

function PageBodyClass() {
  const location = useLocation();
  useEffect(() => {
    const lightThemePaths = ['/', '/about', '/services', '/work', '/rules'];
    const useLightTheme = lightThemePaths.includes(location.pathname);
    document.body.classList.toggle('page-pearl', useLightTheme);
    return () => document.body.classList.remove('page-pearl');
  }, [location.pathname]);
  return null;
}

export default function App() {
  const [showLoader, setShowLoader] = useState(() => shouldShowLoader());

  return (
    <Router>
      <AnimatePresence mode="wait">
        {showLoader && (
          <motion.div
            key="initial-loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <InitialLoader onComplete={() => setShowLoader(false)} />
          </motion.div>
        )}
      </AnimatePresence>
      <PageTransitionProvider>
        <PageBodyClass />
        <HeroNavProvider>
          <CustomCursor />
          <PageTransitionVeil />
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <TransitionContent>
                  <AboutPage />
                </TransitionContent>
              }
            />
            <Route
              path="/about"
              element={
                <TransitionContent>
                  <AboutPage />
                </TransitionContent>
              }
            />
            <Route
              path="/services"
              element={
                <TransitionContent>
                  <ServicesPage />
                </TransitionContent>
              }
            />
            <Route
              path="/work"
              element={
                <TransitionContent>
                  <WorkPage />
                </TransitionContent>
              }
            />
            <Route path="/rules" element={<RulesPage />} />
          </Routes>
          <Footer />
        </HeroNavProvider>
      </PageTransitionProvider>
    </Router>
  );
}
