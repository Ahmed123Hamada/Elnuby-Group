import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useTranslatedData } from '../hooks/useTranslatedData';
import  nubyLogo from '../assast/Images/logo/logo-elnuby-footer.png';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const { getWebsiteInfo, getContact } = useTranslatedData();
  
  const websiteInfo = getWebsiteInfo();
  const contact = getContact();

  const socialLinks = [
    { platform: 'facebook', url: '#', icon: Facebook, label: 'Facebook' },
    { platform: 'twitter', url: '#', icon: Twitter, label: 'Twitter' },
    { platform: 'linkedin', url: '#', icon: Linkedin, label: 'LinkedIn' },
    { platform: 'instagram', url: '#', icon: Instagram, label: 'Instagram' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="text-center md:text-left">
            <img src={nubyLogo} alt="Elnuby Logo" className="h-12 w-auto mb-4 mx-auto md:mx-0" />
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              {t('heroSubtitle')}
            </p>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4 text-white">{t('contact')}</h3>
            <div className="space-y-2">
              <p className="text-gray-400 text-sm flex items-center justify-center md:justify-start">
                <Phone size={16} className="mr-2" />
                {contact.phone}
              </p>
              <p className="text-gray-400 text-sm flex items-center justify-center md:justify-start">
                <Mail size={16} className="mr-2" />
                {contact.email}
              </p>
              <p className="text-gray-400 text-sm flex items-start justify-center md:justify-start">
                <MapPin size={16} className="mr-2 mt-1 flex-shrink-0" />
                <span>{contact.address}</span>
              </p>
            </div>
          </div>

          {/* Social Media */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4 text-white">{t('followUs')}</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-300 hover:bg-primary-600 hover:text-white transition-colors duration-200"
                    aria-label={social.label}
                  >
                    <IconComponent size={18} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 {websiteInfo.title}. {t('allRightsReserved')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 