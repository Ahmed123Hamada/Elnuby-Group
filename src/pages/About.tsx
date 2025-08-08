import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Users, Zap, CheckCircle, Target, Heart } from 'lucide-react';
import engSalehImage from '../assast/Images/About/engsaleh.jpg';
import genAlaaImage from '../assast/Images/About/genalaa.jpg';
import aboutBgImage from '../assast/Images/About/nubyinside2.jpg';

const About: React.FC = () => {
  const { t } = useTranslation();

  const stats = [
    { number: '150+', label: t('projectsCompleted') },
    { number: '50+', label: t('happyClients') },
    { number: '20+', label: t('yearsExperienceNum') },
    { number: '24/7', label: t('supportAvailable') },
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
      year: '2014',
      title: t('companyFounded'),
      description: t('companyFoundedDesc'),
    },
    {
      year: '2016',
      title: t('firstMajorProject'),
      description: t('firstMajorProjectDesc'),
    },
    {
      year: '2018',
      title: t('teamExpansion'),
      description: t('teamExpansionDesc'),
    },
    {
      year: '2020',
      title: t('digitalTransformation'),
      description: t('digitalTransformationDesc'),
    },
    {
      year: '2023',
      title: t('industryRecognition'),
      description: t('industryRecognitionDesc'),
    },
  ];

  return (
    <div className="pt-16">
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
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6">
              {t('ourFounders')}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
              {t('foundersDescription')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            {/* Mr. Saleh El Nobi */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 md:p-8 text-center hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-6">
                <img
                  src={engSalehImage}
                  alt="Mr. Saleh El Nobi"
                  className=" mx-auto object-cover border-4 border-primary-200 dark:border-primary-800 shadow-lg"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <div className="hidden w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto bg-primary-100 dark:bg-primary-900 flex items-center justify-center border-4 border-primary-200 dark:border-primary-800">
                  <span className="text-4xl md:text-5xl text-primary-600 dark:text-primary-400">👨‍💼</span>
                </div>
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Mr. Saleh El Nobi
              </h3>
              
              <p className="text-primary-600 dark:text-primary-400 font-semibold mb-4 text-lg">
                {t('chairmanBoard')}
              </p>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {t('salehElNobiDesc')}
              </p>
            </motion.div>

            {/* General Alaa Mohamed El-Madbouly */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 md:p-8 text-center hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-6">
                <img
                  src={genAlaaImage}
                  alt="General H.E. Mr. Alaa Mohamed El-Madbouly"
                  className="  mx-auto object-cover border-4 border-primary-200 dark:border-primary-800 shadow-lg"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <div className="hidden w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto bg-primary-100 dark:bg-primary-900 flex items-center justify-center border-4 border-primary-200 dark:border-primary-800">
                  <span className="text-4xl md:text-5xl text-primary-600 dark:text-primary-400">🎖️</span>
                </div>
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                General H.E. Mr. Alaa Mohamed El-Madbouly
              </h3>
              
              <p className="text-primary-600 dark:text-primary-400 font-semibold mb-4 text-lg">
                {t('viceChairmanBoard')}
              </p>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {t('alaaElMadboulyDesc')}
              </p>
            </motion.div>
          </div>

          {/* Company Leadership Values */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 md:mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-2xl p-6 md:p-8 max-w-4xl mx-auto">
              <h4 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {t('leadershipPhilosophy')}
              </h4>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                "{t('leadershipPhilosophyDesc')}"
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About; 