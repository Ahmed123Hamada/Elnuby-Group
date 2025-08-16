import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, 
  Wrench, 
  Zap, 
  Droplets,
  ArrowRight,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Star,
  Users,
  Clock,
  Award,
  Shield,
  Target,
  Lightbulb,
  TrendingUp,
  Globe,
  Settings,
  FileText,
  Calendar,
  DollarSign,
  ThumbsUp,
  ChevronRight,


  Briefcase,
  Palette,
  Cog,
  Truck,
  Home,
  Factory,
  School,
  Heart,
  TreePine,
  Waves
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import servicesBgImage from '../assast/Images/project/projectslider2.webp';

const Services: React.FC = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [activeService, setActiveService] = useState(0);
  const [activeTab, setActiveTab] = useState('overview');

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
          descriptionAr: 'فيلات فاخرة وشقق ومجمعات سكنية'
        },
        {
          name: 'Commercial Buildings',
          nameAr: 'المباني التجارية',
          icon: Briefcase,
          description: 'Office buildings, shopping centers, and business complexes',
          descriptionAr: 'مباني مكاتب ومراكز تسوق ومجمعات تجارية'
        },
        {
          name: 'Industrial Facilities',
          nameAr: 'المنشآت الصناعية',
          icon: Factory,
          description: 'Manufacturing plants, warehouses, and industrial complexes',
          descriptionAr: 'مصانع ومستودعات ومجمعات صناعية'
        },
        {
          name: 'Educational Buildings',
          nameAr: 'المباني التعليمية',
          icon: School,
          description: 'Schools, universities, and educational facilities',
          descriptionAr: 'مدارس وجامعات ومرافق تعليمية'
        },
        {
          name: 'Healthcare Facilities',
          nameAr: 'المرافق الصحية',
          icon: Heart,
          description: 'Hospitals, clinics, and medical centers',
          descriptionAr: 'مستشفيات وعيادات ومراكز طبية'
        },
        {
          name: 'Infrastructure',
          nameAr: 'البنية التحتية',
          icon: Globe,
          description: 'Roads, bridges, and public infrastructure',
          descriptionAr: 'طرق وجسور وبنية تحتية عامة'
        }
      ],
      features: [
        { name: 'Advanced BIM Technology', nameAr: 'تقنية BIM المتقدمة' },
        { name: 'Sustainable Building Practices', nameAr: 'ممارسات البناء المستدامة' },
        { name: 'Quality Assurance Systems', nameAr: 'أنظمة ضمان الجودة' },
        { name: 'Project Management Excellence', nameAr: 'تميز إدارة المشاريع' },
        { name: 'Safety & Compliance', nameAr: 'السلامة والامتثال' },
        { name: 'Innovative Design Solutions', nameAr: 'حلول تصميم مبتكرة' }
      ],
      process: [
        { step: 1, name: 'Consultation & Planning', nameAr: 'الاستشارة والتخطيط', duration: '2-4 weeks' },
        { step: 2, name: 'Design & Engineering', nameAr: 'التصميم والهندسة', duration: '4-8 weeks' },
        { step: 3, name: 'Permits & Approvals', nameAr: 'التصاريح والموافقات', duration: '2-6 weeks' },
        { step: 4, name: 'Construction Execution', nameAr: 'تنفيذ البناء', duration: '6-24 months' },
        { step: 5, name: 'Quality Testing & Delivery', nameAr: 'اختبار الجودة والتسليم', duration: '2-4 weeks' }
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
          name: 'HVAC Systems',
          nameAr: 'أنظمة التكييف والتهوية',
          icon: Settings,
          description: 'Central air conditioning, ventilation, and climate control',
          descriptionAr: 'تكييف مركزي وتهوية وتحكم في المناخ'
        },
        {
          name: 'Plumbing Systems',
          nameAr: 'أنظمة السباكة',
          icon: Waves,
          description: 'Water supply, drainage, and sanitary systems',
          descriptionAr: 'إمداد المياه والصرف والأنظمة الصحية'
        },
        {
          name: 'Fire Protection',
          nameAr: 'مكافحة الحريق',
          icon: Shield,
          description: 'Fire suppression, detection, and safety systems',
          descriptionAr: 'أنظمة إطفاء الحريق والكشف والسلامة'
        },
        {
          name: 'Elevators & Escalators',
          nameAr: 'المصاعد والسلالم المتحركة',
          icon: TrendingUp,
          description: 'Vertical transportation solutions',
          descriptionAr: 'حلول النقل العمودي'
        },
        {
          name: 'Industrial Equipment',
          nameAr: 'المعدات الصناعية',
          icon: Cog,
          description: 'Manufacturing and processing equipment',
          descriptionAr: 'معدات التصنيع والمعالجة'
        },
        {
          name: 'Energy Systems',
          nameAr: 'أنظمة الطاقة',
          icon: Zap,
          description: 'Energy-efficient mechanical solutions',
          descriptionAr: 'حلول ميكانيكية موفرة للطاقة'
        }
      ],
      features: [
        { name: 'Energy-Efficient Solutions', nameAr: 'حلول موفرة للطاقة' },
        { name: 'Smart Building Integration', nameAr: 'تكامل المباني الذكية' },
        { name: 'Predictive Maintenance', nameAr: 'الصيانة التنبؤية' },
        { name: 'Environmental Control', nameAr: 'التحكم البيئي' },
        { name: 'Code Compliance', nameAr: 'الامتثال للمعايير' },
        { name: '24/7 Support Services', nameAr: 'خدمات الدعم 24/7' }
      ],
      process: [
        { step: 1, name: 'System Assessment', nameAr: 'تقييم النظام', duration: '1-2 weeks' },
        { step: 2, name: 'Design & Calculations', nameAr: 'التصميم والحسابات', duration: '2-4 weeks' },
        { step: 3, name: 'Equipment Procurement', nameAr: 'شراء المعدات', duration: '4-8 weeks' },
        { step: 4, name: 'Installation & Testing', nameAr: 'التركيب والاختبار', duration: '3-8 weeks' },
        { step: 5, name: 'Commissioning & Training', nameAr: 'التشغيل والتدريب', duration: '1-2 weeks' }
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
          descriptionAr: 'لوحات كهربائية ومحولات وأنظمة طاقة'
        },
        {
          name: 'Lighting Design',
          nameAr: 'تصميم الإضاءة',
          icon: Lightbulb,
          description: 'Interior and exterior lighting solutions',
          descriptionAr: 'حلول الإضاءة الداخلية والخارجية'
        },
        {
          name: 'Smart Controls',
          nameAr: 'التحكم الذكي',
          icon: Settings,
          description: 'Building automation and smart systems',
          descriptionAr: 'أتمتة المباني والأنظمة الذكية'
        },
        {
          name: 'Security Systems',
          nameAr: 'أنظمة الأمان',
          icon: Shield,
          description: 'CCTV, access control, and alarm systems',
          descriptionAr: 'كاميرات مراقبة وتحكم بالدخول وأنظمة إنذار'
        },
        {
          name: 'Communication Networks',
          nameAr: 'شبكات الاتصالات',
          icon: Globe,
          description: 'Data networks, telecommunications, and IT infrastructure',
          descriptionAr: 'شبكات البيانات والاتصالات والبنية التحتية لتقنية المعلومات'
        },
        {
          name: 'Renewable Energy',
          nameAr: 'الطاقة المتجددة',
          icon: TreePine,
          description: 'Solar panels and sustainable energy solutions',
          descriptionAr: 'الألواح الشمسية وحلول الطاقة المستدامة'
        }
      ],
      features: [
        { name: 'Smart Home Integration', nameAr: 'تكامل المنزل الذكي' },
        { name: 'Energy Management Systems', nameAr: 'أنظمة إدارة الطاقة' },
        { name: 'Safety & Protection', nameAr: 'السلامة والحماية' },
        { name: 'Future-Ready Infrastructure', nameAr: 'بنية تحتية جاهزة للمستقبل' },
        { name: 'Remote Monitoring', nameAr: 'المراقبة عن بُعد' },
        { name: 'Emergency Backup Systems', nameAr: 'أنظمة النسخ الاحتياطي للطوارئ' }
      ],
      process: [
        { step: 1, name: 'Electrical Survey', nameAr: 'المسح الكهربائي', duration: '1 week' },
        { step: 2, name: 'System Design', nameAr: 'تصميم النظام', duration: '2-3 weeks' },
        { step: 3, name: 'Material Procurement', nameAr: 'شراء المواد', duration: '2-4 weeks' },
        { step: 4, name: 'Installation & Wiring', nameAr: 'التركيب والأسلاك', duration: '2-6 weeks' },
        { step: 5, name: 'Testing & Certification', nameAr: 'الاختبار والشهادات', duration: '1 week' }
      ]
    },
    {
      id: 'water',
      title: 'Water & Sanitation',
      titleAr: 'المياه والصرف الصحي',
      subtitle: 'Sustainable Water Solutions',
      subtitleAr: 'حلول مياه مستدامة',
      description: 'Comprehensive water supply, treatment, and sanitation infrastructure solutions designed for efficiency, sustainability, and public health',
      descriptionAr: 'حلول شاملة لإمداد المياه ومعالجتها وبنية الصرف الصحي مصممة للكفاءة والاستدامة والصحة العامة',
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
          descriptionAr: 'أنظمة تنقية ومعالجة المياه'
        },
        {
          name: 'Pumping Stations',
          nameAr: 'محطات الضخ',
          icon: Settings,
          description: 'Water pumping and distribution systems',
          descriptionAr: 'أنظمة ضخ وتوزيع المياه'
        },
        {
          name: 'Sewage Systems',
          nameAr: 'أنظمة الصرف الصحي',
          icon: Truck,
          description: 'Wastewater collection and treatment',
          descriptionAr: 'جمع ومعالجة مياه الصرف الصحي'
        },
        {
          name: 'Distribution Networks',
          nameAr: 'شبكات التوزيع',
          icon: Globe,
          description: 'Water supply pipeline systems',
          descriptionAr: 'أنظمة أنابيب إمداد المياه'
        },
        {
          name: 'Storage Solutions',
          nameAr: 'حلول التخزين',
          icon: Briefcase,
          description: 'Water tanks and reservoir systems',
          descriptionAr: 'خزانات المياه وأنظمة الخزانات'
        },
        {
          name: 'Environmental Solutions',
          nameAr: 'الحلول البيئية',
          icon: TreePine,
          description: 'Eco-friendly water management',
          descriptionAr: 'إدارة المياه الصديقة للبيئة'
        }
      ],
      features: [
        { name: 'Advanced Filtration Systems', nameAr: 'أنظمة ترشيح متقدمة' },
        { name: 'Smart Water Management', nameAr: 'إدارة المياه الذكية' },
        { name: 'Environmental Compliance', nameAr: 'الامتثال البيئي' },
        { name: 'Cost-Effective Solutions', nameAr: 'حلول فعالة من حيث التكلفة' },
        { name: 'Water Quality Monitoring', nameAr: 'مراقبة جودة المياه' },
        { name: 'Preventive Maintenance', nameAr: 'الصيانة الوقائية' }
      ],
      process: [
        { step: 1, name: 'Site Analysis', nameAr: 'تحليل الموقع', duration: '1-2 weeks' },
        { step: 2, name: 'System Design', nameAr: 'تصميم النظام', duration: '3-4 weeks' },
        { step: 3, name: 'Infrastructure Installation', nameAr: 'تركيب البنية التحتية', duration: '8-16 weeks' },
        { step: 4, name: 'System Integration', nameAr: 'تكامل النظام', duration: '2-4 weeks' },
        { step: 5, name: 'Testing & Optimization', nameAr: 'الاختبار والتحسين', duration: '2-3 weeks' }
      ]
    }
  ];

  // Additional data for enhanced sections

  const processSteps = [
    {
      step: 1,
      title: 'Initial Consultation',
      titleAr: 'الاستشارة الأولية',
      description: 'Understanding your requirements and project scope',
      descriptionAr: 'فهم متطلباتكم ونطاق المشروع',
      icon: Users,
      duration: '1-2 days'
    },
    {
      step: 2,
      title: 'Site Assessment',
      titleAr: 'تقييم الموقع',
      description: 'Detailed site analysis and feasibility study',
      descriptionAr: 'تحليل مفصل للموقع ودراسة الجدوى',
      icon: MapPin,
      duration: '3-5 days'
    },
    {
      step: 3,
      title: 'Design & Planning',
      titleAr: 'التصميم والتخطيط',
      description: 'Creating detailed designs and project timeline',
      descriptionAr: 'إنشاء تصاميم مفصلة وجدول زمني للمشروع',
      icon: FileText,
      duration: '2-4 weeks'
    },
    {
      step: 4,
      title: 'Project Execution',
      titleAr: 'تنفيذ المشروع',
      description: 'Professional implementation with quality control',
      descriptionAr: 'تنفيذ مهني مع مراقبة الجودة',
      icon: Settings,
      duration: 'As per timeline'
    },
    {
      step: 5,
      title: 'Quality Assurance',
      titleAr: 'ضمان الجودة',
      description: 'Testing, certification and project handover',
      descriptionAr: 'الاختبار والشهادات وتسليم المشروع',
      icon: Award,
      duration: '1-2 weeks'
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

  return (
    <div className="pt-16 overflow-hidden">
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
          <img 
            src={servicesBgImage} 
            alt="Services Background"
            className="w-full h-full object-cover scale-105"
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/65 to-primary-900/70"></div>
          {/* Pattern overlay */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iNCIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
        </motion.div>

        {/* Animated Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-16 left-8 w-16 h-16 border-2 border-white/15 rounded-full"
            animate={{ 
              y: [0, -15, 0],
              rotate: [0, 180, 360]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute top-20 right-16 w-12 h-12 border-2 border-primary-300/20 rotate-45"
            animate={{ 
              y: [0, 20, 0],
              rotate: [45, 225, 405]
            }}
            transition={{ 
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-16 left-1/5 w-10 h-10 bg-white/8 rounded-full backdrop-blur-sm"
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Additional decorative elements */}
          <motion.div
            className="absolute top-1/2 right-1/5 w-6 h-6 border border-white/20 rounded-full"
            animate={{ 
              scale: [0.8, 1.1, 0.8],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
          <motion.div
            className="absolute bottom-20 right-1/4 w-8 h-8 bg-primary-400/20 rounded-full"
            animate={{ 
              y: [0, -10, 0],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
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

          {/* Service Navigation Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.button
                  key={index}
                  onClick={() => setActiveService(index)}
                  className={`flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeService === index
                      ? `bg-gradient-to-r ${service.color} text-white shadow-lg`
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IconComponent className="w-5 h-5 mr-3" />
                  {currentLang === 'ar' ? service.titleAr : service.title}
                </motion.button>
              );
            })}
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
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 lg:p-12">
                {/* Service Info */}
                <div>
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${currentService.color} rounded-2xl flex items-center justify-center mr-4`}>
                      <currentService.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                        {currentLang === 'ar' ? currentService.titleAr : currentService.title}
                      </h3>
                      <p className="text-lg text-gray-600 dark:text-gray-300">
                        {currentLang === 'ar' ? currentService.subtitleAr : currentService.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-8">
                    {currentLang === 'ar' ? currentService.descriptionAr : currentService.description}
                  </p>

                  {/* Service Stats */}
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                      <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                        {currentService.projects}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">
                        {currentLang === 'ar' ? 'مشروع' : 'Projects'}
                      </div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                      <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                        {currentService.satisfaction}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">
                        {currentLang === 'ar' ? 'رضا العملاء' : 'Satisfaction'}
                      </div>
                    </div>
                  </div>

                  {/* Tab Navigation for Service Details */}
                  <div className="flex space-x-1 bg-gray-100 dark:bg-gray-700 p-1 rounded-xl mb-6">
                    {['overview', 'categories', 'process'].map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all duration-200 ${
                          activeTab === tab
                            ? 'bg-white dark:bg-gray-600 text-primary-600 dark:text-primary-400 shadow-sm'
                            : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                        }`}
                      >
                        {tab === 'overview' && (currentLang === 'ar' ? 'نظرة عامة' : 'Overview')}
                        {tab === 'categories' && (currentLang === 'ar' ? 'التصنيفات' : 'Categories')}
                        {tab === 'process' && (currentLang === 'ar' ? 'العملية' : 'Process')}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Service Content */}
                <div>
                  <AnimatePresence mode="wait">
                    {activeTab === 'overview' && (
                      <motion.div
                        key="overview"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                      >
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                          {currentLang === 'ar' ? 'الميزات الرئيسية' : 'Key Features'}
                        </h4>
                        <div className="space-y-4">
                          {currentService.features.map((feature, index) => (
                            <motion.div
                              key={index}
                              className="flex items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-xl"
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                            >
                              <CheckCircle className="w-6 h-6 text-primary-500 mr-4 flex-shrink-0" />
                              <span className="text-gray-700 dark:text-gray-300 font-medium">
                                {currentLang === 'ar' ? feature.nameAr : feature.name}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {activeTab === 'categories' && (
                      <motion.div
                        key="categories"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                      >
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                          {currentLang === 'ar' ? 'تصنيفات الخدمة' : 'Service Categories'}
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {currentService.categories.map((category, index) => {
                            const CategoryIcon = category.icon;
                            return (
                              <motion.div
                                key={index}
                                className="p-4 bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                              >
                                <CategoryIcon className="w-8 h-8 text-primary-500 mb-3" />
                                <h5 className="font-semibold text-gray-900 dark:text-white mb-2">
                                  {currentLang === 'ar' ? category.nameAr : category.name}
                                </h5>
                                <p className="text-sm text-gray-600 dark:text-gray-300">
                                  {currentLang === 'ar' ? category.descriptionAr : category.description}
                                </p>
                              </motion.div>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}

                    {activeTab === 'process' && (
                      <motion.div
                        key="process"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                      >
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                          {currentLang === 'ar' ? 'عملية العمل' : 'Work Process'}
                        </h4>
                        <div className="space-y-4">
                          {currentService.process.map((step, index) => (
                            <motion.div
                              key={index}
                              className="flex items-start p-4 bg-gray-50 dark:bg-gray-700 rounded-xl"
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                            >
                              <div className="w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0 font-bold text-sm">
                                {step.step}
                              </div>
                              <div>
                                <h5 className="font-semibold text-gray-900 dark:text-white mb-1">
                                  {currentLang === 'ar' ? step.nameAr : step.name}
                                </h5>
                                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                                  {step.duration}
                                </p>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.section>

      {/* Work Process Section */}
      <motion.section 
        className="py-24 bg-white dark:bg-gray-900"
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
              {currentLang === 'ar' ? 'كيف نعمل' : 'How We Work'}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {currentLang === 'ar' 
                ? 'عملية عمل مدروسة ومنظمة لضمان تنفيذ مشاريعكم بأعلى مستوى من الجودة والكفاءة'
                : 'A well-studied and organized work process to ensure your projects are executed with the highest level of quality and efficiency'
              }
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {processSteps.map((step, index) => {
              const StepIcon = step.icon;
              return (
                <motion.div
                  key={index}
                  className="relative group"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-center">
                    {/* Step Number */}
                    <div className="relative mb-6">
                      <div className="w-20 h-20 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <StepIcon className="w-10 h-10 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary-200 dark:bg-primary-800 rounded-full flex items-center justify-center">
                        <span className="text-primary-800 dark:text-primary-200 font-bold text-sm">
                          {step.step}
                        </span>
                      </div>
                    </div>

                    {/* Step Content */}
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                      {currentLang === 'ar' ? step.titleAr : step.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                      {currentLang === 'ar' ? step.descriptionAr : step.description}
                    </p>
                    <span className="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium">
                      {step.duration}
                    </span>
                  </div>

                  {/* Connector Line (except last item) */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-primary-300 to-primary-500 z-0"></div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Services;
