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
      {/* Hero Section */}
      <section 
        className="relative bg-gradient-to-br from-primary-50 via-white to-primary-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${aboutBgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="container-custom section-padding relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              {t('aboutTitle')}
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed drop-shadow-md">
              {t('aboutDescription')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
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
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
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
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="text-primary-600 dark:text-primary-400 flex-shrink-0" size={20} />
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
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
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="text-primary-600 dark:text-primary-400 flex-shrink-0" size={20} />
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
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
                className="text-center p-6 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300 card-hover"
              >
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="text-primary-600 dark:text-primary-400" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {value.description}
                </p>
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
                      ? 'border-l-8 border-l-primary-300 dark:border-l-primary-600 border-y-4 border-y-transparent border-r-0 translate-x-2' 
                      : 'border-r-8 border-r-primary-300 dark:border-r-primary-600 border-y-4 border-y-transparent border-l-0 -translate-x-2'
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

      {/* Founders Section */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              {t('ourFounders')}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t('foundersDescription')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto mb-16">
            {/* Mr. Saleh El Nobi Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
            >
              <div className="relative mb-6">
                {/* Image Container */}
                <div className="relative w-full h-80 mx-auto overflow-hidden rounded-xl">
                  <img
                    src={engSalehImage}
                    alt="Mr. Saleh El Nobi"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <div className="hidden w-full h-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center">
                    <span className="text-8xl">👨‍💼</span>
                  </div>
                  
                  {/* Hover Overlay with Details */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                    <div className="text-center text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="flex items-center justify-center space-x-4 mb-4">
                        <div className="flex items-center px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full">
                          <CheckCircle className="w-4 h-4 mr-2" />
                          <span className="text-sm font-medium">{t('founded')} 2000</span>
                        </div>
                        <div className="flex items-center px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full">
                          <Target className="w-4 h-4 mr-2" />
                          <span className="text-sm font-medium">25+ {t('yearsExp')}</span>
                        </div>
                      </div>
                      <p className="text-sm leading-relaxed opacity-90">
                        {t('salehElNobiDesc').substring(0, 120)}...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Card Content */}
              <div className="text-center">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Mr. Saleh El Nobi
                </h3>
                
                <p className="text-primary-600 dark:text-primary-400 font-semibold mb-4">
                  {t('chairmanBoard')}
                </p>
                
                <div className="flex justify-center space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-primary-300 rounded-full"></div>
                  <div className="w-2 h-2 bg-primary-200 rounded-full"></div>
                </div>
              </div>
            </motion.div>

            {/* General Alaa Mohamed El-Madbouly Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
            >
              <div className="relative mb-6">
                {/* Image Container */}
                <div className="relative w-full h-80 mx-auto overflow-hidden rounded-xl">
                  <img
                    src={genAlaaImage}
                    alt="General H.E. Mr. Alaa Mohamed El-Madbouly"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <div className="hidden w-full h-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                    <span className="text-8xl">🎖️</span>
                  </div>
                  
                  {/* Hover Overlay with Details */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                    <div className="text-center text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="flex items-center justify-center space-x-4 mb-4">
                        <div className="flex items-center px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full">
                          <CheckCircle className="w-4 h-4 mr-2" />
                          <span className="text-sm font-medium">{t('strategicLeader')}</span>
                        </div>
                        <div className="flex items-center px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full">
                          <Target className="w-4 h-4 mr-2" />
                          <span className="text-sm font-medium">{t('militaryExpert')}</span>
                        </div>
                      </div>
                      <p className="text-sm leading-relaxed opacity-90">
                        {t('alaaElMadboulyDesc').substring(0, 120)}...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Card Content */}
              <div className="text-center">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  General H.E. Mr. Alaa Mohamed El-Madbouly
                </h3>
                
                <p className="text-blue-600 dark:text-blue-400 font-semibold mb-4">
                  {t('viceChairmanBoard')}
                </p>
                
                <div className="flex justify-center space-x-3">
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

      {/* Branches Section */}
      <section className="section-padding bg-gradient-to-br from-white via-primary-50/30 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-100 text-primary-700 dark:bg-primary-900/40 dark:text-primary-300 text-sm mb-4 shadow-sm">
                <Building2 className="w-4 h-4 mr-2" />
                {t('ourBranches')}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
                {t('language') === 'Language' ? 'Our Branches ' : 'فروعنا'}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-xl">
                {t('ourBranchesDesc')}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {[ 
                  { city: 'Libya Branch', cityAr: 'فرع ليبيا', address: 'Tripoli, Libya', addressAr: 'طرابلس، ليبيا', phone: '+218 21 000 0000', code: 'LY' },
                  { city: 'Iraq Branch', cityAr: 'فرع العراق', address: 'Baghdad, Iraq', addressAr: 'بغداد، العراق', phone: '+964 1 000 0000', code: 'IQ' },
                  { city: 'Egypt Branch', cityAr: 'فرع مصر', address: 'Nasr City, Cairo, Egypt', addressAr: 'مدينة نصر، القاهرة، مصر', phone: '+20 100 000 0000', code: 'EG' },
                  { city: 'Saudi Arabia Branch', cityAr: 'فرع السعودية', address: 'Riyadh, Saudi Arabia', addressAr: 'الرياض، المملكة العربية السعودية', phone: '+966 11 000 0000', code: 'SA' },
                ].map((b, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    viewport={{ once: true }}
                    className="group relative p-[1px] rounded-2xl bg-gradient-to-br from-primary-200/60 via-primary-100/30 to-transparent dark:from-primary-500/30 dark:via-primary-400/10 hover:from-primary-300/70 dark:hover:from-primary-500/50 transition-colors"
                  >
                    <div className="rounded-[14px] bg-white dark:bg-gray-900/60 backdrop-blur-md border border-gray-200 dark:border-white/10 shadow-sm hover:shadow-md transition-all p-5">
                      <div className="flex items-start">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 flex items-center justify-center mr-4 ring-1 ring-black/5 dark:ring-white/10">
                          <span className="text-sm font-bold text-gray-700 dark:text-gray-200 tracking-widest">{b.code}</span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h3 className="text-[15px] md:text-lg font-semibold text-gray-900 dark:text-white">
                              {t('language') === 'Language' ? b.city : b.cityAr}
                            </h3>
                            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-50 dark:bg-gray-800 text-gray-400 dark:text-gray-500 ring-1 ring-gray-200 dark:ring-0">
                              <MapPin className="w-4 h-4" />
                            </span>
                          </div>
                          <div className="mt-1 text-gray-600 dark:text-gray-300 text-sm md:text-[15px]">
                            {t('language') === 'Language' ? b.address : b.addressAr}
                          </div>
                          <div className="mt-3 inline-flex items-center text-primary-700 dark:text-primary-400 text-sm font-medium">
                            <Phone className="w-4 h-4 mr-2" /> {b.phone}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Image Collage */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <img src={branchesHero} alt="Elnuby offices" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-black/10 to-transparent" />
              </div>


            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 