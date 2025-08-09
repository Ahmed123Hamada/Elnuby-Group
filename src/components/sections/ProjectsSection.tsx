import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import RobustImage from '../RobustImage';
import { useTranslatedData } from '../../hooks/useTranslatedData';

const ProjectsSection: React.FC = () => {
  const { t } = useTranslation();
  const { getProjects, getCategories } = useTranslatedData();

  // Get all projects for counting
  const allProjects = getProjects();
  const categories = getCategories();

  return (
    <section className="py-20 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="container-custom">


        {/* Modern Categories Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          {/* Section Header */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="inline-block"
            >
              <span className="text-sm font-medium text-primary-600 dark:text-primary-400 tracking-wide uppercase mb-2 block">
                {t('exploreBy')}
              </span>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {t('ourProjects')}
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full"></div>
            </motion.div>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categories.slice(1).map((category, index) => { // Skip "All Projects" category
              // Get a representative project image for this category
              const categoryProjects = allProjects.filter(project => project.category === category.name);
              const representativeProject = categoryProjects[0]; // Get the first project as representative
              
              return (
                <Link
                  key={category.id}
                  to={`/projects?category=${encodeURIComponent(category.name)}`}
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="group block"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 group-hover:border-transparent"
                  >
                    {/* Background Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Category Image */}
                    <div className="relative h-48 overflow-hidden">
                      {representativeProject?.image ? (
                        <RobustImage 
                          src={representativeProject.image} 
                          alt={category.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-primary-400 to-primary-600 dark:from-primary-600 dark:to-primary-800 flex items-center justify-center">
                          <div className="text-center text-white">
                            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 mx-auto">
                              <span className="text-3xl">
                                {category.name.toLowerCase().includes('healthcare') ? '🏥' :
                                 category.name.toLowerCase().includes('infrastructure') ? '🛣️' :
                                 category.name.toLowerCase().includes('educational') ? '🎓' :
                                 category.name.toLowerCase().includes('administrative') ? '🏛️' :
                                 category.name.toLowerCase().includes('hospitality') ? '🏨' :
                                 category.name.toLowerCase().includes('residential') ? '🏠' :
                                 category.name.toLowerCase().includes('commercial') ? '🏢' :
                                 category.name.toLowerCase().includes('sports') ? '⚽' : '🏗️'}
                              </span>
                            </div>
                            <h3 className="text-lg font-semibold">{category.name}</h3>
                          </div>
                        </div>
                      )}
                      
                      {/* Modern Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/70 transition-all duration-500" />
                      


                      {/* Category Title Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <motion.h4 
                          className="text-xl font-bold text-white mb-1 group-hover:text-primary-200 transition-colors duration-300"
                        >
                          {category.name}
                        </motion.h4>
                        <motion.p 
                          className="text-white/80 text-sm group-hover:text-primary-100 transition-colors duration-300"
                        >
                          {t('exploreBy')}
                        </motion.p>
                      </div>
                    </div>

                    {/* Modern Hover Effect Bar */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-primary-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                    
                    {/* Floating Action Indicator */}
                    <div className="absolute top-4 left-4 w-8 h-8 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 border border-white/30">
                      <ArrowRight size={14} className="text-white" />
                    </div>
                  </motion.div>
                </Link>
              );
            })}
          </div>

          {/* Modern CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/projects"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <span>{t('viewAllProjects')}</span>
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </motion.div>


      </div>
    </section>
  );
};

export default ProjectsSection; 