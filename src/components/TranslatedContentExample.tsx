import React from 'react';
import { useTranslatedData } from '../hooks/useTranslatedData';
import { useLanguage } from '../context/LanguageContext';

const TranslatedContentExample: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();
  const { 
    getHero, 
    getAbout, 
    getServices, 
    getProjects, 
    getContact,
    getStats,
    getCategories 
  } = useTranslatedData();

  const hero = getHero();
  const about = getAbout();
  const services = getServices();
  const projects = getProjects();
  const contact = getContact();
  const stats = getStats();
  const categories = getCategories();

  return (
    <div className="p-8 bg-gray-50 dark:bg-gray-900 min-h-screen overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Language Toggle */}
        <div className="mb-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Translated Content Example
          </h1>
          <button
            onClick={toggleLanguage}
            className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
          >
            Switch to {language === 'en' ? 'العربية' : 'English'}
          </button>
        </div>

        {/* Hero Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Hero Section</h2>
          <h3 className="text-xl font-semibold mb-2">{hero.title}</h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-2">{hero.subtitle}</p>
          <p className="text-gray-700 dark:text-gray-300">{hero.description}</p>
        </div>

        {/* About Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">About Section</h2>
          <h3 className="text-xl font-semibold mb-2">{about.title}</h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-2">{about.subtitle}</p>
          <p className="text-gray-700 dark:text-gray-300">{about.content}</p>
        </div>

        {/* Services Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map((service, index) => (
              <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <div className="text-2xl mb-2">{service.icon}</div>
                <h4 className="font-semibold mb-2">{service.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Projects Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.slice(0, 3).map((project, index) => (
              <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <h4 className="font-semibold mb-2">{project.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{project.description}</p>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  <p><strong>Category:</strong> {project.category}</p>
                  <p><strong>Location:</strong> {project.location}</p>
                  <p><strong>Status:</strong> {project.status}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Categories Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Categories</h2>
          <div className="flex flex-wrap gap-2">
            {categories.map((category, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-primary-100 dark:bg-primary-900/20 text-primary-800 dark:text-primary-200 rounded-full text-sm"
              >
                {category.name}
              </span>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Statistics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">{stat.number}</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Contact Information</h2>
          <div className="space-y-2">
            <p><strong>Address:</strong> {contact.address}</p>
            <p><strong>Phone:</strong> {contact.phone}</p>
            <p><strong>Email:</strong> {contact.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TranslatedContentExample; 