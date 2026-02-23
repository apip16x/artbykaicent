import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HeroNavProvider } from './contexts/hero-nav-context';
import { Hero } from './app/about/hero/hero';
import { Intro } from './app/about/intro/intro';
import { ServicesPreview } from './app/about/services-preview/services-preview';
import { WorkTeaser } from './app/about/work-teaser/work-teaser';
import { Navbar } from './components/navbar/navbar';
import { Button } from './components/button/button';

import { ServicesPage } from './app/services/services-page';
import { WorkPage } from './app/work/page';

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
    <main>
      <Hero />
      <Intro />
      <ServicesPreview />
      <WorkTeaser />
      <section className="py-32 px-8 flex flex-col items-center text-center border-b border-ink">
        <h2 className="font-display text-5xl mb-8 italic">Ready to get iced?</h2>
        <p className="max-w-xl text-lg mb-12">
          Private studio sessions available in Jakarta and Depok. 
          House calls available upon request for a small travel fee.
        </p>
        <Button size="lg" variant="primary">Book Appointment</Button>
      </section>
      <footer className="py-12 px-8 flex justify-between items-end bg-brand-midnight text-brand-beige">
        <div>
          <p className="font-display text-2xl">artbykaicent</p>
          <p className="text-sm opacity-50 mt-2">© 2024</p>
        </div>
        <div className="flex gap-4">
          <a href="#" className="hover:underline">Instagram</a>
          <a href="#" className="hover:underline">TikTok</a>
        </div>
      </footer>
    </main>
  );
};

export default function App() {
  return (
    <Router>
      <HeroNavProvider>
        <CustomCursor />
        <Navbar />
        <Routes>
        <Route path="/" element={<AboutPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/work" element={<WorkPage />} />
        {/* Add other routes as needed */}
        </Routes>
      </HeroNavProvider>
    </Router>
  );
}
