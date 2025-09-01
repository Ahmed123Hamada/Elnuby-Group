import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Wrench, 
  Zap, 
  Droplets,
  ArrowRight
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
// Background images for service cards - using better quality images
const constructionImage = '/images/services/mechanical.webp';
const mechanicalImage = '/images/services/hvacsystem.webp';
const electricalImage = '/images/services/lighting.webp';
const plumbingImage = '/images/services/plumbing.webp';

const ServicesSection: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const modernServices = [
    {
      title: 'Construction',
      titleAr: 'الإنشاءات',
      description: 'Complete construction solutions from foundation to finishing',
      descriptionAr: '   الإنشاء الكاملة من الأساسات إلى التشطيبات',
      icon: Building2,
      image: constructionImage,

      color: 'from-blue-600 to-blue-700',
      bgPattern: 'bg-blue-50 dark:bg-blue-900/20',
      serviceIndex: 0,
    },
    {
      title: 'Mechanical',
      titleAr: 'الميكانيكية',
      description: 'Advanced mechanical systems and HVAC solutions',
      descriptionAr: 'أنظمة ميكانيكية متقدمة وحلول التكييف والتهوية',
      icon: Wrench,
      image: mechanicalImage,
      color: 'from-green-600 to-green-700',
      bgPattern: 'bg-green-50 dark:bg-green-900/20',
      serviceIndex: 1
    },
    {
      title: 'Electrical',
      titleAr: 'الكهربائية',
      description: 'Comprehensive electrical installations and power systems',
      descriptionAr: 'تركيبات كهربائية شاملة وأنظمة الطاقة',
      icon: Zap,
      image: electricalImage,
      color: 'from-yellow-600 to-orange-600',
      bgPattern: 'bg-yellow-50 dark:bg-yellow-900/20',
      serviceIndex: 2
    },
    {
      title: 'Plumbing',
      titleAr: 'السباكة',
      description: 'Professional plumbing and water management systems',
      descriptionAr: 'أنظمة السباكة المهنية وإدارة المياه',
      icon: Droplets,
      image: plumbingImage,
      color: 'from-cyan-600 to-blue-600',
      bgPattern: 'bg-cyan-50 dark:bg-cyan-900/20',
      serviceIndex: 3
    }
  ];

  // Function to handle service navigation
  const handleServiceClick = (serviceIndex: number) => {
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Navigate to services page with specific service
    navigate('/services', { 
      state: { activeService: serviceIndex } 
    });
  };

  // Function to handle general services navigation  
  const handleAllServicesClick = () => {
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Navigate to services page
    navigate('/services');
  };

  const currentLang = t('language') === 'Language' ? 'en' : 'ar';

  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {currentLang === 'ar' ? 'خدماتنا المتكاملة' : 'Our Integrated Services'}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {currentLang === 'ar' 
              ? 'نقدم مجموعة شاملة من الخدمات الهندسية والإنشائية المتخصصة'
              : 'We provide a comprehensive range of specialized engineering and construction services'
            }
          </p>
        </motion.div>

        {/* Modern Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {modernServices.map((service, index) => {
            const IconComponent = service.icon;
            const title = currentLang === 'ar' ? service.titleAr : service.title;
            const description = currentLang === 'ar' ? service.descriptionAr : service.description;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                
                <div className={`relative h-full bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 group-hover:border-transparent overflow-hidden`}>
                  {/* Background Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15 dark:opacity-8 group-hover:opacity-25 dark:group-hover:opacity-15 transition-all duration-500"
                    style={{
                      backgroundImage: `url(${service.image})`,
                      backgroundPosition: 'center center',
                      filter: 'blur(0.5px)'
                    }}
                  ></div>
                  {/* Gradient overlay for better text readability */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 dark:to-black/30"></div>
                  {/* Background Pattern */}
                  <div className={`absolute inset-0 ${service.bgPattern} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  {/* Icon */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    viewport={{ once: true }}
                    className={`relative z-10 w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                      {title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 leading-relaxed">
                      {description}
                    </p>



                    {/* More Details Button */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="mt-6"
                    >
                      <button
                        onClick={() => handleServiceClick(service.serviceIndex)}
                        className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${service.color} text-white text-sm font-medium rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 group/btn`}
                      >
                        {currentLang === 'ar' ? 'المزيد من التفاصيل' : 'More Details'}
                        <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </button>
                    </motion.div>

                  </div>

                  {/* Hover Effect */}
                  <div className={`absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-r ${service.color} rounded-full opacity-10 group-hover:opacity-20 group-hover:scale-150 transition-all duration-500`}></div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            {currentLang === 'ar' 
              ? 'نقدم حلولاً متكاملة في جميع التخصصات الهندسية لضمان تنفيذ مشاريعكم بأعلى معايير الجودة والكفاءة'
              : 'We provide integrated solutions across all engineering disciplines to ensure your projects are executed with the highest standards of quality and efficiency'
            }
          </p>
          
          <button
            onClick={handleAllServicesClick}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-full hover:from-primary-700 hover:to-primary-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group"
          >
            {currentLang === 'ar' ? 'عرض جميع الخدمات' : 'View All Services'}
            <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection; 