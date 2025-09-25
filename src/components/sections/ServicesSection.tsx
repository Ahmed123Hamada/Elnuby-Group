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
      title: 'Design & Build',
      titleAr: 'التصميم والتنفيذ',
      description: 'Concept, permits, engineering, procurement and construction in one contract',
      descriptionAr: 'التصميم والتراخيص والهندسة والتوريد والتنفيذ في عقد واحد',
      icon: Building2,
      image: 'https://media.istockphoto.com/id/1063723682/photo/hand-sketching-a-designer-villa-with-pool.jpg?s=612x612&w=0&k=20&c=SlIacvwSEEsZ-2imWLDk6dC0glhaWEg-pOGFSK4YQuI=',
      color: 'from-brand-primary to-brand-accent',
      bgPattern: 'bg-gradient-to-br from-brand-primary/5 to-brand-accent/10',
      serviceIndex: 0,
    },
    {
      title: 'Civil Works',
      titleAr: 'الأعمال المدنية',
      description: 'Earthworks, foundations, concrete structures, roads and site utilities',
      descriptionAr: 'أعمال الحفر والأساسات والهياكل الخرسانية والطرق ومرافق الموقع',
      icon: Wrench,
      image: 'https://civilideas374921463.wordpress.com/wp-content/uploads/2021/09/3faf92b0ec8e7803f92e24068d04734e.jpg?w=1200',
      color: 'from-brand-accent to-brand-primary',
      bgPattern: 'bg-gradient-to-br from-brand-accent/5 to-brand-primary/10',
      serviceIndex: 1
    },
    {
      title: 'MEP',
      titleAr: 'الأعمال الميكانيكية والكهربائية والسباكة',
      description: 'Integrated mechanical, electrical and plumbing with BIM coordination',
      descriptionAr: 'أنظمة ميكانيكية وكهربائية وسباكة متكاملة مع تنسيق الBIM',
      icon: Zap,
      image: 'https://innodez.com/wp-content/uploads/2025/01/futureofmepdesing.jpg',
      color: 'from-brand-secondary to-brand-primary',
      bgPattern: 'bg-gradient-to-br from-brand-secondary/5 to-brand-primary/10',
      serviceIndex: 1
    },
    {
      title: 'Finishing',
      titleAr: 'التشطيبات',
      description: 'Interior fit‑out, joinery, flooring, ceilings, decorative paint and signage',
      descriptionAr: 'أعمال الفت آوت والنجارة والأرضيات والأسقف والدهانات الديكورية واللافتات',
      icon: Droplets,
      image: 'https://media.licdn.com/dms/image/v2/D4D12AQHZfKZxMg3TnQ/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1679589681463?e=2147483647&v=beta&t=QXrYR29su9CMFmtZAIpD6MN_-dg96e5jBabvv8Vv98U',
      color: 'from-brand-primary to-brand-secondary',
      bgPattern: 'bg-gradient-to-br from-brand-primary/5 to-brand-secondary/10',
      serviceIndex: 0
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
    <motion.section 
      id="services" 
      className="py-24 bg-gradient-to-br from-brand-background/30 via-white to-brand-background/20 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Modern Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iNCIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
      </div>

      {/* Modern Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-8 w-32 h-32 bg-gradient-to-br from-brand-primary/20 to-brand-accent/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-8 w-40 h-40 bg-gradient-to-br from-brand-accent/15 to-brand-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-brand-secondary/10 to-brand-primary/15 rounded-full blur-2xl"></div>
        <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-gradient-to-br from-brand-primary/25 to-brand-accent/15 rounded-full blur-xl"></div>
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
            className="mb-8"
          >
            <span className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-brand-primary/10 to-brand-accent/10 backdrop-blur-xl text-brand-primary rounded-full text-sm font-semibold border border-brand-primary/20 shadow-lg">
              <div className="w-2 h-2 bg-brand-primary rounded-full mr-3 animate-pulse"></div>
              {currentLang === 'ar' ? 'خدمات متكاملة عالية الجودة' : 'Comprehensive High-Quality Services'}
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-brand-primary via-brand-accent to-brand-primary bg-clip-text text-transparent">
              {currentLang === 'ar' ? 'خدماتنا المتكاملة' : 'Our Integrated Services'}
            </span>
          </h2>
          <p className="text-xl text-brand-text/70 max-w-4xl mx-auto leading-relaxed">
            {currentLang === 'ar' 
              ? 'نقدم مجموعة شاملة من الخدمات الهندسية والإنشائية المتخصصة بأعلى معايير الجودة العالمية'
              : 'We provide a comprehensive range of specialized engineering and construction services with the highest international quality standards'
            }
          </p>
        </motion.div>

        {/* Modern Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {modernServices.map((service, index) => {
            const IconComponent = service.icon;
            const title = currentLang === 'ar' ? service.titleAr : service.title;
            const description = currentLang === 'ar' ? service.descriptionAr : service.description;
            
            return (
              <motion.button
                key={index}
                type="button"
                onClick={() => handleServiceClick(service.serviceIndex)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900 rounded-3xl"
                whileHover={{ y: -8 }}
                aria-label={`${title} - ${currentLang === 'ar' ? 'المزيد من التفاصيل' : 'More Details'}`}
              >
                <div className="relative h-full bg-white/90 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500">
                  {/* Modern Glassmorphism Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.bgPattern} opacity-60 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  {/* Modern Background Image with Brand Overlay */}
                  <div className="relative h-48 overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center bg-no-repeat group-hover:scale-105 transition-transform duration-500"
                      style={{
                        backgroundImage: `url(${service.image})`,
                        backgroundPosition: 'center center'
                      }}
                    ></div>
                    {/* Brand Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-secondary/90 via-brand-secondary/60 to-transparent"></div>
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color}/30 via-transparent to-brand-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
                    
                    {/* Modern Floating Icon */}
                    <div className="absolute top-6 right-6">
                      <div className={`w-16 h-16 bg-white/20 backdrop-blur-xl rounded-2xl flex items-center justify-center border border-white/30 shadow-2xl group-hover:bg-gradient-to-br ${service.color} group-hover:border-white/50 group-hover:scale-110 transition-all duration-500`}>
                        <IconComponent className="w-8 h-8 text-white group-hover:text-white transition-colors duration-300" />
                      </div>
                    </div>

                    {/* Modern Title Overlay */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-2xl font-bold text-white mb-2 leading-tight drop-shadow-lg">
                        {title}
                      </h3>
                      <p className="text-[15px] text-white/90 leading-relaxed line-clamp-2 drop-shadow-md">
                        {description}
                      </p>
                    </div>

                    {/* Modern Decorative Elements */}
                    <div className={`absolute top-1/3 left-8 w-24 h-24 bg-gradient-to-br ${service.color}/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
                    <div className="absolute bottom-1/3 right-8 w-16 h-16 bg-gradient-to-br from-white/10 to-brand-accent/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  </div>

                  {/* Modern Content Section */}
                  <div className="relative p-6 space-y-4 bg-gradient-to-b from-white/80 to-brand-background/30">
                    {/* Modern Action Button */}
                  <div
                      className={`w-full py-3 px-4 bg-gradient-to-r ${service.color} text-white font-semibold rounded-2xl transition-all duration-300 shadow-lg group-hover:shadow-xl group-hover:opacity-95 flex items-center justify-center gap-2 group/btn`}
                    >
                      <span className="relative z-10">
                        {currentLang === 'ar' ? 'المزيد من التفاصيل' : 'More Details'}
                      </span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      
                      {/* Button shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 transform -skew-x-12 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-500 rounded-2xl"></div>
                    </div>
                  </div>

                  {/* Modern Border Glow Effect */}
                  <div className={`absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-brand-primary/40 transition-all duration-500 pointer-events-none`}></div>
                  
                  {/* Modern Shine Effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                </div>
              </motion.button>
            );
          })}
        </div>

      </div>
    </motion.section>
  );
};

export default ServicesSection; 