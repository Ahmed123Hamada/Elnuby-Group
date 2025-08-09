import React, { Suspense } from 'react';

// Components
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import { LazyProjectsSection, LazyPartnersSection, LazyServicesSection, ComponentLoader } from '../components/LazyComponents';


const Home: React.FC = () => {

  return (
    <div className="pt-16 overflow-hidden">
      <HeroSection />
      <AboutSection />
      <Suspense fallback={<ComponentLoader />}>
        <LazyServicesSection />
      </Suspense>
      <Suspense fallback={<ComponentLoader />}>
        <LazyProjectsSection />
      </Suspense>
      <Suspense fallback={<ComponentLoader />}>
        <LazyPartnersSection />
      </Suspense>
    </div>
  );
};

export default Home; 