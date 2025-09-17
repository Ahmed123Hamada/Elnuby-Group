import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Building2, 
  GraduationCap, 
  Heart, 
  MapPin, 
  Hotel, 
  Home, 
  Building, 
  Trophy 
} from 'lucide-react';
import RobustImage from '../RobustImage';
import { useTranslatedData } from '../../hooks/useTranslatedData';

const ProjectsSection: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { getProjects, getCategories } = useTranslatedData();
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  // Get all projects for counting
  const allProjects = getProjects();
  const categories = getCategories();

  // Function to get category icon
  const getCategoryIcon = (categoryName: string) => {
    const name = categoryName.toLowerCase();
    if (name.includes('healthcare') || name.includes('hospital')) return Heart;
    if (name.includes('infrastructure') || name.includes('road')) return MapPin;
    if (name.includes('educational') || name.includes('university')) return GraduationCap;
    if (name.includes('administrative') || name.includes('government')) return Building2;
    if (name.includes('hospitality') || name.includes('hotel')) return Hotel;
    if (name.includes('residential') || name.includes('housing')) return Home;
    if (name.includes('commercial') || name.includes('mall')) return Building;
    if (name.includes('sports') || name.includes('recreation')) return Trophy;
    return Building2;
  };

  // Function to handle category navigation
  const handleCategoryClick = (categoryName: string) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate(`/projects?category=${encodeURIComponent(categoryName)}`);
  };

  // Function to handle all projects navigation
  const handleAllProjectsClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate('/projects');
  };

  const currentLang = t('language') === 'Language' ? 'en' : 'ar';



  return (
    <motion.section 
      id="projects"
      className="py-24 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iNCIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-60 md:opacity-100">
        <div className="absolute top-20 left-8 w-32 h-32 bg-primary-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-8 w-40 h-40 bg-primary-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-primary-500/10 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Modern Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <span className="inline-block px-6 py-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-primary-600 dark:text-primary-400 rounded-full text-sm font-semibold border border-primary-200/50 dark:border-primary-700/50 shadow-lg">
              {currentLang === 'ar' ? 'مشاريع متنوعة ومبتكرة' : 'Diverse & Innovative Projects'}
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
              {currentLang === 'ar' ? 'مشاريعنا المتميزة' : 'Our Distinguished Projects'}
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            {currentLang === 'ar' 
              ? 'اكتشف محفظة مشاريعنا المبتكرة في الهندسة والإنشاءات التي تعكس التميز والإبداع والخبرة التقنية العالية'
              : 'Discover our portfolio of innovative engineering and construction projects that showcase excellence, creativity, and technical expertise'
            }
          </p>
        </motion.div>



        {/* Modern Projects Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.slice(1).map((category, index) => {
            const categoryProjects = allProjects.filter(project => project.category === category.name);
            const representativeProject = categoryProjects[0];
            const IconComponent = getCategoryIcon(category.name);
            
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
                whileHover={{ y: -8 }}
                onHoverStart={() => setHoveredCategory(category.name)}
                onHoverEnd={() => setHoveredCategory(null)}
              >
                <div className="relative h-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/20 dark:border-gray-700/20 shadow-xl hover:shadow-2xl transition-all duration-500">
                  {/* Glassmorphism Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-primary-600/10 opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Background Image with Modern Overlay */}
                  <div className="relative h-48 overflow-hidden">
                    {representativeProject?.image ? (
                      <RobustImage 
                        src={representativeProject.image} 
                        alt={category.name}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 dark:from-primary-600 dark:to-primary-800"></div>
                    )}
                    
                    {/* Modern Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-600/30 via-transparent to-primary-800/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    
                    {/* Floating Icon with Glassmorphism */}
                    <div className="absolute top-6 right-6">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-xl rounded-2xl flex items-center justify-center border border-white/30 shadow-2xl group-hover:bg-primary-500/30 group-hover:border-primary-300/50 group-hover:scale-110 transition-all duration-500">
                        <IconComponent className="w-6 h-6 text-white group-hover:text-primary-100 transition-colors duration-300" />
                      </div>
                    </div>

                    

                    {/* Modern Title Overlay */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-2xl font-bold text-white mb-2 leading-tight drop-shadow-lg">
                        {category.name}
                      </h3>
                      <p className="text-sm text-gray-200 leading-relaxed line-clamp-2 drop-shadow-md">
                        {currentLang === 'ar' ? 'استكشف مشاريع هذه الفئة' : 'Explore projects in this category'}
                      </p>
                    </div>

                    {/* Modern Decorative Elements */}
                    <div className="absolute top-1/3 left-8 w-24 h-24 bg-gradient-to-br from-primary-400/20 to-primary-600/30 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <div className="absolute bottom-1/3 right-8 w-16 h-16 bg-gradient-to-br from-white/10 to-primary-300/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  </div>

                  {/* Modern Content Section with Glassmorphism */}
                  <div className="relative p-6 space-y-4 bg-gradient-to-b from-white/60 to-white/80 dark:from-gray-800/60 dark:to-gray-800/80 backdrop-blur-sm">
                    {/* Always Visible More Details Button */}
                    <motion.button
                      onClick={() => handleCategoryClick(category.name)}
                      className="w-full py-3 px-4 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-semibold rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group/btn"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="relative z-10">
                        {currentLang === 'ar' ? 'استكشف هذه الفئة' : 'Explore this category'}
                      </span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      
                      {/* Button shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 transform -skew-x-12 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-500 rounded-2xl"></div>
                    </motion.button>
                  </div>

                  {/* Modern Border Glow Effect */}
                  <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-primary-300/50 dark:group-hover:border-primary-600/50 transition-all duration-500 pointer-events-none"></div>
                  
                  {/* Modern Shine Effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Modern Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="relative">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 via-primary-600/5 to-primary-500/10 rounded-3xl blur-3xl"></div>
            
            <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-12 border border-white/20 dark:border-gray-700/20 shadow-2xl">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {currentLang === 'ar' ? 'مستعد لبدء مشروعك؟' : 'Ready to Start Your Project?'}
              </h3>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                {currentLang === 'ar' 
                  ? 'دعنا نناقش كيف يمكننا تحويل رؤيتك إلى واقع بخبرتنا في الهندسة والإنشاءات'
                  : "Let's discuss how we can bring your vision to life with our expertise in engineering and construction"
                }
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  onClick={handleAllProjectsClick}
                  className="inline-flex items-center px-10 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-bold rounded-2xl hover:from-primary-700 hover:to-primary-800 shadow-2xl hover:shadow-3xl group relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Button shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  
                  <span className="relative z-10">
                    {currentLang === 'ar' ? 'عرض جميع المشاريع' : 'View All Projects'}
                  </span>
                  <ArrowRight className="relative z-10 ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </motion.button>
                
                <Link
                  to="/contact"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="inline-flex items-center px-10 py-4 bg-transparent border-2 border-primary-600 text-primary-600 dark:text-primary-400 dark:border-primary-400 font-bold rounded-2xl hover:bg-primary-600 hover:text-white dark:hover:bg-primary-400 dark:hover:text-gray-900 transition-all duration-300 group"
                >
                  <span>
                    {currentLang === 'ar' ? 'تواصل معنا' : 'Get in Touch'}
                  </span>
                  <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ProjectsSection; 