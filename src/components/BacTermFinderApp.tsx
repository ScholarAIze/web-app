import React, { useState } from 'react';
import Navigation from './ui/Navigation';
import HeroSection from './sections/HeroSection';
import IntroductionSection from './sections/IntroductionSection';
import StructureSection from './sections/StructureSection';
import MethodsSection from './sections/MethodsSection';
import ResultsSection from './sections/ResultsSection';
import ImpactSection from './sections/ImpactSection';
import AuthorsSection from './sections/AuthorsSection';
import { useScroll } from '../hooks/useScroll';

const BacTermFinderApp: React.FC = () => {
  const scrolled = useScroll();
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#F9F9F9] text-stone-800 selection:bg-science-teal selection:text-white">
      <Navigation 
        scrolled={scrolled} 
        menuOpen={menuOpen} 
        setMenuOpen={setMenuOpen}
        onScrollToSection={scrollToSection}
      />
      
      <HeroSection onScrollToSection={scrollToSection} />

      <main>
        <IntroductionSection />
        <StructureSection />
        <MethodsSection />
        <ResultsSection />
        <ImpactSection />
        <AuthorsSection />
      </main>

      <footer className="bg-stone-900 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <p className="text-stone-400">
            © 2025 BacTermFinder. A Scholaraize Project.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default BacTermFinderApp;
