import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Users, Zap, CheckCircle, Target, Heart, MapPin, Phone, Building2 } from 'lucide-react';
import engSalehImage from '../assast/Images/About/engsaleh.jpg';
import genAlaaImage from '../assast/Images/About/genalaa.jpg';
import aboutBgImage from '../assast/Images/About/nubyinside2.jpg';
import branchesHero from '../assast/Images/About/nubyinside.jpg';
import mapImage from '../assast/Images/Map/map.jpg';

const About: React.FC = () => {
  const { t } = useTranslation();
  const currentLang = t('language') === 'Language' ? 'en' : 'ar';

  const stats = [
    { number: '250+', label: t('projectsCompleted') },
    { number: '50+', label: t('happyClients') },
    { number: '25+', label: t('yearsExperienceNum') },
    { number: '1500+', label: t('employees') },
  ];

  const values = [
    {
      icon: Target,
      title: t('excellence'),
      description: t('excellenceDesc'),
    },
    {
      icon: Heart,
      title: t('integrity'),
      description: t('integrityDesc'),
    },
    {
      icon: Users,
      title: t('teamwork'),
      description: t('teamworkDesc'),
    },
    {
      icon: Zap,
      title: t('innovation'),
      description: t('innovationDesc'),
    },
  ];

  const timeline = [
    {
      year: '2000',
      title: t('companyFounded'),
      description: t('companyFoundedDesc'),
    },
    {
      year: '2013',
      title: t('firstClassClassification'),
      description: t('firstClassClassificationDesc'),
    },
    {
      year: '2016',
      title: t('firstMajorProject'),
      description: t('firstMajorProjectDesc'),
    },
    {
      year: '2020',
      title: t('teamExpansion'),
      description: t('teamExpansionDesc'),
    },
    {
      year: '2024',
      title: t('industryRecognition'),
      description: t('industryRecognitionDesc'),
    },
  ];

  return (
    <div className="pt-16 overflow-hidden">
      {/* Modern Hero Section */}
      <section 
        className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url(${aboutBgImage})`,
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
                {currentLang === 'ar' ? 'من نحن' : 'About Us'}
              </span>
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white to-primary-200 bg-clip-text text-transparent">
                {t('aboutTitle')}
              </span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              {t('aboutDescription')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Modern Stats Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-6 text-center border border-white/20 dark:border-gray-700/20 shadow-lg hover:shadow-2xl transition-all duration-500"
                whileHover={{ y: -4 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-primary-600/10 opacity-60 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                <div className="relative z-10">
                  <div className="text-3xl md:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 dark:text-gray-300 text-sm font-medium">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Mission & Vision */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="group relative bg-gradient-to-br from-primary-50/50 to-white dark:from-primary-900/20 dark:to-gray-800 rounded-3xl p-8 border border-primary-100/50 dark:border-primary-800/50"
            >
              <div className="absolute top-6 right-6 w-16 h-16 bg-primary-500/10 rounded-2xl flex items-center justify-center">
                <Target className="w-8 h-8 text-primary-600 dark:text-primary-400" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                {t('ourMission')}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                {t('missionDescription')}
              </p>
              <div className="space-y-4">
                {[
                  t('deliverInnovativeSolutions'),
                  t('maintainQualityStandards'),
                  t('ensureClientSatisfaction'),
                  t('promoteSustainablePractices'),
                ].map((item, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-center space-x-3 group/item"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-6 h-6 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center group-hover/item:bg-primary-200 dark:group-hover/item:bg-primary-800 transition-colors">
                      <CheckCircle className="text-primary-600 dark:text-primary-400" size={16} />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 group-hover/item:text-gray-900 dark:group-hover/item:text-white transition-colors">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="group relative bg-gradient-to-br from-blue-50/50 to-white dark:from-blue-900/20 dark:to-gray-800 rounded-3xl p-8 border border-blue-100/50 dark:border-blue-800/50"
            >
              <div className="absolute top-6 right-6 w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center">
                <Heart className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                {t('ourVision')}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                {t('visionDescription')}
              </p>
              <div className="space-y-4">
                {[
                  t('regionalEngineeringLeadership'),
                  t('innovativeSolutionRecognition'),
                  t('sustainableDevelopmentCommitment'),
                  t('exceptionalServiceDelivery'),
                ].map((item, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-center space-x-3 group/item"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center group-hover/item:bg-blue-200 dark:group-hover/item:bg-blue-800 transition-colors">
                      <CheckCircle className="text-blue-600 dark:text-blue-400" size={16} />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 group-hover/item:text-gray-900 dark:group-hover/item:text-white transition-colors">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modern Values Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              {t('ourValues')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t('valuesDescription')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-8 text-center border border-white/20 dark:border-gray-700/20 shadow-lg hover:shadow-2xl transition-all duration-500"
                whileHover={{ y: -8 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-primary-600/10 opacity-60 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="text-primary-600 dark:text-primary-400" size={36} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section - Our Journey */}
      <section className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6">
              {t('ourJourney')}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
              {t('journeyDescription')}
            </p>
          </motion.div>

          <div className="relative max-w-6xl mx-auto">
            {/* Timeline Line - Desktop */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-primary-200 dark:bg-primary-800"></div>
            
            {/* Timeline Line - Mobile */}
            <div className="md:hidden absolute left-6 top-0 h-full w-0.5 bg-primary-200 dark:bg-primary-800"></div>

            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative mb-8 md:mb-12 ${
                  // Desktop: alternating layout, Mobile: consistent left layout
                  'md:flex md:items-center ' + 
                  (index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse')
                }`}
              >
                {/* Timeline Dot - Desktop */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-3 h-3 lg:w-4 lg:h-4 bg-primary-600 dark:bg-primary-400 rounded-full border-3 lg:border-4 border-white dark:border-gray-800 z-10"></div>

                {/* Timeline Dot - Mobile */}
                <div className="md:hidden absolute left-4.5 top-6 w-3 h-3 bg-primary-600 dark:bg-primary-400 rounded-full border-3 border-white dark:border-gray-800 z-10"></div>

                {/* Content Container */}
                <div className={`
                  pl-16 md:pl-0 md:w-1/2 
                  ${index % 2 === 0 
                    ? 'md:pr-6 lg:pr-8 xl:pr-12 md:text-right' 
                    : 'md:pl-6 lg:pl-8 xl:pl-12 md:text-left'
                  }
                `}>
                  <div className="bg-white dark:bg-gray-900 rounded-lg p-4 sm:p-5 md:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700">
                    <div className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2 md:mb-3">
                      {item.year}
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white mb-2 md:mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base md:text-base lg:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Mobile Timeline Connector */}
                  <div className="md:hidden mt-4 flex items-center">
                    <div className="w-8 h-0.5 bg-primary-200 dark:bg-primary-700"></div>
                    <div className="w-2 h-2 bg-primary-400 dark:bg-primary-500 rounded-full ml-2"></div>
                  </div>
                </div>

                {/* Desktop Timeline Connector Arrow */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 z-20">
                  <div className={`
                    w-0 h-0 border-solid
                    ${index % 2 === 0 
                      ? 'border-r-8 border-r-primary-300 dark:border-r-primary-600 border-y-4 border-y-transparent border-l-0 -translate-x-2' 
                      : 'border-l-8 border-l-primary-300 dark:border-l-primary-600 border-y-4 border-y-transparent border-r-0 translate-x-2'
                    }
                  `}></div>
                </div>
              </motion.div>
            ))}

            {/* Timeline End Decoration */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Desktop End */}
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full border-4 border-white dark:border-gray-800 items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              
              {/* Mobile End */}
              <div className="md:hidden flex absolute left-4 w-5 h-5 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full border-3 border-white dark:border-gray-800 items-center justify-center">
                <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modern Branches Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="mb-6">
                <span className="inline-block px-6 py-3 bg-primary-100 dark:bg-primary-900/40 text-primary-700 dark:text-primary-300 rounded-full text-sm font-semibold border border-primary-200/50 dark:border-primary-700/50">
                  <Building2 className="w-4 h-4 mr-2 inline" />
                  {t('ourBranches')}
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                {t('language') === 'Language' ? 'Our Branches' : 'فروعنا'}
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-xl leading-relaxed">
                {t('ourBranchesDesc')}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[ 
                  { city: 'Libya Branch', cityAr: 'فرع ليبيا', address: 'Tripoli, Libya', addressAr: 'طرابلس، ليبيا', phone: '+218 21 000 0000', code: 'LY', color: 'from-green-500 to-green-600' },
                  { city: 'Iraq Branch', cityAr: 'فرع العراق', address: 'Baghdad, Iraq', addressAr: 'بغداد، العراق', phone: '+964 1 000 0000', code: 'IQ', color: 'from-red-500 to-red-600' },
                  { city: 'Egypt Branch', cityAr: 'فرع مصر', address: 'Nasr City, Cairo, Egypt', addressAr: 'مدينة نصر، القاهرة، مصر', phone: '+20 100 000 0000', code: 'EG', color: 'from-primary-500 to-primary-600' },
                  { city: 'Saudi Arabia Branch', cityAr: 'فرع السعودية', address: 'Riyadh, Saudi Arabia', addressAr: 'الرياض، المملكة العربية السعودية', phone: '+966 11 000 0000', code: 'SA', color: 'from-yellow-500 to-yellow-600' },
                ].map((b, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-6 border border-white/20 dark:border-gray-700/20 shadow-lg hover:shadow-2xl transition-all duration-500"
                    whileHover={{ y: -4 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-primary-600/10 opacity-60 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                    <div className="relative z-10">
                      <div className="flex items-start mb-4">
                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${b.color} flex items-center justify-center mr-4 shadow-lg`}>
                          <span className="text-sm font-bold text-white tracking-widest">{b.code}</span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                              {t('language') === 'Language' ? b.city : b.cityAr}
                            </h3>
                            <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                              <MapPin className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                            </div>
                          </div>
                          <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                            {t('language') === 'Language' ? b.address : b.addressAr}
                          </p>
                          <div className="flex items-center text-primary-600 dark:text-primary-400 text-sm font-medium">
                            <Phone className="w-4 h-4 mr-2" /> {b.phone}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Modern Image Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl group">
                <img 
                  src={branchesHero} 
                  alt="Elnuby offices" 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-black/20 to-transparent" />
                
                {/* Floating elements */}
                <div className="absolute top-6 right-6">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-xl rounded-2xl flex items-center justify-center border border-white/30 shadow-2xl">
                    <Building2 className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">
                    {currentLang === 'ar' ? 'فروعنا حول العالم' : 'Our Global Presence'}
                  </h3>
                  <p className="text-gray-200 text-sm drop-shadow-md">
                    {currentLang === 'ar' ? 'خدمة عملائنا في جميع أنحاء المنطقة' : 'Serving clients across the region'}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modern Founders Section */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="mb-6">
              <span className="inline-block px-6 py-3 bg-primary-100 dark:bg-primary-900/40 text-primary-700 dark:text-primary-300 rounded-full text-sm font-semibold border border-primary-200/50 dark:border-primary-700/50">
                {currentLang === 'ar' ? 'قيادة متميزة' : 'Leadership Excellence'}
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              {t('ourFounders')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t('foundersDescription')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto mb-16">
            {/* Mr. Saleh El Nobi Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20 dark:border-gray-700/20 overflow-hidden"
              whileHover={{ y: -8 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-primary-600/10 opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 mb-8">
                {/* Image Container */}
                <div className="relative w-full h-80 mx-auto overflow-hidden rounded-2xl">
                  <img
                    src={engSalehImage}
                    alt="Mr. Saleh El Nobi"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <div className="hidden w-full h-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center">
                    <span className="text-8xl">👨‍💼</span>
                  </div>
                  
                  {/* Modern Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent"></div>
                  
                  {/* Floating Badge */}
                  <div className="absolute top-4 right-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-xl rounded-2xl flex items-center justify-center border border-white/30 shadow-2xl">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  {/* Modern Title Overlay */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-bold text-white mb-2 leading-tight drop-shadow-lg">
                      Mr. Saleh El Nobi
                    </h3>
                    <p className="text-sm text-gray-200 leading-relaxed drop-shadow-md">
                      {t('chairmanBoard')}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Modern Card Content */}
              <div className="relative z-10 text-center space-y-4">
                <div className="flex items-center justify-center space-x-4 mb-4">
                  <div className="flex items-center px-4 py-2 bg-primary-100 dark:bg-primary-900/40 rounded-full">
                    <CheckCircle className="w-4 h-4 mr-2 text-primary-600 dark:text-primary-400" />
                    <span className="text-sm font-medium text-primary-700 dark:text-primary-300">{t('founded')} 2000</span>
                  </div>
                  <div className="flex items-center px-4 py-2 bg-primary-100 dark:bg-primary-900/40 rounded-full">
                    <Target className="w-4 h-4 mr-2 text-primary-600 dark:text-primary-400" />
                    <span className="text-sm font-medium text-primary-700 dark:text-primary-300">25+ {t('yearsExp')}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                  {t('salehElNobiDesc').substring(0, 150)}...
                </p>
                
                <div className="flex justify-center space-x-2">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-primary-300 rounded-full"></div>
                  <div className="w-2 h-2 bg-primary-200 rounded-full"></div>
                </div>
              </div>
            </motion.div>

            {/* General Alaa Mohamed El-Madbouly Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20 dark:border-gray-700/20 overflow-hidden"
              whileHover={{ y: -8 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-blue-600/10 opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 mb-8">
                {/* Image Container */}
                <div className="relative w-full h-80 mx-auto overflow-hidden rounded-2xl">
                  <img
                    src={genAlaaImage}
                    alt="General H.E. Mr. Alaa Mohamed El-Madbouly"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <div className="hidden w-full h-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                    <span className="text-8xl">🎖️</span>
                  </div>
                  
                  {/* Modern Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent"></div>
                  
                  {/* Floating Badge */}
                  <div className="absolute top-4 right-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-xl rounded-2xl flex items-center justify-center border border-white/30 shadow-2xl">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  {/* Modern Title Overlay */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-bold text-white mb-2 leading-tight drop-shadow-lg">
                      General H.E. Mr. Alaa Mohamed El-Madbouly
                    </h3>
                    <p className="text-sm text-gray-200 leading-relaxed drop-shadow-md">
                      {t('viceChairmanBoard')}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Modern Card Content */}
              <div className="relative z-10 text-center space-y-4">
                <div className="flex items-center justify-center space-x-4 mb-4">
                  <div className="flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/40 rounded-full">
                    <CheckCircle className="w-4 h-4 mr-2 text-blue-600 dark:text-blue-400" />
                    <span className="text-sm font-medium text-blue-700 dark:text-blue-300">{t('strategicLeader')}</span>
                  </div>
                  <div className="flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/40 rounded-full">
                    <Target className="w-4 h-4 mr-2 text-blue-600 dark:text-blue-400" />
                    <span className="text-sm font-medium text-blue-700 dark:text-blue-300">{t('militaryExpert')}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                  {t('alaaElMadboulyDesc').substring(0, 150)}...
                </p>
                
                <div className="flex justify-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                  <div className="w-2 h-2 bg-blue-200 rounded-full"></div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Leadership Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-6">
                <Heart className="w-6 h-6 text-primary-600 dark:text-primary-400 mr-3" />
                <h4 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                  {t('leadershipPhilosophy')}
                </h4>
              </div>
              <blockquote className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed italic">
                "{t('leadershipPhilosophyDesc')}"
              </blockquote>
            </div>
          </motion.div>
        </div>
      </section>

      {/* End of page */}
    </div>
  );
};

export default About; 