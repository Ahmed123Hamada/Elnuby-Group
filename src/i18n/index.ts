import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // Navigation
      home: 'Home',
      about: 'About Us',
      services: 'Services',
      career: 'Career',
      contact: 'Contact Us',
      
      // Hero Section
      heroTitle: 'Elnuby Group',
      heroSubtitle: 'Excellence in Engineering and Construction',
      heroDescription: 'We are Elnuby Group, a leading company in engineering and construction, providing integrated and innovative solutions for all your engineering needs.',
      getStarted: 'Get Started',
      learnMore: 'Learn More',
      residentialTower: 'Residential Tower Project',
      residentialTowerDesc: 'Luxury residential tower consisting of 20 floors in the heart of the city',
      commercialCenter: 'Modern Commercial Center',
      commercialCenterDesc: 'Integrated commercial center with an area of 50,000 square meters',
      infrastructureProject: 'Infrastructure Project',
      infrastructureDesc: 'Development of infrastructure for the new city',
      nextProject: 'Next Project',
      
      // About Section
      aboutTitle: 'About Elnuby Group',
      aboutSubtitle: 'Over 20 Years of Engineering Experience',
      aboutDescription: 'Elnuby Group is a leading company in engineering and construction, established for more than 20 years. We have extensive experience in designing and implementing various engineering projects, from residential and commercial buildings to industrial projects and infrastructure.',
      professionalStaff: 'Professional Staff',
      professionalStaffDesc: 'Professional team of engineers and experts',
      yearsExperience: 'Years of Experience',
      yearsExperienceDesc: 'Over 20 years of experience in the field',
      completedProjects: 'Completed Projects',
      completedProjectsDesc: 'Over 150 successfully completed projects',
      onTimeDelivery: 'On-Time Delivery',
      onTimeDeliveryDesc: 'We commit to delivering projects on time',
      aboutImageAlt: 'Elnuby Group - Inside the Company',
      
      // Services Section
      servicesTitle: 'Our Integrated Services',
      servicesSubtitle: 'Comprehensive engineering and construction services to meet all your needs',
      engineeringDesign: 'Engineering Design',
      engineeringDesignDesc: 'Integrated design for buildings and facilities with the latest technologies and global standards',
      architecturalDesign: 'Architectural Design',
      structuralDesign: 'Structural Design',
      electricalDesign: 'Electrical Design',
      mechanicalDesign: 'Mechanical Design',
      projectManagement: 'Project Management',
      projectManagementDesc: 'Comprehensive project management from planning to delivery with quality and time guarantee',
      projectPlanning: 'Project Planning',
      qualityManagement: 'Quality Management',
      riskManagement: 'Risk Management',
      executionFollowUp: 'Execution Follow-up',
      construction: 'Construction & Building',
      constructionDesc: 'Implementation of construction and building projects with the highest quality and safety standards',
      buildingConstruction: 'Building Construction',
      roadsBridges: 'Roads and Bridges',
      publicFacilities: 'Public Facilities',
      healthcareProjects: 'Healthcare Projects',
      healthcareProjectsDesc: 'Design and implementation of hospitals and medical centers with the latest technologies',
      generalHospitals: 'General Hospitals',
      specializedHospitals: 'Specialized Hospitals',
      medicalCenters: 'Medical Centers',
      laboratories: 'Laboratories',
      educationalProjects: 'Educational Projects',
      educationalProjectsDesc: 'Building schools, universities and advanced educational facilities',
      schoolsUniversities: 'Schools and Universities',
      libraries: 'Libraries',
      scientificLabs: 'Scientific Laboratories',
      sportsFacilities: 'Sports Facilities',
      waterNetworks: 'Water Networks',
      electricityNetworks: 'Electricity Networks',
      sewageSystems: 'Sewage Systems',
      engineeringConsulting: 'Engineering Consulting',
      engineeringConsultingDesc: 'Specialized consulting services in all engineering fields',
      feasibilityStudies: 'Feasibility Studies',
      preliminaryDesign: 'Preliminary Design',
      contractManagement: 'Contract Management',
      technicalSupervision: 'Technical Supervision',
      governmentProjects: 'Government Projects',
      governmentProjectsDesc: 'Implementation of government and administrative projects with high efficiency',
      administrativeBuildings: 'Administrative Buildings',
      governmentFacilities: 'Government Facilities',
      securityPolice: 'Security and Police',
      publicServices: 'Public Services',
      whyChooseUs: 'Why Choose Elnuby Group?',
      whyChooseUsDesc: 'We excel with extensive experience in engineering and construction, providing innovative and integrated solutions that meet all our clients\' needs. Our professional team ensures high-quality services delivered on time.',
      professionalTeam: 'Professional team of experts',
      over20Years: 'Over 20 years of experience',
      over150Projects: 'Over 150 completed projects',
      
      // Projects Section
      projectsTitle: 'Our Distinguished Projects',
      projectsSubtitle: 'Discover a diverse collection of our distinguished projects in various engineering and construction fields',
      viewAllProjects: 'View All Projects',
      
      // Contact Section
      contactTitle: 'Get In Touch',
      contactSubtitle: 'Let\'s Start a Conversation',
      contactDescription: 'Ready to discuss your project? We\'d love to hear from you.',
      contactInformation: 'Contact Information',
      address: 'Address',
      phone: 'Phone',
      email: 'Email',
      followUs: 'Follow Us On',
      sendUsMessage: 'Send Us a Message',
      enterYourName: 'Enter your name',
      enterYourEmail: 'Enter your email address',
      enterYourMessage: 'Enter your message here...',
      sendMessage: 'Send Message',
      
      // Stats
      happyClients: 'Happy Clients',
      
      // Footer
      allRightsReserved: 'All Rights Reserved',
      privacyPolicy: 'Privacy Policy',
      termsOfService: 'Terms of Service',
      sitemap: 'Sitemap',
      quickLinks: 'Quick Links',
      
      // Language
      language: 'Language',
      arabic: 'Arabic',
      english: 'English',
      
      // Project Details
      projectDetails: 'Project Details',
      location: 'Location',
      area: 'Area',
      year: 'Year',
      status: 'Status',
      client: 'Client',
      projectValue: 'Project Value',
      features: 'Features',
      projectDescription: 'Project Description',
      relatedProjects: 'Related Projects',
      backToProjects: 'Back to Projects',
      viewDetails: 'View Details',
      visitProject: 'Visit Project',
      projectNotFound: 'Project Not Found',
      
      // Project Status
      completed: 'Completed',
      underConstruction: 'Under Construction',
      inProgress: 'In Progress',
      
      // Categories
      allProjects: 'All Projects',
      healthcare: 'Healthcare',
      educational: 'Educational',
      administrative: 'Administrative',
      hospitality: 'Hospitality',
      residential: 'Residential',
      commercial: 'Commercial',
      sports: 'Sports',
      
      // Search and Filter
      searchProjects: 'Search Projects...',
      foundProjects: 'Found',
      projectsCount: 'projects',
      page: 'Page',
      of: 'of',
      previous: 'Previous',
      next: 'Next',
      noProjectsFound: 'No projects found',
      tryChangingFilters: 'Try changing search criteria or category',
      projects: 'Projects',
      
      // Contact Form
      contactUs: 'Contact Us',
      requestQuote: 'Request Quote',
      phoneNumber: 'Phone Number',
      emailAddress: 'Email Address',
      fullName: 'Full Name',
      yourMessage: 'Your Message',
      submit: 'Submit',
      
      // Common
      loading: 'Loading...',
      error: 'Error',
      success: 'Success',
      cancel: 'Cancel',
      save: 'Save',
      edit: 'Edit',
      delete: 'Delete',
      close: 'Close',
      open: 'Open',
      more: 'More',
      less: 'Less',
    }
  },
  ar: {
    translation: {
      // Navigation
      home: 'الرئيسية',
      about: 'عن الشركة',
      services: 'خدماتنا',
      career: 'توظيف',
      contact: 'تواصل معنا',
      
      // Hero Section
      heroTitle: 'مجموعة النوبي',
      heroSubtitle: 'التميز في الهندسة والبناء',
      heroDescription: 'نحن مجموعة النوبي، شركة رائدة في مجال الهندسة والبناء، نقدم حلولاً متكاملة ومبتكرة لجميع احتياجاتكم الهندسية.',
      getStarted: 'ابدأ الآن',
      learnMore: 'اعرف المزيد',
      residentialTower: 'مشروع برج السكني',
      residentialTowerDesc: 'برج سكني فاخر يتكون من 20 طابق في قلب المدينة',
      commercialCenter: 'مركز تجاري حديث',
      commercialCenterDesc: 'مركز تجاري متكامل بمساحة 50,000 متر مربع',
      infrastructureProject: 'مشروع البنية التحتية',
      infrastructureDesc: 'تطوير البنية التحتية للمدينة الجديدة',
      nextProject: 'المشروع التالي',
      
      // About Section
      aboutTitle: 'عن مجموعة النوبي',
      aboutSubtitle: 'خبرة أكثر من 20 عاماً في مجال الهندسة',
      aboutDescription: 'مجموعة النوبي هي شركة رائدة في مجال الهندسة والبناء، تأسست منذ أكثر من 20 عاماً. نتميز بخبرة واسعة في تصميم وتنفيذ المشاريع الهندسية المختلفة، من المباني السكنية والتجارية إلى المشاريع الصناعية والبنية التحتية.',
      professionalStaff: 'فريق محترف',
      professionalStaffDesc: 'فريق محترف من المهندسين والخبراء',
      yearsExperience: 'سنوات الخبرة',
      yearsExperienceDesc: 'خبرة أكثر من 20 عاماً في المجال',
      completedProjects: 'مشاريع مكتملة',
      completedProjectsDesc: 'أكثر من 150 مشروع مكتمل بنجاح',
      onTimeDelivery: 'التسليم في الوقت المحدد',
      onTimeDeliveryDesc: 'نلتزم بتسليم المشاريع في الوقت المحدد',
      aboutImageAlt: 'مجموعة النوبي - داخل الشركة',
      
      // Services Section
      servicesTitle: 'خدماتنا المتكاملة',
      servicesSubtitle: 'نقدم مجموعة شاملة من الخدمات الهندسية والإنشائية لتلبية جميع احتياجاتكم',
      engineeringDesign: 'التصميم الهندسي',
      engineeringDesignDesc: 'تصميم متكامل للمباني والمنشآت بأحدث التقنيات والمعايير العالمية',
      architecturalDesign: 'التصميم المعماري',
      structuralDesign: 'التصميم الإنشائي',
      electricalDesign: 'التصميم الكهربائي',
      mechanicalDesign: 'التصميم الميكانيكي',
      projectManagement: 'إدارة المشاريع',
      projectManagementDesc: 'إدارة شاملة للمشاريع من التخطيط حتى التسليم مع ضمان الجودة والوقت',
      projectPlanning: 'تخطيط المشاريع',
      qualityManagement: 'إدارة الجودة',
      riskManagement: 'إدارة المخاطر',
      executionFollowUp: 'متابعة التنفيذ',
      construction: 'البناء والتشييد',
      constructionDesc: 'تنفيذ مشاريع البناء والتشييد بأعلى معايير الجودة والسلامة',
      buildingConstruction: 'بناء المباني',
      roadsBridges: 'الطرق والجسور',
      publicFacilities: 'المرافق العامة',
      healthcareProjects: 'المشاريع الصحية',
      healthcareProjectsDesc: 'تصميم وتنفيذ المستشفيات والمراكز الطبية بأحدث التقنيات',
      generalHospitals: 'مستشفيات عامة',
      specializedHospitals: 'مستشفيات متخصصة',
      medicalCenters: 'مراكز طبية',
      laboratories: 'مختبرات',
      educationalProjects: 'المشاريع التعليمية',
      educationalProjectsDesc: 'بناء المدارس والجامعات والمرافق التعليمية المتطورة',
      schoolsUniversities: 'مدارس وجامعات',
      libraries: 'مكتبات',
      scientificLabs: 'مختبرات علمية',
      sportsFacilities: 'مرافق رياضية',
      waterNetworks: 'شبكات مياه',
      electricityNetworks: 'شبكات كهرباء',
      sewageSystems: 'صرف صحي',
      engineeringConsulting: 'الاستشارات الهندسية',
      engineeringConsultingDesc: 'خدمات استشارية متخصصة في جميع مجالات الهندسة والبناء',
      feasibilityStudies: 'دراسات الجدوى',
      preliminaryDesign: 'التصميم المبدئي',
      contractManagement: 'إدارة العقود',
      technicalSupervision: 'المراقبة الفنية',
      governmentProjects: 'المشاريع الحكومية',
      governmentProjectsDesc: 'تنفيذ المشاريع الحكومية والإدارية بكفاءة عالية',
      administrativeBuildings: 'مباني إدارية',
      governmentFacilities: 'مرافق حكومية',
      securityPolice: 'أمن وشرطة',
      publicServices: 'خدمات عامة',
      whyChooseUs: 'لماذا تختار مجموعة النوبي؟',
      whyChooseUsDesc: 'نتميز بخبرة واسعة في مجال الهندسة والبناء، ونقدم حلولاً مبتكرة ومتكاملة تلبي جميع احتياجات عملائنا. فريقنا المحترف يضمن تقديم خدمات عالية الجودة في الوقت المحدد.',
      professionalTeam: 'فريق محترف من الخبراء',
      over20Years: 'خبرة أكثر من 20 عاماً',
      over150Projects: 'أكثر من 150 مشروع مكتمل',
      
      // Projects Section
      projectsTitle: 'مشاريعنا المميزة',
      projectsSubtitle: 'اكتشف مجموعة متنوعة من مشاريعنا المتميزة في مختلف المجالات الهندسية والإنشائية',
      viewAllProjects: 'عرض جميع المشاريع',
      
      // Contact Section
      contactTitle: 'تواصل معنا',
      contactSubtitle: 'لنبدأ محادثة',
      contactDescription: 'مستعد لمناقشة مشروعك؟ نود أن نسمع منك.',
      contactInformation: 'معلومات التواصل',
      address: 'العنوان',
      phone: 'الهاتف',
      email: 'البريد الإلكتروني',
      followUs: 'تابعنا على',
      sendUsMessage: 'أرسل لنا رسالة',
      enterYourName: 'أدخل اسمك',
      enterYourEmail: 'أدخل بريدك الإلكتروني',
      enterYourMessage: 'أدخل رسالتك هنا...',
      sendMessage: 'إرسال الرسالة',
      
      // Stats
      happyClients: 'عميل سعيد',
      
      // Footer
      allRightsReserved: 'جميع الحقوق محفوظة',
      privacyPolicy: 'سياسة الخصوصية',
      termsOfService: 'شروط الاستخدام',
      sitemap: 'خريطة الموقع',
      quickLinks: 'روابط سريعة',
      
      // Language
      language: 'اللغة',
      arabic: 'العربية',
      english: 'English',
      
      // Project Details
      projectDetails: 'تفاصيل المشروع',
      location: 'الموقع',
      area: 'المساحة',
      year: 'السنة',
      status: 'الحالة',
      client: 'العميل',
      projectValue: 'قيمة المشروع',
      features: 'المميزات',
      projectDescription: 'وصف المشروع',
      relatedProjects: 'مشاريع مشابهة',
      backToProjects: 'العودة إلى المشاريع',
      viewDetails: 'عرض التفاصيل',
      visitProject: 'زيارة المشروع',
      projectNotFound: 'المشروع غير موجود',
      
      // Project Status
      completed: 'مكتمل',
      underConstruction: 'قيد الإنشاء',
      inProgress: 'قيد التنفيذ',
      
      // Categories
      allProjects: 'جميع المشاريع',
      healthcare: 'صحي',
      educational: 'تعليمي',
      administrative: 'إداري',
      hospitality: 'فندقي',
      residential: 'سكني',
      commercial: 'تجاري',
      sports: 'رياضي',
      
      // Search and Filter
      searchProjects: 'البحث في المشاريع...',
      foundProjects: 'تم العثور على',
      projectsCount: 'مشروع',
      page: 'الصفحة',
      of: 'من',
      previous: 'السابق',
      next: 'التالي',
      noProjectsFound: 'لم يتم العثور على مشاريع',
      tryChangingFilters: 'جرب تغيير معايير البحث أو التصنيف',
      projects: 'المشاريع',
      
      // Contact Form
      contactUs: 'تواصل معنا',
      requestQuote: 'طلب عرض سعر',
      phoneNumber: 'رقم الهاتف',
      emailAddress: 'البريد الإلكتروني',
      fullName: 'الاسم الكامل',
      yourMessage: 'رسالتك',
      submit: 'إرسال',
      
      // Common
      loading: 'جاري التحميل...',
      error: 'خطأ',
      success: 'نجح',
      cancel: 'إلغاء',
      save: 'حفظ',
      edit: 'تعديل',
      delete: 'حذف',
      close: 'إغلاق',
      open: 'فتح',
      more: 'المزيد',
      less: 'أقل',
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ar', // default language (Arabic)
    fallbackLng: 'ar',
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n;