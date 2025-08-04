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

const ServicesSection: React.FC = () => {
  const { t } = useTranslation();
  const { getServices } = useTranslatedData();
  const services = getServices();

  const serviceFeatures = [
    {
      title: t('engineeringDesign'),
      description: t('engineeringDesignDesc'),
      icon: <Building2 className="w-8 h-8" />,
      features: [t('architecturalDesign'), t('structuralDesign'), t('electricalDesign'), t('mechanicalDesign')],
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: t('projectManagement'),
      description: t('projectManagementDesc'),
      icon: <ClipboardList className="w-8 h-8" />,
      features: [t('projectPlanning'), t('qualityManagement'), t('riskManagement'), t('executionFollowUp')],
      color: 'from-green-500 to-green-600'
    },
    {
      title: t('construction'),
      description: t('constructionDesc'),
      icon: <Wrench className="w-8 h-8" />,
      features: [t('buildingConstruction'), t('infrastructure'), t('roadsBridges'), t('publicFacilities')],
      color: 'from-orange-500 to-orange-600'
    },
    {
      title: t('healthcareProjects'),
      description: t('healthcareProjectsDesc'),
      icon: <Heart className="w-8 h-8" />,
      features: [t('generalHospitals'), t('specializedHospitals'), t('medicalCenters'), t('laboratories')],
      color: 'from-red-500 to-red-600'
    },
    {
      title: t('educationalProjects'),
      description: t('educationalProjectsDesc'),
      icon: <GraduationCap className="w-8 h-8" />,
      features: [t('schoolsUniversities'), t('libraries'), t('scientificLabs'), t('sportsFacilities')],
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: t('infrastructure'),
      description: t('infrastructureDesc'),
      icon: <Car className="w-8 h-8" />,
      features: [t('roadsBridges'), t('waterNetworks'), t('electricityNetworks'), t('sewageSystems')],
      color: 'from-gray-500 to-gray-600'
    },
    {
      title: t('engineeringConsulting'),
      description: t('engineeringConsultingDesc'),
      icon: <Lightbulb className="w-8 h-8" />,
      features: [t('feasibilityStudies'), t('preliminaryDesign'), t('contractManagement'), t('technicalSupervision')],
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      title: t('governmentProjects'),
      description: t('governmentProjectsDesc'),
      icon: <Shield className="w-8 h-8" />,
      features: [t('administrativeBuildings'), t('governmentFacilities'), t('securityPolice'), t('publicServices')],
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  return (
    <section id="services" className="py-20  dark:from-orange-900/20 dark:to-orange-800/20">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4  bg-gray-30">
            {t('servicesTitle')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('servicesSubtitle')}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceFeatures.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 card-hover group relative overflow-hidden  dark:border-orange-800"
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              
              {/* Icon */}
              <div className={`relative z-10 w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-200">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  {service.description}
                </p>
                
                {/* Features */}
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2 rtl:space-x-reverse">
                      <CheckCircle className="w-4 h-4 text-orange-500 flex-shrink-0" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-orange-400 to-orange-300 rounded-2xl p-8 md:p-12 text-white shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Content */}
              <div>
                <h3 className="text-3xl font-bold mb-6">
                  {t('whyChooseUs')}
                </h3>
                <p className="text-lg mb-8 leading-relaxed opacity-90">
                  {t('whyChooseUsDesc')}
                </p>
                
                {/* Features */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { icon: <Users className="w-6 h-6" />, text: t('professionalTeam') },
                    { icon: <Award className="w-6 h-6" />, text: t('over20Years') },
                    { icon: <CheckCircle className="w-6 h-6" />, text: t('over150Projects') },
                    { icon: <Clock className="w-6 h-6" />, text: t('onTimeDelivery') }
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3 rtl:space-x-reverse">
                      <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                        {feature.icon}
                      </div>
                      <span className="font-medium">{feature.text}</span>
                    </div>
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