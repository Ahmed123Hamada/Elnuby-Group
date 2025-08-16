import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, MapPin, Calendar, Ruler, User, DollarSign, ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslatedData } from '../hooks/useTranslatedData';
import RobustImage from '../components/RobustImage';
import projectsBgImage from '../assast/Images/project/projectslider2.webp';

const Projects: React.FC = () => {
  const { t } = useTranslation();
  const { getProjects, getCategories, getStats } = useTranslatedData();
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const projectsPerPage = 6;

  const projects = getProjects();
  const categories = getCategories();
  const stats = getStats();

  // Initialize category from URL parameter
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [searchParams]);

  // Handle window resize for responsive pagination
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  // Calculate pagination
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const endIndex = startIndex + projectsPerPage;
  const currentProjects = filteredProjects.slice(startIndex, endIndex);

  // Reset to first page when category changes
  React.useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case t('completed'):
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case t('underConstruction'):
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      case t('inProgress'):
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to top of projects section
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCategoryClick = (category: any) => {
    if (category.id === 'all') {
      setSelectedCategory('all');
      setSearchParams({}); // Clear the category parameter
    } else {
      setSelectedCategory(category.name);
      setSearchParams({ category: category.name }); // Set the category parameter
    }
    // Scroll to top when category is clicked
  };

  return (
    <div className="pt-16 overflow-hidden">
      {/* Hero Section */}
      <section 
        className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(37, 99, 235, 0.8), rgba(247, 161, 63, 0.6)), url(${projectsBgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t('projectsTitle')}
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              {t('projectsSubtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white dark:bg-gray-900">
        <div className="container-custom">
          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryClick(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === (category.id === 'all' ? 'all' : category.name)
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {category.name}
              </button>
            ))}
          </motion.div>

          {/* Results Count */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="mb-8 text-center"
          >
            <p className="text-gray-600 dark:text-gray-400">
              {t('foundProjects')} <span className="font-semibold text-primary-600">{filteredProjects.length}</span> {t('projectsCount')}
              {totalPages > 1 && (
                <span className="ml-2">
                  ({t('page')} {currentPage} {t('of')} {totalPages})
                </span>
              )}
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
              {currentProjects.map((project, index) => (
                <motion.div
                  key={`${project.title}-${currentPage}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 card-hover group overflow-hidden"
                >
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    {project.image ? (
                      <RobustImage 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                        <div className="text-center text-white">
                          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                            <span className="text-2xl font-bold">N</span>
                          </div>
                          <h3 className="text-lg font-semibold">{project.title}</h3>
                        </div>
                      </div>
                    )}
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 right-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {project.category}
                    </div>

                    {/* Status Badge */}
                    <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(project.status)}`}>
                      {project.status}
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 h-20 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* Project Details */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center space-x-2 rtl:space-x-reverse text-sm text-gray-500 dark:text-gray-400">
                        <MapPin size={16} />
                        <span className="truncate">{project.location}</span>
                      </div>
                      <div className="flex items-center space-x-2 rtl:space-x-reverse text-sm text-gray-500 dark:text-gray-400">
                        <Ruler size={16} />
                        <span>{project.area}</span>
                      </div>

                      {project.client && (
                        <div className="flex items-center space-x-2 rtl:space-x-reverse text-sm text-gray-500 dark:text-gray-400">
                          <User size={16} />
                          <span className="truncate">{project.client}</span>
                        </div>
                      )}

                    </div>

                    {/* Features */}
                    {project.features && project.features.length > 0 && (
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">{t('features')}:</h4>
                        <div className="flex flex-wrap gap-1">
                          {project.features.slice(0, 3).map((feature: string, featureIndex: number) => (
                            <span
                              key={featureIndex}
                              className="inline-block bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 text-xs px-2 py-1 rounded-full"
                            >
                              {feature}
                            </span>
                          ))}
                          {project.features.length > 3 && (
                            <span className="inline-block bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs px-2 py-1 rounded-full">
                              +{project.features.length - 3} {t('more')}
                            </span>
                          )}
                        </div>
                      </div>
                    )}
                    
                    <div className="flex items-center justify-between">
                      <Link 
                        to={`/project/${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                        onClick={() => {
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="flex items-center space-x-2 rtl:space-x-reverse text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-semibold transition-colors duration-200 group"
                      >
                        <span>{t('viewDetails')}</span>
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
                      </Link>
                      
                      <div className="flex items-center space-x-2 rtl:space-x-reverse text-sm text-gray-500 dark:text-gray-400">
                        <Calendar size={16} />
                        <span>{project.year}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-12"
            >
              {/* Mobile Pagination - Stacked Layout */}
              <div className="flex flex-col items-center space-y-4 sm:hidden">
                {/* Page Info */}
                <div className="text-center text-sm text-gray-600 dark:text-gray-400">
                  {t('page')} {currentPage} {t('of')} {totalPages}
                </div>
                
                {/* Navigation Buttons */}
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="flex items-center space-x-2 rtl:space-x-reverse px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 text-sm"
                  >
                    <ChevronLeft size={14} />
                    <span className="hidden min-[480px]:inline">{t('previous')}</span>
                  </button>

                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="flex items-center space-x-2 rtl:space-x-reverse px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 text-sm"
                  >
                    <span className="hidden min-[480px]:inline">{t('next')}</span>
                    <ChevronRight size={14} />
                  </button>
                </div>
              </div>

              {/* Desktop Pagination - Horizontal Layout */}
              <div className="hidden sm:flex justify-center items-center space-x-2 rtl:space-x-reverse">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="flex items-center space-x-2 rtl:space-x-reverse px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                >
                  <ChevronLeft size={16} />
                  <span>{t('previous')}</span>
                </button>

                                 {/* Page Numbers - Responsive Display */}
                 <div className="flex space-x-1 rtl:space-x-reverse">
                   {(() => {
                     const pages = [];
                     const maxVisiblePages = windowWidth < 640 ? 5 : 7; // Show fewer pages on small screens
                     
                     if (totalPages <= maxVisiblePages) {
                       // Show all pages if total is small
                       for (let i = 1; i <= totalPages; i++) {
                         pages.push(i);
                       }
                     } else {
                       // Smart pagination for larger numbers
                       const start = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
                       const end = Math.min(totalPages, start + maxVisiblePages - 1);
                       
                       // Always show first page
                       if (start > 1) {
                         pages.push(1);
                         if (start > 2) pages.push('...');
                       }
                       
                       // Show middle pages
                       for (let i = start; i <= end; i++) {
                         if (i === 1 || i === totalPages) continue; // Skip if already added
                         pages.push(i);
                       }
                       
                       // Always show last page
                       if (end < totalPages) {
                         if (end < totalPages - 1) pages.push('...');
                         pages.push(totalPages);
                       }
                     }
                     
                     return pages.map((page, index) => (
                       <button
                         key={index}
                         onClick={() => typeof page === 'number' ? handlePageChange(page) : null}
                         disabled={typeof page !== 'number'}
                         className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                           typeof page === 'number'
                             ? currentPage === page
                               ? 'bg-primary-600 text-white'
                               : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                             : 'px-2 text-gray-400 dark:text-gray-500 cursor-default'
                         }`}
                       >
                         {page}
                       </button>
                     ));
                   })()}
                 </div>

                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="flex items-center space-x-2 rtl:space-x-reverse px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                >
                  <span>{t('next')}</span>
                  <ChevronRight size={16} />
                </button>
              </div>
            </motion.div>
          )}

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-20 pt-16 border-t border-gray-200 dark:border-gray-700"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 dark:text-gray-300 text-sm">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects; 