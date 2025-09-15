import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, Globe, Building2, Flag } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useTranslatedData } from '../hooks/useTranslatedData';
import  nubyLogo from '../assast/Images/logo/nubylogo.png';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { getWebsiteInfo, getContact } = useTranslatedData();
  
  const websiteInfo = getWebsiteInfo();
  const contact = getContact();

  const handleBranchClick = () => {
    navigate('/contact');
  };

  // Country Flag Components
  const LibyaFlag = () => (
    <div className="w-7 h-5 rounded-sm overflow-hidden border border-gray-500 shadow-sm">
      <div className="h-1/3 bg-red-600"></div>
      <div className="h-1/3 bg-black flex items-center justify-center">
        <div className="w-2 h-2 bg-white rounded-full flex items-center justify-center">
          <span className="text-red-600 text-xs">☪</span>
        </div>
      </div>
      <div className="h-1/3 bg-green-600"></div>
    </div>
  );

  const IraqFlag = () => (
    <div className="w-7 h-5 rounded-sm overflow-hidden border border-gray-500 shadow-sm">
      <div className="h-1/3 bg-red-600"></div>
      <div className="h-1/3 bg-white flex items-center justify-center">
        <span className="text-green-600 text-xs font-bold" style={{fontSize: '6px'}}>الله أكبر</span>
      </div>
      <div className="h-1/3 bg-black"></div>
    </div>
  );

  const EgyptFlag = () => (
    <div className="w-7 h-5 rounded-sm overflow-hidden border border-gray-500 shadow-sm">
      <div className="h-1/3 bg-red-600"></div>
      <div className="h-1/3 bg-white flex items-center justify-center relative">
        <div className="w-3 h-2 bg-yellow-500 rounded-sm flex items-center justify-center">
          <span className="text-black text-xs" style={{fontSize: '8px'}}>🦅</span>
        </div>
      </div>
      <div className="h-1/3 bg-black"></div>
    </div>
  );

  const SaudiFlag = () => (
    <div className="w-7 h-5 rounded-sm overflow-hidden border border-gray-500 shadow-sm bg-green-600 flex flex-col items-center justify-center relative">
      <span className="text-white text-xs font-bold" style={{fontSize: '8px'}}>لا إله إلا الله</span>
      <span className="text-white text-xs" style={{fontSize: '10px'}}>⚔️</span>
    </div>
  );

  const branches = [
    { 
      label: t('branchLibya'), 
      flag: LibyaFlag,
      color: 'bg-primary-500/10 text-primary-400 border-primary-500/20',
      hoverColor: 'hover:bg-primary-500/20 hover:border-primary-500/40'
    },
    { 
      label: t('branchIraq'), 
      flag: IraqFlag,
      color: 'bg-primary-500/10 text-primary-400 border-primary-500/20',
      hoverColor: 'hover:bg-primary-500/20 hover:border-primary-500/40'
    },
    { 
      label: t('branchEgypt'), 
      flag: EgyptFlag,
      color: 'bg-primary-500/10 text-primary-400 border-primary-500/20',
      hoverColor: 'hover:bg-primary-500/20 hover:border-primary-500/40'
    },
    { 
      label: t('SaudiArabia'), 
      flag: SaudiFlag,
      color: 'bg-primary-500/10 text-primary-400 border-primary-500/20',
      hoverColor: 'hover:bg-primary-500/20 hover:border-primary-500/40'
    }
  ];

  const socialLinks = [
    { platform: 'facebook', url: '#', icon: Facebook, label: 'Facebook' },
    { platform: 'twitter', url: '#', icon: Twitter, label: 'Twitter' },
    { platform: 'linkedin', url: '#', icon: Linkedin, label: 'LinkedIn' },
    { platform: 'instagram', url: '#', icon: Instagram, label: 'Instagram' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-3 text-center lg:text-left">
            <img src={nubyLogo} alt="Elnuby Logo" className=" w-auto  mb-4 mx-auto lg:mx-0"  style={{ height: '120px' }} />
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto lg:mx-0">
              {t('heroSubtitle')}
            </p>
          </div>

          {/* Company Branches */}
          <div className="lg:col-span-4 text-center lg:text-left">
            <h3 className="text-lg font-semibold mb-4 text-white flex items-center justify-center lg:justify-start">
              <Building2 className="w-5 h-5 mr-2 text-primary-500" />
              {t('companyBranches')}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-md md:max-w-lg mx-auto lg:mx-0 w-full">
              {branches.map((branch, index) => {
                const FlagComponent = branch.flag;
                return (
                  <div
                  // handleBranchClick 
                  
                    key={index}
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                      handleBranchClick();
                    }}
                    className={`group relative w-full p-2 sm:p-3 rounded-xl border backdrop-blur-sm cursor-pointer transition-all duration-300 hover:shadow-md ${branch.color} ${branch.hoverColor}`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0">
                        <div className="p-1.5 sm:p-2 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                          <FlagComponent />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0 text-left">
                        <p className="text-[11px] sm:text-xs font-medium text-white group-hover:text-white transition-colors duration-300 leading-tight truncate">
                          {branch.label}
                        </p>

                      </div>
                      <div className="absolute top-1.5 right-1.5 sm:top-2 sm:right-2">
                        <div className="w-4 h-4 rounded-full bg-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                          <MapPin className="w-2 h-2 text-white" />
                        </div>
                      </div>
                    </div>
                    
                    {/* Hover effect overlay */}
                    <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3 text-center lg:text-left">
            <h3 className="text-lg font-semibold mb-4 text-white flex items-center justify-center lg:justify-start">
              <Phone className="w-5 h-5 mr-2 text-primary-500" />
              {t('contact')}
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-center lg:justify-start group">
                <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center mr-3 group-hover:bg-primary-600 transition-colors duration-300">
                  <Phone size={14} className="text-gray-300 group-hover:text-white" />
                </div>
                <span className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                  {contact.phone}
                </span>
              </div>
              
              <div className="flex items-center justify-center lg:justify-start group">
                <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center mr-3 group-hover:bg-primary-600 transition-colors duration-300">
                  <Mail size={14} className="text-gray-300 group-hover:text-white" />
                </div>
                <span className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                  {contact.email}
                </span>
              </div>
              
              <div className="flex items-start justify-center lg:justify-start group">
                <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center mr-3 mt-0 flex-shrink-0 group-hover:bg-primary-600 transition-colors duration-300">
                  <MapPin size={14} className="text-gray-300 group-hover:text-white" />
                </div>
                <span className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {contact.address}
                </span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="lg:col-span-2 text-center lg:text-left">
            <h3 className="text-lg font-semibold mb-4 text-white flex items-center justify-center lg:justify-start">
              <Instagram className="w-10 h-5 mr-2 text-primary-500" />
              {t('followUs')}
            </h3>
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 sm:p-4 md:p-5 bg-gray-800 rounded-xl flex items-center justify-center text-gray-300 hover:bg-primary-600 hover:text-white transition-all duration-300 hover:shadow-lg"
                    aria-label={social.label}
                  >
                    <IconComponent size={18} />
                  </a>
                );
              })}
            </div>
            
            {/* Newsletter Signup removed as requested */}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-6">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-3 lg:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 {websiteInfo.title}. {t('allRightsReserved')}
            </p>
            
            <div className="flex flex-wrap justify-center lg:justify-end gap-x-6 gap-y-2 text-sm">
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors duration-300">
                {t('privacyPolicy')}
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors duration-300">
                {t('termsOfService')}
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors duration-300">
                {t('cookiePolicy')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 