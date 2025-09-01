import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Users, Award, Clock, MapPin } from 'lucide-react';
import { useTranslatedData } from '../../hooks/useTranslatedData';
import mapImage from '../../assast/Images/Map/map.jpg';

// Memoized Map Pin Component for better performance
const MapPinComponent = React.memo(({ branch, position, index }: { 
  branch: any; 
  position: any; 
  index: number; 
}) => (
  <motion.div
    key={branch.id}
    initial={{ opacity: 0, scale: 0 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, delay: 1.2 + index * 0.2 }}
    viewport={{ once: true }}
    className="absolute group cursor-pointer"
    style={{
      top: position.top,
      left: position.left,
      transform: 'translate(-50%, -50%)'
    }}
  >
    {/* Enhanced Pulse Animation */}
    <motion.div
      animate={{ 
        scale: [1, 1.4, 1],
        opacity: [0.2, 0.05, 0.2],
        rotate: [0, 5, -5, 0]
      }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      className="absolute inset-0 bg-gradient-to-r from-primary-500/40 to-primary-600/40 rounded-full"
    />
    
    {/* Second Pulse Layer */}
    <motion.div
      animate={{ 
        scale: [1, 1.8, 1],
        opacity: [0.15, 0.02, 0.15],
        rotate: [0, -8, 8, 0]
      }}
      transition={{ duration: 4, repeat: Infinity, delay: 0.8, ease: "easeInOut" }}
      className="absolute inset-0 bg-gradient-to-r from-primary-600/30 to-primary-700/30 rounded-full"
    />

    {/* Third Pulse Layer */}
    <motion.div
      animate={{ 
        scale: [1, 2.2, 1],
        opacity: [0.1, 0.01, 0.1],
        rotate: [0, 12, -12, 0]
      }}
      transition={{ duration: 5, repeat: Infinity, delay: 1.2, ease: "easeInOut" }}
      className="absolute inset-0 bg-gradient-to-r from-primary-700/20 to-primary-800/20 rounded-full"
    />
   
    {/* Main Enhanced Pin - Responsive Sizing with Enhanced Animation */}
    <motion.div 
      className="relative w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-transparent rounded-full flex items-center justify-center text-primary-600 dark:text-primary-400 shadow-lg sm:shadow-xl transition-all duration-300 group-hover:scale-110"
      whileHover={{ 
        scale: 1.15,
        transition: { duration: 0.6 }
      }}
      animate={{
        y: [0, -3, 0],
        transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
      }}
    >
      <motion.div 
        className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-5 lg:h-5"
        animate={{
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        {branch.icon}
      </motion.div>
    
      {/* Enhanced Glow Effect */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-sm"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0, 0.1, 0]
        }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
      />
    </motion.div>
  
    {/* Enhanced Tooltip - Responsive with Hover */}
    <div 
      className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 sm:mb-2 px-2 sm:px-3 py-1 sm:py-2 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm text-gray-900 dark:text-white text-xs sm:text-sm rounded-lg sm:rounded-xl shadow-lg sm:shadow-2xl transition-all duration-300 whitespace-nowrap z-20 border border-gray-200 dark:border-gray-600 max-w-[100px] sm:max-w-[120px] md:max-w-none opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100`}
    >
      <div className="font-bold text-xs sm:text-sm text-primary-700 dark:text-primary-300">{branch.name}</div>
      <div className="text-xs text-gray-600 dark:text-gray-300 hidden sm:block">{branch.description}</div>
      <div className="text-xs text-primary-600 dark:text-primary-400 font-medium mt-1 hidden md:block">
        {branch.type === 'headquarters' ? 'Main Office' : 'Regional Branch'}
      </div>
      {/* Enhanced Arrow */}
      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-3 border-r-3 border-t-3 sm:border-l-4 sm:border-r-4 sm:border-t-4 border-transparent border-t-white/95 dark:border-t-gray-800/95"></div>
    </div>
  </motion.div>
));

const AboutSection: React.FC = () => {
  const { t } = useTranslation();
  const { getAbout } = useTranslatedData();
  const about = getAbout();
  const [windowWidth, setWindowWidth] = useState(0);

  // Memoized animation variants for better performance
  const animationVariants = useMemo(() => ({
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    hiddenLeft: { opacity: 0, x: -50 },
    visibleLeft: { opacity: 1, x: 0 },
    hiddenRight: { opacity: 0, x: 50 },
    visibleRight: { opacity: 1, x: 0 },
    hiddenScale: { opacity: 0, scale: 0.8 },
    visibleScale: { opacity: 1, scale: 1 }
  }), []);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Set initial width
    handleResize();

    // Throttle resize events for better performance
    let timeoutId: NodeJS.Timeout;
    const throttledResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleResize, 100);
    };

    window.addEventListener('resize', throttledResize);
    return () => {
      window.removeEventListener('resize', throttledResize);
      clearTimeout(timeoutId);
    };
  }, []);

  // Function to get responsive position based on screen size - memoized for performance
  const getResponsivePosition = useCallback((position: any) => {
    if (windowWidth < 768) { // mobile
      return position.mobile || position;
    } else if (windowWidth < 1024) { // tablet
      return position.tablet || position;
    }
    return position;
  }, [windowWidth]);

    // Branch locations data for map pins - memoized for performance
  const branches = useMemo(() => [
    {
      id: 1,
      name: 'Egypt',
      type: 'headquarters',
      icon: <MapPin className="w-4 h-4" />,
      position: { 
        top: '35%',
        left: '48%',
        mobile: { top: '33%', left: '48%' },
        tablet: { top: '48%', left: '46%' }
      },
      description: 'Egypt Branch'
    },
    {
      id: 2,
      name: 'Libya',
      type: 'branch',
      icon: <MapPin className="w-4 h-4" />,
      position: { 
        top: '35%', 
        left: '24%',
        mobile: { top: '30%', left: '28%' },
        tablet: { top: '35%', left: '25%' }
      },
      description: 'Libya Branch'
    },
    {
      id: 3,
      name: 'Saudi Arabia',
      type: 'branch',
      icon: <MapPin className="w-4 h-4" />,
      position: { 
        top: '40%', 
        left: '80%',
        mobile: { top: '38%', left: '70%' },
        tablet: { top: '60%', left: '72%' }
      },
      description: 'Saudi Arabia Branch'
    },
    {
      id: 4,
      name: 'Iraq',
      type: 'branch',
      icon: <MapPin className="w-4 h-4" />,
      position: { 
        top: '20%', 
        left: '77%',
        mobile: { top: '17%', left: '70%' },
        tablet: { top: '25%', left: '78%' }
      },
      description: 'Iraq Branch'
    }
  ], []);

  return (
    <section id="about" className="py-20 max-md:px-5 bg-white dark:bg-gray-900 md:px-5">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
                     <motion.div
             variants={animationVariants}
             initial="hiddenLeft"
             whileInView="visibleLeft"
             transition={{ duration: 0.8 }}
             viewport={{ once: true }}
           >
             <motion.h2
               variants={animationVariants}
               initial="hidden"
               whileInView="visible"
               transition={{ duration: 0.8, delay: 0.2 }}
               viewport={{ once: true }}
               className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
             >
               {about.title}
             </motion.h2>
             
             <motion.h3
               variants={animationVariants}
               initial="hidden"
               whileInView="visible"
               transition={{ duration: 0.8, delay: 0.4 }}
               viewport={{ once: true }}
               className="text-xl text-primary-600 dark:text-primary-400 font-semibold mb-6"
             >
               {about.subtitle}
             </motion.h3>
             
             <motion.p
               variants={animationVariants}
               initial="hidden"
               whileInView="visible"
               transition={{ duration: 0.8, delay: 0.6 }}
               viewport={{ once: true }}
               className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
             >
               {about.content}
             </motion.p>

                                      {/* Features */}
             <motion.div
               variants={animationVariants}
               initial="hidden"
               whileInView="visible"
               transition={{ duration: 0.8, delay: 0.8 }}
               viewport={{ once: true }}
               className="grid grid-cols-1 sm:grid-cols-2 gap-6"
             >
               {useMemo(() => [
                 {
                   icon: <Users className="w-6 h-6" />,
                   title: t('professionalStaff'),
                   description: t('professionalStaffDesc')
                 },
                 {
                   icon: <Award className="w-6 h-6" />,
                   title: t('yearsExperience'),
                   description: t('yearsExperienceDesc')
                 },
                 {
                   icon: <CheckCircle className="w-6 h-6" />,
                   title: t('completedProjects'),
                   description: t('completedProjectsDesc')
                 },
                 {
                   icon: <Clock className="w-6 h-6" />,
                   title: t('onTimeDelivery'),
                   description: t('onTimeDeliveryDesc')
                 }
               ], [t]).map((feature, index) => (
                 <motion.div
                   key={index}
                   variants={animationVariants}
                   initial="hiddenScale"
                   whileInView="visibleScale"
                   transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                   viewport={{ once: true }}
                   className="flex items-start space-x-3 rtl:space-x-reverse"
                 >
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center text-primary-600 dark:text-primary-400">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

                                           {/* Redesigned Map */}
            <motion.div
              variants={animationVariants}
              initial="hiddenRight"
              whileInView="visibleRight"
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative"
            >
                           {/* Main Map Container - Full Responsive */}
              <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] bg-gradient-to-br from-primary-50 via-primary-100 to-primary-200 dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl overflow-hidden border-2 sm:border-4 border-white dark:border-gray-700">
                
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(var(--color-primary-500),0.1)_1px,transparent_0)] bg-[length:16px_16px] sm:bg-[length:20px_20px]"></div>
                
                {/* Map Image with Enhanced Styling */}
                <div className="relative w-full h-full">
                  <img 
                    src={mapImage} 
                    alt={t('mapImageAlt')}
                    className="w-full h-full object-cover opacity-90"
                  />
                  
                  {/* Enhanced Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/30 via-transparent to-primary-900/20" />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-600/10 via-transparent to-primary-600/10" />
                </div>
                
                {/* Connection Lines - Responsive */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="hsl(var(--color-primary-500))" stopOpacity="0.6" />
                      <stop offset="50%" stopColor="hsl(var(--color-primary-600))" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="hsl(var(--color-primary-500))" stopOpacity="0.6" />
                    </linearGradient>
                  </defs>
                  {/* Connection lines between pins */}
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: 1.5 }}
                    d="M 25% 35% Q 35% 40% 45% 45% Q 55% 50% 70% 55%"
                    stroke="url(#lineGradient)"
                    strokeWidth="1.5"
                    fill="none"
                    strokeDasharray="4,4"
                    className="animate-pulse"
                  />
                </svg>
                
                                                  {/* Enhanced Branch Location Pins - Full Responsive */}
                 <AnimatePresence>
                   {branches.map((branch, index) => {
                     const position = getResponsivePosition(branch.position);
                     return (
                       <MapPinComponent 
                         key={branch.id}
                         branch={branch}
                         position={position}
                         index={index}
                       />
                     );
                   })}
                 </AnimatePresence>
                
                {/* Enhanced Floating Elements - Responsive */}
                <motion.div
                  animate={{ 
                    y: [-10, 10, -10],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ duration: 6, repeat: Infinity }}
                  className="absolute top-4 sm:top-8 right-4 sm:right-8 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-primary-400/30 to-primary-500/30 rounded-full backdrop-blur-md border border-white/20"
                />
                <motion.div
                  animate={{ 
                    y: [10, -10, 10],
                    rotate: [360, 180, 0]
                  }}
                  transition={{ duration: 8, repeat: Infinity }}
                  className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-gradient-to-br from-primary-500/30 to-primary-600/30 rounded-full backdrop-blur-md border border-white/20"
                />
                
                {/* Corner Decorations - Responsive */}
                <div className="absolute top-2 sm:top-4 left-2 sm:left-4 w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 border-l border-t sm:border-l-2 sm:border-t-2 border-primary-500 rounded-tl-lg"></div>
                <div className="absolute top-2 sm:top-4 right-2 sm:right-4 w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 border-r border-t sm:border-r-2 sm:border-t-2 border-primary-500 rounded-tr-lg"></div>
                <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 border-l border-b sm:border-l-2 sm:border-b-2 border-primary-500 rounded-bl-lg"></div>
                <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 border-r border-b sm:border-r-2 sm:border-b-2 border-primary-500 rounded-br-lg"></div>
              </div>
              

           </motion.div>
         </div>
       </div>
     </section>
  );
};

export default AboutSection; 