import React from 'react';

// Components
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import ServicesSection from '../components/sections/ServicesSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import PartnersSection from '../components/sections/PartnersSection';
import ContactSection from '../components/sections/ContactSection';

const Home: React.FC = () => {

  return (
    <div className="pt-16 overflow-hidden">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <PartnersSection />
      <ContactSection />
    </div>
  );
};

export default Home; 