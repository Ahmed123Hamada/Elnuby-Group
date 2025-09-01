import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import RobustImage from '../RobustImage';
import { useTranslatedData } from '../../hooks/useTranslatedData';

const ProjectsSection: React.FC = () => {
  const { t } = useTranslation();
  const { getProjects, getCategories } = useTranslatedData();
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  // Get all projects for counting
  const allProjects = getProjects();
  const categories = getCategories();



  return (
    <section className="md:px-10 py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.1)_1px,transparent_0)] bg-[length:20px_20px]"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Modern Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 bg-primary-50 dark:bg-primary-900/20 rounded-full mb-6"
          >
            <span className="text-sm font-medium text-primary-600 dark:text-primary-400 tracking-wide uppercase">
              {t('exploreBy')}
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            {t('ourProjects')}
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover our portfolio of innovative engineering and construction projects that showcase excellence, creativity, and technical expertise.
          </p>
        </motion.div>



        {/* Categories Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >


          {/* Modern Categories Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories.slice(1).map((category, index) => {
              const categoryProjects = allProjects.filter(project => project.category === category.name);
              const projectCount = categoryProjects.length;
              const representativeProject = categoryProjects[0];
              
              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onHoverStart={() => setHoveredCategory(category.name)}
                  onHoverEnd={() => setHoveredCategory(null)}
                >
                  <Link
                    to={`/projects?category=${encodeURIComponent(category.name)}`}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="group block"
                  >
                    <div className="relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 group-hover:border-primary-200 dark:group-hover:border-primary-700">
                      {/* Category Image */}
                      <div className="relative h-32 overflow-hidden">
                        {representativeProject?.image ? (
                          <RobustImage 
                            src={representativeProject.image} 
                            alt={category.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-primary-400 to-primary-600 dark:from-primary-600 dark:to-primary-800 flex items-center justify-center">
                            <div className="text-center text-white">
                              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-2 mx-auto">
                                <span className="text-2xl">
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
                            </div>
                          </div>
                        )}
                        
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/70 transition-all duration-500" />
                        
                        {/* Project Count */}
                        <div className="absolute top-3 right-3">
                          <span className="inline-flex items-center px-2 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-medium text-white border border-white/30">
                            {projectCount} projects
                          </span>
                        </div>
                      </div>

                      {/* Category Content */}
                      <div className="p-4">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                          {category.name}
                        </h4>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600 dark:text-gray-300">
                            Explore category
                          </span>
                          <ArrowRight className="w-4 h-4 text-primary-600 dark:text-primary-400 group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      </div>

                      {/* Hover Bar */}
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-primary-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Modern CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 dark:from-primary-700 dark:to-primary-800 rounded-3xl p-8 md:p-12 shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how we can bring your vision to life with our expertise in engineering and construction.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/projects"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <span>View All Projects</span>
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              
              <Link
                to="/contact"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-primary-600 transition-all duration-300 group"
              >
                <span>Get in Touch</span>
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection; 