import React, { useState, useEffect } from 'react';
import Navbar from './common/Navbar';
import Footer from './common/Footer';
import ChatWidget from './common/ChatWidget';
import LegalModal from './common/LegalModal';
import ImageModal from './common/ImageModal';
import Loader from './common/Loader';
import WelcomeScreen from './common/WelcomeScreen';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import ProjectsSection from './sections/ProjectsSection';
import SkillsSection from './sections/SkillsSection';
import ExpertiseSection from './sections/ExpertiseSection';
import ContactSection from './sections/ContactSection';
import CircuitBackground from './animations/CircuitBackground';
import './home.scss';

const Home = () => {

  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);
  const [currentImage, setCurrentImage] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showWelcome, setShowWelcome] = useState(true);


  // Background effects
  const [ambientParticles] = useState([
    { id: 1, className: 'particle-1' },
    { id: 2, className: 'particle-2' },
    { id: 3, className: 'particle-3' },
    { id: 4, className: 'particle-4' }
  ]);

  useEffect(() => {
    const handleResize = () => {
      document.body.style.overflow = 'hidden';
      requestAnimationFrame(() => {
        document.body.style.overflow = '';
      });
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); 

    const welcomeTimer = setTimeout(() => {
      setShowWelcome(false);
    }, 4500); 

    return () => {
      clearTimeout(loadingTimer);
      clearTimeout(welcomeTimer);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 500);
  }, []);

  useEffect(() => {
    const sectionIds = ['home', 'about', 'projects', 'skills', 'expertise', 'contact'];
    const sectionElements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!sectionElements.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target?.id) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        threshold: [0.3, 0.6],
        rootMargin: '-20% 0px -55% 0px'
      }
    );

    sectionElements.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      element.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
      setActiveSection(sectionId);
      setIsNavOpen(false);
    }
  };

  return (
    <div className={`portfolio-container ${isLoaded ? 'loaded' : 'loading'}`}>
      {isLoading && <Loader isLoading={isLoading} />}
      {showWelcome && <WelcomeScreen showWelcome={showWelcome} />}
      
      {/* Background Effects */}
      <CircuitBackground />
      <div className="ambient-background">
        {ambientParticles.map(particle => (
          <div key={particle.id} className={`particle ${particle.className}`}></div>
        ))}
      </div>

      {/* Navigation */}
      <Navbar 
        activeSection={activeSection} 
        scrollToSection={scrollToSection} 
        isNavOpen={isNavOpen} 
        setIsNavOpen={setIsNavOpen} 
      />

      {/* Sections */}
      <HeroSection />
      
      <AboutSection />
      <ProjectsSection 
        setShowImageModal={setShowImageModal} 
        setCurrentImage={setCurrentImage} 
      />
      <SkillsSection />
      <ExpertiseSection />
      <ContactSection activeSection={activeSection} />

      {/* Chat Widget */}
      <ChatWidget 
        isChatOpen={isChatOpen} 
        setIsChatOpen={setIsChatOpen} 
      />

      {/* Modals */}
      <LegalModal 
        showTerms={showTerms} 
        showPrivacy={showPrivacy} 
        setShowTerms={setShowTerms} 
        setShowPrivacy={setShowPrivacy} 
      />
      
      {showImageModal && (
        <ImageModal 
          showImageModal={showImageModal} 
          setShowImageModal={setShowImageModal} 
          currentImage={currentImage} 
        />
      )}

      {/* Footer */}
      <Footer 
        setShowTerms={setShowTerms} 
        setShowPrivacy={setShowPrivacy} 
      />
    </div>
  );
};

export default Home;