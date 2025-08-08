import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  Users, 
  Lightbulb, 
  TrendingUp, 
  Award, 
  CheckCircle, 
  FileText, 
  Phone, 
  MessageSquare, 
  UserPlus,
  Upload,
  Mail,
  Send
} from 'lucide-react';
import Button from '../components/Button';
import careerBgImage from '../assast/Images/project/Education/FacultyofAlsun.jpg';

const Career: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    jobAppliedFor: '',
    notes: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ firstName: '', lastName: '', email: '', phone: '', jobAppliedFor: '', notes: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const steps = [
    {
      number: 1,
      title: t('step1Title'),
      description: t('step1Desc'),
      icon: FileText,
      color: 'from-blue-500 to-blue-600'
    },
    {
      number: 2,
      title: t('step2Title'),
      description: t('step2Desc'),
      icon: Phone,
      color: 'from-green-500 to-green-600'
    },
    {
      number: 3,
      title: t('step3Title'),
      description: t('step3Desc'),
      icon: MessageSquare,
      color: 'from-orange-500 to-orange-600'
    },
    {
      number: 4,
      title: t('step4Title'),
      description: t('step4Desc'),
      icon: UserPlus,
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const values = [
    {
      icon: TrendingUp,
      title: t('growthOpportunities'),
      description: t('growthDesc'),
    },
    {
      icon: Lightbulb,
      title: t('innovativeProjects'),
      description: t('innovativeDesc'),
    },
    {
      icon: Users,
      title: t('collaborativeEnvironment'),
      description: t('collaborativeDesc'),
    },
    {
      icon: Award,
      title: t('competitivePackage'),
      description: t('competitiveDesc'),
    },
  ];



  return (
    <div className="pt-16 overflow-hidden">
      {/* Hero Section */}
      <section 
        className="relative bg-gradient-to-br from-primary-50 via-white to-primary-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${careerBgImage})`,
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
              {t('careerTitle')}
            </h1>
            <h2 className="text-2xl md:text-3xl text-white font-semibold mb-6 drop-shadow-md">
              {t('careerSubtitle')}
            </h2>
            <p className="text-xl text-white max-w-4xl mx-auto leading-relaxed drop-shadow-md">
              {t('careerDescription')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Steps Section */}
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
              {t('stepsSimple')}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white shadow-lg`}>
                  <step.icon size={32} />
                </div>
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              {t('whyJoinUs')}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mb-6">
                  <value.icon className="text-primary-600 dark:text-primary-400" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* Application Form Section */}
      <section id="application-form" className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Application Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {t('readyToJoin')}
              </h2>
              
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <CheckCircle className="text-green-500 mx-auto mb-4" size={48} />
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Application Sent Successfully!
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Thank you for your interest! We'll review your application and get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        {t('firstName')} *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-200"
                        placeholder={t('firstName')}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        {t('lastName')} *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-200"
                        placeholder={t('lastName')}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        {t('email')} *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-200"
                        placeholder={t('emailPlaceholder')}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        {t('phoneLabel')}
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-200"
                        placeholder={t('phonePlaceholder')}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="jobAppliedFor" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {t('jobAppliedFor')} *
                    </label>
                    <select
                      id="jobAppliedFor"
                      name="jobAppliedFor"
                      value={formData.jobAppliedFor}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-200"
                    >
                      <option value="">{t('selectSubject')}</option>
                      <option value="civil-engineer">Civil Engineer</option>
                      <option value="project-manager">Project Manager</option>
                      <option value="architect">Architect</option>
                      <option value="site-supervisor">Site Supervisor</option>
                      <option value="mechanical-engineer">Mechanical Engineer</option>
                      <option value="electrical-engineer">Electrical Engineer</option>
                      <option value="other">{t('other')}</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="cv" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {t('uploadCV')} *
                    </label>
                    <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 text-center hover:border-primary-500 transition-colors duration-200">
                      <Upload className="mx-auto mb-4 text-gray-400" size={32} />
                      <p className="text-gray-600 dark:text-gray-300 mb-2">
                        Click to upload or drag and drop your CV
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {t('uploadCVNote')}
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="notes" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {t('notes')}
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      value={formData.notes}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-200 resize-none"
                      placeholder="Additional information or portfolio links..."
                    />
                  </div>
                  
                  <Button
                    variant="primary"
                    size="lg"
                    type="submit"
                    fullWidth
                    loading={false}
                    className="gap-2"
                  >
                    <div className="flex items-center justify-center space-x-2">
                      <span>{t('sendApplication')}</span>
                      <Send size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
                    </div>
                  </Button>
                </form>
              )}
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  {t('contactViaEmail')}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                  Can't find the right position? Send us your CV anyway. We're always looking for talented individuals to join our team.
                </p>
              </div>

              <div className="bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl p-8 text-white">
                <div className="flex items-center mb-6">
                  <Mail className="mr-4" size={32} />
                  <div>
                    <h4 className="text-xl font-semibold">HR Department</h4>
                    <p className="opacity-90">careers@elnuby.com</p>
                  </div>
                </div>
                <p className="mb-6 opacity-90">
                  Our HR team is here to help you with any questions about career opportunities at EL-Nuby Group.
                </p>
                <Button
                  variant="outline"
                  size="md"
                  icon="arrow-right"
                  className="border-white text-white hover:bg-white hover:text-primary-600"
                  onClick={() => window.location.href = 'mailto:careers@elnuby.com'}
                >
                  Send Email
                </Button>
              </div>

              <div className="bg-gray-100 dark:bg-gray-700 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Follow Our Journey
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Stay updated with our latest projects and career opportunities by following us on social media.
                </p>
                <div className="flex space-x-4">
                  <Button variant="outline" size="sm">LinkedIn</Button>
                  <Button variant="outline" size="sm">Facebook</Button>
                  <Button variant="outline" size="sm">Instagram</Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Career;
