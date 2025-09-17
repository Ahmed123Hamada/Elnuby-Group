import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, 
  Wrench, 
  Zap, 
  Droplets,
  Shield,
  Lightbulb,
  TrendingUp,
  Globe,
  Settings,
  Briefcase,
  Truck,
  Home,
  Factory,
  School,
  Heart,
  TreePine
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import OptimizedImage from '../components/OptimizedImage';
import ImagePreloader from '../components/ImagePreloader';
import servicesBgImage from '../assast/Images/project/projectslider2.webp';

const Services: React.FC = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [activeService, setActiveService] = useState(0);
  const [activeTab, setActiveTab] = useState('categories');

  // Handle navigation from ServicesSection
  useEffect(() => {
    if (location.state?.activeService !== undefined) {
      setActiveService(location.state.activeService);
    }
  }, [location.state]);

  // Enhanced Services data with detailed information
  const services = [
    {
      id: 'construction',
      title: 'Construction',
      titleAr: 'الإنشاءات',
      subtitle: 'Building Excellence from Ground Up',
      subtitleAr: 'بناء التميز من الأساس',
      description: 'Complete construction solutions from foundation to finishing with highest quality standards, utilizing cutting-edge technology and sustainable practices',
      descriptionAr: 'حلول إنشائية متكاملة من الأساسات إلى التشطيبات بأعلى معايير الجودة، باستخدام أحدث التقنيات والممارسات المستدامة',
      icon: Building2,
      color: 'from-primary-500 to-primary-700',
      accentColor: 'primary-500',
      projects: '250+',
      experience: '25+ Years',
      satisfaction: '98%',
      team: '150+ Engineers',
      categories: [
        {
          name: 'Residential Construction',
          nameAr: 'البناء السكني',
          icon: Home,
          description: 'Luxury villas, apartments, and housing complexes',
          descriptionAr: 'فيلات فاخرة وشقق ومجمعات سكنية',
          subcategories: [
            { name: 'Luxury Villas', nameAr: 'فيلات فاخرة' },
            { name: 'Apartment Complexes', nameAr: 'مجمعات سكنية' },
            { name: 'Townhouses', nameAr: 'بيوت متصلة' }
          ]
        },
        {
          name: 'Commercial Buildings',
          nameAr: 'المباني التجارية',
          icon: Briefcase,
          description: 'Office buildings, shopping centers, and business complexes',
          descriptionAr: 'مباني مكاتب ومراكز تسوق ومجمعات تجارية',
          subcategories: [
            { name: 'Office Towers', nameAr: 'أبراج مكتبية' },
            { name: 'Shopping Malls', nameAr: 'مراكز تسوق' },
            { name: 'Business Centers', nameAr: 'مراكز أعمال' }
          ]
        },
        {
          name: 'Industrial Facilities',
          nameAr: 'المنشآت الصناعية',
          icon: Factory,
          description: 'Manufacturing plants, warehouses, and industrial complexes',
          descriptionAr: 'مصانع ومستودعات ومجمعات صناعية',
          subcategories: [
            { name: 'Manufacturing Plants', nameAr: 'مصانع التصنيع' },
            { name: 'Warehouses', nameAr: 'مستودعات' },
            { name: 'Industrial Complexes', nameAr: 'مجمعات صناعية' }
          ]
        },
        {
          name: 'Educational Buildings',
          nameAr: 'المباني التعليمية',
          icon: School,
          description: 'Schools, universities, and educational facilities',
          descriptionAr: 'مدارس وجامعات ومرافق تعليمية',
          subcategories: [
            { name: 'Primary Schools', nameAr: 'مدارس ابتدائية' },
            { name: 'Universities', nameAr: 'جامعات' },
            { name: 'Training Centers', nameAr: 'مراكز تدريب' }
          ]
        },
        {
          name: 'Healthcare Facilities',
          nameAr: 'المرافق الصحية',
          icon: Heart,
          description: 'Hospitals, clinics, and medical centers',
          descriptionAr: 'مستشفيات وعيادات ومراكز طبية',
          subcategories: [
            { name: 'General Hospitals', nameAr: 'مستشفيات عامة' },
            { name: 'Specialized Clinics', nameAr: 'عيادات متخصصة' },
            { name: 'Medical Centers', nameAr: 'مراكز طبية' }
          ]
        },
        {
          name: 'Infrastructure',
          nameAr: 'البنية التحتية',
          icon: Globe,
          description: 'Roads, bridges, and public infrastructure',
          descriptionAr: 'طرق وجسور وبنية تحتية عامة',
          subcategories: [
            { name: 'Road Construction', nameAr: 'إنشاء الطرق' },
            { name: 'Bridge Engineering', nameAr: 'هندسة الجسور' },
            { name: 'Public Utilities', nameAr: 'المرافق العامة' }
          ]
        }
        ]
    },
    {
      id: 'mechanical',
      title: 'Mechanical',
      titleAr: 'الميكانيكية',
      subtitle: 'Advanced Mechanical Systems',
      subtitleAr: 'أنظمة ميكانيكية متقدمة',
      description: 'State-of-the-art mechanical systems and HVAC solutions for optimal comfort, efficiency, and performance in all types of buildings',
      descriptionAr: 'أنظمة ميكانيكية متطورة وحلول التكييف والتهوية للراحة والكفاءة والأداء الأمثل في جميع أنواع المباني',
      icon: Wrench,
      color: 'from-blue-500 to-blue-700',
      accentColor: 'blue-500',
      projects: '180+',
      experience: '22+ Years',
      satisfaction: '97%',
      team: '80+ Specialists',
      categories: [
        {
          name: 'HVAC',
          nameAr: 'أنظمة التكييف والتهوية',
          icon: Settings,
          description: 'Central air conditioning, ventilation, and climate control',
          descriptionAr: 'تكييف مركزي وتهوية وتحكم في المناخ',
          subcategories: [
            { name: 'Chilled Water Systems', nameAr: 'أنظمة الماء المبرد' },
            { name: 'VRF/VRV Systems', nameAr: 'أنظمة VRF/VRV' },
            { name: 'Ventilation & Exhaust', nameAr: 'التهوية والعادم' }
          ]
        },
        {
          name: 'Medical Gas',
          nameAr: 'الغازات الطبية',
          icon: Heart,
          description: 'Medical gas pipeline systems and equipment',
          descriptionAr: 'أنظمة خطوط الغازات الطبية ومعداتها',
          subcategories: [
            { name: 'Oxygen Systems', nameAr: 'أنظمة الأكسجين' },
            { name: 'Medical Air & Vacuum', nameAr: 'هواء وفراغ طبي' },
            { name: 'Nitrous Oxide & Others', nameAr: 'أكسيد النيتروز وغيرها' }
          ]
        },
        {
          name: 'FIRE',
          nameAr: 'مكافحة الحريق',
          icon: Shield,
          description: 'Fire suppression, detection, and safety systems',
          descriptionAr: 'أنظمة إطفاء الحريق والكشف والسلامة',
          subcategories: [
            { name: 'Sprinkler Systems', nameAr: 'أنظمة الرش' },
            { name: 'Fire Alarm & Detection', nameAr: 'إنذار وكشف الحريق' },
            { name: 'FM200/Clean Agent', nameAr: 'عامل نظيف FM200' }
          ]
        },
        {
          name: 'Elevators & Escalators',
          nameAr: 'المصاعد والسلالم المتحركة',
          icon: TrendingUp,
          description: 'Vertical transportation solutions',
          descriptionAr: 'حلول النقل العمودي',
          subcategories: [
            { name: 'Passenger Elevators', nameAr: 'مصاعد الركاب' },
            { name: 'Freight Elevators', nameAr: 'مصاعد البضائع' },
            { name: 'Escalators & Moving Walks', nameAr: 'سلالم متحركة ومشايات' }
          ]
        },
        {
          name: 'Energy System',
          nameAr: 'نظام الطاقة',
          icon: Zap,
          description: 'Energy-efficient mechanical solutions',
          descriptionAr: 'حلول ميكانيكية موفرة للطاقة',
          subcategories: [
            { name: 'Energy Management', nameAr: 'إدارة الطاقة' },
            { name: 'Heat Recovery', nameAr: 'استعادة الحرارة' },
            { name: 'Renewables Integration', nameAr: 'تكامل مصادر متجددة' }
          ]
        }
        ]
    },
    {
      id: 'electrical',
      title: 'Electrical',
      titleAr: 'الكهربائية',
      subtitle: 'Smart Electrical Solutions',
      subtitleAr: 'حلول كهربائية ذكية',
      description: 'Modern electrical installations, smart automation, and energy-efficient solutions designed for safety, reliability, and future-readiness',
      descriptionAr: 'تركيبات كهربائية حديثة وأتمتة ذكية وحلول موفرة للطاقة مصممة للأمان والموثوقية والاستعداد للمستقبل',
      icon: Zap,
      color: 'from-yellow-500 to-orange-600',
      accentColor: 'yellow-500',
      projects: '200+',
      experience: '24+ Years',
      satisfaction: '99%',
      team: '100+ Electricians',
      categories: [
        {
          name: 'Power Distribution',
          nameAr: 'توزيع الطاقة',
          icon: Zap,
          description: 'Electrical panels, transformers, and power systems',
          descriptionAr: 'لوحات كهربائية ومحولات وأنظمة طاقة',
          subcategories: [
            { name: 'Main Distribution Panels', nameAr: 'لوحات توزيع رئيسية' },
            { name: 'Transformers', nameAr: 'محولات كهربائية' },
            { name: 'Power Monitoring', nameAr: 'مراقبة الطاقة' }
          ]
        },
        {
          name: 'Lighting Design',
          nameAr: 'تصميم الإضاءة',
          icon: Lightbulb,
          description: 'Interior and exterior lighting solutions',
          descriptionAr: 'حلول الإضاءة الداخلية والخارجية',
          subcategories: [
            { name: 'LED Systems', nameAr: 'أنظمة LED' },
            { name: 'Architectural Lighting', nameAr: 'إضاءة معمارية' },
            { name: 'Emergency Lighting', nameAr: 'إضاءة طوارئ' }
          ]
        },
        {
          name: 'Smart Controls',
          nameAr: 'التحكم الذكي',
          icon: Settings,
          description: 'Building automation and smart systems',
          descriptionAr: 'أتمتة المباني والأنظمة الذكية',
          subcategories: [
            { name: 'BMS Systems', nameAr: 'أنظمة إدارة المباني' },
            { name: 'Home Automation', nameAr: 'أتمتة منزلية' },
            { name: 'IoT Integration', nameAr: 'تكامل إنترنت الأشياء' }
          ]
        },
        {
          name: 'Security Systems',
          nameAr: 'أنظمة الأمان',
          icon: Shield,
          description: 'CCTV, access control, and alarm systems',
          descriptionAr: 'كاميرات مراقبة وتحكم بالدخول وأنظمة إنذار',
          subcategories: [
            { name: 'CCTV Surveillance', nameAr: 'مراقبة بالفيديو' },
            { name: 'Access Control', nameAr: 'تحكم بالدخول' },
            { name: 'Intrusion Alarms', nameAr: 'إنذار اقتحام' }
          ]
        },
        {
          name: 'Communication Networks',
          nameAr: 'شبكات الاتصالات',
          icon: Globe,
          description: 'Data networks, telecommunications, and IT infrastructure',
          descriptionAr: 'شبكات البيانات والاتصالات والبنية التحتية لتقنية المعلومات',
          subcategories: [
            { name: 'Structured Cabling', nameAr: 'الأسلاك المنظمة' },
            { name: 'Network Infrastructure', nameAr: 'بنية الشبكة' },
            { name: 'Wireless Systems', nameAr: 'أنظمة لاسلكية' }
          ]
        },
        {
          name: 'Renewable Energy',
          nameAr: 'الطاقة المتجددة',
          icon: TreePine,
          description: 'Solar panels and sustainable energy solutions',
          descriptionAr: 'الألواح الشمسية وحلول الطاقة المستدامة',
          subcategories: [
            { name: 'Solar Panels', nameAr: 'ألواح شمسية' },
            { name: 'Wind Energy', nameAr: 'طاقة الرياح' },
            { name: 'Energy Storage', nameAr: 'تخزين الطاقة' }
          ]
        }
        ]
    },
    {
      id: 'water',
      title: 'Plumbing',
      titleAr: 'السباكة',
      subtitle: 'Professional Plumbing Solutions',
      subtitleAr: 'حلول سباكة احترافية',
      description: 'Complete plumbing systems and water infrastructure solutions designed for efficiency, reliability, and long-term performance',
      descriptionAr: 'أنظمة سباكة متكاملة وحلول البنية التحتية للمياه مصممة للكفاءة والموثوقية والأداء طويل الأمد',
      icon: Droplets,
      color: 'from-cyan-500 to-blue-600',
      accentColor: 'cyan-500',
      projects: '120+',
      experience: '20+ Years',
      satisfaction: '96%',
      team: '60+ Specialists',
      categories: [
        {
          name: 'Water Treatment',
          nameAr: 'معالجة المياه',
          icon: Droplets,
          description: 'Water purification and treatment systems',
          descriptionAr: 'أنظمة تنقية ومعالجة المياه',
          subcategories: [
            { name: 'Filtration Systems', nameAr: 'أنظمة الترشيح' },
            { name: 'Reverse Osmosis', nameAr: 'التناضح العكسي' },
            { name: 'Disinfection', nameAr: 'التعقيم' }
          ]
        },
        {
          name: 'Pumping Stations',
          nameAr: 'محطات الضخ',
          icon: Settings,
          description: 'Water pumping and distribution systems',
          descriptionAr: 'أنظمة ضخ وتوزيع المياه',
          subcategories: [
            { name: 'Centrifugal Pumps', nameAr: 'مضخات طاردة مركزية' },
            { name: 'Booster Stations', nameAr: 'محطات التعزيز' },
            { name: 'Control Systems', nameAr: 'أنظمة التحكم' }
          ]
        },
        {
          name: 'Sewage Systems',
          nameAr: 'أنظمة الصرف الصحي',
          icon: Truck,
          description: 'Wastewater collection and treatment',
          descriptionAr: 'جمع ومعالجة مياه الصرف الصحي',
          subcategories: [
            { name: 'Collection Networks', nameAr: 'شبكات التجميع' },
            { name: 'Treatment Plants', nameAr: 'محطات المعالجة' },
            { name: 'Sludge Management', nameAr: 'إدارة الرواسب' }
          ]
        },
        {
          name: 'Distribution Networks',
          nameAr: 'شبكات التوزيع',
          icon: Globe,
          description: 'Water supply pipeline systems',
          descriptionAr: 'أنظمة أنابيب إمداد المياه',
          subcategories: [
            { name: 'Main Pipelines', nameAr: 'الأنابيب الرئيسية' },
            { name: 'Service Connections', nameAr: 'وصلات الخدمة' },
            { name: 'Pressure Management', nameAr: 'إدارة الضغط' }
          ]
        },
        {
          name: 'Storage Solutions',
          nameAr: 'حلول التخزين',
          icon: Briefcase,
          description: 'Water tanks and reservoir systems',
          descriptionAr: 'خزانات المياه وأنظمة الخزانات',
          subcategories: [
            { name: 'Ground Tanks', nameAr: 'خزانات أرضية' },
            { name: 'Elevated Tanks', nameAr: 'خزانات مرتفعة' },
            { name: 'Reservoirs', nameAr: 'خزانات مياه' }
          ]
        },
        {
          name: 'Environmental Solutions',
          nameAr: 'الحلول البيئية',
          icon: TreePine,
          description: 'Eco-friendly water management',
          descriptionAr: 'إدارة المياه الصديقة للبيئة',
          subcategories: [
            { name: 'Water Recycling', nameAr: 'إعادة تدوير المياه' },
            { name: 'Rainwater Harvesting', nameAr: 'تجميع مياه الأمطار' },
            { name: 'Greywater Systems', nameAr: 'أنظمة المياه الرمادية' }
          ]
        }
        ]
    }
  ];


  const currentLang = t('language') === 'Language' ? 'en' : 'ar';



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

  const currentService = services[activeService];

  // Preload critical images for the current service
  const currentServiceImages = currentService.categories.map(category => {
    const getCategoryImage = (name: string, serviceType: string) => {
      const getResponsiveUnsplashUrl = (imageId: string) => {
        return `https://images.unsplash.com/${imageId}?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=75`;
      };

      if (serviceType === 'construction') {
        if (name.toLowerCase().includes('residential')) return getResponsiveUnsplashUrl('photo-1560518883-ce09059eeffa');
        if (name.toLowerCase().includes('commercial')) return getResponsiveUnsplashUrl('photo-1486406146926-c627a92ad1ab');
        if (name.toLowerCase().includes('industrial')) return getResponsiveUnsplashUrl('photo-1565008447742-97f6f38c985c');
        if (name.toLowerCase().includes('educational')) return getResponsiveUnsplashUrl('photo-1562774053-701939374585');
        if (name.toLowerCase().includes('healthcare')) return getResponsiveUnsplashUrl('photo-1586773860418-d37222d8fce3');
        if (name.toLowerCase().includes('infrastructure')) return getResponsiveUnsplashUrl('photo-1541888946425-d81bb19240f5');
        return getResponsiveUnsplashUrl('photo-1504307651254-35680f356dfd');
      }
      
      if (serviceType === 'electrical') {
        if (name.toLowerCase().includes('power')) return getResponsiveUnsplashUrl('photo-1473341304170-971dccb5ac1e');
        if (name.toLowerCase().includes('lighting')) return getResponsiveUnsplashUrl('photo-1558618666-fcd25c85cd64');
        if (name.toLowerCase().includes('smart') || name.toLowerCase().includes('control')) return getResponsiveUnsplashUrl('photo-1558002038-1055907df827');
        if (name.toLowerCase().includes('security')) return getResponsiveUnsplashUrl('photo-1557804506-669a67965ba0');
        if (name.toLowerCase().includes('communication')) return getResponsiveUnsplashUrl('photo-1544197150-b99a580bb7a8');
        if (name.toLowerCase().includes('renewable') || name.toLowerCase().includes('solar')) return getResponsiveUnsplashUrl('photo-1509391366360-2e959784a276');
        return getResponsiveUnsplashUrl('photo-1621905252507-b35492cc74b4');
      }
      
      if (serviceType === 'water') {
        if (name.toLowerCase().includes('treatment')) return getResponsiveUnsplashUrl('photo-1581090700227-1e37b190418e');
        if (name.toLowerCase().includes('pumping')) return getResponsiveUnsplashUrl('photo-1581092160562-40aa08e78837');
        if (name.toLowerCase().includes('sewage')) return getResponsiveUnsplashUrl('photo-1581092160607-ee22621dd758');
        if (name.toLowerCase().includes('distribution')) return getResponsiveUnsplashUrl('photo-1581092334651-ddf26d9a09d0');
        if (name.toLowerCase().includes('storage')) return getResponsiveUnsplashUrl('photo-1581092160562-40aa08e78837');
        if (name.toLowerCase().includes('environmental')) return getResponsiveUnsplashUrl('photo-1581090464777-f3220bbe1b8b');
        return getResponsiveUnsplashUrl('photo-1581090700227-1e37b190418e');
      }
      
      // Local images for mechanical service
      if (name.toLowerCase().includes('hvac')) return '/images/services/hvacsystem.webp';
      if (name.toLowerCase().includes('energy')) return '/images/services/electrical.webp';
      if (name.toLowerCase().includes('elevator')) return '/images/services/mechanical.webp';
      if (name.toLowerCase().includes('fire')) return '/images/services/mechanical.webp';
      if (name.toLowerCase().includes('medical')) return '/images/services/mechanical.webp';
      return '/images/services/mechanical.webp';
    };
    return getCategoryImage(category.name, currentService.id);
  });

  return (
    <div className="pt-16 overflow-hidden">
      <ImagePreloader images={currentServiceImages} priority={false} />
      {/* Modern Hero Section with Image Background */}
      <motion.section 
        className="relative min-h-[50vh] flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Background Image with Parallax Effect */}
        <motion.div 
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <OptimizedImage 
            src={servicesBgImage} 
            alt="Services Background"
            className="w-full h-full object-cover scale-105"
            loading="eager"
            sizes="100vw"
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/65 to-primary-900/70"></div>
          {/* Pattern overlay (reduced opacity) */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iNCIvPjwvZz48L2c+PC9zdmc+')] opacity-15"></div>
        </motion.div>

        {/* Simplified decorative elements for mobile performance (reduced opacity) */}
        <div className="absolute inset-0 overflow-hidden opacity-40 md:opacity-70">
          <div className="absolute top-16 left-8 w-12 h-12 border border-white/20 rounded-full"></div>
          <div className="absolute top-20 right-16 w-8 h-8 border border-primary-300/30 rotate-45"></div>
          <div className="absolute bottom-16 left-1/5 w-6 h-6 bg-white/10 rounded-full"></div>
          <div className="absolute top-1/2 right-1/5 w-4 h-4 border border-white/25 rounded-full"></div>
          <div className="absolute bottom-20 right-1/4 w-6 h-6 bg-primary-400/30 rounded-full"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center max-w-4xl mx-auto py-16"
          >
            <motion.div
              variants={itemVariants}
              className="mb-6"
            >
              <span className="inline-block px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-medium border border-white/20">
                {currentLang === 'ar' ? 'خدمات متكاملة عالية الجودة' : 'Comprehensive High-Quality Services'}
              </span>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-white to-primary-200 bg-clip-text text-transparent">
                {currentLang === 'ar' ? 'خدماتنا المتكاملة' : 'Our Comprehensive Services'}
              </span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg lg:text-xl text-gray-200 mb-10 leading-relaxed max-w-3xl mx-auto"
            >
              {currentLang === 'ar' 
                ? 'نقدم حلولاً هندسية شاملة ومبتكرة تغطي جميع جوانب البناء والتطوير، من التصميم إلى التنفيذ بأعلى معايير الجودة العالمية'
                : 'We provide comprehensive and innovative engineering solutions covering all aspects of construction and development, from design to execution with the highest international quality standards'
              }
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="flex justify-center"
            >

            </motion.div>

          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-5 h-8 border-2 border-white/40 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white rounded-full mt-2"></div>
          </div>
        </motion.div>
      </motion.section>

      {/* Interactive Services Showcase */}
      <motion.section 
        className="py-24 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              {currentLang === 'ar' ? 'اكتشف خدماتنا' : 'Discover Our Services'}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {currentLang === 'ar' 
                ? 'استكشف مجموعة واسعة من الخدمات الهندسية المتخصصة التي نقدمها'
                : 'Explore our comprehensive range of specialized engineering services'
              }
            </p>
          </motion.div>

          {/* Modern Service Navigation Buttons */}
          <div className="relative mb-16">
            {/* Mobile scroll indicator */}
            <div className="md:hidden absolute top-0 right-0 z-10 bg-gradient-to-l from-gray-50 dark:from-gray-800 to-transparent w-8 h-full pointer-events-none"></div>
            <div className="md:hidden absolute top-0 left-0 z-10 bg-gradient-to-r from-gray-50 dark:from-gray-800 to-transparent w-8 h-full pointer-events-none"></div>
            
            <div className="flex md:flex-wrap flex-nowrap overflow-x-auto justify-start md:justify-center gap-4 md:gap-6 px-2 pr-4 -mx-2 scroll-smooth snap-x snap-mandatory scrollbar-hide"
                 style={{
                   scrollbarWidth: 'none',
                   msOverflowStyle: 'none',
                   WebkitOverflowScrolling: 'touch'
                 }}>
            {services.map((service, index) => {
              const IconComponent = service.icon;
              // Get background image based on service type using public folder path
              const getBackgroundImage = (serviceId: string) => {
                switch (serviceId) {
                  case 'construction':
                    return '/images/services/mechanical.webp';
                  case 'mechanical':
                    return '/images/services/mechanical.webp';
                  case 'electrical':
                    return '/images/services/electrical.webp';
                  case 'water':
                    return '/images/services/plumbing.webp';
                  default:
                    return '/images/services/mechanical.webp';
                }
              };
              
              const backgroundImage = getBackgroundImage(service.id);
              
              return (
                <motion.button
                  key={index}
                  onClick={() => setActiveService(index)}
                  className={`group shrink-0 snap-start relative overflow-hidden rounded-2xl md:rounded-3xl font-semibold text-sm md:text-base transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-800 min-w-[160px] md:min-w-[220px] h-24 md:h-32 ${
                    activeService === index
                      ? 'shadow-2xl shadow-primary-500/30 ring-4 ring-primary-400/50 scale-105'
                      : 'shadow-lg hover:shadow-2xl hover:shadow-primary-500/20 hover:scale-105'
                  }`}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.99 }}
                  aria-label={`${currentLang === 'ar' ? service.titleAr : service.title} - ${currentLang === 'ar' ? 'خدمة' : 'Service'}`}
                  aria-pressed={activeService === index}
                  role="tab"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setActiveService(index);
                    }
                  }}
                  style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  }}
                >
                  {/* Modern gradient overlay */}
                  <div className={`absolute inset-0 transition-all duration-500 ${
                    activeService === index
                      ? 'bg-gradient-to-br from-primary-600/85 via-primary-700/80 to-primary-800/85'
                      : 'bg-gradient-to-br from-gray-900/75 via-gray-800/70 to-gray-900/80 group-hover:from-primary-600/75 group-hover:via-primary-700/70 group-hover:to-primary-800/75'
                  }`} />
                  
                  {/* Modern pattern overlay (reduced opacity) */}
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-15"></div>
                  
                  {/* Animated accent line */}
                  <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary-300 to-primary-500 transition-all duration-500 ${
                    activeService === index ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                  
                  {/* Content container */}
                  <div className="relative z-10 flex flex-col items-center justify-center h-full p-4 text-white">
                    {/* Modern icon container */}
                    <div className={`mb-2 md:mb-3 p-2 md:p-3 rounded-xl backdrop-blur-sm transition-all duration-300 ${
                      activeService === index
                        ? 'bg-white/20 border border-white/30'
                        : 'bg-white/10 border border-white/20 group-hover:bg-white/20 group-hover:border-white/30'
                    }`}>
                      <IconComponent className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    
                    {/* Service title */}
                    <span className="text-center leading-tight font-bold">
                      {currentLang === 'ar' ? service.titleAr : service.title}
                    </span>
                    
                    {/* Modern active indicator */}
                    {activeService === index && (
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="absolute top-3 right-3 w-3 h-3 bg-primary-300 rounded-full shadow-lg"
                      />
                    )}
                  </div>
                  
                  {/* Modern border glow effect */}
                  <div className={`absolute inset-0 rounded-2xl md:rounded-3xl border-2 transition-all duration-500 pointer-events-none ${
                    activeService === index
                      ? 'border-primary-300/60'
                      : 'border-transparent group-hover:border-primary-400/40'
                  }`} />
                </motion.button>
              );
            })}
            </div>
            
            {/* Mobile scroll hint */}
            <div className="md:hidden flex justify-center mt-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full text-sm text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700">
                <span>{currentLang === 'ar' ? 'اسحب لرؤية المزيد' : 'Swipe to see more'}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Active Service Details */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden"
            >
              <div className="p-8 lg:p-12">
                {/* Modern Categories Grid */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8"
                >
                  {currentService.categories.map((category, index) => {
                    const CategoryIcon = category.icon;
                    const getCategoryImage = (name: string, serviceType: string) => {
                      // Mobile-optimized responsive images with proper sizes for different breakpoints
                      const getResponsiveUnsplashUrl = (imageId: string, baseWidth: number = 600) => {
                        // Use smaller images for mobile performance
                        const mobileWidth = Math.min(baseWidth, 400);
                        return `https://images.unsplash.com/${imageId}?ixlib=rb-4.0.3&auto=format&fit=crop&w=${mobileWidth}&q=75`;
                      };

                      // Service-specific images with mobile optimization
                      if (serviceType === 'construction') {
                        if (name.toLowerCase().includes('residential')) return getResponsiveUnsplashUrl('photo-1560518883-ce09059eeffa', 400);
                        if (name.toLowerCase().includes('commercial')) return getResponsiveUnsplashUrl('photo-1486406146926-c627a92ad1ab', 400);
                        if (name.toLowerCase().includes('industrial')) return getResponsiveUnsplashUrl('photo-1565008447742-97f6f38c985c', 400);
                        if (name.toLowerCase().includes('educational')) return getResponsiveUnsplashUrl('photo-1562774053-701939374585', 400);
                        if (name.toLowerCase().includes('healthcare')) return getResponsiveUnsplashUrl('photo-1586773860418-d37222d8fce3', 400);
                        if (name.toLowerCase().includes('infrastructure')) return getResponsiveUnsplashUrl('photo-1541888946425-d81bb19240f5', 400);
                        return getResponsiveUnsplashUrl('photo-1504307651254-35680f356dfd', 400);
                      }
                      
                      if (serviceType === 'electrical') {
                        if (name.toLowerCase().includes('power')) return getResponsiveUnsplashUrl('photo-1473341304170-971dccb5ac1e', 400);
                        if (name.toLowerCase().includes('lighting')) return getResponsiveUnsplashUrl('photo-1558618666-fcd25c85cd64', 400);
                        if (name.toLowerCase().includes('smart') || name.toLowerCase().includes('control')) return getResponsiveUnsplashUrl('photo-1558002038-1055907df827', 400);
                        if (name.toLowerCase().includes('security')) return getResponsiveUnsplashUrl('photo-1557804506-669a67965ba0', 400);
                        if (name.toLowerCase().includes('communication')) return getResponsiveUnsplashUrl('photo-1544197150-b99a580bb7a8', 400);
                        if (name.toLowerCase().includes('renewable') || name.toLowerCase().includes('solar')) return getResponsiveUnsplashUrl('photo-1509391366360-2e959784a276', 400);
                        return getResponsiveUnsplashUrl('photo-1621905252507-b35492cc74b4', 400);
                      }
                      
                      if (serviceType === 'water') {
                        if (name.toLowerCase().includes('treatment')) return getResponsiveUnsplashUrl('photo-1581090700227-1e37b190418e', 400);
                        if (name.toLowerCase().includes('pumping')) return getResponsiveUnsplashUrl('photo-1581092160562-40aa08e78837', 400);
                        if (name.toLowerCase().includes('sewage')) return getResponsiveUnsplashUrl('photo-1581092160607-ee22621dd758', 400);
                        if (name.toLowerCase().includes('distribution')) return getResponsiveUnsplashUrl('photo-1581092334651-ddf26d9a09d0', 400);
                        if (name.toLowerCase().includes('storage')) return getResponsiveUnsplashUrl('photo-1581092160562-40aa08e78837', 400);
                        if (name.toLowerCase().includes('environmental')) return getResponsiveUnsplashUrl('photo-1581090464777-f3220bbe1b8b', 400);
                        return getResponsiveUnsplashUrl('photo-1581090700227-1e37b190418e', 400);
                      }
                      
                      // Mechanical service images (keeping existing optimized local images)
                      if (name.toLowerCase().includes('hvac')) return '/images/services/hvacsystem.webp';
                      if (name.toLowerCase().includes('energy')) return '/images/services/electrical.webp';
                      if (name.toLowerCase().includes('elevator')) return '/images/services/mechanical.webp';
                      if (name.toLowerCase().includes('fire')) return '/images/services/mechanical.webp';
                      if (name.toLowerCase().includes('medical')) return '/images/services/mechanical.webp';
                      return '/images/services/mechanical.webp';
                    };
                    const bannerImage = getCategoryImage(category.name, currentService.id);
                    const subCount = Array.isArray((category as any).subcategories) ? (category as any).subcategories.length : 0;
                    
                    return (
                      <motion.div
                        key={index}
                        className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/20 dark:border-gray-700/20 shadow-xl hover:shadow-2xl transition-all duration-500 will-change-transform"
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: Math.min(index * 0.05, 0.3), duration: 0.4 }}
                        whileHover={{ y: -4, scale: 1.01 }}
                      >
                        {/* Glassmorphism Background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-primary-600/10 opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        {/* Modern Background Image with Enhanced Overlay */}
                        <div className="relative h-56 overflow-hidden">
                          <OptimizedImage
                            src={bannerImage}
                            alt={currentLang === 'ar' ? category.nameAr : category.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 will-change-transform"
                            loading="lazy"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          />
                          {/* Modern Gradient Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/60 to-transparent"></div>
                          <div className="absolute inset-0 bg-gradient-to-br from-primary-600/30 via-transparent to-primary-800/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                          

                          


                          {/* Floating Icon with Glassmorphism */}
                          <div className="absolute top-6 right-6">
                            <div className="w-16 h-16 bg-white/20 backdrop-blur-xl rounded-2xl flex items-center justify-center border border-white/30 shadow-2xl group-hover:bg-primary-500/30 group-hover:border-primary-300/50 group-hover:scale-110 transition-all duration-500">
                              <CategoryIcon className="w-8 h-8 text-white group-hover:text-primary-100 transition-colors duration-300" />
                            </div>
                          </div>

                          {/* Modern Title Overlay */}
                          <div className="absolute bottom-6 left-6 right-6">
                            <h4 className="text-2xl font-bold text-white mb-2 leading-tight drop-shadow-lg">
                              {currentLang === 'ar' ? category.nameAr : category.name}
                            </h4>
                            <p className="text-sm text-gray-200 leading-relaxed line-clamp-2 drop-shadow-md">
                              {currentLang === 'ar' ? category.descriptionAr : category.description}
                            </p>
                          </div>

                          {/* Modern Decorative Elements */}
                          <div className="absolute top-1/3 left-8 w-24 h-24 bg-gradient-to-br from-primary-400/20 to-primary-600/30 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                          <div className="absolute bottom-1/3 right-8 w-16 h-16 bg-gradient-to-br from-white/10 to-primary-300/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        </div>

                        {/* Modern Content Section with Glassmorphism */}
                        <div className="relative p-6 space-y-4 bg-gradient-to-b from-white/70 to-white/85 dark:from-gray-800/70 dark:to-gray-800/85">
                          {/* Modern Specializations Section */}
                          {Array.isArray((category as any).subcategories) && (category as any).subcategories.length > 0 && (
                            <div className="space-y-4">
                              <div className="flex items-center gap-3">
                                <div className="w-1 h-6 bg-gradient-to-b from-primary-500 to-primary-600 rounded-full"></div>
                                <p className="text-sm font-bold text-primary-700 dark:text-primary-400 uppercase tracking-wider">
                                  {currentLang === 'ar' ? 'التخصصات المتاحة' : 'Specializations'}
                                </p>
                              </div>
                              
                              <div className="flex flex-wrap gap-2">
                                {(category as any).subcategories.map((sub: any, subIndex: number) => (
                                  <motion.span
                                    key={subIndex}
                                    className="inline-flex items-center px-4 py-2 rounded-2xl text-xs font-semibold bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/40 dark:to-primary-800/40 text-primary-700 dark:text-primary-300 border border-primary-200/60 dark:border-primary-700/60 hover:from-primary-100 hover:to-primary-200 dark:hover:from-primary-800/60 dark:hover:to-primary-700/60 transition-all duration-300 shadow-sm hover:shadow-md backdrop-blur-sm"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                  >
                                    {currentLang === 'ar' ? sub.nameAr : sub.name}
                                  </motion.span>
                                ))}
                              </div>
                            </div>
                          )}

                        </div>

                        {/* Modern Border Glow Effect */}
                        <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-primary-300/50 dark:group-hover:border-primary-600/50 transition-all duration-500 pointer-events-none"></div>
                        
                        {/* Modern Shine Effect */}
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.section>

    </div>
  );
};

export default Services;

