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
  const [activeCategory, setActiveCategory] = useState(0);
  const [sliderIndex, setSliderIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  // Handle navigation from ServicesSection
  useEffect(() => {
    if (location.state?.activeService !== undefined) {
      setActiveService(location.state.activeService);
    }
  }, [location.state]);

  // Reset active category when service changes
  useEffect(() => {
    setActiveCategory(0);
  }, [activeService]);

  // Auto-advance split slider
  useEffect(() => {
    if (!autoPlay) return;
    const id = setInterval(() => {
      setSliderIndex((prev) => prev + 1);
    }, 5000);
    return () => clearInterval(id);
  }, [autoPlay, activeCategory, activeService]);

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
          name: 'Design & Build',
          nameAr: 'التصميم والتنفيذ',
          icon: Building2,
          description: 'Single-point delivery covering concept design, approvals, multidisciplinary engineering, procurement and turnkey construction with cost and schedule certainty.',
          descriptionAr: 'تسليم متكامل بنقطة اتصال واحدة يشمل التصميم المبدئي والموافقات والهندسات متعددة التخصصات والتوريد والتنفيذ المتكامل مع ثبات الكلفة والجدول.',
          image: 'https://media.istockphoto.com/id/1063723682/photo/hand-sketching-a-designer-villa-with-pool.jpg?s=612x612&w=0&k=20&c=SlIacvwSEEsZ-2imWLDk6dC0glhaWEg-pOGFSK4YQuI=',
          subcategories: [
            { name: 'Concept & Schematic Design', nameAr: 'التصميم المبدئي والمفاهيمي' },
            { name: 'Permitting & Authorities Coordination', nameAr: 'التراخيص والتنسيق مع الجهات' },
            { name: 'Detailed Engineering & BIM', nameAr: 'التصميم التفصيلي وBIM' },
            { name: 'Procurement & Contracting', nameAr: 'التوريد والتعاقد' },
            { name: 'Turnkey Construction & Handover', nameAr: 'التنفيذ المتكامل والتسليم' }
          ]
        },
        {
          name: 'Civil Works',
          nameAr: 'الأعمال المدنية',
          icon: Wrench,
          description: 'Comprehensive civil packages including site grading, deep foundations, reinforced concrete, paving, and wet/dry utilities with QA/QC and safety controls.',
          descriptionAr: 'حزم مدنية متكاملة تشمل تسوية المواقع والأساسات العميقة والخرسانة المسلحة والرصف وشبكات المرافق مع نظم ضبط الجودة والسلامة.',
          image: 'https://civilideas374921463.wordpress.com/wp-content/uploads/2021/09/3faf92b0ec8e7803f92e24068d04734e.jpg?w=1200',
          subcategories: [
            { name: 'Earthworks & Excavation', nameAr: 'أعمال الحفر وتسوية التربة' },
            { name: 'Piling & Foundations', nameAr: 'الخوازيق والأساسات' },
            { name: 'RC Frames & Post‑Tension', nameAr: 'الهياكل الخرسانية والشد اللاحق' },
            { name: 'Roads & Hardscape', nameAr: 'الطرق والأعمال الصلبة' },
            { name: 'Utilities (Water, Sewer, Power)', nameAr: 'مرافق الموقع (مياه، صرف، كهرباء)' }
          ]
        },
        {
          name: 'MEP',
          nameAr: 'الأعمال الميكانيكية والكهربائية والسباكة',
          icon: Zap,
          description: 'Fully coordinated HVAC, electrical and plumbing systems, shop drawings, testing & commissioning and handover documentation.',
          descriptionAr: 'أنظمة HVAC وكهرباء وسباكة منسقة بالكامل مع المخططات التنفيذية والاختبارات والتشغيل والتوثيق النهائي.',
          image: 'https://innodez.com/wp-content/uploads/2025/01/futureofmepdesing.jpg',
          subcategories: [
            { name: 'HVAC Systems (Chilled/VRF)', nameAr: 'أنظمة تكييف (ماء مبرد/VRF)' },
            { name: 'Power & Lighting', nameAr: 'القوى والإضاءة' },
            { name: 'ELV & BMS', nameAr: 'أنظمة弱電 وإدارة المباني' },
            { name: 'Plumbing & Drainage', nameAr: 'السباكة والصرف' },
            { name: 'Fire Fighting & Alarm', nameAr: 'الإطفاء والإنذار' }
          ]
        },
        {
          name: 'Finishing',
          nameAr: 'التشطيبات',
          icon: Droplets,
          description: 'High‑end fit‑out delivering joinery, bespoke finishes, flooring, acoustics, ceilings and wayfinding with mockups and material submittals.',
          descriptionAr: 'أعمال تشطيب راقية تشمل النجارة والتشطيبات الخاصة والأرضيات والمعالجات الصوتية والأسقف واللافتات مع نماذج معتمدة ومراجعات مواد.',
          image: 'https://media.licdn.com/dms/image/v2/D4D12AQHZfKZxMg3TnQ/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1679589681463?e=2147483647&v=beta&t=QXrYR29su9CMFmtZAIpD6MN_-dg96e5jBabvv8Vv98U',
          subcategories: [
            { name: 'Joinery & Millwork', nameAr: 'النجارة والأعمال الخشبية' },
            { name: 'Flooring & Tiling', nameAr: 'الأرضيات والبلاطات' },
            { name: 'Ceilings & Partitions', nameAr: 'الأسقف والقواطع' },
            { name: 'Decorative Finishes', nameAr: 'تشطيبات ديكورية' },
            { name: 'Signage & Wayfinding', nameAr: 'اللافتات والإرشاد' }
          ]
        }
        ]
    },
    {
      id: 'mechanical',
      title: 'Civil Works',
      titleAr: 'الأعمال المدنية',
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
          name: 'Design & Build',
          nameAr: 'التصميم والتنفيذ',
          icon: Building2,
          description: 'Concept, permits, engineering, procurement and construction under one contract',
          descriptionAr: 'التصميم والتراخيص والهندسة والتوريد والتنفيذ ضمن عقد واحد',
          subcategories: []
        },
        {
          name: 'Civil Works',
          nameAr: 'الأعمال المدنية',
          icon: Wrench,
          description: 'Earthworks, foundations, concrete structures, roads and site utilities',
          descriptionAr: 'أعمال الحفر والأساسات والهياكل الخرسانية والطرق ومرافق الموقع',
          subcategories: [
            { name: 'Earthworks & Excavation', nameAr: 'أعمال الحفر وتسوية التربة' },
            { name: 'Piling & Foundations', nameAr: 'الخوازيق والأساسات' },
            { name: 'RC Frames & Post‑Tension', nameAr: 'الهياكل الخرسانية والشد اللاحق' },
            { name: 'Roads & Hardscape', nameAr: 'الطرق والأعمال الصلبة' },
            { name: 'Utilities (Water, Sewer, Power)', nameAr: 'مرافق الموقع (مياه، صرف، كهرباء)' }
          ]
        },
        {
          name: 'MEP',
          nameAr: 'الأعمال الميكانيكية والكهربائية والسباكة',
          icon: Zap,
          description: 'Integrated mechanical, electrical and plumbing systems with BIM coordination',
          descriptionAr: 'أنظمة ميكانيكية وكهربائية وسباكة متكاملة مع تنسيق نمذجة معلومات البناء',
          subcategories: [
            { name: 'HVAC Systems (Chilled/VRF)', nameAr: 'أنظمة تكييف (ماء مبرد/VRF)' },
            { name: 'Power & Lighting', nameAr: 'القوى والإضاءة' },
            { name: 'ELV & BMS', nameAr: 'أنظمة弱電 وإدارة المباني' },
            { name: 'Plumbing & Drainage', nameAr: 'السباكة والصرف' },
            { name: 'Fire Fighting & Alarm', nameAr: 'الإطفاء والإنذار' }
          ]
        },
        {
          name: 'Finishing',
          nameAr: 'التشطيبات',
          icon: Droplets,
          description: 'Interior fit‑out, joinery, flooring, ceilings, decorative paint and signage',
          descriptionAr: 'أعمال الفت آوت والنجارة والأرضيات والأسقف والدهانات الديكورية واللافتات',
          subcategories: [
            { name: 'Joinery & Millwork', nameAr: 'النجارة والأعمال الخشبية' },
            { name: 'Flooring & Tiling', nameAr: 'الأرضيات والبلاطات' },
            { name: 'Ceilings & Partitions', nameAr: 'الأسقف والقواطع' },
            { name: 'Decorative Finishes', nameAr: 'تشطيبات ديكورية' },
            { name: 'Signage & Wayfinding', nameAr: 'اللافتات والإرشاد' }
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
          name: 'Design & Build',
          nameAr: 'التصميم والتنفيذ',
          icon: Building2,
          description: 'Concept, permits, engineering, procurement and construction under one contract',
          descriptionAr: 'التصميم والتراخيص والهندسة والتوريد والتنفيذ ضمن عقد واحد',
          subcategories: [
            { name: 'Concept & Schematic Design', nameAr: 'التصميم المبدئي والمفاهيمي' },
            { name: 'Permitting & Coordination', nameAr: 'التراخيص والتنسيق' },
            { name: 'Detailed Engineering & BIM', nameAr: 'التصميم التفصيلي وBIM' },
            { name: 'Procurement & Contracting', nameAr: 'التوريد والتعاقد' },
            { name: 'Turnkey Construction', nameAr: 'التنفيذ المتكامل' }
          ]
        },
        {
          name: 'Civil Works',
          nameAr: 'الأعمال المدنية',
          icon: Wrench,
          description: 'Earthworks, foundations, concrete structures, roads and site utilities',
          descriptionAr: 'أعمال الحفر والأساسات والهياكل الخرسانية والطرق ومرافق الموقع',
          subcategories: [
            { name: 'Earthworks & Excavation', nameAr: 'أعمال الحفر وتسوية التربة' },
            { name: 'Piling & Foundations', nameAr: 'الخوازيق والأساسات' },
            { name: 'RC Frames & Post‑Tension', nameAr: 'الهياكل الخرسانية والشد اللاحق' },
            { name: 'Roads & Hardscape', nameAr: 'الطرق والأعمال الصلبة' },
            { name: 'Utilities (Water, Sewer, Power)', nameAr: 'مرافق الموقع (مياه، صرف، كهرباء)' }
          ]
        },
        {
          name: 'MEP',
          nameAr: 'الأعمال الميكانيكية والكهربائية والسباكة',
          icon: Zap,
          description: 'Integrated mechanical, electrical and plumbing systems with BIM coordination',
          descriptionAr: 'أنظمة ميكانيكية وكهربائية وسباكة متكاملة مع تنسيق نمذجة معلومات البناء',
          subcategories: [
            { name: 'HVAC Systems (Chilled/VRF)', nameAr: 'أنظمة تكييف (ماء مبرد/VRF)' },
            { name: 'Power & Lighting', nameAr: 'القوى والإضاءة' },
            { name: 'ELV & BMS', nameAr: 'أنظمة弱電 وإدارة المباني' },
            { name: 'Plumbing & Drainage', nameAr: 'السباكة والصرف' },
            { name: 'Fire Fighting & Alarm', nameAr: 'الإطفاء والإنذار' }
          ]
        },
        {
          name: 'Finishing',
          nameAr: 'التشطيبات',
          icon: Droplets,
          description: 'Interior fit‑out, joinery, flooring, ceilings, decorative paint and signage',
          descriptionAr: 'أعمال الفت آوت والنجارة والأرضيات والأسقف والدهانات الديكورية واللافتات',
          subcategories: [
            { name: 'Joinery & Millwork', nameAr: 'النجارة والأعمال الخشبية' },
            { name: 'Flooring & Tiling', nameAr: 'الأرضيات والبلاطات' },
            { name: 'Ceilings & Partitions', nameAr: 'الأسقف والقواطع' },
            { name: 'Decorative Finishes', nameAr: 'تشطيبات ديكورية' },
            { name: 'Signage & Wayfinding', nameAr: 'اللافتات والإرشاد' }
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
          name: 'Design & Build',
          nameAr: 'التصميم والتنفيذ',
          icon: Building2,
          description: 'Concept, permits, engineering, procurement and construction under one contract',
          descriptionAr: 'التصميم والتراخيص والهندسة والتوريد والتنفيذ ضمن عقد واحد',
          subcategories: [
            { name: 'Concept & Schematic Design', nameAr: 'التصميم المبدئي والمفاهيمي' },
            { name: 'Permitting & Coordination', nameAr: 'التراخيص والتنسيق' },
            { name: 'Detailed Engineering & BIM', nameAr: 'التصميم التفصيلي وBIM' },
            { name: 'Procurement & Contracting', nameAr: 'التوريد والتعاقد' },
            { name: 'Turnkey Construction', nameAr: 'التنفيذ المتكامل' }
          ]
        },
        {
          name: 'Civil Works',
          nameAr: 'الأعمال المدنية',
          icon: Wrench,
          description: 'Earthworks, foundations, concrete structures, roads and site utilities',
          descriptionAr: 'أعمال الحفر والأساسات والهياكل الخرسانية والطرق ومرافق الموقع',
          subcategories: [
            { name: 'Earthworks & Excavation', nameAr: 'أعمال الحفر وتسوية التربة' },
            { name: 'Piling & Foundations', nameAr: 'الخوازيق والأساسات' },
            { name: 'RC Frames & Post‑Tension', nameAr: 'الهياكل الخرسانية والشد اللاحق' },
            { name: 'Roads & Hardscape', nameAr: 'الطرق والأعمال الصلبة' },
            { name: 'Utilities (Water, Sewer, Power)', nameAr: 'مرافق الموقع (مياه، صرف، كهرباء)' }
          ]
        },
        {
          name: 'MEP',
          nameAr: 'الأعمال الميكانيكية والكهربائية والسباكة',
          icon: Zap,
          description: 'Integrated mechanical, electrical and plumbing systems with BIM coordination',
          descriptionAr: 'أنظمة ميكانيكية وكهربائية وسباكة متكاملة مع تنسيق نمذجة معلومات البناء',
          subcategories: [
            { name: 'HVAC Systems (Chilled/VRF)', nameAr: 'أنظمة تكييف (ماء مبرد/VRF)' },
            { name: 'Power & Lighting', nameAr: 'القوى والإضاءة' },
            { name: 'ELV & BMS', nameAr: 'أنظمة弱電 وإدارة المباني' },
            { name: 'Plumbing & Drainage', nameAr: 'السباكة والصرف' },
            { name: 'Fire Fighting & Alarm', nameAr: 'الإطفاء والإنذار' }
          ]
        },
        {
          name: 'Finishing',
          nameAr: 'التشطيبات',
          icon: Droplets,
          description: 'Interior fit‑out, joinery, flooring, ceilings, decorative paint and signage',
          descriptionAr: 'أعمال الفت آوت والنجارة والأرضيات والأسقف والدهانات الديكورية واللافتات',
          subcategories: [
            { name: 'Joinery & Millwork', nameAr: 'النجارة والأعمال الخشبية' },
            { name: 'Flooring & Tiling', nameAr: 'الأرضيات والبلاطات' },
            { name: 'Ceilings & Partitions', nameAr: 'الأسقف والقواطع' },
            { name: 'Decorative Finishes', nameAr: 'تشطيبات ديكورية' },
            { name: 'Signage & Wayfinding', nameAr: 'اللافتات والإرشاد' }
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

  // Preload critical images for the current service (prefer category.image, then local defaults, then Unsplash)
  const currentServiceImages = currentService.categories.map((category: any) => {
    if (category && typeof category.image === 'string' && category.image.length > 0) {
      return category.image;
    }
    const lower = category.name.toLowerCase();
    const local = (path: string) => `/images/services/${path}`;
    const make = (id: string) => `https://images.unsplash.com/${id}?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=75`;
    if (lower.includes('design')) return local('mechanical.webp');
    if (lower.includes('civil')) return local('mechanical.webp');
    if (lower.includes('mep') || lower.includes('hvac') || lower.includes('power') || lower.includes('lighting') || lower.includes('elv') || lower.includes('bms')) return local('lighting.webp');
    if (lower.includes('plumb') || lower.includes('drainage') || lower.includes('water')) return local('plumbing.webp');
    if (lower.includes('finish')) return local('hvacsystem.webp');
    return make('photo-1504307651254-35680f356dfd');
  });

  // Helper: key benefits per service/category
  const getKeyBenefits = (serviceId: string, categoryName: string): string[] => {
    const lower = categoryName.toLowerCase();
    if (serviceId === 'construction') {
      return [
        'Engineering-grade quality assurance',
        'On-time delivery and cost control',
        'Sustainable, future-ready materials'
      ];
    }
    if (serviceId === 'electrical') {
      return [
        'Safety-first compliant installations',
        'Smart automation & monitoring',
        'Energy efficiency optimization'
      ];
    }
    if (serviceId === 'water') {
      return [
        'Reliable flow and pressure design',
        'Low maintenance lifecycle costs',
        'Environmental compliance'
      ];
    }
    // mechanical
    if (lower.includes('hvac')) {
      return ['Thermal comfort tuning', 'High-efficiency equipment', 'Quiet, reliable operation'];
    }
    if (lower.includes('fire')) {
      return ['Code-compliant protection', 'Early detection systems', 'Rapid response design'];
    }
    return ['Expert team execution', 'Quality materials', 'Post-project support'];
  };

  // Helper: gallery images per category (prefer category.gallery, then local defaults, then Unsplash)
  const getCategoryGallery = (category: any, serviceType: string): string[] => {
    if (category && Array.isArray(category.gallery) && category.gallery.length > 0) {
      return category.gallery as string[];
    }
    const name = category.name as string;
    const lower = name.toLowerCase();
    const local = (path: string) => `/images/services/${path}`;
    const base = (id: string) => `https://images.unsplash.com/${id}?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=75`;
    if (lower.includes('design')) {
      return [local('mechanical.webp'), base('photo-1554995207-c18c203602cb'), base('photo-1532153975070-2e9ab71f1b14')];
    }
    if (lower.includes('civil')) {
      return [local('mechanical.webp'), base('photo-1482192596544-9eb780fc7f66'), base('photo-1565008447742-97f6f38c985c')];
    }
    if (lower.includes('mep') || lower.includes('hvac') || lower.includes('power') || lower.includes('lighting') || lower.includes('elv') || lower.includes('bms')) {
      return [local('lighting.webp'), base('photo-1558618666-fcd25c85cd64'), base('photo-1558002038-1055907df827')];
    }
    if (lower.includes('plumb') || lower.includes('drainage') || lower.includes('water')) {
      return [local('plumbing.webp'), base('photo-1565008447742-97f6f38c985c'), base('photo-1486406146926-c627a92ad1ab')];
    }
    if (lower.includes('finish')) {
      return [local('hvacsystem.webp'), base('photo-1501045661006-fcebe0257c3f'), base('photo-1493809842364-78817add7ffb')];
    }
    return [
      base('photo-1504307651254-35680f356dfd'),
      base('photo-1565008447742-97f6f38c985c'),
      base('photo-1486406146926-c627a92ad1ab')
    ];
  };

  return (
    <div className="pt-16 overflow-hidden">
      <ImagePreloader images={currentServiceImages} priority={false} />
      {/* Hero Section redesigned to match other pages */}
      <motion.section 
        className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.35)), url(${servicesBgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" role="region" aria-label={currentLang === 'ar' ? 'رأس صفحة الخدمات' : 'Services page hero'}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center max-w-5xl mx-auto py-20"
          >
            {/* Modern Badge */}
            <motion.div
              variants={itemVariants}
              className="mb-8"
            >
              <span className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-semibold border border-white/20 shadow-lg">
                <div className="w-2 h-2 bg-white rounded-full mr-3 animate-pulse"></div>
                {currentLang === 'ar' ? 'خدمات متكاملة عالية الجودة' : 'Comprehensive High-Quality Services'}
              </span>
            </motion.div>
            
            {/* Modern Title with Brand Gradient */}
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 leading-tight"
            >
              <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                {currentLang === 'ar' ? 'خدماتنا المتكاملة' : 'Our Comprehensive Services'}
              </span>
            </motion.h1>
            
            {/* Modern Description */}
            <motion.p 
              variants={itemVariants}
              className="text-xl lg:text-2xl text-gray-200 mb-12 leading-relaxed max-w-4xl mx-auto"
            >
              {currentLang === 'ar' 
                ? 'نقدم حلولاً هندسية شاملة ومبتكرة تغطي جميع جوانب البناء والتطوير، من التصميم إلى التنفيذ بأعلى معايير الجودة العالمية'
                : 'We provide comprehensive and innovative engineering solutions covering all aspects of construction and development, from design to execution with the highest international quality standards'
              }
            </motion.p>

            {/* Stats Cards */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
            >
              {[
                { number: '500+', label: currentLang === 'ar' ? 'مشروع مكتمل' : 'Completed Projects' },
                { number: '25+', label: currentLang === 'ar' ? 'سنة خبرة' : 'Years Experience' },
                { number: '98%', label: currentLang === 'ar' ? 'رضا العملاء' : 'Client Satisfaction' },
                { number: '200+', label: currentLang === 'ar' ? 'مهندس متخصص' : 'Expert Engineers' }
              ].map((stat, index) => (
                <div key={index} className="bg-white/85 backdrop-blur-xl rounded-2xl p-4 md:p-6 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  <div className="text-2xl md:text-3xl font-bold text-brand-primary mb-1 md:mb-2">{stat.number}</div>
                  <div className="text-xs md:text-sm text-brand-text/70 font-medium">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Service Switcher removed as requested */}

      {/* Interactive Services Showcase */}
      <motion.section 
        className="py-24 bg-gradient-to-br from-brand-background/30 via-white to-brand-background/20 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Modern Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-primary/5 via-transparent to-brand-accent/5"></div>
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-l from-brand-primary/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-gradient-to-r from-brand-accent/10 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
              className="text-center mb-12 md:mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="mb-6">
              <span className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-brand-primary/10 to-brand-accent/10 backdrop-blur-xl text-brand-primary rounded-full text-sm font-semibold border border-brand-primary/20 shadow-lg">
                <div className="w-2 h-2 bg-brand-primary rounded-full mr-3"></div>
                {currentLang === 'ar' ? 'اكتشف خدماتنا' : 'Discover Our Services'}
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
              <span className="bg-gradient-to-r from-brand-text via-brand-primary to-brand-text bg-clip-text text-transparent">
                {currentLang === 'ar' ? 'خدماتنا المتخصصة' : 'Our Specialized Services'}
              </span>
            </h2>
            <p className="text-xl text-brand-text/70 max-w-4xl mx-auto leading-relaxed">
              {currentLang === 'ar' 
                ? 'استكشف مجموعة واسعة من الخدمات الهندسية المتخصصة التي نقدمها بأعلى معايير الجودة والكفاءة'
                : 'Explore our comprehensive range of specialized engineering services delivered with the highest standards of quality and efficiency'
              }
            </p>
          </motion.div>

          {/* Active Service Header */}
          <div className="sr-only" id={`service-panel-${activeService}`} role="tabpanel" aria-labelledby={services[activeService]?.id} />

          {/* Active Service Details - Modern Sidebar layout */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/20"
            >
              <div className="p-6 lg:p-10">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 md:gap-8">
                  {/* Modern Sidebar for categories - Desktop & Mobile Slider */}
                  <div className="lg:col-span-1">
                    {/* Desktop Sidebar */}
                    <div className="hidden lg:block sticky top-24">
                      {/* Modern Sidebar Header */}
                      <div className="mb-8 p-6 bg-gradient-to-br from-brand-primary/5 to-brand-accent/10 rounded-3xl border border-brand-primary/10">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-primary to-brand-accent flex items-center justify-center shadow-lg">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                            </svg>
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-brand-text">
                              {currentLang === 'ar' ? 'فئات الخدمات' : 'Service Categories'}
                            </h3>
                            <p className="text-sm text-brand-text/60">
                              {currentLang === 'ar' ? 'اختر الفئة المطلوبة' : 'Select a category'}
                            </p>
                          </div>
                        </div>
                        <div className="w-full h-1 bg-gradient-to-r from-brand-primary via-brand-accent to-brand-primary rounded-full"></div>
                      </div>

                      {/* Modern Category List */}
                      <div className="space-y-2 md:space-y-3">
                        {currentService.categories.map((category, index) => {
                          const CategoryIcon = category.icon;
                          const isActive = activeCategory === index;
                          
                          return (
                            <motion.button
                              key={index}
                              onClick={() => setActiveCategory(index)}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              className={`w-full group relative overflow-hidden ${
                                isActive
                                  ? 'bg-gradient-to-r from-brand-primary/15 to-brand-accent/15 border-brand-primary/40 shadow-xl'
                                  : 'bg-white/60 backdrop-blur-sm border-white/40 hover:bg-gradient-to-r hover:from-brand-primary/8 hover:to-brand-accent/8 hover:border-brand-primary/30 hover:shadow-lg'
                              } rounded-2xl border transition-all duration-300 text-left`}
                            >
                              {/* Active indicator */}
                              {isActive && (
                                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-primary to-brand-accent rounded-l-2xl"></div>
                              )}
                              
                              <div className="p-4 md:p-5 flex items-center justify-between">
                                <div className="flex items-center gap-3 md:gap-4">
                                  <div className={`w-10 h-10 md:w-12 md:h-12 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-lg ${
                                    isActive 
                                      ? 'bg-gradient-to-br from-brand-primary to-brand-accent text-white' 
                                      : 'bg-white/80 text-brand-primary group-hover:bg-gradient-to-br group-hover:from-brand-primary group-hover:to-brand-accent group-hover:text-white group-hover:shadow-xl'
                                  }`}>
                                    <CategoryIcon className="w-5 h-5 md:w-6 md:h-6" />
                                  </div>
                                  <div>
                                    <span className={`font-semibold text-sm md:text-base block ${
                                      isActive ? 'text-brand-primary' : 'text-brand-text group-hover:text-brand-primary'
                                    }`}>
                                      {currentLang === 'ar' ? category.nameAr : category.name}
                                    </span>
                                  </div>
                                </div>
                                
                                {/* Arrow Indicator */}
                                <div className={`${
                                  isActive ? 'text-brand-primary' : 'text-brand-text/60 group-hover:text-brand-primary'
                                }`}>
                                  <svg className={`w-4 h-4 transition-transform duration-300 ${
                                    isActive ? 'rotate-90' : 'group-hover:translate-x-1'
                                  }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                  </svg>
                                </div>
                              </div>

                              {/* Hover effect overlay */}
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%]"></div>
                            </motion.button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Mobile Slider */}
                    <div className="lg:hidden mb-8">
                      {/* Mobile Header */}
                      <div className="mb-6 text-center">
                        <h3 className="text-xl font-bold text-brand-text mb-2">
                          {currentLang === 'ar' ? 'فئات الخدمات' : 'Service Categories'}
                        </h3>
                        <div className="w-16 h-1 bg-gradient-to-r from-brand-primary to-brand-accent rounded-full mx-auto"></div>
                      </div>

                      {/* Modern Horizontal Slider */}
                      <div className="relative">
                        <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory">
                          {currentService.categories.map((category, index) => {
                            const CategoryIcon = category.icon;
                            const isActive = activeCategory === index;
                            
                            return (
                              <motion.button
                                key={index}
                                onClick={() => setActiveCategory(index)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`flex-shrink-0 group relative overflow-hidden ${
                                  isActive
                                    ? 'bg-gradient-to-r from-brand-primary to-brand-accent shadow-xl'
                                    : 'bg-white/80 backdrop-blur-sm border border-white/40 hover:bg-gradient-to-r hover:from-brand-primary/10 hover:to-brand-accent/10 hover:shadow-lg'
                                } rounded-2xl transition-all duration-300 text-left snap-start`}
                                style={{ minWidth: '200px' }}
                              >
                                <div className="p-6 flex flex-col items-center text-center space-y-3">
                                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-lg ${
                                    isActive 
                                      ? 'bg-white/20 text-white' 
                                      : 'bg-brand-primary/10 text-brand-primary group-hover:bg-white/20 group-hover:text-white'
                                  }`}>
                                    <CategoryIcon className="w-8 h-8" />
                                  </div>
                                  <div>
                                    <span className={`font-semibold text-base block ${
                                      isActive ? 'text-white' : 'text-brand-text group-hover:text-white'
                                    }`}>
                                      {currentLang === 'ar' ? category.nameAr : category.name}
                                    </span>
                                  </div>
                                </div>

                                {/* Active indicator */}
                                {isActive && (
                                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-white rounded-b-2xl"></div>
                                )}

                                {/* Hover effect overlay */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%]"></div>
                              </motion.button>
                            );
                          })}
                        </div>
                        
                        {/* Scroll indicators */}
                        <div className="flex justify-center mt-4 space-x-2">
                          {currentService.categories.map((_, index) => (
                            <div
                              key={index}
                              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                index === activeCategory ? 'bg-brand-primary' : 'bg-brand-text/30'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content panel */}
                  <div className="lg:col-span-3">
                    {(() => {
                      const category = currentService.categories[activeCategory];
                      const CategoryIcon = category.icon;
                      const getCategoryImage = (categoryObj: any, _serviceType: string) => {
                        if (categoryObj && typeof categoryObj.image === 'string' && categoryObj.image.length > 0) {
                          return categoryObj.image as string;
                        }
                        const getResponsiveUnsplashUrl = (imageId: string, baseWidth: number = 1200) => {
                          return `https://images.unsplash.com/${imageId}?ixlib=rb-4.0.3&auto=format&fit=crop&w=${baseWidth}&q=75`;
                        };
                        const lower = (categoryObj.name as string).toLowerCase();
                        // Design & Build
                        if (lower.includes('design')) {
                          return getResponsiveUnsplashUrl('photo-1496307042754-b4aa456c4a2d', 1400);
                        }
                        // Civil Works
                        if (lower.includes('civil') || lower.includes('earth') || lower.includes('piling') || lower.includes('foundation') || lower.includes('road')) {
                          return getResponsiveUnsplashUrl('photo-1469474968028-56623f02e42e', 1400);
                        }
                        // MEP
                        if (lower.includes('mep') || lower.includes('hvac') || lower.includes('power') || lower.includes('lighting') || lower.includes('elv') || lower.includes('bms') || lower.includes('plumbing') || lower.includes('drainage') || lower.includes('fire')) {
                          return getResponsiveUnsplashUrl('photo-1518770660439-4636190af475', 1400);
                        }
                        // Finishing
                        if (lower.includes('finish') || lower.includes('joinery') || lower.includes('floor') || lower.includes('ceiling') || lower.includes('partition') || lower.includes('decor')) {
                          return getResponsiveUnsplashUrl('photo-1503387762-592deb58ef4e', 1400);
                        }
                        // Fallback
                        return getResponsiveUnsplashUrl('photo-1504307651254-35680f356dfd', 1400);
                      };
                      const bannerImage = getCategoryImage(category as any, currentService.id);
                      const benefits = getKeyBenefits(currentService.id, category.name);
                      const gallery = getCategoryGallery(category as any, currentService.id);

                      return (
                        <div className="space-y-8">
                          {/* Modern Category Header with Image */}
                          <div className="relative rounded-3xl overflow-hidden min-h-80 bg-gradient-to-br from-brand-primary/5 to-brand-accent/10">
                            <img
                              src={bannerImage}
                              alt={(currentLang === 'ar' ? category.nameAr : category.name) + ' banner'}
                              loading="lazy"
                              className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-brand-secondary/80 via-brand-secondary/40 to-transparent" />
                            <div className="relative z-10 p-8 md:p-12 h-full flex flex-col justify-end">
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
                                {/* Left: Title and description */}
                                <div>
                                  <div className="flex items-center gap-4 mb-4">
                                    <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center shadow-2xl">
                                      <CategoryIcon className="w-8 h-8 text-white" />
                                    </div>
                                    <div>
                                      <h3 className="text-white text-3xl md:text-4xl font-bold mb-2">
                                        {currentLang === 'ar' ? category.nameAr : category.name}
                                      </h3>
                                      <div className="w-16 h-1 bg-gradient-to-r from-brand-accent to-white rounded-full"></div>
                                    </div>
                                  </div>
                                  <p className="text-white/90 text-lg max-w-2xl leading-relaxed">
                                    {currentLang === 'ar' ? category.descriptionAr : category.description}
                                  </p>
                                </div>
                                {/* Right: Subcategories and Key Benefits */}
                                <div className="space-y-4">
                                  {/* Subcategories */}
                                  <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-4">
                                    <h4 className="text-white/95 text-sm font-semibold mb-3">
                                      {currentLang === 'ar' ? 'الفئات الفرعية' : 'Subcategories'}
                                    </h4>
                                    {Array.isArray((category as any).subcategories) && (category as any).subcategories.length > 0 ? (
                                      <ul className="space-y-2">
                                        {(category as any).subcategories.slice(0, 4).map((sub: any, idx2: number) => (
                                          <li key={idx2} className="flex items-center gap-2 text-white/90 text-sm">
                                            <span className="inline-block w-1.5 h-1.5 rounded-full bg-white/70"></span>
                                            <span className="truncate">{currentLang === 'ar' ? (sub.nameAr || sub.name) : sub.name}</span>
                                          </li>
                                        ))}
                                      </ul>
                                    ) : (
                                      <p className="text-white/70 text-sm">{currentLang === 'ar' ? 'لا توجد فئات' : 'No subcategories'}</p>
                                    )}
                                  </div>
                                  {/* Key Benefits */}
                                  <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-4">
                                    <h4 className="text-white/95 text-sm font-semibold mb-3">
                                      {currentLang === 'ar' ? 'أهم المزايا' : 'Key Benefits'}
                                    </h4>
                                    <ul className="space-y-2">
                                      {benefits.slice(0, 4).map((b, i) => (
                                        <li key={i} className="flex items-center gap-2 text-white/90 text-sm">
                                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-gradient-to-r from-brand-accent to-white"></span>
                                          <span className="truncate">{b}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Modern Split Slider */}
                          <div className="relative rounded-3xl overflow-hidden bg-white/90 backdrop-blur-xl border border-white/20 shadow-2xl">
                            {(() => {
                              const slides = (Array.isArray((category as any).subcategories) && (category as any).subcategories.length > 0)
                                ? (category as any).subcategories
                                : benefits.map((b) => ({ name: b, nameAr: b }));
                              const slideCount = Math.max(gallery.length, slides.length);
                              const currentSlideIdx = ((sliderIndex % slideCount) + slideCount) % slideCount;
                              const currentSlide = slides[currentSlideIdx % slides.length];
                              const currentImage = gallery[currentSlideIdx % gallery.length];
                              return (
                                <div className="grid grid-cols-1 md:grid-cols-2">
                                  {/* Left: Modern Image Panel */}
                                  <div className="relative h-80 md:h-96 w-full">
                                    <img
                                      src={currentImage}
                                      alt={(currentLang === 'ar' ? category.nameAr : category.name) + ' slide'}
                                      loading="lazy"
                                      className="absolute inset-0 w-full h-full object-cover transition-all duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-brand-secondary/70 via-brand-secondary/20 to-transparent md:bg-gradient-to-r md:from-brand-secondary/50 md:via-brand-secondary/20 md:to-transparent" />
                                    
                                    {/* Modern Controls */}
                                    <div className="absolute bottom-6 left-6 flex gap-3">
                                      <button
                                        aria-label="Previous"
                                        onClick={() => setSliderIndex((prev) => (prev - 1 + slideCount) % slideCount)}
                                        className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 text-white hover:bg-white/30 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center"
                                      >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                        </svg>
                                      </button>
                                      <button
                                        aria-label="Next"
                                        onClick={() => setSliderIndex((prev) => (prev + 1) % slideCount)}
                                        className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 text-white hover:bg-white/30 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center"
                                      >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                      </button>
                                    </div>

                                    {/* Autoplay Toggle */}
                                    <button
                                      type="button"
                                      onClick={() => setAutoPlay((v) => !v)}
                                      className="absolute top-6 right-6 px-4 py-2 rounded-xl text-sm bg-brand-primary/90 backdrop-blur-xl text-white border border-brand-primary/30 hover:bg-brand-primary transition-all duration-300 shadow-lg"
                                      aria-label={autoPlay ? (currentLang === 'ar' ? 'إيقاف تلقائي' : 'Pause autoplay') : (currentLang === 'ar' ? 'تشغيل تلقائي' : 'Play autoplay')}
                                    >
                                      {autoPlay ? (currentLang === 'ar' ? '⏸️ إيقاف' : '⏸️ Pause') : (currentLang === 'ar' ? '▶️ تشغيل' : '▶️ Play')}
                                    </button>

                                    {/* Progress Indicators */}
                                    <div className="absolute bottom-6 right-6 flex gap-2">
                                      {Array.from({ length: Math.min(slideCount, 6) }).map((_, i) => (
                                        <span
                                          key={i}
                                          className={`h-2 w-2 rounded-full transition-all duration-300 ${
                                            i === (currentSlideIdx % Math.min(slideCount, 6)) 
                                              ? 'bg-white shadow-lg' 
                                              : 'bg-white/50'
                                          }`}
                                        />
                                      ))}
                                    </div>
                                  </div>

                                  {/* Right: Modern Content Panel */}
                                  <div className="p-8 md:p-12 flex flex-col justify-between bg-gradient-to-br from-white/95 to-brand-background/30">
                                    <div>
                                      <span className="inline-block text-xs tracking-wide uppercase text-brand-primary mb-4 font-semibold">
                                        {currentLang === 'ar' ? 'تفاصيل الفئة' : 'Category Insight'}
                                      </span>
                                      <h4 className="text-2xl md:text-3xl font-bold mb-4 text-brand-text">
                                        {currentLang === 'ar' ? (currentSlide.nameAr || currentSlide.name) : currentSlide.name}
                                      </h4>
                                      <p className="text-brand-text/70 leading-relaxed mb-6">
                                        {currentLang === 'ar' ? category.descriptionAr : category.description}
                                      </p>

                                    </div>

                                    <div className="flex items-center justify-between">
                                      {/* Progress Bar */}
                                      <div className="flex items-center gap-3 w-40">
                                        <div className="relative h-2 w-full rounded-full bg-brand-text/10 overflow-hidden">
                                          <motion.div
                                            key={currentSlideIdx}
                                            initial={{ width: 0 }}
                                            animate={{ width: autoPlay ? '100%' : 0 }}
                                            transition={{ duration: 5, ease: 'linear' }}
                                            className="absolute left-0 top-0 h-full bg-gradient-to-r from-brand-primary to-brand-accent rounded-full"
                                          />
                                        </div>
                                      </div>

                                    </div>
                                  </div>
                                </div>
                              );
                            })()}
                          </div>

                        </div>
                      );
                    })()}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.section>

    </div>
  );
};

export default Services;


