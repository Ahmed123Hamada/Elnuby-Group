import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', phone: '', company: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'info@elnuby.com',
      description: 'Send us an email anytime',
      link: 'mailto:info@elnuby.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+20 123 456 789',
      description: 'Call us during business hours',
      link: 'tel:+20123456789',
    },
    {
      icon: MapPin,
      title: 'Office',
      value: 'Cairo, Egypt',
      description: 'Visit our main office',
      link: '#',
    },
    {
      icon: Clock,
      title: 'Working Hours',
      value: 'Mon - Fri: 9AM - 6PM',
      description: 'We\'re here to help',
      link: '#',
    },
  ];

  const departments = [
    {
      name: 'General Inquiries',
      email: 'info@elnuby.com',
      description: 'For general questions and information',
    },
    {
      name: 'Project Management',
      email: 'projects@elnuby.com',
      description: 'For project-related inquiries',
    },
    {
      name: 'Technical Support',
      email: 'support@elnuby.com',
      description: 'For technical questions and support',
    },
    {
      name: 'Business Development',
      email: 'business@elnuby.com',
      description: 'For partnership and business opportunities',
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-primary-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="container-custom section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              {t('contactTitle')}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t('contactSubtitle')}
            </p>
            <p className="text-gray-600 dark:text-gray-300 mt-4">
              {t('contactDescription')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Send us a Message
              </h2>
              
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <CheckCircle className="text-green-500 mx-auto mb-4" size={48} />
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Thank you for contacting us. We'll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        {t('name')} *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-200"
                        placeholder="Your name"
                      />
                    </div>
                    
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
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-200"
                        placeholder="Your phone number"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-200"
                        placeholder="Your company"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-200"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="project">Project Inquiry</option>
                      <option value="quote">Request Quote</option>
                      <option value="partnership">Partnership</option>
                      <option value="support">Technical Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {t('message')} *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-200 resize-none"
                      placeholder="Tell us about your project or inquiry..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="btn-primary w-full flex items-center justify-center space-x-2 group"
                  >
                    <span>{t('sendMessage')}</span>
                    <Send size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
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
                  Get in Touch
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                  Ready to start your next project? We'd love to hear from you. 
                  Contact us today to discuss your engineering needs and how we can help bring your vision to life.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.link}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                  >
                    <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="text-primary-600 dark:text-primary-400" size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                        {info.title}
                      </h4>
                      <p className="text-primary-600 dark:text-primary-400 font-medium mb-1">
                        {info.value}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        {info.description}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Map Placeholder */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl p-8 text-white"
              >
                <h4 className="text-xl font-semibold mb-4">Visit Our Office</h4>
                <p className="mb-4 opacity-90">
                  Located in the heart of Cairo, our office is easily accessible 
                  and ready to welcome you for a consultation.
                </p>
                <button className="btn-secondary border-white text-white hover:bg-white hover:text-primary-600">
                  Get Directions
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Departments Section */}
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
              Contact Our Departments
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Get in touch with the right team for your specific needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {departments.map((dept, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 card-hover"
              >
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="text-primary-600 dark:text-primary-400" size={32} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {dept.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {dept.description}
                </p>
                <a
                  href={`mailto:${dept.email}`}
                  className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium text-sm"
                >
                  {dept.email}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Find answers to common questions about our services and processes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                question: 'What services does El Nuby provide?',
                answer: 'We provide comprehensive engineering services including design, construction management, consulting, and maintenance for various types of projects.',
              },
              {
                question: 'How long does a typical project take?',
                answer: 'Project duration varies based on complexity and scope. Small projects may take 3-6 months, while large projects can take 1-3 years.',
              },
              {
                question: 'Do you work internationally?',
                answer: 'Yes, we have experience working on international projects and can provide services globally.',
              },
              {
                question: 'What is your project management approach?',
                answer: 'We use a collaborative approach with regular client communication, detailed planning, and quality control throughout the project lifecycle.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 