import React, { useState, useEffect, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, MapPin, Calendar, Ruler, User, DollarSign, ChevronLeft, ChevronRight, ChevronDown, X } from 'lucide-react';
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
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
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

  // Handle click outside dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
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

  // Status badge removed per request

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
      {/* Modern Hero Section */}
      <section 
        className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url(${projectsBgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Modern decorative elements */}
        <div className="absolute inset-0 overflow-hidden opacity-60">
          <div className="absolute top-20 left-8 w-32 h-32 bg-primary-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-8 w-40 h-40 bg-primary-600/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-primary-500/10 rounded-full blur-2xl"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto py-20"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6"
            >
              <span className="inline-block px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-medium border border-white/20">
                {t('language') === 'Language' ? 'Our Portfolio' : 'محفظتنا'}
              </span>
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white to-primary-200 bg-clip-text text-transparent">
                {t('projectsTitle')}
              </span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-8">
              {t('projectsSubtitle')}
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary-400 mb-1">250+</div>
                <div className="text-sm text-gray-300">{t('language') === 'Language' ? 'Projects' : 'مشروع'}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary-400 mb-1">25+</div>
                <div className="text-sm text-gray-300">{t('language') === 'Language' ? 'Years' : 'سنة'}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary-400 mb-1">50+</div>
                <div className="text-sm text-gray-300">{t('language') === 'Language' ? 'Clients' : 'عميل'}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary-400 mb-1">98%</div>
                <div className="text-sm text-gray-300">{t('language') === 'Language' ? 'Satisfaction' : 'رضا'}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modern Projects Section */}
      <section id="projects" className="py-24 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Modern Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            {/* Mobile: Modern Custom Dropdown */}
            <div className="block md:hidden">
              <div className="relative max-w-sm mx-auto" ref={dropdownRef}>
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full flex items-center justify-between px-6 py-4 rounded-2xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl border-2 border-white/30 dark:border-gray-700/30 text-gray-700 dark:text-gray-200 shadow-xl hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-primary-500/20 focus:border-primary-500 transition-all duration-300 font-semibold"
                  aria-label={t('language') === 'Language' ? 'Select project category' : 'اختر فئة المشروع'}
                >
                  <span className="truncate">
                    {selectedCategory === 'all' ? t('allProjects') : categories.find(cat => cat.name === selectedCategory)?.name || t('allProjects')}
                  </span>
                  <motion.div
                    animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-primary-500" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 right-0 mt-2 bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl rounded-2xl border border-white/30 dark:border-gray-700/30 shadow-2xl z-50 overflow-hidden"
                    >
                      {categories.map((category, index) => (
                        <motion.button
                          key={category.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.2, delay: index * 0.05 }}
                          onClick={() => {
                            handleCategoryClick(category);
                            setIsDropdownOpen(false);
                          }}
                          className={`w-full flex items-center justify-between px-6 py-4 text-left transition-all duration-200 ${
                            selectedCategory === (category.id === 'all' ? 'all' : category.name)
                              ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300'
                              : 'text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700/50'
                          }`}
                        >
                          <span className="font-medium">{category.name}</span>
                          {selectedCategory === (category.id === 'all' ? 'all' : category.name) && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="w-2 h-2 bg-primary-500 rounded-full"
                            />
                          )}
                        </motion.button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Desktop: Modern Button Grid */}
            <div className="hidden md:flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryClick(category)}
                  className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                    selectedCategory === (category.id === 'all' ? 'all' : category.name)
                      ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/30 scale-105'
                      : 'bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900/40 hover:text-primary-700 dark:hover:text-primary-300 border border-white/20 dark:border-gray-700/20'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Modern Results Count */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <div className="inline-flex items-center px-6 py-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl border border-white/20 dark:border-gray-700/20 shadow-lg">
              <span className="text-gray-600 dark:text-gray-400">
                {t('foundProjects')} <span className="font-bold text-primary-600 dark:text-primary-400">{filteredProjects.length}</span> {t('projectsCount')}
              </span>
              {totalPages > 1 && (
                <span className="ml-3 px-3 py-1 bg-primary-100 dark:bg-primary-900/40 text-primary-700 dark:text-primary-300 rounded-full text-sm font-semibold">
                  {t('page')} {currentPage} {t('of')} {totalPages}
                </span>
              )}
            </div>
          </motion.div>

          {/* Modern Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
              {currentProjects.map((project, index) => (
                <motion.div
                  key={`${project.title}-${currentPage}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-white/20 dark:border-gray-700/20"
                  whileHover={{ y: -8 }}
                >
                  <Link 
                    to={`/project/${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="block w-full h-full"
                    aria-label={`View details for ${project.title}`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-primary-600/10 opacity-60 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                  {/* Modern Project Image */}
                  <div className="relative h-56 overflow-hidden">
                    {project.image ? (
                      <RobustImage 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                        <div className="text-center text-white">
                          <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                            <span className="text-3xl font-bold">N</span>
                          </div>
                          <h3 className="text-xl font-semibold">{project.title}</h3>
                        </div>
                      </div>
                    )}
                    
                    {/* Modern Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent"></div>
                    
                    {/* Modern Category Badge */}
                    <div className="absolute top-4 right-4">
                      <div className="px-4 py-2 bg-primary-600/90 backdrop-blur-sm text-white rounded-2xl text-sm font-semibold border border-primary-400/30 shadow-lg">
                        {project.category}
                      </div>
                    </div>

                    {/* Project status removed */}
                    
                    {/* Floating Action Button */}
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-10 h-10 bg-white/20 backdrop-blur-xl rounded-2xl flex items-center justify-center border border-white/30 shadow-2xl">
                        <ArrowRight className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Modern Project Content */}
                  <div className="relative z-10 p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 h-20 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* Modern Project Details */}
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center space-x-3 rtl:space-x-reverse text-sm text-gray-600 dark:text-gray-400">
                        <div className="w-8 h-8 bg-primary-100 dark:bg-primary-900/40 rounded-lg flex items-center justify-center">
                          <MapPin size={16} className="text-primary-600 dark:text-primary-400" />
                        </div>
                        <span className="truncate font-medium">{project.location}</span>
                      </div>
                      <div className="flex items-center space-x-3 rtl:space-x-reverse text-sm text-gray-600 dark:text-gray-400">
                        <div className="w-8 h-8 bg-primary-100 dark:bg-primary-900/40 rounded-lg flex items-center justify-center">
                          <Ruler size={16} className="text-primary-600 dark:text-primary-400" />
                        </div>
                        <span className="font-medium">{project.area}</span>
                      </div>

                      {project.client && (
                        <div className="flex items-center space-x-3 rtl:space-x-reverse text-sm text-gray-600 dark:text-gray-400">
                          <div className="w-8 h-8 bg-primary-100 dark:bg-primary-900/40 rounded-lg flex items-center justify-center">
                            <User size={16} className="text-primary-600 dark:text-primary-400" />
                          </div>
                          <span className="truncate font-medium">{project.client}</span>
                        </div>
                      )}
                    </div>

                    {/* Modern Features */}
                    {project.features && project.features.length > 0 && (
                      <div className="mb-6">
                        <h4 className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-3">{t('features')}:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.features.slice(0, 3).map((feature: string, featureIndex: number) => (
                            <span
                              key={featureIndex}
                              className="inline-block bg-primary-100 dark:bg-primary-900/40 text-primary-800 dark:text-primary-200 text-xs px-3 py-1 rounded-full font-medium border border-primary-200/50 dark:border-primary-700/50"
                            >
                              {feature}
                            </span>
                          ))}
                          {project.features.length > 3 && (
                            <span className="inline-block bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs px-3 py-1 rounded-full font-medium">
                              +{project.features.length - 3} {t('more')}
                            </span>
                          )}
                        </div>
                      </div>
                    )}
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 rtl:space-x-reverse text-primary-600 dark:text-primary-400 font-bold">
                        <span>{t('viewDetails')}</span>
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
                      </div>
                      
                      <div className="flex items-center space-x-2 rtl:space-x-reverse text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
                        <Calendar size={16} />
                        <span className="font-medium">{project.year}</span>
                      </div>
                    </div>
                  </div>
                  </Link>
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
        </div>
      </section>
    </div>
  );
};

export default Projects; 