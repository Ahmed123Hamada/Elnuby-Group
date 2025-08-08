import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useTranslatedData } from '../hooks/useTranslatedData';
import  nubyLogo from '../assast/Images/logo/logo-elnuby-footer.png';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const { getWebsiteInfo, getAbout, getContact, getNavigation } = useTranslatedData();
  
  const websiteInfo = getWebsiteInfo();
  const about = getAbout();
  const contact = getContact();
  const navigation = getNavigation();

  const socialIcons = {
    facebook: Facebook,
    twitter: Twitter,
    linkedin: Linkedin,
    instagram: Instagram
  };

  return (
    <footer className="bg-gray-900 text-white overflow-hidden">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-md:px-5">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center space-x-3 rtl:space-x-reverse mb-6">
              <img src={nubyLogo} alt="Elnuby Logo" className="h-20 w-auto  max-md:mx-auto" />
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {about.content.substring(0, 200)}...
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4 rtl:space-x-reverse">
              {[
                { platform: 'facebook', url: '#', icon: Facebook },
                { platform: 'twitter', url: '#', icon: Twitter },
                { platform: 'linkedin', url: '#', icon: Linkedin },
                { platform: 'instagram', url: '#', icon: Instagram }
              ].map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-300 hover:bg-primary-600 hover:text-white transition-colors duration-200"
                  >
                    <IconComponent size={20} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6">{t('quickLinks')}</h3>
            <ul className="space-y-3">
              {navigation.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6">{t('contactInformation')}</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 rtl:space-x-reverse">
                <MapPin className="text-primary-400 flex-shrink-0 mt-1" size={16} />
                <span className="text-gray-300 text-sm">{contact.address}</span>
              </div>
              <div className="flex items-start space-x-3 rtl:space-x-reverse">
                <Phone className="text-primary-400 flex-shrink-0 mt-1" size={16} />
                <span className="text-gray-300 text-sm">{contact.phone}</span>
              </div>
              <div className="flex items-start space-x-3 rtl:space-x-reverse">
                <Mail className="text-primary-400 flex-shrink-0 mt-1" size={16} />
                <span className="text-gray-300 text-sm">{contact.email}</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 {websiteInfo.title}. {t('allRightsReserved')}
            </p>
            <div className="flex space-x-6 rtl:space-x-reverse">
              <Link
                to="/privacy"
                className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
              >
                {t('privacyPolicy')}
              </Link>
              <Link
                to="/terms"
                className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
              >
                {t('termsOfService')}
              </Link>
              <Link
                to="/sitemap"
                className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
              >
                {t('sitemap')}
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 