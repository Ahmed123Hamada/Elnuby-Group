import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Wrench, 
  ClipboardList, 
  Lightbulb, 
  Car, 
  Heart, 
  GraduationCap, 
  Shield,
  Users,
  Award,
  Clock,
  CheckCircle
} from 'lucide-react';
import { useTranslatedData } from '../../hooks/useTranslatedData';
import ServiceCard from '../ServiceCard';
import Button from '../Button';

const ServicesSection: React.FC = () => {
  const { t } = useTranslation();
  const { getServices } = useTranslatedData();
  const services = getServices();

  const serviceCards = [
    {
      title: t('engineeringDesign'),
      description: t('engineeringDesignDesc'),
      icon: Building2,
      features: [t('architecturalDesign'), t('structuralDesign'), t('electricalDesign'), t('mechanicalDesign')],
      number: '01',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: t('projectManagement'),
      description: t('projectManagementDesc'),
      icon: ClipboardList,
      features: [t('projectPlanning'), t('qualityManagement'), t('riskManagement'), t('executionFollowUp')],
      number: '02',
      color: 'from-green-500 to-green-600'
    },
    {
      title: t('construction'),
      description: t('constructionDesc'),
      icon: Wrench,
      features: [t('buildingConstruction'), t('infrastructure'), t('roadsBridges'), t('publicFacilities')],
      number: '03',
      color: 'from-elnuby-orange to-elnuby-darkOrange'
    },
    {
      title: t('healthcareProjects'),
      description: t('healthcareProjectsDesc'),
      icon: Heart,
      features: [t('generalHospitals'), t('specializedHospitals'), t('medicalCenters'), t('laboratories')],
      number: '04',
      color: 'from-red-500 to-red-600'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-elnuby-cream to-elnuby-lightOrange/20 dark:from-elnuby-dark/20 dark:to-elnuby-orange/10 overflow-hidden">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-brand-text dark:text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {t('servicesTitle')}
          </motion.h2>
          <motion.p 
            className="text-xl text-brand-text-light dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {t('servicesSubtitle')}
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {serviceCards.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
                features={service.features}
                number={service.number}
                color={service.color}
                onClick={() => console.log(`Clicked ${service.title}`)}
              />
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            variant="gradient"
            size="lg"
            icon="arrow-right"
            onClick={() => console.log('Explore all services')}
          >
            Explore all services
          </Button>
        </motion.div>

        {/* Why Choose Us Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-elnuby-orange to-elnuby-darkOrange rounded-2xl p-8 md:p-12 text-white shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Content */}
              <div>
                <motion.h3 
                  className="text-3xl font-bold mb-6"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  {t('whyChooseUs')}
                </motion.h3>
                <motion.p 
                  className="text-lg mb-8 leading-relaxed opacity-90"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  {t('whyChooseUsDesc')}
                </motion.p>
                
                {/* Features */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { icon: <Users className="w-6 h-6" />, text: t('professionalTeam') },
                    { icon: <Award className="w-6 h-6" />, text: t('over20Years') },
                    { icon: <CheckCircle className="w-6 h-6" />, text: t('over150Projects') },
                    { icon: <Clock className="w-6 h-6" />, text: t('onTimeDelivery') }
                  ].map((feature, index) => (
                    <motion.div 
                      key={index} 
                      className="flex items-center space-x-3 rtl:space-x-reverse"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                        {feature.icon}
                      </div>
                      <span className="font-medium">{feature.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 gap-6">
                {[
                  { number: '150+', label: t('completedProjects') },
                  { number: '20+', label: t('yearsExperience') },
                  { number: '50+', label: t('happyClients') },
                  { number: '100+', label: t('professionalStaff') }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/20"
                  >
                    <div className="text-3xl font-bold mb-2">{stat.number}</div>
                    <div className="text-sm opacity-90">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection; 