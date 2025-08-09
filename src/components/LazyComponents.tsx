import { lazy } from 'react';

// Lazy load heavy components for better performance
export const LazyProjectsSection = lazy(() => import('./sections/ProjectsSection'));
export const LazyPartnersSection = lazy(() => import('./sections/PartnersSection'));
export const LazyServicesSection = lazy(() => import('./sections/ServicesSection'));
export const LazyContactSection = lazy(() => import('./sections/ContactSection'));

// Loading component for suspense fallback
export const ComponentLoader: React.FC = () => (
  <div className="flex items-center justify-center py-20">
    <div className="flex flex-col items-center">
      <div className="w-8 h-8 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin"></div>
      <p className="mt-4 text-gray-600 dark:text-gray-300">Loading...</p>
    </div>
  </div>
);
