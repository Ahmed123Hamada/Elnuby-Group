import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Target, Eye, ArrowRight, Heart, Sparkles, Zap, Shield } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const MissionVisionSection: React.FC = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<'mission' | 'vision' | 'values'>('mission');
  const [isVisible, setIsVisible] = useState(false);

  const tabs = [
    { id: 'mission', label: t('missionTabButton'), icon: Target, color: 'from-primary-500 to-primary-700' },
    { id: 'vision', label: t('visionTabButton'), icon: Eye, color: 'from-primary-400 to-primary-600' },
    { id: 'values', label: t('valuesTabButton'), icon: Heart, color: 'from-primary-600 to-primary-800' },
  ];

  // Floating animation
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Advanced animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  const tabContentVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8,
      rotateX: -15,
    },
    visible: { 
      opacity: 1,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
        duration: 0.6
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      rotateX: 15,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <section className="relative z-10 py-16 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Enhanced Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle geometric patterns */}
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-primary-100 dark:border-gray-700 rounded-full opacity-30"></div>
        <div className="absolute top-60 right-16 w-24 h-24 border-2 border-primary-200 dark:border-gray-700 rotate-45 opacity-40"></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 border-2 border-primary-100 dark:border-gray-700 rounded-full opacity-35"></div>
        <div className="absolute bottom-60 right-1/3 w-16 h-16 border-2 border-primary-200 dark:border-gray-700 rotate-45 opacity-30"></div>
        
        {/* Floating particles - reduced and more subtle */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 bg-primary-300 dark:bg-primary-600 rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -15, 0],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="relative inline-block mb-6"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-2 leading-tight">
              {t('missionVisionTitle')}
            </h2>
            {/* Accent line */}
            <motion.div
              className="h-1 w-24 bg-gradient-to-r from-primary-500 to-primary-700 mx-auto rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
          </motion.div>
          <motion.p 
            variants={itemVariants}
            className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed font-light"
          >
            {t('missionVisionSubtitle')}
          </motion.p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-center mb-12 lg:mb-16"
        >
          <motion.div 
            variants={itemVariants}
            className="relative"
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-1.5 shadow-lg border border-gray-200/60 dark:bg-gray-800/90 dark:border-gray-700/60">
              <div className="flex flex-col sm:flex-row gap-1.5">
                {tabs.map((tab, index) => {
                  const IconComponent = tab.icon;
                  return (
                    <motion.button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as 'mission' | 'vision' | 'values')}
                      className={`relative flex items-center justify-center px-6 py-3 rounded-xl font-medium text-sm sm:text-base transition-all duration-300 min-w-[120px] ${
                        activeTab === tab.id
                          ? 'text-white shadow-md'
                          : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700/50'
                      }`}
                      whileHover={{ 
                        scale: 1.02,
                        transition: { duration: 0.2 }
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {activeTab === tab.id && (
                        <motion.div
                          layoutId="activeTab"
                          className={`absolute inset-0 bg-gradient-to-r ${tab.color} rounded-xl shadow-md`}
                          transition={{
                            type: "spring",
                            damping: 15,
                            stiffness: 100
                          }}
                        />
                      )}
                      <div className="relative z-10 flex items-center">
                        <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                        <span className="whitespace-nowrap">{tab.label}</span>
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={tabContentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="max-w-6xl mx-auto"
          >
          {activeTab === 'mission' && (
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-xl p-8 lg:p-12 border border-gray-200/80 dark:bg-gray-800/95 dark:border-gray-700/80 relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-primary-100/30 dark:from-primary-900/10 dark:to-primary-800/10 rounded-3xl"></div>
              <div className="relative z-10">
                <div className="text-center mb-12">
                  <motion.div 
                    className="relative inline-block mb-8"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="bg-gradient-to-br from-primary-500 to-primary-700 p-5 rounded-2xl w-24 h-24 mx-auto flex items-center justify-center shadow-xl">
                      <Target className="w-12 h-12 text-white" />
                    </div>
                  </motion.div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                    {t('missionTitle')}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto font-light">
                    {t('missionStatement')}
                  </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                  {[t('missionPoint1'), t('missionPoint2'), t('missionPoint3')].map((point, index) => (
                    <motion.div
                      key={index}
                      className="group p-6 lg:p-8 bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-100 dark:bg-gray-700/30 dark:border-gray-600/50 hover:shadow-lg transition-all duration-300"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.15, duration: 0.5 }}
                      whileHover={{ 
                        y: -5,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <div className="text-center">
                        <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-200 dark:group-hover:bg-primary-900/50 transition-colors duration-300">
                          <ArrowRight className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed">{point}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'vision' && (
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-xl p-8 lg:p-12 border border-gray-200/80 dark:bg-gray-800/95 dark:border-gray-700/80 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50/40 to-primary-100/20 dark:from-primary-900/10 dark:to-primary-800/10 rounded-3xl"></div>
              <div className="relative z-10">
                <div className="text-center mb-12">
                  <motion.div 
                    className="relative inline-block mb-8"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="bg-gradient-to-br from-primary-400 to-primary-600 p-5 rounded-2xl w-24 h-24 mx-auto flex items-center justify-center shadow-xl">
                      <Eye className="w-12 h-12 text-white" />
                    </div>
                  </motion.div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                    {t('visionTitle')}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto font-light">
                    {t('visionStatement')}
                  </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                  {[t('visionPoint1'), t('visionPoint2'), t('visionPoint3')].map((point, index) => (
                    <motion.div
                      key={index}
                      className="group p-6 lg:p-8 bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-100 dark:bg-gray-700/30 dark:border-gray-600/50 hover:shadow-lg transition-all duration-300"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.15, duration: 0.5 }}
                      whileHover={{ 
                        y: -5,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <div className="text-center">
                        <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-200 dark:group-hover:bg-primary-900/50 transition-colors duration-300">
                          <ArrowRight className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed">{point}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'values' && (
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-xl p-8 lg:p-12 border border-gray-200/80 dark:bg-gray-800/95 dark:border-gray-700/80 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50/30 to-primary-100/10 dark:from-primary-900/10 dark:to-primary-800/10 rounded-3xl"></div>
              <div className="relative z-10">
                <div className="text-center mb-12">
                  <motion.div 
                    className="relative inline-block mb-8"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="bg-gradient-to-br from-primary-600 to-primary-800 p-5 rounded-2xl w-24 h-24 mx-auto flex items-center justify-center shadow-xl">
                      <Heart className="w-12 h-12 text-white" />
                    </div>
                  </motion.div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                    {t('coreValuesTitle')}
                  </h3>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                  {[
                    { title: t('valueQuality'), desc: t('valueQualityDesc'), icon: Shield },
                    { title: t('valueInnovation'), desc: t('valueInnovationDesc'), icon: Zap },
                    { title: t('valueIntegrity'), desc: t('valueIntegrityDesc'), icon: Heart }
                  ].map((value, index) => {
                    const IconComponent = value.icon;
                    return (
                      <motion.div
                        key={index}
                        className="group text-center p-6 lg:p-8 bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-100 dark:bg-gray-700/30 dark:border-gray-600/50 hover:shadow-lg transition-all duration-300"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.15, duration: 0.5 }}
                        whileHover={{ 
                          y: -5,
                          transition: { duration: 0.2 }
                        }}
                      >
                        <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-200 dark:group-hover:bg-primary-900/50 transition-colors duration-300">
                          <IconComponent className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                        </div>
                        <h4 className="font-semibold text-xl lg:text-2xl text-gray-900 dark:text-white mb-4">{value.title}</h4>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{value.desc}</p>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default MissionVisionSection;
