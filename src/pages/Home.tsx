import React from 'react';

// Components
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import ServicesSection from '../components/sections/ServicesSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import ContactSection from '../components/sections/ContactSection';

const Home: React.FC = () => {

  return (
    <div className="pt-16">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};

export default Home; 