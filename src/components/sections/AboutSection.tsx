import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { CheckCircle, Users, Award, Clock } from 'lucide-react';
import { useTranslatedData } from '../../hooks/useTranslatedData';
import nubyInsideImage from '../../assast/Images/About/nubyinside.jpg';

const AboutSection: React.FC = () => {
  const { t } = useTranslation();
  const { getAbout } = useTranslatedData();
  const about = getAbout();

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
            >
              {about.title}
            </motion.h2>
            
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-xl text-primary-600 dark:text-primary-400 font-semibold mb-6"
            >
              {about.subtitle}
            </motion.h3>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
            >
              {about.content}
            </motion.p>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {[
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
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
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

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full h-96 lg:h-[500px] bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl shadow-2xl overflow-hidden">
              <img 
                src={nubyInsideImage} 
                alt={t('aboutImageAlt')}
                className="w-full h-full object-cover"
              />
              
              {/* Overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              
              {/* Floating elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-10 right-10 w-16 h-16 bg-white/20 rounded-full backdrop-blur-sm"
              />
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute bottom-10 left-10 w-12 h-12 bg-white/20 rounded-full backdrop-blur-sm"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 